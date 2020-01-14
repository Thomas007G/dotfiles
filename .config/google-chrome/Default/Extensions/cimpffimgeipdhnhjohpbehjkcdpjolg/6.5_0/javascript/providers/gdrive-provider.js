var W2gProviders = ( function(my) {
	
		"use strict";

		// ### THIS IS CURRENTLY BROKEN!!!! ###

		//Load Youtube API and init player
		function W2gGdrive() {
			this.provider_name = "gdrive";
			this.provider_type = "app";
            this.icon_path = "/static/providers/nix.png";
            this.active = false;
			this.nextToken = "";
			this.prevToken = "";
			this.lastPage = 1;
			this.defaultSearch = "";

			this.client_id = '339405336511-k08j6nds87896feqatrmtpmbrgkbjqds.apps.googleusercontent.com';
			this.scopes = ['https://www.googleapis.com/auth/drive.readonly'];

			this.options = {};
			this.options.authRequired(true);
			this.options.authString("Open your Google Drive");
			this.options.authFunc( function(event) {
				gapi.auth.authorize({
					client_id : this.client_id,
					scope : this.scopes.join(' '),
					immediate : false
				}, this.handleAuthResult.bind(this));
				return false;
			}.bind(this));

			window.checkAuth = function() {
				this.checkAuth();
			}.bind(this);

			if (!window.gapi) {
				var tag = document.createElement('script');
				tag.src = "https://apis.google.com/js/client.js?onload=checkAuth";
				var firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			}
		}
		
		W2gGdrive.prototype.initApp = function(container) {
			
		};

		W2gGdrive.prototype.checkAuth = function() {
			gapi.auth.authorize({
				'client_id' : this.client_id,
				'scope' : this.scopes.join(' '),
				'immediate' : true
			}, this.handleAuthResult.bind(this));
		};

		W2gGdrive.prototype.handleAuthResult = function(authResult) {
			if (authResult && !authResult.error) {
				this.options.authRequired(false);
				gapi.client.load('drive', 'v3', this.clientLoaded.bind(this));
			} else {
				this.options.authRequired(true);
			}
		};

		W2gGdrive.prototype.clientLoaded = function() {
			this.search("*", 10, 1, function() {
			});
		};

		//Lookup video info through youtube API
		W2gGdrive.prototype.videoLookUp = function(url, callback) {
			var index = url.indexOf("v="),
			    id = false,
			    parser;
			parser = document.createElement('a');
			parser.href = url;

			if (parser.hostname === "www.youtube.com" || parser.hostname === "youtube.com") {
				id = url.substr(index + 2, 11);
			} else if (parser.hostname === "youtu.be") {
				id = parser.pathname.split("/")[1];
			}

			if (id) {
				jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=" + id + "&key=AIzaSyC-bovH_zrTGrN7nvfNNBGhN3dsCZBheyw", function(data) {
					var info = {},
					    video = data.items[0],
					    darray = [],
					    duration = 0,
					    i;

					if (data.items.length === 1) {

						info.id = "//www.youtube.com/watch?v=" + video.id;
						info.title = video.snippet.title;
						info.publisher = video.snippet.channelTitle;
						info.desc = video.snippet.description;
						info.price = "";
						if (video.snippet.thumbnails.high) {
							info.thumb = video.snippet.thumbnails.high.url;
						} else {
							info.thumb = video.snippet.thumbnails.default.url;
						}
						info.cc = video.contentDetails.caption === "true";

						darray = video.contentDetails.duration.match(/(\d+)(?=[MHS])/ig);
						switch(darray.length) {
						case 3:
							duration = (darray[0] * 3600) + (darray[1] * 60) + parseInt(darray[2], 10);
							break;
						case 2:
							duration = (darray[0] * 60) + parseInt(darray[1], 10);
							break;
						case 1:
							duration = parseInt(darray[0], 10);
							break;
						}
						info.duration = duration;
						info.explicit = false;

						callback([info], "gdrive");
					} else {
						callback([], "gdrive");
					}
				}.bind(this)).fail(function() {
					callback([], "gdrive");
				});
			} else {
				callback([], "gdrive");
			}
		};

		//Search for video through youtube API
		W2gGdrive.prototype.search = function(term, count, page, callback) {

			if (this.options.authRequired() === false) {

				var results = [];

				var request = gapi.client.drive.files.list({
					pageSize : count,
					fields : "nextPageToken, files(id, name, thumbnailLink, owners/displayName)",
					q : "mimeType contains 'video/' and fullText contains '" + term + "'"
				});

				request.execute( function(resp) {

					jQuery.each(resp.files, function(i, v) {
						var clip = {};
						clip.id = v.id;
						clip.title = v.name;
						clip.publisher = v.owners[0].displayName;
						clip.desc = "";
						clip.price = "";
						clip.thumb = v.thumbnailLink;
						results.push(clip);
					});

					callback(results, "gdrive");

				}.bind(this));

			} else {
				callback([], "gdrive");
			}
		};

		my.push(W2gGdrive);

		return my;

	}(W2gProviders || []));

