(function () {

    "use strict";

    var extPort = browser.runtime.connect({name : "w2g_player"});

    extPort.onMessage.addListener(function(msg){
       msg._skipForward = true;
       window.postMessage(msg, "*");
    });

    window.addEventListener("message", function(event) {
        if(event.origin === window.origin) {
            if (event.data && !event.data._skipForward) {
                extPort.postMessage(event.data);
            }
        }
    });

    var checkEle = document.createElement("div");
    checkEle.setAttribute("id", "w2g-extension-loaded");
    checkEle.setAttribute("data-version", browser.runtime.getManifest().version);
    checkEle.style.display = "none";
    document.body.appendChild(checkEle);
    window.postMessage({w2g_extension_running : true});
}());