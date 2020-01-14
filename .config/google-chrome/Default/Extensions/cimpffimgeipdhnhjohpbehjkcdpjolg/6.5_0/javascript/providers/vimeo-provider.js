var W2gProviders = ( function(my) {

		"use strict";

		//Load Youtube API and init player
		function W2gVimeo() {
			this.provider_name = "vimeo";
			this.provider_type = "search";
            this.icon_path = "/static/providers/2.png";
            this.description = "Search OR Paste a link to a Vimeo video";
            this.active = false;
			this.defaultSearch = "short film";
			this.saveSearch = false;
		}

		//Lookup video info through youtube API
		W2gVimeo.prototype.videoLookUp = function(url, callback) {

			var id,
			    clip,
			    v,
			    parser;

			parser = document.createElement('a');
			parser.href = url;

			if (parser.host.indexOf("vimeo") === 0) {
				id = url.split("/").pop();
				fetch("https://vimeo.com/api/v2/video/" + id + ".json").then(function(d) {
					if(d.ok) {
						d.json().then(function(data){
							v = data[0];
							clip = {};
							clip.id = v.url;
							clip.provider = this.provider_name;
							clip.title = v.title;
							clip.publisher = v.user_name;
							clip.publisherID = null;
							clip.desc = v.description;
							clip.price = "";
							clip.thumb = v.thumbnail_large;
							clip.duration = v.duration;
							clip.cc = false;
							clip.explicit = false;
							callback([clip], "vimeo");
                        }.bind(this));
                    }
				}.bind(this));
				return true;
			} else {
				return false;
			}
		};

		W2gVimeo.prototype.search = function(term, count, page, callback) {

			function parseResponse(data) {
																			
				var results = [],
				    clip;
				data.data.forEach(function(v, i) {
					clip = {};
					clip.id = "//vimeo.com/" + v.uri.split("/")[2];
                    clip.provider = this.provider_name;
					clip.title = v.name;
					clip.publisher = v.user.name;
					clip.publisherID = v.user.uri.split("/")[2];
					clip.date = new Date(v.created_time).toDateString();
					clip.desc = v.description;
					clip.price = "";
					clip.thumb = v.pictures[2].link;
					results.push(clip);
				}.bind(this));
				
				callback(results, "vimeo");
			}

			function getJSON(url){
				return new Promise(function(resolve, reject){
					fetch(url).then(function(d){
						if(d.ok){
							d.json().then(function(data){
								resolve(data);
							});
						}
					});
				});
			}
						
			var safe = this.saveSearch;

			var safesearch = safe === true ? "&filter=content_rating&filter_content_rating=safe" : "";

			if(term.indexOf("publisher:") === 0){
				getJSON("https://api.vimeo.com/users/" + term.split(":")[1] + "/videos?client_id=1857ad39c4dbead68e92c46df04539664debda97&page=" + page + "&fields=uri,name,description,pictures,created_time,user.uri,user.name&sort=modified_time&per_page=" + count).then(parseResponse.bind(this));
			} else if (term !== "") {
				getJSON("https://api.vimeo.com/videos?query=" + term + safesearch + "&client_id=1857ad39c4dbead68e92c46df04539664debda97&page=" + page + "&fields=uri,name,description,pictures,created_time,user.uri,user.name&per_page=" + count).then(parseResponse.bind(this));
			} else {
				getJSON("https://www.watch2gether.com/staticprov/" + this.provider_name + ".json").then(parseResponse.bind(this));
			}
			
		};
		
		my.push(W2gVimeo);

		return my;

	}(W2gProviders || []));
