var W2gProviders = ( function(my) {

    "use strict";

    //Load Youtube API and init player
    function W2gTwitter() {
        this.provider_name = "twitter";
        this.provider_type = "search";
        this.icon_path = "/static/providers/14.png";
        this.description = "Search OR Paste a link to a Tweet";
        this.active = false;
        this.defaultSearch = "new";
        this.saveSearch = false;
    }

    //Lookup video info through youtube API
    W2gTwitter.prototype.videoLookUp = function(url, callback) {

        var id,
            clip,
            v;

        var matches = url.match(/^https?:\/\/(mobile\.)?twitter\.com.+status(es)?\/([0-9]+)/);

        if (matches && matches.length === 4) {
            $w2g.getJSON("/badger_api/api/tw/lookup?id=" + matches[3]).then(function(v) {
                clip = {};
                clip.id = "https://twitter.com/statuses/" + v.id_str;
                clip.provider = this.provider_name;
                clip.title = v.text;
                clip.publisher = v.user.name;
                //clip.publisherID = null;
                clip.desc = "";
                clip.price = "";
                try {
                    clip.thumb = v.extended_entities.media[0].media_url_https;
                } catch(e) {
                    clip.thumb = v.user.profile_image_url_https;
                }
                clip.duration = 0;
                clip.cc = false;
                clip.explicit = false;
                callback([clip], this.provider_name);
            }.bind(this));
            return true;
        } else {
            return false;
        }
    };

    W2gTwitter.prototype.search = function(term, count, page, callback) {

        $w2g.getJSON("/badger_api/api/tw/search?q=" + (term || "funny")).then( function (data) {

            var results = [],
                clip;

            data.statuses.forEach(function(v, i) {
                clip = {};
                clip.id = "https://twitter.com/statuses/" + v.id_str;
                clip.provider = this.provider_name;
                clip.title = v.text;
                clip.publisher = v.user.name;
                //clip.publisherID = null;
                clip.date = new Date(v.created_at).toDateString();
                clip.desc = "";
                clip.price = "";
                try {
                    clip.thumb = v.extended_entities.media[0].media_url_https;
                } catch(e) {
                    clip.thumb = v.user.profile_image_url_https;
                }
                results.push(clip);
            }.bind(this));
            callback(results, this.provider_name);
        }.bind(this)).catch(function() {
            callback([], this.provider_name);
        }.bind(this));

    };

    my.push(W2gTwitter);

    return my;

}(W2gProviders || []));
