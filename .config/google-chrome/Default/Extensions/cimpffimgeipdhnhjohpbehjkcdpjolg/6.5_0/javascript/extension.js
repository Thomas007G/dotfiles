var W2gChromeExtension = ( function() {

		"use strict";

		var w2gLogin,
		    w2gRooms,
		    w2gShare,
    		w2gApps,
			w2gAutoComplete;

		window._w2ghost = "www.watch2gether.com";
		window.w2g = {};

		$w2g.domReady().then(function() {

            document.querySelector("#search-bar-input").focus();

			w2gShare = new W2gShare(".w2g-share");
			w2gRooms = new W2gRooms(".w2g-rooms");
			w2gLogin = new W2gLogin(".w2g-login");
			w2gApps = new W2gApps(".w2g-apps");

			browser.tabs.query({
				active : true,
				currentWindow : true
			}).then(function(tabs) {
				if (tabs[0].url.indexOf("http") === 0 && tabs[0].url.indexOf("https://" + _w2ghost) !== 0) {
					w2gShare.load(tabs[0].url);
				}
			});

			w2gLogin._addHandler("auth", function(prop, val) {
				if (val === true) {
					$w2g.show(".auth-required");
					w2gRooms.fetchRooms();
				} else {
                    $w2g.hide(".auth-required");
				}
				w2gShare.auth = val;
				w2gApps.auth = val;
			});
						
			w2gShare._addHandler("found", function(prop, val) {
				if (val === true) {
					w2gRooms.shareID = w2gShare.id;
					w2gRooms.shareTitle = w2gShare.title;
					w2gRooms.shareThumb = w2gShare.thumb;
				} else {
					w2gRooms.shareID = "";
					w2gRooms.shareTitle = "";
					w2gRooms.shareThumb = "";
				}
			});

			document.querySelector("#content").addEventListener("click", function(){
                w2gApps.showApps = false;
            });

			w2gApps._addHandler("showApps", function(prop, val){
				if(val){
					document.body.classList.add("apps-active");
				} else {
                    document.body.classList.remove("apps-active");
                    document.querySelector("#search-bar-input").focus();
				}
			});

            w2gApps._addHandler("play", function (ctx, args) {
            	w2gShare.share({"id" : args[1].id, "title" : args[1].title, "thumb" : args[1].thumb});
            });

            w2gApps._addHandler("share", function (ctx, args) {
                w2gShare.found = false;
                w2gShare.id = args[1].id;
                w2gShare.title = args[1].title;
                w2gShare.thumb = args[1].thumb;
                w2gShare.found = true;
                document.body.classList.remove("search-active");
            });

			w2gApps._addHandler("click", function(ctx, args){
				setTimeout(function(){
					document.querySelector("#search-bar-input").focus();
				}, 100);
			});

            w2gApps._addHandler("search", function(){
                document.body.classList.add("search-active");
			});

            w2gApps._addHandler("searchSubmitTopbar", function(ctx, args){
            	w2gAutoComplete.stopSuggest();
            });

            function w2gAutoComplete(ele){
                var sugCallback, shouldSuggest = true;
                new autoComplete({
                    selector: ele,
                    minChars: 2,
                    source: function(term, suggest){
                        sugCallback = suggest;
                        if(shouldSuggest) {
                            $w2g.getJSON("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + term).then(function(data){
                                if (shouldSuggest) {
                                    sugCallback(data[1]);
                                }
                            });
                        }
                        shouldSuggest = true;
                    },
                    onSelect : function(evt, term, item){
                        evt.preventDefault();
                        w2gApps.searchTerm = term;
                        w2gApps.searchSubmitTopbar();
                    }
                });

                return {stopSuggest : function(){
                        shouldSuggest = false;
                        if(sugCallback){
                            sugCallback([]);
                        }
                }};
            }
            w2gAutoComplete = new w2gAutoComplete("#search-bar-input");

            w2gLogin.check();

			//Web Request Overwrite


			var wrCallback = function(details) {
				details.requestHeaders.push({
					name : 'Referer',
					value : 'https://www.watch2gether.com'
				});
				return {
					requestHeaders : details.requestHeaders
				};
			};
			var wrFilter = {
				urls : ["<all_urls>"]
			};
			if(navigator.userAgent.indexOf("Firefox") !== -1){
                var wrOpts = ['blocking', 'requestHeaders'];
			} else {
                var wrOpts = ['blocking', 'requestHeaders', 'extraHeaders'];
			}

			browser.webRequest.onBeforeSendHeaders.addListener(wrCallback, wrFilter, wrOpts);

		});

	}());

