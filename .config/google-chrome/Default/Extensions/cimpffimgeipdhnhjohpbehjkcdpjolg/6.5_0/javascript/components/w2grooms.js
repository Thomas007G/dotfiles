var W2gRooms = function(eleClass) {

	"use strict";

	var w2gRooms, roomInfo, apipref = typeof _w2ghost !== "undefined" ? "https://" + _w2ghost : "";

	var roomsObj = {
		rooms : [],
		shareRoom : "",
		roomsLoaded : false,
		shareRoomName : "",
		sharePlaylists : [],
		shareID : "",
		shareTitle : "",
		shareThumb : "",
		message : "",
		fetchRooms : function() {
			$w2g.getJSON(apipref + "/streams").then(function(data) {
				roomInfo = data;
				this.rooms = data.map(function(val) {
					val.persistent_name = val.persistent_name || "Temporary Room";
					val.openurl = apipref + "/rooms/" + val.streamkey;
					return val;
				});
				this.roomsLoaded = true;
			}.bind(this)).catch(function(){
				console.log("Can not fetch rooms.")
			});
		},
		createNewRoom : function() {
			$w2g.postJSON(apipref + "/rooms/create.json", {
                share : this.shareID,
                title : this.shareTitle,
                thumb : this.shareThumb
            }).then(function(data){
            	var openurl = apipref + "/rooms/" + data.streamkey;
            	if(window.browser && window.browser.tabs){
					browser.tabs.create({
						url: openurl
					});
				} else {
            		window.location.href = openurl;
				}
            });
		},
		openShare : function(param, context) {
			this.shareRoom = context.streamkey;
			this.shareRoomName = context.persistent_name;
		},
		closeShare : function() {
			this.shareRoom = null;
			this.sharePlaylists = [];
			this.shareRoomName = "";
		},
		shareItem : function() {
			var open = true;
			for(var i = 0; i < roomInfo.length; i++){
				if(roomInfo[i].streamkey === this.shareRoom){
					for(var t = 0; t < roomInfo[i].users.length; t++){
						if(roomInfo[i].users[t].jid === w2g.user.jid && roomInfo[i].users[t].online){
							open = false;
							break;
						}
					}
					break;
				}
			}
			$w2g.postJSON(apipref + "/rooms/" + this.shareRoom + "/sync_update", {
                item_url : this.shareID,
                item_title : this.shareTitle,
                item_thumb : this.shareThumb
            }).then(function() {
                if (open === true) {
                	var openurl = apipref + "/rooms/" + this.shareRoom;
                	if(window.browser && window.browser.tabs){
						browser.tabs.create({
							url : openurl
						});
					} else {
                		window.location.href = openurl;
					}
                } else {
                    setMessage("Shared to: " + this.shareRoomName);
                }
                this.shareRoom = null;
            }.bind(this));
		},
		addToPlaylist : function(para, playlist) {
		    $w2g.postJSON(apipref +"/rooms/" + this.shareRoom + "/playlists/" + playlist.key + "/playlist_items/sync_update", {'add_items' : JSON.stringify([{
                    "url" : this.shareID,
                    "title" : this.shareTitle,
                    "thumb" : this.shareThumb
		    }])}).then(function(){
                w2gRooms.shareRoom = null;
                setMessage("Added to playlist: " + playlist.title);
            }.bind(this));
		}
	};

	w2gRooms = new W2gDataObject(roomsObj);
	new W2gBind(w2gRooms, eleClass);

	function setMessage(msg){
        w2gRooms.message = msg;
        setTimeout(function(){
            w2gRooms.message = "";
        }, 2000);
	}

	w2gRooms._addHandler("shareRoom", function(prop, val) {
		if (val !== null) {
			$w2g.getJSON(apipref + "/streams/" + val + "/playlists").then(function(data) {
                w2gRooms.sharePlaylists = data;
			}.bind(this));
		}
	});
	
	w2gRooms.fetchRooms();

	
	return w2gRooms;

};
