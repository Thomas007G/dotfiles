var W2gProviders = ( function(my) {

    "use strict";

    //Load Youtube API and init player
    function W2gInstagram() {
        this.provider_name = "slides";
        this.provider_type = "search";
        this.icon_path = "/static/providers/15.png";
        this.description = "Paste a link to a slides.com presentation";
        this.active = false;
        this.defaultSearch = "new";
        this.saveSearch = false;
    }

    //Lookup video info through youtube API
    W2gInstagram.prototype.videoLookUp = function(url, callback) {

        var clip,
            matches = url.match(/^https:\/\/([\w]+\.)?slides.com\/[\w-]+\/[\w-]+/);

        if (matches && matches.length === 2) {
            $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/badger_api/api/slides/lookup?q=" + url).then(function(v) {
                clip = {};
                clip.id = v.url;
                clip.provider = this.provider_name;
                clip.title = v.title;
                clip.publisher = matches[1];
                //clip.publisherID = v.user_url;
                clip.desc = "";
                clip.price = "";
                clip.thumb = v.imgurl;
                clip.duration = 0;
                clip.cc = false;
                clip.explicit = false;
                callback([clip], this.provider_name);
            }.bind(this)).catch(function(){
                callback([], this.provider_name);
            }.bind(this));
            return true;
        } else {
            return false;
        }
    };

    W2gInstagram.prototype.search = function(term, count, page, callback) {
        callback([], this.provider_name);
    };

    my.push(W2gInstagram);

    return my;

}(W2gProviders || []));
