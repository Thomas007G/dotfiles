var W2gProviders = ( function(my) {

		"use strict";

		//Load Youtube API and init player
		function W2gYoutube() {
			this.provider_name = "youtube";
			this.provider_type = "search";
			this.apiKey = "AIzaSyBdg5kHSru30HMimN2zKouKDuCTT5ou43M";
            this.icon_path = "/static/providers/1.png";
            this.description = "Search OR Paste a link to a Youtube video";
            this.active = false;
			this.nextToken = "";
			this.prevToken = "";
			this.searchCache = [];
			this.saveSearch = "Save Search";
			this.ytRegions = ["DE", "US", "GB", "FR", "SE", "CA", "IT", "ES", "PL", "AT", "NL"];
		}

		//Lookup video info through youtube API
		W2gYoutube.prototype.videoLookUp = function(url, callback, nolists) {
			var index = url.indexOf("v="),
			    id = false,
                res = null,
			    parser,
                info = {};
			parser = document.createElement('a');
			parser.href = url;

			if(url.match(/^https?:\/\/(?:www\.)?youtube.com\/\S+list=(\S+)$/) && !nolists){
                this.getPlaylistItems(url, callback);
                return true;
            } else {
                if (parser.hostname === "www.youtube.com" || parser.hostname === "youtube.com" || parser.hostname === "m.youtube.com" || parser.hostname === "youtu.be") {
                    res = url.match(/((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/);
                    if(res){
                        id = res[4];
                    }
                }
                if (id) {
                    $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/w2g_search/lookup?url=//www.youtube.com/watch?v=" + id).then(function(data){
                        var channelID = data.creatorurl ? data.creatorurl.match(/\/channel\/(\S+)$/) : null;
                        channelID = channelID && channelID.length === 2 ? channelID[1] : "";
                        info.id = data.url;
                        info.provider = this.provider_name;
                        info.title = data.title;
                        info.publisher = data.creator || "";
                        info.publisherID = channelID;
                        info.desc = "";
                        info.price = "";
                        info.thumb = data.thumb;
                        callback([info], "youtube");
                    }.bind(this)).catch(function(){
                        info.id = "//www.youtube.com/watch?v=" + id;
                        info.provider = this.provider_name;
                        info.title = url;
                        info.publisher = "";
                        info.desc = "";
                        info.price = "";
                        info.thumb = "https://i.ytimg.com/vi/" + id + "/mqdefault.jpg";
                        callback([info], "youtube");
                    }.bind(this));
                    return true;
                } else {
                    return false;
                }
            }
		};

		W2gYoutube.prototype.getPlaylistItems = function(url, callback) {
			var listID = "",
			    listItems = [],
			    pageToken = "",
			    parser = url.match(/^https?:\/\/(?:www\.)?youtube.com\/\S+list=(\S+)$/);

			function getItems(id) {
			    fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + id + "&pageToken=" + pageToken + "&key=" + this.apiKey).then(function(d){
			        d.json().then(function(data){
                        parseItems.call(this, data);
                    }.bind(this));
                }.bind(this)).catch(function(){
                    parseItems.call(this, null);
                }.bind(this));
			}

			function parseItems(data) {
				if (data && data.items) {
					data.items.forEach(function(val, key) {
						try {
							var item = {
								"id" : "//www.youtube.com/watch?v=" + val.snippet.resourceId.videoId,
                                "provider" : this.provider_name,
								"title" : val.snippet.title,
                                "publisher" : val.snippet.channelTitle,
                                "publisherID" : val.snippet.channelId,
                                "date" : new Date(val.snippet.publishedAt).toDateString(),
                                "desc" : val.snippet.description,
                                "price" : "", "thumb" : val.snippet.thumbnails.medium.url
							};
							listItems.push(item);
						} catch(e) {
						}
					}.bind(this));

					if (data.nextPageToken) {
					    if(listItems.length < 500){
                            pageToken = data.nextPageToken;
                            getItems.call(this, parser[1]);
                        } else {
                            callback(listItems, "youtube");
                        }
					} else {
						callback(listItems, "youtube");
					}
				} else {
					callback(listItems, "youtube");
				}
			}
			if (parser && parser.length === 2) {
				getItems.call(this, parser[1]);
			} else {
				callback([]);
			}
		};

		W2gYoutube.prototype.search = function(term, count, page, callback) {

            if (term.indexOf("publisher:") === 0) {
                $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/w2g_search/channel?id=" + term.split(":")[1]).then(function(videos) {
                    var results = [], clip, channelID;
                    videos.forEach(function(v){
                        channelID = v.creatorurl ? v.creatorurl.match(/\/channel\/(\S+)$/) : null;
                        channelID = channelID && channelID.length === 2 ? channelID[1] : "";
                        clip = {};
                        clip.id = v.url;
                        clip.provider = this.provider_name;
                        clip.title = v.title;
                        clip.publisher = v.creator || "";
                        clip.publisherID = channelID;
                        clip.desc = "";
                        clip.price = "";
                        clip.thumb = v.thumb;
                        results.push(clip);
                    }.bind(this));
                    callback(results, "youtube");
                }.bind(this));
            } else if (term !== "") {
                $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/w2g_search/search?q=" + term).then(function(videos) {
                    var results = [], clip, channelID;
                    videos.forEach(function(v){
                        channelID = v.creatorurl ? v.creatorurl.match(/\/channel\/(\S+)$/) : null;
                        channelID = channelID && channelID.length === 2 ? channelID[1] : "";
                        clip = {};
                        clip.id = v.url;
                        clip.provider = this.provider_name;
                        clip.title = v.title;
                        clip.publisher = v.creator || "";
                        clip.publisherID = channelID;
                        clip.desc = "";
                        clip.price = "";
                        clip.thumb = v.thumb;
                        results.push(clip);
                    }.bind(this));
                    callback(results, "youtube");
                }.bind(this));
            } else {
                var region = this.ytRegions.indexOf(w2g.userInfo) !== -1 ? w2g.userInfo : "US";
                fetch((window._w2ghost ? "https://www.watch2gether.com" : "") + "/staticprov/youtube-" + region + ".json").then(function(data){
                    data.json().then(function(obj){
                        var results = [], clip;
                        obj.items.forEach(function(v, i) {
                            clip = {};
                            clip.id = "//www.youtube.com/watch?v=" + ( typeof v.id === "object" ? v.id.videoId : v.id);
                            clip.provider = this.provider_name;
                            clip.title = v.snippet.title;
                            clip.publisher = v.snippet.channelTitle;
                            clip.publisherID = v.snippet.channelId;
                            clip.date = new Date(v.snippet.publishedAt).toDateString();
                            clip.desc = v.snippet.description;
                            clip.price = "";
                            clip.thumb = v.snippet.thumbnails.medium.url;
                            results.push(clip);
                        }.bind(this));
                        callback(results, "youtube");
                    }.bind(this));
                }.bind(this));
            }
		};

		my.push(W2gYoutube);

		return my;

	}(W2gProviders || []));
