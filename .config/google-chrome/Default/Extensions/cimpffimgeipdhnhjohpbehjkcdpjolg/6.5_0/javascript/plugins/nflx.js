(function(){

    W2gSync.seek = function (time) {
        var distance = Math.abs(W2gSync.player.currentTime - time);
        if(distance > 10) {
            W2gSync.port.postMessage({"skipreset": true});
            var currentUrl = window.location.href.replace(/[?&]{1}t=\d+/g, '');
            var seekTime = Math.round(time + (W2gSync.player.paused ? 0 : 4));
            var parts = currentUrl.split("?");
            currentUrl = parts[0] + "?" + (parts[1] ? parts[1] + "&t=" : "t=") + seekTime;
            window.location.href = currentUrl;
        }
    };

    W2gSync.checkUrl = function (url) {
        var cur = window.location.href.replace(/[?&]{1}t=\d+/g, '');
        var sync = url.replace(/[?&]{1}t=\d+/g, '');
        return cur === sync;
    };

    return true;

}());

