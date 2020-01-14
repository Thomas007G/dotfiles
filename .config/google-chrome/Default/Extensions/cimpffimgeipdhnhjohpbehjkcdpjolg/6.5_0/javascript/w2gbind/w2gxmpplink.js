function W2gXmppLink(obj, app, node) {

	"use strict";

	var doPublish = true;

	obj._addHandler("*", function(prop, val) {
		if (doPublish === true) {
			var parent = prop.substr(0, prop.lastIndexOf("."));
			if(prop === "_moderated"){
				w2g.toggleModeration(app, node, (val === true));
			} else if (Object.prototype.toString.call(obj[parent]) === '[object Array]') {
				if (prop.substr(prop.lastIndexOf(".") + 1, prop.length) === "length") {
					w2g.publishToNode(app, node, JSON.stringify(obj));
				}				
			} else {
				w2g.publishToNode(app, node, JSON.stringify(obj));
			}
		}
	});

	w2g.registerPubsubCallback(app, node, function(type, item, publisher) {
		switch(type) {
		case "payload":
			var i;
				doPublish = false;
				applyChanges(item, obj, publisher);
				doPublish = true;
			break;
		case "config":
			var modInfo = item.filter(function(item) {
				return item.name === "pubsub#publish_model";
			})[0];
			doPublish = false;
			applyChanges({"_moderated" : (modInfo.value !== "open")}, obj, publisher);
			doPublish = true;
			break;
		}
	});

	function applyChanges(data, target, publisher) {
		var prop;
		for (prop in data) {
		    if(data.hasOwnProperty(prop)) {
                if (typeof target[prop] === "object" && target[prop] !== null) {
                    applyChanges(data[prop], target[prop]);
                } else {
                    if (target.hasOwnProperty(prop) || Object.prototype.toString.call(target) === '[object Array]') {
                        if (target[prop] !== data[prop]) {
                            target[prop] = data[prop];
                        }
                        if(typeof target["_publisher"] !== "undefined" && target["_publisher"] !== publisher){
                            target["_publisher"] = publisher;
                        }
                    }
                }
            }
		}

		// Array length property needs some extra treatment
		if ( typeof data.length !== "undefined" && typeof target.length !== "undefined") {
			if (data.length !== target.length) {
				target.length = data.length;
			}
		}

	}


	w2g.subscribeNode(app, node);
	
	return {
		commitPrepare : function(){
			doPublish = false;
		},
		commit : function() {
			doPublish = true;
			w2g.publishToNode(app, node, JSON.stringify(obj));
		}
	};

}