var W2gProviders = ( function(my) {

		"use strict";

		//Load Youtube API and init player
		function W2gVidme() {
			this.provider_name = "vidme";
			this.provider_type = "search";
            this.icon_path = "/static/providers/5.png";
            this.active = false;
            this.saveSearch = false;
		}
		
		W2gVidme.prototype.videoLookUp = function(url, callback) {
			var parser = document.createElement('a');
			parser.href = url;

			if (parser.hostname === "vid.me") {
				jQuery.getJSON("https://api.vid.me/videoByUrl?url=" + encodeURIComponent(url), function(data) {

					var info = {},
					    v = data.video;

					info.id = v.full_url;
                    info.provider = this.provider_name;
					info.title = v.title;
					info.publisher = v.user ? v.user.username : ""; 
					info.desc = v.description;
					info.price = "";
					info.thumb = v.thumbnail_url;
					info.cc = false;

					info.duration = v.duration;
					info.explicit = v.nsfw;

					callback([info], "vidme");
				});
				return true;
			} else {
			    return false;
            }
		};

		W2gVidme.prototype.search = function(term, count, page, callback) {

			function parseResponse(data) {
			
				var results = [],
				    clip;

				jQuery.each(data.videos, function(i, v) {
					clip = {};
					clip.id = v.full_url;
                    clip.provider = this.provider_name;
					clip.title = v.title;
					clip.publisher = v.user ? v.user.username : "";  
					clip.date = new Date(v.date_created).toDateString();
					clip.desc = v.description;
					clip.price = "";
					clip.thumb = v.thumbnail_url;
					results.push(clip);
				}.bind(this));
				callback(results, "vidme");
			}

			var safe = this.saveSearch;

			var safesearch = safe === true ? "nsfw=1" : "";

			if (term !== "") {
				jQuery.getJSON("https://api.vid.me/videos/search?query=" + term + "&limit=" + count + "&offset=" + (count * (page - 1)) + "&" + safesearch, parseResponse.bind(this));
			} else {
				jQuery.getJSON("https://api.vid.me/videos/hot/main?limit=" + count + "&offset=" + (count * (page - 1)) + "&" + safesearch, parseResponse.bind(this));
			}

		};

		my.push(W2gVidme);

		return my;

	}(W2gProviders || []));
