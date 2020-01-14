var W2gProviders = ( function (my) {

    "use strict";

    //Load Facebook API and init player
    function W2gSync() {
        this.provider_name = "W2gSync";
        this.provider_type = "search";
        this.icon_path = "/static/providers/10.png";
        this.active = false;
        this.description = "Paste a link to any website that contains a video into the searchbar.";
    }

    W2gSync.prototype.videoLookUp = function (url, callback) {
        var res = url.match(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_\+.~#,?()&/=]*)$/);
        if (res) {
            var info = {};
            info.id = res[0];
            info.provider = this.provider_name;
            info.title = res[0];
            info.publisher = "";
            info.desc = "";
            info.price = "";
            info.thumb = "/static/providers/10.png";
            info.cc = false;
            info.duration = 0;
            info.explicit = false;
            callback([info], this.provider_name);
            return true
        } else {
            return false;
        }
    };

    //Search for video through facebook API
    W2gSync.prototype.search = function (term, count, page, callback) {
        callback([], this.provider_name);
    };

    my.push(W2gSync);

    return my;

}(W2gProviders || []));
