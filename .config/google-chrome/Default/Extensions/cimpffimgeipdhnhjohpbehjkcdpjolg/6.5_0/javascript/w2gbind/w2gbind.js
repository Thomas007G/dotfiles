function W2gBind(obj, cont) {

	"use strict";

	var bindings = {}, containers = (typeof cont === "string") ? document.querySelectorAll(cont) : cont;

	bindDom(containers, null);

	obj._addHandler("*", function(prop) {
		if ( typeof bindings[prop] !== "undefined") {
			renderProperty(prop);
		}
		if (isArray(getProxyProperty(prop.substr(0, prop.lastIndexOf("."))))) {
			renderArrayChange(prop);
		}
	});

	function bindDom(bindNodes, bindPrefix) {

		var i,
		    bindElements,
            nestedFound,
		    k,
		    v,
		    j,
		    propName,
		    property,
		    actionObj,
		    bindAttr,
            eachIndex,
            renderCache = {},
            bindCache = {},
		    arrayNode;

		for ( i = 0; i < bindNodes.length; i++) {

            //Protection against nested double binds
		    nestedFound = false;
		    if(bindNodes.length > 1){
                for(var nf = 0; nf < bindNodes.length; nf++){
                    if(nf !== i && bindNodes[nf].contains(bindNodes[i])){
                        nestedFound = true;
                        break;
                    }
                }
            }
		    if(nestedFound) {
		        console.log("Nested bind detected:");
		        console.log(bindNodes[i]);
		        continue;
            }

			bindElements = getNodeList(bindNodes[i], 'data-w2g', true);

			for ( k = 0; k < bindElements.length; k++) {
				bindAttr = bindElements[k].getAttribute("data-w2g");
				bindAttr = parseBinding(bindAttr);

				for ( v = 0; v < bindAttr.length; v++) {
					
					if(bindAttr[v][0].indexOf("$parent.") === 0){
						propName = bindAttr[v][0].substring(8);
					} else {
						propName = bindPrefix === null ? bindAttr[v][0] : bindPrefix + "." + bindAttr[v][0];
					}

					actionObj = bindAttr[v][1];
					property = getProxyProperty(propName);

					if ( typeof property !== "undefined") {

					    bindCache[propName] = bindCache[propName] || [];
                        bindCache[propName].push([bindElements[k], actionObj]);

						switch(isArray(actionObj) ? actionObj[0] : actionObj) {
						case "each":
							if (isArray(property)) {
							    if(bindElements[k].firstElementChild) {
                                    bindElements[k]._w2gBindTemplate = bindElements[k].firstElementChild;
                                    bindElements[k].removeChild(bindElements[k]._w2gBindTemplate);

                                    for (j = 0; j < property.length; j++) {
                                        arrayNode = renderArrayItem(bindElements[k], propName + "." + j, j);
                                        bindDom([arrayNode], propName + "." + j);
                                    }

                                    //Skip child bindings
                                    eachIndex = k;
                                    while (bindElements[eachIndex]._w2gBindTemplate.contains(bindElements[k + 1])) {
                                        k++;
                                    }
                                }
							}
							break;
						case "value":
							(function(prop, ele) {								
								function updateProp(){
									if(getProxyProperty(prop) !== ele.value){
										setProxyProperty(prop, ele.value);
									}
								}
								ele.addEventListener("input", updateProp);
								ele.addEventListener("change", updateProp);
							})(propName, bindElements[k]);
							renderCache[propName] = true;
							break;
                        case "volume":
                            (function(prop, ele) {
                                function updateProp(){
                                    if(getProxyProperty(prop) != ele.volume){
                                        setProxyProperty(prop, ele.volume);
                                    }
                                }
                                ele.addEventListener("volumechange", updateProp);
                            })(propName, bindElements[k]);
                            renderCache[propName] = true;
                            break;
						case "check":
							(function(prop, ele) {
								ele.addEventListener("change", function() {
									setProxyProperty(prop, ele.checked);
								});
							})(propName, bindElements[k]);
                            renderCache[propName] = true;
							break;
						case "event":
							(function(prop, event, param, cancel, ele) {
								ele.addEventListener(event, function(evt) {
								    if(typeof cancel === "undefined" || cancel === true){
                                        evt.preventDefault();
                                    }
									prop.call(obj, param, getProxyProperty(bindPrefix || ""), evt);
								});
							})(property, actionObj[1], actionObj[2], actionObj[3], bindElements[k]);
							break;
						case "toggle":
                            (function(prop, ele) {
                                ele.addEventListener("click", function() {
                                    setProxyProperty(prop, !getProxyProperty(prop));
                                });
                            })(propName, bindElements[k]);
                            break;
						default:
                            renderCache[propName] = true;
						}
					}
				}
			}			
		}

		for(var bprob in bindCache){
		    if(bindCache.hasOwnProperty(bprob)) {
                bindings[bprob] = bindings[bprob] || [];
                bindings[bprob] = bindings[bprob].concat(bindCache[bprob]);
            }
        }

		for(var prop in renderCache){
		    if(renderCache.hasOwnProperty(prop)) {
                renderProperty(prop, bindCache);
            }
        }

	}

	function renderProperty(prop, binds) {

		var i;
		binds = binds || bindings;

		if ( typeof binds[prop] !== "undefined") {
			for ( i = 0; i < binds[prop].length; i++) {

				var binding = binds[prop][i],
				    action = isArray(binding[1]) ? binding[1][0] : binding[1],
				    property = getProxyProperty(prop);

				switch(action) {
				case "text":
					binding[0].textContent = property;
					break;
                case "html":
                    binding[0].innerHTML = property;
                    break;
				case "value":
					binding[0].value = property;
					break;
				case "check":
					binding[0].checked = property;
					break;
				case "attr":
					binding[0].setAttribute(binding[1][1], property);
					break;
				case "attr_if":
				    if(property) {
                        binding[0].setAttribute(binding[1][1], "");
                    } else {
                        binding[0].removeAttribute(binding[1][1]);
                    }
                    break;
				case "property":
                    binding[0][binding[1][1]] = property;
                    break;
				case "if":
					if (isArray(property)) {
						binding[0].style.display = property.length > 0 ? "" : "none";
					} else {
					    if(isArray(binding[1])){
                            binding[0].style.display = property === binding[1][1] ? "" : "none";
                        } else {
                            binding[0].style.display = property ? "" : "none";
                        }
					}
					break;
				case "ifnot":
					if (isArray(property)) {
						binding[0].style.display = property.length > 0 ? "none" : "";
					} else {
                        if(isArray(binding[1])){
                            binding[0].style.display = property === binding[1][1] ? "none" : "";
                        } else {
                            binding[0].style.display = property ? "none" : "";
                        }
					}
					break;
				case "style":
					binding[0].style[binding[1][1]] = property;
					break;
				case "css":
                    var callParams0 = binding[1][1][0] ? binding[1][1][0].split(" ") : [];
                    var callParams1 = binding[1][1][1] ? binding[1][1][1].split(" ") : [];
                    var classList = binding[0].classList;
                    if (typeof binding[1][2] !== "undefined" ? binding[1][2] === property : property) {
                        classList.remove.apply(classList, callParams1);
                        classList.add.apply(classList, callParams0);
                    } else {
                        classList.remove.apply(classList, callParams0);
                        classList.add.apply(classList, callParams1);
                    }
					break;
                case "class":
                    if(property){
                        binding[0].classList.add(property);
                    }
                    break;
				case "volume":
                    binding[0].volume = property;
                    break;
				}
			}
		}
	}

	function renderArrayChange(prop) {
		var arrayPropery = prop.substr(0, prop.lastIndexOf("."));
		if(bindings[arrayPropery]) {
            var newItem = prop.substr(prop.lastIndexOf(".") + 1, prop.length);
            var bindElements = bindings[arrayPropery].filter(function (val) {
                return val[1] === "each";
            });
            var arr = getProxyProperty(arrayPropery);
            var i;

            if (newItem === "length") {
                for (i = 0; i < bindElements.length; i++) {
                    renderArrayLength(bindElements[i][0], arr.length, arrayPropery);
                }
            } else {
                removeBindings(prop);
                for (i = 0; i < bindElements.length; i++) {
                    removeArrayItem(bindElements[i][0], newItem);
                    var arrayNode = renderArrayItem(bindElements[i][0], prop, newItem);
                    bindDom([arrayNode], prop);
                }
            }
        }
	}

	function renderArrayItem(container, item, pos) {
		var prefix = item.substr(0, item.lastIndexOf("."));
		var template = container._w2gBindTemplate;
		var node = template.cloneNode(true);
		if (container.children.length >= pos) {
			container.insertBefore(node, container.children[pos]);
		} else {
			container.appendChild(node);
		}
		return node;
	}

	function renderArrayLength(container, length, prop) {
		var index = length;
		while ( typeof container.children[length] !== "undefined") {
			removeArrayItem(container, length);
			removeBindings(prop + "." + index);
			index++;
		}
	}

	function removeArrayItem(container, index) {
		var node = container.children[index];
		if (node) {
			container.removeChild(node);
		}
	}
	
	function setProxyProperty(key, val) {
		var parts = key.split(".");
		var pro = obj;
		var i;
		for ( i = 0; i < parts.length; i++) {
			if (pro.hasOwnProperty(parts[i])) {
				if(i === (parts.length - 1)){
					pro[parts[i]] = val;	
				} else {
					pro = pro[parts[i]];
				}				
			} else {
				break;
			}
		}
	}

	function getProxyProperty(key) {
		var parts = key.split(".");
		var property = obj;
		var pro = obj;
		var i;
		for ( i = 0; i < parts.length; i++) {
			if (pro && pro.hasOwnProperty(parts[i])) {
				property = pro[parts[i]];
				pro = property;
			} else {
                property = undefined;
				break;
			}
		}
		return property;
	}

	function getNodeList(ele, attr, self) {
		var list = [];
		if (self && ele.hasAttribute(attr)) {
			list.push(ele);
		}
		var nl = ele.querySelectorAll('[' + attr + ']');
		var i;
		for ( i = 0; i < nl.length; i++) {
			list.push(nl[i]);
		}
		return list;
	}

	function parseBinding(str) {
		str = "[" + str + "]";
		str = str.replace(/'/g, '"');
		var obj = [];
		try {
			obj = JSON.parse(str);
		} catch(e) {
			console.log(str);
			console.log(e);
		}
		return obj;
	}

	function removeBindings(str) {
		var b;
		for (b in bindings) {
			if (b.indexOf(str) === 0) {
				delete bindings[b];
			}
		}
	}

	function isArray(ar) {
		return Array.isArray(ar);
	}

	return obj;
}
