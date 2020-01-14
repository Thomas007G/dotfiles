var W2gProviders = ( function(my) {

		"use strict";

		function W2gDeezer() {
			this.provider_name = "deezer";
			this.provider_type = "search";
            this.icon_path = "/static/providers/18.png";
            this.description = "Search OR Paste a link to a Deezer track";
            this.active = false;
			this.defaultSearch = "funky";
			this.saveSearch = false;
		}

		W2gDeezer.prototype.videoLookUp = function(url, callback) {

			var id,
			    clip,
			    v;

			var matches = url.match(/^https?:\/\/www\.deezer\.com\S*\/(track|album|playlist)\/([0-9]+)/);

			if (matches && matches.length === 3) {
			    if(matches[1] === "track") {
                    $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/badger_api/api/deezer/lookup?id=" + matches[2]).then(function (v) {
                        clip = {};
                        clip.id = v.link;
                        clip.provider = this.provider_name;
                        clip.title = v.title;
                        clip.publisher = v.artist.name;
                        clip.publisherID = v.artist.id;
                        clip.desc = "";
                        clip.price = "";
                        clip.thumb = v.album.cover_medium;
                        clip.duration = v.duration;
                        clip.cc = false;
                        clip.explicit = false;
                        callback([clip], "deezer");
                    }.bind(this)).catch(function () {
                        callback([], "deezer");
                    });
                } else if(matches[1] === "album") {
                    $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/badger_api/api/deezer/album?id=" + matches[2]).then(function (data) {
                        parseTracks(data.tracks.data, function(res){
                            callback(res, "deezer");
                        }, data.cover_medium);
                    });
                } else if(matches[1] === "playlist") {
                    $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/badger_api/api/deezer/playlist?id=" + matches[2]).then(function (data) {
                        parseTracks(data.tracks.data, function(res){
                            callback(res, "deezer");
                        });
                    });
                } else {
                    callback([], "deezer");
                }
				return true;
			} else {
			    return false;
            }
		};

		W2gDeezer.prototype.search = function(term, count, page, callback) {

			term = term || this.defaultSearch;

			if(term.indexOf("publisher:") === 0){
                $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/badger_api/api/deezer/artist?id=" + term.split(":")[1]).then(function(data){
                    parseTracks(data.data, function(res){
                        callback(res, "deezer");
                    });
                }.bind(this));
			} else {
                $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/badger_api/api/deezer/search?q=" + term).then(function(data) {
                    parseTracks(data.data, function(res){
                        callback(res, "deezer");
                    });
                }.bind(this));
			}
		};

		function parseTracks(data, cb, thumb){
		    var clip, results = [];
            data.forEach(function(v, i) {
                clip = {};
                clip.id = v.link;
                clip.provider = "deezer";
                clip.title = v.title;
                clip.publisher = v.artist.name;
                clip.publisherID = v.artist.id;
                clip.desc = "";
                clip.price = "";
                clip.thumb = thumb || v.album.cover_medium;
                results.push(clip);
            }.bind(this));
            cb(results);
        }

		my.push(W2gDeezer);

		return my;

	}(W2gProviders || []));

