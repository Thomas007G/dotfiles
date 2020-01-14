var W2gSync = (function () {
    "use strict";

    var player = null, my, playerport;

    my = {
        play : function(){
            return player.play();
        },
        pause : function() {
            return player.pause();
        },
        seek : function(time){
            player.currentTime = time;
        },
        checkUrl : function(url) {
            return window.location.href.split("#")[0] === url.split("#")[0];
        }
    };

    Object.defineProperty(my, "player", {
        get: function () {
            return player;
        }
    });

    Object.defineProperty(my, "port", {
        get: function () {
            return playerport;
        }
    });

    browser.runtime.onConnect.addListener(function (port) {

        playerport = port;

        var syncUrl = null, w2gMessage, videoHasPlayed = false, canSync = true, skipPlay = false, skipPause = false,
            triggerEvent = true, vidScore = 0, checkIntervall, videoIntervall = null;

        port.onMessage.addListener(function (msg) {
            if (player && msg.play) {
                if (player.paused === true) {
                    triggerEvent = false;
                    my.play().finally(function(){
                        triggerEvent = true;
                    });
                }
            } else if (player && msg.pause) {
                if (player.paused === false) {
                    triggerEvent = false;
                    my.pause();
                    setTimeout(function(){
                        triggerEvent = true;
                    }, 100);
                }
            } else if (player && msg.seek) {
                var wasPlaying = false;
                if (player.paused === false) {
                    wasPlaying = true;
                    skipPause = true;
                    my.pause(); 
                }
                my.seek(msg.seek);
                if (wasPlaying) {
                    skipPlay = true;
                    my.play();
                }
            } else if (msg.syncUrl) {
                syncUrl = msg.syncUrl;
            } else if (typeof msg.videofound !== "undefined" && canSync) {
                w2gMessage.style.backgroundColor = "green";
                w2gMessage.textContent = "Watch2Gether: Video found";
            }
        });

        function init() {
            //Insert Toolbar only at top frame
            if (self === top) {
                document.getElementsByTagName("html")[0].style.marginTop = "18px";

                w2gMessage = document.createElement("div");
                w2gMessage.textContent = "Watch2Gether: Searching for video... (You might need to press PLAY if the video is not found)";
                w2gMessage.setAttribute("id", "w2g_sync_panel");
                document.body.appendChild(w2gMessage);
                w2gMessage.addEventListener("mouseover", function () {
                    if (player) {
                        player.classList.add("w2g-sync-highlight");
                    }
                });
                w2gMessage.addEventListener("mouseout", function () {
                    if (player) {
                        player.classList.remove("w2g-sync-highlight");
                    }
                });
            }

            videoIntervall = setInterval(attachToVideo, 1000);

            setInterval(function(){
                if(!my.checkUrl(syncUrl) && self === top){
                    canSync = false;
                    showResyncBar();
                }
            }, 1000);

        }

        checkIntervall = setInterval(function (){
            if(document.body){
                init();
                clearInterval(checkIntervall);
            }
        }, 200);

        function handlePlay(evt) {
            if(triggerEvent && !skipPlay) {
                port.postMessage({"durationchange": player.duration});
                port.postMessage({"play": true});
            }
            skipPlay = false;
        }

        function handlePause() {
            if (triggerEvent && videoHasPlayed && !skipPause) {
                port.postMessage({"pause": true});
            }
            skipPause = false;
        }

        function handleTimeUpdate() {
            port.postMessage({"timeupdate": player.currentTime});
            videoHasPlayed = true;
        }

        function handleDurationChange() {
            port.postMessage({"durationchange": player.duration});
        }

        function handleEnded() {
            port.postMessage({"ended": true});
        }

        function showResyncBar(){
            if(!document.querySelector(".w2g_resync_bar")) {
                port.postMessage({"unsync": true});
                w2gMessage.textContent = "Watch2Gether: This site is possibly out of sync. ";
                w2gMessage.classList.add("w2g_resync_bar");
                w2gMessage.style.backgroundColor = "red";

                var resyncNote = document.createElement("span");
                resyncNote.classList.add("w2g_panel_button");
                resyncNote.textContent = "Resync";
                resyncNote.addEventListener("click", function () {
                    window.location.href = syncUrl;
                });
                w2gMessage.appendChild(resyncNote);

                var setNote = document.createElement("span");
                setNote.textContent = "Set as new ";
                setNote.classList.add("w2g_panel_button");
                setNote.addEventListener("click", function () {
                    if (port) {
                        port.postMessage({"newurl": {url: window.location.href, title: document.title}});
                    }
                });
                w2gMessage.appendChild(setNote);
            }
        }

        function attachToVideo() {
            var videos = document.getElementsByTagName("video"), i, selectedVideo;
            if (videos.length > 0) {
                for (i = 0; i < videos.length; i++) {
                    if(videos[i].readyState > 0 && videos[i].offsetParent !== null){
                        var score = videos[i].videoHeight * videos[i].videoWidth * (videos[i].duration + 1);
                        if(score > vidScore){
                            vidScore = score;
                            selectedVideo = videos[i];
                        }
                    }
                }

                if (selectedVideo && selectedVideo !== player) {
                    removeListeners(player);
                    player = selectedVideo;
                    addListeners(player);
                    port.postMessage({"videofound": vidScore});
                    port.postMessage({"durationchange": player.duration});
                    if(player.paused){
                        port.postMessage({"pause": true});
                    } else {
                        port.postMessage({"play": true});
                    }
                }
            }
        }

        function addListeners(video){
            if(video){
                player.addEventListener("play", handlePlay);
                player.addEventListener("pause", handlePause);
                player.addEventListener("timeupdate", handleTimeUpdate);
                player.addEventListener("durationchange", handleDurationChange);
                player.addEventListener("ended", handleEnded);
            }
        }

        function removeListeners(video){
            if(video){
                player.removeEventListener("play", handlePlay);
                player.removeEventListener("pause", handlePause);
                player.removeEventListener("timeupdate", handleTimeUpdate);
                player.removeEventListener("durationchange", handleDurationChange);
                player.removeEventListener("ended", handleEnded);
            }
        }

        window.addEventListener("beforeunload", function(){
           triggerEvent = false;
        });

    });

    return my;

}());