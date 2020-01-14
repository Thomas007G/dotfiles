var W2gApps = function (eleClass) {

    "use strict";

    var availApps = [],
        lastUrlSubmit = "",
        initLoad = true,
        appsObj = {
        activeApp : 0,
        activeDescription : "Search OR paste a link to any site",
        activeLogo : "",
        activeName : "",
        installedApps : [],
        showApps : false,
        auth : true,
        showMobileSearch : false,
        searchTerm : "",
        searchPage : 1,
        searchResults : [],
        itemsFound : false,
        canImport : false,
        importRunning : false,
        importDone : false,
        searching : false,
        blockAddAll : false,
        canLoadMore : false,
        searchRendered : function(){},
        click : function(val, app) {
            this.searchTerm = "";
            this.canLoadMore = false;
            this.activateMenu(app.provider_name);
        },
        dblclick : function(val, app) {
            this.searchTerm = "";
            this.canLoadMore = false;
            this.activateMenu(app.provider_name);
            this.showApps = false;
            this.searchSubmitTopbar();
        },
        toggleMobileSearch : function(){
            this.showMobileSearch = !this.showMobileSearch;
        },
        imgLoadError : function(ele, app, evt){
            if(evt.target.naturalWidth === 120 && evt.target.naturalHeight === 90 && app.id.indexOf("//www.youtube.com") === 0){
                app.provider = null;
                $w2g.getJSON((window._w2ghost ? "https://www.watch2gether.com" : "") + "/w2g_search/lookup?url=" + app.id + "&force=1").catch(function(){});
            }
        },
        activateMenu : function(name){
            this.installedApps.forEach(function(ele, index){
                if(ele.provider_name === name){
                    ele.active = true;
                    this.activeApp = index;
                    this.activeDescription = ele.description || "Search OR paste a link to any site";
                    this.activeLogo = ele.icon_path || "";
                    this.activeName = ele.provider_name || "";
                    if(window.Cookies) {
                        Cookies.set("activeApp", this.activeApp, { expires: 1, path: window.location.pathname });
                    }
                } else {
                    ele.active = false;
                }
            }.bind(this));
        },
        searchSubmitTopbar : function(){
            this.searchSubmit();
        },
        searchSubmit : function(){
            this.canImport = false;
            this.importDone = false;
            this.importRunning = false;
            this.searchResults = [];
            this.searchPage = 1;
            this.itemsFound = true;
            this.showApps = false;
            this.canLoadMore = false;
            if (this.searchTerm.trim().indexOf('http') === 0) {
                this.submitLookup();
            } else {
                this.search();
            }
        },
        search : function(){
            this.searching = true;
            lastUrlSubmit = "";
            var term = this.searchTerm.indexOf("publisher:") === 0 ? this.searchTerm : encodeURIComponent(this.searchTerm);
            availApps[this.activeApp].search(term, 10, this.searchPage, function(data){
                if(this.searchPage === 1) {
                    this.searchResults = data;
                } else {
                    var items = [this.searchResults.length, 0].concat(data);
                    Array.prototype.splice.apply(this.searchResults, items);
                }
                this.itemsFound = data.length > 0;
                this.canLoadMore = data.length >= 10 && availApps[this.activeApp].provider_name !== "youtube";
                this.searching = false;
                if (w2g.isMobile === true) {
                    $w2g.querySelector("#search-bar-input").blur();
                }
                if(initLoad === false && this.searchPage === 1){
                    this.searchRendered();
                }
                initLoad = false;
            }.bind(this));
        },
        submitLookup : function(){
            this.searching = true;
            this.canImport = false;
            this.importDone = false;
            this.importRunning = false;
            this.lookup(this.searchTerm.trim(), function(vid, provider){
                this.searching = false;
                this.itemsFound = vid.length > 0;
                if(vid.length > 0) {
                    this.searchResults = vid;
                    this.activateMenu(provider);
                    if(vid.length > 1){
                        this.canImport = true;
                    }
                    this.searchRendered();
                }
            }.bind(this));
        },
        lookup : function(url, cb){
            var result, i;
            for(i = 0; i < availApps.length; i++){
                result = availApps[i].videoLookUp(url, function(vid, provider){
                    cb(vid, provider);
                }.bind(this));
                if(result){
                    break;
                }
            }
        },
        clearSearch : function(){
            this.searchTerm = "";
        },
        play : function(val, ele){
        },
        share : function(val, ele){
        },
        addToPl : function(val, ele){
        },
        addAllToPl : function(val, ele){
        },
        suggest : function(val, ele){
        },
        loadMore : function(){
            if(this.canLoadMore) {
                this.searchPage++;
                this.search();
            }
        },
        loadMoreFromPub : function(val, ele){
            if(ele.publisherID) {
                this.searchTerm = "publisher:" + ele.publisherID;
                this.searchPage = 1;
                this.search();
            }
        },
        toggleApps : function(){
            this.showApps = !this.showApps;
        },
        topSearchFocus : function(){
            this.showApps = true;
        }
    };

    for (var i = 0; i < W2gProviders.length; i++) {
        var prov = new W2gProviders[i]();
        availApps[i] = prov;
        appsObj.installedApps[i] = {provider_name: prov.provider_name, icon_path: prov.icon_path, active: false, description: prov.description};
    }

    if(window.Cookies){
        appsObj.activeApp = isNaN(Cookies.get("activeApp")) ? 0 : Cookies.get("activeApp");
    }

    appsObj.installedApps[appsObj.activeApp].active = true;
    appsObj.activeLogo = appsObj.installedApps[appsObj.activeApp].icon_path;
    appsObj.activeName = appsObj.installedApps[appsObj.activeApp].provider_name;
    appsObj.activeDescription = appsObj.installedApps[appsObj.activeApp].description || "Search OR paste a link to any site";

    var w2gApps = new W2gDataObject(appsObj);

    w2gApps._addHandler("showApps", function(prop, val){
       if(!val){
            $w2g.querySelector("#search-bar-input").blur();
       }
    });

    w2gApps._addHandler("searchTerm", function(prop, val){
        if(val.length > 10 && val.indexOf("http") === 0 && val !== lastUrlSubmit){
            lastUrlSubmit = val;
            w2gApps.searchSubmitTopbar();
        }
    });


    new W2gBind(w2gApps, eleClass);

    return w2gApps;

};
