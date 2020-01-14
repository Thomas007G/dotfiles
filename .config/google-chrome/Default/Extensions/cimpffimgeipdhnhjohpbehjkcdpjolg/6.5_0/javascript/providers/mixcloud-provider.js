var W2gProviders = ( function(my) {

		"use strict";

		//Load Youtube API and init player
		function W2gMixcloud() {
			this.provider_name = "mixcloud";
			this.provider_type = "search";
            this.icon_path = "/static/providers/9.png";
            this.description = "Search OR Paste a link to a Mixcloud track";
            this.active = false;
			this.defaultSearch = "funky";
		}

		//Lookup video info through youtube API
		W2gMixcloud.prototype.videoLookUp = function(url, callback) {

			var parser = document.createElement('a');
			parser.href = url;

			if (parser.host.indexOf("www.mixcloud") === 0) {
				fetch("https://api.mixcloud.com" + parser.pathname).then(function(d) {
					if(d.ok){
						d.json().then(function(data){
                            var clip = {};
                            clip.id = data.url;
                            clip.provider = this.provider_name;
                            clip.title = data.name;
                            clip.publisher = data.user.name;
                            clip.publisherID = data.user.username;
                            clip.desc = "";
                            clip.price = "";
                            clip.thumb = data.pictures.medium;
                            clip.duration = data.audio_length;
                            clip.cc = false;
                            clip.explicit = false;
                            callback([clip], "mixcloud");
						}.bind(this));
					} else {
                        callback([], "mixcloud");
					}
				}.bind(this));
				return true;
			} else {
			    return false;
            }
		};

		W2gMixcloud.prototype.search = function(term, count, page, callback, safe) {

			term = term || this.defaultSearch;

			var results = [],
			    clip;

			function parseResponse(data) {
				data.data.forEach(function(v, i) {
					clip = {};
					clip.id = v.url;
                    clip.provider = this.provider_name;
					clip.title = v.name;
					clip.publisher = v.user.name;
					clip.publisherID = v.user.username;
					clip.date = new Date(v.created_time).toDateString();
					clip.desc = "";
					clip.price = "";
					clip.thumb = v.pictures.medium;
					results.push(clip);
				}.bind(this));
				callback(results, "mixcloud");
			}

			var qurl = term.indexOf("publisher:") === 0 ? "https://api.mixcloud.com/" + term.split(":")[1] + "/cloudcasts/?limit=" + count + "&offset=" + (count * (page - 1)) : "https://api.mixcloud.com/search/?q=" + term + "&type=cloudcast" + "&limit=" + count + "&offset=" + (count * (page - 1));

			fetch(qurl).then(function(d){
				if(d.ok){
					d.json().then(function(data){
						parseResponse.call(this, data);
					}.bind(this));
				}
			}.bind(this));

		};

		my.push(W2gMixcloud);

		return my;

	}(W2gProviders || []));

