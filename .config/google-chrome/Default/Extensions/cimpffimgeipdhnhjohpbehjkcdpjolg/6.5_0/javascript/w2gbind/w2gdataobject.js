function W2gDataObject(obj, name, parentHandler) {
	
	"use strict";

	var Handler = {},
        parentHandlers = [],
	    proxy;

	if(parentHandler){
        parentHandlers.push({
            name: name,
            hdl: parentHandler
        });
    }
	    
	var p;
	for (p in obj) {
		if (obj.hasOwnProperty(p) && obj[p] && obj[p].constructor.name !== "Promise" && typeof obj[p] === 'object') {
			if(typeof obj[p]._addParentHander === "undefined") {
                obj[p] = new W2gDataObject(obj[p], p, runHandlers);
            } else {
                obj[p]._addParentHander(p, runHandlers);
            }
		}
	}

	obj._addHandler = function(prop, cb) {
		Handler[prop] = Handler[prop] || [];
		Handler[prop].push(cb);
	};

	obj._addParentHander = function(name, hdl) {
        parentHandlers = parentHandlers.filter(function(ele){
	        return ele.hdl !== hdl;
        });
	    parentHandlers.push({
            name: name,
            hdl: hdl
        });
    };

	function setHandler(target, prop, value, receiver) {
		if (target.hasOwnProperty(prop) || isArray(target)) {
			if(isArray(target[prop]) && isArray(value)){
				var args = [0, target[prop].length].concat(value);
				Array.prototype.splice.apply(target[prop], args);
			} else if(isArray(target) && typeof value === "object" && value !== null){
			    if(typeof value._addHandler === "undefined"){
                    target[prop] = new W2gDataObject(value, prop, runHandlers);
                } else {
                    value._addParentHander(prop, runHandlers);
                    target[prop] = value;
                }
                runHandlers(target, prop, value, receiver);
            } else if(typeof value === "object" && value !== null){
				var objProp;
				for (objProp in value){
					if(value.hasOwnProperty(objProp) && target[prop].hasOwnProperty(objProp)){
						target[prop][objProp] = value[objProp];
					}
				}
			} else if(prop === "length" || target[prop] !== value) {
				target[prop] = value;
                runHandlers(target, prop, value, receiver);
			}
		}
		return true;
	}

	function getHandler(target, property, receiver){
	    if(target.hasOwnProperty(property) && typeof target[property] === "function" && property !== "_addHandler" && property !== "_addParentHander"){
            return function(){
                runHandlers(target, property, arguments, receiver);
                return target[property].apply(this, arguments);
            }
        } else {
	        return target[property];
        }
    }

	function runHandlers(target, prop, value, receiver) {
	    var propName = typeof target === "function" ? target.name : prop;
		var i;
		if ( typeof Handler[propName] !== "undefined") {
			for ( i = 0; i < Handler[propName].length; i++) {
				Handler[propName][i](propName, value, receiver);
			}
		}
		if ( typeof Handler["*"] !== "undefined") {
			for ( i = 0; i < Handler["*"].length; i++) {
				Handler["*"][i](propName, value, receiver);
			}
		}
		if (typeof name !== "undefined") {
		    for(i = 0; i < parentHandlers.length; i++) {
                parentHandlers[i].hdl(target, parentHandlers[i].name + "." + propName, value, receiver);
            }
		}
	}
	
	function isArray(ar) {
		return Array.isArray(ar);
	}

	proxy = new Proxy(obj, {
		set : setHandler,
        get: getHandler
	});

	return proxy;

}

