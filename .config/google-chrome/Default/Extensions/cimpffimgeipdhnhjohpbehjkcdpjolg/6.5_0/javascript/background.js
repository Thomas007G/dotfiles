(function () {

    var w2gConnections = {};

    function Connection(w2gPort){
        "use strict";

        var m = {
            id : w2gPort.sender.id
        }, syncUrl, controlledWindow = null, controlledFrame = null, vidScore = -1, topFrame = null, unSync = false, skipreset = false;

        w2gPort.onMessage.addListener(function(msg, sender){
            if(msg.openSite){
                if(msg.openSite.url.match(/^https:\/\/.*netflix.com/)){
                    msg.openSite.url = msg.openSite.url.replace(/[?&]{1}t=\d+/g, '');
                    var parts = msg.openSite.url.split("?");
                    msg.openSite.url = parts[0] + "?" + (parts[1] ? parts[1] + "&t=0" : "t=0");
                }
                if(controlledWindow === null) {
                    topFrame = null;
                    controlledFrame = null;
                    if(msg.openSite.auto) {
                        syncUrl = msg.openSite.url;
                        browser.windows.create({
                            left: 10,
                            top: 10,
                            width: 1024,
                            height: 680,
                            type: navigator.userAgent.match(/Chrome/) ? "popup" : "normal",
                            url: syncUrl
                        }).then(function (w) {
                            w2gPort.postMessage({"windowOpened": true});
                            controlledWindow = w;
                        });
                    }
                } else {
                    var tab = browser.tabs.get(controlledWindow.tabs[0].id).then(function(tab){
                       if(syncUrl !== msg.openSite.url) {
                           topFrame = null;
                           controlledFrame = null;
                           var cur = document.createElement("a"), next = document.createElement("a");
                           cur.href = syncUrl;
                           next.href = msg.openSite.url;
                           if (cur.hostname === next.hostname) {
                               syncUrl = msg.openSite.url;
                               browser.tabs.update(tab.id, {
                                   url: syncUrl
                               });
                           } else {
                               browser.windows.remove(controlledWindow.id);
                               w2gPort.postMessage({"windowClosed": true});
                               controlledWindow = null;
                           }
                       }
                       if(controlledWindow){
                           browser.windows.update(controlledWindow.id, {focused : true});
                       }
                    });
                }
            } else if(msg.closeSite){
                if(controlledWindow){
                    browser.windows.remove(controlledWindow.id);
                    controlledWindow = null;
                }
            } else if(msg.focusSite){
                if(controlledWindow){
                    browser.windows.update(controlledWindow.id, {focused : true});
                }
            } else if(controlledFrame && controlledWindow){
                controlledFrame.port.postMessage(msg);
            }
        });

        m.injectCode = function(detail){
            "use strict";
            if(controlledWindow && controlledWindow.tabs[0].id === detail.tabId && detail.url !== "about:blank") {
                browser.tabs.insertCSS(controlledWindow.tabs[0].id, {file: "/css/content_video.css", frameId : detail.frameId, runAt: "document_start"});
                browser.tabs.executeScript(controlledWindow.tabs[0].id, {file: "/javascript/browser-polyfill.min.js", frameId : detail.frameId, runAt: "document_start"}).then(function () {
                    browser.tabs.executeScript(controlledWindow.tabs[0].id, {file: "/javascript/content_video.js", frameId : detail.frameId, runAt: "document_start"}).then(function () {
                        if(syncUrl.match(/^https:\/\/.*netflix.com/)){
                            browser.tabs.executeScript(controlledWindow.tabs[0].id, {file: "/javascript/plugins/nflx.js", frameId : detail.frameId, runAt: "document_start"}).then(function () {
                                init();
                            });
                        } else {
                            init();
                        }
                        function init() {
                            var cPort = browser.tabs.connect(controlledWindow.tabs[0].id, {frameId : detail.frameId});
                            if(detail.frameId === 0){
                                if(skipreset === false) {
                                    w2gPort.postMessage({"reset": true});
                                }
                                skipreset = false;
                                topFrame = cPort;
                                unSync = false;
                                vidScore = -1;
                            }
                            cPort.postMessage({syncUrl: syncUrl});
                            cPort.onMessage.addListener(function (msg) {
                                if (msg.newurl && detail.frameId === 0) {
                                    browser.tabs.get(detail.tabId).then(function(controlledTab){
                                        w2gPort.postMessage({
                                            "content_loaded": {
                                                url: msg.newurl.url,
                                                title: msg.newurl.title,
                                                thumb: controlledTab.favIconUrl && controlledTab.favIconUrl.startsWith("http") ? controlledTab.favIconUrl : "https://www.watch2gether.com/static/providers/10.png"
                                            }
                                        });
                                    });
                                } else if(msg.unsync) {
                                    unSync = true;
                                } else if(msg.skipreset){
                                    console.log("skip");
                                    skipreset = true;
                                } else if (msg.videofound) {
                                    if(msg.videofound > vidScore){
                                        vidScore = msg.videofound;
                                        controlledFrame = {
                                            frameId: detail.frameId,
                                            port: cPort
                                        };
                                        if(topFrame){
                                            topFrame.postMessage(msg);
                                        }
                                    }
                                } else if(topFrame && controlledFrame && controlledFrame.frameId === detail.frameId && !unSync) {
                                    w2gPort.postMessage(msg);
                                }
                            });
                        }
                    });
                });
            }
        };

        m.windowRemoved = function(id){
           if(controlledWindow && controlledWindow.id === id){
               w2gPort.postMessage({"reset": true});
               w2gPort.postMessage({"windowClosed": true});
               controlledWindow = null;
               controlledFrame = null;
           }
        };

        m.shutdown = function(){
            if(controlledWindow){
                browser.windows.remove(controlledWindow.id);
                controlledWindow = null;
            }
        };

        return m;
    }

    browser.runtime.onInstalled.addListener(function(){
        var scripts = browser.runtime.getManifest().content_scripts[0];
        var windows = browser.windows.getAll(
            {
                populate: true
            }
        ).then(function(windows){
            windows.forEach(function(win){
                win.tabs.forEach(function(tab){
                    if(tab.url){
                        scripts.matches.forEach(function(match){
                            match = match.substring(0, match.length - 1);
                            if(tab.url.indexOf(match) === 0){
                                scripts.js.forEach(function(script){
                                    browser.tabs.executeScript(tab.id, {
                                        file: script
                                    });
                                });
                            }
                        });
                    }
                })
            });
        });
    });

    browser.runtime.onConnect.addListener(function (p){
        "use strict";
        switch(p.name){
            case "w2g_player":
                p.onDisconnect.addListener(function(p){
                    if(w2gConnections[p.sender.url]){
                        w2gConnections[p.sender.url].shutdown();
                        delete w2gConnections[p.sender.url];
                    }
                });
                w2gConnections[p.sender.url] = new Connection(p);
                break;
        }
    });

    browser.windows.onRemoved.addListener(function(id){
        "use strict";
        for(var prop in w2gConnections){
            if(w2gConnections.hasOwnProperty(prop)){
                w2gConnections[prop].windowRemoved(id);
            }
        }
    });

    browser.webNavigation.onDOMContentLoaded.addListener(function(detail){
        "use strict";
        for(var prop in w2gConnections){
            if(w2gConnections.hasOwnProperty(prop)){
                w2gConnections[prop].injectCode(detail);
            }
        }
    });

}());