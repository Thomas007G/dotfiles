var W2gShare = function(eleClass) {

	"use strict";

	var w2gShare,
	    MediaProviders = {},
	    shareObj = {
		found : false,
		id : "",
		title : "",
		thumb : "",
		auth : true,
		shareMsg : "Nothing to share",
		share : function(vid) {
			vid = vid || {};
			$w2g.postJSON((typeof _w2ghost !== "undefined" ? "https://" + _w2ghost : "") +  "/rooms/create.json", {
                share : vid.id || this.id,
                title : vid.title || this.title,
                thumb : vid.thumb || this.thumb
            }).then( function(data) {
                var url = (typeof _w2ghost !== "undefined" ? "https://" + _w2ghost : "") + "/rooms/" + data.streamkey;
                if(window.browser && window.browser.tabs){
                    browser.tabs.create({
                        url : "https://" + _w2ghost + "/rooms/" + data.streamkey
                    });
                } else {
                    window.location.href = url;
                }
			}.bind(this));
		},
        load : function(url){
		    var result = false;
            for(var m in MediaProviders){
                if(MediaProviders.hasOwnProperty(m)){
                    result = MediaProviders[m].videoLookUp(url, function(data) {
                        if (data.length > 0) {
                            this.found = false;
                            this.id = url;
                            this.title = data[0].title;
                            this.thumb = data[0].thumb;
                            this.found = true;
                        }
                    }.bind(this), true);
                    if(result){
                        break;
                    }
                }
            }
        }
	};

	W2gProviders.forEach(function(v, i) {
		var p = new v();
		MediaProviders[p.provider_name] = p;
	});

	w2gShare = new W2gDataObject(shareObj);
	new W2gBind(w2gShare, eleClass);

	return w2gShare;
};

