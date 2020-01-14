var W2gProviders = ( function(my) {

    "use strict";

    //Load Youtube API and init player
    function W2gInstagram() {
        this.provider_name = "instagram";
        this.provider_type = "search";
        this.icon_path = "/static/providers/12.png";
        this.description = "Paste a link to an Instagram post or IGTV video";
        this.active = false;
        this.defaultSearch = "new";
        this.saveSearch = false;
    }

    //Lookup video info through youtube API
    W2gInstagram.prototype.videoLookUp = function(url, callback) {

        var id,
            clip;

        if (url.match(/^https?:\/\/www.instagram.com\/(p|tv)\/\S+$/)) {
            id = url.split("/").pop();
            $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/badger_api/api/ig/lookup?q=" + url).then(function(v) {
                clip = {};
                clip.id = v.url;
                clip.provider = this.provider_name;
                clip.title = v.title;
                clip.publisher = v.user;
                //clip.publisherID = v.user_url;
                clip.desc = "";
                clip.price = "";
                clip.thumb = v.imgurl;
                clip.duration = 0;
                clip.cc = false;
                clip.explicit = false;
                callback([clip], "instagram");
            }.bind(this)).catch(function(){
                callback([], "instagram");
            }.bind(this));
            return true;
        } else {
            return false;
        }
    };

    W2gInstagram.prototype.search = function(term, count, page, callback) {
        callback([], "instagram");
    };

    my.push(W2gInstagram);

    return my;

}(W2gProviders || []));
