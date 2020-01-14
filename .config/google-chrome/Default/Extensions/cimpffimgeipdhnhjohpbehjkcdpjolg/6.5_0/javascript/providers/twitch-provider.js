var W2gProviders = ( function(my) {

		"use strict";

		//Load Youtube API and init player
		function W2gTwitch() {
			this.provider_name = "twitch";
			this.provider_type = "search";
            this.icon_path = "/static/providers/7.png";
            this.active = false;
			this.defaultSearch = "featured";
			this.description = "Paste a link to a Twitch stream video or clip.";
		}

		//Lookup video info through youtube API
		W2gTwitch.prototype.videoLookUp = function(url, callback) {

			var clip, data, matches;

			if (url.match(/^https?:\/\/([a-z]+\.)?twitch\.tv\/.+/)) {

			    matches = url.match(/^https?:\/\/(?:[a-z]+\.)?twitch\.tv\/.+\/clip\/([a-zA-Z]+)/) || url.match(/^https?:\/\/clips\.twitch\.tv\/([a-zA-Z]+)$/);

				if (matches && matches.length === 2) {
                    $w2g.getJSON("https://api.twitch.tv/helix/clips?id=" + matches[1], "GET", {'Client-ID': 'jcrgthxmtvgmyk50ftscbxgc4a732cm'}).then(function (d) {
                        data = d.data[0];
                        clip = {};
                        clip.id = data.url;
                        clip.provider = this.provider_name;
                        clip.title = data.title;
                        clip.publisher = data.broadcaster_name;
                        clip.publisherID = data.broadcaster_id;
                        clip.desc = "";
                        clip.price = "";
                        clip.thumb = data.thumbnail_url;
                        clip.duration = 0;
                        clip.cc = false;
                        clip.explicit = false;
                        callback([clip], this.provider_name);
                    }.bind(this));
                    return true;
                }

                matches = url.match(/^https?:\/\/(?:[a-z]+\.)?twitch\.tv\/videos\/([0-9]+)/);

                if (matches && matches.length === 2) {
                    $w2g.getJSON("https://api.twitch.tv/helix/videos?id=" + matches[1], "GET", {'Client-ID': 'jcrgthxmtvgmyk50ftscbxgc4a732cm'}).then(function (d) {
                        data = d.data[0];
                        clip = {};
                        clip.id = data.url;
                        clip.provider = this.provider_name;
                        clip.title = data.title;
                        clip.publisher = data.user_name;
                        clip.publisherID = data.user_id;
                        clip.desc = "";
                        clip.price = "";
                        clip.thumb = data.thumbnail_url.replace("%{width}x%{height}", "800x450");
                        clip.duration = 0;
                        clip.cc = false;
                        clip.explicit = false;
                        callback([clip], this.provider_name);
                    }.bind(this));
                    return true;
                }

                matches = url.match(/^https?:\/\/(?:[a-z]+\.)?twitch\.tv\/(\w+)/);

                if (matches && matches.length === 2) {
                    $w2g.getJSON("https://api.twitch.tv/helix/streams?user_login=" + matches[1], "GET", {'Client-ID': 'jcrgthxmtvgmyk50ftscbxgc4a732cm'}).then(function (d) {
                        data = d.data[0];
                        clip = {};
                        clip.id = url;
                        clip.provider = this.provider_name;
                        clip.title = data.title;
                        clip.publisher = data.user_name;
                        clip.publisherID = data.user_id;
                        clip.desc = "";
                        clip.price = "";
                        clip.thumb = data.thumbnail_url.replace("{width}x{height}", "800x450");
                        clip.duration = 0;
                        clip.cc = false;
                        clip.explicit = false;
                        callback([clip], this.provider_name);
                    }.bind(this));
                    return true;
                }
                return false;
			} else {
				return false;
			}
		};

		W2gTwitch.prototype.search = function(term, count, page, callback) {

            var results = [],
                clip;

            if (term.indexOf("publisher:") === 0) {
                $w2g.getJSON("https://api.twitch.tv/helix/videos?first=50&user_id=" + term.split(":")[1], "GET", {'Client-ID': 'jcrgthxmtvgmyk50ftscbxgc4a732cm'}).then(function (d) {
                    d.data.forEach(function(v, i){
                        clip = {};
                        clip.id = v.url;
                        clip.provider = this.provider_name;
                        clip.title = v.title;
                        clip.publisher = v.user_name;
                        clip.publisherID = v.user_id;
                        clip.desc = "";
                        clip.price = "";
                        clip.thumb = v.thumbnail_url ? v.thumbnail_url.replace("%{width}x%{height}", "800x450") : this.icon_path;
                        results.push(clip);
                    }.bind(this));
                    callback(results, this.provider_name);
                }.bind(this));
            } else {

                /*
                var qurl = term ? "https://api.twitch.tv/kraken/search/streams?q=" + term + "&client_id=jcrgthxmtvgmyk50ftscbxgc4a732cm&offset=" + (count * (page - 1)) + "&limit=" + count * 2 : "https://api.twitch.tv/kraken/streams/featured?client_id=jcrgthxmtvgmyk50ftscbxgc4a732cm&offset=" + (count * (page - 1)) + "&limit=" + count;

                $w2g.getJSON(qurl).then(function (data) {
                    var items = data.streams || data.featured;
                    items.forEach(function (v, i) {
                        v = v.stream || v;
                        clip = {};
                        clip.id = v.channel.url;
                        clip.provider = this.provider_name;
                        clip.title = v.channel.display_name + " | " + v.channel.game;
                        clip.publisher = v.channel.display_name;
                        clip.publisherID = v.channel._id;
                        clip.desc = v.channel.status;
                        clip.price = "";
                        clip.thumb = v.preview.medium;
                        results.push(clip);
                    }.bind(this));
                    callback(results, this.provider_name);
                }.bind(this));
                 */
                callback(results, this.provider_name);

            }
		};

		my.push(W2gTwitch);

		return my;

	}(W2gProviders || []));
