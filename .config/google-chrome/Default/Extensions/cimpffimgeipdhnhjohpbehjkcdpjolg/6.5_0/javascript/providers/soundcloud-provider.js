var W2gProviders = ( function(my) {

		"use strict";

		//Load Youtube API and init player
		function W2gSoundcloud() {
			this.provider_name = "soundcloud";
			this.provider_type = "search";
            this.icon_path = "/static/providers/4.png";
            this.description = "Search OR Paste a link to a Soundcloud track.";
            this.active = false;
			this.defaultSearch = "electro";
            this.hostName = "https://" + (window.location.protocol.indexOf("http") === 0 ?  window.location.hostname : "www.watch2gether.com");
        }

		//Lookup video info through youtube API
		W2gSoundcloud.prototype.videoLookUp = function(url, callback) {

			var parser = document.createElement('a'), clip;
			parser.href = url;

			if (parser.host.indexOf("soundcloud") === 0) {
				fetch("https://api.soundcloud.com/resolve.json?url=" + url + "&client_id=PRaNFlda6Bhf5utPjUsptg").then(function(d) {
					if(d.ok) {
						d.json().then(function(data){
							if (typeof data.track_count === "undefined") {
								clip = {};
								clip.id = data.permalink_url;
								clip.provider = this.provider_name;
								clip.title = data.title;
								clip.publisher = data.user.username;
								clip.publisherID = data.user.id;
								clip.desc = data.description;
								clip.price = "";
								clip.thumb = data.artwork_url || this.hostName + "/static/sc_square_240.png";
								clip.duration = data.duration / 1000;
								clip.cc = false;
								clip.explicit = false;
								callback([clip], "soundcloud");
							} else {
								var results = [], clip;
								data.tracks.forEach(function (v) {
									clip = {};
									clip.id = v.permalink_url;
									clip.provider = this.provider_name;
									clip.title = v.title;
									clip.publisher = v.user.username;
									clip.publisherID = v.user.id;
									clip.date = new Date(v.created_at).toDateString();
									clip.desc = v.description;
									clip.price = "";
									clip.thumb = v.artwork_url || this.hostName + "/static/sc_square_240.png";
									results.push(clip);
								}.bind(this));
								callback(results, "soundcloud");
							}
                        }.bind(this));
                    } else {
                        callback([], "soundcloud");
					}
				}.bind(this));
				return true;
			} else {
				return false;
			}
		};

		W2gSoundcloud.prototype.search = function(term, count, page, callback, safe) {

			term = term || this.defaultSearch;

			var results = [],
			    clip;

			function parseResponse(data) {
				data.forEach(function(v, i) {
					clip = {};
					clip.id = v.permalink_url;
                    clip.provider = this.provider_name;
					clip.title = v.title;
					clip.publisher = v.user.username;
					clip.publisherID = v.user.id;
					clip.date = new Date(v.created_at).toDateString();
					clip.desc = v.description;
					clip.price = "";
					clip.thumb = v.artwork_url || this.hostName + "/static/sc_square_240.png";
					results.push(clip);
				}.bind(this));
				callback(results, "soundcloud");
			}

			var qurl = term.indexOf("publisher:") === 0 ? "https://api.soundcloud.com/users/" + term.split(":")[1] + "/tracks.json?client_id=PRaNFlda6Bhf5utPjUsptg&filter=streamable&limit=" + count + "&offset=" + (count * (page - 1)) : "https://api.soundcloud.com/tracks.json?client_id=PRaNFlda6Bhf5utPjUsptg&filter=streamable&q=" + term + "&limit=" + count + "&offset=" + (count * (page - 1));

			fetch(qurl).then(function(d){
				if(d.ok){
					d.json().then(function(data){
                        parseResponse.call(this, data);
					}.bind(this));
				}
			}.bind(this));

		};

		my.push(W2gSoundcloud);

		return my;

	}(W2gProviders || []));

