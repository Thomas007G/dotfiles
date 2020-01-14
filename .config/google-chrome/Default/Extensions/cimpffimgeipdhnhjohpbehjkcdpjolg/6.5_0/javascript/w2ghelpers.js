var $w2g = (function () {

    //Polyfills

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    var exp = {}, doneProm = {}, uniqueCB = 0,
        readyProm = new Promise(function(resolve, reject){
            if(document.readyState === 'loading'){
                document.addEventListener("DOMContentLoaded", resolve);
            } else {
                resolve();
            }
        }),
        autoPlayProm = new Promise(function(mres, mrej) {
            var vblob = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {type: 'video/mp4'});
            var vurl = URL.createObjectURL(vblob);
            var vele = document.createElement("video");
            vele.src = vurl;
            vele.play().then(function () {
                mres(true);
            }).catch(function () {
                mres(false);
            });
            setTimeout(function(){ 
                mres(false);
            }, 2000);
        }),
        consentProm = new Promise(function(cres, crej){
            if(window.__cmp) {
                window.__cmp("getPublisherConsents", null, function (obj, res) {
                    cres();
                });
            }
        });

    readyProm.then(function(){
        var dimmer = document.querySelector("#site-dimmer");
        if(dimmer) {
            dimmer.addEventListener("click", function (evt) {
                if (evt.target == dimmer) {
                    exp.hideModal();
                } else if (evt.target.classList.contains("cancel")) {
                    exp.hideModal();
                }
            });
        }
    });

    exp.showModal = function(ele, nodim){

        if(doneProm[ele] && typeof doneProm[ele] === "function"){
            doneProm[ele]();
            doneProm[ele] = null;
        }

        return new Promise(function(resolve, reject){
            doneProm[ele] = resolve;
            var node = document.querySelector(ele);
            if(node) {
                document.querySelector("#site-dimmer").classList.remove("hidden");
                document.querySelector("#site-dimmer").classList.add("visible", "active");
                node.classList.remove("hidden");
                node.classList.add("visible", "active");
                node.scrollTop = 0;
                if(nodim) {
                    document.querySelector("body").classList.add("w2g-no-dimmer");
                }
            } else {
                doneProm[ele]();
            }
        });
    };

    exp.scrollDiv = function(scrollContainer, scrollTo, duration){

        return new Promise(function(resolve, reject){

            var steps = duration / 1000 * 60,
                step = (scrollTo - scrollContainer.scrollTop) / steps,
                counter = 0;

            function tick() {
                if (++counter < steps) {
                    scrollContainer.scrollTop += step;
                    window.requestAnimationFrame(tick);
                } else {
                    scrollContainer.scrollTop = scrollTo;
                    resolve();
                }
            }
            tick();

        });
    };

    exp.hideModal = function(id){
        if(!id || document.querySelector(id)) {
            var dimmer = document.querySelector("#site-dimmer");
            dimmer.querySelectorAll(".modal").forEach(function (ele) {
                ele.classList.remove("visible", "active");
                ele.classList.add("hidden");
            });
            dimmer.classList.remove("visible", "active");
            dimmer.classList.add("hidden");
            document.querySelector("body").classList.remove("w2g-no-dimmer");
            for(var cb in doneProm){
                if(doneProm.hasOwnProperty(cb) && typeof doneProm[cb] === "function"){
                    doneProm[cb]();
                }
            }
        }
    };

    exp.loadAssets = function(assets){

        var counter = 0, id;
        if(typeof assets === "string"){
          assets = [assets];
        }

        return new Promise(function(resolve, reject)
        {
            for (var i = 0; i < assets.length; i++) {
                id = "w2gasset_" + genHash(assets[i]);
                if(document.querySelector("#" + id)) {
                    checkComplete();
                } else {
                    if (assets[i].endsWith(".js")) {
                        var script = document.createElement("script");
                        script.addEventListener("load", checkComplete);
                        script.setAttribute("src", assets[i]);
                        script.setAttribute("id", id);
                        document.getElementsByTagName("head")[0].appendChild(script);
                    } else if (assets[i].endsWith(".css")) {
                        var link = document.createElement("link");
                        link.addEventListener("load", checkComplete);
                        link.setAttribute("href", assets[i]);
                        link.setAttribute("type", "text/css");
                        link.setAttribute("rel", "stylesheet");
                        link.setAttribute("id", id);
                        link.setAttribute("media", "screen,print");
                        document.getElementsByTagName("head")[0].appendChild(link);
                    }
                }
            }

            function checkComplete(){
                counter++;
                if(counter === assets.length){
                    resolve();
                }
            }

            function genHash(str){
                var hash = 0;
                if (str.length === 0) {
                    return hash;
                }
                for (var i = 0; i < str.length; i++) {
                    var char = str.charCodeAt(i);
                    hash = ((hash<<5)-hash)+char;
                    hash = hash & hash;
                }
                return hash;
            }

        });

    };

    exp.querySelector = function(sel){
        return document.querySelector(sel) || document.createElement("DIV");
    };

    exp.domReady = function(){
        return readyProm;
    };

    exp.canAutoPlay = function(){
        return autoPlayProm;
    };

    exp.consentGiven = function(){
        return consentProm;
    };

    exp.show = function(selector, mode){
        document.querySelectorAll(selector).forEach(function(ele){
            ele.style.display = mode || "block";
        });
    };

    exp.hide = function(selector){
        document.querySelectorAll(selector).forEach(function(ele){
            ele.style.display = "none";
        });
    };

    exp.fetchJSONP = function(url, callback){

        var name = "_jsonp_" + uniqueCB++;
        if (url.match(/\?/)){
            url += "&callback="+name;
        } else {
            url += "?callback="+name;
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        window[name] = function(data){
            callback(data);
            document.getElementsByTagName('head')[0].removeChild(script);
            script = null;
            delete window[name];
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    exp.postJSON = function(url, data, method){
        data = data || {};
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: method || 'POST',
                credentials: "same-origin",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(function(data){
                if(data.ok){
                    data.json().then(function(json){
                        resolve(json);
                    }).catch(function(){
                        resolve();
                    });
                } else {
                    data.json().then(function(json){
                        reject(json);
                    }).catch(function(){
                        reject();
                    });
                }
            }).catch(reject);
        });
    };

    exp.getJSON = function(url, method, headers){
       return new Promise(function(resolve, reject){
           fetch(url, {method: method || 'GET', credentials: "same-origin", headers: headers || {}}).then(function(data){
               if(data.ok){
                   data.json().then(function(json){
                       resolve(json);
                   }).catch(function(){
                       resolve();
                   });
               } else {
                   data.json().then(function(json){
                       reject(json);
                   }).catch(function(){
                       reject();
                   });
               }
           }).catch(reject);
       });
    };

    exp.getScript = function(source){
        return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            var prior = document.getElementsByTagName('script')[0];
            script.async = 1;
            script.onload = script.onreadystatechange = function(evt, isAbort) {
                if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
                    script.onload = script.onreadystatechange = null;
                    script = undefined;
                    if(!isAbort) { resolve(); }
                }
            };
            script.src = source;
            prior.parentNode.insertBefore(script, prior);
        });
    };

    exp.storageAvailable = function(type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                    // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    };

    return exp;

})();
