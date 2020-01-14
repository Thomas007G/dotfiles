var W2gProviders = ( function(my) {

		"use strict";

		function W2gDailymotion() {
			this.provider_name = "dailymotion";
			this.provider_type = "search";
            this.icon_path = "/static/providers/3.png";
            this.description = "Search OR Paste a link to a Dailymotion video";
            this.active = false;
			this.defaultSearch = "music covers";
			this.saveSearch = false;
		}

		//Lookup video info through youtube API
		W2gDailymotion.prototype.videoLookUp = function(url, callback) {

			var id,
			    clip,
			    v,
			    parser;

			parser = document.createElement('a');
			parser.href = url;

			if (parser.host.indexOf("www.dailymotion") === 0) {
				id = url.split("/").pop().split("?")[0].split("_")[0];
				fetch("https://api.dailymotion.com/video/" + id + "?fields=description,duration,explicit,owner.username,thumbnail_360_url,title,url").then(function(data){
				    data.json().then(function(v) {
                        clip = {};
                        clip.id = v.url;
                        clip.provider = this.provider_name;
                        clip.title = v.title;
                        clip.publisher = v["owner.username"];
                        clip.publisherID = v["owner.id"];
                        clip.desc = v.description;
                        clip.price = "";
                        clip.thumb = v.thumbnail_360_url;
                        clip.duration = v.duration;
                        clip.cc = false;
                        clip.explicit = v.explicit;
                        callback([clip], "dailymotion");
                    }.bind(this));
				}.bind(this)).catch(function() {
					callback([], "dailymotion");
				});
				return true;
			} else {
			    return false;
            }
		};

		W2gDailymotion.prototype.search = function(term, count, page, callback) {

			term = term || this.defaultSearch;
			var safe = this.saveSearch;

			var results = [],
			    clip,
			    safesearch = safe === true ? "1" : "0";

			function parseResponse(data) {
				data.list.forEach(function(v, i) {
					clip = {};
					clip.id = v.url;
                    clip.provider = this.provider_name;
					clip.title = v.title;
					clip.publisher = v["owner.username"];
					clip.publisherID = v["owner.id"];
					clip.date = new Date(v.created_time * 1000).toDateString();
					clip.desc = v.description;
					clip.price = "";
					clip.thumb = v.thumbnail_240_url;
					results.push(clip);
				}.bind(this));
				callback(results, "dailymotion");
			}

			if(term.indexOf("publisher:") === 0){
				fetch("https://api.dailymotion.com/videos?owners=" + term.split(":")[1] + "&page=" + page + "&limit=" + count + "&family_filter=" + safesearch + "&sort=recent&fields=description,duration,created_time,owner.username,owner.id,thumbnail_240_url,title,url").then(function(data){
				    data.json().then(function(obj){
				        parseResponse.call(this, obj);
                    }.bind(this));
                }.bind(this));
			} else {
				fetch("https://api.dailymotion.com/videos?search=" + term + "&page=" + page + "&limit=" + count + "&family_filter=" + safesearch + "&sort=relevance&fields=description,duration,created_time,owner.username,owner.id,thumbnail_240_url,title,url").then(function(data){
				    data.json().then(function(obj){
                        parseResponse.call(this, obj);
                    }.bind(this));
                }.bind(this));
			}
		};

		my.push(W2gDailymotion);

		return my;

	}(W2gProviders || []));

