var W2gProviders = ( function(my) {

		"use strict";

		//Load Facebook API and init player
		function W2gFacebook() {
			this.provider_name = "facebook";
			this.provider_type = "search";
            this.icon_path = "/static/providers/8.png";
            this.active = false;
			this.description = "Paste a direkt link to a public video on Facebook: Right-click on any public video on Facebook and select Show video URL.";
		}

		W2gFacebook.prototype.videoLookUp = function(url, callback) {
			if (url.match(/^(http|https):\/\/\S+\.facebook.com\/\S+\/videos\/\S+$/)) {
                var info = {};
                info.id = url;
                info.provider = this.provider_name;
                info.title = "Facebook Video";
                info.publisher = "--";
                info.publisherID = null;
                info.desc = "";
                info.price = "";
                info.thumb = this.icon_path;
                info.cc = false;
                info.duration = 0;
                info.explicit = false;
                callback([info], "facebook");
				return true;
			} else {
			    return false;
            }
		};

		//Search for video through facebook API
		W2gFacebook.prototype.search = function(term, count, page, callback) {
			callback([], "facebook");
		};

		my.push(W2gFacebook);

		return my;

	}(W2gProviders || []));
