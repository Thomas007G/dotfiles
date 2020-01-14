var W2gProviders = ( function(my) {

    "use strict";

    //Load Youtube API and init player
    function W2gCoub() {
        this.provider_name = "coub";
        this.provider_type = "search";
        this.icon_path = "/static/providers/11.png";
        this.description = "Search OR Paste a link to a Coub video";
        this.active = false;
        this.defaultSearch = "new";
        this.saveSearch = false;
    }

    //Lookup video info through youtube API
    W2gCoub.prototype.videoLookUp = function(url, callback) {

        var id,
            clip,
            v,
            parser;

        parser = document.createElement('a');
        parser.href = url;

        if (parser.host.indexOf("coub") === 0) {
            id = url.split("/").pop();
            $w2g.getJSON("https://europe-west1-divine-course-232115.cloudfunctions.net/coubLookup?id=" + id).then(function(v) {
                clip = {};
                clip.id = "https://coub.com/view/" + v.permalink;
                clip.provider = this.provider_name;
                clip.title = v.title;
                clip.publisher = v.channel.title;
                clip.publisherID = null;
                clip.desc = "";
                clip.price = "";
                clip.thumb = v.picture;
                clip.duration = 0;
                clip.cc = false;
                clip.explicit = false;
                callback([clip], "coub");
            }.bind(this));
            return true;
        } else {
            return false;
        }
    };

    W2gCoub.prototype.search = function(term, count, page, callback) {

        function parseResponse(data) {
            var results = [],
                clip;
            data.coubs.forEach(function(v, i) {
                clip = {};
                clip.id = "https://coub.com/view/" + v.permalink;
                clip.provider = this.provider_name;
                clip.title = v.title;
                clip.publisher = v.channel.title;
                clip.publisherID = null;
                clip.date = new Date(v.created_at).toDateString();
                clip.desc = "";
                clip.price = "";
                clip.thumb = v.picture;
                results.push(clip);
            }.bind(this));
            callback(results, "coub");
        }

        if (term !== "") {
            $w2g.getJSON("https://europe-west1-divine-course-232115.cloudfunctions.net/coubSearch?q=" + encodeURIComponent(term) + "&page=" + page).then(parseResponse.bind(this));
        } else {
            $w2g.getJSON("https://europe-west1-divine-course-232115.cloudfunctions.net/coubSearch?q=funny&page=" + page).then(parseResponse.bind(this));
        }

    };

    my.push(W2gCoub);

    return my;

}(W2gProviders || []));
