var W2gProviders = ( function(my) {
	
		"use strict";

		// #### THIS IS CURRENTLY BROKEN!!!! ####

		//Load Youtube API and init player
		function W2gAmazon() {
			this.provider_name = "amazon";
			this.provider_type = "search";
			this.icon_path = "/static/providers/nix.png";
			this.active = false;
			this.defaultSearch = "smartphone";
			this.options = {};

			this.options.description = "Search for <b>any</b> item on Amazon and share it in the room. Select your Amazon <b>country</b> in the search menu on the right. <i>(Movies can be purchased but not viewed on Watch2Gether.)</i>";

			this.options.select1Name = "Amazon Country";
			this.options.select1Value = "US";
			this.options.select1Options = [{
				value : "US",
				label : "US"
			}, {
				value : "CA",
				label : "Canada"
			}, {
				value : "GB",
				label : "Great Britain"
			}, {
				value : "DE",
				label : "Germany"
			}, {
				value : "ES",
				label : "Spain"
			}, {
				value : "FR",
				label : "France"
			}, {
				value : "IT",
				label : "Italy"
			}];

			/*
			 this.options.select2Name("Category");
			 this.options.select2Value("US");
			 this.options.select2Options([{
			 value : "US",
			 label : "US"
			 }, {
			 value : "CA",
			 label : "Canada"
			 }, {
			 value : "GB",
			 label : "Great Britain"
			 }, {
			 value : "DE",
			 label : "Germany"
			 }, {
			 value : "ES",
			 label : "Spain"
			 }, {
			 value : "FR",
			 label : "France"
			 }, {
			 value : "IT",
			 label : "Italy"
			 }]);
			 */
		}

		//Lookup video info through youtube API
		W2gAmazon.prototype.videoLookUp = function(url, callback) {

			var id,
			    clip = {},
			    parser,
			    locale,
			    v;

			parser = document.createElement('a');
			parser.href = url;

			if (parser.host.indexOf("www.amazon") === 0) {
				locale = parser.host.split(".").pop().toUpperCase();
				id = parser.pathname.match(/\/([A-Z 0-9]){10}/g)[0];

				jQuery.getJSON("https://www.watch2gether.com/amazon/products/" + id + ".json?locale=" + locale, function(data) {
					v = data.ItemLookupResponse.Items.Item
					clip.id = v.DetailPageURL;
                    clip.provider = this.provider_name;
					clip.title = v.ItemAttributes.Title;
					clip.publisher = "Amazon";
					clip.desc = "";
					clip.price = "";
					try {
						clip.price = v.OfferSummary.LowestNewPrice.FormattedPrice;
					} catch(e) {
					}
					clip.thumb = "/assets/amazon-logo.png";
					try {
						clip.thumb = v.MediumImage.URL;
					} catch(e) {
					}
					clip.duration = 0;
					clip.cc = false;
					clip.explicit = false;

					callback([clip], "amazon");
				}.bind(this));
                return true;
			} else {
				return false;
			}
		};

		W2gAmazon.prototype.search = function(term, count, page, callback, safe) {

			term = term || this.defaultSearch;

			var locale = this.options.select1Value();
			this.options.select1Disabled(false);

			var results = [],
			    clip;

			jQuery.getJSON("https://www.watch2gether.com/amazon/products?locale=" + locale + "&term=" + term + "&page=" + page, function(data) {
				if (Array.isArray(data.ItemSearchResponse.Items.Item)) {
					jQuery.each(data.ItemSearchResponse.Items.Item, function(k, v) {
						clip = {};
						clip.id = v.DetailPageURL;
                        clip.provider = this.provider_name;
						clip.title = v.ItemAttributes.Title;
						clip.publisher = "";
						clip.desc = "";
						clip.price = "";
						try {
							clip.price = v.OfferSummary.LowestNewPrice.FormattedPrice;
						} catch(e) {
						}
						clip.thumb = "/assets/amazon-logo.png";
						try {
							clip.thumb = v.MediumImage.URL;
						} catch(e) {
						}
						results.push(clip);
					}.bind(this));
				}
				callback(results, "amazon");
			}.bind(this));

		};

		my.push(W2gAmazon);

		return my;

	}(W2gProviders || []));

