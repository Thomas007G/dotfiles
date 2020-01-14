function W2gPubSubLink(obj, node, url) {

	"use strict";

	var can_push = true;

    w2g.subscribe(node, function(data, user) {
        applyChanges(data, obj, user);
	});

	function applyChanges(data, target, publisher) {
		var prop;
        can_push = false;
		for (prop in data) {
		    if(data.hasOwnProperty(prop)) {
                if (typeof target[prop] === "object" && target[prop] !== null) {
                    applyChanges(data[prop], target[prop]);
                } else {
                    if (target.hasOwnProperty(prop) || Object.prototype.toString.call(target) === '[object Array]') {
                        if(typeof target["_publisher"] !== "undefined" && target["_publisher"] !== publisher){
                            target["_publisher"] = publisher;
                        }
                        if (target[prop] !== data[prop]) {
                            target[prop] = data[prop];
                        }
                    }
                }
            }
		}
		if ( typeof data.length !== "undefined" && typeof target.length !== "undefined") {
			if (data.length !== target.length) {
				target.length = data.length;
			}
		}
		can_push = true;
	}

	function push(payload){
	    if(can_push) {
            $w2g.postJSON(url, payload);
        }
        return can_push;
    }

    return {
	    push : push
    }

}