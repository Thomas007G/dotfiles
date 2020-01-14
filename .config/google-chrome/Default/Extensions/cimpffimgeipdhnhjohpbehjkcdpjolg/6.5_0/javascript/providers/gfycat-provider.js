var W2gProviders = ( function(my) {

		"use strict";

		//Load Youtube API and init player
		function W2gGfycat() {
			this.provider_name = "gfycat";
			this.provider_type = "search";
            this.icon_path = "/static/providers/6.png";
            this.description = "Search OR Paste a link to a Gifycat video";
            this.active = false;
			this.nextToken = null;

			function getKey() {
                return new Promise(function (resolve, reject) {
                    fetch("https://www.watch2gether.com/gfycat.json?" + Math.floor(Date.now() / 10000)).then(function (data) {
                        if (data.ok) {
                            data.json().then(function (key) {
                                resolve(key.access_token);
                            }.bind(this));
                        }
                    }.bind(this));
                });
            }

			this.apiKey = getKey();

			setInterval( function() {
				this.apiKey = getKey();
			}.bind(this), 600000);

		}

		W2gGfycat.prototype.getJSON = function(url, callback) {
			this.apiKey.then( function(key) {
				fetch(url, {
					headers: {
                        "Authorization": "Bearer " + key
					}
				}).then(function(d) {
					if(d.ok){
						d.json().then(function(json){
							callback(json);
						}.bind(this));
					}
                }.bind(this));
			}.bind(this));
		};

		W2gGfycat.prototype.videoLookUp = function(url, callback) {

		    var matches = url.match(/^https:\/\/gfycat.com\/(\w+)/);

			if (matches && matches.length === 2) {
				this.getJSON("https://api.gfycat.com/v1/gfycats/" + matches[1].toLowerCase(), function(data) {
					var info = {},
					    v = data.gfyItem;

					info.id = "https://gfycat.com/" + v.gfyName;
					info.title = v.title || "Untitled";
					info.publisher = v.userName;
					if (v.userName !== "anonymous") {
						info.publisherID = v.userName;
					} else {
                        info.publisherID = null;
                    }
					info.desc = "";
					info.price = "";
					info.thumb = v.gif100px;
					info.cc = false;
					info.duration = 0;
					info.explicit = false;
					callback([info], "gfycat");
				}.bind(this));
				return true;
			} else {
			    return false;
            }
		};

		W2gGfycat.prototype.search = function(term, count, page, callback) {

			if (page === 1) {
				this.nextToken = null;
			}

			function parseResponse(data) {

				var results = [],
				    clip;

				this.nextToken = data.cursor;

				data.gfycats.forEach(function(v, i) {
					clip = {};
					clip.id = "https://gfycat.com/" + v.gfyName;
					clip.title = v.title || "Untitled";
					clip.publisher = v.userName;
					if (v.userName !== "anonymous") {
						clip.publisherID = v.userName;
					} else {
                        clip.publisherID = null;
                    }
					clip.date = new Date(v.createDate * 1000).toDateString();
					clip.desc = "";
					clip.price = "";
					clip.thumb = v.max1mbGif;
					results.push(clip);
				});
				callback(results, "gfycat");
			}

			if (term.indexOf("publisher:") === 0) {
				this.getJSON("https://api.gfycat.com/v1/users/" + term.split(":")[1] + "/gfycats" + "?count=" + count + (this.nextToken ? "&cursor=" + this.nextToken : ""), parseResponse.bind(this));
			} else if (term !== "") {
				this.getJSON("https://api.gfycat.com/v1/gfycats/search?search_text=" + term + "&count=" + count + (this.nextToken ? "&cursor=" + this.nextToken : ""), parseResponse.bind(this));
			} else {
				this.getJSON("https://api.gfycat.com/v1/gfycats/trending" + "?count=" + count + (this.nextToken ? "&cursor=" + this.nextToken : ""), parseResponse.bind(this));
			}

		};

		my.push(W2gGfycat);

		return my;

	}(W2gProviders || []));
