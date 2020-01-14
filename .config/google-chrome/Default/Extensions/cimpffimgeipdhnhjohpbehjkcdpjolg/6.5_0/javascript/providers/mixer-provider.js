var W2gProviders = ( function(my) {

		"use strict";

		//Load Facebook API and init player
		function W2gMixer() {
			this.provider_name = "mixer";
			this.provider_type = "search";
            this.icon_path = "/static/providers/17.png";
            this.active = false;
			this.description = "Paste a direkt link to a Mixer channel.";
		}

		W2gMixer.prototype.videoLookUp = function(url, callback) {
		    var matches = url.match(/^https:\/\/mixer.com\/(\w+)$/);
			if (matches && matches.length === 2) {
                var info = {};
                info.id = url;
                info.provider = this.provider_name;
                info.title = "Mixer: " +  matches[1];
                info.publisher = "--";
                info.publisherID = null;
                info.desc = "";
                info.price = "";
                info.thumb = this.icon_path;
                info.cc = false;
                info.duration = 0;
                info.explicit = false;
                callback([info], "mixer");
				return true;
			} else {
			    return false;
            }
		};

		//Search for video through facebook API
		W2gMixer.prototype.search = function(term, count, page, callback) {
			callback([], "mixer");
		};

		my.push(W2gMixer);

		return my;

	}(W2gProviders || []));
