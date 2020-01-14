/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([657,8]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserApi; });
/* harmony import */ var _safariApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var jslib_misc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BrowserApi {
    static getTabFromCurrentWindowId() {
        return __awaiter(this, void 0, void 0, function* () {
            if (BrowserApi.isChromeApi) {
                return yield BrowserApi.tabsQueryFirst({
                    active: true,
                    windowId: chrome.windows.WINDOW_ID_CURRENT,
                });
            }
            else if (BrowserApi.isSafariApi) {
                return yield BrowserApi.getTabFromCurrentWindow();
            }
        });
    }
    static getTabFromCurrentWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BrowserApi.tabsQueryFirst({
                active: true,
                currentWindow: true,
            });
        });
    }
    static getActiveTabs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BrowserApi.tabsQuery({
                active: true,
            });
        });
    }
    static tabsQuery(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (BrowserApi.isChromeApi) {
                return new Promise((resolve) => {
                    chrome.tabs.query(options, (tabs) => {
                        resolve(tabs);
                    });
                });
            }
            else if (BrowserApi.isSafariApi) {
                const tabs = yield _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('tabs_query', JSON.stringify(options));
                return tabs != null ? JSON.parse(tabs) : null;
            }
        });
    }
    static tabsQueryFirst(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tabs = yield BrowserApi.tabsQuery(options);
            if (tabs.length > 0) {
                return tabs[0];
            }
            return null;
        });
    }
    static tabSendMessageData(tab, command, data = null) {
        const obj = {
            command: command,
        };
        if (data != null) {
            obj.data = data;
        }
        return BrowserApi.tabSendMessage(tab, obj);
    }
    static tabSendMessage(tab, obj, options = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!tab || !tab.id) {
                return;
            }
            if (BrowserApi.isChromeApi) {
                return new Promise((resolve) => {
                    chrome.tabs.sendMessage(tab.id, obj, options, () => {
                        if (chrome.runtime.lastError) {
                            // Some error happened
                        }
                        resolve();
                    });
                });
            }
            else if (BrowserApi.isSafariApi) {
                if (options != null && options.frameId != null && obj.bitwardenFrameId == null) {
                    obj.bitwardenFrameId = options.frameId;
                }
                yield _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('tabs_message', JSON.stringify({
                    tab: tab,
                    obj: JSON.stringify(obj),
                    options: options,
                }), true);
            }
        });
    }
    static getBackgroundPage() {
        if (BrowserApi.isChromeApi) {
            return chrome.extension.getBackgroundPage();
        }
        else if (BrowserApi.isSafariApi) {
            return window;
        }
        else {
            return null;
        }
    }
    static getApplicationVersion() {
        if (BrowserApi.isChromeApi) {
            return chrome.runtime.getManifest().version;
        }
        else if (BrowserApi.isSafariApi) {
            return window.bitwardenApplicationVersion;
        }
        else {
            return null;
        }
    }
    static isPopupOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            if (BrowserApi.isChromeApi) {
                return Promise.resolve(chrome.extension.getViews({ type: 'popup' }).length > 0);
            }
            else if (BrowserApi.isSafariApi) {
                const open = yield _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('isPopoverOpen');
                return open === 'true';
            }
            else {
                return Promise.resolve(false);
            }
        });
    }
    static createNewTab(url, extensionPage = false) {
        if (BrowserApi.isChromeApi) {
            chrome.tabs.create({ url: url });
        }
        else if (BrowserApi.isSafariApi) {
            _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('createNewTab', url, true);
        }
    }
    static getAssetUrl(path) {
        if (BrowserApi.isChromeApi) {
            return Promise.resolve(chrome.extension.getURL(path));
        }
        else if (BrowserApi.isSafariApi) {
            return _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('getAppPath');
        }
        else {
            return Promise.resolve(null);
        }
    }
    static messageListener(name, callback) {
        if (BrowserApi.isChromeApi) {
            chrome.runtime.onMessage.addListener((msg, sender, response) => {
                callback(msg, sender, response);
            });
        }
        else if (BrowserApi.isSafariApi) {
            _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].addMessageListener(name, (message, sender, response) => {
                if (message.bitwardenFrameId != null) {
                    if (sender != null && typeof (sender) === 'object' && sender.frameId == null) {
                        sender.frameId = message.bitwardenFrameId;
                    }
                }
                callback(message, sender, response);
            });
        }
    }
    static closePopup(win) {
        if (BrowserApi.isWebExtensionsApi && BrowserApi.isFirefoxOnAndroid) {
            // Reactivating the active tab dismisses the popup tab. The promise final
            // condition is only called if the popup wasn't already dismissed (future proofing).
            // ref: https://bugzilla.mozilla.org/show_bug.cgi?id=1433604
            browser.tabs.update({ active: true }).finally(win.close);
        }
        else if (BrowserApi.isWebExtensionsApi || BrowserApi.isChromeApi) {
            win.close();
        }
        else if (BrowserApi.isSafariApi) {
            _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('hidePopover');
        }
    }
    static downloadFile(win, blobData, blobOptions, fileName) {
        if (BrowserApi.isSafariApi) {
            const type = blobOptions != null ? blobOptions.type : null;
            let data = null;
            if (type === 'text/plain' && typeof (blobData) === 'string') {
                data = blobData;
            }
            else {
                data = jslib_misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].fromBufferToB64(blobData);
            }
            _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('downloadFile', JSON.stringify({
                blobData: data,
                blobOptions: blobOptions,
                fileName: fileName,
            }), true);
        }
        else {
            const blob = new Blob([blobData], blobOptions);
            if (navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, fileName);
            }
            else {
                const a = win.document.createElement('a');
                a.href = win.URL.createObjectURL(blob);
                a.download = fileName;
                win.document.body.appendChild(a);
                a.click();
                win.document.body.removeChild(a);
            }
        }
    }
    static gaFilter() {
        return "production" !== 'production';
    }
    static getUILanguage(win) {
        if (BrowserApi.isSafariApi) {
            return win.navigator.language;
        }
        else {
            return chrome.i18n.getUILanguage();
        }
    }
    static reloadExtension(win) {
        if (win != null) {
            return win.location.reload(true);
        }
        else if (BrowserApi.isSafariApi) {
            _safariApp__WEBPACK_IMPORTED_MODULE_0__[/* SafariApp */ "a"].sendMessageToApp('reloadExtension');
        }
        else if (!BrowserApi.isSafariApi) {
            return chrome.runtime.reload();
        }
    }
}
BrowserApi.isWebExtensionsApi = (typeof browser !== 'undefined');
BrowserApi.isSafariApi = window.safariAppExtension === true;
BrowserApi.isChromeApi = !BrowserApi.isSafariApi && (typeof chrome !== 'undefined');
BrowserApi.isFirefoxOnAndroid = navigator.userAgent.indexOf('Firefox/') !== -1 &&
    navigator.userAgent.indexOf('Android') !== -1;
BrowserApi.isEdge18 = navigator.userAgent.indexOf(' Edge/18.') !== -1;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./jslib/src/enums/cipherType.ts
var cipherType = __webpack_require__(7);

// EXTERNAL MODULE: ./jslib/src/models/api/cardApi.ts
var cardApi = __webpack_require__(217);

// EXTERNAL MODULE: ./jslib/src/models/api/fieldApi.ts
var fieldApi = __webpack_require__(218);

// EXTERNAL MODULE: ./jslib/src/models/api/identityApi.ts
var identityApi = __webpack_require__(219);

// EXTERNAL MODULE: ./jslib/src/models/api/loginApi.ts
var loginApi = __webpack_require__(220);

// EXTERNAL MODULE: ./jslib/src/models/api/loginUriApi.ts
var loginUriApi = __webpack_require__(221);

// EXTERNAL MODULE: ./jslib/src/models/api/secureNoteApi.ts
var secureNoteApi = __webpack_require__(222);

// CONCATENATED MODULE: ./jslib/src/models/request/attachmentRequest.ts
class AttachmentRequest {
}

// CONCATENATED MODULE: ./jslib/src/models/request/cipherRequest.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cipherRequest_CipherRequest; });








class cipherRequest_CipherRequest {
    constructor(cipher) {
        this.type = cipher.type;
        this.folderId = cipher.folderId;
        this.organizationId = cipher.organizationId;
        this.name = cipher.name ? cipher.name.encryptedString : null;
        this.notes = cipher.notes ? cipher.notes.encryptedString : null;
        this.favorite = cipher.favorite;
        switch (this.type) {
            case cipherType["a" /* CipherType */].Login:
                this.login = new loginApi["a" /* LoginApi */]();
                this.login.uris = null;
                this.login.username = cipher.login.username ? cipher.login.username.encryptedString : null;
                this.login.password = cipher.login.password ? cipher.login.password.encryptedString : null;
                this.login.passwordRevisionDate = cipher.login.passwordRevisionDate != null ?
                    cipher.login.passwordRevisionDate.toISOString() : null;
                this.login.totp = cipher.login.totp ? cipher.login.totp.encryptedString : null;
                if (cipher.login.uris != null) {
                    this.login.uris = cipher.login.uris.map((u) => {
                        const uri = new loginUriApi["a" /* LoginUriApi */]();
                        uri.uri = u.uri != null ? u.uri.encryptedString : null;
                        uri.match = u.match != null ? u.match : null;
                        return uri;
                    });
                }
                break;
            case cipherType["a" /* CipherType */].SecureNote:
                this.secureNote = new secureNoteApi["a" /* SecureNoteApi */]();
                this.secureNote.type = cipher.secureNote.type;
                break;
            case cipherType["a" /* CipherType */].Card:
                this.card = new cardApi["a" /* CardApi */]();
                this.card.cardholderName = cipher.card.cardholderName != null ?
                    cipher.card.cardholderName.encryptedString : null;
                this.card.brand = cipher.card.brand != null ? cipher.card.brand.encryptedString : null;
                this.card.number = cipher.card.number != null ? cipher.card.number.encryptedString : null;
                this.card.expMonth = cipher.card.expMonth != null ? cipher.card.expMonth.encryptedString : null;
                this.card.expYear = cipher.card.expYear != null ? cipher.card.expYear.encryptedString : null;
                this.card.code = cipher.card.code != null ? cipher.card.code.encryptedString : null;
                break;
            case cipherType["a" /* CipherType */].Identity:
                this.identity = new identityApi["a" /* IdentityApi */]();
                this.identity.title = cipher.identity.title != null ? cipher.identity.title.encryptedString : null;
                this.identity.firstName = cipher.identity.firstName != null ?
                    cipher.identity.firstName.encryptedString : null;
                this.identity.middleName = cipher.identity.middleName != null ?
                    cipher.identity.middleName.encryptedString : null;
                this.identity.lastName = cipher.identity.lastName != null ?
                    cipher.identity.lastName.encryptedString : null;
                this.identity.address1 = cipher.identity.address1 != null ?
                    cipher.identity.address1.encryptedString : null;
                this.identity.address2 = cipher.identity.address2 != null ?
                    cipher.identity.address2.encryptedString : null;
                this.identity.address3 = cipher.identity.address3 != null ?
                    cipher.identity.address3.encryptedString : null;
                this.identity.city = cipher.identity.city != null ? cipher.identity.city.encryptedString : null;
                this.identity.state = cipher.identity.state != null ? cipher.identity.state.encryptedString : null;
                this.identity.postalCode = cipher.identity.postalCode != null ?
                    cipher.identity.postalCode.encryptedString : null;
                this.identity.country = cipher.identity.country != null ?
                    cipher.identity.country.encryptedString : null;
                this.identity.company = cipher.identity.company != null ?
                    cipher.identity.company.encryptedString : null;
                this.identity.email = cipher.identity.email != null ? cipher.identity.email.encryptedString : null;
                this.identity.phone = cipher.identity.phone != null ? cipher.identity.phone.encryptedString : null;
                this.identity.ssn = cipher.identity.ssn != null ? cipher.identity.ssn.encryptedString : null;
                this.identity.username = cipher.identity.username != null ?
                    cipher.identity.username.encryptedString : null;
                this.identity.passportNumber = cipher.identity.passportNumber != null ?
                    cipher.identity.passportNumber.encryptedString : null;
                this.identity.licenseNumber = cipher.identity.licenseNumber != null ?
                    cipher.identity.licenseNumber.encryptedString : null;
                break;
            default:
                break;
        }
        if (cipher.fields != null) {
            this.fields = cipher.fields.map((f) => {
                const field = new fieldApi["a" /* FieldApi */]();
                field.type = f.type;
                field.name = f.name ? f.name.encryptedString : null;
                field.value = f.value ? f.value.encryptedString : null;
                return field;
            });
        }
        if (cipher.passwordHistory != null) {
            this.passwordHistory = [];
            cipher.passwordHistory.forEach((ph) => {
                this.passwordHistory.push({
                    lastUsedDate: ph.lastUsedDate,
                    password: ph.password ? ph.password.encryptedString : null,
                });
            });
        }
        if (cipher.attachments != null) {
            this.attachments = {};
            this.attachments2 = {};
            cipher.attachments.forEach((attachment) => {
                const fileName = attachment.fileName ? attachment.fileName.encryptedString : null;
                this.attachments[attachment.id] = fileName;
                const attachmentRequest = new AttachmentRequest();
                attachmentRequest.fileName = fileName;
                if (attachment.key != null) {
                    attachmentRequest.key = attachment.key.encryptedString;
                }
                this.attachments2[attachment.id] = attachmentRequest;
            });
        }
    }
}


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoFactorProviderType; });
var TwoFactorProviderType;
(function (TwoFactorProviderType) {
    TwoFactorProviderType[TwoFactorProviderType["Authenticator"] = 0] = "Authenticator";
    TwoFactorProviderType[TwoFactorProviderType["Email"] = 1] = "Email";
    TwoFactorProviderType[TwoFactorProviderType["Duo"] = 2] = "Duo";
    TwoFactorProviderType[TwoFactorProviderType["Yubikey"] = 3] = "Yubikey";
    TwoFactorProviderType[TwoFactorProviderType["U2f"] = 4] = "U2f";
    TwoFactorProviderType[TwoFactorProviderType["Remember"] = 5] = "Remember";
    TwoFactorProviderType[TwoFactorProviderType["OrganizationDuo"] = 6] = "OrganizationDuo";
})(TwoFactorProviderType || (TwoFactorProviderType = {}));


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./jslib/src/enums/twoFactorProviderType.ts
var twoFactorProviderType = __webpack_require__(11);

// CONCATENATED MODULE: ./jslib/src/models/domain/authResult.ts
class AuthResult {
    constructor() {
        this.twoFactor = false;
        this.twoFactorProviders = null;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/request/deviceRequest.ts
class DeviceRequest {
    constructor(appId, platformUtilsService) {
        this.type = platformUtilsService.getDevice();
        this.name = platformUtilsService.getDeviceString();
        this.identifier = appId;
        this.pushToken = null;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/request/keysRequest.ts
var keysRequest = __webpack_require__(139);

// CONCATENATED MODULE: ./jslib/src/models/request/preloginRequest.ts
class PreloginRequest {
    constructor(email) {
        this.email = email;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/request/tokenRequest.ts
class TokenRequest {
    constructor(email, masterPasswordHash, provider, token, remember, device) {
        this.email = email;
        this.masterPasswordHash = masterPasswordHash;
        this.token = token;
        this.provider = provider;
        this.remember = remember;
        this.device = device != null ? device : null;
    }
    toIdentityToken(clientId) {
        const obj = {
            grant_type: 'password',
            username: this.email,
            password: this.masterPasswordHash,
            scope: 'api offline_access',
            client_id: clientId,
        };
        if (this.device) {
            obj.deviceType = this.device.type;
            obj.deviceIdentifier = this.device.identifier;
            obj.deviceName = this.device.name;
            // no push tokens for browser apps yet
            // obj.devicePushToken = this.device.pushToken;
        }
        if (this.token && this.provider != null) {
            obj.twoFactorToken = this.token;
            obj.twoFactorProvider = this.provider;
            obj.twoFactorRemember = this.remember ? '1' : '0';
        }
        return obj;
    }
}

// CONCATENATED MODULE: ./jslib/src/services/auth.service.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TwoFactorProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth_service_AuthService; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const TwoFactorProviders = {
    [twoFactorProviderType["a" /* TwoFactorProviderType */].Authenticator]: {
        type: twoFactorProviderType["a" /* TwoFactorProviderType */].Authenticator,
        name: null,
        description: null,
        priority: 1,
        sort: 1,
        premium: false,
    },
    [twoFactorProviderType["a" /* TwoFactorProviderType */].Yubikey]: {
        type: twoFactorProviderType["a" /* TwoFactorProviderType */].Yubikey,
        name: null,
        description: null,
        priority: 3,
        sort: 2,
        premium: true,
    },
    [twoFactorProviderType["a" /* TwoFactorProviderType */].Duo]: {
        type: twoFactorProviderType["a" /* TwoFactorProviderType */].Duo,
        name: 'Duo',
        description: null,
        priority: 2,
        sort: 3,
        premium: true,
    },
    [twoFactorProviderType["a" /* TwoFactorProviderType */].OrganizationDuo]: {
        type: twoFactorProviderType["a" /* TwoFactorProviderType */].OrganizationDuo,
        name: 'Duo (Organization)',
        description: null,
        priority: 10,
        sort: 4,
        premium: false,
    },
    [twoFactorProviderType["a" /* TwoFactorProviderType */].U2f]: {
        type: twoFactorProviderType["a" /* TwoFactorProviderType */].U2f,
        name: null,
        description: null,
        priority: 4,
        sort: 5,
        premium: true,
    },
    [twoFactorProviderType["a" /* TwoFactorProviderType */].Email]: {
        type: twoFactorProviderType["a" /* TwoFactorProviderType */].Email,
        name: null,
        description: null,
        priority: 0,
        sort: 6,
        premium: false,
    },
};
class auth_service_AuthService {
    constructor(cryptoService, apiService, userService, tokenService, appIdService, i18nService, platformUtilsService, messagingService, setCryptoKeys = true) {
        this.cryptoService = cryptoService;
        this.apiService = apiService;
        this.userService = userService;
        this.tokenService = tokenService;
        this.appIdService = appIdService;
        this.i18nService = i18nService;
        this.platformUtilsService = platformUtilsService;
        this.messagingService = messagingService;
        this.setCryptoKeys = setCryptoKeys;
        this.selectedTwoFactorProviderType = null;
    }
    init() {
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Email].name = this.i18nService.t('emailTitle');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Email].description = this.i18nService.t('emailDesc');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Authenticator].name = this.i18nService.t('authenticatorAppTitle');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Authenticator].description =
            this.i18nService.t('authenticatorAppDesc');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Duo].description = this.i18nService.t('duoDesc');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].OrganizationDuo].name =
            'Duo (' + this.i18nService.t('organization') + ')';
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].OrganizationDuo].description =
            this.i18nService.t('duoOrganizationDesc');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].U2f].name = this.i18nService.t('u2fTitle');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].U2f].description = this.i18nService.t('u2fDesc');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Yubikey].name = this.i18nService.t('yubiKeyTitle');
        TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Yubikey].description = this.i18nService.t('yubiKeyDesc');
    }
    logIn(email, masterPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedTwoFactorProviderType = null;
            const key = yield this.makePreloginKey(masterPassword, email);
            const hashedPassword = yield this.cryptoService.hashPassword(masterPassword, key);
            return yield this.logInHelper(email, hashedPassword, key);
        });
    }
    logInTwoFactor(twoFactorProvider, twoFactorToken, remember) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.logInHelper(this.email, this.masterPasswordHash, this.key, twoFactorProvider, twoFactorToken, remember);
        });
    }
    logInComplete(email, masterPassword, twoFactorProvider, twoFactorToken, remember) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedTwoFactorProviderType = null;
            const key = yield this.makePreloginKey(masterPassword, email);
            const hashedPassword = yield this.cryptoService.hashPassword(masterPassword, key);
            return yield this.logInHelper(email, hashedPassword, key, twoFactorProvider, twoFactorToken, remember);
        });
    }
    logOut(callback) {
        callback();
        this.messagingService.send('loggedOut');
    }
    getSupportedTwoFactorProviders(win) {
        const providers = [];
        if (this.twoFactorProvidersData == null) {
            return providers;
        }
        if (this.twoFactorProvidersData.has(twoFactorProviderType["a" /* TwoFactorProviderType */].OrganizationDuo) &&
            this.platformUtilsService.supportsDuo()) {
            providers.push(TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].OrganizationDuo]);
        }
        if (this.twoFactorProvidersData.has(twoFactorProviderType["a" /* TwoFactorProviderType */].Authenticator)) {
            providers.push(TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Authenticator]);
        }
        if (this.twoFactorProvidersData.has(twoFactorProviderType["a" /* TwoFactorProviderType */].Yubikey)) {
            providers.push(TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Yubikey]);
        }
        if (this.twoFactorProvidersData.has(twoFactorProviderType["a" /* TwoFactorProviderType */].Duo) && this.platformUtilsService.supportsDuo()) {
            providers.push(TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Duo]);
        }
        if (this.twoFactorProvidersData.has(twoFactorProviderType["a" /* TwoFactorProviderType */].U2f) && this.platformUtilsService.supportsU2f(win)) {
            providers.push(TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].U2f]);
        }
        if (this.twoFactorProvidersData.has(twoFactorProviderType["a" /* TwoFactorProviderType */].Email)) {
            providers.push(TwoFactorProviders[twoFactorProviderType["a" /* TwoFactorProviderType */].Email]);
        }
        return providers;
    }
    getDefaultTwoFactorProvider(u2fSupported) {
        if (this.twoFactorProvidersData == null) {
            return null;
        }
        if (this.selectedTwoFactorProviderType != null &&
            this.twoFactorProvidersData.has(this.selectedTwoFactorProviderType)) {
            return this.selectedTwoFactorProviderType;
        }
        let providerType = null;
        let providerPriority = -1;
        this.twoFactorProvidersData.forEach((value, type) => {
            const provider = TwoFactorProviders[type];
            if (provider != null && provider.priority > providerPriority) {
                if (type === twoFactorProviderType["a" /* TwoFactorProviderType */].U2f && !u2fSupported) {
                    return;
                }
                providerType = type;
                providerPriority = provider.priority;
            }
        });
        return providerType;
    }
    makePreloginKey(masterPassword, email) {
        return __awaiter(this, void 0, void 0, function* () {
            email = email.trim().toLowerCase();
            this.kdf = null;
            this.kdfIterations = null;
            try {
                const preloginResponse = yield this.apiService.postPrelogin(new PreloginRequest(email));
                if (preloginResponse != null) {
                    this.kdf = preloginResponse.kdf;
                    this.kdfIterations = preloginResponse.kdfIterations;
                }
            }
            catch (e) {
                if (e == null || e.statusCode !== 404) {
                    throw e;
                }
            }
            return this.cryptoService.makeKey(masterPassword, email, this.kdf, this.kdfIterations);
        });
    }
    logInHelper(email, hashedPassword, key, twoFactorProvider, twoFactorToken, remember) {
        return __awaiter(this, void 0, void 0, function* () {
            const storedTwoFactorToken = yield this.tokenService.getTwoFactorToken(email);
            const appId = yield this.appIdService.getAppId();
            const deviceRequest = new DeviceRequest(appId, this.platformUtilsService);
            let request;
            if (twoFactorToken != null && twoFactorProvider != null) {
                request = new TokenRequest(email, hashedPassword, twoFactorProvider, twoFactorToken, remember, deviceRequest);
            }
            else if (storedTwoFactorToken != null) {
                request = new TokenRequest(email, hashedPassword, twoFactorProviderType["a" /* TwoFactorProviderType */].Remember, storedTwoFactorToken, false, deviceRequest);
            }
            else {
                request = new TokenRequest(email, hashedPassword, null, null, false, deviceRequest);
            }
            const response = yield this.apiService.postIdentityToken(request);
            this.clearState();
            const result = new AuthResult();
            result.twoFactor = !response.accessToken;
            if (result.twoFactor) {
                // two factor required
                const twoFactorResponse = response;
                this.email = email;
                this.masterPasswordHash = hashedPassword;
                this.key = this.setCryptoKeys ? key : null;
                this.twoFactorProvidersData = twoFactorResponse.twoFactorProviders2;
                result.twoFactorProviders = twoFactorResponse.twoFactorProviders2;
                return result;
            }
            const tokenResponse = response;
            if (tokenResponse.twoFactorToken != null) {
                yield this.tokenService.setTwoFactorToken(tokenResponse.twoFactorToken, email);
            }
            yield this.tokenService.setTokens(tokenResponse.accessToken, tokenResponse.refreshToken);
            yield this.userService.setInformation(this.tokenService.getUserId(), this.tokenService.getEmail(), this.kdf, this.kdfIterations);
            if (this.setCryptoKeys) {
                yield this.cryptoService.setKey(key);
                yield this.cryptoService.setKeyHash(hashedPassword);
                yield this.cryptoService.setEncKey(tokenResponse.key);
                // User doesn't have a key pair yet (old account), let's generate one for them
                if (tokenResponse.privateKey == null) {
                    try {
                        const keyPair = yield this.cryptoService.makeKeyPair();
                        yield this.apiService.postAccountKeys(new keysRequest["a" /* KeysRequest */](keyPair[0], keyPair[1].encryptedString));
                        tokenResponse.privateKey = keyPair[1].encryptedString;
                    }
                    catch (e) {
                        // tslint:disable-next-line
                        console.error(e);
                    }
                }
                yield this.cryptoService.setEncPrivateKey(tokenResponse.privateKey);
            }
            this.messagingService.send('loggedIn');
            return result;
        });
    }
    clearState() {
        this.email = null;
        this.masterPasswordHash = null;
        this.twoFactorProvidersData = null;
        this.selectedTwoFactorProviderType = null;
    }
}


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseResponse; });
class BaseResponse {
    constructor(response) {
        this.response = response;
    }
    getResponseProperty(propertyName, response = null, exactName = false) {
        if (propertyName == null || propertyName === '') {
            throw new Error('propertyName must not be null/empty.');
        }
        if (response == null && this.response != null) {
            response = this.response;
        }
        if (response == null) {
            return null;
        }
        if (!exactName && response[propertyName] === undefined) {
            let otherCasePropertyName = null;
            if (propertyName.charAt(0) === propertyName.charAt(0).toUpperCase()) {
                otherCasePropertyName = propertyName.charAt(0).toLowerCase();
            }
            else {
                otherCasePropertyName = propertyName.charAt(0).toUpperCase();
            }
            if (propertyName.length > 1) {
                otherCasePropertyName += propertyName.slice(1);
            }
            propertyName = otherCasePropertyName;
            if (response[propertyName] === undefined) {
                propertyName = propertyName.toLowerCase();
            }
            if (response[propertyName] === undefined) {
                propertyName = propertyName.toUpperCase();
            }
        }
        return response[propertyName];
    }
}


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cipher; });
/* harmony import */ var _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _data_cipherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _view_cipherView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _attachment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(239);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(231);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(232);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(233);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(234);
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(236);
/* harmony import */ var _secureNote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(237);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class Cipher extends _domainBase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false, localData = null) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            id: null,
            userId: null,
            organizationId: null,
            folderId: null,
            name: null,
            notes: null,
        }, alreadyEncrypted, ['id', 'userId', 'organizationId', 'folderId']);
        this.type = obj.type;
        this.favorite = obj.favorite;
        this.organizationUseTotp = obj.organizationUseTotp;
        this.edit = obj.edit;
        this.revisionDate = obj.revisionDate != null ? new Date(obj.revisionDate) : null;
        this.collectionIds = obj.collectionIds;
        this.localData = localData;
        switch (this.type) {
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login:
                this.login = new _login__WEBPACK_IMPORTED_MODULE_8__[/* Login */ "a"](obj.login, alreadyEncrypted);
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].SecureNote:
                this.secureNote = new _secureNote__WEBPACK_IMPORTED_MODULE_10__[/* SecureNote */ "a"](obj.secureNote, alreadyEncrypted);
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Card:
                this.card = new _card__WEBPACK_IMPORTED_MODULE_4__[/* Card */ "a"](obj.card, alreadyEncrypted);
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Identity:
                this.identity = new _identity__WEBPACK_IMPORTED_MODULE_7__[/* Identity */ "a"](obj.identity, alreadyEncrypted);
                break;
            default:
                break;
        }
        if (obj.attachments != null) {
            this.attachments = obj.attachments.map((a) => new _attachment__WEBPACK_IMPORTED_MODULE_3__[/* Attachment */ "a"](a, alreadyEncrypted));
        }
        else {
            this.attachments = null;
        }
        if (obj.fields != null) {
            this.fields = obj.fields.map((f) => new _field__WEBPACK_IMPORTED_MODULE_6__[/* Field */ "a"](f, alreadyEncrypted));
        }
        else {
            this.fields = null;
        }
        if (obj.passwordHistory != null) {
            this.passwordHistory = obj.passwordHistory.map((ph) => new _password__WEBPACK_IMPORTED_MODULE_9__[/* Password */ "a"](ph, alreadyEncrypted));
        }
        else {
            this.passwordHistory = null;
        }
    }
    decrypt() {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new _view_cipherView__WEBPACK_IMPORTED_MODULE_2__[/* CipherView */ "a"](this);
            yield this.decryptObj(model, {
                name: null,
                notes: null,
            }, this.organizationId);
            switch (this.type) {
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login:
                    model.login = yield this.login.decrypt(this.organizationId);
                    break;
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].SecureNote:
                    model.secureNote = yield this.secureNote.decrypt(this.organizationId);
                    break;
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Card:
                    model.card = yield this.card.decrypt(this.organizationId);
                    break;
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Identity:
                    model.identity = yield this.identity.decrypt(this.organizationId);
                    break;
                default:
                    break;
            }
            const orgId = this.organizationId;
            if (this.attachments != null && this.attachments.length > 0) {
                const attachments = [];
                yield this.attachments.reduce((promise, attachment) => {
                    return promise.then(() => {
                        return attachment.decrypt(orgId);
                    }).then((decAttachment) => {
                        attachments.push(decAttachment);
                    });
                }, Promise.resolve());
                model.attachments = attachments;
            }
            if (this.fields != null && this.fields.length > 0) {
                const fields = [];
                yield this.fields.reduce((promise, field) => {
                    return promise.then(() => {
                        return field.decrypt(orgId);
                    }).then((decField) => {
                        fields.push(decField);
                    });
                }, Promise.resolve());
                model.fields = fields;
            }
            if (this.passwordHistory != null && this.passwordHistory.length > 0) {
                const passwordHistory = [];
                yield this.passwordHistory.reduce((promise, ph) => {
                    return promise.then(() => {
                        return ph.decrypt(orgId);
                    }).then((decPh) => {
                        passwordHistory.push(decPh);
                    });
                }, Promise.resolve());
                model.passwordHistory = passwordHistory;
            }
            return model;
        });
    }
    toCipherData(userId) {
        const c = new _data_cipherData__WEBPACK_IMPORTED_MODULE_1__[/* CipherData */ "a"]();
        c.id = this.id;
        c.organizationId = this.organizationId;
        c.folderId = this.folderId;
        c.userId = this.organizationId != null ? userId : null;
        c.edit = this.edit;
        c.organizationUseTotp = this.organizationUseTotp;
        c.favorite = this.favorite;
        c.revisionDate = this.revisionDate != null ? this.revisionDate.toISOString() : null;
        c.type = this.type;
        c.collectionIds = this.collectionIds;
        this.buildDataModel(this, c, {
            name: null,
            notes: null,
        });
        switch (c.type) {
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login:
                c.login = this.login.toLoginData();
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].SecureNote:
                c.secureNote = this.secureNote.toSecureNoteData();
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Card:
                c.card = this.card.toCardData();
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Identity:
                c.identity = this.identity.toIdentityData();
                break;
            default:
                break;
        }
        if (this.fields != null) {
            c.fields = this.fields.map((f) => f.toFieldData());
        }
        if (this.attachments != null) {
            c.attachments = this.attachments.map((a) => a.toAttachmentData());
        }
        if (this.passwordHistory != null) {
            c.passwordHistory = this.passwordHistory.map((ph) => ph.toPasswordHistoryData());
        }
        return c;
    }
}


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureNoteType; });
var SecureNoteType;
(function (SecureNoteType) {
    SecureNoteType[SecureNoteType["Generic"] = 0] = "Generic";
})(SecureNoteType || (SecureNoteType = {}));


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnalyticsIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Analytics; });
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _enums_deviceType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const GaObj = 'ga';
const AnalyticsIds = {
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].ChromeExtension]: 'UA-81915606-6',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].FirefoxExtension]: 'UA-81915606-7',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].OperaExtension]: 'UA-81915606-8',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].EdgeExtension]: 'UA-81915606-9',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].VivaldiExtension]: 'UA-81915606-15',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].SafariExtension]: 'UA-81915606-16',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].WindowsDesktop]: 'UA-81915606-17',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].LinuxDesktop]: 'UA-81915606-19',
    [_enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].MacOsDesktop]: 'UA-81915606-18',
};
class Analytics {
    constructor(win, gaFilter, platformUtilsService, storageService, appIdService, dependencyResolver) {
        this.gaFilter = gaFilter;
        this.platformUtilsService = platformUtilsService;
        this.storageService = storageService;
        this.appIdService = appIdService;
        this.dependencyResolver = dependencyResolver;
        this.gaTrackingId = null;
        this.defaultDisabled = false;
        if (dependencyResolver != null) {
            const deps = dependencyResolver();
            if (platformUtilsService == null && deps.platformUtilsService) {
                this.platformUtilsService = deps.platformUtilsService;
            }
            if (storageService == null && deps.storageService) {
                this.storageService = deps.storageService;
            }
            if (appIdService == null && deps.appIdService) {
                this.appIdService = deps.appIdService;
            }
        }
        this.appVersion = this.platformUtilsService.getApplicationVersion();
        this.defaultDisabled = this.platformUtilsService.getDevice() === _enums_deviceType__WEBPACK_IMPORTED_MODULE_1__[/* DeviceType */ "a"].FirefoxExtension ||
            this.platformUtilsService.isMacAppStore();
        this.gaTrackingId = this.platformUtilsService.analyticsId();
        win.GoogleAnalyticsObject = GaObj;
        win[GaObj] = (action, param1, param2) => __awaiter(this, void 0, void 0, function* () {
            yield this.ga(action, param1, param2);
        });
    }
    ga(action, param1, param2) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
            if (this.gaFilter != null && this.gaFilter()) {
                return;
            }
            const disabled = yield this.storageService.get(_services_constants_service__WEBPACK_IMPORTED_MODULE_0__[/* ConstantsService */ "a"].disableGaKey);
            if ((this.defaultDisabled && disabled == null) || disabled != null && disabled) {
                return;
            }
            if (action !== 'send' || !param1) {
                return;
            }
            const gaAnonAppId = yield this.appIdService.getAnonymousAppId();
            const version = encodeURIComponent(this.appVersion);
            let message = 'v=1&tid=' + this.gaTrackingId + '&cid=' + gaAnonAppId + '&cd1=' + version;
            if (param1 === 'pageview' && param2) {
                message += this.gaTrackPageView(param2);
            }
            else if (typeof param1 === 'object' && param1.hitType === 'pageview') {
                message += this.gaTrackPageView(param1.page);
            }
            else if (param1 === 'event' && param2) {
                message += this.gaTrackEvent(param2);
            }
            else if (typeof param1 === 'object' && param1.hitType === 'event') {
                message += this.gaTrackEvent(param1);
            }
            const request = new XMLHttpRequest();
            request.open('POST', 'https://www.google-analytics.com/collect', true);
            request.send(message);
        });
    }
    gaTrackEvent(options) {
        return '&t=event&ec=' + (options.eventCategory ? encodeURIComponent(options.eventCategory) : 'Event') +
            '&ea=' + encodeURIComponent(options.eventAction) +
            (options.eventLabel ? '&el=' + encodeURIComponent(options.eventLabel) : '') +
            (options.eventValue ? '&ev=' + encodeURIComponent(options.eventValue) : '') +
            (options.page ? '&dp=' + this.cleanPagePath(options.page) : '');
    }
    gaTrackPageView(pagePath) {
        return '&t=pageview&dp=' + this.cleanPagePath(pagePath);
    }
    cleanPagePath(pagePath) {
        const paramIndex = pagePath.indexOf('?');
        if (paramIndex > -1) {
            pagePath = pagePath.substring(0, paramIndex);
        }
        if (pagePath.indexOf('!/') === 0 || pagePath.indexOf('#/') === 0) {
            pagePath = pagePath.substring(1);
        }
        const pathParts = pagePath.split('/');
        const newPathParts = [];
        pathParts.forEach((p) => {
            if (p.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)) {
                newPathParts.push('__guid__');
            }
            else {
                newPathParts.push(p);
            }
        });
        return encodeURIComponent(newPathParts.join('/'));
    }
}


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysRequest; });
class KeysRequest {
    constructor(publicKey, encryptedPrivateKey) {
        this.publicKey = publicKey;
        this.encryptedPrivateKey = encryptedPrivateKey;
    }
}


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceType; });
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["Android"] = 0] = "Android";
    DeviceType[DeviceType["iOS"] = 1] = "iOS";
    DeviceType[DeviceType["ChromeExtension"] = 2] = "ChromeExtension";
    DeviceType[DeviceType["FirefoxExtension"] = 3] = "FirefoxExtension";
    DeviceType[DeviceType["OperaExtension"] = 4] = "OperaExtension";
    DeviceType[DeviceType["EdgeExtension"] = 5] = "EdgeExtension";
    DeviceType[DeviceType["WindowsDesktop"] = 6] = "WindowsDesktop";
    DeviceType[DeviceType["MacOsDesktop"] = 7] = "MacOsDesktop";
    DeviceType[DeviceType["LinuxDesktop"] = 8] = "LinuxDesktop";
    DeviceType[DeviceType["ChromeBrowser"] = 9] = "ChromeBrowser";
    DeviceType[DeviceType["FirefoxBrowser"] = 10] = "FirefoxBrowser";
    DeviceType[DeviceType["OperaBrowser"] = 11] = "OperaBrowser";
    DeviceType[DeviceType["EdgeBrowser"] = 12] = "EdgeBrowser";
    DeviceType[DeviceType["IEBrowser"] = 13] = "IEBrowser";
    DeviceType[DeviceType["UnknownBrowser"] = 14] = "UnknownBrowser";
    DeviceType[DeviceType["AndroidAmazon"] = 15] = "AndroidAmazon";
    DeviceType[DeviceType["UWP"] = 16] = "UWP";
    DeviceType[DeviceType["SafariBrowser"] = 17] = "SafariBrowser";
    DeviceType[DeviceType["VivaldiBrowser"] = 18] = "VivaldiBrowser";
    DeviceType[DeviceType["VivaldiExtension"] = 19] = "VivaldiExtension";
    DeviceType[DeviceType["SafariExtension"] = 20] = "SafariExtension";
})(DeviceType || (DeviceType = {}));


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationUserStatusType; });
var OrganizationUserStatusType;
(function (OrganizationUserStatusType) {
    OrganizationUserStatusType[OrganizationUserStatusType["Invited"] = 0] = "Invited";
    OrganizationUserStatusType[OrganizationUserStatusType["Accepted"] = 1] = "Accepted";
    OrganizationUserStatusType[OrganizationUserStatusType["Confirmed"] = 2] = "Confirmed";
})(OrganizationUserStatusType || (OrganizationUserStatusType = {}));


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldView; });
class FieldView {
    constructor(f) {
        this.name = null;
        this.value = null;
        this.type = null;
        if (!f) {
            return;
        }
        this.type = f.type;
    }
    get maskedValue() {
        return this.value != null ? '••••••••' : null;
    }
}


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
class StateService {
    constructor() {
        this.state = {};
    }
    get(key) {
        if (this.state.hasOwnProperty(key)) {
            return Promise.resolve(this.state[key]);
        }
        return Promise.resolve(null);
    }
    save(key, obj) {
        this.state[key] = obj;
        return Promise.resolve();
    }
    remove(key) {
        delete this.state[key];
        return Promise.resolve();
    }
    purge() {
        this.state = {};
        return Promise.resolve();
    }
}


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KdfType; });
var KdfType;
(function (KdfType) {
    KdfType[KdfType["PBKDF2_SHA256"] = 0] = "PBKDF2_SHA256";
})(KdfType || (KdfType = {}));


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserMessagingService; });
/* harmony import */ var _browser_browserApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _browser_safariApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);


class BrowserMessagingService {
    send(subscriber, arg = {}) {
        const message = Object.assign({}, { command: subscriber }, arg);
        if (_browser_browserApi__WEBPACK_IMPORTED_MODULE_0__[/* BrowserApi */ "a"].isSafariApi) {
            _browser_safariApp__WEBPACK_IMPORTED_MODULE_1__[/* SafariApp */ "a"].sendMessageToApp(subscriber, arg);
            _browser_safariApp__WEBPACK_IMPORTED_MODULE_1__[/* SafariApp */ "a"].sendMessageToListeners(message, 'BrowserMessagingService', null);
        }
        else {
            chrome.runtime.sendMessage(message);
        }
    }
}


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums_cipherType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _enums_deviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _enums_fieldType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class SearchService {
    constructor(cipherService, platformUtilsService) {
        this.cipherService = cipherService;
        this.indexing = false;
        this.index = null;
        this.onlySearchName = false;
        this.onlySearchName = platformUtilsService == null ||
            platformUtilsService.getDevice() === _enums_deviceType__WEBPACK_IMPORTED_MODULE_2__[/* DeviceType */ "a"].EdgeExtension;
    }
    clearIndex() {
        this.index = null;
    }
    isSearchable(query) {
        const notSearchable = query == null || (this.index == null && query.length < 2) ||
            (this.index != null && query.length < 2 && query.indexOf('>') !== 0);
        return !notSearchable;
    }
    indexCiphers() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.indexing) {
                return;
            }
            // tslint:disable-next-line
            console.time('search indexing');
            this.indexing = true;
            this.index = null;
            const builder = new lunr__WEBPACK_IMPORTED_MODULE_0__["Builder"]();
            builder.ref('id');
            builder.field('shortid', { boost: 100, extractor: (c) => c.id.substr(0, 8) });
            builder.field('name', { boost: 10 });
            builder.field('subtitle', {
                boost: 5,
                extractor: (c) => {
                    if (c.subTitle != null && c.type === _enums_cipherType__WEBPACK_IMPORTED_MODULE_1__[/* CipherType */ "a"].Card) {
                        return c.subTitle.replace(/\*/g, '');
                    }
                    return c.subTitle;
                },
            });
            builder.field('notes');
            builder.field('login.username', {
                extractor: (c) => c.type === _enums_cipherType__WEBPACK_IMPORTED_MODULE_1__[/* CipherType */ "a"].Login && c.login != null ? c.login.username : null,
            });
            builder.field('login.uris', { boost: 2, extractor: (c) => this.uriExtractor(c) });
            builder.field('fields', { extractor: (c) => this.fieldExtractor(c, false) });
            builder.field('fields_joined', { extractor: (c) => this.fieldExtractor(c, true) });
            builder.field('attachments', { extractor: (c) => this.attachmentExtractor(c, false) });
            builder.field('attachments_joined', { extractor: (c) => this.attachmentExtractor(c, true) });
            builder.field('organizationid', { extractor: (c) => c.organizationId });
            const ciphers = yield this.cipherService.getAllDecrypted();
            ciphers.forEach((c) => builder.add(c));
            this.index = builder.build();
            this.indexing = false;
            // tslint:disable-next-line
            console.timeEnd('search indexing');
        });
    }
    searchCiphers(query, filter = null, ciphers = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            if (query != null) {
                query = query.trim().toLowerCase();
            }
            if (query === '') {
                query = null;
            }
            if (ciphers == null) {
                ciphers = yield this.cipherService.getAllDecrypted();
            }
            if (filter != null) {
                ciphers = ciphers.filter(filter);
            }
            if (!this.isSearchable(query)) {
                return ciphers;
            }
            if (this.indexing) {
                yield new Promise((r) => setTimeout(r, 250));
                if (this.indexing) {
                    yield new Promise((r) => setTimeout(r, 500));
                }
            }
            const index = this.getIndexForSearch();
            if (index == null) {
                // Fall back to basic search if index is not available
                return this.searchCiphersBasic(ciphers, query);
            }
            const ciphersMap = new Map();
            ciphers.forEach((c) => ciphersMap.set(c.id, c));
            let searchResults = null;
            const isQueryString = query != null && query.length > 1 && query.indexOf('>') === 0;
            if (isQueryString) {
                try {
                    searchResults = index.search(query.substr(1).trim());
                }
                catch (_a) { }
            }
            else {
                // tslint:disable-next-line
                const soWild = lunr__WEBPACK_IMPORTED_MODULE_0__["Query"].wildcard.LEADING | lunr__WEBPACK_IMPORTED_MODULE_0__["Query"].wildcard.TRAILING;
                searchResults = index.query((q) => {
                    lunr__WEBPACK_IMPORTED_MODULE_0__["tokenizer"](query).forEach((token) => {
                        const t = token.toString();
                        q.term(t, { fields: ['name'], wildcard: soWild });
                        q.term(t, { fields: ['subtitle'], wildcard: soWild });
                        q.term(t, { fields: ['login.uris'], wildcard: soWild });
                        q.term(t, {});
                    });
                });
            }
            if (searchResults != null) {
                searchResults.forEach((r) => {
                    if (ciphersMap.has(r.ref)) {
                        results.push(ciphersMap.get(r.ref));
                    }
                });
            }
            return results;
        });
    }
    searchCiphersBasic(ciphers, query) {
        query = query.trim().toLowerCase();
        return ciphers.filter((c) => {
            if (c.name != null && c.name.toLowerCase().indexOf(query) > -1) {
                return true;
            }
            if (this.onlySearchName) {
                return false;
            }
            if (query.length >= 8 && c.id.startsWith(query)) {
                return true;
            }
            if (c.subTitle != null && c.subTitle.toLowerCase().indexOf(query) > -1) {
                return true;
            }
            if (c.login && c.login.uri != null && c.login.uri.toLowerCase().indexOf(query) > -1) {
                return true;
            }
            return false;
        });
    }
    getIndexForSearch() {
        return this.index;
    }
    fieldExtractor(c, joined) {
        if (!c.hasFields) {
            return null;
        }
        let fields = [];
        c.fields.forEach((f) => {
            if (f.name != null) {
                fields.push(f.name);
            }
            if (f.type === _enums_fieldType__WEBPACK_IMPORTED_MODULE_3__[/* FieldType */ "a"].Text && f.value != null) {
                fields.push(f.value);
            }
        });
        fields = fields.filter((f) => f.trim() !== '');
        if (fields.length === 0) {
            return null;
        }
        return joined ? fields.join(' ') : fields;
    }
    attachmentExtractor(c, joined) {
        if (!c.hasAttachments) {
            return null;
        }
        let attachments = [];
        c.attachments.forEach((a) => {
            if (a != null && a.fileName != null) {
                if (joined && a.fileName.indexOf('.') > -1) {
                    attachments.push(a.fileName.substr(0, a.fileName.lastIndexOf('.')));
                }
                else {
                    attachments.push(a.fileName);
                }
            }
        });
        attachments = attachments.filter((f) => f.trim() !== '');
        if (attachments.length === 0) {
            return null;
        }
        return joined ? attachments.join(' ') : attachments;
    }
    uriExtractor(c) {
        if (c.type !== _enums_cipherType__WEBPACK_IMPORTED_MODULE_1__[/* CipherType */ "a"].Login || c.login == null || !c.login.hasUris) {
            return null;
        }
        const uris = [];
        c.login.uris.forEach((u) => {
            if (u.uri == null || u.uri === '') {
                return;
            }
            if (u.hostname != null) {
                uris.push(u.hostname);
                return;
            }
            let uri = u.uri;
            if (u.match !== _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_4__[/* UriMatchType */ "a"].RegularExpression) {
                const protocolIndex = uri.indexOf('://');
                if (protocolIndex > -1) {
                    uri = uri.substr(protocolIndex + 3);
                }
                const queryIndex = uri.search(/\?|&|#/);
                if (queryIndex > -1) {
                    uri = uri.substring(0, queryIndex);
                }
            }
            uris.push(uri);
        });
        return uris.length > 0 ? uris : null;
    }
}


/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordHistoryView; });
class PasswordHistoryView {
    constructor(ph) {
        this.password = null;
        this.lastUsedDate = null;
        if (!ph) {
            return;
        }
        this.lastUsedDate = ph.lastUsedDate;
    }
}


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sequentialize; });
/**
 * Use as a Decorator on async functions, it will prevent multiple 'active' calls as the same time
 *
 * If a promise was returned from a previous call to this function, that hasn't yet resolved it will
 * be returned, instead of calling the original function again
 *
 * Results are not cached, once the promise has returned, the next call will result in a fresh call
 *
 * Read more at https://github.com/bitwarden/jslib/pull/7
 */
function sequentialize(cacheKey) {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        const caches = new Map();
        const getCache = (obj) => {
            let cache = caches.get(obj);
            if (cache != null) {
                return cache;
            }
            cache = new Map();
            caches.set(obj, cache);
            return cache;
        };
        return {
            value: function (...args) {
                const cache = getCache(this);
                const argsCacheKey = cacheKey(args);
                let response = cache.get(argsCacheKey);
                if (response != null) {
                    return response;
                }
                const onFinally = () => {
                    cache.delete(argsCacheKey);
                    if (cache.size === 0) {
                        caches.delete(this);
                    }
                };
                response = originalMethod.apply(this, args).then((val) => {
                    onFinally();
                    return val;
                }).catch((err) => {
                    onFinally();
                    throw err;
                });
                cache.set(argsCacheKey, response);
                return response;
            },
        };
    };
}


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptionType; });
var EncryptionType;
(function (EncryptionType) {
    EncryptionType[EncryptionType["AesCbc256_B64"] = 0] = "AesCbc256_B64";
    EncryptionType[EncryptionType["AesCbc128_HmacSha256_B64"] = 1] = "AesCbc128_HmacSha256_B64";
    EncryptionType[EncryptionType["AesCbc256_HmacSha256_B64"] = 2] = "AesCbc256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_B64"] = 3] = "Rsa2048_OaepSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_B64"] = 4] = "Rsa2048_OaepSha1_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_HmacSha256_B64"] = 5] = "Rsa2048_OaepSha256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_HmacSha256_B64"] = 6] = "Rsa2048_OaepSha1_HmacSha256_B64";
})(EncryptionType || (EncryptionType = {}));


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardApi; });
/* harmony import */ var _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

class CardApi extends _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__[/* BaseResponse */ "a"] {
    constructor(data = null) {
        super(data);
        if (data == null) {
            return;
        }
        this.cardholderName = this.getResponseProperty('CardholderName');
        this.brand = this.getResponseProperty('Brand');
        this.number = this.getResponseProperty('Number');
        this.expMonth = this.getResponseProperty('ExpMonth');
        this.expYear = this.getResponseProperty('ExpYear');
        this.code = this.getResponseProperty('Code');
    }
}


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldApi; });
/* harmony import */ var _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

class FieldApi extends _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__[/* BaseResponse */ "a"] {
    constructor(data = null) {
        super(data);
        if (data == null) {
            return;
        }
        this.type = this.getResponseProperty('Type');
        this.name = this.getResponseProperty('Name');
        this.value = this.getResponseProperty('Value');
    }
}


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityApi; });
/* harmony import */ var _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

class IdentityApi extends _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__[/* BaseResponse */ "a"] {
    constructor(data = null) {
        super(data);
        if (data == null) {
            return;
        }
        this.title = this.getResponseProperty('Title');
        this.firstName = this.getResponseProperty('FirstName');
        this.middleName = this.getResponseProperty('MiddleName');
        this.lastName = this.getResponseProperty('LastName');
        this.address1 = this.getResponseProperty('Address1');
        this.address2 = this.getResponseProperty('Address2');
        this.address3 = this.getResponseProperty('Address3');
        this.city = this.getResponseProperty('City');
        this.state = this.getResponseProperty('State');
        this.postalCode = this.getResponseProperty('PostalCode');
        this.country = this.getResponseProperty('Country');
        this.company = this.getResponseProperty('Company');
        this.email = this.getResponseProperty('Email');
        this.phone = this.getResponseProperty('Phone');
        this.ssn = this.getResponseProperty('SSN');
        this.username = this.getResponseProperty('Username');
        this.passportNumber = this.getResponseProperty('PassportNumber');
        this.licenseNumber = this.getResponseProperty('LicenseNumber');
    }
}


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafariApp; });
/* harmony import */ var _browserApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

class SafariApp {
    static init() {
        if (window.bitwardenSafariAppInited) {
            return;
        }
        window.bitwardenSafariAppInited = true;
        if (_browserApi__WEBPACK_IMPORTED_MODULE_0__[/* BrowserApi */ "a"].isSafariApi) {
            window.bitwardenSafariAppRequests =
                new Map();
            window.bitwardenSafariAppMessageListeners =
                new Map();
            window.bitwardenSafariAppMessageReceiver = (message) => {
                SafariApp.receiveMessageFromApp(message);
            };
            setInterval(() => SafariApp.cleanupOldRequests(), 5 * 60000); // every 5 mins
        }
    }
    static sendMessageToApp(command, data = null, resolveNow = false) {
        if (!_browserApi__WEBPACK_IMPORTED_MODULE_0__[/* BrowserApi */ "a"].isSafariApi) {
            return Promise.resolve(null);
        }
        return new Promise((resolve) => {
            const now = new Date();
            const messageId = now.getTime().toString() + '_' + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
            window.webkit.messageHandlers.bitwardenApp.postMessage(JSON.stringify({
                id: messageId,
                command: command,
                data: data,
                responseData: null,
            }));
            if (resolveNow) {
                resolve();
            }
            else {
                window.bitwardenSafariAppRequests.set(messageId, {
                    resolve: resolve,
                    timeoutDate: new Date(now.getTime() + 5 * 60000),
                });
            }
        });
    }
    static addMessageListener(name, callback) {
        window.bitwardenSafariAppMessageListeners.set(name, callback);
    }
    static sendMessageToListeners(message, sender, response) {
        window.bitwardenSafariAppMessageListeners.forEach((f) => f(message, sender, response));
    }
    static receiveMessageFromApp(message) {
        if (message == null) {
            return;
        }
        if ((message.id == null || message.id === '') && message.command === 'app_message') {
            try {
                const msg = JSON.parse(message.data);
                SafariApp.sendMessageToListeners(msg, {
                    id: 'app_message',
                    tab: message.senderTab,
                }, null);
            }
            catch (_a) { }
        }
        else if (message.id != null && window.bitwardenSafariAppRequests.has(message.id)) {
            const p = window.bitwardenSafariAppRequests.get(message.id);
            p.resolve(message.responseData);
            window.bitwardenSafariAppRequests.delete(message.id);
        }
    }
    static cleanupOldRequests() {
        const removeIds = [];
        window.bitwardenSafariAppRequests
            .forEach((v, key) => {
            if (v.timeoutDate < new Date()) {
                removeIds.push(key);
            }
        });
        removeIds.forEach((id) => {
            window.bitwardenSafariAppRequests.delete(id);
        });
    }
}


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginApi; });
/* harmony import */ var _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _loginUriApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(221);


class LoginApi extends _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__[/* BaseResponse */ "a"] {
    constructor(data = null) {
        super(data);
        if (data == null) {
            return;
        }
        this.username = this.getResponseProperty('Username');
        this.password = this.getResponseProperty('Password');
        this.passwordRevisionDate = this.getResponseProperty('PasswordRevisionDate');
        this.totp = this.getResponseProperty('Totp');
        const uris = this.getResponseProperty('Uris');
        if (uris != null) {
            this.uris = uris.map((u) => new _loginUriApi__WEBPACK_IMPORTED_MODULE_1__[/* LoginUriApi */ "a"](u));
        }
    }
}


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUriApi; });
/* harmony import */ var _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

class LoginUriApi extends _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__[/* BaseResponse */ "a"] {
    constructor(data = null) {
        super(data);
        this.match = null;
        if (data == null) {
            return;
        }
        this.uri = this.getResponseProperty('Uri');
        const match = this.getResponseProperty('Match');
        this.match = match != null ? match : null;
    }
}


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureNoteApi; });
/* harmony import */ var _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

class SecureNoteApi extends _response_baseResponse__WEBPACK_IMPORTED_MODULE_0__[/* BaseResponse */ "a"] {
    constructor(data = null) {
        super(data);
        if (data == null) {
            return;
        }
        this.type = this.getResponseProperty('Type');
    }
}


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachmentData; });
class AttachmentData {
    constructor(response) {
        if (response == null) {
            return;
        }
        this.id = response.id;
        this.url = response.url;
        this.fileName = response.fileName;
        this.key = response.key;
        this.size = response.size;
        this.sizeName = response.sizeName;
    }
}


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardData; });
class CardData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.cardholderName = data.cardholderName;
        this.brand = data.brand;
        this.number = data.number;
        this.expMonth = data.expMonth;
        this.expYear = data.expYear;
        this.code = data.code;
    }
}


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldData; });
class FieldData {
    constructor(response) {
        if (response == null) {
            return;
        }
        this.type = response.type;
        this.name = response.name;
        this.value = response.value;
    }
}


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityData; });
class IdentityData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.title = data.title;
        this.firstName = data.firstName;
        this.middleName = data.middleName;
        this.lastName = data.lastName;
        this.address1 = data.address1;
        this.address2 = data.address2;
        this.address3 = data.address3;
        this.city = data.city;
        this.state = data.state;
        this.postalCode = data.postalCode;
        this.country = data.country;
        this.company = data.company;
        this.email = data.email;
        this.phone = data.phone;
        this.ssn = data.ssn;
        this.username = data.username;
        this.passportNumber = data.passportNumber;
        this.licenseNumber = data.licenseNumber;
    }
}


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginData; });
/* harmony import */ var _loginUriData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);

class LoginData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.username = data.username;
        this.password = data.password;
        this.passwordRevisionDate = data.passwordRevisionDate;
        this.totp = data.totp;
        if (data.uris) {
            this.uris = data.uris.map((u) => new _loginUriData__WEBPACK_IMPORTED_MODULE_0__[/* LoginUriData */ "a"](u));
        }
    }
}


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUriData; });
class LoginUriData {
    constructor(data) {
        this.match = null;
        if (data == null) {
            return;
        }
        this.uri = data.uri;
        this.match = data.match;
    }
}


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordHistoryData; });
class PasswordHistoryData {
    constructor(response) {
        if (response == null) {
            return;
        }
        this.password = response.password;
        this.lastUsedDate = response.lastUsedDate;
    }
}


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureNoteData; });
class SecureNoteData {
    constructor(data) {
        if (data == null) {
            return;
        }
        this.type = data.type;
    }
}


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var _data_cardData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _view_cardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);



class Card extends _domainBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            cardholderName: null,
            brand: null,
            number: null,
            expMonth: null,
            expYear: null,
            code: null,
        }, alreadyEncrypted, []);
    }
    decrypt(orgId) {
        return this.decryptObj(new _view_cardView__WEBPACK_IMPORTED_MODULE_2__[/* CardView */ "a"](this), {
            cardholderName: null,
            brand: null,
            number: null,
            expMonth: null,
            expYear: null,
            code: null,
        }, orgId);
    }
    toCardData() {
        const c = new _data_cardData__WEBPACK_IMPORTED_MODULE_0__[/* CardData */ "a"]();
        this.buildDataModel(this, c, {
            cardholderName: null,
            brand: null,
            number: null,
            expMonth: null,
            expYear: null,
            code: null,
        });
        return c;
    }
}


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
/* harmony import */ var _data_fieldData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _view_fieldView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);



class Field extends _domainBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.type = obj.type;
        this.buildDomainModel(this, obj, {
            name: null,
            value: null,
        }, alreadyEncrypted, []);
    }
    decrypt(orgId) {
        return this.decryptObj(new _view_fieldView__WEBPACK_IMPORTED_MODULE_2__[/* FieldView */ "a"](this), {
            name: null,
            value: null,
        }, orgId);
    }
    toFieldData() {
        const f = new _data_fieldData__WEBPACK_IMPORTED_MODULE_0__[/* FieldData */ "a"]();
        this.buildDataModel(this, f, {
            name: null,
            value: null,
            type: null,
        }, ['type']);
        return f;
    }
}


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Identity; });
/* harmony import */ var _data_identityData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _view_identityView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);



class Identity extends _domainBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            title: null,
            firstName: null,
            middleName: null,
            lastName: null,
            address1: null,
            address2: null,
            address3: null,
            city: null,
            state: null,
            postalCode: null,
            country: null,
            company: null,
            email: null,
            phone: null,
            ssn: null,
            username: null,
            passportNumber: null,
            licenseNumber: null,
        }, alreadyEncrypted, []);
    }
    decrypt(orgId) {
        return this.decryptObj(new _view_identityView__WEBPACK_IMPORTED_MODULE_2__[/* IdentityView */ "a"](this), {
            title: null,
            firstName: null,
            middleName: null,
            lastName: null,
            address1: null,
            address2: null,
            address3: null,
            city: null,
            state: null,
            postalCode: null,
            country: null,
            company: null,
            email: null,
            phone: null,
            ssn: null,
            username: null,
            passportNumber: null,
            licenseNumber: null,
        }, orgId);
    }
    toIdentityData() {
        const i = new _data_identityData__WEBPACK_IMPORTED_MODULE_0__[/* IdentityData */ "a"]();
        this.buildDataModel(this, i, {
            title: null,
            firstName: null,
            middleName: null,
            lastName: null,
            address1: null,
            address2: null,
            address3: null,
            city: null,
            state: null,
            postalCode: null,
            country: null,
            company: null,
            email: null,
            phone: null,
            ssn: null,
            username: null,
            passportNumber: null,
            licenseNumber: null,
        });
        return i;
    }
}


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var _loginUri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _data_loginData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(227);
/* harmony import */ var _view_loginView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Login extends _domainBase__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.passwordRevisionDate = obj.passwordRevisionDate != null ? new Date(obj.passwordRevisionDate) : null;
        this.buildDomainModel(this, obj, {
            username: null,
            password: null,
            totp: null,
        }, alreadyEncrypted, []);
        if (obj.uris) {
            this.uris = [];
            obj.uris.forEach((u) => {
                this.uris.push(new _loginUri__WEBPACK_IMPORTED_MODULE_0__[/* LoginUri */ "a"](u, alreadyEncrypted));
            });
        }
    }
    decrypt(orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = yield this.decryptObj(new _view_loginView__WEBPACK_IMPORTED_MODULE_2__[/* LoginView */ "a"](this), {
                username: null,
                password: null,
                totp: null,
            }, orgId);
            if (this.uris != null) {
                view.uris = [];
                for (let i = 0; i < this.uris.length; i++) {
                    const uri = yield this.uris[i].decrypt(orgId);
                    view.uris.push(uri);
                }
            }
            return view;
        });
    }
    toLoginData() {
        const l = new _data_loginData__WEBPACK_IMPORTED_MODULE_1__[/* LoginData */ "a"]();
        l.passwordRevisionDate = this.passwordRevisionDate != null ? this.passwordRevisionDate.toISOString() : null;
        this.buildDataModel(this, l, {
            username: null,
            password: null,
            totp: null,
        });
        if (this.uris != null && this.uris.length > 0) {
            l.uris = [];
            this.uris.forEach((u) => {
                l.uris.push(u.toLoginUriData());
            });
        }
        return l;
    }
}


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUri; });
/* harmony import */ var _data_loginUriData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _view_loginUriView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);



class LoginUri extends _domainBase__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.match = obj.match;
        this.buildDomainModel(this, obj, {
            uri: null,
        }, alreadyEncrypted, []);
    }
    decrypt(orgId) {
        return this.decryptObj(new _view_loginUriView__WEBPACK_IMPORTED_MODULE_1__[/* LoginUriView */ "a"](this), {
            uri: null,
        }, orgId);
    }
    toLoginUriData() {
        const u = new _data_loginUriData__WEBPACK_IMPORTED_MODULE_0__[/* LoginUriData */ "a"]();
        this.buildDataModel(this, u, {
            uri: null,
        }, ['match']);
        return u;
    }
}


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Password; });
/* harmony import */ var _data_passwordHistoryData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _view_passwordHistoryView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);



class Password extends _domainBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            password: null,
        }, alreadyEncrypted);
        this.lastUsedDate = new Date(obj.lastUsedDate);
    }
    decrypt(orgId) {
        return this.decryptObj(new _view_passwordHistoryView__WEBPACK_IMPORTED_MODULE_2__[/* PasswordHistoryView */ "a"](this), {
            password: null,
        }, orgId);
    }
    toPasswordHistoryData() {
        const ph = new _data_passwordHistoryData__WEBPACK_IMPORTED_MODULE_0__[/* PasswordHistoryData */ "a"]();
        ph.lastUsedDate = this.lastUsedDate.toISOString();
        this.buildDataModel(this, ph, {
            password: null,
        });
        return ph;
    }
}


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureNote; });
/* harmony import */ var _data_secureNoteData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);
/* harmony import */ var _domainBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _view_secureNoteView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);



class SecureNote extends _domainBase__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.type = obj.type;
    }
    decrypt(orgId) {
        return Promise.resolve(new _view_secureNoteView__WEBPACK_IMPORTED_MODULE_2__[/* SecureNoteView */ "a"](this));
    }
    toSecureNoteData() {
        const n = new _data_secureNoteData__WEBPACK_IMPORTED_MODULE_0__[/* SecureNoteData */ "a"]();
        n.type = this.type;
        return n;
    }
}


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./jslib/src/models/data/attachmentData.ts
var attachmentData = __webpack_require__(223);

// CONCATENATED MODULE: ./jslib/src/models/view/attachmentView.ts
class AttachmentView {
    constructor(a) {
        this.id = null;
        this.url = null;
        this.size = null;
        this.sizeName = null;
        this.fileName = null;
        this.key = null;
        if (!a) {
            return;
        }
        this.id = a.id;
        this.url = a.url;
        this.size = a.size;
        this.sizeName = a.sizeName;
    }
    get fileSize() {
        try {
            if (this.size != null) {
                return parseInt(this.size, null);
            }
        }
        catch (_a) { }
        return 0;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/domain/domainBase.ts
var domainBase = __webpack_require__(39);

// EXTERNAL MODULE: ./jslib/src/models/domain/symmetricCryptoKey.ts
var symmetricCryptoKey = __webpack_require__(68);

// EXTERNAL MODULE: ./jslib/src/misc/utils.ts
var utils = __webpack_require__(8);

// CONCATENATED MODULE: ./jslib/src/models/domain/attachment.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachment_Attachment; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class attachment_Attachment extends domainBase["a" /* default */] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.size = obj.size;
        this.buildDomainModel(this, obj, {
            id: null,
            url: null,
            sizeName: null,
            fileName: null,
            key: null,
        }, alreadyEncrypted, ['id', 'url', 'sizeName']);
    }
    decrypt(orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = yield this.decryptObj(new AttachmentView(this), {
                fileName: null,
            }, orgId);
            if (this.key != null) {
                let cryptoService;
                const containerService = utils["a" /* Utils */].global.bitwardenContainerService;
                if (containerService) {
                    cryptoService = containerService.getCryptoService();
                }
                else {
                    throw new Error('global bitwardenContainerService not initialized.');
                }
                try {
                    const orgKey = yield cryptoService.getOrgKey(orgId);
                    const decValue = yield cryptoService.decryptToBytes(this.key, orgKey);
                    view.key = new symmetricCryptoKey["a" /* SymmetricCryptoKey */](decValue);
                }
                catch (e) {
                    // TODO: error?
                }
            }
            return view;
        });
    }
    toAttachmentData() {
        const a = new attachmentData["a" /* AttachmentData */]();
        a.size = this.size;
        this.buildDataModel(this, a, {
            id: null,
            url: null,
            sizeName: null,
            fileName: null,
            key: null,
        }, ['id', 'url', 'sizeName']);
        return a;
    }
}


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UriMatchType; });
var UriMatchType;
(function (UriMatchType) {
    UriMatchType[UriMatchType["Domain"] = 0] = "Domain";
    UriMatchType[UriMatchType["Host"] = 1] = "Host";
    UriMatchType[UriMatchType["StartsWith"] = 2] = "StartsWith";
    UriMatchType[UriMatchType["Exact"] = 3] = "Exact";
    UriMatchType[UriMatchType["RegularExpression"] = 4] = "RegularExpression";
    UriMatchType[UriMatchType["Never"] = 5] = "Never";
})(UriMatchType || (UriMatchType = {}));


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherService; });
/* unused harmony export ɵ0 */
/* harmony import */ var _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _enums_fieldType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _models_data_cipherData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var _models_domain_attachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(239);
/* harmony import */ var _models_domain_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(231);
/* harmony import */ var _models_domain_cipher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(121);
/* harmony import */ var _models_domain_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(232);
/* harmony import */ var _models_domain_identity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(233);
/* harmony import */ var _models_domain_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(234);
/* harmony import */ var _models_domain_loginUri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(235);
/* harmony import */ var _models_domain_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(236);
/* harmony import */ var _models_domain_secureNote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(237);
/* harmony import */ var _models_request_cipherBulkDeleteRequest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(405);
/* harmony import */ var _models_request_cipherBulkMoveRequest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(406);
/* harmony import */ var _models_request_cipherBulkShareRequest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(416);
/* harmony import */ var _models_request_cipherCollectionsRequest__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(407);
/* harmony import */ var _models_request_cipherCreateRequest__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(408);
/* harmony import */ var _models_request_cipherRequest__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(103);
/* harmony import */ var _models_request_cipherShareRequest__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(409);
/* harmony import */ var _models_view_passwordHistoryView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(173);
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9);
/* harmony import */ var _misc_sequentialize__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(174);
/* harmony import */ var _misc_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
























const Keys = {
    ciphersPrefix: 'ciphers_',
    localData: 'sitesLocalData',
    neverDomains: 'neverDomains',
};
const DomainMatchBlacklist = new Map([
    ['google.com', new Set(['script.google.com'])],
]);
const ɵ0 = () => 'getAllDecrypted';
class CipherService {
    constructor(cryptoService, userService, settingsService, apiService, storageService, i18nService, searchService) {
        this.cryptoService = cryptoService;
        this.userService = userService;
        this.settingsService = settingsService;
        this.apiService = apiService;
        this.storageService = storageService;
        this.i18nService = i18nService;
        this.searchService = searchService;
    }
    get decryptedCipherCache() {
        return this._decryptedCipherCache;
    }
    set decryptedCipherCache(value) {
        this._decryptedCipherCache = value;
        if (this.searchService != null) {
            if (value == null) {
                this.searchService().clearIndex();
            }
            else {
                this.searchService().indexCiphers();
            }
        }
    }
    clearCache() {
        this.decryptedCipherCache = null;
    }
    encrypt(model, key, originalCipher = null) {
        return __awaiter(this, void 0, void 0, function* () {
            // Adjust password history
            if (model.id != null) {
                if (originalCipher == null) {
                    originalCipher = yield this.get(model.id);
                }
                if (originalCipher != null) {
                    const existingCipher = yield originalCipher.decrypt();
                    model.passwordHistory = existingCipher.passwordHistory || [];
                    if (model.type === _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login && existingCipher.type === _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login) {
                        if (existingCipher.login.password != null && existingCipher.login.password !== '' &&
                            existingCipher.login.password !== model.login.password) {
                            const ph = new _models_view_passwordHistoryView__WEBPACK_IMPORTED_MODULE_20__[/* PasswordHistoryView */ "a"]();
                            ph.password = existingCipher.login.password;
                            ph.lastUsedDate = model.login.passwordRevisionDate = new Date();
                            model.passwordHistory.splice(0, 0, ph);
                        }
                        else {
                            model.login.passwordRevisionDate = existingCipher.login.passwordRevisionDate;
                        }
                    }
                    if (existingCipher.hasFields) {
                        const existingHiddenFields = existingCipher.fields.filter((f) => f.type === _enums_fieldType__WEBPACK_IMPORTED_MODULE_1__[/* FieldType */ "a"].Hidden &&
                            f.name != null && f.name !== '' && f.value != null && f.value !== '');
                        const hiddenFields = model.fields == null ? [] :
                            model.fields.filter((f) => f.type === _enums_fieldType__WEBPACK_IMPORTED_MODULE_1__[/* FieldType */ "a"].Hidden && f.name != null && f.name !== '');
                        existingHiddenFields.forEach((ef) => {
                            const matchedField = hiddenFields.find((f) => f.name === ef.name);
                            if (matchedField == null || matchedField.value !== ef.value) {
                                const ph = new _models_view_passwordHistoryView__WEBPACK_IMPORTED_MODULE_20__[/* PasswordHistoryView */ "a"]();
                                ph.password = ef.name + ': ' + ef.value;
                                ph.lastUsedDate = new Date();
                                model.passwordHistory.splice(0, 0, ph);
                            }
                        });
                    }
                }
                if (model.passwordHistory != null && model.passwordHistory.length === 0) {
                    model.passwordHistory = null;
                }
                else if (model.passwordHistory != null && model.passwordHistory.length > 5) {
                    // only save last 5 history
                    model.passwordHistory = model.passwordHistory.slice(0, 5);
                }
            }
            const cipher = new _models_domain_cipher__WEBPACK_IMPORTED_MODULE_6__[/* Cipher */ "a"]();
            cipher.id = model.id;
            cipher.folderId = model.folderId;
            cipher.favorite = model.favorite;
            cipher.organizationId = model.organizationId;
            cipher.type = model.type;
            cipher.collectionIds = model.collectionIds;
            if (key == null && cipher.organizationId != null) {
                key = yield this.cryptoService.getOrgKey(cipher.organizationId);
                if (key == null) {
                    throw new Error('Cannot encrypt cipher for organization. No key.');
                }
            }
            yield Promise.all([
                this.encryptObjProperty(model, cipher, {
                    name: null,
                    notes: null,
                }, key),
                this.encryptCipherData(cipher, model, key),
                this.encryptFields(model.fields, key).then((fields) => {
                    cipher.fields = fields;
                }),
                this.encryptPasswordHistories(model.passwordHistory, key).then((ph) => {
                    cipher.passwordHistory = ph;
                }),
                this.encryptAttachments(model.attachments, key).then((attachments) => {
                    cipher.attachments = attachments;
                }),
            ]);
            return cipher;
        });
    }
    encryptAttachments(attachmentsModel, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (attachmentsModel == null || attachmentsModel.length === 0) {
                return null;
            }
            const promises = [];
            const encAttachments = [];
            attachmentsModel.forEach((model) => __awaiter(this, void 0, void 0, function* () {
                const attachment = new _models_domain_attachment__WEBPACK_IMPORTED_MODULE_4__[/* Attachment */ "a"]();
                attachment.id = model.id;
                attachment.size = model.size;
                attachment.sizeName = model.sizeName;
                attachment.url = model.url;
                const promise = this.encryptObjProperty(model, attachment, {
                    fileName: null,
                }, key).then(() => __awaiter(this, void 0, void 0, function* () {
                    if (model.key != null) {
                        attachment.key = yield this.cryptoService.encrypt(model.key.key, key);
                    }
                    encAttachments.push(attachment);
                }));
                promises.push(promise);
            }));
            yield Promise.all(promises);
            return encAttachments;
        });
    }
    encryptFields(fieldsModel, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fieldsModel || !fieldsModel.length) {
                return null;
            }
            const self = this;
            const encFields = [];
            yield fieldsModel.reduce((promise, field) => {
                return promise.then(() => {
                    return self.encryptField(field, key);
                }).then((encField) => {
                    encFields.push(encField);
                });
            }, Promise.resolve());
            return encFields;
        });
    }
    encryptField(fieldModel, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const field = new _models_domain_field__WEBPACK_IMPORTED_MODULE_7__[/* Field */ "a"]();
            field.type = fieldModel.type;
            // normalize boolean type field values
            if (fieldModel.type === _enums_fieldType__WEBPACK_IMPORTED_MODULE_1__[/* FieldType */ "a"].Boolean && fieldModel.value !== 'true') {
                fieldModel.value = 'false';
            }
            yield this.encryptObjProperty(fieldModel, field, {
                name: null,
                value: null,
            }, key);
            return field;
        });
    }
    encryptPasswordHistories(phModels, key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!phModels || !phModels.length) {
                return null;
            }
            const self = this;
            const encPhs = [];
            yield phModels.reduce((promise, ph) => {
                return promise.then(() => {
                    return self.encryptPasswordHistory(ph, key);
                }).then((encPh) => {
                    encPhs.push(encPh);
                });
            }, Promise.resolve());
            return encPhs;
        });
    }
    encryptPasswordHistory(phModel, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const ph = new _models_domain_password__WEBPACK_IMPORTED_MODULE_11__[/* Password */ "a"]();
            ph.lastUsedDate = phModel.lastUsedDate;
            yield this.encryptObjProperty(phModel, ph, {
                password: null,
            }, key);
            return ph;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const localData = yield this.storageService.get(Keys.localData);
            const ciphers = yield this.storageService.get(Keys.ciphersPrefix + userId);
            if (ciphers == null || !ciphers.hasOwnProperty(id)) {
                return null;
            }
            return new _models_domain_cipher__WEBPACK_IMPORTED_MODULE_6__[/* Cipher */ "a"](ciphers[id], false, localData ? localData[id] : null);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const localData = yield this.storageService.get(Keys.localData);
            const ciphers = yield this.storageService.get(Keys.ciphersPrefix + userId);
            const response = [];
            for (const id in ciphers) {
                if (ciphers.hasOwnProperty(id)) {
                    response.push(new _models_domain_cipher__WEBPACK_IMPORTED_MODULE_6__[/* Cipher */ "a"](ciphers[id], false, localData ? localData[id] : null));
                }
            }
            return response;
        });
    }
    getAllDecrypted() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.decryptedCipherCache != null) {
                return this.decryptedCipherCache;
            }
            const decCiphers = [];
            const hasKey = yield this.cryptoService.hasKey();
            if (!hasKey) {
                throw new Error('No key.');
            }
            const promises = [];
            const ciphers = yield this.getAll();
            ciphers.forEach((cipher) => {
                promises.push(cipher.decrypt().then((c) => decCiphers.push(c)));
            });
            yield Promise.all(promises);
            decCiphers.sort(this.getLocaleSortingFunction());
            this.decryptedCipherCache = decCiphers;
            return this.decryptedCipherCache;
        });
    }
    getAllDecryptedForGrouping(groupingId, folder = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const ciphers = yield this.getAllDecrypted();
            return ciphers.filter((cipher) => {
                if (folder && cipher.folderId === groupingId) {
                    return true;
                }
                else if (!folder && cipher.collectionIds != null && cipher.collectionIds.indexOf(groupingId) > -1) {
                    return true;
                }
                return false;
            });
        });
    }
    getAllDecryptedForUrl(url, includeOtherTypes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (url == null && includeOtherTypes == null) {
                return Promise.resolve([]);
            }
            const domain = _misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].getDomain(url);
            const eqDomainsPromise = domain == null ? Promise.resolve([]) :
                this.settingsService.getEquivalentDomains().then((eqDomains) => {
                    let matches = [];
                    eqDomains.forEach((eqDomain) => {
                        if (eqDomain.length && eqDomain.indexOf(domain) >= 0) {
                            matches = matches.concat(eqDomain);
                        }
                    });
                    if (!matches.length) {
                        matches.push(domain);
                    }
                    return matches;
                });
            const result = yield Promise.all([eqDomainsPromise, this.getAllDecrypted()]);
            const matchingDomains = result[0];
            const ciphers = result[1];
            let defaultMatch = yield this.storageService.get(_constants_service__WEBPACK_IMPORTED_MODULE_21__[/* ConstantsService */ "a"].defaultUriMatch);
            if (defaultMatch == null) {
                defaultMatch = _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__[/* UriMatchType */ "a"].Domain;
            }
            return ciphers.filter((cipher) => {
                if (includeOtherTypes != null && includeOtherTypes.indexOf(cipher.type) > -1) {
                    return true;
                }
                if (url != null && cipher.type === _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login && cipher.login.uris != null) {
                    for (let i = 0; i < cipher.login.uris.length; i++) {
                        const u = cipher.login.uris[i];
                        if (u.uri == null) {
                            continue;
                        }
                        const match = u.match == null ? defaultMatch : u.match;
                        switch (match) {
                            case _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__[/* UriMatchType */ "a"].Domain:
                                if (domain != null && u.domain != null && matchingDomains.indexOf(u.domain) > -1) {
                                    if (DomainMatchBlacklist.has(u.domain)) {
                                        const domainUrlHost = _misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].getHost(url);
                                        if (!DomainMatchBlacklist.get(u.domain).has(domainUrlHost)) {
                                            return true;
                                        }
                                    }
                                    else {
                                        return true;
                                    }
                                }
                                break;
                            case _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__[/* UriMatchType */ "a"].Host:
                                const urlHost = _misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].getHost(url);
                                if (urlHost != null && urlHost === _misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].getHost(u.uri)) {
                                    return true;
                                }
                                break;
                            case _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__[/* UriMatchType */ "a"].Exact:
                                if (url === u.uri) {
                                    return true;
                                }
                                break;
                            case _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__[/* UriMatchType */ "a"].StartsWith:
                                if (url.startsWith(u.uri)) {
                                    return true;
                                }
                                break;
                            case _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__[/* UriMatchType */ "a"].RegularExpression:
                                try {
                                    const regex = new RegExp(u.uri, 'i');
                                    if (regex.test(url)) {
                                        return true;
                                    }
                                }
                                catch (_a) { }
                                break;
                            case _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_2__[/* UriMatchType */ "a"].Never:
                            default:
                                break;
                        }
                    }
                }
                return false;
            });
        });
    }
    getAllFromApiForOrganization(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const ciphers = yield this.apiService.getCiphersOrganization(organizationId);
            if (ciphers != null && ciphers.data != null && ciphers.data.length) {
                const decCiphers = [];
                const promises = [];
                ciphers.data.forEach((r) => {
                    const data = new _models_data_cipherData__WEBPACK_IMPORTED_MODULE_3__[/* CipherData */ "a"](r);
                    const cipher = new _models_domain_cipher__WEBPACK_IMPORTED_MODULE_6__[/* Cipher */ "a"](data);
                    promises.push(cipher.decrypt().then((c) => decCiphers.push(c)));
                });
                yield Promise.all(promises);
                decCiphers.sort(this.getLocaleSortingFunction());
                return decCiphers;
            }
            else {
                return [];
            }
        });
    }
    getLastUsedForUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const ciphers = yield this.getAllDecryptedForUrl(url);
            if (ciphers.length === 0) {
                return null;
            }
            const sortedCiphers = ciphers.sort(this.sortCiphersByLastUsed);
            return sortedCiphers[0];
        });
    }
    updateLastUsedDate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let ciphersLocalData = yield this.storageService.get(Keys.localData);
            if (!ciphersLocalData) {
                ciphersLocalData = {};
            }
            if (ciphersLocalData[id]) {
                ciphersLocalData[id].lastUsedDate = new Date().getTime();
            }
            else {
                ciphersLocalData[id] = {
                    lastUsedDate: new Date().getTime(),
                };
            }
            yield this.storageService.save(Keys.localData, ciphersLocalData);
            if (this.decryptedCipherCache == null) {
                return;
            }
            for (let i = 0; i < this.decryptedCipherCache.length; i++) {
                const cached = this.decryptedCipherCache[i];
                if (cached.id === id) {
                    cached.localData = ciphersLocalData[id];
                    break;
                }
            }
        });
    }
    saveNeverDomain(domain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (domain == null) {
                return;
            }
            let domains = yield this.storageService.get(Keys.neverDomains);
            if (!domains) {
                domains = {};
            }
            domains[domain] = null;
            yield this.storageService.save(Keys.neverDomains, domains);
        });
    }
    saveWithServer(cipher) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (cipher.id == null) {
                if (cipher.collectionIds != null) {
                    const request = new _models_request_cipherCreateRequest__WEBPACK_IMPORTED_MODULE_17__[/* CipherCreateRequest */ "a"](cipher);
                    response = yield this.apiService.postCipherCreate(request);
                }
                else {
                    const request = new _models_request_cipherRequest__WEBPACK_IMPORTED_MODULE_18__[/* CipherRequest */ "a"](cipher);
                    response = yield this.apiService.postCipher(request);
                }
                cipher.id = response.id;
            }
            else {
                const request = new _models_request_cipherRequest__WEBPACK_IMPORTED_MODULE_18__[/* CipherRequest */ "a"](cipher);
                response = yield this.apiService.putCipher(cipher.id, request);
            }
            const userId = yield this.userService.getUserId();
            const data = new _models_data_cipherData__WEBPACK_IMPORTED_MODULE_3__[/* CipherData */ "a"](response, userId, cipher.collectionIds);
            yield this.upsert(data);
        });
    }
    shareWithServer(cipher, organizationId, collectionIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const attachmentPromises = [];
            if (cipher.attachments != null) {
                cipher.attachments.forEach((attachment) => {
                    if (attachment.key == null) {
                        attachmentPromises.push(this.shareAttachmentWithServer(attachment, cipher.id, organizationId));
                    }
                });
            }
            yield Promise.all(attachmentPromises);
            cipher.organizationId = organizationId;
            cipher.collectionIds = collectionIds;
            const encCipher = yield this.encrypt(cipher);
            const request = new _models_request_cipherShareRequest__WEBPACK_IMPORTED_MODULE_19__[/* CipherShareRequest */ "a"](encCipher);
            const response = yield this.apiService.putShareCipher(cipher.id, request);
            const userId = yield this.userService.getUserId();
            const data = new _models_data_cipherData__WEBPACK_IMPORTED_MODULE_3__[/* CipherData */ "a"](response, userId, collectionIds);
            yield this.upsert(data);
        });
    }
    shareManyWithServer(ciphers, organizationId, collectionIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            const encCiphers = [];
            for (const cipher of ciphers) {
                cipher.organizationId = organizationId;
                cipher.collectionIds = collectionIds;
                promises.push(this.encrypt(cipher).then((c) => {
                    encCiphers.push(c);
                }));
            }
            yield Promise.all(promises);
            const request = new _models_request_cipherBulkShareRequest__WEBPACK_IMPORTED_MODULE_15__[/* CipherBulkShareRequest */ "a"](encCiphers, collectionIds);
            yield this.apiService.putShareCiphers(request);
            const userId = yield this.userService.getUserId();
            yield this.upsert(encCiphers.map((c) => c.toCipherData(userId)));
        });
    }
    saveAttachmentWithServer(cipher, unencryptedFile, admin = false) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(unencryptedFile);
            reader.onload = (evt) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const cData = yield this.saveAttachmentRawWithServer(cipher, unencryptedFile.name, evt.target.result, admin);
                    resolve(cData);
                }
                catch (e) {
                    reject(e);
                }
            });
            reader.onerror = (evt) => {
                reject('Error reading file.');
            };
        });
    }
    saveAttachmentRawWithServer(cipher, filename, data, admin = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = yield this.cryptoService.getOrgKey(cipher.organizationId);
            const encFileName = yield this.cryptoService.encrypt(filename, key);
            const dataEncKey = yield this.cryptoService.makeEncKey(key);
            const encData = yield this.cryptoService.encryptToBytes(data, dataEncKey[0]);
            const fd = new FormData();
            try {
                const blob = new Blob([encData], { type: 'application/octet-stream' });
                fd.append('key', dataEncKey[1].encryptedString);
                fd.append('data', blob, encFileName.encryptedString);
            }
            catch (e) {
                if (_misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].isNode && !_misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].isBrowser) {
                    fd.append('key', dataEncKey[1].encryptedString);
                    fd.append('data', Buffer.from(encData), {
                        filepath: encFileName.encryptedString,
                        contentType: 'application/octet-stream',
                    });
                }
                else {
                    throw e;
                }
            }
            let response;
            try {
                if (admin) {
                    response = yield this.apiService.postCipherAttachmentAdmin(cipher.id, fd);
                }
                else {
                    response = yield this.apiService.postCipherAttachment(cipher.id, fd);
                }
            }
            catch (e) {
                throw new Error(e.getSingleMessage());
            }
            const userId = yield this.userService.getUserId();
            const cData = new _models_data_cipherData__WEBPACK_IMPORTED_MODULE_3__[/* CipherData */ "a"](response, userId, cipher.collectionIds);
            if (!admin) {
                yield this.upsert(cData);
            }
            return new _models_domain_cipher__WEBPACK_IMPORTED_MODULE_6__[/* Cipher */ "a"](cData);
        });
    }
    saveCollectionsWithServer(cipher) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = new _models_request_cipherCollectionsRequest__WEBPACK_IMPORTED_MODULE_16__[/* CipherCollectionsRequest */ "a"](cipher.collectionIds);
            yield this.apiService.putCipherCollections(cipher.id, request);
            const userId = yield this.userService.getUserId();
            const data = cipher.toCipherData(userId);
            yield this.upsert(data);
        });
    }
    upsert(cipher) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            let ciphers = yield this.storageService.get(Keys.ciphersPrefix + userId);
            if (ciphers == null) {
                ciphers = {};
            }
            if (cipher instanceof _models_data_cipherData__WEBPACK_IMPORTED_MODULE_3__[/* CipherData */ "a"]) {
                const c = cipher;
                ciphers[c.id] = c;
            }
            else {
                cipher.forEach((c) => {
                    ciphers[c.id] = c;
                });
            }
            yield this.storageService.save(Keys.ciphersPrefix + userId, ciphers);
            this.decryptedCipherCache = null;
        });
    }
    replace(ciphers) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            yield this.storageService.save(Keys.ciphersPrefix + userId, ciphers);
            this.decryptedCipherCache = null;
        });
    }
    clear(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.storageService.remove(Keys.ciphersPrefix + userId);
            this.clearCache();
        });
    }
    moveManyWithServer(ids, folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiService.putMoveCiphers(new _models_request_cipherBulkMoveRequest__WEBPACK_IMPORTED_MODULE_14__[/* CipherBulkMoveRequest */ "a"](ids, folderId));
            const userId = yield this.userService.getUserId();
            let ciphers = yield this.storageService.get(Keys.ciphersPrefix + userId);
            if (ciphers == null) {
                ciphers = {};
            }
            ids.forEach((id) => {
                if (ciphers.hasOwnProperty(id)) {
                    ciphers[id].folderId = folderId;
                }
            });
            yield this.storageService.save(Keys.ciphersPrefix + userId, ciphers);
            this.decryptedCipherCache = null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const ciphers = yield this.storageService.get(Keys.ciphersPrefix + userId);
            if (ciphers == null) {
                return;
            }
            if (typeof id === 'string') {
                if (ciphers[id] == null) {
                    return;
                }
                delete ciphers[id];
            }
            else {
                id.forEach((i) => {
                    delete ciphers[i];
                });
            }
            yield this.storageService.save(Keys.ciphersPrefix + userId, ciphers);
            this.decryptedCipherCache = null;
        });
    }
    deleteWithServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiService.deleteCipher(id);
            yield this.delete(id);
        });
    }
    deleteManyWithServer(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiService.deleteManyCiphers(new _models_request_cipherBulkDeleteRequest__WEBPACK_IMPORTED_MODULE_13__[/* CipherBulkDeleteRequest */ "a"](ids));
            yield this.delete(ids);
        });
    }
    deleteAttachment(id, attachmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const ciphers = yield this.storageService.get(Keys.ciphersPrefix + userId);
            if (ciphers == null || !ciphers.hasOwnProperty(id) || ciphers[id].attachments == null) {
                return;
            }
            for (let i = 0; i < ciphers[id].attachments.length; i++) {
                if (ciphers[id].attachments[i].id === attachmentId) {
                    ciphers[id].attachments.splice(i, 1);
                }
            }
            yield this.storageService.save(Keys.ciphersPrefix + userId, ciphers);
            this.decryptedCipherCache = null;
        });
    }
    deleteAttachmentWithServer(id, attachmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.apiService.deleteCipherAttachment(id, attachmentId);
            }
            catch (e) {
                return Promise.reject(e.getSingleMessage());
            }
            yield this.deleteAttachment(id, attachmentId);
        });
    }
    sortCiphersByLastUsed(a, b) {
        const aLastUsed = a.localData && a.localData.lastUsedDate ? a.localData.lastUsedDate : null;
        const bLastUsed = b.localData && b.localData.lastUsedDate ? b.localData.lastUsedDate : null;
        const bothNotNull = aLastUsed != null && bLastUsed != null;
        if (bothNotNull && aLastUsed < bLastUsed) {
            return 1;
        }
        if (aLastUsed != null && bLastUsed == null) {
            return -1;
        }
        if (bothNotNull && aLastUsed > bLastUsed) {
            return -1;
        }
        if (bLastUsed != null && aLastUsed == null) {
            return 1;
        }
        return 0;
    }
    sortCiphersByLastUsedThenName(a, b) {
        const result = this.sortCiphersByLastUsed(a, b);
        if (result !== 0) {
            return result;
        }
        return this.getLocaleSortingFunction()(a, b);
    }
    getLocaleSortingFunction() {
        return (a, b) => {
            let aName = a.name;
            let bName = b.name;
            if (aName == null && bName != null) {
                return -1;
            }
            if (aName != null && bName == null) {
                return 1;
            }
            if (aName == null && bName == null) {
                return 0;
            }
            const result = this.i18nService.collator ? this.i18nService.collator.compare(aName, bName) :
                aName.localeCompare(bName);
            if (result !== 0 || a.type !== _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login || b.type !== _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login) {
                return result;
            }
            if (a.login.username != null) {
                aName += a.login.username;
            }
            if (b.login.username != null) {
                bName += b.login.username;
            }
            return this.i18nService.collator ? this.i18nService.collator.compare(aName, bName) :
                aName.localeCompare(bName);
        };
    }
    // Helpers
    shareAttachmentWithServer(attachmentView, cipherId, organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const attachmentResponse = yield this.apiService.nativeFetch(new Request(attachmentView.url, { cache: 'no-cache' }));
            if (attachmentResponse.status !== 200) {
                throw Error('Failed to download attachment: ' + attachmentResponse.status.toString());
            }
            const buf = yield attachmentResponse.arrayBuffer();
            const decBuf = yield this.cryptoService.decryptFromBytes(buf, null);
            const key = yield this.cryptoService.getOrgKey(organizationId);
            const encFileName = yield this.cryptoService.encrypt(attachmentView.fileName, key);
            const dataEncKey = yield this.cryptoService.makeEncKey(key);
            const encData = yield this.cryptoService.encryptToBytes(decBuf, dataEncKey[0]);
            const fd = new FormData();
            try {
                const blob = new Blob([encData], { type: 'application/octet-stream' });
                fd.append('key', dataEncKey[1].encryptedString);
                fd.append('data', blob, encFileName.encryptedString);
            }
            catch (e) {
                if (_misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].isNode && !_misc_utils__WEBPACK_IMPORTED_MODULE_23__[/* Utils */ "a"].isBrowser) {
                    fd.append('key', dataEncKey[1].encryptedString);
                    fd.append('data', Buffer.from(encData), {
                        filepath: encFileName.encryptedString,
                        contentType: 'application/octet-stream',
                    });
                }
                else {
                    throw e;
                }
            }
            try {
                yield this.apiService.postShareCipherAttachment(cipherId, attachmentView.id, fd, organizationId);
            }
            catch (e) {
                throw new Error(e.getSingleMessage());
            }
        });
    }
    encryptObjProperty(model, obj, map, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            const self = this;
            for (const prop in map) {
                if (!map.hasOwnProperty(prop)) {
                    continue;
                }
                // tslint:disable-next-line
                (function (theProp, theObj) {
                    const p = Promise.resolve().then(() => {
                        const modelProp = model[(map[theProp] || theProp)];
                        if (modelProp && modelProp !== '') {
                            return self.cryptoService.encrypt(modelProp, key);
                        }
                        return null;
                    }).then((val) => {
                        theObj[theProp] = val;
                    });
                    promises.push(p);
                })(prop, obj);
            }
            yield Promise.all(promises);
        });
    }
    encryptCipherData(cipher, model, key) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (cipher.type) {
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login:
                    cipher.login = new _models_domain_login__WEBPACK_IMPORTED_MODULE_9__[/* Login */ "a"]();
                    cipher.login.passwordRevisionDate = model.login.passwordRevisionDate;
                    yield this.encryptObjProperty(model.login, cipher.login, {
                        username: null,
                        password: null,
                        totp: null,
                    }, key);
                    if (model.login.uris != null) {
                        cipher.login.uris = [];
                        for (let i = 0; i < model.login.uris.length; i++) {
                            const loginUri = new _models_domain_loginUri__WEBPACK_IMPORTED_MODULE_10__[/* LoginUri */ "a"]();
                            loginUri.match = model.login.uris[i].match;
                            yield this.encryptObjProperty(model.login.uris[i], loginUri, {
                                uri: null,
                            }, key);
                            cipher.login.uris.push(loginUri);
                        }
                    }
                    return;
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].SecureNote:
                    cipher.secureNote = new _models_domain_secureNote__WEBPACK_IMPORTED_MODULE_12__[/* SecureNote */ "a"]();
                    cipher.secureNote.type = model.secureNote.type;
                    return;
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Card:
                    cipher.card = new _models_domain_card__WEBPACK_IMPORTED_MODULE_5__[/* Card */ "a"]();
                    yield this.encryptObjProperty(model.card, cipher.card, {
                        cardholderName: null,
                        brand: null,
                        number: null,
                        expMonth: null,
                        expYear: null,
                        code: null,
                    }, key);
                    return;
                case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Identity:
                    cipher.identity = new _models_domain_identity__WEBPACK_IMPORTED_MODULE_8__[/* Identity */ "a"]();
                    yield this.encryptObjProperty(model.identity, cipher.identity, {
                        title: null,
                        firstName: null,
                        middleName: null,
                        lastName: null,
                        address1: null,
                        address2: null,
                        address3: null,
                        city: null,
                        state: null,
                        postalCode: null,
                        country: null,
                        company: null,
                        email: null,
                        phone: null,
                        ssn: null,
                        username: null,
                        passportNumber: null,
                        licenseNumber: null,
                    }, key);
                    return;
                default:
                    throw new Error('Unknown cipher type.');
            }
        });
    }
}
__decorate([
    Object(_misc_sequentialize__WEBPACK_IMPORTED_MODULE_22__[/* sequentialize */ "a"])(ɵ0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CipherService.prototype, "getAllDecrypted", null);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51).Buffer))

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventType; });
var EventType;
(function (EventType) {
    EventType[EventType["User_LoggedIn"] = 1000] = "User_LoggedIn";
    EventType[EventType["User_ChangedPassword"] = 1001] = "User_ChangedPassword";
    EventType[EventType["User_Updated2fa"] = 1002] = "User_Updated2fa";
    EventType[EventType["User_Disabled2fa"] = 1003] = "User_Disabled2fa";
    EventType[EventType["User_Recovered2fa"] = 1004] = "User_Recovered2fa";
    EventType[EventType["User_FailedLogIn"] = 1005] = "User_FailedLogIn";
    EventType[EventType["User_FailedLogIn2fa"] = 1006] = "User_FailedLogIn2fa";
    EventType[EventType["User_ClientExportedVault"] = 1007] = "User_ClientExportedVault";
    EventType[EventType["Cipher_Created"] = 1100] = "Cipher_Created";
    EventType[EventType["Cipher_Updated"] = 1101] = "Cipher_Updated";
    EventType[EventType["Cipher_Deleted"] = 1102] = "Cipher_Deleted";
    EventType[EventType["Cipher_AttachmentCreated"] = 1103] = "Cipher_AttachmentCreated";
    EventType[EventType["Cipher_AttachmentDeleted"] = 1104] = "Cipher_AttachmentDeleted";
    EventType[EventType["Cipher_Shared"] = 1105] = "Cipher_Shared";
    EventType[EventType["Cipher_UpdatedCollections"] = 1106] = "Cipher_UpdatedCollections";
    EventType[EventType["Cipher_ClientViewed"] = 1107] = "Cipher_ClientViewed";
    EventType[EventType["Cipher_ClientToggledPasswordVisible"] = 1108] = "Cipher_ClientToggledPasswordVisible";
    EventType[EventType["Cipher_ClientToggledHiddenFieldVisible"] = 1109] = "Cipher_ClientToggledHiddenFieldVisible";
    EventType[EventType["Cipher_ClientToggledCardCodeVisible"] = 1110] = "Cipher_ClientToggledCardCodeVisible";
    EventType[EventType["Cipher_ClientCopiedPassword"] = 1111] = "Cipher_ClientCopiedPassword";
    EventType[EventType["Cipher_ClientCopiedHiddenField"] = 1112] = "Cipher_ClientCopiedHiddenField";
    EventType[EventType["Cipher_ClientCopiedCardCode"] = 1113] = "Cipher_ClientCopiedCardCode";
    EventType[EventType["Cipher_ClientAutofilled"] = 1114] = "Cipher_ClientAutofilled";
    EventType[EventType["Collection_Created"] = 1300] = "Collection_Created";
    EventType[EventType["Collection_Updated"] = 1301] = "Collection_Updated";
    EventType[EventType["Collection_Deleted"] = 1302] = "Collection_Deleted";
    EventType[EventType["Group_Created"] = 1400] = "Group_Created";
    EventType[EventType["Group_Updated"] = 1401] = "Group_Updated";
    EventType[EventType["Group_Deleted"] = 1402] = "Group_Deleted";
    EventType[EventType["OrganizationUser_Invited"] = 1500] = "OrganizationUser_Invited";
    EventType[EventType["OrganizationUser_Confirmed"] = 1501] = "OrganizationUser_Confirmed";
    EventType[EventType["OrganizationUser_Updated"] = 1502] = "OrganizationUser_Updated";
    EventType[EventType["OrganizationUser_Removed"] = 1503] = "OrganizationUser_Removed";
    EventType[EventType["OrganizationUser_UpdatedGroups"] = 1504] = "OrganizationUser_UpdatedGroups";
    EventType[EventType["Organization_Updated"] = 1600] = "Organization_Updated";
    EventType[EventType["Organization_PurgedVault"] = 1601] = "Organization_PurgedVault";
    // Organization_ClientExportedVault = 1602,
})(EventType || (EventType = {}));


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Domain; });
/* harmony import */ var _cipherString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Domain {
    buildDomainModel(domain, dataObj, map, alreadyEncrypted, notEncList = []) {
        for (const prop in map) {
            if (!map.hasOwnProperty(prop)) {
                continue;
            }
            const objProp = dataObj[(map[prop] || prop)];
            if (alreadyEncrypted === true || notEncList.indexOf(prop) > -1) {
                domain[prop] = objProp ? objProp : null;
            }
            else {
                domain[prop] = objProp ? new _cipherString__WEBPACK_IMPORTED_MODULE_0__[/* CipherString */ "a"](objProp) : null;
            }
        }
    }
    buildDataModel(domain, dataObj, map, notCipherStringList = []) {
        for (const prop in map) {
            if (!map.hasOwnProperty(prop)) {
                continue;
            }
            const objProp = domain[(map[prop] || prop)];
            if (notCipherStringList.indexOf(prop) > -1) {
                dataObj[prop] = objProp != null ? objProp : null;
            }
            else {
                dataObj[prop] = objProp != null ? objProp.encryptedString : null;
            }
        }
    }
    decryptObj(viewModel, map, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            const self = this;
            for (const prop in map) {
                if (!map.hasOwnProperty(prop)) {
                    continue;
                }
                // tslint:disable-next-line
                (function (theProp) {
                    const p = Promise.resolve().then(() => {
                        const mapProp = map[theProp] || theProp;
                        if (self[mapProp]) {
                            return self[mapProp].decrypt(orgId);
                        }
                        return null;
                    }).then((val) => {
                        viewModel[theProp] = val;
                    });
                    promises.push(p);
                })(prop);
            }
            yield Promise.all(promises);
            return viewModel;
        });
    }
}


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherBulkDeleteRequest; });
class CipherBulkDeleteRequest {
    constructor(ids) {
        this.ids = ids == null ? [] : ids;
    }
}


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherBulkMoveRequest; });
class CipherBulkMoveRequest {
    constructor(ids, folderId) {
        this.ids = ids == null ? [] : ids;
        this.folderId = folderId;
    }
}


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherCollectionsRequest; });
class CipherCollectionsRequest {
    constructor(collectionIds) {
        this.collectionIds = collectionIds == null ? [] : collectionIds;
    }
}


/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherCreateRequest; });
/* harmony import */ var _cipherRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);

class CipherCreateRequest {
    constructor(cipher) {
        this.cipher = new _cipherRequest__WEBPACK_IMPORTED_MODULE_0__[/* CipherRequest */ "a"](cipher);
        this.collectionIds = cipher.collectionIds;
    }
}


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherShareRequest; });
/* harmony import */ var _cipherRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);

class CipherShareRequest {
    constructor(cipher) {
        this.cipher = new _cipherRequest__WEBPACK_IMPORTED_MODULE_0__[/* CipherRequest */ "a"](cipher);
        this.collectionIds = cipher.collectionIds;
    }
}


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldType; });
var FieldType;
(function (FieldType) {
    FieldType[FieldType["Text"] = 0] = "Text";
    FieldType[FieldType["Hidden"] = 1] = "Hidden";
    FieldType[FieldType["Boolean"] = 2] = "Boolean";
})(FieldType || (FieldType = {}));


/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./jslib/src/models/request/cipherRequest.ts + 1 modules
var cipherRequest = __webpack_require__(103);

// CONCATENATED MODULE: ./jslib/src/models/request/cipherWithIdRequest.ts

class cipherWithIdRequest_CipherWithIdRequest extends cipherRequest["a" /* CipherRequest */] {
    constructor(cipher) {
        super(cipher);
        this.id = cipher.id;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/request/cipherBulkShareRequest.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cipherBulkShareRequest_CipherBulkShareRequest; });

class cipherBulkShareRequest_CipherBulkShareRequest {
    constructor(ciphers, collectionIds) {
        if (ciphers != null) {
            this.ciphers = [];
            ciphers.forEach((c) => {
                this.ciphers.push(new cipherWithIdRequest_CipherWithIdRequest(c));
            });
        }
        this.collectionIds = collectionIds;
    }
}


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherString; });
/* harmony import */ var _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _misc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class CipherString {
    constructor(encryptedStringOrType, data, iv, mac) {
        if (data != null) {
            // data and header
            const encType = encryptedStringOrType;
            if (iv != null) {
                this.encryptedString = encType + '.' + iv + '|' + data;
            }
            else {
                this.encryptedString = encType + '.' + data;
            }
            // mac
            if (mac != null) {
                this.encryptedString += ('|' + mac);
            }
            this.encryptionType = encType;
            this.data = data;
            this.iv = iv;
            this.mac = mac;
            return;
        }
        this.encryptedString = encryptedStringOrType;
        if (!this.encryptedString) {
            return;
        }
        const headerPieces = this.encryptedString.split('.');
        let encPieces = null;
        if (headerPieces.length === 2) {
            try {
                this.encryptionType = parseInt(headerPieces[0], null);
                encPieces = headerPieces[1].split('|');
            }
            catch (e) {
                return;
            }
        }
        else {
            encPieces = this.encryptedString.split('|');
            this.encryptionType = encPieces.length === 3 ? _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc128_HmacSha256_B64 :
                _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc256_B64;
        }
        switch (this.encryptionType) {
            case _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc128_HmacSha256_B64:
            case _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc256_HmacSha256_B64:
                if (encPieces.length !== 3) {
                    return;
                }
                this.iv = encPieces[0];
                this.data = encPieces[1];
                this.mac = encPieces[2];
                break;
            case _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc256_B64:
                if (encPieces.length !== 2) {
                    return;
                }
                this.iv = encPieces[0];
                this.data = encPieces[1];
                break;
            case _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].Rsa2048_OaepSha256_B64:
            case _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].Rsa2048_OaepSha1_B64:
                if (encPieces.length !== 1) {
                    return;
                }
                this.data = encPieces[0];
                break;
            default:
                return;
        }
    }
    decrypt(orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.decryptedValue != null) {
                return this.decryptedValue;
            }
            let cryptoService;
            const containerService = _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].global.bitwardenContainerService;
            if (containerService) {
                cryptoService = containerService.getCryptoService();
            }
            else {
                throw new Error('global bitwardenContainerService not initialized.');
            }
            try {
                const orgKey = yield cryptoService.getOrgKey(orgId);
                this.decryptedValue = yield cryptoService.decryptToUtf8(this, orgKey);
            }
            catch (e) {
                this.decryptedValue = '[error: cannot decrypt]';
            }
            return this.decryptedValue;
        });
    }
}


/***/ }),

/***/ 627:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginView; });
class LoginView {
    constructor(l) {
        this.username = null;
        this.password = null;
        this.passwordRevisionDate = null;
        this.totp = null;
        this.uris = null;
        if (!l) {
            return;
        }
        this.passwordRevisionDate = l.passwordRevisionDate;
    }
    get uri() {
        return this.hasUris ? this.uris[0].uri : null;
    }
    get maskedPassword() {
        return this.password != null ? '••••••••' : null;
    }
    get subTitle() {
        return this.username;
    }
    get canLaunch() {
        return this.hasUris && this.uris.some((u) => u.canLaunch);
    }
    get launchUri() {
        if (this.hasUris) {
            const uri = this.uris.find((u) => u.canLaunch);
            if (uri != null) {
                return uri.launchUri;
            }
        }
        return null;
    }
    get hasUris() {
        return this.uris != null && this.uris.length > 0;
    }
}


/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./jslib/src/enums/cipherType.ts
var cipherType = __webpack_require__(7);

// EXTERNAL MODULE: ./jslib/src/enums/deviceType.ts
var deviceType = __webpack_require__(14);

// EXTERNAL MODULE: ./jslib/src/enums/encryptionType.ts
var encryptionType = __webpack_require__(19);

// EXTERNAL MODULE: ./jslib/src/enums/fieldType.ts
var fieldType = __webpack_require__(41);

// CONCATENATED MODULE: ./jslib/src/enums/logLevelType.ts
var LogLevelType;
(function (LogLevelType) {
    LogLevelType[LogLevelType["Debug"] = 0] = "Debug";
    LogLevelType[LogLevelType["Info"] = 1] = "Info";
    LogLevelType[LogLevelType["Warning"] = 2] = "Warning";
    LogLevelType[LogLevelType["Error"] = 3] = "Error";
})(LogLevelType || (LogLevelType = {}));

// EXTERNAL MODULE: ./jslib/src/enums/secureNoteType.ts
var secureNoteType = __webpack_require__(135);

// EXTERNAL MODULE: ./jslib/src/enums/twoFactorProviderType.ts
var twoFactorProviderType = __webpack_require__(11);

// EXTERNAL MODULE: ./jslib/src/enums/uriMatchType.ts
var uriMatchType = __webpack_require__(25);

// CONCATENATED MODULE: ./jslib/src/enums/index.ts









// EXTERNAL MODULE: ./jslib/src/models/response/baseResponse.ts
var baseResponse = __webpack_require__(12);

// CONCATENATED MODULE: ./jslib/src/models/response/apiKeyResponse.ts

class apiKeyResponse_ApiKeyResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.apiKey = this.getResponseProperty('ApiKey');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/billingResponse.ts

class billingResponse_BillingResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.invoices = [];
        this.transactions = [];
        this.balance = this.getResponseProperty('Balance');
        const paymentSource = this.getResponseProperty('PaymentSource');
        const transactions = this.getResponseProperty('Transactions');
        const invoices = this.getResponseProperty('Invoices');
        this.paymentSource = paymentSource == null ? null : new billingResponse_BillingSourceResponse(paymentSource);
        if (transactions != null) {
            this.transactions = transactions.map((t) => new billingResponse_BillingTransactionResponse(t));
        }
        if (invoices != null) {
            this.invoices = invoices.map((i) => new billingResponse_BillingInvoiceResponse(i));
        }
    }
}
class billingResponse_BillingSourceResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.type = this.getResponseProperty('Type');
        this.cardBrand = this.getResponseProperty('CardBrand');
        this.description = this.getResponseProperty('Description');
        this.needsVerification = this.getResponseProperty('NeedsVerification');
    }
}
class billingResponse_BillingInvoiceResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.url = this.getResponseProperty('Url');
        this.pdfUrl = this.getResponseProperty('PdfUrl');
        this.number = this.getResponseProperty('Number');
        this.paid = this.getResponseProperty('Paid');
        this.date = this.getResponseProperty('Date');
        this.amount = this.getResponseProperty('Amount');
    }
}
class billingResponse_BillingTransactionResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.createdDate = this.getResponseProperty('CreatedDate');
        this.amount = this.getResponseProperty('Amount');
        this.refunded = this.getResponseProperty('Refunded');
        this.partiallyRefunded = this.getResponseProperty('PartiallyRefunded');
        this.refundedAmount = this.getResponseProperty('RefundedAmount');
        this.type = this.getResponseProperty('Type');
        this.paymentMethodType = this.getResponseProperty('PaymentMethodType');
        this.details = this.getResponseProperty('Details');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/breachAccountResponse.ts

class breachAccountResponse_BreachAccountResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.addedDate = this.getResponseProperty('AddedDate');
        this.breachDate = this.getResponseProperty('BreachDate');
        this.dataClasses = this.getResponseProperty('DataClasses');
        this.description = this.getResponseProperty('Description');
        this.domain = this.getResponseProperty('Domain');
        this.isActive = this.getResponseProperty('IsActive');
        this.isVerified = this.getResponseProperty('IsVerified');
        this.logoPath = this.getResponseProperty('LogoPath');
        this.modifiedDate = this.getResponseProperty('ModifiedDate');
        this.name = this.getResponseProperty('Name');
        this.pwnCount = this.getResponseProperty('PwnCount');
        this.title = this.getResponseProperty('Title');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/attachmentResponse.ts

class attachmentResponse_AttachmentResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.url = this.getResponseProperty('Url');
        this.fileName = this.getResponseProperty('FileName');
        this.key = this.getResponseProperty('Key');
        this.size = this.getResponseProperty('Size');
        this.sizeName = this.getResponseProperty('SizeName');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/passwordHistoryResponse.ts

class passwordHistoryResponse_PasswordHistoryResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.password = this.getResponseProperty('Password');
        this.lastUsedDate = this.getResponseProperty('LastUsedDate');
    }
}

// EXTERNAL MODULE: ./jslib/src/models/api/cardApi.ts
var cardApi = __webpack_require__(217);

// EXTERNAL MODULE: ./jslib/src/models/api/fieldApi.ts
var fieldApi = __webpack_require__(218);

// EXTERNAL MODULE: ./jslib/src/models/api/identityApi.ts
var identityApi = __webpack_require__(219);

// EXTERNAL MODULE: ./jslib/src/models/api/loginApi.ts
var loginApi = __webpack_require__(220);

// EXTERNAL MODULE: ./jslib/src/models/api/secureNoteApi.ts
var secureNoteApi = __webpack_require__(222);

// CONCATENATED MODULE: ./jslib/src/models/response/cipherResponse.ts








class cipherResponse_CipherResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.organizationId = this.getResponseProperty('OrganizationId');
        this.folderId = this.getResponseProperty('FolderId') || null;
        this.type = this.getResponseProperty('Type');
        this.name = this.getResponseProperty('Name');
        this.notes = this.getResponseProperty('Notes');
        this.favorite = this.getResponseProperty('Favorite') || false;
        this.edit = this.getResponseProperty('Edit') || true;
        this.organizationUseTotp = this.getResponseProperty('OrganizationUseTotp');
        this.revisionDate = this.getResponseProperty('RevisionDate');
        this.collectionIds = this.getResponseProperty('CollectionIds');
        const login = this.getResponseProperty('Login');
        if (login != null) {
            this.login = new loginApi["a" /* LoginApi */](login);
        }
        const card = this.getResponseProperty('Card');
        if (card != null) {
            this.card = new cardApi["a" /* CardApi */](card);
        }
        const identity = this.getResponseProperty('Identity');
        if (identity != null) {
            this.identity = new identityApi["a" /* IdentityApi */](identity);
        }
        const secureNote = this.getResponseProperty('SecureNote');
        if (secureNote != null) {
            this.secureNote = new secureNoteApi["a" /* SecureNoteApi */](secureNote);
        }
        const fields = this.getResponseProperty('Fields');
        if (fields != null) {
            this.fields = fields.map((f) => new fieldApi["a" /* FieldApi */](f));
        }
        const attachments = this.getResponseProperty('Attachments');
        if (attachments != null) {
            this.attachments = attachments.map((a) => new attachmentResponse_AttachmentResponse(a));
        }
        const passwordHistory = this.getResponseProperty('PasswordHistory');
        if (passwordHistory != null) {
            this.passwordHistory = passwordHistory.map((h) => new passwordHistoryResponse_PasswordHistoryResponse(h));
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/selectionReadOnlyResponse.ts

class selectionReadOnlyResponse_SelectionReadOnlyResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.readOnly = this.getResponseProperty('ReadOnly');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/collectionResponse.ts


class collectionResponse_CollectionResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.organizationId = this.getResponseProperty('OrganizationId');
        this.name = this.getResponseProperty('Name');
        this.externalId = this.getResponseProperty('ExternalId');
    }
}
class CollectionDetailsResponse extends collectionResponse_CollectionResponse {
    constructor(response) {
        super(response);
        this.readOnly = this.getResponseProperty('ReadOnly') || false;
    }
}
class collectionResponse_CollectionGroupDetailsResponse extends collectionResponse_CollectionResponse {
    constructor(response) {
        super(response);
        this.groups = [];
        const groups = this.getResponseProperty('Groups');
        if (groups != null) {
            this.groups = groups.map((g) => new selectionReadOnlyResponse_SelectionReadOnlyResponse(g));
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/globalDomainResponse.ts

class globalDomainResponse_GlobalDomainResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.type = this.getResponseProperty('Type');
        this.domains = this.getResponseProperty('Domains');
        this.excluded = this.getResponseProperty('Excluded');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/domainsResponse.ts


class domainsResponse_DomainsResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.globalEquivalentDomains = [];
        this.equivalentDomains = this.getResponseProperty('EquivalentDomains');
        const globalEquivalentDomains = this.getResponseProperty('GlobalEquivalentDomains');
        if (globalEquivalentDomains != null) {
            this.globalEquivalentDomains = globalEquivalentDomains.map((d) => new globalDomainResponse_GlobalDomainResponse(d));
        }
        else {
            this.globalEquivalentDomains = [];
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/errorResponse.ts

class errorResponse_ErrorResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response, status, identityResponse) {
        super(response);
        let errorModel = null;
        if (response != null) {
            const responseErrorModel = this.getResponseProperty('ErrorModel');
            if (responseErrorModel && identityResponse) {
                errorModel = responseErrorModel;
            }
            else {
                errorModel = response;
            }
        }
        if (errorModel) {
            this.message = this.getResponseProperty('Message', errorModel);
            this.validationErrors = this.getResponseProperty('ValidationErrors', errorModel);
        }
        else {
            if (status === 429) {
                this.message = 'Rate limit exceeded. Try again later.';
            }
        }
        this.statusCode = status;
    }
    getSingleMessage() {
        if (this.validationErrors == null) {
            return this.message;
        }
        for (const key in this.validationErrors) {
            if (!this.validationErrors.hasOwnProperty(key)) {
                continue;
            }
            if (this.validationErrors[key].length) {
                return this.validationErrors[key][0];
            }
        }
        return this.message;
    }
    getAllMessages() {
        const messages = [];
        if (this.validationErrors == null) {
            return messages;
        }
        for (const key in this.validationErrors) {
            if (!this.validationErrors.hasOwnProperty(key)) {
                continue;
            }
            this.validationErrors[key].forEach((item) => {
                let prefix = '';
                if (key.indexOf('[') > -1 && key.indexOf(']') > -1) {
                    const lastSep = key.lastIndexOf('.');
                    prefix = key.substr(0, lastSep > -1 ? lastSep : key.length) + ': ';
                }
                messages.push(prefix + item);
            });
        }
        return messages;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/eventResponse.ts

class eventResponse_EventResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.type = this.getResponseProperty('Type');
        this.userId = this.getResponseProperty('UserId');
        this.organizationId = this.getResponseProperty('OrganizationId');
        this.cipherId = this.getResponseProperty('CipherId');
        this.collectionId = this.getResponseProperty('CollectionId');
        this.groupId = this.getResponseProperty('GroupId');
        this.organizationUserId = this.getResponseProperty('OrganizationUserId');
        this.actingUserId = this.getResponseProperty('ActingUserId');
        this.date = this.getResponseProperty('Date');
        this.deviceType = this.getResponseProperty('DeviceType');
        this.ipAddress = this.getResponseProperty('IpAddress');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/folderResponse.ts

class folderResponse_FolderResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.name = this.getResponseProperty('Name');
        this.revisionDate = this.getResponseProperty('RevisionDate');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/groupResponse.ts


class groupResponse_GroupResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.organizationId = this.getResponseProperty('OrganizationId');
        this.name = this.getResponseProperty('Name');
        this.accessAll = this.getResponseProperty('AccessAll');
        this.externalId = this.getResponseProperty('ExternalId');
    }
}
class groupResponse_GroupDetailsResponse extends groupResponse_GroupResponse {
    constructor(response) {
        super(response);
        this.collections = [];
        const collections = this.getResponseProperty('Collections');
        if (collections != null) {
            this.collections = collections.map((c) => new selectionReadOnlyResponse_SelectionReadOnlyResponse(c));
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/identityTokenResponse.ts

class identityTokenResponse_IdentityTokenResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.accessToken = response.access_token;
        this.expiresIn = response.expires_in;
        this.refreshToken = response.refresh_token;
        this.tokenType = response.token_type;
        this.privateKey = this.getResponseProperty('PrivateKey');
        this.key = this.getResponseProperty('Key');
        this.twoFactorToken = this.getResponseProperty('TwoFactorToken');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/identityTwoFactorResponse.ts

class identityTwoFactorResponse_IdentityTwoFactorResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.twoFactorProviders2 = new Map();
        this.twoFactorProviders = this.getResponseProperty('TwoFactorProviders');
        const twoFactorProviders2 = this.getResponseProperty('TwoFactorProviders2');
        if (twoFactorProviders2 != null) {
            for (const prop in twoFactorProviders2) {
                if (twoFactorProviders2.hasOwnProperty(prop)) {
                    this.twoFactorProviders2.set(parseInt(prop, null), twoFactorProviders2[prop]);
                }
            }
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/listResponse.ts

class listResponse_ListResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response, t) {
        super(response);
        const data = this.getResponseProperty('Data');
        this.data = data == null ? [] : data.map((dr) => new t(dr));
        this.continuationToken = this.getResponseProperty('ContinuationToken');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/organizationResponse.ts

class organizationResponse_OrganizationResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.name = this.getResponseProperty('Name');
        this.businessName = this.getResponseProperty('BusinessName');
        this.businessAddress1 = this.getResponseProperty('BusinessAddress1');
        this.businessAddress2 = this.getResponseProperty('BusinessAddress2');
        this.businessAddress3 = this.getResponseProperty('BusinessAddress3');
        this.businessCountry = this.getResponseProperty('BusinessCountry');
        this.businessTaxNumber = this.getResponseProperty('BusinessTaxNumber');
        this.billingEmail = this.getResponseProperty('BillingEmail');
        this.plan = this.getResponseProperty('Plan');
        this.planType = this.getResponseProperty('PlanType');
        this.seats = this.getResponseProperty('Seats');
        this.maxCollections = this.getResponseProperty('MaxCollections');
        this.maxStorageGb = this.getResponseProperty('MaxStorageGb');
        this.useGroups = this.getResponseProperty('UseGroups');
        this.useDirectory = this.getResponseProperty('UseDirectory');
        this.useEvents = this.getResponseProperty('UseEvents');
        this.useTotp = this.getResponseProperty('UseTotp');
        this.use2fa = this.getResponseProperty('Use2fa');
        this.useApi = this.getResponseProperty('UseApi');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/subscriptionResponse.ts

class subscriptionResponse_SubscriptionResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.storageName = this.getResponseProperty('StorageName');
        this.storageGb = this.getResponseProperty('StorageGb');
        this.maxStorageGb = this.getResponseProperty('MaxStorageGb');
        this.license = this.getResponseProperty('License');
        this.expiration = this.getResponseProperty('Expiration');
        this.usingInAppPurchase = this.getResponseProperty('UsingInAppPurchase');
        const subscription = this.getResponseProperty('Subscription');
        const upcomingInvoice = this.getResponseProperty('UpcomingInvoice');
        this.subscription = subscription == null ? null : new subscriptionResponse_BillingSubscriptionResponse(subscription);
        this.upcomingInvoice = upcomingInvoice == null ? null :
            new subscriptionResponse_BillingSubscriptionUpcomingInvoiceResponse(upcomingInvoice);
    }
}
class subscriptionResponse_BillingSubscriptionResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.items = [];
        this.trialEndDate = this.getResponseProperty('TrialStartDate');
        this.trialEndDate = this.getResponseProperty('TrialEndDate');
        this.periodStartDate = this.getResponseProperty('PeriodStartDate');
        this.periodEndDate = this.getResponseProperty('PeriodEndDate');
        this.cancelledDate = this.getResponseProperty('CancelledDate');
        this.cancelAtEndDate = this.getResponseProperty('CancelAtEndDate');
        this.status = this.getResponseProperty('Status');
        this.cancelled = this.getResponseProperty('Cancelled');
        const items = this.getResponseProperty('Items');
        if (items != null) {
            this.items = items.map((i) => new subscriptionResponse_BillingSubscriptionItemResponse(i));
        }
    }
}
class subscriptionResponse_BillingSubscriptionItemResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.name = this.getResponseProperty('Name');
        this.amount = this.getResponseProperty('Amount');
        this.quantity = this.getResponseProperty('Quantity');
        this.interval = this.getResponseProperty('Interval');
    }
}
class subscriptionResponse_BillingSubscriptionUpcomingInvoiceResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.date = this.getResponseProperty('Date');
        this.amount = this.getResponseProperty('Amount');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/organizationSubscriptionResponse.ts


class organizationSubscriptionResponse_OrganizationSubscriptionResponse extends organizationResponse_OrganizationResponse {
    constructor(response) {
        super(response);
        this.storageName = this.getResponseProperty('StorageName');
        this.storageGb = this.getResponseProperty('StorageGb');
        const subscription = this.getResponseProperty('Subscription');
        this.subscription = subscription == null ? null : new subscriptionResponse_BillingSubscriptionResponse(subscription);
        const upcomingInvoice = this.getResponseProperty('UpcomingInvoice');
        this.upcomingInvoice = upcomingInvoice == null ? null :
            new subscriptionResponse_BillingSubscriptionUpcomingInvoiceResponse(upcomingInvoice);
        this.expiration = this.getResponseProperty('Expiration');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/organizationUserResponse.ts


class organizationUserResponse_OrganizationUserResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.userId = this.getResponseProperty('UserId');
        this.type = this.getResponseProperty('Type');
        this.status = this.getResponseProperty('Status');
        this.accessAll = this.getResponseProperty('AccessAll');
    }
}
class OrganizationUserUserDetailsResponse extends organizationUserResponse_OrganizationUserResponse {
    constructor(response) {
        super(response);
        this.name = this.getResponseProperty('Name');
        this.email = this.getResponseProperty('Email');
        this.twoFactorEnabled = this.getResponseProperty('TwoFactorEnabled');
    }
}
class organizationUserResponse_OrganizationUserDetailsResponse extends organizationUserResponse_OrganizationUserResponse {
    constructor(response) {
        super(response);
        this.collections = [];
        const collections = this.getResponseProperty('Collections');
        if (collections != null) {
            this.collections = collections.map((c) => new selectionReadOnlyResponse_SelectionReadOnlyResponse(c));
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/profileOrganizationResponse.ts

class profileOrganizationResponse_ProfileOrganizationResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.name = this.getResponseProperty('Name');
        this.useGroups = this.getResponseProperty('UseGroups');
        this.useDirectory = this.getResponseProperty('UseDirectory');
        this.useEvents = this.getResponseProperty('UseEvents');
        this.useTotp = this.getResponseProperty('UseTotp');
        this.use2fa = this.getResponseProperty('Use2fa');
        this.useApi = this.getResponseProperty('UseApi');
        this.selfHost = this.getResponseProperty('SelfHost');
        this.usersGetPremium = this.getResponseProperty('UsersGetPremium');
        this.seats = this.getResponseProperty('Seats');
        this.maxCollections = this.getResponseProperty('MaxCollections');
        this.maxStorageGb = this.getResponseProperty('MaxStorageGb');
        this.key = this.getResponseProperty('Key');
        this.status = this.getResponseProperty('Status');
        this.type = this.getResponseProperty('Type');
        this.enabled = this.getResponseProperty('Enabled');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/profileResponse.ts


class profileResponse_ProfileResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.organizations = [];
        this.id = this.getResponseProperty('Id');
        this.name = this.getResponseProperty('Name');
        this.email = this.getResponseProperty('Email');
        this.emailVerified = this.getResponseProperty('EmailVerified');
        this.masterPasswordHint = this.getResponseProperty('MasterPasswordHint');
        this.premium = this.getResponseProperty('Premium');
        this.culture = this.getResponseProperty('Culture');
        this.twoFactorEnabled = this.getResponseProperty('TwoFactorEnabled');
        this.key = this.getResponseProperty('Key');
        this.privateKey = this.getResponseProperty('PrivateKey');
        this.securityStamp = this.getResponseProperty('SecurityStamp');
        const organizations = this.getResponseProperty('Organizations');
        if (organizations != null) {
            this.organizations = organizations.map((o) => new profileOrganizationResponse_ProfileOrganizationResponse(o));
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/paymentResponse.ts


class paymentResponse_PaymentResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        const userProfile = this.getResponseProperty('UserProfile');
        if (userProfile != null) {
            this.userProfile = new profileResponse_ProfileResponse(userProfile);
        }
        this.paymentIntentClientSecret = this.getResponseProperty('PaymentIntentClientSecret');
        this.success = this.getResponseProperty('Success');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/preloginResponse.ts

class preloginResponse_PreloginResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.kdf = this.getResponseProperty('Kdf');
        this.kdfIterations = this.getResponseProperty('KdfIterations');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/syncResponse.ts






class syncResponse_SyncResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.folders = [];
        this.collections = [];
        this.ciphers = [];
        const profile = this.getResponseProperty('Profile');
        if (profile != null) {
            this.profile = new profileResponse_ProfileResponse(profile);
        }
        const folders = this.getResponseProperty('Folders');
        if (folders != null) {
            this.folders = folders.map((f) => new folderResponse_FolderResponse(f));
        }
        const collections = this.getResponseProperty('Collections');
        if (collections != null) {
            this.collections = collections.map((c) => new CollectionDetailsResponse(c));
        }
        const ciphers = this.getResponseProperty('Ciphers');
        if (ciphers != null) {
            this.ciphers = ciphers.map((c) => new cipherResponse_CipherResponse(c));
        }
        const domains = this.getResponseProperty('Domains');
        if (domains != null) {
            this.domains = new domainsResponse_DomainsResponse(domains);
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/twoFactorAuthenticatorResponse.ts

class twoFactorAuthenticatorResponse_TwoFactorAuthenticatorResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.enabled = this.getResponseProperty('Enabled');
        this.key = this.getResponseProperty('Key');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/twoFactorDuoResponse.ts

class twoFactorDuoResponse_TwoFactorDuoResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.enabled = this.getResponseProperty('Enabled');
        this.host = this.getResponseProperty('Host');
        this.secretKey = this.getResponseProperty('SecretKey');
        this.integrationKey = this.getResponseProperty('IntegrationKey');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/twoFactorEmailResponse.ts

class twoFactorEmailResponse_TwoFactorEmailResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.enabled = this.getResponseProperty('Enabled');
        this.email = this.getResponseProperty('Email');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/twoFactorProviderResponse.ts

class twoFactorProviderResponse_TwoFactorProviderResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.enabled = this.getResponseProperty('Enabled');
        this.type = this.getResponseProperty('Type');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/twoFactorRescoverResponse.ts

class twoFactorRescoverResponse_TwoFactorRecoverResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.code = this.getResponseProperty('Code');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/twoFactorU2fResponse.ts

class twoFactorU2fResponse_TwoFactorU2fResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.enabled = this.getResponseProperty('Enabled');
        const keys = this.getResponseProperty('Keys');
        this.keys = keys == null ? null : keys.map((k) => new twoFactorU2fResponse_KeyResponse(k));
    }
}
class twoFactorU2fResponse_KeyResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.name = this.getResponseProperty('Name');
        this.id = this.getResponseProperty('Id');
        this.compromised = this.getResponseProperty('Compromised');
    }
}
class twoFactorU2fResponse_ChallengeResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.userId = this.getResponseProperty('UserId');
        this.appId = this.getResponseProperty('AppId');
        this.challenge = this.getResponseProperty('Challenge');
        this.version = this.getResponseProperty('Version');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/twoFactorYubiKeyResponse.ts

class twoFactorYubiKeyResponse_TwoFactorYubiKeyResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.enabled = this.getResponseProperty('Enabled');
        this.key1 = this.getResponseProperty('Key1');
        this.key2 = this.getResponseProperty('Key2');
        this.key3 = this.getResponseProperty('Key3');
        this.key4 = this.getResponseProperty('Key4');
        this.key5 = this.getResponseProperty('Key5');
        this.nfc = this.getResponseProperty('Nfc');
    }
}

// CONCATENATED MODULE: ./jslib/src/models/response/userKeyResponse.ts

class userKeyResponse_UserKeyResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.userId = this.getResponseProperty('UserId');
        this.publicKey = this.getResponseProperty('PublicKey');
    }
}

// CONCATENATED MODULE: ./jslib/src/services/api.service.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};































class api_service_ApiService {
    constructor(tokenService, platformUtilsService, logoutCallback, customUserAgent = null) {
        this.tokenService = tokenService;
        this.platformUtilsService = platformUtilsService;
        this.logoutCallback = logoutCallback;
        this.customUserAgent = customUserAgent;
        this.urlsSet = false;
        this.isWebClient = false;
        this.isDesktopClient = false;
        this.usingBaseUrl = false;
        this.device = platformUtilsService.getDevice();
        this.deviceType = this.device.toString();
        this.isWebClient = this.device === deviceType["a" /* DeviceType */].IEBrowser || this.device === deviceType["a" /* DeviceType */].ChromeBrowser ||
            this.device === deviceType["a" /* DeviceType */].EdgeBrowser || this.device === deviceType["a" /* DeviceType */].FirefoxBrowser ||
            this.device === deviceType["a" /* DeviceType */].OperaBrowser || this.device === deviceType["a" /* DeviceType */].SafariBrowser ||
            this.device === deviceType["a" /* DeviceType */].UnknownBrowser || this.device === deviceType["a" /* DeviceType */].VivaldiBrowser;
        this.isDesktopClient = this.device === deviceType["a" /* DeviceType */].WindowsDesktop || this.device === deviceType["a" /* DeviceType */].MacOsDesktop ||
            this.device === deviceType["a" /* DeviceType */].LinuxDesktop;
    }
    setUrls(urls) {
        this.urlsSet = true;
        if (urls.base != null) {
            this.usingBaseUrl = true;
            this.apiBaseUrl = urls.base + '/api';
            this.identityBaseUrl = urls.base + '/identity';
            this.eventsBaseUrl = urls.base + '/events';
            return;
        }
        this.apiBaseUrl = urls.api;
        this.identityBaseUrl = urls.identity;
        this.eventsBaseUrl = urls.events;
        // Production
        if (this.apiBaseUrl == null) {
            this.apiBaseUrl = 'https://api.bitwarden.com';
        }
        if (this.identityBaseUrl == null) {
            this.identityBaseUrl = 'https://identity.bitwarden.com';
        }
        if (this.eventsBaseUrl == null) {
            this.eventsBaseUrl = 'https://events.bitwarden.com';
        }
    }
    // Auth APIs
    postIdentityToken(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                'Accept': 'application/json',
                'Device-Type': this.deviceType,
            });
            if (this.customUserAgent != null) {
                headers.set('User-Agent', this.customUserAgent);
            }
            const response = yield this.fetch(new Request(this.identityBaseUrl + '/connect/token', {
                body: this.qsStringify(request.toIdentityToken(this.platformUtilsService.identityClientId)),
                credentials: this.getCredentials(),
                cache: 'no-cache',
                headers: headers,
                method: 'POST',
            }));
            let responseJson = null;
            if (this.isJsonResponse(response)) {
                responseJson = yield response.json();
            }
            if (responseJson != null) {
                if (response.status === 200) {
                    return new identityTokenResponse_IdentityTokenResponse(responseJson);
                }
                else if (response.status === 400 && responseJson.TwoFactorProviders2 &&
                    Object.keys(responseJson.TwoFactorProviders2).length) {
                    yield this.tokenService.clearTwoFactorToken(request.email);
                    return new identityTwoFactorResponse_IdentityTwoFactorResponse(responseJson);
                }
            }
            return Promise.reject(new errorResponse_ErrorResponse(responseJson, response.status, true));
        });
    }
    refreshIdentityToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.doRefreshToken();
            }
            catch (e) {
                return Promise.reject(null);
            }
        });
    }
    // Account APIs
    getProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/accounts/profile', null, true, true);
            return new profileResponse_ProfileResponse(r);
        });
    }
    getUserBilling() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/accounts/billing', null, true, true);
            return new billingResponse_BillingResponse(r);
        });
    }
    getUserSubscription() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/accounts/subscription', null, true, true);
            return new subscriptionResponse_SubscriptionResponse(r);
        });
    }
    putProfile(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/accounts/profile', request, true, true);
            return new profileResponse_ProfileResponse(r);
        });
    }
    postPrelogin(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/accounts/prelogin', request, false, true);
            return new preloginResponse_PreloginResponse(r);
        });
    }
    postEmailToken(request) {
        return this.send('POST', '/accounts/email-token', request, true, false);
    }
    postEmail(request) {
        return this.send('POST', '/accounts/email', request, true, false);
    }
    postPassword(request) {
        return this.send('POST', '/accounts/password', request, true, false);
    }
    postSecurityStamp(request) {
        return this.send('POST', '/accounts/security-stamp', request, true, false);
    }
    deleteAccount(request) {
        return this.send('DELETE', '/accounts', request, true, false);
    }
    getAccountRevisionDate() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/accounts/revision-date', null, true, true);
            return r;
        });
    }
    postPasswordHint(request) {
        return this.send('POST', '/accounts/password-hint', request, false, false);
    }
    postRegister(request) {
        return this.send('POST', '/accounts/register', request, false, false);
    }
    postPremium(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/accounts/premium', data, true, true);
            return new paymentResponse_PaymentResponse(r);
        });
    }
    postIapCheck(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send('POST', '/accounts/iap-check', request, true, false);
        });
    }
    postReinstatePremium() {
        return this.send('POST', '/accounts/reinstate-premium', null, true, false);
    }
    postCancelPremium() {
        return this.send('POST', '/accounts/cancel-premium', null, true, false);
    }
    postAccountStorage(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/accounts/storage', request, true, true);
            return new paymentResponse_PaymentResponse(r);
        });
    }
    postAccountPayment(request) {
        return this.send('POST', '/accounts/payment', request, true, false);
    }
    postAccountLicense(data) {
        return this.send('POST', '/accounts/license', data, true, false);
    }
    postAccountKeys(request) {
        return this.send('POST', '/accounts/keys', request, true, false);
    }
    postAccountKey(request) {
        return this.send('POST', '/accounts/key', request, true, false);
    }
    postAccountVerifyEmail() {
        return this.send('POST', '/accounts/verify-email', null, true, false);
    }
    postAccountVerifyEmailToken(request) {
        return this.send('POST', '/accounts/verify-email-token', request, false, false);
    }
    postAccountRecoverDelete(request) {
        return this.send('POST', '/accounts/delete-recover', request, false, false);
    }
    postAccountRecoverDeleteToken(request) {
        return this.send('POST', '/accounts/delete-recover-token', request, false, false);
    }
    postAccountKdf(request) {
        return this.send('POST', '/accounts/kdf', request, true, false);
    }
    // Folder APIs
    getFolder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/folders/' + id, null, true, true);
            return new folderResponse_FolderResponse(r);
        });
    }
    postFolder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/folders', request, true, true);
            return new folderResponse_FolderResponse(r);
        });
    }
    putFolder(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/folders/' + id, request, true, true);
            return new folderResponse_FolderResponse(r);
        });
    }
    deleteFolder(id) {
        return this.send('DELETE', '/folders/' + id, null, true, false);
    }
    // Cipher APIs
    getCipher(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/ciphers/' + id, null, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    getCipherAdmin(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/ciphers/' + id + '/admin', null, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    getCiphersOrganization(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/ciphers/organization-details?organizationId=' + organizationId, null, true, true);
            return new listResponse_ListResponse(r, cipherResponse_CipherResponse);
        });
    }
    postCipher(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/ciphers', request, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    postCipherCreate(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/ciphers/create', request, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    postCipherAdmin(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/ciphers/admin', request, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    putCipher(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/ciphers/' + id, request, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    putCipherAdmin(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/ciphers/' + id + '/admin', request, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    deleteCipher(id) {
        return this.send('DELETE', '/ciphers/' + id, null, true, false);
    }
    deleteCipherAdmin(id) {
        return this.send('DELETE', '/ciphers/' + id + '/admin', null, true, false);
    }
    deleteManyCiphers(request) {
        return this.send('DELETE', '/ciphers', request, true, false);
    }
    putMoveCiphers(request) {
        return this.send('PUT', '/ciphers/move', request, true, false);
    }
    putShareCipher(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/ciphers/' + id + '/share', request, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    putShareCiphers(request) {
        return this.send('PUT', '/ciphers/share', request, true, false);
    }
    putCipherCollections(id, request) {
        return this.send('PUT', '/ciphers/' + id + '/collections', request, true, false);
    }
    putCipherCollectionsAdmin(id, request) {
        return this.send('PUT', '/ciphers/' + id + '/collections-admin', request, true, false);
    }
    postPurgeCiphers(request, organizationId = null) {
        let path = '/ciphers/purge';
        if (organizationId != null) {
            path += '?organizationId=' + organizationId;
        }
        return this.send('POST', path, request, true, false);
    }
    postImportCiphers(request) {
        return this.send('POST', '/ciphers/import', request, true, false);
    }
    postImportOrganizationCiphers(organizationId, request) {
        return this.send('POST', '/ciphers/import-organization?organizationId=' + organizationId, request, true, false);
    }
    // Attachments APIs
    postCipherAttachment(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/ciphers/' + id + '/attachment', data, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    postCipherAttachmentAdmin(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/ciphers/' + id + '/attachment-admin', data, true, true);
            return new cipherResponse_CipherResponse(r);
        });
    }
    deleteCipherAttachment(id, attachmentId) {
        return this.send('DELETE', '/ciphers/' + id + '/attachment/' + attachmentId, null, true, false);
    }
    deleteCipherAttachmentAdmin(id, attachmentId) {
        return this.send('DELETE', '/ciphers/' + id + '/attachment/' + attachmentId + '/admin', null, true, false);
    }
    postShareCipherAttachment(id, attachmentId, data, organizationId) {
        return this.send('POST', '/ciphers/' + id + '/attachment/' +
            attachmentId + '/share?organizationId=' + organizationId, data, true, false);
    }
    // Collections APIs
    getCollectionDetails(organizationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/collections/' + id + '/details', null, true, true);
            return new collectionResponse_CollectionGroupDetailsResponse(r);
        });
    }
    getUserCollections() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/collections', null, true, true);
            return new listResponse_ListResponse(r, collectionResponse_CollectionResponse);
        });
    }
    getCollections(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/collections', null, true, true);
            return new listResponse_ListResponse(r, collectionResponse_CollectionResponse);
        });
    }
    getCollectionUsers(organizationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/collections/' + id + '/users', null, true, true);
            return r.map((dr) => new selectionReadOnlyResponse_SelectionReadOnlyResponse(dr));
        });
    }
    postCollection(organizationId, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + organizationId + '/collections', request, true, true);
            return new collectionResponse_CollectionResponse(r);
        });
    }
    putCollection(organizationId, id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/organizations/' + organizationId + '/collections/' + id, request, true, true);
            return new collectionResponse_CollectionResponse(r);
        });
    }
    putCollectionUsers(organizationId, id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('PUT', '/organizations/' + organizationId + '/collections/' + id + '/users', request, true, false);
        });
    }
    deleteCollection(organizationId, id) {
        return this.send('DELETE', '/organizations/' + organizationId + '/collections/' + id, null, true, false);
    }
    deleteCollectionUser(organizationId, id, organizationUserId) {
        return this.send('DELETE', '/organizations/' + organizationId + '/collections/' + id + '/user/' + organizationUserId, null, true, false);
    }
    // Groups APIs
    getGroupDetails(organizationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/groups/' + id + '/details', null, true, true);
            return new groupResponse_GroupDetailsResponse(r);
        });
    }
    getGroups(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/groups', null, true, true);
            return new listResponse_ListResponse(r, groupResponse_GroupResponse);
        });
    }
    getGroupUsers(organizationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/groups/' + id + '/users', null, true, true);
            return r;
        });
    }
    postGroup(organizationId, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + organizationId + '/groups', request, true, true);
            return new groupResponse_GroupResponse(r);
        });
    }
    putGroup(organizationId, id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/organizations/' + organizationId + '/groups/' + id, request, true, true);
            return new groupResponse_GroupResponse(r);
        });
    }
    putGroupUsers(organizationId, id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('PUT', '/organizations/' + organizationId + '/groups/' + id + '/users', request, true, false);
        });
    }
    deleteGroup(organizationId, id) {
        return this.send('DELETE', '/organizations/' + organizationId + '/groups/' + id, null, true, false);
    }
    deleteGroupUser(organizationId, id, organizationUserId) {
        return this.send('DELETE', '/organizations/' + organizationId + '/groups/' + id + '/user/' + organizationUserId, null, true, false);
    }
    // Organization User APIs
    getOrganizationUser(organizationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/users/' + id, null, true, true);
            return new organizationUserResponse_OrganizationUserDetailsResponse(r);
        });
    }
    getOrganizationUserGroups(organizationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/users/' + id + '/groups', null, true, true);
            return r;
        });
    }
    getOrganizationUsers(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/users', null, true, true);
            return new listResponse_ListResponse(r, OrganizationUserUserDetailsResponse);
        });
    }
    postOrganizationUserInvite(organizationId, request) {
        return this.send('POST', '/organizations/' + organizationId + '/users/invite', request, true, false);
    }
    postOrganizationUserReinvite(organizationId, id) {
        return this.send('POST', '/organizations/' + organizationId + '/users/' + id + '/reinvite', null, true, false);
    }
    postOrganizationUserAccept(organizationId, id, request) {
        return this.send('POST', '/organizations/' + organizationId + '/users/' + id + '/accept', request, true, false);
    }
    postOrganizationUserConfirm(organizationId, id, request) {
        return this.send('POST', '/organizations/' + organizationId + '/users/' + id + '/confirm', request, true, false);
    }
    putOrganizationUser(organizationId, id, request) {
        return this.send('PUT', '/organizations/' + organizationId + '/users/' + id, request, true, false);
    }
    putOrganizationUserGroups(organizationId, id, request) {
        return this.send('PUT', '/organizations/' + organizationId + '/users/' + id + '/groups', request, true, false);
    }
    deleteOrganizationUser(organizationId, id) {
        return this.send('DELETE', '/organizations/' + organizationId + '/users/' + id, null, true, false);
    }
    // Sync APIs
    getSync() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = this.isDesktopClient || this.isWebClient ? '/sync?excludeDomains=true' : '/sync';
            const r = yield this.send('GET', path, null, true, true);
            return new syncResponse_SyncResponse(r);
        });
    }
    postImportDirectory(organizationId, request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send('POST', '/organizations/' + organizationId + '/import', request, true, false);
        });
    }
    // Settings APIs
    getSettingsDomains() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/settings/domains', null, true, true);
            return new domainsResponse_DomainsResponse(r);
        });
    }
    putSettingsDomains(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/settings/domains', request, true, true);
            return new domainsResponse_DomainsResponse(r);
        });
    }
    // Two-factor APIs
    getTwoFactorProviders() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/two-factor', null, true, true);
            return new listResponse_ListResponse(r, twoFactorProviderResponse_TwoFactorProviderResponse);
        });
    }
    getTwoFactorOrganizationProviders(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + organizationId + '/two-factor', null, true, true);
            return new listResponse_ListResponse(r, twoFactorProviderResponse_TwoFactorProviderResponse);
        });
    }
    getTwoFactorAuthenticator(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/two-factor/get-authenticator', request, true, true);
            return new twoFactorAuthenticatorResponse_TwoFactorAuthenticatorResponse(r);
        });
    }
    getTwoFactorEmail(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/two-factor/get-email', request, true, true);
            return new twoFactorEmailResponse_TwoFactorEmailResponse(r);
        });
    }
    getTwoFactorDuo(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/two-factor/get-duo', request, true, true);
            return new twoFactorDuoResponse_TwoFactorDuoResponse(r);
        });
    }
    getTwoFactorOrganizationDuo(organizationId, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + organizationId + '/two-factor/get-duo', request, true, true);
            return new twoFactorDuoResponse_TwoFactorDuoResponse(r);
        });
    }
    getTwoFactorYubiKey(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/two-factor/get-yubikey', request, true, true);
            return new twoFactorYubiKeyResponse_TwoFactorYubiKeyResponse(r);
        });
    }
    getTwoFactorU2f(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/two-factor/get-u2f', request, true, true);
            return new twoFactorU2fResponse_TwoFactorU2fResponse(r);
        });
    }
    getTwoFactorU2fChallenge(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/two-factor/get-u2f-challenge', request, true, true);
            return new twoFactorU2fResponse_ChallengeResponse(r);
        });
    }
    getTwoFactorRecover(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/two-factor/get-recover', request, true, true);
            return new twoFactorRescoverResponse_TwoFactorRecoverResponse(r);
        });
    }
    putTwoFactorAuthenticator(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/two-factor/authenticator', request, true, true);
            return new twoFactorAuthenticatorResponse_TwoFactorAuthenticatorResponse(r);
        });
    }
    putTwoFactorEmail(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/two-factor/email', request, true, true);
            return new twoFactorEmailResponse_TwoFactorEmailResponse(r);
        });
    }
    putTwoFactorDuo(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/two-factor/duo', request, true, true);
            return new twoFactorDuoResponse_TwoFactorDuoResponse(r);
        });
    }
    putTwoFactorOrganizationDuo(organizationId, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/organizations/' + organizationId + '/two-factor/duo', request, true, true);
            return new twoFactorDuoResponse_TwoFactorDuoResponse(r);
        });
    }
    putTwoFactorYubiKey(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/two-factor/yubikey', request, true, true);
            return new twoFactorYubiKeyResponse_TwoFactorYubiKeyResponse(r);
        });
    }
    putTwoFactorU2f(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/two-factor/u2f', request, true, true);
            return new twoFactorU2fResponse_TwoFactorU2fResponse(r);
        });
    }
    deleteTwoFactorU2f(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('DELETE', '/two-factor/u2f', request, true, true);
            return new twoFactorU2fResponse_TwoFactorU2fResponse(r);
        });
    }
    putTwoFactorDisable(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/two-factor/disable', request, true, true);
            return new twoFactorProviderResponse_TwoFactorProviderResponse(r);
        });
    }
    putTwoFactorOrganizationDisable(organizationId, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/organizations/' + organizationId + '/two-factor/disable', request, true, true);
            return new twoFactorProviderResponse_TwoFactorProviderResponse(r);
        });
    }
    postTwoFactorRecover(request) {
        return this.send('POST', '/two-factor/recover', request, false, false);
    }
    postTwoFactorEmailSetup(request) {
        return this.send('POST', '/two-factor/send-email', request, true, false);
    }
    postTwoFactorEmail(request) {
        return this.send('POST', '/two-factor/send-email-login', request, false, false);
    }
    // Organization APIs
    getOrganization(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + id, null, true, true);
            return new organizationResponse_OrganizationResponse(r);
        });
    }
    getOrganizationBilling(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + id + '/billing', null, true, true);
            return new billingResponse_BillingResponse(r);
        });
    }
    getOrganizationSubscription(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/organizations/' + id + '/subscription', null, true, true);
            return new organizationSubscriptionResponse_OrganizationSubscriptionResponse(r);
        });
    }
    getOrganizationLicense(id, installationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send('GET', '/organizations/' + id + '/license?installationId=' + installationId, null, true, true);
        });
    }
    postOrganization(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations', request, true, true);
            return new organizationResponse_OrganizationResponse(r);
        });
    }
    putOrganization(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('PUT', '/organizations/' + id, request, true, true);
            return new organizationResponse_OrganizationResponse(r);
        });
    }
    postLeaveOrganization(id) {
        return this.send('POST', '/organizations/' + id + '/leave', null, true, false);
    }
    postOrganizationLicense(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/license', data, true, true);
            return new organizationResponse_OrganizationResponse(r);
        });
    }
    postOrganizationLicenseUpdate(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send('POST', '/organizations/' + id + '/license', data, true, false);
        });
    }
    postOrganizationApiKey(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + id + '/api-key', request, true, true);
            return new apiKeyResponse_ApiKeyResponse(r);
        });
    }
    postOrganizationRotateApiKey(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + id + '/rotate-api-key', request, true, true);
            return new apiKeyResponse_ApiKeyResponse(r);
        });
    }
    postOrganizationUpgrade(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + id + '/upgrade', request, true, true);
            return new paymentResponse_PaymentResponse(r);
        });
    }
    postOrganizationSeat(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + id + '/seat', request, true, true);
            return new paymentResponse_PaymentResponse(r);
        });
    }
    postOrganizationStorage(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/organizations/' + id + '/storage', request, true, true);
            return new paymentResponse_PaymentResponse(r);
        });
    }
    postOrganizationPayment(id, request) {
        return this.send('POST', '/organizations/' + id + '/payment', request, true, false);
    }
    postOrganizationVerifyBank(id, request) {
        return this.send('POST', '/organizations/' + id + '/verify-bank', request, true, false);
    }
    postOrganizationCancel(id) {
        return this.send('POST', '/organizations/' + id + '/cancel', null, true, false);
    }
    postOrganizationReinstate(id) {
        return this.send('POST', '/organizations/' + id + '/reinstate', null, true, false);
    }
    deleteOrganization(id, request) {
        return this.send('DELETE', '/organizations/' + id, request, true, false);
    }
    // Event APIs
    getEvents(start, end, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', this.addEventParameters('/events', start, end, token), null, true, true);
            return new listResponse_ListResponse(r, eventResponse_EventResponse);
        });
    }
    getEventsCipher(id, start, end, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', this.addEventParameters('/ciphers/' + id + '/events', start, end, token), null, true, true);
            return new listResponse_ListResponse(r, eventResponse_EventResponse);
        });
    }
    getEventsOrganization(id, start, end, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', this.addEventParameters('/organizations/' + id + '/events', start, end, token), null, true, true);
            return new listResponse_ListResponse(r, eventResponse_EventResponse);
        });
    }
    getEventsOrganizationUser(organizationId, id, start, end, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', this.addEventParameters('/organizations/' + organizationId + '/users/' + id + '/events', start, end, token), null, true, true);
            return new listResponse_ListResponse(r, eventResponse_EventResponse);
        });
    }
    postEventsCollect(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const authHeader = yield this.getActiveBearerToken();
            const headers = new Headers({
                'Device-Type': this.deviceType,
                'Authorization': 'Bearer ' + authHeader,
                'Content-Type': 'application/json; charset=utf-8',
            });
            if (this.customUserAgent != null) {
                headers.set('User-Agent', this.customUserAgent);
            }
            const response = yield this.fetch(new Request(this.eventsBaseUrl + '/collect', {
                cache: 'no-cache',
                credentials: this.getCredentials(),
                method: 'POST',
                body: JSON.stringify(request),
                headers: headers,
            }));
            if (response.status !== 200) {
                return Promise.reject('Event post failed.');
            }
        });
    }
    // User APIs
    getUserPublicKey(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/users/' + id + '/public-key', null, true, true);
            return new userKeyResponse_UserKeyResponse(r);
        });
    }
    // HIBP APIs
    getHibpBreach(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('GET', '/hibp/breach?username=' + username, null, true, true);
            return r.map((a) => new breachAccountResponse_BreachAccountResponse(a));
        });
    }
    // Misc
    postBitPayInvoice(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/bitpay-invoice', request, true, true);
            return r;
        });
    }
    postSetupPayment() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield this.send('POST', '/setup-payment', null, true, true);
            return r;
        });
    }
    // Helpers
    getActiveBearerToken() {
        return __awaiter(this, void 0, void 0, function* () {
            let accessToken = yield this.tokenService.getToken();
            if (this.tokenService.tokenNeedsRefresh()) {
                const tokenResponse = yield this.doRefreshToken();
                accessToken = tokenResponse.accessToken;
            }
            return accessToken;
        });
    }
    fetch(request) {
        if (request.method === 'GET') {
            request.headers.set('Cache-Control', 'no-cache');
            request.headers.set('Pragma', 'no-cache');
        }
        return this.nativeFetch(request);
    }
    nativeFetch(request) {
        return fetch(request);
    }
    send(method, path, body, authed, hasResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers({
                'Device-Type': this.deviceType,
            });
            if (this.customUserAgent != null) {
                headers.set('User-Agent', this.customUserAgent);
            }
            const requestInit = {
                cache: 'no-cache',
                credentials: this.getCredentials(),
                method: method,
            };
            if (authed) {
                const authHeader = yield this.getActiveBearerToken();
                headers.set('Authorization', 'Bearer ' + authHeader);
            }
            if (body != null) {
                if (typeof body === 'string') {
                    requestInit.body = body;
                    headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
                }
                else if (typeof body === 'object') {
                    if (body instanceof FormData) {
                        requestInit.body = body;
                    }
                    else {
                        headers.set('Content-Type', 'application/json; charset=utf-8');
                        requestInit.body = JSON.stringify(body);
                    }
                }
            }
            if (hasResponse) {
                headers.set('Accept', 'application/json');
            }
            requestInit.headers = headers;
            const response = yield this.fetch(new Request(this.apiBaseUrl + path, requestInit));
            if (hasResponse && response.status === 200) {
                const responseJson = yield response.json();
                return responseJson;
            }
            else if (response.status !== 200) {
                const error = yield this.handleError(response, false);
                return Promise.reject(error);
            }
        });
    }
    handleError(response, tokenError) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((tokenError && response.status === 400) || response.status === 401 || response.status === 403) {
                yield this.logoutCallback(true);
                return null;
            }
            let responseJson = null;
            if (this.isJsonResponse(response)) {
                responseJson = yield response.json();
            }
            return new errorResponse_ErrorResponse(responseJson, response.status, tokenError);
        });
    }
    doRefreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = yield this.tokenService.getRefreshToken();
            if (refreshToken == null || refreshToken === '') {
                throw new Error();
            }
            const headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                'Accept': 'application/json',
                'Device-Type': this.deviceType,
            });
            if (this.customUserAgent != null) {
                headers.set('User-Agent', this.customUserAgent);
            }
            const decodedToken = this.tokenService.decodeToken();
            const response = yield this.fetch(new Request(this.identityBaseUrl + '/connect/token', {
                body: this.qsStringify({
                    grant_type: 'refresh_token',
                    client_id: decodedToken.client_id,
                    refresh_token: refreshToken,
                }),
                cache: 'no-cache',
                credentials: this.getCredentials(),
                headers: headers,
                method: 'POST',
            }));
            if (response.status === 200) {
                const responseJson = yield response.json();
                const tokenResponse = new identityTokenResponse_IdentityTokenResponse(responseJson);
                yield this.tokenService.setTokens(tokenResponse.accessToken, tokenResponse.refreshToken);
                return tokenResponse;
            }
            else {
                const error = yield this.handleError(response, true);
                return Promise.reject(error);
            }
        });
    }
    qsStringify(params) {
        return Object.keys(params).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
    }
    getCredentials() {
        if (this.device !== deviceType["a" /* DeviceType */].SafariExtension && (!this.isWebClient || this.usingBaseUrl)) {
            return 'include';
        }
        return undefined;
    }
    addEventParameters(base, start, end, token) {
        if (start != null) {
            base += ('?start=' + start);
        }
        if (end != null) {
            base += (base.indexOf('?') > -1 ? '&' : '?');
            base += ('end=' + end);
        }
        if (token != null) {
            base += (base.indexOf('?') > -1 ? '&' : '?');
            base += ('continuationToken=' + token);
        }
        return base;
    }
    isJsonResponse(response) {
        const typeHeader = response.headers.get('content-type');
        return typeHeader != null && typeHeader.indexOf('application/json') > -1;
    }
}

// EXTERNAL MODULE: ./jslib/src/misc/utils.ts
var utils = __webpack_require__(8);

// CONCATENATED MODULE: ./jslib/src/services/appId.service.ts
var appId_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class appId_service_AppIdService {
    constructor(storageService) {
        this.storageService = storageService;
    }
    getAppId() {
        return this.makeAndGetAppId('appId');
    }
    getAnonymousAppId() {
        return this.makeAndGetAppId('anonymousAppId');
    }
    makeAndGetAppId(key) {
        return appId_service_awaiter(this, void 0, void 0, function* () {
            const existingId = yield this.storageService.get(key);
            if (existingId != null) {
                return existingId;
            }
            const guid = utils["a" /* Utils */].newGuid();
            yield this.storageService.save(key, guid);
            return guid;
        });
    }
}

// CONCATENATED MODULE: ./jslib/src/misc/throttle.ts
/**
 * Use as a Decorator on async functions, it will limit how many times the function can be
 * in-flight at a time.
 *
 * Calls beyond the limit will be queued, and run when one of the active calls finishes
 */
function throttle(limit, throttleKey) {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        const allThrottles = new Map();
        const getThrottles = (obj) => {
            let throttles = allThrottles.get(obj);
            if (throttles != null) {
                return throttles;
            }
            throttles = new Map();
            allThrottles.set(obj, throttles);
            return throttles;
        };
        return {
            value: function (...args) {
                const throttles = getThrottles(this);
                const argsThrottleKey = throttleKey(args);
                let queue = throttles.get(argsThrottleKey);
                if (queue == null) {
                    queue = [];
                    throttles.set(argsThrottleKey, queue);
                }
                return new Promise((resolve, reject) => {
                    const exec = () => {
                        const onFinally = () => {
                            queue.splice(queue.indexOf(exec), 1);
                            if (queue.length >= limit) {
                                queue[limit - 1]();
                            }
                            else if (queue.length === 0) {
                                throttles.delete(argsThrottleKey);
                                if (throttles.size === 0) {
                                    allThrottles.delete(this);
                                }
                            }
                        };
                        originalMethod.apply(this, args).then((val) => {
                            onFinally();
                            return val;
                        }).catch((err) => {
                            onFinally();
                            throw err;
                        }).then(resolve, reject);
                    };
                    queue.push(exec);
                    if (queue.length <= limit) {
                        exec();
                    }
                });
            },
        };
    };
}

// CONCATENATED MODULE: ./jslib/src/services/audit.service.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var audit_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const PwnedPasswordsApi = 'https://api.pwnedpasswords.com/range/';
const ɵ0 = () => 'passwordLeaked';
class audit_service_AuditService {
    constructor(cryptoFunctionService, apiService) {
        this.cryptoFunctionService = cryptoFunctionService;
        this.apiService = apiService;
    }
    passwordLeaked(password) {
        return audit_service_awaiter(this, void 0, void 0, function* () {
            const hashBytes = yield this.cryptoFunctionService.hash(password, 'sha1');
            const hash = utils["a" /* Utils */].fromBufferToHex(hashBytes).toUpperCase();
            const hashStart = hash.substr(0, 5);
            const hashEnding = hash.substr(5);
            const response = yield this.apiService.nativeFetch(new Request(PwnedPasswordsApi + hashStart));
            const leakedHashes = yield response.text();
            const match = leakedHashes.split(/\r?\n/).find((v) => {
                return v.split(':')[0] === hashEnding;
            });
            return match != null ? parseInt(match.split(':')[1], 10) : 0;
        });
    }
    breachedAccounts(username) {
        return audit_service_awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.apiService.getHibpBreach(username);
            }
            catch (e) {
                const error = e;
                if (error.statusCode === 404) {
                    return [];
                }
                throw new Error();
            }
        });
    }
}
__decorate([
    throttle(100, ɵ0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], audit_service_AuditService.prototype, "passwordLeaked", null);


// EXTERNAL MODULE: ./jslib/src/services/auth.service.ts + 4 modules
var auth_service = __webpack_require__(115);

// EXTERNAL MODULE: ./jslib/src/services/cipher.service.ts
var cipher_service = __webpack_require__(345);

// CONCATENATED MODULE: ./jslib/src/models/data/collectionData.ts
class CollectionData {
    constructor(response) {
        this.id = response.id;
        this.organizationId = response.organizationId;
        this.name = response.name;
        this.externalId = response.externalId;
        this.readOnly = response.readOnly;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/view/collectionView.ts

class collectionView_CollectionView {
    constructor(c) {
        this.id = null;
        this.organizationId = null;
        this.name = null;
        this.externalId = null;
        this.readOnly = null;
        if (!c) {
            return;
        }
        this.id = c.id;
        this.organizationId = c.organizationId;
        this.externalId = c.externalId;
        if (c instanceof collection_Collection) {
            this.readOnly = c.readOnly;
        }
    }
}

// EXTERNAL MODULE: ./jslib/src/models/domain/domainBase.ts
var domainBase = __webpack_require__(39);

// CONCATENATED MODULE: ./jslib/src/models/domain/collection.ts


class collection_Collection extends domainBase["a" /* default */] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            id: null,
            organizationId: null,
            name: null,
            externalId: null,
            readOnly: null,
        }, alreadyEncrypted, ['id', 'organizationId', 'externalId', 'readOnly']);
    }
    decrypt() {
        return this.decryptObj(new collectionView_CollectionView(this), {
            name: null,
        }, this.organizationId);
    }
}

// CONCATENATED MODULE: ./jslib/src/models/domain/treeNode.ts
class TreeNode {
    constructor(node, name, parent) {
        this.children = [];
        this.parent = parent;
        this.node = node;
        this.node.name = name;
    }
}

// CONCATENATED MODULE: ./jslib/src/misc/serviceUtils.ts

class serviceUtils_ServiceUtils {
    static nestedTraverse(nodeTree, partIndex, parts, obj, parent, delimiter) {
        if (parts.length <= partIndex) {
            return;
        }
        const end = partIndex === parts.length - 1;
        const partName = parts[partIndex];
        for (let i = 0; i < nodeTree.length; i++) {
            if (nodeTree[i].node.name !== parts[partIndex]) {
                continue;
            }
            if (end && nodeTree[i].node.id !== obj.id) {
                // Another node with the same name.
                nodeTree.push(new TreeNode(obj, partName, parent));
                return;
            }
            serviceUtils_ServiceUtils.nestedTraverse(nodeTree[i].children, partIndex + 1, parts, obj, nodeTree[i].node, delimiter);
            return;
        }
        if (nodeTree.filter((n) => n.node.name === partName).length === 0) {
            if (end) {
                nodeTree.push(new TreeNode(obj, partName, parent));
                return;
            }
            const newPartName = parts[partIndex] + delimiter + parts[partIndex + 1];
            serviceUtils_ServiceUtils.nestedTraverse(nodeTree, 0, [newPartName, ...parts.slice(partIndex + 2)], obj, parent, delimiter);
        }
    }
    static getTreeNodeObject(nodeTree, id) {
        for (let i = 0; i < nodeTree.length; i++) {
            if (nodeTree[i].node.id === id) {
                return nodeTree[i];
            }
            else if (nodeTree[i].children != null) {
                const node = serviceUtils_ServiceUtils.getTreeNodeObject(nodeTree[i].children, id);
                if (node !== null) {
                    return node;
                }
            }
        }
        return null;
    }
}

// CONCATENATED MODULE: ./jslib/src/services/collection.service.ts
var collection_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const Keys = {
    collectionsPrefix: 'collections_',
};
const NestingDelimiter = '/';
class collection_service_CollectionService {
    constructor(cryptoService, userService, storageService, i18nService) {
        this.cryptoService = cryptoService;
        this.userService = userService;
        this.storageService = storageService;
        this.i18nService = i18nService;
    }
    clearCache() {
        this.decryptedCollectionCache = null;
    }
    encrypt(model) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            if (model.organizationId == null) {
                throw new Error('Collection has no organization id.');
            }
            const key = yield this.cryptoService.getOrgKey(model.organizationId);
            if (key == null) {
                throw new Error('No key for this collection\'s organization.');
            }
            const collection = new collection_Collection();
            collection.id = model.id;
            collection.organizationId = model.organizationId;
            collection.readOnly = model.readOnly;
            collection.name = yield this.cryptoService.encrypt(model.name, key);
            return collection;
        });
    }
    decryptMany(collections) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            if (collections == null) {
                return [];
            }
            const decCollections = [];
            const promises = [];
            collections.forEach((collection) => {
                promises.push(collection.decrypt().then((c) => decCollections.push(c)));
            });
            yield Promise.all(promises);
            return decCollections.sort(utils["a" /* Utils */].getSortFunction(this.i18nService, 'name'));
        });
    }
    get(id) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const collections = yield this.storageService.get(Keys.collectionsPrefix + userId);
            if (collections == null || !collections.hasOwnProperty(id)) {
                return null;
            }
            return new collection_Collection(collections[id]);
        });
    }
    getAll() {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const collections = yield this.storageService.get(Keys.collectionsPrefix + userId);
            const response = [];
            for (const id in collections) {
                if (collections.hasOwnProperty(id)) {
                    response.push(new collection_Collection(collections[id]));
                }
            }
            return response;
        });
    }
    getAllDecrypted() {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            if (this.decryptedCollectionCache != null) {
                return this.decryptedCollectionCache;
            }
            const hasKey = yield this.cryptoService.hasKey();
            if (!hasKey) {
                throw new Error('No key.');
            }
            const collections = yield this.getAll();
            this.decryptedCollectionCache = yield this.decryptMany(collections);
            return this.decryptedCollectionCache;
        });
    }
    getAllNested(collections = null) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            if (collections == null) {
                collections = yield this.getAllDecrypted();
            }
            const nodes = [];
            collections.forEach((c) => {
                const collectionCopy = new collectionView_CollectionView();
                collectionCopy.id = c.id;
                collectionCopy.organizationId = c.organizationId;
                const parts = c.name != null ? c.name.replace(/^\/+|\/+$/g, '').split(NestingDelimiter) : [];
                serviceUtils_ServiceUtils.nestedTraverse(nodes, 0, parts, collectionCopy, null, NestingDelimiter);
            });
            return nodes;
        });
    }
    getNested(id) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            const collections = yield this.getAllNested();
            return serviceUtils_ServiceUtils.getTreeNodeObject(collections, id);
        });
    }
    upsert(collection) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            let collections = yield this.storageService.get(Keys.collectionsPrefix + userId);
            if (collections == null) {
                collections = {};
            }
            if (collection instanceof CollectionData) {
                const c = collection;
                collections[c.id] = c;
            }
            else {
                collection.forEach((c) => {
                    collections[c.id] = c;
                });
            }
            yield this.storageService.save(Keys.collectionsPrefix + userId, collections);
            this.decryptedCollectionCache = null;
        });
    }
    replace(collections) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            yield this.storageService.save(Keys.collectionsPrefix + userId, collections);
            this.decryptedCollectionCache = null;
        });
    }
    clear(userId) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            yield this.storageService.remove(Keys.collectionsPrefix + userId);
            this.decryptedCollectionCache = null;
        });
    }
    delete(id) {
        return collection_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const collections = yield this.storageService.get(Keys.collectionsPrefix + userId);
            if (collections == null) {
                return;
            }
            if (typeof id === 'string') {
                const i = id;
                delete collections[id];
            }
            else {
                id.forEach((i) => {
                    delete collections[i];
                });
            }
            yield this.storageService.save(Keys.collectionsPrefix + userId, collections);
            this.decryptedCollectionCache = null;
        });
    }
}

// EXTERNAL MODULE: ./jslib/src/services/constants.service.ts
var constants_service = __webpack_require__(9);

// CONCATENATED MODULE: ./jslib/src/services/container.service.ts
class ContainerService {
    constructor(cryptoService) {
        this.cryptoService = cryptoService;
    }
    // deprecated, use attachToGlobal instead
    attachToWindow(win) {
        this.attachToGlobal(win);
    }
    attachToGlobal(global) {
        if (!global.bitwardenContainerService) {
            global.bitwardenContainerService = this;
        }
    }
    getCryptoService() {
        return this.cryptoService;
    }
}

// EXTERNAL MODULE: ./node_modules/big-integer/BigInteger.js
var BigInteger = __webpack_require__(410);

// EXTERNAL MODULE: ./jslib/src/enums/kdfType.ts
var kdfType = __webpack_require__(169);

// EXTERNAL MODULE: ./jslib/src/models/domain/cipherString.ts
var domain_cipherString = __webpack_require__(57);

// CONCATENATED MODULE: ./jslib/src/models/domain/encryptedObject.ts
class EncryptedObject {
}

// EXTERNAL MODULE: ./jslib/src/models/domain/symmetricCryptoKey.ts
var symmetricCryptoKey = __webpack_require__(68);

// EXTERNAL MODULE: ./jslib/src/misc/sequentialize.ts
var sequentialize = __webpack_require__(174);

// CONCATENATED MODULE: ./jslib/src/misc/wordlist.ts
// EFF's Long Wordlist from https://www.eff.org/dice
const EEFLongWordList = [
    'abacus',
    'abdomen',
    'abdominal',
    'abide',
    'abiding',
    'ability',
    'ablaze',
    'able',
    'abnormal',
    'abrasion',
    'abrasive',
    'abreast',
    'abridge',
    'abroad',
    'abruptly',
    'absence',
    'absentee',
    'absently',
    'absinthe',
    'absolute',
    'absolve',
    'abstain',
    'abstract',
    'absurd',
    'accent',
    'acclaim',
    'acclimate',
    'accompany',
    'account',
    'accuracy',
    'accurate',
    'accustom',
    'acetone',
    'achiness',
    'aching',
    'acid',
    'acorn',
    'acquaint',
    'acquire',
    'acre',
    'acrobat',
    'acronym',
    'acting',
    'action',
    'activate',
    'activator',
    'active',
    'activism',
    'activist',
    'activity',
    'actress',
    'acts',
    'acutely',
    'acuteness',
    'aeration',
    'aerobics',
    'aerosol',
    'aerospace',
    'afar',
    'affair',
    'affected',
    'affecting',
    'affection',
    'affidavit',
    'affiliate',
    'affirm',
    'affix',
    'afflicted',
    'affluent',
    'afford',
    'affront',
    'aflame',
    'afloat',
    'aflutter',
    'afoot',
    'afraid',
    'afterglow',
    'afterlife',
    'aftermath',
    'aftermost',
    'afternoon',
    'aged',
    'ageless',
    'agency',
    'agenda',
    'agent',
    'aggregate',
    'aghast',
    'agile',
    'agility',
    'aging',
    'agnostic',
    'agonize',
    'agonizing',
    'agony',
    'agreeable',
    'agreeably',
    'agreed',
    'agreeing',
    'agreement',
    'aground',
    'ahead',
    'ahoy',
    'aide',
    'aids',
    'aim',
    'ajar',
    'alabaster',
    'alarm',
    'albatross',
    'album',
    'alfalfa',
    'algebra',
    'algorithm',
    'alias',
    'alibi',
    'alienable',
    'alienate',
    'aliens',
    'alike',
    'alive',
    'alkaline',
    'alkalize',
    'almanac',
    'almighty',
    'almost',
    'aloe',
    'aloft',
    'aloha',
    'alone',
    'alongside',
    'aloof',
    'alphabet',
    'alright',
    'although',
    'altitude',
    'alto',
    'aluminum',
    'alumni',
    'always',
    'amaretto',
    'amaze',
    'amazingly',
    'amber',
    'ambiance',
    'ambiguity',
    'ambiguous',
    'ambition',
    'ambitious',
    'ambulance',
    'ambush',
    'amendable',
    'amendment',
    'amends',
    'amenity',
    'amiable',
    'amicably',
    'amid',
    'amigo',
    'amino',
    'amiss',
    'ammonia',
    'ammonium',
    'amnesty',
    'amniotic',
    'among',
    'amount',
    'amperage',
    'ample',
    'amplifier',
    'amplify',
    'amply',
    'amuck',
    'amulet',
    'amusable',
    'amused',
    'amusement',
    'amuser',
    'amusing',
    'anaconda',
    'anaerobic',
    'anagram',
    'anatomist',
    'anatomy',
    'anchor',
    'anchovy',
    'ancient',
    'android',
    'anemia',
    'anemic',
    'aneurism',
    'anew',
    'angelfish',
    'angelic',
    'anger',
    'angled',
    'angler',
    'angles',
    'angling',
    'angrily',
    'angriness',
    'anguished',
    'angular',
    'animal',
    'animate',
    'animating',
    'animation',
    'animator',
    'anime',
    'animosity',
    'ankle',
    'annex',
    'annotate',
    'announcer',
    'annoying',
    'annually',
    'annuity',
    'anointer',
    'another',
    'answering',
    'antacid',
    'antarctic',
    'anteater',
    'antelope',
    'antennae',
    'anthem',
    'anthill',
    'anthology',
    'antibody',
    'antics',
    'antidote',
    'antihero',
    'antiquely',
    'antiques',
    'antiquity',
    'antirust',
    'antitoxic',
    'antitrust',
    'antiviral',
    'antivirus',
    'antler',
    'antonym',
    'antsy',
    'anvil',
    'anybody',
    'anyhow',
    'anymore',
    'anyone',
    'anyplace',
    'anything',
    'anytime',
    'anyway',
    'anywhere',
    'aorta',
    'apache',
    'apostle',
    'appealing',
    'appear',
    'appease',
    'appeasing',
    'appendage',
    'appendix',
    'appetite',
    'appetizer',
    'applaud',
    'applause',
    'apple',
    'appliance',
    'applicant',
    'applied',
    'apply',
    'appointee',
    'appraisal',
    'appraiser',
    'apprehend',
    'approach',
    'approval',
    'approve',
    'apricot',
    'april',
    'apron',
    'aptitude',
    'aptly',
    'aqua',
    'aqueduct',
    'arbitrary',
    'arbitrate',
    'ardently',
    'area',
    'arena',
    'arguable',
    'arguably',
    'argue',
    'arise',
    'armadillo',
    'armband',
    'armchair',
    'armed',
    'armful',
    'armhole',
    'arming',
    'armless',
    'armoire',
    'armored',
    'armory',
    'armrest',
    'army',
    'aroma',
    'arose',
    'around',
    'arousal',
    'arrange',
    'array',
    'arrest',
    'arrival',
    'arrive',
    'arrogance',
    'arrogant',
    'arson',
    'art',
    'ascend',
    'ascension',
    'ascent',
    'ascertain',
    'ashamed',
    'ashen',
    'ashes',
    'ashy',
    'aside',
    'askew',
    'asleep',
    'asparagus',
    'aspect',
    'aspirate',
    'aspire',
    'aspirin',
    'astonish',
    'astound',
    'astride',
    'astrology',
    'astronaut',
    'astronomy',
    'astute',
    'atlantic',
    'atlas',
    'atom',
    'atonable',
    'atop',
    'atrium',
    'atrocious',
    'atrophy',
    'attach',
    'attain',
    'attempt',
    'attendant',
    'attendee',
    'attention',
    'attentive',
    'attest',
    'attic',
    'attire',
    'attitude',
    'attractor',
    'attribute',
    'atypical',
    'auction',
    'audacious',
    'audacity',
    'audible',
    'audibly',
    'audience',
    'audio',
    'audition',
    'augmented',
    'august',
    'authentic',
    'author',
    'autism',
    'autistic',
    'autograph',
    'automaker',
    'automated',
    'automatic',
    'autopilot',
    'available',
    'avalanche',
    'avatar',
    'avenge',
    'avenging',
    'avenue',
    'average',
    'aversion',
    'avert',
    'aviation',
    'aviator',
    'avid',
    'avoid',
    'await',
    'awaken',
    'award',
    'aware',
    'awhile',
    'awkward',
    'awning',
    'awoke',
    'awry',
    'axis',
    'babble',
    'babbling',
    'babied',
    'baboon',
    'backache',
    'backboard',
    'backboned',
    'backdrop',
    'backed',
    'backer',
    'backfield',
    'backfire',
    'backhand',
    'backing',
    'backlands',
    'backlash',
    'backless',
    'backlight',
    'backlit',
    'backlog',
    'backpack',
    'backpedal',
    'backrest',
    'backroom',
    'backshift',
    'backside',
    'backslid',
    'backspace',
    'backspin',
    'backstab',
    'backstage',
    'backtalk',
    'backtrack',
    'backup',
    'backward',
    'backwash',
    'backwater',
    'backyard',
    'bacon',
    'bacteria',
    'bacterium',
    'badass',
    'badge',
    'badland',
    'badly',
    'badness',
    'baffle',
    'baffling',
    'bagel',
    'bagful',
    'baggage',
    'bagged',
    'baggie',
    'bagginess',
    'bagging',
    'baggy',
    'bagpipe',
    'baguette',
    'baked',
    'bakery',
    'bakeshop',
    'baking',
    'balance',
    'balancing',
    'balcony',
    'balmy',
    'balsamic',
    'bamboo',
    'banana',
    'banish',
    'banister',
    'banjo',
    'bankable',
    'bankbook',
    'banked',
    'banker',
    'banking',
    'banknote',
    'bankroll',
    'banner',
    'bannister',
    'banshee',
    'banter',
    'barbecue',
    'barbed',
    'barbell',
    'barber',
    'barcode',
    'barge',
    'bargraph',
    'barista',
    'baritone',
    'barley',
    'barmaid',
    'barman',
    'barn',
    'barometer',
    'barrack',
    'barracuda',
    'barrel',
    'barrette',
    'barricade',
    'barrier',
    'barstool',
    'bartender',
    'barterer',
    'bash',
    'basically',
    'basics',
    'basil',
    'basin',
    'basis',
    'basket',
    'batboy',
    'batch',
    'bath',
    'baton',
    'bats',
    'battalion',
    'battered',
    'battering',
    'battery',
    'batting',
    'battle',
    'bauble',
    'bazooka',
    'blabber',
    'bladder',
    'blade',
    'blah',
    'blame',
    'blaming',
    'blanching',
    'blandness',
    'blank',
    'blaspheme',
    'blasphemy',
    'blast',
    'blatancy',
    'blatantly',
    'blazer',
    'blazing',
    'bleach',
    'bleak',
    'bleep',
    'blemish',
    'blend',
    'bless',
    'blighted',
    'blimp',
    'bling',
    'blinked',
    'blinker',
    'blinking',
    'blinks',
    'blip',
    'blissful',
    'blitz',
    'blizzard',
    'bloated',
    'bloating',
    'blob',
    'blog',
    'bloomers',
    'blooming',
    'blooper',
    'blot',
    'blouse',
    'blubber',
    'bluff',
    'bluish',
    'blunderer',
    'blunt',
    'blurb',
    'blurred',
    'blurry',
    'blurt',
    'blush',
    'blustery',
    'boaster',
    'boastful',
    'boasting',
    'boat',
    'bobbed',
    'bobbing',
    'bobble',
    'bobcat',
    'bobsled',
    'bobtail',
    'bodacious',
    'body',
    'bogged',
    'boggle',
    'bogus',
    'boil',
    'bok',
    'bolster',
    'bolt',
    'bonanza',
    'bonded',
    'bonding',
    'bondless',
    'boned',
    'bonehead',
    'boneless',
    'bonelike',
    'boney',
    'bonfire',
    'bonnet',
    'bonsai',
    'bonus',
    'bony',
    'boogeyman',
    'boogieman',
    'book',
    'boondocks',
    'booted',
    'booth',
    'bootie',
    'booting',
    'bootlace',
    'bootleg',
    'boots',
    'boozy',
    'borax',
    'boring',
    'borough',
    'borrower',
    'borrowing',
    'boss',
    'botanical',
    'botanist',
    'botany',
    'botch',
    'both',
    'bottle',
    'bottling',
    'bottom',
    'bounce',
    'bouncing',
    'bouncy',
    'bounding',
    'boundless',
    'bountiful',
    'bovine',
    'boxcar',
    'boxer',
    'boxing',
    'boxlike',
    'boxy',
    'breach',
    'breath',
    'breeches',
    'breeching',
    'breeder',
    'breeding',
    'breeze',
    'breezy',
    'brethren',
    'brewery',
    'brewing',
    'briar',
    'bribe',
    'brick',
    'bride',
    'bridged',
    'brigade',
    'bright',
    'brilliant',
    'brim',
    'bring',
    'brink',
    'brisket',
    'briskly',
    'briskness',
    'bristle',
    'brittle',
    'broadband',
    'broadcast',
    'broaden',
    'broadly',
    'broadness',
    'broadside',
    'broadways',
    'broiler',
    'broiling',
    'broken',
    'broker',
    'bronchial',
    'bronco',
    'bronze',
    'bronzing',
    'brook',
    'broom',
    'brought',
    'browbeat',
    'brownnose',
    'browse',
    'browsing',
    'bruising',
    'brunch',
    'brunette',
    'brunt',
    'brush',
    'brussels',
    'brute',
    'brutishly',
    'bubble',
    'bubbling',
    'bubbly',
    'buccaneer',
    'bucked',
    'bucket',
    'buckle',
    'buckshot',
    'buckskin',
    'bucktooth',
    'buckwheat',
    'buddhism',
    'buddhist',
    'budding',
    'buddy',
    'budget',
    'buffalo',
    'buffed',
    'buffer',
    'buffing',
    'buffoon',
    'buggy',
    'bulb',
    'bulge',
    'bulginess',
    'bulgur',
    'bulk',
    'bulldog',
    'bulldozer',
    'bullfight',
    'bullfrog',
    'bullhorn',
    'bullion',
    'bullish',
    'bullpen',
    'bullring',
    'bullseye',
    'bullwhip',
    'bully',
    'bunch',
    'bundle',
    'bungee',
    'bunion',
    'bunkbed',
    'bunkhouse',
    'bunkmate',
    'bunny',
    'bunt',
    'busboy',
    'bush',
    'busily',
    'busload',
    'bust',
    'busybody',
    'buzz',
    'cabana',
    'cabbage',
    'cabbie',
    'cabdriver',
    'cable',
    'caboose',
    'cache',
    'cackle',
    'cacti',
    'cactus',
    'caddie',
    'caddy',
    'cadet',
    'cadillac',
    'cadmium',
    'cage',
    'cahoots',
    'cake',
    'calamari',
    'calamity',
    'calcium',
    'calculate',
    'calculus',
    'caliber',
    'calibrate',
    'calm',
    'caloric',
    'calorie',
    'calzone',
    'camcorder',
    'cameo',
    'camera',
    'camisole',
    'camper',
    'campfire',
    'camping',
    'campsite',
    'campus',
    'canal',
    'canary',
    'cancel',
    'candied',
    'candle',
    'candy',
    'cane',
    'canine',
    'canister',
    'cannabis',
    'canned',
    'canning',
    'cannon',
    'cannot',
    'canola',
    'canon',
    'canopener',
    'canopy',
    'canteen',
    'canyon',
    'capable',
    'capably',
    'capacity',
    'cape',
    'capillary',
    'capital',
    'capitol',
    'capped',
    'capricorn',
    'capsize',
    'capsule',
    'caption',
    'captivate',
    'captive',
    'captivity',
    'capture',
    'caramel',
    'carat',
    'caravan',
    'carbon',
    'cardboard',
    'carded',
    'cardiac',
    'cardigan',
    'cardinal',
    'cardstock',
    'carefully',
    'caregiver',
    'careless',
    'caress',
    'caretaker',
    'cargo',
    'caring',
    'carless',
    'carload',
    'carmaker',
    'carnage',
    'carnation',
    'carnival',
    'carnivore',
    'carol',
    'carpenter',
    'carpentry',
    'carpool',
    'carport',
    'carried',
    'carrot',
    'carrousel',
    'carry',
    'cartel',
    'cartload',
    'carton',
    'cartoon',
    'cartridge',
    'cartwheel',
    'carve',
    'carving',
    'carwash',
    'cascade',
    'case',
    'cash',
    'casing',
    'casino',
    'casket',
    'cassette',
    'casually',
    'casualty',
    'catacomb',
    'catalog',
    'catalyst',
    'catalyze',
    'catapult',
    'cataract',
    'catatonic',
    'catcall',
    'catchable',
    'catcher',
    'catching',
    'catchy',
    'caterer',
    'catering',
    'catfight',
    'catfish',
    'cathedral',
    'cathouse',
    'catlike',
    'catnap',
    'catnip',
    'catsup',
    'cattail',
    'cattishly',
    'cattle',
    'catty',
    'catwalk',
    'caucasian',
    'caucus',
    'causal',
    'causation',
    'cause',
    'causing',
    'cauterize',
    'caution',
    'cautious',
    'cavalier',
    'cavalry',
    'caviar',
    'cavity',
    'cedar',
    'celery',
    'celestial',
    'celibacy',
    'celibate',
    'celtic',
    'cement',
    'census',
    'ceramics',
    'ceremony',
    'certainly',
    'certainty',
    'certified',
    'certify',
    'cesarean',
    'cesspool',
    'chafe',
    'chaffing',
    'chain',
    'chair',
    'chalice',
    'challenge',
    'chamber',
    'chamomile',
    'champion',
    'chance',
    'change',
    'channel',
    'chant',
    'chaos',
    'chaperone',
    'chaplain',
    'chapped',
    'chaps',
    'chapter',
    'character',
    'charbroil',
    'charcoal',
    'charger',
    'charging',
    'chariot',
    'charity',
    'charm',
    'charred',
    'charter',
    'charting',
    'chase',
    'chasing',
    'chaste',
    'chastise',
    'chastity',
    'chatroom',
    'chatter',
    'chatting',
    'chatty',
    'cheating',
    'cheddar',
    'cheek',
    'cheer',
    'cheese',
    'cheesy',
    'chef',
    'chemicals',
    'chemist',
    'chemo',
    'cherisher',
    'cherub',
    'chess',
    'chest',
    'chevron',
    'chevy',
    'chewable',
    'chewer',
    'chewing',
    'chewy',
    'chief',
    'chihuahua',
    'childcare',
    'childhood',
    'childish',
    'childless',
    'childlike',
    'chili',
    'chill',
    'chimp',
    'chip',
    'chirping',
    'chirpy',
    'chitchat',
    'chivalry',
    'chive',
    'chloride',
    'chlorine',
    'choice',
    'chokehold',
    'choking',
    'chomp',
    'chooser',
    'choosing',
    'choosy',
    'chop',
    'chosen',
    'chowder',
    'chowtime',
    'chrome',
    'chubby',
    'chuck',
    'chug',
    'chummy',
    'chump',
    'chunk',
    'churn',
    'chute',
    'cider',
    'cilantro',
    'cinch',
    'cinema',
    'cinnamon',
    'circle',
    'circling',
    'circular',
    'circulate',
    'circus',
    'citable',
    'citadel',
    'citation',
    'citizen',
    'citric',
    'citrus',
    'city',
    'civic',
    'civil',
    'clad',
    'claim',
    'clambake',
    'clammy',
    'clamor',
    'clamp',
    'clamshell',
    'clang',
    'clanking',
    'clapped',
    'clapper',
    'clapping',
    'clarify',
    'clarinet',
    'clarity',
    'clash',
    'clasp',
    'class',
    'clatter',
    'clause',
    'clavicle',
    'claw',
    'clay',
    'clean',
    'clear',
    'cleat',
    'cleaver',
    'cleft',
    'clench',
    'clergyman',
    'clerical',
    'clerk',
    'clever',
    'clicker',
    'client',
    'climate',
    'climatic',
    'cling',
    'clinic',
    'clinking',
    'clip',
    'clique',
    'cloak',
    'clobber',
    'clock',
    'clone',
    'cloning',
    'closable',
    'closure',
    'clothes',
    'clothing',
    'cloud',
    'clover',
    'clubbed',
    'clubbing',
    'clubhouse',
    'clump',
    'clumsily',
    'clumsy',
    'clunky',
    'clustered',
    'clutch',
    'clutter',
    'coach',
    'coagulant',
    'coastal',
    'coaster',
    'coasting',
    'coastland',
    'coastline',
    'coat',
    'coauthor',
    'cobalt',
    'cobbler',
    'cobweb',
    'cocoa',
    'coconut',
    'cod',
    'coeditor',
    'coerce',
    'coexist',
    'coffee',
    'cofounder',
    'cognition',
    'cognitive',
    'cogwheel',
    'coherence',
    'coherent',
    'cohesive',
    'coil',
    'coke',
    'cola',
    'cold',
    'coleslaw',
    'coliseum',
    'collage',
    'collapse',
    'collar',
    'collected',
    'collector',
    'collide',
    'collie',
    'collision',
    'colonial',
    'colonist',
    'colonize',
    'colony',
    'colossal',
    'colt',
    'coma',
    'come',
    'comfort',
    'comfy',
    'comic',
    'coming',
    'comma',
    'commence',
    'commend',
    'comment',
    'commerce',
    'commode',
    'commodity',
    'commodore',
    'common',
    'commotion',
    'commute',
    'commuting',
    'compacted',
    'compacter',
    'compactly',
    'compactor',
    'companion',
    'company',
    'compare',
    'compel',
    'compile',
    'comply',
    'component',
    'composed',
    'composer',
    'composite',
    'compost',
    'composure',
    'compound',
    'compress',
    'comprised',
    'computer',
    'computing',
    'comrade',
    'concave',
    'conceal',
    'conceded',
    'concept',
    'concerned',
    'concert',
    'conch',
    'concierge',
    'concise',
    'conclude',
    'concrete',
    'concur',
    'condense',
    'condiment',
    'condition',
    'condone',
    'conducive',
    'conductor',
    'conduit',
    'cone',
    'confess',
    'confetti',
    'confidant',
    'confident',
    'confider',
    'confiding',
    'configure',
    'confined',
    'confining',
    'confirm',
    'conflict',
    'conform',
    'confound',
    'confront',
    'confused',
    'confusing',
    'confusion',
    'congenial',
    'congested',
    'congrats',
    'congress',
    'conical',
    'conjoined',
    'conjure',
    'conjuror',
    'connected',
    'connector',
    'consensus',
    'consent',
    'console',
    'consoling',
    'consonant',
    'constable',
    'constant',
    'constrain',
    'constrict',
    'construct',
    'consult',
    'consumer',
    'consuming',
    'contact',
    'container',
    'contempt',
    'contend',
    'contented',
    'contently',
    'contents',
    'contest',
    'context',
    'contort',
    'contour',
    'contrite',
    'control',
    'contusion',
    'convene',
    'convent',
    'copartner',
    'cope',
    'copied',
    'copier',
    'copilot',
    'coping',
    'copious',
    'copper',
    'copy',
    'coral',
    'cork',
    'cornball',
    'cornbread',
    'corncob',
    'cornea',
    'corned',
    'corner',
    'cornfield',
    'cornflake',
    'cornhusk',
    'cornmeal',
    'cornstalk',
    'corny',
    'coronary',
    'coroner',
    'corporal',
    'corporate',
    'corral',
    'correct',
    'corridor',
    'corrode',
    'corroding',
    'corrosive',
    'corsage',
    'corset',
    'cortex',
    'cosigner',
    'cosmetics',
    'cosmic',
    'cosmos',
    'cosponsor',
    'cost',
    'cottage',
    'cotton',
    'couch',
    'cough',
    'could',
    'countable',
    'countdown',
    'counting',
    'countless',
    'country',
    'county',
    'courier',
    'covenant',
    'cover',
    'coveted',
    'coveting',
    'coyness',
    'cozily',
    'coziness',
    'cozy',
    'crabbing',
    'crabgrass',
    'crablike',
    'crabmeat',
    'cradle',
    'cradling',
    'crafter',
    'craftily',
    'craftsman',
    'craftwork',
    'crafty',
    'cramp',
    'cranberry',
    'crane',
    'cranial',
    'cranium',
    'crank',
    'crate',
    'crave',
    'craving',
    'crawfish',
    'crawlers',
    'crawling',
    'crayfish',
    'crayon',
    'crazed',
    'crazily',
    'craziness',
    'crazy',
    'creamed',
    'creamer',
    'creamlike',
    'crease',
    'creasing',
    'creatable',
    'create',
    'creation',
    'creative',
    'creature',
    'credible',
    'credibly',
    'credit',
    'creed',
    'creme',
    'creole',
    'crepe',
    'crept',
    'crescent',
    'crested',
    'cresting',
    'crestless',
    'crevice',
    'crewless',
    'crewman',
    'crewmate',
    'crib',
    'cricket',
    'cried',
    'crier',
    'crimp',
    'crimson',
    'cringe',
    'cringing',
    'crinkle',
    'crinkly',
    'crisped',
    'crisping',
    'crisply',
    'crispness',
    'crispy',
    'criteria',
    'critter',
    'croak',
    'crock',
    'crook',
    'croon',
    'crop',
    'cross',
    'crouch',
    'crouton',
    'crowbar',
    'crowd',
    'crown',
    'crucial',
    'crudely',
    'crudeness',
    'cruelly',
    'cruelness',
    'cruelty',
    'crumb',
    'crummiest',
    'crummy',
    'crumpet',
    'crumpled',
    'cruncher',
    'crunching',
    'crunchy',
    'crusader',
    'crushable',
    'crushed',
    'crusher',
    'crushing',
    'crust',
    'crux',
    'crying',
    'cryptic',
    'crystal',
    'cubbyhole',
    'cube',
    'cubical',
    'cubicle',
    'cucumber',
    'cuddle',
    'cuddly',
    'cufflink',
    'culinary',
    'culminate',
    'culpable',
    'culprit',
    'cultivate',
    'cultural',
    'culture',
    'cupbearer',
    'cupcake',
    'cupid',
    'cupped',
    'cupping',
    'curable',
    'curator',
    'curdle',
    'cure',
    'curfew',
    'curing',
    'curled',
    'curler',
    'curliness',
    'curling',
    'curly',
    'curry',
    'curse',
    'cursive',
    'cursor',
    'curtain',
    'curtly',
    'curtsy',
    'curvature',
    'curve',
    'curvy',
    'cushy',
    'cusp',
    'cussed',
    'custard',
    'custodian',
    'custody',
    'customary',
    'customer',
    'customize',
    'customs',
    'cut',
    'cycle',
    'cyclic',
    'cycling',
    'cyclist',
    'cylinder',
    'cymbal',
    'cytoplasm',
    'cytoplast',
    'dab',
    'dad',
    'daffodil',
    'dagger',
    'daily',
    'daintily',
    'dainty',
    'dairy',
    'daisy',
    'dallying',
    'dance',
    'dancing',
    'dandelion',
    'dander',
    'dandruff',
    'dandy',
    'danger',
    'dangle',
    'dangling',
    'daredevil',
    'dares',
    'daringly',
    'darkened',
    'darkening',
    'darkish',
    'darkness',
    'darkroom',
    'darling',
    'darn',
    'dart',
    'darwinism',
    'dash',
    'dastardly',
    'data',
    'datebook',
    'dating',
    'daughter',
    'daunting',
    'dawdler',
    'dawn',
    'daybed',
    'daybreak',
    'daycare',
    'daydream',
    'daylight',
    'daylong',
    'dayroom',
    'daytime',
    'dazzler',
    'dazzling',
    'deacon',
    'deafening',
    'deafness',
    'dealer',
    'dealing',
    'dealmaker',
    'dealt',
    'dean',
    'debatable',
    'debate',
    'debating',
    'debit',
    'debrief',
    'debtless',
    'debtor',
    'debug',
    'debunk',
    'decade',
    'decaf',
    'decal',
    'decathlon',
    'decay',
    'deceased',
    'deceit',
    'deceiver',
    'deceiving',
    'december',
    'decency',
    'decent',
    'deception',
    'deceptive',
    'decibel',
    'decidable',
    'decimal',
    'decimeter',
    'decipher',
    'deck',
    'declared',
    'decline',
    'decode',
    'decompose',
    'decorated',
    'decorator',
    'decoy',
    'decrease',
    'decree',
    'dedicate',
    'dedicator',
    'deduce',
    'deduct',
    'deed',
    'deem',
    'deepen',
    'deeply',
    'deepness',
    'deface',
    'defacing',
    'defame',
    'default',
    'defeat',
    'defection',
    'defective',
    'defendant',
    'defender',
    'defense',
    'defensive',
    'deferral',
    'deferred',
    'defiance',
    'defiant',
    'defile',
    'defiling',
    'define',
    'definite',
    'deflate',
    'deflation',
    'deflator',
    'deflected',
    'deflector',
    'defog',
    'deforest',
    'defraud',
    'defrost',
    'deftly',
    'defuse',
    'defy',
    'degraded',
    'degrading',
    'degrease',
    'degree',
    'dehydrate',
    'deity',
    'dejected',
    'delay',
    'delegate',
    'delegator',
    'delete',
    'deletion',
    'delicacy',
    'delicate',
    'delicious',
    'delighted',
    'delirious',
    'delirium',
    'deliverer',
    'delivery',
    'delouse',
    'delta',
    'deluge',
    'delusion',
    'deluxe',
    'demanding',
    'demeaning',
    'demeanor',
    'demise',
    'democracy',
    'democrat',
    'demote',
    'demotion',
    'demystify',
    'denatured',
    'deniable',
    'denial',
    'denim',
    'denote',
    'dense',
    'density',
    'dental',
    'dentist',
    'denture',
    'deny',
    'deodorant',
    'deodorize',
    'departed',
    'departure',
    'depict',
    'deplete',
    'depletion',
    'deplored',
    'deploy',
    'deport',
    'depose',
    'depraved',
    'depravity',
    'deprecate',
    'depress',
    'deprive',
    'depth',
    'deputize',
    'deputy',
    'derail',
    'deranged',
    'derby',
    'derived',
    'desecrate',
    'deserve',
    'deserving',
    'designate',
    'designed',
    'designer',
    'designing',
    'deskbound',
    'desktop',
    'deskwork',
    'desolate',
    'despair',
    'despise',
    'despite',
    'destiny',
    'destitute',
    'destruct',
    'detached',
    'detail',
    'detection',
    'detective',
    'detector',
    'detention',
    'detergent',
    'detest',
    'detonate',
    'detonator',
    'detoxify',
    'detract',
    'deuce',
    'devalue',
    'deviancy',
    'deviant',
    'deviate',
    'deviation',
    'deviator',
    'device',
    'devious',
    'devotedly',
    'devotee',
    'devotion',
    'devourer',
    'devouring',
    'devoutly',
    'dexterity',
    'dexterous',
    'diabetes',
    'diabetic',
    'diabolic',
    'diagnoses',
    'diagnosis',
    'diagram',
    'dial',
    'diameter',
    'diaper',
    'diaphragm',
    'diary',
    'dice',
    'dicing',
    'dictate',
    'dictation',
    'dictator',
    'difficult',
    'diffused',
    'diffuser',
    'diffusion',
    'diffusive',
    'dig',
    'dilation',
    'diligence',
    'diligent',
    'dill',
    'dilute',
    'dime',
    'diminish',
    'dimly',
    'dimmed',
    'dimmer',
    'dimness',
    'dimple',
    'diner',
    'dingbat',
    'dinghy',
    'dinginess',
    'dingo',
    'dingy',
    'dining',
    'dinner',
    'diocese',
    'dioxide',
    'diploma',
    'dipped',
    'dipper',
    'dipping',
    'directed',
    'direction',
    'directive',
    'directly',
    'directory',
    'direness',
    'dirtiness',
    'disabled',
    'disagree',
    'disallow',
    'disarm',
    'disarray',
    'disaster',
    'disband',
    'disbelief',
    'disburse',
    'discard',
    'discern',
    'discharge',
    'disclose',
    'discolor',
    'discount',
    'discourse',
    'discover',
    'discuss',
    'disdain',
    'disengage',
    'disfigure',
    'disgrace',
    'dish',
    'disinfect',
    'disjoin',
    'disk',
    'dislike',
    'disliking',
    'dislocate',
    'dislodge',
    'disloyal',
    'dismantle',
    'dismay',
    'dismiss',
    'dismount',
    'disobey',
    'disorder',
    'disown',
    'disparate',
    'disparity',
    'dispatch',
    'dispense',
    'dispersal',
    'dispersed',
    'disperser',
    'displace',
    'display',
    'displease',
    'disposal',
    'dispose',
    'disprove',
    'dispute',
    'disregard',
    'disrupt',
    'dissuade',
    'distance',
    'distant',
    'distaste',
    'distill',
    'distinct',
    'distort',
    'distract',
    'distress',
    'district',
    'distrust',
    'ditch',
    'ditto',
    'ditzy',
    'dividable',
    'divided',
    'dividend',
    'dividers',
    'dividing',
    'divinely',
    'diving',
    'divinity',
    'divisible',
    'divisibly',
    'division',
    'divisive',
    'divorcee',
    'dizziness',
    'dizzy',
    'doable',
    'docile',
    'dock',
    'doctrine',
    'document',
    'dodge',
    'dodgy',
    'doily',
    'doing',
    'dole',
    'dollar',
    'dollhouse',
    'dollop',
    'dolly',
    'dolphin',
    'domain',
    'domelike',
    'domestic',
    'dominion',
    'dominoes',
    'donated',
    'donation',
    'donator',
    'donor',
    'donut',
    'doodle',
    'doorbell',
    'doorframe',
    'doorknob',
    'doorman',
    'doormat',
    'doornail',
    'doorpost',
    'doorstep',
    'doorstop',
    'doorway',
    'doozy',
    'dork',
    'dormitory',
    'dorsal',
    'dosage',
    'dose',
    'dotted',
    'doubling',
    'douche',
    'dove',
    'down',
    'dowry',
    'doze',
    'drab',
    'dragging',
    'dragonfly',
    'dragonish',
    'dragster',
    'drainable',
    'drainage',
    'drained',
    'drainer',
    'drainpipe',
    'dramatic',
    'dramatize',
    'drank',
    'drapery',
    'drastic',
    'draw',
    'dreaded',
    'dreadful',
    'dreadlock',
    'dreamboat',
    'dreamily',
    'dreamland',
    'dreamless',
    'dreamlike',
    'dreamt',
    'dreamy',
    'drearily',
    'dreary',
    'drench',
    'dress',
    'drew',
    'dribble',
    'dried',
    'drier',
    'drift',
    'driller',
    'drilling',
    'drinkable',
    'drinking',
    'dripping',
    'drippy',
    'drivable',
    'driven',
    'driver',
    'driveway',
    'driving',
    'drizzle',
    'drizzly',
    'drone',
    'drool',
    'droop',
    'drop-down',
    'dropbox',
    'dropkick',
    'droplet',
    'dropout',
    'dropper',
    'drove',
    'drown',
    'drowsily',
    'drudge',
    'drum',
    'dry',
    'dubbed',
    'dubiously',
    'duchess',
    'duckbill',
    'ducking',
    'duckling',
    'ducktail',
    'ducky',
    'duct',
    'dude',
    'duffel',
    'dugout',
    'duh',
    'duke',
    'duller',
    'dullness',
    'duly',
    'dumping',
    'dumpling',
    'dumpster',
    'duo',
    'dupe',
    'duplex',
    'duplicate',
    'duplicity',
    'durable',
    'durably',
    'duration',
    'duress',
    'during',
    'dusk',
    'dust',
    'dutiful',
    'duty',
    'duvet',
    'dwarf',
    'dweeb',
    'dwelled',
    'dweller',
    'dwelling',
    'dwindle',
    'dwindling',
    'dynamic',
    'dynamite',
    'dynasty',
    'dyslexia',
    'dyslexic',
    'each',
    'eagle',
    'earache',
    'eardrum',
    'earflap',
    'earful',
    'earlobe',
    'early',
    'earmark',
    'earmuff',
    'earphone',
    'earpiece',
    'earplugs',
    'earring',
    'earshot',
    'earthen',
    'earthlike',
    'earthling',
    'earthly',
    'earthworm',
    'earthy',
    'earwig',
    'easeful',
    'easel',
    'easiest',
    'easily',
    'easiness',
    'easing',
    'eastbound',
    'eastcoast',
    'easter',
    'eastward',
    'eatable',
    'eaten',
    'eatery',
    'eating',
    'eats',
    'ebay',
    'ebony',
    'ebook',
    'ecard',
    'eccentric',
    'echo',
    'eclair',
    'eclipse',
    'ecologist',
    'ecology',
    'economic',
    'economist',
    'economy',
    'ecosphere',
    'ecosystem',
    'edge',
    'edginess',
    'edging',
    'edgy',
    'edition',
    'editor',
    'educated',
    'education',
    'educator',
    'eel',
    'effective',
    'effects',
    'efficient',
    'effort',
    'eggbeater',
    'egging',
    'eggnog',
    'eggplant',
    'eggshell',
    'egomaniac',
    'egotism',
    'egotistic',
    'either',
    'eject',
    'elaborate',
    'elastic',
    'elated',
    'elbow',
    'eldercare',
    'elderly',
    'eldest',
    'electable',
    'election',
    'elective',
    'elephant',
    'elevate',
    'elevating',
    'elevation',
    'elevator',
    'eleven',
    'elf',
    'eligible',
    'eligibly',
    'eliminate',
    'elite',
    'elitism',
    'elixir',
    'elk',
    'ellipse',
    'elliptic',
    'elm',
    'elongated',
    'elope',
    'eloquence',
    'eloquent',
    'elsewhere',
    'elude',
    'elusive',
    'elves',
    'email',
    'embargo',
    'embark',
    'embassy',
    'embattled',
    'embellish',
    'ember',
    'embezzle',
    'emblaze',
    'emblem',
    'embody',
    'embolism',
    'emboss',
    'embroider',
    'emcee',
    'emerald',
    'emergency',
    'emission',
    'emit',
    'emote',
    'emoticon',
    'emotion',
    'empathic',
    'empathy',
    'emperor',
    'emphases',
    'emphasis',
    'emphasize',
    'emphatic',
    'empirical',
    'employed',
    'employee',
    'employer',
    'emporium',
    'empower',
    'emptier',
    'emptiness',
    'empty',
    'emu',
    'enable',
    'enactment',
    'enamel',
    'enchanted',
    'enchilada',
    'encircle',
    'enclose',
    'enclosure',
    'encode',
    'encore',
    'encounter',
    'encourage',
    'encroach',
    'encrust',
    'encrypt',
    'endanger',
    'endeared',
    'endearing',
    'ended',
    'ending',
    'endless',
    'endnote',
    'endocrine',
    'endorphin',
    'endorse',
    'endowment',
    'endpoint',
    'endurable',
    'endurance',
    'enduring',
    'energetic',
    'energize',
    'energy',
    'enforced',
    'enforcer',
    'engaged',
    'engaging',
    'engine',
    'engorge',
    'engraved',
    'engraver',
    'engraving',
    'engross',
    'engulf',
    'enhance',
    'enigmatic',
    'enjoyable',
    'enjoyably',
    'enjoyer',
    'enjoying',
    'enjoyment',
    'enlarged',
    'enlarging',
    'enlighten',
    'enlisted',
    'enquirer',
    'enrage',
    'enrich',
    'enroll',
    'enslave',
    'ensnare',
    'ensure',
    'entail',
    'entangled',
    'entering',
    'entertain',
    'enticing',
    'entire',
    'entitle',
    'entity',
    'entomb',
    'entourage',
    'entrap',
    'entree',
    'entrench',
    'entrust',
    'entryway',
    'entwine',
    'enunciate',
    'envelope',
    'enviable',
    'enviably',
    'envious',
    'envision',
    'envoy',
    'envy',
    'enzyme',
    'epic',
    'epidemic',
    'epidermal',
    'epidermis',
    'epidural',
    'epilepsy',
    'epileptic',
    'epilogue',
    'epiphany',
    'episode',
    'equal',
    'equate',
    'equation',
    'equator',
    'equinox',
    'equipment',
    'equity',
    'equivocal',
    'eradicate',
    'erasable',
    'erased',
    'eraser',
    'erasure',
    'ergonomic',
    'errand',
    'errant',
    'erratic',
    'error',
    'erupt',
    'escalate',
    'escalator',
    'escapable',
    'escapade',
    'escapist',
    'escargot',
    'eskimo',
    'esophagus',
    'espionage',
    'espresso',
    'esquire',
    'essay',
    'essence',
    'essential',
    'establish',
    'estate',
    'esteemed',
    'estimate',
    'estimator',
    'estranged',
    'estrogen',
    'etching',
    'eternal',
    'eternity',
    'ethanol',
    'ether',
    'ethically',
    'ethics',
    'euphemism',
    'evacuate',
    'evacuee',
    'evade',
    'evaluate',
    'evaluator',
    'evaporate',
    'evasion',
    'evasive',
    'even',
    'everglade',
    'evergreen',
    'everybody',
    'everyday',
    'everyone',
    'evict',
    'evidence',
    'evident',
    'evil',
    'evoke',
    'evolution',
    'evolve',
    'exact',
    'exalted',
    'example',
    'excavate',
    'excavator',
    'exceeding',
    'exception',
    'excess',
    'exchange',
    'excitable',
    'exciting',
    'exclaim',
    'exclude',
    'excluding',
    'exclusion',
    'exclusive',
    'excretion',
    'excretory',
    'excursion',
    'excusable',
    'excusably',
    'excuse',
    'exemplary',
    'exemplify',
    'exemption',
    'exerciser',
    'exert',
    'exes',
    'exfoliate',
    'exhale',
    'exhaust',
    'exhume',
    'exile',
    'existing',
    'exit',
    'exodus',
    'exonerate',
    'exorcism',
    'exorcist',
    'expand',
    'expanse',
    'expansion',
    'expansive',
    'expectant',
    'expedited',
    'expediter',
    'expel',
    'expend',
    'expenses',
    'expensive',
    'expert',
    'expire',
    'expiring',
    'explain',
    'expletive',
    'explicit',
    'explode',
    'exploit',
    'explore',
    'exploring',
    'exponent',
    'exporter',
    'exposable',
    'expose',
    'exposure',
    'express',
    'expulsion',
    'exquisite',
    'extended',
    'extending',
    'extent',
    'extenuate',
    'exterior',
    'external',
    'extinct',
    'extortion',
    'extradite',
    'extras',
    'extrovert',
    'extrude',
    'extruding',
    'exuberant',
    'fable',
    'fabric',
    'fabulous',
    'facebook',
    'facecloth',
    'facedown',
    'faceless',
    'facelift',
    'faceplate',
    'faceted',
    'facial',
    'facility',
    'facing',
    'facsimile',
    'faction',
    'factoid',
    'factor',
    'factsheet',
    'factual',
    'faculty',
    'fade',
    'fading',
    'failing',
    'falcon',
    'fall',
    'false',
    'falsify',
    'fame',
    'familiar',
    'family',
    'famine',
    'famished',
    'fanatic',
    'fancied',
    'fanciness',
    'fancy',
    'fanfare',
    'fang',
    'fanning',
    'fantasize',
    'fantastic',
    'fantasy',
    'fascism',
    'fastball',
    'faster',
    'fasting',
    'fastness',
    'faucet',
    'favorable',
    'favorably',
    'favored',
    'favoring',
    'favorite',
    'fax',
    'feast',
    'federal',
    'fedora',
    'feeble',
    'feed',
    'feel',
    'feisty',
    'feline',
    'felt-tip',
    'feminine',
    'feminism',
    'feminist',
    'feminize',
    'femur',
    'fence',
    'fencing',
    'fender',
    'ferment',
    'fernlike',
    'ferocious',
    'ferocity',
    'ferret',
    'ferris',
    'ferry',
    'fervor',
    'fester',
    'festival',
    'festive',
    'festivity',
    'fetal',
    'fetch',
    'fever',
    'fiber',
    'fiction',
    'fiddle',
    'fiddling',
    'fidelity',
    'fidgeting',
    'fidgety',
    'fifteen',
    'fifth',
    'fiftieth',
    'fifty',
    'figment',
    'figure',
    'figurine',
    'filing',
    'filled',
    'filler',
    'filling',
    'film',
    'filter',
    'filth',
    'filtrate',
    'finale',
    'finalist',
    'finalize',
    'finally',
    'finance',
    'financial',
    'finch',
    'fineness',
    'finer',
    'finicky',
    'finished',
    'finisher',
    'finishing',
    'finite',
    'finless',
    'finlike',
    'fiscally',
    'fit',
    'five',
    'flaccid',
    'flagman',
    'flagpole',
    'flagship',
    'flagstick',
    'flagstone',
    'flail',
    'flakily',
    'flaky',
    'flame',
    'flammable',
    'flanked',
    'flanking',
    'flannels',
    'flap',
    'flaring',
    'flashback',
    'flashbulb',
    'flashcard',
    'flashily',
    'flashing',
    'flashy',
    'flask',
    'flatbed',
    'flatfoot',
    'flatly',
    'flatness',
    'flatten',
    'flattered',
    'flatterer',
    'flattery',
    'flattop',
    'flatware',
    'flatworm',
    'flavored',
    'flavorful',
    'flavoring',
    'flaxseed',
    'fled',
    'fleshed',
    'fleshy',
    'flick',
    'flier',
    'flight',
    'flinch',
    'fling',
    'flint',
    'flip',
    'flirt',
    'float',
    'flock',
    'flogging',
    'flop',
    'floral',
    'florist',
    'floss',
    'flounder',
    'flyable',
    'flyaway',
    'flyer',
    'flying',
    'flyover',
    'flypaper',
    'foam',
    'foe',
    'fog',
    'foil',
    'folic',
    'folk',
    'follicle',
    'follow',
    'fondling',
    'fondly',
    'fondness',
    'fondue',
    'font',
    'food',
    'fool',
    'footage',
    'football',
    'footbath',
    'footboard',
    'footer',
    'footgear',
    'foothill',
    'foothold',
    'footing',
    'footless',
    'footman',
    'footnote',
    'footpad',
    'footpath',
    'footprint',
    'footrest',
    'footsie',
    'footsore',
    'footwear',
    'footwork',
    'fossil',
    'foster',
    'founder',
    'founding',
    'fountain',
    'fox',
    'foyer',
    'fraction',
    'fracture',
    'fragile',
    'fragility',
    'fragment',
    'fragrance',
    'fragrant',
    'frail',
    'frame',
    'framing',
    'frantic',
    'fraternal',
    'frayed',
    'fraying',
    'frays',
    'freckled',
    'freckles',
    'freebase',
    'freebee',
    'freebie',
    'freedom',
    'freefall',
    'freehand',
    'freeing',
    'freeload',
    'freely',
    'freemason',
    'freeness',
    'freestyle',
    'freeware',
    'freeway',
    'freewill',
    'freezable',
    'freezing',
    'freight',
    'french',
    'frenzied',
    'frenzy',
    'frequency',
    'frequent',
    'fresh',
    'fretful',
    'fretted',
    'friction',
    'friday',
    'fridge',
    'fried',
    'friend',
    'frighten',
    'frightful',
    'frigidity',
    'frigidly',
    'frill',
    'fringe',
    'frisbee',
    'frisk',
    'fritter',
    'frivolous',
    'frolic',
    'from',
    'front',
    'frostbite',
    'frosted',
    'frostily',
    'frosting',
    'frostlike',
    'frosty',
    'froth',
    'frown',
    'frozen',
    'fructose',
    'frugality',
    'frugally',
    'fruit',
    'frustrate',
    'frying',
    'gab',
    'gaffe',
    'gag',
    'gainfully',
    'gaining',
    'gains',
    'gala',
    'gallantly',
    'galleria',
    'gallery',
    'galley',
    'gallon',
    'gallows',
    'gallstone',
    'galore',
    'galvanize',
    'gambling',
    'game',
    'gaming',
    'gamma',
    'gander',
    'gangly',
    'gangrene',
    'gangway',
    'gap',
    'garage',
    'garbage',
    'garden',
    'gargle',
    'garland',
    'garlic',
    'garment',
    'garnet',
    'garnish',
    'garter',
    'gas',
    'gatherer',
    'gathering',
    'gating',
    'gauging',
    'gauntlet',
    'gauze',
    'gave',
    'gawk',
    'gazing',
    'gear',
    'gecko',
    'geek',
    'geiger',
    'gem',
    'gender',
    'generic',
    'generous',
    'genetics',
    'genre',
    'gentile',
    'gentleman',
    'gently',
    'gents',
    'geography',
    'geologic',
    'geologist',
    'geology',
    'geometric',
    'geometry',
    'geranium',
    'gerbil',
    'geriatric',
    'germicide',
    'germinate',
    'germless',
    'germproof',
    'gestate',
    'gestation',
    'gesture',
    'getaway',
    'getting',
    'getup',
    'giant',
    'gibberish',
    'giblet',
    'giddily',
    'giddiness',
    'giddy',
    'gift',
    'gigabyte',
    'gigahertz',
    'gigantic',
    'giggle',
    'giggling',
    'giggly',
    'gigolo',
    'gilled',
    'gills',
    'gimmick',
    'girdle',
    'giveaway',
    'given',
    'giver',
    'giving',
    'gizmo',
    'gizzard',
    'glacial',
    'glacier',
    'glade',
    'gladiator',
    'gladly',
    'glamorous',
    'glamour',
    'glance',
    'glancing',
    'glandular',
    'glare',
    'glaring',
    'glass',
    'glaucoma',
    'glazing',
    'gleaming',
    'gleeful',
    'glider',
    'gliding',
    'glimmer',
    'glimpse',
    'glisten',
    'glitch',
    'glitter',
    'glitzy',
    'gloater',
    'gloating',
    'gloomily',
    'gloomy',
    'glorified',
    'glorifier',
    'glorify',
    'glorious',
    'glory',
    'gloss',
    'glove',
    'glowing',
    'glowworm',
    'glucose',
    'glue',
    'gluten',
    'glutinous',
    'glutton',
    'gnarly',
    'gnat',
    'goal',
    'goatskin',
    'goes',
    'goggles',
    'going',
    'goldfish',
    'goldmine',
    'goldsmith',
    'golf',
    'goliath',
    'gonad',
    'gondola',
    'gone',
    'gong',
    'good',
    'gooey',
    'goofball',
    'goofiness',
    'goofy',
    'google',
    'goon',
    'gopher',
    'gore',
    'gorged',
    'gorgeous',
    'gory',
    'gosling',
    'gossip',
    'gothic',
    'gotten',
    'gout',
    'gown',
    'grab',
    'graceful',
    'graceless',
    'gracious',
    'gradation',
    'graded',
    'grader',
    'gradient',
    'grading',
    'gradually',
    'graduate',
    'graffiti',
    'grafted',
    'grafting',
    'grain',
    'granddad',
    'grandkid',
    'grandly',
    'grandma',
    'grandpa',
    'grandson',
    'granite',
    'granny',
    'granola',
    'grant',
    'granular',
    'grape',
    'graph',
    'grapple',
    'grappling',
    'grasp',
    'grass',
    'gratified',
    'gratify',
    'grating',
    'gratitude',
    'gratuity',
    'gravel',
    'graveness',
    'graves',
    'graveyard',
    'gravitate',
    'gravity',
    'gravy',
    'gray',
    'grazing',
    'greasily',
    'greedily',
    'greedless',
    'greedy',
    'green',
    'greeter',
    'greeting',
    'grew',
    'greyhound',
    'grid',
    'grief',
    'grievance',
    'grieving',
    'grievous',
    'grill',
    'grimace',
    'grimacing',
    'grime',
    'griminess',
    'grimy',
    'grinch',
    'grinning',
    'grip',
    'gristle',
    'grit',
    'groggily',
    'groggy',
    'groin',
    'groom',
    'groove',
    'grooving',
    'groovy',
    'grope',
    'ground',
    'grouped',
    'grout',
    'grove',
    'grower',
    'growing',
    'growl',
    'grub',
    'grudge',
    'grudging',
    'grueling',
    'gruffly',
    'grumble',
    'grumbling',
    'grumbly',
    'grumpily',
    'grunge',
    'grunt',
    'guacamole',
    'guidable',
    'guidance',
    'guide',
    'guiding',
    'guileless',
    'guise',
    'gulf',
    'gullible',
    'gully',
    'gulp',
    'gumball',
    'gumdrop',
    'gumminess',
    'gumming',
    'gummy',
    'gurgle',
    'gurgling',
    'guru',
    'gush',
    'gusto',
    'gusty',
    'gutless',
    'guts',
    'gutter',
    'guy',
    'guzzler',
    'gyration',
    'habitable',
    'habitant',
    'habitat',
    'habitual',
    'hacked',
    'hacker',
    'hacking',
    'hacksaw',
    'had',
    'haggler',
    'haiku',
    'half',
    'halogen',
    'halt',
    'halved',
    'halves',
    'hamburger',
    'hamlet',
    'hammock',
    'hamper',
    'hamster',
    'hamstring',
    'handbag',
    'handball',
    'handbook',
    'handbrake',
    'handcart',
    'handclap',
    'handclasp',
    'handcraft',
    'handcuff',
    'handed',
    'handful',
    'handgrip',
    'handgun',
    'handheld',
    'handiness',
    'handiwork',
    'handlebar',
    'handled',
    'handler',
    'handling',
    'handmade',
    'handoff',
    'handpick',
    'handprint',
    'handrail',
    'handsaw',
    'handset',
    'handsfree',
    'handshake',
    'handstand',
    'handwash',
    'handwork',
    'handwoven',
    'handwrite',
    'handyman',
    'hangnail',
    'hangout',
    'hangover',
    'hangup',
    'hankering',
    'hankie',
    'hanky',
    'haphazard',
    'happening',
    'happier',
    'happiest',
    'happily',
    'happiness',
    'happy',
    'harbor',
    'hardcopy',
    'hardcore',
    'hardcover',
    'harddisk',
    'hardened',
    'hardener',
    'hardening',
    'hardhat',
    'hardhead',
    'hardiness',
    'hardly',
    'hardness',
    'hardship',
    'hardware',
    'hardwired',
    'hardwood',
    'hardy',
    'harmful',
    'harmless',
    'harmonica',
    'harmonics',
    'harmonize',
    'harmony',
    'harness',
    'harpist',
    'harsh',
    'harvest',
    'hash',
    'hassle',
    'haste',
    'hastily',
    'hastiness',
    'hasty',
    'hatbox',
    'hatchback',
    'hatchery',
    'hatchet',
    'hatching',
    'hatchling',
    'hate',
    'hatless',
    'hatred',
    'haunt',
    'haven',
    'hazard',
    'hazelnut',
    'hazily',
    'haziness',
    'hazing',
    'hazy',
    'headache',
    'headband',
    'headboard',
    'headcount',
    'headdress',
    'headed',
    'header',
    'headfirst',
    'headgear',
    'heading',
    'headlamp',
    'headless',
    'headlock',
    'headphone',
    'headpiece',
    'headrest',
    'headroom',
    'headscarf',
    'headset',
    'headsman',
    'headstand',
    'headstone',
    'headway',
    'headwear',
    'heap',
    'heat',
    'heave',
    'heavily',
    'heaviness',
    'heaving',
    'hedge',
    'hedging',
    'heftiness',
    'hefty',
    'helium',
    'helmet',
    'helper',
    'helpful',
    'helping',
    'helpless',
    'helpline',
    'hemlock',
    'hemstitch',
    'hence',
    'henchman',
    'henna',
    'herald',
    'herbal',
    'herbicide',
    'herbs',
    'heritage',
    'hermit',
    'heroics',
    'heroism',
    'herring',
    'herself',
    'hertz',
    'hesitancy',
    'hesitant',
    'hesitate',
    'hexagon',
    'hexagram',
    'hubcap',
    'huddle',
    'huddling',
    'huff',
    'hug',
    'hula',
    'hulk',
    'hull',
    'human',
    'humble',
    'humbling',
    'humbly',
    'humid',
    'humiliate',
    'humility',
    'humming',
    'hummus',
    'humongous',
    'humorist',
    'humorless',
    'humorous',
    'humpback',
    'humped',
    'humvee',
    'hunchback',
    'hundredth',
    'hunger',
    'hungrily',
    'hungry',
    'hunk',
    'hunter',
    'hunting',
    'huntress',
    'huntsman',
    'hurdle',
    'hurled',
    'hurler',
    'hurling',
    'hurray',
    'hurricane',
    'hurried',
    'hurry',
    'hurt',
    'husband',
    'hush',
    'husked',
    'huskiness',
    'hut',
    'hybrid',
    'hydrant',
    'hydrated',
    'hydration',
    'hydrogen',
    'hydroxide',
    'hyperlink',
    'hypertext',
    'hyphen',
    'hypnoses',
    'hypnosis',
    'hypnotic',
    'hypnotism',
    'hypnotist',
    'hypnotize',
    'hypocrisy',
    'hypocrite',
    'ibuprofen',
    'ice',
    'iciness',
    'icing',
    'icky',
    'icon',
    'icy',
    'idealism',
    'idealist',
    'idealize',
    'ideally',
    'idealness',
    'identical',
    'identify',
    'identity',
    'ideology',
    'idiocy',
    'idiom',
    'idly',
    'igloo',
    'ignition',
    'ignore',
    'iguana',
    'illicitly',
    'illusion',
    'illusive',
    'image',
    'imaginary',
    'imagines',
    'imaging',
    'imbecile',
    'imitate',
    'imitation',
    'immature',
    'immerse',
    'immersion',
    'imminent',
    'immobile',
    'immodest',
    'immorally',
    'immortal',
    'immovable',
    'immovably',
    'immunity',
    'immunize',
    'impaired',
    'impale',
    'impart',
    'impatient',
    'impeach',
    'impeding',
    'impending',
    'imperfect',
    'imperial',
    'impish',
    'implant',
    'implement',
    'implicate',
    'implicit',
    'implode',
    'implosion',
    'implosive',
    'imply',
    'impolite',
    'important',
    'importer',
    'impose',
    'imposing',
    'impotence',
    'impotency',
    'impotent',
    'impound',
    'imprecise',
    'imprint',
    'imprison',
    'impromptu',
    'improper',
    'improve',
    'improving',
    'improvise',
    'imprudent',
    'impulse',
    'impulsive',
    'impure',
    'impurity',
    'iodine',
    'iodize',
    'ion',
    'ipad',
    'iphone',
    'ipod',
    'irate',
    'irk',
    'iron',
    'irregular',
    'irrigate',
    'irritable',
    'irritably',
    'irritant',
    'irritate',
    'islamic',
    'islamist',
    'isolated',
    'isolating',
    'isolation',
    'isotope',
    'issue',
    'issuing',
    'italicize',
    'italics',
    'item',
    'itinerary',
    'itunes',
    'ivory',
    'ivy',
    'jab',
    'jackal',
    'jacket',
    'jackknife',
    'jackpot',
    'jailbird',
    'jailbreak',
    'jailer',
    'jailhouse',
    'jalapeno',
    'jam',
    'janitor',
    'january',
    'jargon',
    'jarring',
    'jasmine',
    'jaundice',
    'jaunt',
    'java',
    'jawed',
    'jawless',
    'jawline',
    'jaws',
    'jaybird',
    'jaywalker',
    'jazz',
    'jeep',
    'jeeringly',
    'jellied',
    'jelly',
    'jersey',
    'jester',
    'jet',
    'jiffy',
    'jigsaw',
    'jimmy',
    'jingle',
    'jingling',
    'jinx',
    'jitters',
    'jittery',
    'job',
    'jockey',
    'jockstrap',
    'jogger',
    'jogging',
    'john',
    'joining',
    'jokester',
    'jokingly',
    'jolliness',
    'jolly',
    'jolt',
    'jot',
    'jovial',
    'joyfully',
    'joylessly',
    'joyous',
    'joyride',
    'joystick',
    'jubilance',
    'jubilant',
    'judge',
    'judgingly',
    'judicial',
    'judiciary',
    'judo',
    'juggle',
    'juggling',
    'jugular',
    'juice',
    'juiciness',
    'juicy',
    'jujitsu',
    'jukebox',
    'july',
    'jumble',
    'jumbo',
    'jump',
    'junction',
    'juncture',
    'june',
    'junior',
    'juniper',
    'junkie',
    'junkman',
    'junkyard',
    'jurist',
    'juror',
    'jury',
    'justice',
    'justifier',
    'justify',
    'justly',
    'justness',
    'juvenile',
    'kabob',
    'kangaroo',
    'karaoke',
    'karate',
    'karma',
    'kebab',
    'keenly',
    'keenness',
    'keep',
    'keg',
    'kelp',
    'kennel',
    'kept',
    'kerchief',
    'kerosene',
    'kettle',
    'kick',
    'kiln',
    'kilobyte',
    'kilogram',
    'kilometer',
    'kilowatt',
    'kilt',
    'kimono',
    'kindle',
    'kindling',
    'kindly',
    'kindness',
    'kindred',
    'kinetic',
    'kinfolk',
    'king',
    'kinship',
    'kinsman',
    'kinswoman',
    'kissable',
    'kisser',
    'kissing',
    'kitchen',
    'kite',
    'kitten',
    'kitty',
    'kiwi',
    'kleenex',
    'knapsack',
    'knee',
    'knelt',
    'knickers',
    'knoll',
    'koala',
    'kooky',
    'kosher',
    'krypton',
    'kudos',
    'kung',
    'labored',
    'laborer',
    'laboring',
    'laborious',
    'labrador',
    'ladder',
    'ladies',
    'ladle',
    'ladybug',
    'ladylike',
    'lagged',
    'lagging',
    'lagoon',
    'lair',
    'lake',
    'lance',
    'landed',
    'landfall',
    'landfill',
    'landing',
    'landlady',
    'landless',
    'landline',
    'landlord',
    'landmark',
    'landmass',
    'landmine',
    'landowner',
    'landscape',
    'landside',
    'landslide',
    'language',
    'lankiness',
    'lanky',
    'lantern',
    'lapdog',
    'lapel',
    'lapped',
    'lapping',
    'laptop',
    'lard',
    'large',
    'lark',
    'lash',
    'lasso',
    'last',
    'latch',
    'late',
    'lather',
    'latitude',
    'latrine',
    'latter',
    'latticed',
    'launch',
    'launder',
    'laundry',
    'laurel',
    'lavender',
    'lavish',
    'laxative',
    'lazily',
    'laziness',
    'lazy',
    'lecturer',
    'left',
    'legacy',
    'legal',
    'legend',
    'legged',
    'leggings',
    'legible',
    'legibly',
    'legislate',
    'lego',
    'legroom',
    'legume',
    'legwarmer',
    'legwork',
    'lemon',
    'lend',
    'length',
    'lens',
    'lent',
    'leotard',
    'lesser',
    'letdown',
    'lethargic',
    'lethargy',
    'letter',
    'lettuce',
    'level',
    'leverage',
    'levers',
    'levitate',
    'levitator',
    'liability',
    'liable',
    'liberty',
    'librarian',
    'library',
    'licking',
    'licorice',
    'lid',
    'life',
    'lifter',
    'lifting',
    'liftoff',
    'ligament',
    'likely',
    'likeness',
    'likewise',
    'liking',
    'lilac',
    'lilly',
    'lily',
    'limb',
    'limeade',
    'limelight',
    'limes',
    'limit',
    'limping',
    'limpness',
    'line',
    'lingo',
    'linguini',
    'linguist',
    'lining',
    'linked',
    'linoleum',
    'linseed',
    'lint',
    'lion',
    'lip',
    'liquefy',
    'liqueur',
    'liquid',
    'lisp',
    'list',
    'litigate',
    'litigator',
    'litmus',
    'litter',
    'little',
    'livable',
    'lived',
    'lively',
    'liver',
    'livestock',
    'lividly',
    'living',
    'lizard',
    'lubricant',
    'lubricate',
    'lucid',
    'luckily',
    'luckiness',
    'luckless',
    'lucrative',
    'ludicrous',
    'lugged',
    'lukewarm',
    'lullaby',
    'lumber',
    'luminance',
    'luminous',
    'lumpiness',
    'lumping',
    'lumpish',
    'lunacy',
    'lunar',
    'lunchbox',
    'luncheon',
    'lunchroom',
    'lunchtime',
    'lung',
    'lurch',
    'lure',
    'luridness',
    'lurk',
    'lushly',
    'lushness',
    'luster',
    'lustfully',
    'lustily',
    'lustiness',
    'lustrous',
    'lusty',
    'luxurious',
    'luxury',
    'lying',
    'lyrically',
    'lyricism',
    'lyricist',
    'lyrics',
    'macarena',
    'macaroni',
    'macaw',
    'mace',
    'machine',
    'machinist',
    'magazine',
    'magenta',
    'maggot',
    'magical',
    'magician',
    'magma',
    'magnesium',
    'magnetic',
    'magnetism',
    'magnetize',
    'magnifier',
    'magnify',
    'magnitude',
    'magnolia',
    'mahogany',
    'maimed',
    'majestic',
    'majesty',
    'majorette',
    'majority',
    'makeover',
    'maker',
    'makeshift',
    'making',
    'malformed',
    'malt',
    'mama',
    'mammal',
    'mammary',
    'mammogram',
    'manager',
    'managing',
    'manatee',
    'mandarin',
    'mandate',
    'mandatory',
    'mandolin',
    'manger',
    'mangle',
    'mango',
    'mangy',
    'manhandle',
    'manhole',
    'manhood',
    'manhunt',
    'manicotti',
    'manicure',
    'manifesto',
    'manila',
    'mankind',
    'manlike',
    'manliness',
    'manly',
    'manmade',
    'manned',
    'mannish',
    'manor',
    'manpower',
    'mantis',
    'mantra',
    'manual',
    'many',
    'map',
    'marathon',
    'marauding',
    'marbled',
    'marbles',
    'marbling',
    'march',
    'mardi',
    'margarine',
    'margarita',
    'margin',
    'marigold',
    'marina',
    'marine',
    'marital',
    'maritime',
    'marlin',
    'marmalade',
    'maroon',
    'married',
    'marrow',
    'marry',
    'marshland',
    'marshy',
    'marsupial',
    'marvelous',
    'marxism',
    'mascot',
    'masculine',
    'mashed',
    'mashing',
    'massager',
    'masses',
    'massive',
    'mastiff',
    'matador',
    'matchbook',
    'matchbox',
    'matcher',
    'matching',
    'matchless',
    'material',
    'maternal',
    'maternity',
    'math',
    'mating',
    'matriarch',
    'matrimony',
    'matrix',
    'matron',
    'matted',
    'matter',
    'maturely',
    'maturing',
    'maturity',
    'mauve',
    'maverick',
    'maximize',
    'maximum',
    'maybe',
    'mayday',
    'mayflower',
    'moaner',
    'moaning',
    'mobile',
    'mobility',
    'mobilize',
    'mobster',
    'mocha',
    'mocker',
    'mockup',
    'modified',
    'modify',
    'modular',
    'modulator',
    'module',
    'moisten',
    'moistness',
    'moisture',
    'molar',
    'molasses',
    'mold',
    'molecular',
    'molecule',
    'molehill',
    'mollusk',
    'mom',
    'monastery',
    'monday',
    'monetary',
    'monetize',
    'moneybags',
    'moneyless',
    'moneywise',
    'mongoose',
    'mongrel',
    'monitor',
    'monkhood',
    'monogamy',
    'monogram',
    'monologue',
    'monopoly',
    'monorail',
    'monotone',
    'monotype',
    'monoxide',
    'monsieur',
    'monsoon',
    'monstrous',
    'monthly',
    'monument',
    'moocher',
    'moodiness',
    'moody',
    'mooing',
    'moonbeam',
    'mooned',
    'moonlight',
    'moonlike',
    'moonlit',
    'moonrise',
    'moonscape',
    'moonshine',
    'moonstone',
    'moonwalk',
    'mop',
    'morale',
    'morality',
    'morally',
    'morbidity',
    'morbidly',
    'morphine',
    'morphing',
    'morse',
    'mortality',
    'mortally',
    'mortician',
    'mortified',
    'mortify',
    'mortuary',
    'mosaic',
    'mossy',
    'most',
    'mothball',
    'mothproof',
    'motion',
    'motivate',
    'motivator',
    'motive',
    'motocross',
    'motor',
    'motto',
    'mountable',
    'mountain',
    'mounted',
    'mounting',
    'mourner',
    'mournful',
    'mouse',
    'mousiness',
    'moustache',
    'mousy',
    'mouth',
    'movable',
    'move',
    'movie',
    'moving',
    'mower',
    'mowing',
    'much',
    'muck',
    'mud',
    'mug',
    'mulberry',
    'mulch',
    'mule',
    'mulled',
    'mullets',
    'multiple',
    'multiply',
    'multitask',
    'multitude',
    'mumble',
    'mumbling',
    'mumbo',
    'mummified',
    'mummify',
    'mummy',
    'mumps',
    'munchkin',
    'mundane',
    'municipal',
    'muppet',
    'mural',
    'murkiness',
    'murky',
    'murmuring',
    'muscular',
    'museum',
    'mushily',
    'mushiness',
    'mushroom',
    'mushy',
    'music',
    'musket',
    'muskiness',
    'musky',
    'mustang',
    'mustard',
    'muster',
    'mustiness',
    'musty',
    'mutable',
    'mutate',
    'mutation',
    'mute',
    'mutilated',
    'mutilator',
    'mutiny',
    'mutt',
    'mutual',
    'muzzle',
    'myself',
    'myspace',
    'mystified',
    'mystify',
    'myth',
    'nacho',
    'nag',
    'nail',
    'name',
    'naming',
    'nanny',
    'nanometer',
    'nape',
    'napkin',
    'napped',
    'napping',
    'nappy',
    'narrow',
    'nastily',
    'nastiness',
    'national',
    'native',
    'nativity',
    'natural',
    'nature',
    'naturist',
    'nautical',
    'navigate',
    'navigator',
    'navy',
    'nearby',
    'nearest',
    'nearly',
    'nearness',
    'neatly',
    'neatness',
    'nebula',
    'nebulizer',
    'nectar',
    'negate',
    'negation',
    'negative',
    'neglector',
    'negligee',
    'negligent',
    'negotiate',
    'nemeses',
    'nemesis',
    'neon',
    'nephew',
    'nerd',
    'nervous',
    'nervy',
    'nest',
    'net',
    'neurology',
    'neuron',
    'neurosis',
    'neurotic',
    'neuter',
    'neutron',
    'never',
    'next',
    'nibble',
    'nickname',
    'nicotine',
    'niece',
    'nifty',
    'nimble',
    'nimbly',
    'nineteen',
    'ninetieth',
    'ninja',
    'nintendo',
    'ninth',
    'nuclear',
    'nuclei',
    'nucleus',
    'nugget',
    'nullify',
    'number',
    'numbing',
    'numbly',
    'numbness',
    'numeral',
    'numerate',
    'numerator',
    'numeric',
    'numerous',
    'nuptials',
    'nursery',
    'nursing',
    'nurture',
    'nutcase',
    'nutlike',
    'nutmeg',
    'nutrient',
    'nutshell',
    'nuttiness',
    'nutty',
    'nuzzle',
    'nylon',
    'oaf',
    'oak',
    'oasis',
    'oat',
    'obedience',
    'obedient',
    'obituary',
    'object',
    'obligate',
    'obliged',
    'oblivion',
    'oblivious',
    'oblong',
    'obnoxious',
    'oboe',
    'obscure',
    'obscurity',
    'observant',
    'observer',
    'observing',
    'obsessed',
    'obsession',
    'obsessive',
    'obsolete',
    'obstacle',
    'obstinate',
    'obstruct',
    'obtain',
    'obtrusive',
    'obtuse',
    'obvious',
    'occultist',
    'occupancy',
    'occupant',
    'occupier',
    'occupy',
    'ocean',
    'ocelot',
    'octagon',
    'octane',
    'october',
    'octopus',
    'ogle',
    'oil',
    'oink',
    'ointment',
    'okay',
    'old',
    'olive',
    'olympics',
    'omega',
    'omen',
    'ominous',
    'omission',
    'omit',
    'omnivore',
    'onboard',
    'oncoming',
    'ongoing',
    'onion',
    'online',
    'onlooker',
    'only',
    'onscreen',
    'onset',
    'onshore',
    'onslaught',
    'onstage',
    'onto',
    'onward',
    'onyx',
    'oops',
    'ooze',
    'oozy',
    'opacity',
    'opal',
    'open',
    'operable',
    'operate',
    'operating',
    'operation',
    'operative',
    'operator',
    'opium',
    'opossum',
    'opponent',
    'oppose',
    'opposing',
    'opposite',
    'oppressed',
    'oppressor',
    'opt',
    'opulently',
    'osmosis',
    'other',
    'otter',
    'ouch',
    'ought',
    'ounce',
    'outage',
    'outback',
    'outbid',
    'outboard',
    'outbound',
    'outbreak',
    'outburst',
    'outcast',
    'outclass',
    'outcome',
    'outdated',
    'outdoors',
    'outer',
    'outfield',
    'outfit',
    'outflank',
    'outgoing',
    'outgrow',
    'outhouse',
    'outing',
    'outlast',
    'outlet',
    'outline',
    'outlook',
    'outlying',
    'outmatch',
    'outmost',
    'outnumber',
    'outplayed',
    'outpost',
    'outpour',
    'output',
    'outrage',
    'outrank',
    'outreach',
    'outright',
    'outscore',
    'outsell',
    'outshine',
    'outshoot',
    'outsider',
    'outskirts',
    'outsmart',
    'outsource',
    'outspoken',
    'outtakes',
    'outthink',
    'outward',
    'outweigh',
    'outwit',
    'oval',
    'ovary',
    'oven',
    'overact',
    'overall',
    'overarch',
    'overbid',
    'overbill',
    'overbite',
    'overblown',
    'overboard',
    'overbook',
    'overbuilt',
    'overcast',
    'overcoat',
    'overcome',
    'overcook',
    'overcrowd',
    'overdraft',
    'overdrawn',
    'overdress',
    'overdrive',
    'overdue',
    'overeager',
    'overeater',
    'overexert',
    'overfed',
    'overfeed',
    'overfill',
    'overflow',
    'overfull',
    'overgrown',
    'overhand',
    'overhang',
    'overhaul',
    'overhead',
    'overhear',
    'overheat',
    'overhung',
    'overjoyed',
    'overkill',
    'overlabor',
    'overlaid',
    'overlap',
    'overlay',
    'overload',
    'overlook',
    'overlord',
    'overlying',
    'overnight',
    'overpass',
    'overpay',
    'overplant',
    'overplay',
    'overpower',
    'overprice',
    'overrate',
    'overreach',
    'overreact',
    'override',
    'overripe',
    'overrule',
    'overrun',
    'overshoot',
    'overshot',
    'oversight',
    'oversized',
    'oversleep',
    'oversold',
    'overspend',
    'overstate',
    'overstay',
    'overstep',
    'overstock',
    'overstuff',
    'oversweet',
    'overtake',
    'overthrow',
    'overtime',
    'overtly',
    'overtone',
    'overture',
    'overturn',
    'overuse',
    'overvalue',
    'overview',
    'overwrite',
    'owl',
    'oxford',
    'oxidant',
    'oxidation',
    'oxidize',
    'oxidizing',
    'oxygen',
    'oxymoron',
    'oyster',
    'ozone',
    'paced',
    'pacemaker',
    'pacific',
    'pacifier',
    'pacifism',
    'pacifist',
    'pacify',
    'padded',
    'padding',
    'paddle',
    'paddling',
    'padlock',
    'pagan',
    'pager',
    'paging',
    'pajamas',
    'palace',
    'palatable',
    'palm',
    'palpable',
    'palpitate',
    'paltry',
    'pampered',
    'pamperer',
    'pampers',
    'pamphlet',
    'panama',
    'pancake',
    'pancreas',
    'panda',
    'pandemic',
    'pang',
    'panhandle',
    'panic',
    'panning',
    'panorama',
    'panoramic',
    'panther',
    'pantomime',
    'pantry',
    'pants',
    'pantyhose',
    'paparazzi',
    'papaya',
    'paper',
    'paprika',
    'papyrus',
    'parabola',
    'parachute',
    'parade',
    'paradox',
    'paragraph',
    'parakeet',
    'paralegal',
    'paralyses',
    'paralysis',
    'paralyze',
    'paramedic',
    'parameter',
    'paramount',
    'parasail',
    'parasite',
    'parasitic',
    'parcel',
    'parched',
    'parchment',
    'pardon',
    'parish',
    'parka',
    'parking',
    'parkway',
    'parlor',
    'parmesan',
    'parole',
    'parrot',
    'parsley',
    'parsnip',
    'partake',
    'parted',
    'parting',
    'partition',
    'partly',
    'partner',
    'partridge',
    'party',
    'passable',
    'passably',
    'passage',
    'passcode',
    'passenger',
    'passerby',
    'passing',
    'passion',
    'passive',
    'passivism',
    'passover',
    'passport',
    'password',
    'pasta',
    'pasted',
    'pastel',
    'pastime',
    'pastor',
    'pastrami',
    'pasture',
    'pasty',
    'patchwork',
    'patchy',
    'paternal',
    'paternity',
    'path',
    'patience',
    'patient',
    'patio',
    'patriarch',
    'patriot',
    'patrol',
    'patronage',
    'patronize',
    'pauper',
    'pavement',
    'paver',
    'pavestone',
    'pavilion',
    'paving',
    'pawing',
    'payable',
    'payback',
    'paycheck',
    'payday',
    'payee',
    'payer',
    'paying',
    'payment',
    'payphone',
    'payroll',
    'pebble',
    'pebbly',
    'pecan',
    'pectin',
    'peculiar',
    'peddling',
    'pediatric',
    'pedicure',
    'pedigree',
    'pedometer',
    'pegboard',
    'pelican',
    'pellet',
    'pelt',
    'pelvis',
    'penalize',
    'penalty',
    'pencil',
    'pendant',
    'pending',
    'penholder',
    'penknife',
    'pennant',
    'penniless',
    'penny',
    'penpal',
    'pension',
    'pentagon',
    'pentagram',
    'pep',
    'perceive',
    'percent',
    'perch',
    'percolate',
    'perennial',
    'perfected',
    'perfectly',
    'perfume',
    'periscope',
    'perish',
    'perjurer',
    'perjury',
    'perkiness',
    'perky',
    'perm',
    'peroxide',
    'perpetual',
    'perplexed',
    'persecute',
    'persevere',
    'persuaded',
    'persuader',
    'pesky',
    'peso',
    'pessimism',
    'pessimist',
    'pester',
    'pesticide',
    'petal',
    'petite',
    'petition',
    'petri',
    'petroleum',
    'petted',
    'petticoat',
    'pettiness',
    'petty',
    'petunia',
    'phantom',
    'phobia',
    'phoenix',
    'phonebook',
    'phoney',
    'phonics',
    'phoniness',
    'phony',
    'phosphate',
    'photo',
    'phrase',
    'phrasing',
    'placard',
    'placate',
    'placidly',
    'plank',
    'planner',
    'plant',
    'plasma',
    'plaster',
    'plastic',
    'plated',
    'platform',
    'plating',
    'platinum',
    'platonic',
    'platter',
    'platypus',
    'plausible',
    'plausibly',
    'playable',
    'playback',
    'player',
    'playful',
    'playgroup',
    'playhouse',
    'playing',
    'playlist',
    'playmaker',
    'playmate',
    'playoff',
    'playpen',
    'playroom',
    'playset',
    'plaything',
    'playtime',
    'plaza',
    'pleading',
    'pleat',
    'pledge',
    'plentiful',
    'plenty',
    'plethora',
    'plexiglas',
    'pliable',
    'plod',
    'plop',
    'plot',
    'plow',
    'ploy',
    'pluck',
    'plug',
    'plunder',
    'plunging',
    'plural',
    'plus',
    'plutonium',
    'plywood',
    'poach',
    'pod',
    'poem',
    'poet',
    'pogo',
    'pointed',
    'pointer',
    'pointing',
    'pointless',
    'pointy',
    'poise',
    'poison',
    'poker',
    'poking',
    'polar',
    'police',
    'policy',
    'polio',
    'polish',
    'politely',
    'polka',
    'polo',
    'polyester',
    'polygon',
    'polygraph',
    'polymer',
    'poncho',
    'pond',
    'pony',
    'popcorn',
    'pope',
    'poplar',
    'popper',
    'poppy',
    'popsicle',
    'populace',
    'popular',
    'populate',
    'porcupine',
    'pork',
    'porous',
    'porridge',
    'portable',
    'portal',
    'portfolio',
    'porthole',
    'portion',
    'portly',
    'portside',
    'poser',
    'posh',
    'posing',
    'possible',
    'possibly',
    'possum',
    'postage',
    'postal',
    'postbox',
    'postcard',
    'posted',
    'poster',
    'posting',
    'postnasal',
    'posture',
    'postwar',
    'pouch',
    'pounce',
    'pouncing',
    'pound',
    'pouring',
    'pout',
    'powdered',
    'powdering',
    'powdery',
    'power',
    'powwow',
    'pox',
    'praising',
    'prance',
    'prancing',
    'pranker',
    'prankish',
    'prankster',
    'prayer',
    'praying',
    'preacher',
    'preaching',
    'preachy',
    'preamble',
    'precinct',
    'precise',
    'precision',
    'precook',
    'precut',
    'predator',
    'predefine',
    'predict',
    'preface',
    'prefix',
    'preflight',
    'preformed',
    'pregame',
    'pregnancy',
    'pregnant',
    'preheated',
    'prelaunch',
    'prelaw',
    'prelude',
    'premiere',
    'premises',
    'premium',
    'prenatal',
    'preoccupy',
    'preorder',
    'prepaid',
    'prepay',
    'preplan',
    'preppy',
    'preschool',
    'prescribe',
    'preseason',
    'preset',
    'preshow',
    'president',
    'presoak',
    'press',
    'presume',
    'presuming',
    'preteen',
    'pretended',
    'pretender',
    'pretense',
    'pretext',
    'pretty',
    'pretzel',
    'prevail',
    'prevalent',
    'prevent',
    'preview',
    'previous',
    'prewar',
    'prewashed',
    'prideful',
    'pried',
    'primal',
    'primarily',
    'primary',
    'primate',
    'primer',
    'primp',
    'princess',
    'print',
    'prior',
    'prism',
    'prison',
    'prissy',
    'pristine',
    'privacy',
    'private',
    'privatize',
    'prize',
    'proactive',
    'probable',
    'probably',
    'probation',
    'probe',
    'probing',
    'probiotic',
    'problem',
    'procedure',
    'process',
    'proclaim',
    'procreate',
    'procurer',
    'prodigal',
    'prodigy',
    'produce',
    'product',
    'profane',
    'profanity',
    'professed',
    'professor',
    'profile',
    'profound',
    'profusely',
    'progeny',
    'prognosis',
    'program',
    'progress',
    'projector',
    'prologue',
    'prolonged',
    'promenade',
    'prominent',
    'promoter',
    'promotion',
    'prompter',
    'promptly',
    'prone',
    'prong',
    'pronounce',
    'pronto',
    'proofing',
    'proofread',
    'proofs',
    'propeller',
    'properly',
    'property',
    'proponent',
    'proposal',
    'propose',
    'props',
    'prorate',
    'protector',
    'protegee',
    'proton',
    'prototype',
    'protozoan',
    'protract',
    'protrude',
    'proud',
    'provable',
    'proved',
    'proven',
    'provided',
    'provider',
    'providing',
    'province',
    'proving',
    'provoke',
    'provoking',
    'provolone',
    'prowess',
    'prowler',
    'prowling',
    'proximity',
    'proxy',
    'prozac',
    'prude',
    'prudishly',
    'prune',
    'pruning',
    'pry',
    'psychic',
    'public',
    'publisher',
    'pucker',
    'pueblo',
    'pug',
    'pull',
    'pulmonary',
    'pulp',
    'pulsate',
    'pulse',
    'pulverize',
    'puma',
    'pumice',
    'pummel',
    'punch',
    'punctual',
    'punctuate',
    'punctured',
    'pungent',
    'punisher',
    'punk',
    'pupil',
    'puppet',
    'puppy',
    'purchase',
    'pureblood',
    'purebred',
    'purely',
    'pureness',
    'purgatory',
    'purge',
    'purging',
    'purifier',
    'purify',
    'purist',
    'puritan',
    'purity',
    'purple',
    'purplish',
    'purposely',
    'purr',
    'purse',
    'pursuable',
    'pursuant',
    'pursuit',
    'purveyor',
    'pushcart',
    'pushchair',
    'pusher',
    'pushiness',
    'pushing',
    'pushover',
    'pushpin',
    'pushup',
    'pushy',
    'putdown',
    'putt',
    'puzzle',
    'puzzling',
    'pyramid',
    'pyromania',
    'python',
    'quack',
    'quadrant',
    'quail',
    'quaintly',
    'quake',
    'quaking',
    'qualified',
    'qualifier',
    'qualify',
    'quality',
    'qualm',
    'quantum',
    'quarrel',
    'quarry',
    'quartered',
    'quarterly',
    'quarters',
    'quartet',
    'quench',
    'query',
    'quicken',
    'quickly',
    'quickness',
    'quicksand',
    'quickstep',
    'quiet',
    'quill',
    'quilt',
    'quintet',
    'quintuple',
    'quirk',
    'quit',
    'quiver',
    'quizzical',
    'quotable',
    'quotation',
    'quote',
    'rabid',
    'race',
    'racing',
    'racism',
    'rack',
    'racoon',
    'radar',
    'radial',
    'radiance',
    'radiantly',
    'radiated',
    'radiation',
    'radiator',
    'radio',
    'radish',
    'raffle',
    'raft',
    'rage',
    'ragged',
    'raging',
    'ragweed',
    'raider',
    'railcar',
    'railing',
    'railroad',
    'railway',
    'raisin',
    'rake',
    'raking',
    'rally',
    'ramble',
    'rambling',
    'ramp',
    'ramrod',
    'ranch',
    'rancidity',
    'random',
    'ranged',
    'ranger',
    'ranging',
    'ranked',
    'ranking',
    'ransack',
    'ranting',
    'rants',
    'rare',
    'rarity',
    'rascal',
    'rash',
    'rasping',
    'ravage',
    'raven',
    'ravine',
    'raving',
    'ravioli',
    'ravishing',
    'reabsorb',
    'reach',
    'reacquire',
    'reaction',
    'reactive',
    'reactor',
    'reaffirm',
    'ream',
    'reanalyze',
    'reappear',
    'reapply',
    'reappoint',
    'reapprove',
    'rearrange',
    'rearview',
    'reason',
    'reassign',
    'reassure',
    'reattach',
    'reawake',
    'rebalance',
    'rebate',
    'rebel',
    'rebirth',
    'reboot',
    'reborn',
    'rebound',
    'rebuff',
    'rebuild',
    'rebuilt',
    'reburial',
    'rebuttal',
    'recall',
    'recant',
    'recapture',
    'recast',
    'recede',
    'recent',
    'recess',
    'recharger',
    'recipient',
    'recital',
    'recite',
    'reckless',
    'reclaim',
    'recliner',
    'reclining',
    'recluse',
    'reclusive',
    'recognize',
    'recoil',
    'recollect',
    'recolor',
    'reconcile',
    'reconfirm',
    'reconvene',
    'recopy',
    'record',
    'recount',
    'recoup',
    'recovery',
    'recreate',
    'rectal',
    'rectangle',
    'rectified',
    'rectify',
    'recycled',
    'recycler',
    'recycling',
    'reemerge',
    'reenact',
    'reenter',
    'reentry',
    'reexamine',
    'referable',
    'referee',
    'reference',
    'refill',
    'refinance',
    'refined',
    'refinery',
    'refining',
    'refinish',
    'reflected',
    'reflector',
    'reflex',
    'reflux',
    'refocus',
    'refold',
    'reforest',
    'reformat',
    'reformed',
    'reformer',
    'reformist',
    'refract',
    'refrain',
    'refreeze',
    'refresh',
    'refried',
    'refueling',
    'refund',
    'refurbish',
    'refurnish',
    'refusal',
    'refuse',
    'refusing',
    'refutable',
    'refute',
    'regain',
    'regalia',
    'regally',
    'reggae',
    'regime',
    'region',
    'register',
    'registrar',
    'registry',
    'regress',
    'regretful',
    'regroup',
    'regular',
    'regulate',
    'regulator',
    'rehab',
    'reheat',
    'rehire',
    'rehydrate',
    'reimburse',
    'reissue',
    'reiterate',
    'rejoice',
    'rejoicing',
    'rejoin',
    'rekindle',
    'relapse',
    'relapsing',
    'relatable',
    'related',
    'relation',
    'relative',
    'relax',
    'relay',
    'relearn',
    'release',
    'relenting',
    'reliable',
    'reliably',
    'reliance',
    'reliant',
    'relic',
    'relieve',
    'relieving',
    'relight',
    'relish',
    'relive',
    'reload',
    'relocate',
    'relock',
    'reluctant',
    'rely',
    'remake',
    'remark',
    'remarry',
    'rematch',
    'remedial',
    'remedy',
    'remember',
    'reminder',
    'remindful',
    'remission',
    'remix',
    'remnant',
    'remodeler',
    'remold',
    'remorse',
    'remote',
    'removable',
    'removal',
    'removed',
    'remover',
    'removing',
    'rename',
    'renderer',
    'rendering',
    'rendition',
    'renegade',
    'renewable',
    'renewably',
    'renewal',
    'renewed',
    'renounce',
    'renovate',
    'renovator',
    'rentable',
    'rental',
    'rented',
    'renter',
    'reoccupy',
    'reoccur',
    'reopen',
    'reorder',
    'repackage',
    'repacking',
    'repaint',
    'repair',
    'repave',
    'repaying',
    'repayment',
    'repeal',
    'repeated',
    'repeater',
    'repent',
    'rephrase',
    'replace',
    'replay',
    'replica',
    'reply',
    'reporter',
    'repose',
    'repossess',
    'repost',
    'repressed',
    'reprimand',
    'reprint',
    'reprise',
    'reproach',
    'reprocess',
    'reproduce',
    'reprogram',
    'reps',
    'reptile',
    'reptilian',
    'repugnant',
    'repulsion',
    'repulsive',
    'repurpose',
    'reputable',
    'reputably',
    'request',
    'require',
    'requisite',
    'reroute',
    'rerun',
    'resale',
    'resample',
    'rescuer',
    'reseal',
    'research',
    'reselect',
    'reseller',
    'resemble',
    'resend',
    'resent',
    'reset',
    'reshape',
    'reshoot',
    'reshuffle',
    'residence',
    'residency',
    'resident',
    'residual',
    'residue',
    'resigned',
    'resilient',
    'resistant',
    'resisting',
    'resize',
    'resolute',
    'resolved',
    'resonant',
    'resonate',
    'resort',
    'resource',
    'respect',
    'resubmit',
    'result',
    'resume',
    'resupply',
    'resurface',
    'resurrect',
    'retail',
    'retainer',
    'retaining',
    'retake',
    'retaliate',
    'retention',
    'rethink',
    'retinal',
    'retired',
    'retiree',
    'retiring',
    'retold',
    'retool',
    'retorted',
    'retouch',
    'retrace',
    'retract',
    'retrain',
    'retread',
    'retreat',
    'retrial',
    'retrieval',
    'retriever',
    'retry',
    'return',
    'retying',
    'retype',
    'reunion',
    'reunite',
    'reusable',
    'reuse',
    'reveal',
    'reveler',
    'revenge',
    'revenue',
    'reverb',
    'revered',
    'reverence',
    'reverend',
    'reversal',
    'reverse',
    'reversing',
    'reversion',
    'revert',
    'revisable',
    'revise',
    'revision',
    'revisit',
    'revivable',
    'revival',
    'reviver',
    'reviving',
    'revocable',
    'revoke',
    'revolt',
    'revolver',
    'revolving',
    'reward',
    'rewash',
    'rewind',
    'rewire',
    'reword',
    'rework',
    'rewrap',
    'rewrite',
    'rhyme',
    'ribbon',
    'ribcage',
    'rice',
    'riches',
    'richly',
    'richness',
    'rickety',
    'ricotta',
    'riddance',
    'ridden',
    'ride',
    'riding',
    'rifling',
    'rift',
    'rigging',
    'rigid',
    'rigor',
    'rimless',
    'rimmed',
    'rind',
    'rink',
    'rinse',
    'rinsing',
    'riot',
    'ripcord',
    'ripeness',
    'ripening',
    'ripping',
    'ripple',
    'rippling',
    'riptide',
    'rise',
    'rising',
    'risk',
    'risotto',
    'ritalin',
    'ritzy',
    'rival',
    'riverbank',
    'riverbed',
    'riverboat',
    'riverside',
    'riveter',
    'riveting',
    'roamer',
    'roaming',
    'roast',
    'robbing',
    'robe',
    'robin',
    'robotics',
    'robust',
    'rockband',
    'rocker',
    'rocket',
    'rockfish',
    'rockiness',
    'rocking',
    'rocklike',
    'rockslide',
    'rockstar',
    'rocky',
    'rogue',
    'roman',
    'romp',
    'rope',
    'roping',
    'roster',
    'rosy',
    'rotten',
    'rotting',
    'rotunda',
    'roulette',
    'rounding',
    'roundish',
    'roundness',
    'roundup',
    'roundworm',
    'routine',
    'routing',
    'rover',
    'roving',
    'royal',
    'rubbed',
    'rubber',
    'rubbing',
    'rubble',
    'rubdown',
    'ruby',
    'ruckus',
    'rudder',
    'rug',
    'ruined',
    'rule',
    'rumble',
    'rumbling',
    'rummage',
    'rumor',
    'runaround',
    'rundown',
    'runner',
    'running',
    'runny',
    'runt',
    'runway',
    'rupture',
    'rural',
    'ruse',
    'rush',
    'rust',
    'rut',
    'sabbath',
    'sabotage',
    'sacrament',
    'sacred',
    'sacrifice',
    'sadden',
    'saddlebag',
    'saddled',
    'saddling',
    'sadly',
    'sadness',
    'safari',
    'safeguard',
    'safehouse',
    'safely',
    'safeness',
    'saffron',
    'saga',
    'sage',
    'sagging',
    'saggy',
    'said',
    'saint',
    'sake',
    'salad',
    'salami',
    'salaried',
    'salary',
    'saline',
    'salon',
    'saloon',
    'salsa',
    'salt',
    'salutary',
    'salute',
    'salvage',
    'salvaging',
    'salvation',
    'same',
    'sample',
    'sampling',
    'sanction',
    'sanctity',
    'sanctuary',
    'sandal',
    'sandbag',
    'sandbank',
    'sandbar',
    'sandblast',
    'sandbox',
    'sanded',
    'sandfish',
    'sanding',
    'sandlot',
    'sandpaper',
    'sandpit',
    'sandstone',
    'sandstorm',
    'sandworm',
    'sandy',
    'sanitary',
    'sanitizer',
    'sank',
    'santa',
    'sapling',
    'sappiness',
    'sappy',
    'sarcasm',
    'sarcastic',
    'sardine',
    'sash',
    'sasquatch',
    'sassy',
    'satchel',
    'satiable',
    'satin',
    'satirical',
    'satisfied',
    'satisfy',
    'saturate',
    'saturday',
    'sauciness',
    'saucy',
    'sauna',
    'savage',
    'savanna',
    'saved',
    'savings',
    'savior',
    'savor',
    'saxophone',
    'say',
    'scabbed',
    'scabby',
    'scalded',
    'scalding',
    'scale',
    'scaling',
    'scallion',
    'scallop',
    'scalping',
    'scam',
    'scandal',
    'scanner',
    'scanning',
    'scant',
    'scapegoat',
    'scarce',
    'scarcity',
    'scarecrow',
    'scared',
    'scarf',
    'scarily',
    'scariness',
    'scarring',
    'scary',
    'scavenger',
    'scenic',
    'schedule',
    'schematic',
    'scheme',
    'scheming',
    'schilling',
    'schnapps',
    'scholar',
    'science',
    'scientist',
    'scion',
    'scoff',
    'scolding',
    'scone',
    'scoop',
    'scooter',
    'scope',
    'scorch',
    'scorebook',
    'scorecard',
    'scored',
    'scoreless',
    'scorer',
    'scoring',
    'scorn',
    'scorpion',
    'scotch',
    'scoundrel',
    'scoured',
    'scouring',
    'scouting',
    'scouts',
    'scowling',
    'scrabble',
    'scraggly',
    'scrambled',
    'scrambler',
    'scrap',
    'scratch',
    'scrawny',
    'screen',
    'scribble',
    'scribe',
    'scribing',
    'scrimmage',
    'script',
    'scroll',
    'scrooge',
    'scrounger',
    'scrubbed',
    'scrubber',
    'scruffy',
    'scrunch',
    'scrutiny',
    'scuba',
    'scuff',
    'sculptor',
    'sculpture',
    'scurvy',
    'scuttle',
    'secluded',
    'secluding',
    'seclusion',
    'second',
    'secrecy',
    'secret',
    'sectional',
    'sector',
    'secular',
    'securely',
    'security',
    'sedan',
    'sedate',
    'sedation',
    'sedative',
    'sediment',
    'seduce',
    'seducing',
    'segment',
    'seismic',
    'seizing',
    'seldom',
    'selected',
    'selection',
    'selective',
    'selector',
    'self',
    'seltzer',
    'semantic',
    'semester',
    'semicolon',
    'semifinal',
    'seminar',
    'semisoft',
    'semisweet',
    'senate',
    'senator',
    'send',
    'senior',
    'senorita',
    'sensation',
    'sensitive',
    'sensitize',
    'sensually',
    'sensuous',
    'sepia',
    'september',
    'septic',
    'septum',
    'sequel',
    'sequence',
    'sequester',
    'series',
    'sermon',
    'serotonin',
    'serpent',
    'serrated',
    'serve',
    'service',
    'serving',
    'sesame',
    'sessions',
    'setback',
    'setting',
    'settle',
    'settling',
    'setup',
    'sevenfold',
    'seventeen',
    'seventh',
    'seventy',
    'severity',
    'shabby',
    'shack',
    'shaded',
    'shadily',
    'shadiness',
    'shading',
    'shadow',
    'shady',
    'shaft',
    'shakable',
    'shakily',
    'shakiness',
    'shaking',
    'shaky',
    'shale',
    'shallot',
    'shallow',
    'shame',
    'shampoo',
    'shamrock',
    'shank',
    'shanty',
    'shape',
    'shaping',
    'share',
    'sharpener',
    'sharper',
    'sharpie',
    'sharply',
    'sharpness',
    'shawl',
    'sheath',
    'shed',
    'sheep',
    'sheet',
    'shelf',
    'shell',
    'shelter',
    'shelve',
    'shelving',
    'sherry',
    'shield',
    'shifter',
    'shifting',
    'shiftless',
    'shifty',
    'shimmer',
    'shimmy',
    'shindig',
    'shine',
    'shingle',
    'shininess',
    'shining',
    'shiny',
    'ship',
    'shirt',
    'shivering',
    'shock',
    'shone',
    'shoplift',
    'shopper',
    'shopping',
    'shoptalk',
    'shore',
    'shortage',
    'shortcake',
    'shortcut',
    'shorten',
    'shorter',
    'shorthand',
    'shortlist',
    'shortly',
    'shortness',
    'shorts',
    'shortwave',
    'shorty',
    'shout',
    'shove',
    'showbiz',
    'showcase',
    'showdown',
    'shower',
    'showgirl',
    'showing',
    'showman',
    'shown',
    'showoff',
    'showpiece',
    'showplace',
    'showroom',
    'showy',
    'shrank',
    'shrapnel',
    'shredder',
    'shredding',
    'shrewdly',
    'shriek',
    'shrill',
    'shrimp',
    'shrine',
    'shrink',
    'shrivel',
    'shrouded',
    'shrubbery',
    'shrubs',
    'shrug',
    'shrunk',
    'shucking',
    'shudder',
    'shuffle',
    'shuffling',
    'shun',
    'shush',
    'shut',
    'shy',
    'siamese',
    'siberian',
    'sibling',
    'siding',
    'sierra',
    'siesta',
    'sift',
    'sighing',
    'silenced',
    'silencer',
    'silent',
    'silica',
    'silicon',
    'silk',
    'silliness',
    'silly',
    'silo',
    'silt',
    'silver',
    'similarly',
    'simile',
    'simmering',
    'simple',
    'simplify',
    'simply',
    'sincere',
    'sincerity',
    'singer',
    'singing',
    'single',
    'singular',
    'sinister',
    'sinless',
    'sinner',
    'sinuous',
    'sip',
    'siren',
    'sister',
    'sitcom',
    'sitter',
    'sitting',
    'situated',
    'situation',
    'sixfold',
    'sixteen',
    'sixth',
    'sixties',
    'sixtieth',
    'sixtyfold',
    'sizable',
    'sizably',
    'size',
    'sizing',
    'sizzle',
    'sizzling',
    'skater',
    'skating',
    'skedaddle',
    'skeletal',
    'skeleton',
    'skeptic',
    'sketch',
    'skewed',
    'skewer',
    'skid',
    'skied',
    'skier',
    'skies',
    'skiing',
    'skilled',
    'skillet',
    'skillful',
    'skimmed',
    'skimmer',
    'skimming',
    'skimpily',
    'skincare',
    'skinhead',
    'skinless',
    'skinning',
    'skinny',
    'skintight',
    'skipper',
    'skipping',
    'skirmish',
    'skirt',
    'skittle',
    'skydiver',
    'skylight',
    'skyline',
    'skype',
    'skyrocket',
    'skyward',
    'slab',
    'slacked',
    'slacker',
    'slacking',
    'slackness',
    'slacks',
    'slain',
    'slam',
    'slander',
    'slang',
    'slapping',
    'slapstick',
    'slashed',
    'slashing',
    'slate',
    'slather',
    'slaw',
    'sled',
    'sleek',
    'sleep',
    'sleet',
    'sleeve',
    'slept',
    'sliceable',
    'sliced',
    'slicer',
    'slicing',
    'slick',
    'slider',
    'slideshow',
    'sliding',
    'slighted',
    'slighting',
    'slightly',
    'slimness',
    'slimy',
    'slinging',
    'slingshot',
    'slinky',
    'slip',
    'slit',
    'sliver',
    'slobbery',
    'slogan',
    'sloped',
    'sloping',
    'sloppily',
    'sloppy',
    'slot',
    'slouching',
    'slouchy',
    'sludge',
    'slug',
    'slum',
    'slurp',
    'slush',
    'sly',
    'small',
    'smartly',
    'smartness',
    'smasher',
    'smashing',
    'smashup',
    'smell',
    'smelting',
    'smile',
    'smilingly',
    'smirk',
    'smite',
    'smith',
    'smitten',
    'smock',
    'smog',
    'smoked',
    'smokeless',
    'smokiness',
    'smoking',
    'smoky',
    'smolder',
    'smooth',
    'smother',
    'smudge',
    'smudgy',
    'smuggler',
    'smuggling',
    'smugly',
    'smugness',
    'snack',
    'snagged',
    'snaking',
    'snap',
    'snare',
    'snarl',
    'snazzy',
    'sneak',
    'sneer',
    'sneeze',
    'sneezing',
    'snide',
    'sniff',
    'snippet',
    'snipping',
    'snitch',
    'snooper',
    'snooze',
    'snore',
    'snoring',
    'snorkel',
    'snort',
    'snout',
    'snowbird',
    'snowboard',
    'snowbound',
    'snowcap',
    'snowdrift',
    'snowdrop',
    'snowfall',
    'snowfield',
    'snowflake',
    'snowiness',
    'snowless',
    'snowman',
    'snowplow',
    'snowshoe',
    'snowstorm',
    'snowsuit',
    'snowy',
    'snub',
    'snuff',
    'snuggle',
    'snugly',
    'snugness',
    'speak',
    'spearfish',
    'spearhead',
    'spearman',
    'spearmint',
    'species',
    'specimen',
    'specked',
    'speckled',
    'specks',
    'spectacle',
    'spectator',
    'spectrum',
    'speculate',
    'speech',
    'speed',
    'spellbind',
    'speller',
    'spelling',
    'spendable',
    'spender',
    'spending',
    'spent',
    'spew',
    'sphere',
    'spherical',
    'sphinx',
    'spider',
    'spied',
    'spiffy',
    'spill',
    'spilt',
    'spinach',
    'spinal',
    'spindle',
    'spinner',
    'spinning',
    'spinout',
    'spinster',
    'spiny',
    'spiral',
    'spirited',
    'spiritism',
    'spirits',
    'spiritual',
    'splashed',
    'splashing',
    'splashy',
    'splatter',
    'spleen',
    'splendid',
    'splendor',
    'splice',
    'splicing',
    'splinter',
    'splotchy',
    'splurge',
    'spoilage',
    'spoiled',
    'spoiler',
    'spoiling',
    'spoils',
    'spoken',
    'spokesman',
    'sponge',
    'spongy',
    'sponsor',
    'spoof',
    'spookily',
    'spooky',
    'spool',
    'spoon',
    'spore',
    'sporting',
    'sports',
    'sporty',
    'spotless',
    'spotlight',
    'spotted',
    'spotter',
    'spotting',
    'spotty',
    'spousal',
    'spouse',
    'spout',
    'sprain',
    'sprang',
    'sprawl',
    'spray',
    'spree',
    'sprig',
    'spring',
    'sprinkled',
    'sprinkler',
    'sprint',
    'sprite',
    'sprout',
    'spruce',
    'sprung',
    'spry',
    'spud',
    'spur',
    'sputter',
    'spyglass',
    'squabble',
    'squad',
    'squall',
    'squander',
    'squash',
    'squatted',
    'squatter',
    'squatting',
    'squeak',
    'squealer',
    'squealing',
    'squeamish',
    'squeegee',
    'squeeze',
    'squeezing',
    'squid',
    'squiggle',
    'squiggly',
    'squint',
    'squire',
    'squirt',
    'squishier',
    'squishy',
    'stability',
    'stabilize',
    'stable',
    'stack',
    'stadium',
    'staff',
    'stage',
    'staging',
    'stagnant',
    'stagnate',
    'stainable',
    'stained',
    'staining',
    'stainless',
    'stalemate',
    'staleness',
    'stalling',
    'stallion',
    'stamina',
    'stammer',
    'stamp',
    'stand',
    'stank',
    'staple',
    'stapling',
    'starboard',
    'starch',
    'stardom',
    'stardust',
    'starfish',
    'stargazer',
    'staring',
    'stark',
    'starless',
    'starlet',
    'starlight',
    'starlit',
    'starring',
    'starry',
    'starship',
    'starter',
    'starting',
    'startle',
    'startling',
    'startup',
    'starved',
    'starving',
    'stash',
    'state',
    'static',
    'statistic',
    'statue',
    'stature',
    'status',
    'statute',
    'statutory',
    'staunch',
    'stays',
    'steadfast',
    'steadier',
    'steadily',
    'steadying',
    'steam',
    'steed',
    'steep',
    'steerable',
    'steering',
    'steersman',
    'stegosaur',
    'stellar',
    'stem',
    'stench',
    'stencil',
    'step',
    'stereo',
    'sterile',
    'sterility',
    'sterilize',
    'sterling',
    'sternness',
    'sternum',
    'stew',
    'stick',
    'stiffen',
    'stiffly',
    'stiffness',
    'stifle',
    'stifling',
    'stillness',
    'stilt',
    'stimulant',
    'stimulate',
    'stimuli',
    'stimulus',
    'stinger',
    'stingily',
    'stinging',
    'stingray',
    'stingy',
    'stinking',
    'stinky',
    'stipend',
    'stipulate',
    'stir',
    'stitch',
    'stock',
    'stoic',
    'stoke',
    'stole',
    'stomp',
    'stonewall',
    'stoneware',
    'stonework',
    'stoning',
    'stony',
    'stood',
    'stooge',
    'stool',
    'stoop',
    'stoplight',
    'stoppable',
    'stoppage',
    'stopped',
    'stopper',
    'stopping',
    'stopwatch',
    'storable',
    'storage',
    'storeroom',
    'storewide',
    'storm',
    'stout',
    'stove',
    'stowaway',
    'stowing',
    'straddle',
    'straggler',
    'strained',
    'strainer',
    'straining',
    'strangely',
    'stranger',
    'strangle',
    'strategic',
    'strategy',
    'stratus',
    'straw',
    'stray',
    'streak',
    'stream',
    'street',
    'strength',
    'strenuous',
    'strep',
    'stress',
    'stretch',
    'strewn',
    'stricken',
    'strict',
    'stride',
    'strife',
    'strike',
    'striking',
    'strive',
    'striving',
    'strobe',
    'strode',
    'stroller',
    'strongbox',
    'strongly',
    'strongman',
    'struck',
    'structure',
    'strudel',
    'struggle',
    'strum',
    'strung',
    'strut',
    'stubbed',
    'stubble',
    'stubbly',
    'stubborn',
    'stucco',
    'stuck',
    'student',
    'studied',
    'studio',
    'study',
    'stuffed',
    'stuffing',
    'stuffy',
    'stumble',
    'stumbling',
    'stump',
    'stung',
    'stunned',
    'stunner',
    'stunning',
    'stunt',
    'stupor',
    'sturdily',
    'sturdy',
    'styling',
    'stylishly',
    'stylist',
    'stylized',
    'stylus',
    'suave',
    'subarctic',
    'subatomic',
    'subdivide',
    'subdued',
    'subduing',
    'subfloor',
    'subgroup',
    'subheader',
    'subject',
    'sublease',
    'sublet',
    'sublevel',
    'sublime',
    'submarine',
    'submerge',
    'submersed',
    'submitter',
    'subpanel',
    'subpar',
    'subplot',
    'subprime',
    'subscribe',
    'subscript',
    'subsector',
    'subside',
    'subsiding',
    'subsidize',
    'subsidy',
    'subsoil',
    'subsonic',
    'substance',
    'subsystem',
    'subtext',
    'subtitle',
    'subtly',
    'subtotal',
    'subtract',
    'subtype',
    'suburb',
    'subway',
    'subwoofer',
    'subzero',
    'succulent',
    'such',
    'suction',
    'sudden',
    'sudoku',
    'suds',
    'sufferer',
    'suffering',
    'suffice',
    'suffix',
    'suffocate',
    'suffrage',
    'sugar',
    'suggest',
    'suing',
    'suitable',
    'suitably',
    'suitcase',
    'suitor',
    'sulfate',
    'sulfide',
    'sulfite',
    'sulfur',
    'sulk',
    'sullen',
    'sulphate',
    'sulphuric',
    'sultry',
    'superbowl',
    'superglue',
    'superhero',
    'superior',
    'superjet',
    'superman',
    'supermom',
    'supernova',
    'supervise',
    'supper',
    'supplier',
    'supply',
    'support',
    'supremacy',
    'supreme',
    'surcharge',
    'surely',
    'sureness',
    'surface',
    'surfacing',
    'surfboard',
    'surfer',
    'surgery',
    'surgical',
    'surging',
    'surname',
    'surpass',
    'surplus',
    'surprise',
    'surreal',
    'surrender',
    'surrogate',
    'surround',
    'survey',
    'survival',
    'survive',
    'surviving',
    'survivor',
    'sushi',
    'suspect',
    'suspend',
    'suspense',
    'sustained',
    'sustainer',
    'swab',
    'swaddling',
    'swagger',
    'swampland',
    'swan',
    'swapping',
    'swarm',
    'sway',
    'swear',
    'sweat',
    'sweep',
    'swell',
    'swept',
    'swerve',
    'swifter',
    'swiftly',
    'swiftness',
    'swimmable',
    'swimmer',
    'swimming',
    'swimsuit',
    'swimwear',
    'swinger',
    'swinging',
    'swipe',
    'swirl',
    'switch',
    'swivel',
    'swizzle',
    'swooned',
    'swoop',
    'swoosh',
    'swore',
    'sworn',
    'swung',
    'sycamore',
    'sympathy',
    'symphonic',
    'symphony',
    'symptom',
    'synapse',
    'syndrome',
    'synergy',
    'synopses',
    'synopsis',
    'synthesis',
    'synthetic',
    'syrup',
    'system',
    't-shirt',
    'tabasco',
    'tabby',
    'tableful',
    'tables',
    'tablet',
    'tableware',
    'tabloid',
    'tackiness',
    'tacking',
    'tackle',
    'tackling',
    'tacky',
    'taco',
    'tactful',
    'tactical',
    'tactics',
    'tactile',
    'tactless',
    'tadpole',
    'taekwondo',
    'tag',
    'tainted',
    'take',
    'taking',
    'talcum',
    'talisman',
    'tall',
    'talon',
    'tamale',
    'tameness',
    'tamer',
    'tamper',
    'tank',
    'tanned',
    'tannery',
    'tanning',
    'tantrum',
    'tapeless',
    'tapered',
    'tapering',
    'tapestry',
    'tapioca',
    'tapping',
    'taps',
    'tarantula',
    'target',
    'tarmac',
    'tarnish',
    'tarot',
    'tartar',
    'tartly',
    'tartness',
    'task',
    'tassel',
    'taste',
    'tastiness',
    'tasting',
    'tasty',
    'tattered',
    'tattle',
    'tattling',
    'tattoo',
    'taunt',
    'tavern',
    'thank',
    'that',
    'thaw',
    'theater',
    'theatrics',
    'thee',
    'theft',
    'theme',
    'theology',
    'theorize',
    'thermal',
    'thermos',
    'thesaurus',
    'these',
    'thesis',
    'thespian',
    'thicken',
    'thicket',
    'thickness',
    'thieving',
    'thievish',
    'thigh',
    'thimble',
    'thing',
    'think',
    'thinly',
    'thinner',
    'thinness',
    'thinning',
    'thirstily',
    'thirsting',
    'thirsty',
    'thirteen',
    'thirty',
    'thong',
    'thorn',
    'those',
    'thousand',
    'thrash',
    'thread',
    'threaten',
    'threefold',
    'thrift',
    'thrill',
    'thrive',
    'thriving',
    'throat',
    'throbbing',
    'throng',
    'throttle',
    'throwaway',
    'throwback',
    'thrower',
    'throwing',
    'thud',
    'thumb',
    'thumping',
    'thursday',
    'thus',
    'thwarting',
    'thyself',
    'tiara',
    'tibia',
    'tidal',
    'tidbit',
    'tidiness',
    'tidings',
    'tidy',
    'tiger',
    'tighten',
    'tightly',
    'tightness',
    'tightrope',
    'tightwad',
    'tigress',
    'tile',
    'tiling',
    'till',
    'tilt',
    'timid',
    'timing',
    'timothy',
    'tinderbox',
    'tinfoil',
    'tingle',
    'tingling',
    'tingly',
    'tinker',
    'tinkling',
    'tinsel',
    'tinsmith',
    'tint',
    'tinwork',
    'tiny',
    'tipoff',
    'tipped',
    'tipper',
    'tipping',
    'tiptoeing',
    'tiptop',
    'tiring',
    'tissue',
    'trace',
    'tracing',
    'track',
    'traction',
    'tractor',
    'trade',
    'trading',
    'tradition',
    'traffic',
    'tragedy',
    'trailing',
    'trailside',
    'train',
    'traitor',
    'trance',
    'tranquil',
    'transfer',
    'transform',
    'translate',
    'transpire',
    'transport',
    'transpose',
    'trapdoor',
    'trapeze',
    'trapezoid',
    'trapped',
    'trapper',
    'trapping',
    'traps',
    'trash',
    'travel',
    'traverse',
    'travesty',
    'tray',
    'treachery',
    'treading',
    'treadmill',
    'treason',
    'treat',
    'treble',
    'tree',
    'trekker',
    'tremble',
    'trembling',
    'tremor',
    'trench',
    'trend',
    'trespass',
    'triage',
    'trial',
    'triangle',
    'tribesman',
    'tribunal',
    'tribune',
    'tributary',
    'tribute',
    'triceps',
    'trickery',
    'trickily',
    'tricking',
    'trickle',
    'trickster',
    'tricky',
    'tricolor',
    'tricycle',
    'trident',
    'tried',
    'trifle',
    'trifocals',
    'trillion',
    'trilogy',
    'trimester',
    'trimmer',
    'trimming',
    'trimness',
    'trinity',
    'trio',
    'tripod',
    'tripping',
    'triumph',
    'trivial',
    'trodden',
    'trolling',
    'trombone',
    'trophy',
    'tropical',
    'tropics',
    'trouble',
    'troubling',
    'trough',
    'trousers',
    'trout',
    'trowel',
    'truce',
    'truck',
    'truffle',
    'trump',
    'trunks',
    'trustable',
    'trustee',
    'trustful',
    'trusting',
    'trustless',
    'truth',
    'try',
    'tubby',
    'tubeless',
    'tubular',
    'tucking',
    'tuesday',
    'tug',
    'tuition',
    'tulip',
    'tumble',
    'tumbling',
    'tummy',
    'turban',
    'turbine',
    'turbofan',
    'turbojet',
    'turbulent',
    'turf',
    'turkey',
    'turmoil',
    'turret',
    'turtle',
    'tusk',
    'tutor',
    'tutu',
    'tux',
    'tweak',
    'tweed',
    'tweet',
    'tweezers',
    'twelve',
    'twentieth',
    'twenty',
    'twerp',
    'twice',
    'twiddle',
    'twiddling',
    'twig',
    'twilight',
    'twine',
    'twins',
    'twirl',
    'twistable',
    'twisted',
    'twister',
    'twisting',
    'twisty',
    'twitch',
    'twitter',
    'tycoon',
    'tying',
    'tyke',
    'udder',
    'ultimate',
    'ultimatum',
    'ultra',
    'umbilical',
    'umbrella',
    'umpire',
    'unabashed',
    'unable',
    'unadorned',
    'unadvised',
    'unafraid',
    'unaired',
    'unaligned',
    'unaltered',
    'unarmored',
    'unashamed',
    'unaudited',
    'unawake',
    'unaware',
    'unbaked',
    'unbalance',
    'unbeaten',
    'unbend',
    'unbent',
    'unbiased',
    'unbitten',
    'unblended',
    'unblessed',
    'unblock',
    'unbolted',
    'unbounded',
    'unboxed',
    'unbraided',
    'unbridle',
    'unbroken',
    'unbuckled',
    'unbundle',
    'unburned',
    'unbutton',
    'uncanny',
    'uncapped',
    'uncaring',
    'uncertain',
    'unchain',
    'unchanged',
    'uncharted',
    'uncheck',
    'uncivil',
    'unclad',
    'unclaimed',
    'unclamped',
    'unclasp',
    'uncle',
    'unclip',
    'uncloak',
    'unclog',
    'unclothed',
    'uncoated',
    'uncoiled',
    'uncolored',
    'uncombed',
    'uncommon',
    'uncooked',
    'uncork',
    'uncorrupt',
    'uncounted',
    'uncouple',
    'uncouth',
    'uncover',
    'uncross',
    'uncrown',
    'uncrushed',
    'uncured',
    'uncurious',
    'uncurled',
    'uncut',
    'undamaged',
    'undated',
    'undaunted',
    'undead',
    'undecided',
    'undefined',
    'underage',
    'underarm',
    'undercoat',
    'undercook',
    'undercut',
    'underdog',
    'underdone',
    'underfed',
    'underfeed',
    'underfoot',
    'undergo',
    'undergrad',
    'underhand',
    'underline',
    'underling',
    'undermine',
    'undermost',
    'underpaid',
    'underpass',
    'underpay',
    'underrate',
    'undertake',
    'undertone',
    'undertook',
    'undertow',
    'underuse',
    'underwear',
    'underwent',
    'underwire',
    'undesired',
    'undiluted',
    'undivided',
    'undocked',
    'undoing',
    'undone',
    'undrafted',
    'undress',
    'undrilled',
    'undusted',
    'undying',
    'unearned',
    'unearth',
    'unease',
    'uneasily',
    'uneasy',
    'uneatable',
    'uneaten',
    'unedited',
    'unelected',
    'unending',
    'unengaged',
    'unenvied',
    'unequal',
    'unethical',
    'uneven',
    'unexpired',
    'unexposed',
    'unfailing',
    'unfair',
    'unfasten',
    'unfazed',
    'unfeeling',
    'unfiled',
    'unfilled',
    'unfitted',
    'unfitting',
    'unfixable',
    'unfixed',
    'unflawed',
    'unfocused',
    'unfold',
    'unfounded',
    'unframed',
    'unfreeze',
    'unfrosted',
    'unfrozen',
    'unfunded',
    'unglazed',
    'ungloved',
    'unglue',
    'ungodly',
    'ungraded',
    'ungreased',
    'unguarded',
    'unguided',
    'unhappily',
    'unhappy',
    'unharmed',
    'unhealthy',
    'unheard',
    'unhearing',
    'unheated',
    'unhelpful',
    'unhidden',
    'unhinge',
    'unhitched',
    'unholy',
    'unhook',
    'unicorn',
    'unicycle',
    'unified',
    'unifier',
    'uniformed',
    'uniformly',
    'unify',
    'unimpeded',
    'uninjured',
    'uninstall',
    'uninsured',
    'uninvited',
    'union',
    'uniquely',
    'unisexual',
    'unison',
    'unissued',
    'unit',
    'universal',
    'universe',
    'unjustly',
    'unkempt',
    'unkind',
    'unknotted',
    'unknowing',
    'unknown',
    'unlaced',
    'unlatch',
    'unlawful',
    'unleaded',
    'unlearned',
    'unleash',
    'unless',
    'unleveled',
    'unlighted',
    'unlikable',
    'unlimited',
    'unlined',
    'unlinked',
    'unlisted',
    'unlit',
    'unlivable',
    'unloaded',
    'unloader',
    'unlocked',
    'unlocking',
    'unlovable',
    'unloved',
    'unlovely',
    'unloving',
    'unluckily',
    'unlucky',
    'unmade',
    'unmanaged',
    'unmanned',
    'unmapped',
    'unmarked',
    'unmasked',
    'unmasking',
    'unmatched',
    'unmindful',
    'unmixable',
    'unmixed',
    'unmolded',
    'unmoral',
    'unmovable',
    'unmoved',
    'unmoving',
    'unnamable',
    'unnamed',
    'unnatural',
    'unneeded',
    'unnerve',
    'unnerving',
    'unnoticed',
    'unopened',
    'unopposed',
    'unpack',
    'unpadded',
    'unpaid',
    'unpainted',
    'unpaired',
    'unpaved',
    'unpeeled',
    'unpicked',
    'unpiloted',
    'unpinned',
    'unplanned',
    'unplanted',
    'unpleased',
    'unpledged',
    'unplowed',
    'unplug',
    'unpopular',
    'unproven',
    'unquote',
    'unranked',
    'unrated',
    'unraveled',
    'unreached',
    'unread',
    'unreal',
    'unreeling',
    'unrefined',
    'unrelated',
    'unrented',
    'unrest',
    'unretired',
    'unrevised',
    'unrigged',
    'unripe',
    'unrivaled',
    'unroasted',
    'unrobed',
    'unroll',
    'unruffled',
    'unruly',
    'unrushed',
    'unsaddle',
    'unsafe',
    'unsaid',
    'unsalted',
    'unsaved',
    'unsavory',
    'unscathed',
    'unscented',
    'unscrew',
    'unsealed',
    'unseated',
    'unsecured',
    'unseeing',
    'unseemly',
    'unseen',
    'unselect',
    'unselfish',
    'unsent',
    'unsettled',
    'unshackle',
    'unshaken',
    'unshaved',
    'unshaven',
    'unsheathe',
    'unshipped',
    'unsightly',
    'unsigned',
    'unskilled',
    'unsliced',
    'unsmooth',
    'unsnap',
    'unsocial',
    'unsoiled',
    'unsold',
    'unsolved',
    'unsorted',
    'unspoiled',
    'unspoken',
    'unstable',
    'unstaffed',
    'unstamped',
    'unsteady',
    'unsterile',
    'unstirred',
    'unstitch',
    'unstopped',
    'unstuck',
    'unstuffed',
    'unstylish',
    'unsubtle',
    'unsubtly',
    'unsuited',
    'unsure',
    'unsworn',
    'untagged',
    'untainted',
    'untaken',
    'untamed',
    'untangled',
    'untapped',
    'untaxed',
    'unthawed',
    'unthread',
    'untidy',
    'untie',
    'until',
    'untimed',
    'untimely',
    'untitled',
    'untoasted',
    'untold',
    'untouched',
    'untracked',
    'untrained',
    'untreated',
    'untried',
    'untrimmed',
    'untrue',
    'untruth',
    'unturned',
    'untwist',
    'untying',
    'unusable',
    'unused',
    'unusual',
    'unvalued',
    'unvaried',
    'unvarying',
    'unveiled',
    'unveiling',
    'unvented',
    'unviable',
    'unvisited',
    'unvocal',
    'unwanted',
    'unwarlike',
    'unwary',
    'unwashed',
    'unwatched',
    'unweave',
    'unwed',
    'unwelcome',
    'unwell',
    'unwieldy',
    'unwilling',
    'unwind',
    'unwired',
    'unwitting',
    'unwomanly',
    'unworldly',
    'unworn',
    'unworried',
    'unworthy',
    'unwound',
    'unwoven',
    'unwrapped',
    'unwritten',
    'unzip',
    'upbeat',
    'upchuck',
    'upcoming',
    'upcountry',
    'update',
    'upfront',
    'upgrade',
    'upheaval',
    'upheld',
    'uphill',
    'uphold',
    'uplifted',
    'uplifting',
    'upload',
    'upon',
    'upper',
    'upright',
    'uprising',
    'upriver',
    'uproar',
    'uproot',
    'upscale',
    'upside',
    'upstage',
    'upstairs',
    'upstart',
    'upstate',
    'upstream',
    'upstroke',
    'upswing',
    'uptake',
    'uptight',
    'uptown',
    'upturned',
    'upward',
    'upwind',
    'uranium',
    'urban',
    'urchin',
    'urethane',
    'urgency',
    'urgent',
    'urging',
    'urologist',
    'urology',
    'usable',
    'usage',
    'useable',
    'used',
    'uselessly',
    'user',
    'usher',
    'usual',
    'utensil',
    'utility',
    'utilize',
    'utmost',
    'utopia',
    'utter',
    'vacancy',
    'vacant',
    'vacate',
    'vacation',
    'vagabond',
    'vagrancy',
    'vagrantly',
    'vaguely',
    'vagueness',
    'valiant',
    'valid',
    'valium',
    'valley',
    'valuables',
    'value',
    'vanilla',
    'vanish',
    'vanity',
    'vanquish',
    'vantage',
    'vaporizer',
    'variable',
    'variably',
    'varied',
    'variety',
    'various',
    'varmint',
    'varnish',
    'varsity',
    'varying',
    'vascular',
    'vaseline',
    'vastly',
    'vastness',
    'veal',
    'vegan',
    'veggie',
    'vehicular',
    'velcro',
    'velocity',
    'velvet',
    'vendetta',
    'vending',
    'vendor',
    'veneering',
    'vengeful',
    'venomous',
    'ventricle',
    'venture',
    'venue',
    'venus',
    'verbalize',
    'verbally',
    'verbose',
    'verdict',
    'verify',
    'verse',
    'version',
    'versus',
    'vertebrae',
    'vertical',
    'vertigo',
    'very',
    'vessel',
    'vest',
    'veteran',
    'veto',
    'vexingly',
    'viability',
    'viable',
    'vibes',
    'vice',
    'vicinity',
    'victory',
    'video',
    'viewable',
    'viewer',
    'viewing',
    'viewless',
    'viewpoint',
    'vigorous',
    'village',
    'villain',
    'vindicate',
    'vineyard',
    'vintage',
    'violate',
    'violation',
    'violator',
    'violet',
    'violin',
    'viper',
    'viral',
    'virtual',
    'virtuous',
    'virus',
    'visa',
    'viscosity',
    'viscous',
    'viselike',
    'visible',
    'visibly',
    'vision',
    'visiting',
    'visitor',
    'visor',
    'vista',
    'vitality',
    'vitalize',
    'vitally',
    'vitamins',
    'vivacious',
    'vividly',
    'vividness',
    'vixen',
    'vocalist',
    'vocalize',
    'vocally',
    'vocation',
    'voice',
    'voicing',
    'void',
    'volatile',
    'volley',
    'voltage',
    'volumes',
    'voter',
    'voting',
    'voucher',
    'vowed',
    'vowel',
    'voyage',
    'wackiness',
    'wad',
    'wafer',
    'waffle',
    'waged',
    'wager',
    'wages',
    'waggle',
    'wagon',
    'wake',
    'waking',
    'walk',
    'walmart',
    'walnut',
    'walrus',
    'waltz',
    'wand',
    'wannabe',
    'wanted',
    'wanting',
    'wasabi',
    'washable',
    'washbasin',
    'washboard',
    'washbowl',
    'washcloth',
    'washday',
    'washed',
    'washer',
    'washhouse',
    'washing',
    'washout',
    'washroom',
    'washstand',
    'washtub',
    'wasp',
    'wasting',
    'watch',
    'water',
    'waviness',
    'waving',
    'wavy',
    'whacking',
    'whacky',
    'wham',
    'wharf',
    'wheat',
    'whenever',
    'whiff',
    'whimsical',
    'whinny',
    'whiny',
    'whisking',
    'whoever',
    'whole',
    'whomever',
    'whoopee',
    'whooping',
    'whoops',
    'why',
    'wick',
    'widely',
    'widen',
    'widget',
    'widow',
    'width',
    'wieldable',
    'wielder',
    'wife',
    'wifi',
    'wikipedia',
    'wildcard',
    'wildcat',
    'wilder',
    'wildfire',
    'wildfowl',
    'wildland',
    'wildlife',
    'wildly',
    'wildness',
    'willed',
    'willfully',
    'willing',
    'willow',
    'willpower',
    'wilt',
    'wimp',
    'wince',
    'wincing',
    'wind',
    'wing',
    'winking',
    'winner',
    'winnings',
    'winter',
    'wipe',
    'wired',
    'wireless',
    'wiring',
    'wiry',
    'wisdom',
    'wise',
    'wish',
    'wisplike',
    'wispy',
    'wistful',
    'wizard',
    'wobble',
    'wobbling',
    'wobbly',
    'wok',
    'wolf',
    'wolverine',
    'womanhood',
    'womankind',
    'womanless',
    'womanlike',
    'womanly',
    'womb',
    'woof',
    'wooing',
    'wool',
    'woozy',
    'word',
    'work',
    'worried',
    'worrier',
    'worrisome',
    'worry',
    'worsening',
    'worshiper',
    'worst',
    'wound',
    'woven',
    'wow',
    'wrangle',
    'wrath',
    'wreath',
    'wreckage',
    'wrecker',
    'wrecking',
    'wrench',
    'wriggle',
    'wriggly',
    'wrinkle',
    'wrinkly',
    'wrist',
    'writing',
    'written',
    'wrongdoer',
    'wronged',
    'wrongful',
    'wrongly',
    'wrongness',
    'wrought',
    'xbox',
    'xerox',
    'yahoo',
    'yam',
    'yanking',
    'yapping',
    'yard',
    'yarn',
    'yeah',
    'yearbook',
    'yearling',
    'yearly',
    'yearning',
    'yeast',
    'yelling',
    'yelp',
    'yen',
    'yesterday',
    'yiddish',
    'yield',
    'yin',
    'yippee',
    'yo-yo',
    'yodel',
    'yoga',
    'yogurt',
    'yonder',
    'yoyo',
    'yummy',
    'zap',
    'zealous',
    'zebra',
    'zen',
    'zeppelin',
    'zero',
    'zestfully',
    'zesty',
    'zigzagged',
    'zipfile',
    'zipping',
    'zippy',
    'zips',
    'zit',
    'zodiac',
    'zombie',
    'zone',
    'zoning',
    'zookeeper',
    'zoologist',
    'zoology',
    'zoom',
];

// CONCATENATED MODULE: ./jslib/src/services/crypto.service.ts
var crypto_service_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var crypto_service_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var crypto_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const crypto_service_Keys = {
    key: 'key',
    encOrgKeys: 'encOrgKeys',
    encPrivateKey: 'encPrivateKey',
    encKey: 'encKey',
    keyHash: 'keyHash',
};
const crypto_service_0 = () => 'getEncKey', ɵ1 = () => 'getOrgKeys';
class crypto_service_CryptoService {
    constructor(storageService, secureStorageService, cryptoFunctionService) {
        this.storageService = storageService;
        this.secureStorageService = secureStorageService;
        this.cryptoFunctionService = cryptoFunctionService;
    }
    setKey(key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            this.key = key;
            const option = yield this.storageService.get(constants_service["a" /* ConstantsService */].lockOptionKey);
            if (option != null) {
                // if we have a lock option set, we do not store the key
                return;
            }
            return this.secureStorageService.save(crypto_service_Keys.key, key.keyB64);
        });
    }
    setKeyHash(keyHash) {
        this.keyHash = keyHash;
        return this.storageService.save(crypto_service_Keys.keyHash, keyHash);
    }
    setEncKey(encKey) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (encKey == null) {
                return;
            }
            yield this.storageService.save(crypto_service_Keys.encKey, encKey);
            this.encKey = null;
        });
    }
    setEncPrivateKey(encPrivateKey) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (encPrivateKey == null) {
                return;
            }
            yield this.storageService.save(crypto_service_Keys.encPrivateKey, encPrivateKey);
            this.privateKey = null;
        });
    }
    setOrgKeys(orgs) {
        const orgKeys = {};
        orgs.forEach((org) => {
            orgKeys[org.id] = org.key;
        });
        this.orgKeys = null;
        return this.storageService.save(crypto_service_Keys.encOrgKeys, orgKeys);
    }
    getKey() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (this.key != null) {
                return this.key;
            }
            const key = yield this.secureStorageService.get(crypto_service_Keys.key);
            if (key != null) {
                this.key = new symmetricCryptoKey["a" /* SymmetricCryptoKey */](utils["a" /* Utils */].fromB64ToArray(key).buffer);
            }
            return key == null ? null : this.key;
        });
    }
    getKeyHash() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (this.keyHash != null) {
                return this.keyHash;
            }
            const keyHash = yield this.storageService.get(crypto_service_Keys.keyHash);
            if (keyHash != null) {
                this.keyHash = keyHash;
            }
            return keyHash == null ? null : this.keyHash;
        });
    }
    getEncKey(key = null) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (this.encKey != null) {
                return this.encKey;
            }
            const encKey = yield this.storageService.get(crypto_service_Keys.encKey);
            if (encKey == null) {
                return null;
            }
            if (key == null) {
                key = yield this.getKey();
            }
            if (key == null) {
                return null;
            }
            let decEncKey;
            const encKeyCipher = new domain_cipherString["a" /* CipherString */](encKey);
            if (encKeyCipher.encryptionType === encryptionType["a" /* EncryptionType */].AesCbc256_B64) {
                decEncKey = yield this.decryptToBytes(encKeyCipher, key);
            }
            else if (encKeyCipher.encryptionType === encryptionType["a" /* EncryptionType */].AesCbc256_HmacSha256_B64) {
                const newKey = yield this.stretchKey(key);
                decEncKey = yield this.decryptToBytes(encKeyCipher, newKey);
            }
            else {
                throw new Error('Unsupported encKey type.');
            }
            if (decEncKey == null) {
                return null;
            }
            this.encKey = new symmetricCryptoKey["a" /* SymmetricCryptoKey */](decEncKey);
            return this.encKey;
        });
    }
    getPublicKey() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (this.publicKey != null) {
                return this.publicKey;
            }
            const privateKey = yield this.getPrivateKey();
            if (privateKey == null) {
                return null;
            }
            this.publicKey = yield this.cryptoFunctionService.rsaExtractPublicKey(privateKey);
            return this.publicKey;
        });
    }
    getPrivateKey() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (this.privateKey != null) {
                return this.privateKey;
            }
            const encPrivateKey = yield this.storageService.get(crypto_service_Keys.encPrivateKey);
            if (encPrivateKey == null) {
                return null;
            }
            this.privateKey = yield this.decryptToBytes(new domain_cipherString["a" /* CipherString */](encPrivateKey), null);
            return this.privateKey;
        });
    }
    getFingerprint(userId, publicKey) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (publicKey == null) {
                publicKey = yield this.getPublicKey();
            }
            if (publicKey === null) {
                throw new Error('No public key available.');
            }
            const keyFingerprint = yield this.cryptoFunctionService.hash(publicKey, 'sha256');
            const userFingerprint = yield this.hkdfExpand(keyFingerprint, utils["a" /* Utils */].fromUtf8ToArray(userId), 32);
            return this.hashPhrase(userFingerprint.buffer);
        });
    }
    getOrgKeys() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (this.orgKeys != null && this.orgKeys.size > 0) {
                return this.orgKeys;
            }
            const encOrgKeys = yield this.storageService.get(crypto_service_Keys.encOrgKeys);
            if (encOrgKeys == null) {
                return null;
            }
            const orgKeys = new Map();
            let setKey = false;
            for (const orgId in encOrgKeys) {
                if (!encOrgKeys.hasOwnProperty(orgId)) {
                    continue;
                }
                const decValue = yield this.rsaDecrypt(encOrgKeys[orgId]);
                orgKeys.set(orgId, new symmetricCryptoKey["a" /* SymmetricCryptoKey */](decValue));
                setKey = true;
            }
            if (setKey) {
                this.orgKeys = orgKeys;
            }
            return this.orgKeys;
        });
    }
    getOrgKey(orgId) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (orgId == null) {
                return null;
            }
            const orgKeys = yield this.getOrgKeys();
            if (orgKeys == null || !orgKeys.has(orgId)) {
                return null;
            }
            return orgKeys.get(orgId);
        });
    }
    hasKey() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            return (yield this.getKey()) != null;
        });
    }
    hasEncKey() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const encKey = yield this.storageService.get(crypto_service_Keys.encKey);
            return encKey != null;
        });
    }
    clearKey() {
        this.key = this.legacyEtmKey = null;
        return this.secureStorageService.remove(crypto_service_Keys.key);
    }
    clearKeyHash() {
        this.keyHash = null;
        return this.storageService.remove(crypto_service_Keys.keyHash);
    }
    clearEncKey(memoryOnly) {
        this.encKey = null;
        if (memoryOnly) {
            return Promise.resolve();
        }
        return this.storageService.remove(crypto_service_Keys.encKey);
    }
    clearKeyPair(memoryOnly) {
        this.privateKey = null;
        this.publicKey = null;
        if (memoryOnly) {
            return Promise.resolve();
        }
        return this.storageService.remove(crypto_service_Keys.encPrivateKey);
    }
    clearOrgKeys(memoryOnly) {
        this.orgKeys = null;
        if (memoryOnly) {
            return Promise.resolve();
        }
        return this.storageService.remove(crypto_service_Keys.encOrgKeys);
    }
    clearPinProtectedKey() {
        return this.storageService.remove(constants_service["a" /* ConstantsService */].pinProtectedKey);
    }
    clearKeys() {
        return Promise.all([
            this.clearKey(),
            this.clearKeyHash(),
            this.clearOrgKeys(),
            this.clearEncKey(),
            this.clearKeyPair(),
            this.clearPinProtectedKey(),
        ]);
    }
    toggleKey() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const key = yield this.getKey();
            const option = yield this.storageService.get(constants_service["a" /* ConstantsService */].lockOptionKey);
            if (option != null || option === 0) {
                // if we have a lock option set, clear the key
                yield this.clearKey();
                this.key = key;
                return;
            }
            yield this.setKey(key);
        });
    }
    makeKey(password, salt, kdf, kdfIterations) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            let key = null;
            if (kdf == null || kdf === kdfType["a" /* KdfType */].PBKDF2_SHA256) {
                if (kdfIterations == null) {
                    kdfIterations = 5000;
                }
                else if (kdfIterations < 5000) {
                    throw new Error('PBKDF2 iteration minimum is 5000.');
                }
                key = yield this.cryptoFunctionService.pbkdf2(password, salt, 'sha256', kdfIterations);
            }
            else {
                throw new Error('Unknown Kdf.');
            }
            return new symmetricCryptoKey["a" /* SymmetricCryptoKey */](key);
        });
    }
    makeKeyFromPin(pin, salt, kdf, kdfIterations, protectedKeyCs = null) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (protectedKeyCs == null) {
                const pinProtectedKey = yield this.storageService.get(constants_service["a" /* ConstantsService */].pinProtectedKey);
                if (pinProtectedKey == null) {
                    throw new Error('No PIN protected key found.');
                }
                protectedKeyCs = new domain_cipherString["a" /* CipherString */](pinProtectedKey);
            }
            const pinKey = yield this.makePinKey(pin, salt, kdf, kdfIterations);
            const decKey = yield this.decryptToBytes(protectedKeyCs, pinKey);
            return new symmetricCryptoKey["a" /* SymmetricCryptoKey */](decKey);
        });
    }
    makeShareKey() {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const shareKey = yield this.cryptoFunctionService.randomBytes(64);
            const publicKey = yield this.getPublicKey();
            const encShareKey = yield this.rsaEncrypt(shareKey, publicKey);
            return [encShareKey, new symmetricCryptoKey["a" /* SymmetricCryptoKey */](shareKey)];
        });
    }
    makeKeyPair(key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const keyPair = yield this.cryptoFunctionService.rsaGenerateKeyPair(2048);
            const publicB64 = utils["a" /* Utils */].fromBufferToB64(keyPair[0]);
            const privateEnc = yield this.encrypt(keyPair[1], key);
            return [publicB64, privateEnc];
        });
    }
    makePinKey(pin, salt, kdf, kdfIterations) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const pinKey = yield this.makeKey(pin, salt, kdf, kdfIterations);
            return yield this.stretchKey(pinKey);
        });
    }
    hashPassword(password, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (key == null) {
                key = yield this.getKey();
            }
            if (password == null || key == null) {
                throw new Error('Invalid parameters.');
            }
            const hash = yield this.cryptoFunctionService.pbkdf2(key.key, password, 'sha256', 1);
            return utils["a" /* Utils */].fromBufferToB64(hash);
        });
    }
    makeEncKey(key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const theKey = yield this.getKeyForEncryption(key);
            const encKey = yield this.cryptoFunctionService.randomBytes(64);
            return this.buildEncKey(theKey, encKey);
        });
    }
    remakeEncKey(key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const encKey = yield this.getEncKey();
            return this.buildEncKey(key, encKey.key);
        });
    }
    encrypt(plainValue, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (plainValue == null) {
                return Promise.resolve(null);
            }
            let plainBuf;
            if (typeof (plainValue) === 'string') {
                plainBuf = utils["a" /* Utils */].fromUtf8ToArray(plainValue).buffer;
            }
            else {
                plainBuf = plainValue;
            }
            const encObj = yield this.aesEncrypt(plainBuf, key);
            const iv = utils["a" /* Utils */].fromBufferToB64(encObj.iv);
            const data = utils["a" /* Utils */].fromBufferToB64(encObj.data);
            const mac = encObj.mac != null ? utils["a" /* Utils */].fromBufferToB64(encObj.mac) : null;
            return new domain_cipherString["a" /* CipherString */](encObj.key.encType, data, iv, mac);
        });
    }
    encryptToBytes(plainValue, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const encValue = yield this.aesEncrypt(plainValue, key);
            let macLen = 0;
            if (encValue.mac != null) {
                macLen = encValue.mac.byteLength;
            }
            const encBytes = new Uint8Array(1 + encValue.iv.byteLength + macLen + encValue.data.byteLength);
            encBytes.set([encValue.key.encType]);
            encBytes.set(new Uint8Array(encValue.iv), 1);
            if (encValue.mac != null) {
                encBytes.set(new Uint8Array(encValue.mac), 1 + encValue.iv.byteLength);
            }
            encBytes.set(new Uint8Array(encValue.data), 1 + encValue.iv.byteLength + macLen);
            return encBytes.buffer;
        });
    }
    rsaEncrypt(data, publicKey) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (publicKey == null) {
                publicKey = yield this.getPublicKey();
            }
            if (publicKey == null) {
                throw new Error('Public key unavailable.');
            }
            const encBytes = yield this.cryptoFunctionService.rsaEncrypt(data, publicKey, 'sha1');
            return new domain_cipherString["a" /* CipherString */](encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha1_B64, utils["a" /* Utils */].fromBufferToB64(encBytes));
        });
    }
    decryptToBytes(cipherString, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const iv = utils["a" /* Utils */].fromB64ToArray(cipherString.iv).buffer;
            const data = utils["a" /* Utils */].fromB64ToArray(cipherString.data).buffer;
            const mac = cipherString.mac ? utils["a" /* Utils */].fromB64ToArray(cipherString.mac).buffer : null;
            const decipher = yield this.aesDecryptToBytes(cipherString.encryptionType, data, iv, mac, key);
            if (decipher == null) {
                return null;
            }
            return decipher;
        });
    }
    decryptToUtf8(cipherString, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            return yield this.aesDecryptToUtf8(cipherString.encryptionType, cipherString.data, cipherString.iv, cipherString.mac, key);
        });
    }
    decryptFromBytes(encBuf, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (encBuf == null) {
                throw new Error('no encBuf.');
            }
            const encBytes = new Uint8Array(encBuf);
            const encType = encBytes[0];
            let ctBytes = null;
            let ivBytes = null;
            let macBytes = null;
            switch (encType) {
                case encryptionType["a" /* EncryptionType */].AesCbc128_HmacSha256_B64:
                case encryptionType["a" /* EncryptionType */].AesCbc256_HmacSha256_B64:
                    if (encBytes.length <= 49) { // 1 + 16 + 32 + ctLength
                        return null;
                    }
                    ivBytes = encBytes.slice(1, 17);
                    macBytes = encBytes.slice(17, 49);
                    ctBytes = encBytes.slice(49);
                    break;
                case encryptionType["a" /* EncryptionType */].AesCbc256_B64:
                    if (encBytes.length <= 17) { // 1 + 16 + ctLength
                        return null;
                    }
                    ivBytes = encBytes.slice(1, 17);
                    ctBytes = encBytes.slice(17);
                    break;
                default:
                    return null;
            }
            return yield this.aesDecryptToBytes(encType, ctBytes.buffer, ivBytes.buffer, macBytes != null ? macBytes.buffer : null, key);
        });
    }
    // EFForg/OpenWireless
    // ref https://github.com/EFForg/OpenWireless/blob/master/app/js/diceware.js
    randomNumber(min, max) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            let rval = 0;
            const range = max - min + 1;
            const bitsNeeded = Math.ceil(Math.log2(range));
            if (bitsNeeded > 53) {
                throw new Error('We cannot generate numbers larger than 53 bits.');
            }
            const bytesNeeded = Math.ceil(bitsNeeded / 8);
            const mask = Math.pow(2, bitsNeeded) - 1;
            // 7776 -> (2^13 = 8192) -1 == 8191 or 0x00001111 11111111
            // Fill a byte array with N random numbers
            const byteArray = new Uint8Array(yield this.cryptoFunctionService.randomBytes(bytesNeeded));
            let p = (bytesNeeded - 1) * 8;
            for (let i = 0; i < bytesNeeded; i++) {
                rval += byteArray[i] * Math.pow(2, p);
                p -= 8;
            }
            // Use & to apply the mask and reduce the number of recursive lookups
            // tslint:disable-next-line
            rval = rval & mask;
            if (rval >= range) {
                // Integer out of acceptable range
                return this.randomNumber(min, max);
            }
            // Return an integer that falls within the range
            return min + rval;
        });
    }
    // Helpers
    aesEncrypt(data, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const obj = new EncryptedObject();
            obj.key = yield this.getKeyForEncryption(key);
            obj.iv = yield this.cryptoFunctionService.randomBytes(16);
            obj.data = yield this.cryptoFunctionService.aesEncrypt(data, obj.iv, obj.key.encKey);
            if (obj.key.macKey != null) {
                const macData = new Uint8Array(obj.iv.byteLength + obj.data.byteLength);
                macData.set(new Uint8Array(obj.iv), 0);
                macData.set(new Uint8Array(obj.data), obj.iv.byteLength);
                obj.mac = yield this.cryptoFunctionService.hmac(macData.buffer, obj.key.macKey, 'sha256');
            }
            return obj;
        });
    }
    aesDecryptToUtf8(encType, data, iv, mac, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const keyForEnc = yield this.getKeyForEncryption(key);
            const theKey = this.resolveLegacyKey(encType, keyForEnc);
            if (theKey.macKey != null && mac == null) {
                // tslint:disable-next-line
                console.error('mac required.');
                return null;
            }
            if (theKey.encType !== encType) {
                // tslint:disable-next-line
                console.error('encType unavailable.');
                return null;
            }
            const fastParams = this.cryptoFunctionService.aesDecryptFastParameters(data, iv, mac, theKey);
            if (fastParams.macKey != null && fastParams.mac != null) {
                const computedMac = yield this.cryptoFunctionService.hmacFast(fastParams.macData, fastParams.macKey, 'sha256');
                const macsEqual = yield this.cryptoFunctionService.compareFast(fastParams.mac, computedMac);
                if (!macsEqual) {
                    // tslint:disable-next-line
                    console.error('mac failed.');
                    return null;
                }
            }
            return this.cryptoFunctionService.aesDecryptFast(fastParams);
        });
    }
    aesDecryptToBytes(encType, data, iv, mac, key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const keyForEnc = yield this.getKeyForEncryption(key);
            const theKey = this.resolveLegacyKey(encType, keyForEnc);
            if (theKey.macKey != null && mac == null) {
                return null;
            }
            if (theKey.encType !== encType) {
                return null;
            }
            if (theKey.macKey != null && mac != null) {
                const macData = new Uint8Array(iv.byteLength + data.byteLength);
                macData.set(new Uint8Array(iv), 0);
                macData.set(new Uint8Array(data), iv.byteLength);
                const computedMac = yield this.cryptoFunctionService.hmac(macData.buffer, theKey.macKey, 'sha256');
                if (computedMac === null) {
                    return null;
                }
                const macsMatch = yield this.cryptoFunctionService.compare(mac, computedMac);
                if (!macsMatch) {
                    // tslint:disable-next-line
                    console.error('mac failed.');
                    return null;
                }
            }
            return yield this.cryptoFunctionService.aesDecrypt(data, iv, theKey.encKey);
        });
    }
    rsaDecrypt(encValue) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const headerPieces = encValue.split('.');
            let encType = null;
            let encPieces;
            if (headerPieces.length === 1) {
                encType = encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha256_B64;
                encPieces = [headerPieces[0]];
            }
            else if (headerPieces.length === 2) {
                try {
                    encType = parseInt(headerPieces[0], null);
                    encPieces = headerPieces[1].split('|');
                }
                catch (e) { }
            }
            switch (encType) {
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha256_B64:
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha1_B64:
                // HmacSha256 types are deprecated
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha256_HmacSha256_B64:
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha1_HmacSha256_B64:
                    break;
                default:
                    throw new Error('encType unavailable.');
            }
            if (encPieces == null || encPieces.length <= 0) {
                throw new Error('encPieces unavailable.');
            }
            const data = utils["a" /* Utils */].fromB64ToArray(encPieces[0]).buffer;
            const privateKey = yield this.getPrivateKey();
            if (privateKey == null) {
                throw new Error('No private key.');
            }
            let alg = 'sha1';
            switch (encType) {
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha256_B64:
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha256_HmacSha256_B64:
                    alg = 'sha256';
                    break;
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha1_B64:
                case encryptionType["a" /* EncryptionType */].Rsa2048_OaepSha1_HmacSha256_B64:
                    break;
                default:
                    throw new Error('encType unavailable.');
            }
            return this.cryptoFunctionService.rsaDecrypt(data, privateKey, alg);
        });
    }
    getKeyForEncryption(key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            if (key != null) {
                return key;
            }
            const encKey = yield this.getEncKey();
            if (encKey != null) {
                return encKey;
            }
            return yield this.getKey();
        });
    }
    resolveLegacyKey(encType, key) {
        if (encType === encryptionType["a" /* EncryptionType */].AesCbc128_HmacSha256_B64 &&
            key.encType === encryptionType["a" /* EncryptionType */].AesCbc256_B64) {
            // Old encrypt-then-mac scheme, make a new key
            if (this.legacyEtmKey == null) {
                this.legacyEtmKey = new symmetricCryptoKey["a" /* SymmetricCryptoKey */](key.key, encryptionType["a" /* EncryptionType */].AesCbc128_HmacSha256_B64);
            }
            return this.legacyEtmKey;
        }
        return key;
    }
    stretchKey(key) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const newKey = new Uint8Array(64);
            newKey.set(yield this.hkdfExpand(key.key, utils["a" /* Utils */].fromUtf8ToArray('enc'), 32));
            newKey.set(yield this.hkdfExpand(key.key, utils["a" /* Utils */].fromUtf8ToArray('mac'), 32), 32);
            return new symmetricCryptoKey["a" /* SymmetricCryptoKey */](newKey.buffer);
        });
    }
    // ref: https://tools.ietf.org/html/rfc5869
    hkdfExpand(prk, info, size) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const hashLen = 32; // sha256
            const okm = new Uint8Array(size);
            let previousT = new Uint8Array(0);
            const n = Math.ceil(size / hashLen);
            for (let i = 0; i < n; i++) {
                const t = new Uint8Array(previousT.length + info.length + 1);
                t.set(previousT);
                t.set(info, previousT.length);
                t.set([i + 1], t.length - 1);
                previousT = new Uint8Array(yield this.cryptoFunctionService.hmac(t.buffer, prk, 'sha256'));
                okm.set(previousT, i * hashLen);
            }
            return okm;
        });
    }
    hashPhrase(hash, minimumEntropy = 64) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            const entropyPerWord = Math.log(EEFLongWordList.length) / Math.log(2);
            let numWords = Math.ceil(minimumEntropy / entropyPerWord);
            const hashArr = Array.from(new Uint8Array(hash));
            const entropyAvailable = hashArr.length * 4;
            if (numWords * entropyPerWord > entropyAvailable) {
                throw new Error('Output entropy of hash function is too small');
            }
            const phrase = [];
            let hashNumber = BigInteger["fromArray"](hashArr, 256);
            while (numWords--) {
                const remainder = hashNumber.mod(EEFLongWordList.length);
                hashNumber = hashNumber.divide(EEFLongWordList.length);
                phrase.push(EEFLongWordList[remainder]);
            }
            return phrase;
        });
    }
    buildEncKey(key, encKey) {
        return crypto_service_awaiter(this, void 0, void 0, function* () {
            let encKeyEnc = null;
            if (key.key.byteLength === 32) {
                const newKey = yield this.stretchKey(key);
                encKeyEnc = yield this.encrypt(encKey, newKey);
            }
            else if (key.key.byteLength === 64) {
                encKeyEnc = yield this.encrypt(encKey, key);
            }
            else {
                throw new Error('Invalid key size.');
            }
            return [new symmetricCryptoKey["a" /* SymmetricCryptoKey */](encKey), encKeyEnc];
        });
    }
}
crypto_service_decorate([
    Object(sequentialize["a" /* sequentialize */])(crypto_service_0),
    crypto_service_metadata("design:type", Function),
    crypto_service_metadata("design:paramtypes", [symmetricCryptoKey["a" /* SymmetricCryptoKey */]]),
    crypto_service_metadata("design:returntype", Promise)
], crypto_service_CryptoService.prototype, "getEncKey", null);
crypto_service_decorate([
    Object(sequentialize["a" /* sequentialize */])(ɵ1),
    crypto_service_metadata("design:type", Function),
    crypto_service_metadata("design:paramtypes", []),
    crypto_service_metadata("design:returntype", Promise)
], crypto_service_CryptoService.prototype, "getOrgKeys", null);


// CONCATENATED MODULE: ./jslib/src/models/domain/environmentUrls.ts
class EnvironmentUrls {
}

// CONCATENATED MODULE: ./jslib/src/services/environment.service.ts
var environment_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class environment_service_EnvironmentService {
    constructor(apiService, storageService, notificationsService) {
        this.apiService = apiService;
        this.storageService = storageService;
        this.notificationsService = notificationsService;
    }
    getWebVaultUrl() {
        if (this.webVaultUrl != null) {
            return this.webVaultUrl;
        }
        else if (this.baseUrl) {
            return this.baseUrl;
        }
        return null;
    }
    setUrlsFromStorage() {
        return environment_service_awaiter(this, void 0, void 0, function* () {
            const urlsObj = yield this.storageService.get(constants_service["a" /* ConstantsService */].environmentUrlsKey);
            const urls = urlsObj || {
                base: null,
                api: null,
                identity: null,
                icons: null,
                notifications: null,
                events: null,
                webVault: null,
            };
            const envUrls = new EnvironmentUrls();
            if (urls.base) {
                this.baseUrl = envUrls.base = urls.base;
                this.apiService.setUrls(envUrls);
                return;
            }
            this.webVaultUrl = urls.webVault;
            this.apiUrl = envUrls.api = urls.api;
            this.identityUrl = envUrls.identity = urls.identity;
            this.iconsUrl = urls.icons;
            this.notificationsUrl = urls.notifications;
            this.eventsUrl = envUrls.events = urls.events;
            this.apiService.setUrls(envUrls);
        });
    }
    setUrls(urls) {
        return environment_service_awaiter(this, void 0, void 0, function* () {
            urls.base = this.formatUrl(urls.base);
            urls.webVault = this.formatUrl(urls.webVault);
            urls.api = this.formatUrl(urls.api);
            urls.identity = this.formatUrl(urls.identity);
            urls.icons = this.formatUrl(urls.icons);
            urls.notifications = this.formatUrl(urls.notifications);
            urls.events = this.formatUrl(urls.events);
            yield this.storageService.save(constants_service["a" /* ConstantsService */].environmentUrlsKey, {
                base: urls.base,
                api: urls.api,
                identity: urls.identity,
                webVault: urls.webVault,
                icons: urls.icons,
                notifications: urls.notifications,
                events: urls.events,
            });
            this.baseUrl = urls.base;
            this.webVaultUrl = urls.webVault;
            this.apiUrl = urls.api;
            this.identityUrl = urls.identity;
            this.iconsUrl = urls.icons;
            this.notificationsUrl = urls.notifications;
            this.eventsUrl = urls.events;
            const envUrls = new EnvironmentUrls();
            if (this.baseUrl) {
                envUrls.base = this.baseUrl;
            }
            else {
                envUrls.api = this.apiUrl;
                envUrls.identity = this.identityUrl;
                envUrls.events = this.eventsUrl;
            }
            this.apiService.setUrls(envUrls);
            if (this.notificationsService != null) {
                this.notificationsService.init(this);
            }
            return urls;
        });
    }
    formatUrl(url) {
        if (url == null || url === '') {
            return null;
        }
        url = url.replace(/\/+$/g, '');
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        return url.trim();
    }
}

// CONCATENATED MODULE: ./jslib/src/models/data/folderData.ts
class FolderData {
    constructor(response, userId) {
        this.userId = userId;
        this.name = response.name;
        this.id = response.id;
        this.revisionDate = response.revisionDate;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/view/folderView.ts
var folderView = __webpack_require__(93);

// CONCATENATED MODULE: ./jslib/src/models/domain/folder.ts


class folder_Folder extends domainBase["a" /* default */] {
    constructor(obj, alreadyEncrypted = false) {
        super();
        if (obj == null) {
            return;
        }
        this.buildDomainModel(this, obj, {
            id: null,
            name: null,
        }, alreadyEncrypted, ['id']);
        this.revisionDate = obj.revisionDate != null ? new Date(obj.revisionDate) : null;
    }
    decrypt() {
        return this.decryptObj(new folderView["a" /* FolderView */](this), {
            name: null,
        }, null);
    }
}

// CONCATENATED MODULE: ./jslib/src/models/request/folderRequest.ts
class FolderRequest {
    constructor(folder) {
        this.name = folder.name ? folder.name.encryptedString : null;
    }
}

// CONCATENATED MODULE: ./jslib/src/services/folder.service.ts
var folder_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const folder_service_Keys = {
    foldersPrefix: 'folders_',
    ciphersPrefix: 'ciphers_',
};
const folder_service_NestingDelimiter = '/';
class folder_service_FolderService {
    constructor(cryptoService, userService, apiService, storageService, i18nService, cipherService) {
        this.cryptoService = cryptoService;
        this.userService = userService;
        this.apiService = apiService;
        this.storageService = storageService;
        this.i18nService = i18nService;
        this.cipherService = cipherService;
    }
    clearCache() {
        this.decryptedFolderCache = null;
    }
    encrypt(model, key) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const folder = new folder_Folder();
            folder.id = model.id;
            folder.name = yield this.cryptoService.encrypt(model.name, key);
            return folder;
        });
    }
    get(id) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const folders = yield this.storageService.get(folder_service_Keys.foldersPrefix + userId);
            if (folders == null || !folders.hasOwnProperty(id)) {
                return null;
            }
            return new folder_Folder(folders[id]);
        });
    }
    getAll() {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const folders = yield this.storageService.get(folder_service_Keys.foldersPrefix + userId);
            const response = [];
            for (const id in folders) {
                if (folders.hasOwnProperty(id)) {
                    response.push(new folder_Folder(folders[id]));
                }
            }
            return response;
        });
    }
    getAllDecrypted() {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            if (this.decryptedFolderCache != null) {
                return this.decryptedFolderCache;
            }
            const hasKey = yield this.cryptoService.hasKey();
            if (!hasKey) {
                throw new Error('No key.');
            }
            const decFolders = [];
            const promises = [];
            const folders = yield this.getAll();
            folders.forEach((folder) => {
                promises.push(folder.decrypt().then((f) => decFolders.push(f)));
            });
            yield Promise.all(promises);
            decFolders.sort(utils["a" /* Utils */].getSortFunction(this.i18nService, 'name'));
            const noneFolder = new folderView["a" /* FolderView */]();
            noneFolder.name = this.i18nService.t('noneFolder');
            decFolders.push(noneFolder);
            this.decryptedFolderCache = decFolders;
            return this.decryptedFolderCache;
        });
    }
    getAllNested() {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const folders = yield this.getAllDecrypted();
            const nodes = [];
            folders.forEach((f) => {
                const folderCopy = new folderView["a" /* FolderView */]();
                folderCopy.id = f.id;
                folderCopy.revisionDate = f.revisionDate;
                const parts = f.name != null ? f.name.replace(/^\/+|\/+$/g, '').split(folder_service_NestingDelimiter) : [];
                serviceUtils_ServiceUtils.nestedTraverse(nodes, 0, parts, folderCopy, null, folder_service_NestingDelimiter);
            });
            return nodes;
        });
    }
    getNested(id) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const folders = yield this.getAllNested();
            return serviceUtils_ServiceUtils.getTreeNodeObject(folders, id);
        });
    }
    saveWithServer(folder) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const request = new FolderRequest(folder);
            let response;
            if (folder.id == null) {
                response = yield this.apiService.postFolder(request);
                folder.id = response.id;
            }
            else {
                response = yield this.apiService.putFolder(folder.id, request);
            }
            const userId = yield this.userService.getUserId();
            const data = new FolderData(response, userId);
            yield this.upsert(data);
        });
    }
    upsert(folder) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            let folders = yield this.storageService.get(folder_service_Keys.foldersPrefix + userId);
            if (folders == null) {
                folders = {};
            }
            if (folder instanceof FolderData) {
                const f = folder;
                folders[f.id] = f;
            }
            else {
                folder.forEach((f) => {
                    folders[f.id] = f;
                });
            }
            yield this.storageService.save(folder_service_Keys.foldersPrefix + userId, folders);
            this.decryptedFolderCache = null;
        });
    }
    replace(folders) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            yield this.storageService.save(folder_service_Keys.foldersPrefix + userId, folders);
            this.decryptedFolderCache = null;
        });
    }
    clear(userId) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            yield this.storageService.remove(folder_service_Keys.foldersPrefix + userId);
            this.decryptedFolderCache = null;
        });
    }
    delete(id) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            const folders = yield this.storageService.get(folder_service_Keys.foldersPrefix + userId);
            if (folders == null) {
                return;
            }
            if (typeof id === 'string') {
                if (folders[id] == null) {
                    return;
                }
                delete folders[id];
            }
            else {
                id.forEach((i) => {
                    delete folders[i];
                });
            }
            yield this.storageService.save(folder_service_Keys.foldersPrefix + userId, folders);
            this.decryptedFolderCache = null;
            // Items in a deleted folder are re-assigned to "No Folder"
            const ciphers = yield this.storageService.get(folder_service_Keys.ciphersPrefix + userId);
            if (ciphers != null) {
                const updates = [];
                for (const cId in ciphers) {
                    if (ciphers[cId].folderId === id) {
                        ciphers[cId].folderId = null;
                        updates.push(ciphers[cId]);
                    }
                }
                if (updates.length > 0) {
                    this.cipherService.upsert(updates);
                }
            }
        });
    }
    deleteWithServer(id) {
        return folder_service_awaiter(this, void 0, void 0, function* () {
            yield this.apiService.deleteFolder(id);
            yield this.delete(id);
        });
    }
}

// CONCATENATED MODULE: ./jslib/src/services/i18n.service.ts
var i18n_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class i18n_service_I18nService {
    constructor(systemLanguage, localesDirectory, getLocalesJson) {
        this.systemLanguage = systemLanguage;
        this.localesDirectory = localesDirectory;
        this.getLocalesJson = getLocalesJson;
        // First locale is the default (English)
        this.supportedTranslationLocales = ['en'];
        this.localeNames = new Map([
            ['af', 'Afrikaans'],
            ['bg', 'български'],
            ['ca', 'català'],
            ['cs', 'čeština'],
            ['da', 'dansk'],
            ['de', 'Deutsch'],
            ['el', 'Ελληνικά'],
            ['en', 'English'],
            ['en-GB', 'English (British)'],
            ['eo', 'Esperanto'],
            ['es', 'español'],
            ['et', 'eesti'],
            ['fa', 'فارسی'],
            ['fi', 'suomi'],
            ['fr', 'français'],
            ['he', 'עברית'],
            ['hi', 'हिन्दी'],
            ['hr', 'hrvatski'],
            ['hu', 'magyar'],
            ['id', 'Bahasa Indonesia'],
            ['it', 'italiano'],
            ['ja', '日本語'],
            ['ko', '한국어'],
            ['nb', 'norsk (bokmål)'],
            ['nl', 'Nederlands'],
            ['pl', 'polski'],
            ['pt-BR', 'português do Brasil'],
            ['pt-PT', 'português'],
            ['ro', 'română'],
            ['ru', 'русский'],
            ['sk', 'slovenčina'],
            ['sv', 'svenska'],
            ['th', 'ไทย'],
            ['tr', 'Türkçe'],
            ['uk', 'українська'],
            ['vi', 'Tiếng Việt'],
            ['zh-CN', '中文（中国大陆）'],
            ['zh-TW', '中文（台灣）'],
        ]);
        this.defaultMessages = {};
        this.localeMessages = {};
        this.systemLanguage = systemLanguage.replace('_', '-');
    }
    init(locale) {
        return i18n_service_awaiter(this, void 0, void 0, function* () {
            if (this.inited) {
                throw new Error('i18n already initialized.');
            }
            if (this.supportedTranslationLocales == null || this.supportedTranslationLocales.length === 0) {
                throw new Error('supportedTranslationLocales not set.');
            }
            this.inited = true;
            this.locale = this.translationLocale = locale != null ? locale : this.systemLanguage;
            try {
                this.collator = new Intl.Collator(this.locale, { numeric: true, sensitivity: 'base' });
            }
            catch (_a) {
                this.collator = null;
            }
            if (this.supportedTranslationLocales.indexOf(this.translationLocale) === -1) {
                this.translationLocale = this.translationLocale.slice(0, 2);
                if (this.supportedTranslationLocales.indexOf(this.translationLocale) === -1) {
                    this.translationLocale = this.supportedTranslationLocales[0];
                }
            }
            if (this.localesDirectory != null) {
                yield this.loadMessages(this.translationLocale, this.localeMessages);
                if (this.translationLocale !== this.supportedTranslationLocales[0]) {
                    yield this.loadMessages(this.supportedTranslationLocales[0], this.defaultMessages);
                }
            }
        });
    }
    t(id, p1, p2, p3) {
        return this.translate(id, p1, p2, p3);
    }
    translate(id, p1, p2, p3) {
        let result;
        if (this.localeMessages.hasOwnProperty(id) && this.localeMessages[id]) {
            result = this.localeMessages[id];
        }
        else if (this.defaultMessages.hasOwnProperty(id) && this.defaultMessages[id]) {
            result = this.defaultMessages[id];
        }
        else {
            result = '';
        }
        if (result !== '') {
            if (p1 != null) {
                result = result.split('__$1__').join(p1);
            }
            if (p2 != null) {
                result = result.split('__$2__').join(p2);
            }
            if (p3 != null) {
                result = result.split('__$3__').join(p3);
            }
        }
        return result;
    }
    loadMessages(locale, messagesObj) {
        return i18n_service_awaiter(this, void 0, void 0, function* () {
            const formattedLocale = locale.replace('-', '_');
            const locales = yield this.getLocalesJson(formattedLocale);
            for (const prop in locales) {
                if (!locales.hasOwnProperty(prop)) {
                    continue;
                }
                messagesObj[prop] = locales[prop].message;
                if (locales[prop].placeholders) {
                    for (const placeProp in locales[prop].placeholders) {
                        if (!locales[prop].placeholders.hasOwnProperty(placeProp) ||
                            !locales[prop].placeholders[placeProp].content) {
                            continue;
                        }
                        const replaceToken = '\\$' + placeProp.toUpperCase() + '\\$';
                        let replaceContent = locales[prop].placeholders[placeProp].content;
                        if (replaceContent === '$1' || replaceContent === '$2' || replaceContent === '$3') {
                            replaceContent = '__$' + replaceContent + '__';
                        }
                        messagesObj[prop] = messagesObj[prop].replace(new RegExp(replaceToken, 'g'), replaceContent);
                    }
                }
            }
        });
    }
}

// CONCATENATED MODULE: ./jslib/src/services/lock.service.ts
var lock_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class lock_service_LockService {
    constructor(cipherService, folderService, collectionService, cryptoService, platformUtilsService, storageService, messagingService, searchService, userService, lockedCallback = null) {
        this.cipherService = cipherService;
        this.folderService = folderService;
        this.collectionService = collectionService;
        this.cryptoService = cryptoService;
        this.platformUtilsService = platformUtilsService;
        this.storageService = storageService;
        this.messagingService = messagingService;
        this.searchService = searchService;
        this.userService = userService;
        this.lockedCallback = lockedCallback;
        this.pinProtectedKey = null;
        this.inited = false;
    }
    init(checkOnInterval) {
        if (this.inited) {
            return;
        }
        this.inited = true;
        if (checkOnInterval) {
            this.checkLock();
            setInterval(() => this.checkLock(), 10 * 1000); // check every 10 seconds
        }
    }
    isLocked() {
        return lock_service_awaiter(this, void 0, void 0, function* () {
            const hasKey = yield this.cryptoService.hasKey();
            return !hasKey;
        });
    }
    checkLock() {
        return lock_service_awaiter(this, void 0, void 0, function* () {
            if (yield this.platformUtilsService.isViewOpen()) {
                // Do not lock
                return;
            }
            const authed = yield this.userService.isAuthenticated();
            if (!authed) {
                return;
            }
            if (yield this.isLocked()) {
                return;
            }
            let lockOption = this.platformUtilsService.lockTimeout();
            if (lockOption == null) {
                lockOption = yield this.storageService.get(constants_service["a" /* ConstantsService */].lockOptionKey);
            }
            if (lockOption == null || lockOption < 0) {
                return;
            }
            const lastActive = yield this.storageService.get(constants_service["a" /* ConstantsService */].lastActiveKey);
            if (lastActive == null) {
                return;
            }
            const lockOptionSeconds = lockOption * 60;
            const diffSeconds = ((new Date()).getTime() - lastActive) / 1000;
            if (diffSeconds >= lockOptionSeconds) {
                // need to lock now
                yield this.lock(true);
            }
        });
    }
    lock(allowSoftLock = false) {
        return lock_service_awaiter(this, void 0, void 0, function* () {
            const authed = yield this.userService.isAuthenticated();
            if (!authed) {
                return;
            }
            yield Promise.all([
                this.cryptoService.clearKey(),
                this.cryptoService.clearOrgKeys(true),
                this.cryptoService.clearKeyPair(true),
                this.cryptoService.clearEncKey(true),
            ]);
            this.folderService.clearCache();
            this.cipherService.clearCache();
            this.collectionService.clearCache();
            this.searchService.clearIndex();
            this.messagingService.send('locked');
            if (this.lockedCallback != null) {
                yield this.lockedCallback();
            }
        });
    }
    setLockOption(lockOption) {
        return lock_service_awaiter(this, void 0, void 0, function* () {
            yield this.storageService.save(constants_service["a" /* ConstantsService */].lockOptionKey, lockOption);
            yield this.cryptoService.toggleKey();
        });
    }
    isPinLockSet() {
        return lock_service_awaiter(this, void 0, void 0, function* () {
            const protectedPin = yield this.storageService.get(constants_service["a" /* ConstantsService */].protectedPin);
            const pinProtectedKey = yield this.storageService.get(constants_service["a" /* ConstantsService */].pinProtectedKey);
            return [protectedPin != null, pinProtectedKey != null];
        });
    }
    clear() {
        this.pinProtectedKey = null;
        return this.storageService.remove(constants_service["a" /* ConstantsService */].protectedPin);
    }
}

// EXTERNAL MODULE: ./node_modules/zxcvbn/lib/main.js
var main = __webpack_require__(411);

// CONCATENATED MODULE: ./jslib/src/models/domain/generatedPasswordHistory.ts
class GeneratedPasswordHistory {
    constructor(password, date) {
        this.password = password;
        this.date = date;
    }
}

// CONCATENATED MODULE: ./jslib/src/services/passwordGeneration.service.ts
var passwordGeneration_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const DefaultOptions = {
    length: 14,
    ambiguous: false,
    number: true,
    minNumber: 1,
    uppercase: true,
    minUppercase: 0,
    lowercase: true,
    minLowercase: 0,
    special: false,
    minSpecial: 1,
    type: 'password',
    numWords: 3,
    wordSeparator: '-',
    capitalize: false,
    includeNumber: false,
};
const passwordGeneration_service_Keys = {
    options: 'passwordGenerationOptions',
    history: 'generatedPasswordHistory',
};
const MaxPasswordsInHistory = 100;
class passwordGeneration_service_PasswordGenerationService {
    constructor(cryptoService, storageService) {
        this.cryptoService = cryptoService;
        this.storageService = storageService;
    }
    generatePassword(options) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            // overload defaults with given options
            const o = Object.assign({}, DefaultOptions, options);
            if (o.type === 'passphrase') {
                return this.generatePassphrase(options);
            }
            // sanitize
            if (o.uppercase && o.minUppercase <= 0) {
                o.minUppercase = 1;
            }
            else if (!o.uppercase) {
                o.minUppercase = 0;
            }
            if (o.lowercase && o.minLowercase <= 0) {
                o.minLowercase = 1;
            }
            else if (!o.lowercase) {
                o.minLowercase = 0;
            }
            if (o.number && o.minNumber <= 0) {
                o.minNumber = 1;
            }
            else if (!o.number) {
                o.minNumber = 0;
            }
            if (o.special && o.minSpecial <= 0) {
                o.minSpecial = 1;
            }
            else if (!o.special) {
                o.minSpecial = 0;
            }
            if (!o.length || o.length < 1) {
                o.length = 10;
            }
            const minLength = o.minUppercase + o.minLowercase + o.minNumber + o.minSpecial;
            if (o.length < minLength) {
                o.length = minLength;
            }
            const positions = [];
            if (o.lowercase && o.minLowercase > 0) {
                for (let i = 0; i < o.minLowercase; i++) {
                    positions.push('l');
                }
            }
            if (o.uppercase && o.minUppercase > 0) {
                for (let i = 0; i < o.minUppercase; i++) {
                    positions.push('u');
                }
            }
            if (o.number && o.minNumber > 0) {
                for (let i = 0; i < o.minNumber; i++) {
                    positions.push('n');
                }
            }
            if (o.special && o.minSpecial > 0) {
                for (let i = 0; i < o.minSpecial; i++) {
                    positions.push('s');
                }
            }
            while (positions.length < o.length) {
                positions.push('a');
            }
            // shuffle
            yield this.shuffleArray(positions);
            // build out the char sets
            let allCharSet = '';
            let lowercaseCharSet = 'abcdefghijkmnopqrstuvwxyz';
            if (o.ambiguous) {
                lowercaseCharSet += 'l';
            }
            if (o.lowercase) {
                allCharSet += lowercaseCharSet;
            }
            let uppercaseCharSet = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
            if (o.ambiguous) {
                uppercaseCharSet += 'IO';
            }
            if (o.uppercase) {
                allCharSet += uppercaseCharSet;
            }
            let numberCharSet = '23456789';
            if (o.ambiguous) {
                numberCharSet += '01';
            }
            if (o.number) {
                allCharSet += numberCharSet;
            }
            const specialCharSet = '!@#$%^&*';
            if (o.special) {
                allCharSet += specialCharSet;
            }
            let password = '';
            for (let i = 0; i < o.length; i++) {
                let positionChars;
                switch (positions[i]) {
                    case 'l':
                        positionChars = lowercaseCharSet;
                        break;
                    case 'u':
                        positionChars = uppercaseCharSet;
                        break;
                    case 'n':
                        positionChars = numberCharSet;
                        break;
                    case 's':
                        positionChars = specialCharSet;
                        break;
                    case 'a':
                        positionChars = allCharSet;
                        break;
                    default:
                        break;
                }
                const randomCharIndex = yield this.cryptoService.randomNumber(0, positionChars.length - 1);
                password += positionChars.charAt(randomCharIndex);
            }
            return password;
        });
    }
    generatePassphrase(options) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            const o = Object.assign({}, DefaultOptions, options);
            if (o.numWords == null || o.numWords <= 2) {
                o.numWords = DefaultOptions.numWords;
            }
            if (o.wordSeparator == null || o.wordSeparator.length === 0 || o.wordSeparator.length > 1) {
                o.wordSeparator = ' ';
            }
            if (o.capitalize == null) {
                o.capitalize = false;
            }
            if (o.includeNumber == null) {
                o.includeNumber = false;
            }
            const listLength = EEFLongWordList.length - 1;
            const wordList = new Array(o.numWords);
            for (let i = 0; i < o.numWords; i++) {
                const wordIndex = yield this.cryptoService.randomNumber(0, listLength);
                if (o.capitalize) {
                    wordList[i] = this.capitalize(EEFLongWordList[wordIndex]);
                }
                else {
                    wordList[i] = EEFLongWordList[wordIndex];
                }
            }
            if (o.includeNumber) {
                yield this.appendRandomNumberToRandomWord(wordList);
            }
            return wordList.join(o.wordSeparator);
        });
    }
    getOptions() {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            if (this.optionsCache == null) {
                const options = yield this.storageService.get(passwordGeneration_service_Keys.options);
                if (options == null) {
                    this.optionsCache = DefaultOptions;
                }
                else {
                    this.optionsCache = Object.assign({}, DefaultOptions, options);
                }
            }
            return this.optionsCache;
        });
    }
    saveOptions(options) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            yield this.storageService.save(passwordGeneration_service_Keys.options, options);
            this.optionsCache = options;
        });
    }
    getHistory() {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            const hasKey = yield this.cryptoService.hasKey();
            if (!hasKey) {
                return new Array();
            }
            if (!this.history) {
                const encrypted = yield this.storageService.get(passwordGeneration_service_Keys.history);
                this.history = yield this.decryptHistory(encrypted);
            }
            return this.history || new Array();
        });
    }
    addHistory(password) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            // Cannot add new history if no key is available
            const hasKey = yield this.cryptoService.hasKey();
            if (!hasKey) {
                return;
            }
            const currentHistory = yield this.getHistory();
            // Prevent duplicates
            if (this.matchesPrevious(password, currentHistory)) {
                return;
            }
            currentHistory.unshift(new GeneratedPasswordHistory(password, Date.now()));
            // Remove old items.
            if (currentHistory.length > MaxPasswordsInHistory) {
                currentHistory.pop();
            }
            const newHistory = yield this.encryptHistory(currentHistory);
            return yield this.storageService.save(passwordGeneration_service_Keys.history, newHistory);
        });
    }
    clear() {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            this.history = [];
            return yield this.storageService.remove(passwordGeneration_service_Keys.history);
        });
    }
    passwordStrength(password, userInputs = null) {
        if (password == null || password.length === 0) {
            return null;
        }
        let globalUserInputs = ['bitwarden', 'bit', 'warden'];
        if (userInputs != null && userInputs.length > 0) {
            globalUserInputs = globalUserInputs.concat(userInputs);
        }
        // Use a hash set to get rid of any duplicate user inputs
        const finalUserInputs = Array.from(new Set(globalUserInputs));
        const result = main(password, finalUserInputs);
        return result;
    }
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    appendRandomNumberToRandomWord(wordList) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            if (wordList == null || wordList.length <= 0) {
                return;
            }
            const index = yield this.cryptoService.randomNumber(0, wordList.length - 1);
            const num = yield this.cryptoService.randomNumber(0, 9);
            wordList[index] = wordList[index] + num;
        });
    }
    encryptHistory(history) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            if (history == null || history.length === 0) {
                return Promise.resolve([]);
            }
            const promises = history.map((item) => passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
                const encrypted = yield this.cryptoService.encrypt(item.password);
                return new GeneratedPasswordHistory(encrypted.encryptedString, item.date);
            }));
            return yield Promise.all(promises);
        });
    }
    decryptHistory(history) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            if (history == null || history.length === 0) {
                return Promise.resolve([]);
            }
            const promises = history.map((item) => passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
                const decrypted = yield this.cryptoService.decryptToUtf8(new domain_cipherString["a" /* CipherString */](item.password));
                return new GeneratedPasswordHistory(decrypted, item.date);
            }));
            return yield Promise.all(promises);
        });
    }
    matchesPrevious(password, history) {
        if (history == null || history.length === 0) {
            return false;
        }
        return history[history.length - 1].password === password;
    }
    // ref: https://stackoverflow.com/a/12646864/1090359
    shuffleArray(array) {
        return passwordGeneration_service_awaiter(this, void 0, void 0, function* () {
            for (let i = array.length - 1; i > 0; i--) {
                const j = yield this.cryptoService.randomNumber(0, i);
                [array[i], array[j]] = [array[j], array[i]];
            }
        });
    }
}

// CONCATENATED MODULE: ./jslib/src/services/settings.service.ts
var settings_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const settings_service_Keys = {
    settingsPrefix: 'settings_',
    equivalentDomains: 'equivalentDomains',
};
class SettingsService {
    constructor(userService, storageService) {
        this.userService = userService;
        this.storageService = storageService;
    }
    clearCache() {
        this.settingsCache = null;
    }
    getEquivalentDomains() {
        return this.getSettingsKey(settings_service_Keys.equivalentDomains);
    }
    setEquivalentDomains(equivalentDomains) {
        return settings_service_awaiter(this, void 0, void 0, function* () {
            yield this.setSettingsKey(settings_service_Keys.equivalentDomains, equivalentDomains);
        });
    }
    clear(userId) {
        return settings_service_awaiter(this, void 0, void 0, function* () {
            yield this.storageService.remove(settings_service_Keys.settingsPrefix + userId);
            this.clearCache();
        });
    }
    // Helpers
    getSettings() {
        return settings_service_awaiter(this, void 0, void 0, function* () {
            if (this.settingsCache == null) {
                const userId = yield this.userService.getUserId();
                this.settingsCache = this.storageService.get(settings_service_Keys.settingsPrefix + userId);
            }
            return this.settingsCache;
        });
    }
    getSettingsKey(key) {
        return settings_service_awaiter(this, void 0, void 0, function* () {
            const settings = yield this.getSettings();
            if (settings != null && settings[key]) {
                return settings[key];
            }
            return null;
        });
    }
    setSettingsKey(key, value) {
        return settings_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            let settings = yield this.getSettings();
            if (!settings) {
                settings = {};
            }
            settings[key] = value;
            yield this.storageService.save(settings_service_Keys.settingsPrefix + userId, settings);
            this.settingsCache = settings;
        });
    }
}

// EXTERNAL MODULE: ./jslib/src/services/state.service.ts
var state_service = __webpack_require__(167);

// EXTERNAL MODULE: ./jslib/src/models/data/cipherData.ts
var cipherData = __webpack_require__(67);

// CONCATENATED MODULE: ./jslib/src/models/data/organizationData.ts
class OrganizationData {
    constructor(response) {
        this.id = response.id;
        this.name = response.name;
        this.status = response.status;
        this.type = response.type;
        this.enabled = response.enabled;
        this.useGroups = response.useGroups;
        this.useDirectory = response.useDirectory;
        this.useEvents = response.useEvents;
        this.useTotp = response.useTotp;
        this.use2fa = response.use2fa;
        this.useApi = response.useApi;
        this.selfHost = response.selfHost;
        this.usersGetPremium = response.usersGetPremium;
        this.seats = response.seats;
        this.maxCollections = response.maxCollections;
        this.maxStorageGb = response.maxStorageGb;
    }
}

// CONCATENATED MODULE: ./jslib/src/services/sync.service.ts
var sync_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const sync_service_Keys = {
    lastSyncPrefix: 'lastSync_',
};
class sync_service_SyncService {
    constructor(userService, apiService, settingsService, folderService, cipherService, cryptoService, collectionService, storageService, messagingService, logoutCallback) {
        this.userService = userService;
        this.apiService = apiService;
        this.settingsService = settingsService;
        this.folderService = folderService;
        this.cipherService = cipherService;
        this.cryptoService = cryptoService;
        this.collectionService = collectionService;
        this.storageService = storageService;
        this.messagingService = messagingService;
        this.logoutCallback = logoutCallback;
        this.syncInProgress = false;
    }
    getLastSync() {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            if (userId == null) {
                return null;
            }
            const lastSync = yield this.storageService.get(sync_service_Keys.lastSyncPrefix + userId);
            if (lastSync) {
                return new Date(lastSync);
            }
            return null;
        });
    }
    setLastSync(date) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.userService.getUserId();
            if (userId == null) {
                return;
            }
            yield this.storageService.save(sync_service_Keys.lastSyncPrefix + userId, date.toJSON());
        });
    }
    fullSync(forceSync, allowThrowOnError = false) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            this.syncStarted();
            const isAuthenticated = yield this.userService.isAuthenticated();
            if (!isAuthenticated) {
                return this.syncCompleted(false);
            }
            const now = new Date();
            const needsSyncResult = yield this.needsSyncing(forceSync);
            const needsSync = needsSyncResult[0];
            const skipped = needsSyncResult[1];
            if (skipped) {
                return this.syncCompleted(false);
            }
            if (!needsSync) {
                yield this.setLastSync(now);
                return this.syncCompleted(false);
            }
            const userId = yield this.userService.getUserId();
            try {
                const response = yield this.apiService.getSync();
                yield this.syncProfile(response.profile);
                yield this.syncFolders(userId, response.folders);
                yield this.syncCollections(response.collections);
                yield this.syncCiphers(userId, response.ciphers);
                yield this.syncSettings(userId, response.domains);
                yield this.setLastSync(now);
                return this.syncCompleted(true);
            }
            catch (e) {
                if (allowThrowOnError) {
                    throw e;
                }
                else {
                    return this.syncCompleted(false);
                }
            }
        });
    }
    syncUpsertFolder(notification, isEdit) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            this.syncStarted();
            if (yield this.userService.isAuthenticated()) {
                try {
                    const localFolder = yield this.folderService.get(notification.id);
                    if ((!isEdit && localFolder == null) ||
                        (isEdit && localFolder != null && localFolder.revisionDate < notification.revisionDate)) {
                        const remoteFolder = yield this.apiService.getFolder(notification.id);
                        if (remoteFolder != null) {
                            const userId = yield this.userService.getUserId();
                            yield this.folderService.upsert(new FolderData(remoteFolder, userId));
                            this.messagingService.send('syncedUpsertedFolder', { folderId: notification.id });
                            return this.syncCompleted(true);
                        }
                    }
                }
                catch (_a) { }
            }
            return this.syncCompleted(false);
        });
    }
    syncDeleteFolder(notification) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            this.syncStarted();
            if (yield this.userService.isAuthenticated()) {
                yield this.folderService.delete(notification.id);
                this.messagingService.send('syncedDeletedFolder', { folderId: notification.id });
                this.syncCompleted(true);
                return true;
            }
            return this.syncCompleted(false);
        });
    }
    syncUpsertCipher(notification, isEdit) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            this.syncStarted();
            if (yield this.userService.isAuthenticated()) {
                try {
                    let shouldUpdate = true;
                    const localCipher = yield this.cipherService.get(notification.id);
                    if (localCipher != null && localCipher.revisionDate >= notification.revisionDate) {
                        shouldUpdate = false;
                    }
                    let checkCollections = false;
                    if (shouldUpdate) {
                        if (isEdit) {
                            shouldUpdate = localCipher != null;
                            checkCollections = true;
                        }
                        else {
                            if (notification.collectionIds == null || notification.organizationId == null) {
                                shouldUpdate = localCipher == null;
                            }
                            else {
                                shouldUpdate = false;
                                checkCollections = true;
                            }
                        }
                    }
                    if (!shouldUpdate && checkCollections && notification.organizationId != null &&
                        notification.collectionIds != null && notification.collectionIds.length > 0) {
                        const collections = yield this.collectionService.getAll();
                        if (collections != null) {
                            for (let i = 0; i < collections.length; i++) {
                                if (notification.collectionIds.indexOf(collections[i].id) > -1) {
                                    shouldUpdate = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (shouldUpdate) {
                        const remoteCipher = yield this.apiService.getCipher(notification.id);
                        if (remoteCipher != null) {
                            const userId = yield this.userService.getUserId();
                            yield this.cipherService.upsert(new cipherData["a" /* CipherData */](remoteCipher, userId));
                            this.messagingService.send('syncedUpsertedCipher', { cipherId: notification.id });
                            return this.syncCompleted(true);
                        }
                    }
                }
                catch (e) {
                    if (e != null && e.statusCode === 404 && isEdit) {
                        yield this.cipherService.delete(notification.id);
                        this.messagingService.send('syncedDeletedCipher', { cipherId: notification.id });
                        return this.syncCompleted(true);
                    }
                }
            }
            return this.syncCompleted(false);
        });
    }
    syncDeleteCipher(notification) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            this.syncStarted();
            if (yield this.userService.isAuthenticated()) {
                yield this.cipherService.delete(notification.id);
                this.messagingService.send('syncedDeletedCipher', { cipherId: notification.id });
                return this.syncCompleted(true);
            }
            return this.syncCompleted(false);
        });
    }
    // Helpers
    syncStarted() {
        this.syncInProgress = true;
        this.messagingService.send('syncStarted');
    }
    syncCompleted(successfully) {
        this.syncInProgress = false;
        this.messagingService.send('syncCompleted', { successfully: successfully });
        return successfully;
    }
    needsSyncing(forceSync) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            if (forceSync) {
                return [true, false];
            }
            const lastSync = yield this.getLastSync();
            if (lastSync == null || lastSync.getTime() === 0) {
                return [true, false];
            }
            try {
                const response = yield this.apiService.getAccountRevisionDate();
                if (new Date(response) <= lastSync) {
                    return [false, false];
                }
                return [true, false];
            }
            catch (e) {
                return [false, true];
            }
        });
    }
    syncProfile(response) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            const stamp = yield this.userService.getSecurityStamp();
            if (stamp != null && stamp !== response.securityStamp) {
                if (this.logoutCallback != null) {
                    yield this.logoutCallback(true);
                }
                throw new Error('Stamp has changed');
            }
            yield this.cryptoService.setEncKey(response.key);
            yield this.cryptoService.setEncPrivateKey(response.privateKey);
            yield this.cryptoService.setOrgKeys(response.organizations);
            yield this.userService.setSecurityStamp(response.securityStamp);
            const organizations = {};
            response.organizations.forEach((o) => {
                organizations[o.id] = new OrganizationData(o);
            });
            return yield this.userService.replaceOrganizations(organizations);
        });
    }
    syncFolders(userId, response) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            const folders = {};
            response.forEach((f) => {
                folders[f.id] = new FolderData(f, userId);
            });
            return yield this.folderService.replace(folders);
        });
    }
    syncCollections(response) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            const collections = {};
            response.forEach((c) => {
                collections[c.id] = new CollectionData(c);
            });
            return yield this.collectionService.replace(collections);
        });
    }
    syncCiphers(userId, response) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            const ciphers = {};
            response.forEach((c) => {
                ciphers[c.id] = new cipherData["a" /* CipherData */](c, userId);
            });
            return yield this.cipherService.replace(ciphers);
        });
    }
    syncSettings(userId, response) {
        return sync_service_awaiter(this, void 0, void 0, function* () {
            let eqDomains = [];
            if (response != null && response.equivalentDomains != null) {
                eqDomains = eqDomains.concat(response.equivalentDomains);
            }
            if (response != null && response.globalEquivalentDomains != null) {
                response.globalEquivalentDomains.forEach((global) => {
                    if (global.domains.length > 0) {
                        eqDomains.push(global.domains);
                    }
                });
            }
            return this.settingsService.setEquivalentDomains(eqDomains);
        });
    }
}

// CONCATENATED MODULE: ./jslib/src/services/token.service.ts
var token_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const token_service_Keys = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    twoFactorTokenPrefix: 'twoFactorToken_',
};
class token_service_TokenService {
    constructor(storageService) {
        this.storageService = storageService;
    }
    setTokens(accessToken, refreshToken) {
        return Promise.all([
            this.setToken(accessToken),
            this.setRefreshToken(refreshToken),
        ]);
    }
    setToken(token) {
        this.token = token;
        this.decodedToken = null;
        return this.storageService.save(token_service_Keys.accessToken, token);
    }
    getToken() {
        return token_service_awaiter(this, void 0, void 0, function* () {
            if (this.token != null) {
                return this.token;
            }
            this.token = yield this.storageService.get(token_service_Keys.accessToken);
            return this.token;
        });
    }
    setRefreshToken(refreshToken) {
        this.refreshToken = refreshToken;
        return this.storageService.save(token_service_Keys.refreshToken, refreshToken);
    }
    getRefreshToken() {
        return token_service_awaiter(this, void 0, void 0, function* () {
            if (this.refreshToken != null) {
                return this.refreshToken;
            }
            this.refreshToken = yield this.storageService.get(token_service_Keys.refreshToken);
            return this.refreshToken;
        });
    }
    setTwoFactorToken(token, email) {
        return this.storageService.save(token_service_Keys.twoFactorTokenPrefix + email, token);
    }
    getTwoFactorToken(email) {
        return this.storageService.get(token_service_Keys.twoFactorTokenPrefix + email);
    }
    clearTwoFactorToken(email) {
        return this.storageService.remove(token_service_Keys.twoFactorTokenPrefix + email);
    }
    clearToken() {
        this.token = null;
        this.decodedToken = null;
        this.refreshToken = null;
        return Promise.all([
            this.storageService.remove(token_service_Keys.accessToken),
            this.storageService.remove(token_service_Keys.refreshToken),
        ]);
    }
    // jwthelper methods
    // ref https://github.com/auth0/angular-jwt/blob/master/src/angularJwt/services/jwt.js
    decodeToken() {
        if (this.decodedToken) {
            return this.decodedToken;
        }
        if (this.token == null) {
            throw new Error('Token not found.');
        }
        const parts = this.token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        const decoded = utils["a" /* Utils */].fromUrlB64ToUtf8(parts[1]);
        if (decoded == null) {
            throw new Error('Cannot decode the token');
        }
        this.decodedToken = JSON.parse(decoded);
        return this.decodedToken;
    }
    getTokenExpirationDate() {
        const decoded = this.decodeToken();
        if (typeof decoded.exp === 'undefined') {
            return null;
        }
        const d = new Date(0); // The 0 here is the key, which sets the date to the epoch
        d.setUTCSeconds(decoded.exp);
        return d;
    }
    tokenSecondsRemaining(offsetSeconds = 0) {
        const d = this.getTokenExpirationDate();
        if (d == null) {
            return 0;
        }
        const msRemaining = d.valueOf() - (new Date().valueOf() + (offsetSeconds * 1000));
        return Math.round(msRemaining / 1000);
    }
    tokenNeedsRefresh(minutes = 5) {
        const sRemaining = this.tokenSecondsRemaining();
        return sRemaining < (60 * minutes);
    }
    getUserId() {
        const decoded = this.decodeToken();
        if (typeof decoded.sub === 'undefined') {
            throw new Error('No user id found');
        }
        return decoded.sub;
    }
    getEmail() {
        const decoded = this.decodeToken();
        if (typeof decoded.email === 'undefined') {
            throw new Error('No email found');
        }
        return decoded.email;
    }
    getEmailVerified() {
        const decoded = this.decodeToken();
        if (typeof decoded.email_verified === 'undefined') {
            throw new Error('No email verification found');
        }
        return decoded.email_verified;
    }
    getName() {
        const decoded = this.decodeToken();
        if (typeof decoded.name === 'undefined') {
            return null;
        }
        return decoded.name;
    }
    getPremium() {
        const decoded = this.decodeToken();
        if (typeof decoded.premium === 'undefined') {
            return false;
        }
        return decoded.premium;
    }
    getIssuer() {
        const decoded = this.decodeToken();
        if (typeof decoded.iss === 'undefined') {
            throw new Error('No issuer found');
        }
        return decoded.iss;
    }
}

// CONCATENATED MODULE: ./jslib/src/services/totp.service.ts
var totp_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const B32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const SteamChars = '23456789BCDFGHJKMNPQRTVWXY';
class totp_service_TotpService {
    constructor(storageService, cryptoFunctionService) {
        this.storageService = storageService;
        this.cryptoFunctionService = cryptoFunctionService;
    }
    getCode(key) {
        return totp_service_awaiter(this, void 0, void 0, function* () {
            if (key == null) {
                return null;
            }
            let period = 30;
            let alg = 'sha1';
            let digits = 6;
            let keyB32 = key;
            const isOtpAuth = key.toLowerCase().indexOf('otpauth://') === 0;
            const isSteamAuth = !isOtpAuth && key.toLowerCase().indexOf('steam://') === 0;
            if (isOtpAuth) {
                const params = utils["a" /* Utils */].getQueryParams(key);
                if (params.has('digits') && params.get('digits') != null) {
                    try {
                        const digitParams = parseInt(params.get('digits').trim(), null);
                        if (digitParams > 10) {
                            digits = 10;
                        }
                        else if (digitParams > 0) {
                            digits = digitParams;
                        }
                    }
                    catch (_a) { }
                }
                if (params.has('period') && params.get('period') != null) {
                    try {
                        const periodParam = parseInt(params.get('period').trim(), null);
                        if (periodParam > 0) {
                            period = periodParam;
                        }
                    }
                    catch (_b) { }
                }
                if (params.has('secret') && params.get('secret') != null) {
                    keyB32 = params.get('secret');
                }
                if (params.has('algorithm') && params.get('algorithm') != null) {
                    const algParam = params.get('algorithm').toLowerCase();
                    if (algParam === 'sha1' || algParam === 'sha256' || algParam === 'sha512') {
                        alg = algParam;
                    }
                }
            }
            else if (isSteamAuth) {
                keyB32 = key.substr('steam://'.length);
                digits = 5;
            }
            const epoch = Math.round(new Date().getTime() / 1000.0);
            const timeHex = this.leftPad(this.decToHex(Math.floor(epoch / period)), 16, '0');
            const timeBytes = utils["a" /* Utils */].fromHexToArray(timeHex);
            const keyBytes = this.b32ToBytes(keyB32);
            if (!keyBytes.length || !timeBytes.length) {
                return null;
            }
            const hash = yield this.sign(keyBytes, timeBytes, alg);
            if (hash.length === 0) {
                return null;
            }
            /* tslint:disable */
            const offset = (hash[hash.length - 1] & 0xf);
            const binary = ((hash[offset] & 0x7f) << 24) | ((hash[offset + 1] & 0xff) << 16) |
                ((hash[offset + 2] & 0xff) << 8) | (hash[offset + 3] & 0xff);
            /* tslint:enable */
            let otp = '';
            if (isSteamAuth) {
                // tslint:disable-next-line
                let fullCode = binary & 0x7fffffff;
                for (let i = 0; i < digits; i++) {
                    otp += SteamChars[fullCode % SteamChars.length];
                    fullCode = Math.trunc(fullCode / SteamChars.length);
                }
            }
            else {
                otp = (binary % Math.pow(10, digits)).toString();
                otp = this.leftPad(otp, digits, '0');
            }
            return otp;
        });
    }
    getTimeInterval(key) {
        let period = 30;
        if (key != null && key.toLowerCase().indexOf('otpauth://') === 0) {
            const params = utils["a" /* Utils */].getQueryParams(key);
            if (params.has('period') && params.get('period') != null) {
                try {
                    period = parseInt(params.get('period').trim(), null);
                }
                catch (_a) { }
            }
        }
        return period;
    }
    isAutoCopyEnabled() {
        return totp_service_awaiter(this, void 0, void 0, function* () {
            return !(yield this.storageService.get(constants_service["a" /* ConstantsService */].disableAutoTotpCopyKey));
        });
    }
    // Helpers
    leftPad(s, l, p) {
        if (l + 1 >= s.length) {
            s = Array(l + 1 - s.length).join(p) + s;
        }
        return s;
    }
    decToHex(d) {
        return (d < 15.5 ? '0' : '') + Math.round(d).toString(16);
    }
    b32ToHex(s) {
        s = s.toUpperCase();
        let cleanedInput = '';
        for (let i = 0; i < s.length; i++) {
            if (B32Chars.indexOf(s[i]) < 0) {
                continue;
            }
            cleanedInput += s[i];
        }
        s = cleanedInput;
        let bits = '';
        let hex = '';
        for (let i = 0; i < s.length; i++) {
            const byteIndex = B32Chars.indexOf(s.charAt(i));
            if (byteIndex < 0) {
                continue;
            }
            bits += this.leftPad(byteIndex.toString(2), 5, '0');
        }
        for (let i = 0; i + 4 <= bits.length; i += 4) {
            const chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16);
        }
        return hex;
    }
    b32ToBytes(s) {
        return utils["a" /* Utils */].fromHexToArray(this.b32ToHex(s));
    }
    sign(keyBytes, timeBytes, alg) {
        return totp_service_awaiter(this, void 0, void 0, function* () {
            const signature = yield this.cryptoFunctionService.hmac(timeBytes.buffer, keyBytes.buffer, alg);
            return new Uint8Array(signature);
        });
    }
}

// EXTERNAL MODULE: ./jslib/src/enums/organizationUserStatusType.ts
var organizationUserStatusType = __webpack_require__(140);

// CONCATENATED MODULE: ./jslib/src/enums/organizationUserType.ts
var OrganizationUserType;
(function (OrganizationUserType) {
    OrganizationUserType[OrganizationUserType["Owner"] = 0] = "Owner";
    OrganizationUserType[OrganizationUserType["Admin"] = 1] = "Admin";
    OrganizationUserType[OrganizationUserType["User"] = 2] = "User";
    OrganizationUserType[OrganizationUserType["Manager"] = 3] = "Manager";
})(OrganizationUserType || (OrganizationUserType = {}));

// CONCATENATED MODULE: ./jslib/src/models/domain/organization.ts


class organization_Organization {
    constructor(obj) {
        if (obj == null) {
            return;
        }
        this.id = obj.id;
        this.name = obj.name;
        this.status = obj.status;
        this.type = obj.type;
        this.enabled = obj.enabled;
        this.useGroups = obj.useGroups;
        this.useDirectory = obj.useDirectory;
        this.useEvents = obj.useEvents;
        this.useTotp = obj.useTotp;
        this.use2fa = obj.use2fa;
        this.useApi = obj.useApi;
        this.selfHost = obj.selfHost;
        this.usersGetPremium = obj.usersGetPremium;
        this.seats = obj.seats;
        this.maxCollections = obj.maxCollections;
        this.maxStorageGb = obj.maxStorageGb;
    }
    get canAccess() {
        if (this.type === OrganizationUserType.Owner) {
            return true;
        }
        return this.enabled && this.status === organizationUserStatusType["a" /* OrganizationUserStatusType */].Confirmed;
    }
    get isManager() {
        return this.type === OrganizationUserType.Manager || this.type === OrganizationUserType.Owner ||
            this.type === OrganizationUserType.Admin;
    }
    get isAdmin() {
        return this.type === OrganizationUserType.Owner || this.type === OrganizationUserType.Admin;
    }
    get isOwner() {
        return this.type === OrganizationUserType.Owner;
    }
}

// CONCATENATED MODULE: ./jslib/src/services/user.service.ts
var user_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const user_service_Keys = {
    userId: 'userId',
    userEmail: 'userEmail',
    stamp: 'securityStamp',
    kdf: 'kdf',
    kdfIterations: 'kdfIterations',
    organizationsPrefix: 'organizations_',
};
class user_service_UserService {
    constructor(tokenService, storageService) {
        this.tokenService = tokenService;
        this.storageService = storageService;
    }
    setInformation(userId, email, kdf, kdfIterations) {
        this.email = email;
        this.userId = userId;
        this.kdf = kdf;
        this.kdfIterations = kdfIterations;
        return Promise.all([
            this.storageService.save(user_service_Keys.userEmail, email),
            this.storageService.save(user_service_Keys.userId, userId),
            this.storageService.save(user_service_Keys.kdf, kdf),
            this.storageService.save(user_service_Keys.kdfIterations, kdfIterations),
        ]);
    }
    setSecurityStamp(stamp) {
        this.stamp = stamp;
        return this.storageService.save(user_service_Keys.stamp, stamp);
    }
    getUserId() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            if (this.userId == null) {
                this.userId = yield this.storageService.get(user_service_Keys.userId);
            }
            return this.userId;
        });
    }
    getEmail() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            if (this.email == null) {
                this.email = yield this.storageService.get(user_service_Keys.userEmail);
            }
            return this.email;
        });
    }
    getSecurityStamp() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            if (this.stamp == null) {
                this.stamp = yield this.storageService.get(user_service_Keys.stamp);
            }
            return this.stamp;
        });
    }
    getKdf() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            if (this.kdf == null) {
                this.kdf = yield this.storageService.get(user_service_Keys.kdf);
            }
            return this.kdf;
        });
    }
    getKdfIterations() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            if (this.kdfIterations == null) {
                this.kdfIterations = yield this.storageService.get(user_service_Keys.kdfIterations);
            }
            return this.kdfIterations;
        });
    }
    clear() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.getUserId();
            yield Promise.all([
                this.storageService.remove(user_service_Keys.userId),
                this.storageService.remove(user_service_Keys.userEmail),
                this.storageService.remove(user_service_Keys.stamp),
                this.storageService.remove(user_service_Keys.kdf),
                this.storageService.remove(user_service_Keys.kdfIterations),
                this.clearOrganizations(userId),
            ]);
            this.userId = this.email = this.stamp = null;
            this.kdf = null;
            this.kdfIterations = null;
        });
    }
    isAuthenticated() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenService.getToken();
            if (token == null) {
                return false;
            }
            const userId = yield this.getUserId();
            return userId != null;
        });
    }
    canAccessPremium() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            const tokenPremium = this.tokenService.getPremium();
            if (tokenPremium) {
                return true;
            }
            const orgs = yield this.getAllOrganizations();
            for (let i = 0; i < orgs.length; i++) {
                if (orgs[i].usersGetPremium && orgs[i].enabled) {
                    return true;
                }
            }
            return false;
        });
    }
    getOrganization(id) {
        return user_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.getUserId();
            const organizations = yield this.storageService.get(user_service_Keys.organizationsPrefix + userId);
            if (organizations == null || !organizations.hasOwnProperty(id)) {
                return null;
            }
            return new organization_Organization(organizations[id]);
        });
    }
    getAllOrganizations() {
        return user_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.getUserId();
            const organizations = yield this.storageService.get(user_service_Keys.organizationsPrefix + userId);
            const response = [];
            for (const id in organizations) {
                if (organizations.hasOwnProperty(id)) {
                    response.push(new organization_Organization(organizations[id]));
                }
            }
            return response;
        });
    }
    replaceOrganizations(organizations) {
        return user_service_awaiter(this, void 0, void 0, function* () {
            const userId = yield this.getUserId();
            yield this.storageService.save(user_service_Keys.organizationsPrefix + userId, organizations);
        });
    }
    clearOrganizations(userId) {
        return user_service_awaiter(this, void 0, void 0, function* () {
            yield this.storageService.remove(user_service_Keys.organizationsPrefix + userId);
        });
    }
}

// CONCATENATED MODULE: ./jslib/src/services/index.ts





















// CONCATENATED MODULE: ./jslib/src/models/data/eventData.ts
class EventData {
}

// CONCATENATED MODULE: ./jslib/src/models/request/eventRequest.ts
class EventRequest {
}

// CONCATENATED MODULE: ./jslib/src/services/event.service.ts
var event_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class event_service_EventService {
    constructor(storageService, apiService, userService, cipherService) {
        this.storageService = storageService;
        this.apiService = apiService;
        this.userService = userService;
        this.cipherService = cipherService;
        this.inited = false;
    }
    init(checkOnInterval) {
        if (this.inited) {
            return;
        }
        this.inited = true;
        if (checkOnInterval) {
            this.uploadEvents();
            setInterval(() => this.uploadEvents(), 60 * 1000); // check every 60 seconds
        }
    }
    collect(eventType, cipherId = null, uploadImmediately = false) {
        return event_service_awaiter(this, void 0, void 0, function* () {
            const authed = yield this.userService.isAuthenticated();
            if (!authed) {
                return;
            }
            const organizations = yield this.userService.getAllOrganizations();
            if (organizations == null) {
                return;
            }
            const orgIds = new Set(organizations.filter((o) => o.useEvents).map((o) => o.id));
            if (orgIds.size === 0) {
                return;
            }
            if (cipherId != null) {
                const cipher = yield this.cipherService.get(cipherId);
                if (cipher == null || cipher.organizationId == null || !orgIds.has(cipher.organizationId)) {
                    return;
                }
            }
            let eventCollection = yield this.storageService.get(constants_service["a" /* ConstantsService */].eventCollectionKey);
            if (eventCollection == null) {
                eventCollection = [];
            }
            const event = new EventData();
            event.type = eventType;
            event.cipherId = cipherId;
            event.date = new Date().toISOString();
            eventCollection.push(event);
            yield this.storageService.save(constants_service["a" /* ConstantsService */].eventCollectionKey, eventCollection);
            if (uploadImmediately) {
                yield this.uploadEvents();
            }
        });
    }
    uploadEvents() {
        return event_service_awaiter(this, void 0, void 0, function* () {
            const authed = yield this.userService.isAuthenticated();
            if (!authed) {
                return;
            }
            const eventCollection = yield this.storageService.get(constants_service["a" /* ConstantsService */].eventCollectionKey);
            if (eventCollection == null || eventCollection.length === 0) {
                return;
            }
            const request = eventCollection.map((e) => {
                const req = new EventRequest();
                req.type = e.type;
                req.cipherId = e.cipherId;
                req.date = e.date;
                return req;
            });
            try {
                yield this.apiService.postEventsCollect(request);
                this.clearEvents();
            }
            catch (_a) { }
        });
    }
    clearEvents() {
        return event_service_awaiter(this, void 0, void 0, function* () {
            yield this.storageService.remove(constants_service["a" /* ConstantsService */].eventCollectionKey);
        });
    }
}

// EXTERNAL MODULE: ./node_modules/papaparse/papaparse.js
var papaparse = __webpack_require__(297);

// EXTERNAL MODULE: ./jslib/src/models/domain/cipher.ts
var domain_cipher = __webpack_require__(121);

// EXTERNAL MODULE: ./jslib/src/models/view/cipherView.ts
var cipherView = __webpack_require__(75);

// EXTERNAL MODULE: ./jslib/src/models/view/cardView.ts
var cardView = __webpack_require__(76);

// CONCATENATED MODULE: ./jslib/src/models/export/card.ts

class card_Card {
    static template() {
        const req = new card_Card();
        req.cardholderName = 'John Doe';
        req.brand = 'visa';
        req.number = '4242424242424242';
        req.expMonth = '04';
        req.expYear = '2023';
        req.code = '123';
        return req;
    }
    static toView(req, view = new cardView["a" /* CardView */]()) {
        view.cardholderName = req.cardholderName;
        view.brand = req.brand;
        view.number = req.number;
        view.expMonth = req.expMonth;
        view.expYear = req.expYear;
        view.code = req.code;
        return view;
    }
    constructor(o) {
        if (o == null) {
            return;
        }
        this.cardholderName = o.cardholderName;
        this.brand = o.brand;
        this.number = o.number;
        this.expMonth = o.expMonth;
        this.expYear = o.expYear;
        this.code = o.code;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/view/fieldView.ts
var fieldView = __webpack_require__(141);

// CONCATENATED MODULE: ./jslib/src/models/export/field.ts


class field_Field {
    static template() {
        const req = new field_Field();
        req.name = 'Field name';
        req.value = 'Some value';
        req.type = fieldType["a" /* FieldType */].Text;
        return req;
    }
    static toView(req, view = new fieldView["a" /* FieldView */]()) {
        view.type = req.type;
        view.value = req.value;
        view.name = req.name;
        return view;
    }
    constructor(o) {
        if (o == null) {
            return;
        }
        this.name = o.name;
        this.value = o.value;
        this.type = o.type;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/view/identityView.ts
var identityView = __webpack_require__(77);

// CONCATENATED MODULE: ./jslib/src/models/export/identity.ts

class identity_Identity {
    static template() {
        const req = new identity_Identity();
        req.title = 'Mr';
        req.firstName = 'John';
        req.middleName = 'William';
        req.lastName = 'Doe';
        req.address1 = '123 Any St';
        req.address2 = 'Apt #123';
        req.address3 = null;
        req.city = 'New York';
        req.state = 'NY';
        req.postalCode = '10001';
        req.country = 'US';
        req.company = 'Acme Inc.';
        req.email = 'john@company.com';
        req.phone = '5555551234';
        req.ssn = '000-123-4567';
        req.username = 'jdoe';
        req.passportNumber = 'US-123456789';
        req.licenseNumber = 'D123-12-123-12333';
        return req;
    }
    static toView(req, view = new identityView["a" /* IdentityView */]()) {
        view.title = req.title;
        view.firstName = req.firstName;
        view.middleName = req.middleName;
        view.lastName = req.lastName;
        view.address1 = req.address1;
        view.address2 = req.address2;
        view.address3 = req.address3;
        view.city = req.city;
        view.state = req.state;
        view.postalCode = req.postalCode;
        view.country = req.country;
        view.company = req.company;
        view.email = req.email;
        view.phone = req.phone;
        view.ssn = req.ssn;
        view.username = req.username;
        view.passportNumber = req.passportNumber;
        view.licenseNumber = req.licenseNumber;
        return view;
    }
    constructor(o) {
        if (o == null) {
            return;
        }
        this.title = o.title;
        this.firstName = o.firstName;
        this.middleName = o.middleName;
        this.lastName = o.lastName;
        this.address1 = o.address1;
        this.address2 = o.address2;
        this.address3 = o.address3;
        this.city = o.city;
        this.state = o.state;
        this.postalCode = o.postalCode;
        this.country = o.country;
        this.company = o.company;
        this.email = o.email;
        this.phone = o.phone;
        this.ssn = o.ssn;
        this.username = o.username;
        this.passportNumber = o.passportNumber;
        this.licenseNumber = o.licenseNumber;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/view/loginUriView.ts
var loginUriView = __webpack_require__(92);

// CONCATENATED MODULE: ./jslib/src/models/export/loginUri.ts

class loginUri_LoginUri {
    constructor(o) {
        this.match = null;
        if (o == null) {
            return;
        }
        this.uri = o.uri;
        this.match = o.match;
    }
    static template() {
        const req = new loginUri_LoginUri();
        req.uri = 'https://google.com';
        req.match = null;
        return req;
    }
    static toView(req, view = new loginUriView["a" /* LoginUriView */]()) {
        view.uri = req.uri;
        view.match = req.match;
        return view;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/view/loginView.ts
var loginView = __webpack_require__(65);

// CONCATENATED MODULE: ./jslib/src/models/export/login.ts


class login_Login {
    static template() {
        const req = new login_Login();
        req.uris = [];
        req.username = 'jdoe';
        req.password = 'myp@ssword123';
        req.totp = 'JBSWY3DPEHPK3PXP';
        return req;
    }
    static toView(req, view = new loginView["a" /* LoginView */]()) {
        if (req.uris != null) {
            view.uris = req.uris.map((u) => loginUri_LoginUri.toView(u));
        }
        view.username = req.username;
        view.password = req.password;
        view.totp = req.totp;
        return view;
    }
    constructor(o) {
        if (o == null) {
            return;
        }
        if (o.uris != null) {
            this.uris = o.uris.map((u) => new loginUri_LoginUri(u));
        }
        this.username = o.username;
        this.password = o.password;
        this.totp = o.totp;
    }
}

// EXTERNAL MODULE: ./jslib/src/models/view/secureNoteView.ts
var secureNoteView = __webpack_require__(78);

// CONCATENATED MODULE: ./jslib/src/models/export/secureNote.ts


class secureNote_SecureNote {
    static template() {
        const req = new secureNote_SecureNote();
        req.type = secureNoteType["a" /* SecureNoteType */].Generic;
        return req;
    }
    static toView(req, view = new secureNoteView["a" /* SecureNoteView */]()) {
        view.type = req.type;
        return view;
    }
    constructor(o) {
        if (o == null) {
            return;
        }
        this.type = o.type;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/export/cipher.ts







class cipher_Cipher {
    static template() {
        const req = new cipher_Cipher();
        req.organizationId = null;
        req.folderId = null;
        req.type = cipherType["a" /* CipherType */].Login;
        req.name = 'Item name';
        req.notes = 'Some notes about this item.';
        req.favorite = false;
        req.fields = [];
        req.login = null;
        req.secureNote = null;
        req.card = null;
        req.identity = null;
        return req;
    }
    static toView(req, view = new cipherView["a" /* CipherView */]()) {
        view.type = req.type;
        view.folderId = req.folderId;
        if (view.organizationId == null) {
            view.organizationId = req.organizationId;
        }
        view.name = req.name;
        view.notes = req.notes;
        view.favorite = req.favorite;
        if (req.fields != null) {
            view.fields = req.fields.map((f) => field_Field.toView(f));
        }
        switch (req.type) {
            case cipherType["a" /* CipherType */].Login:
                view.login = login_Login.toView(req.login);
                break;
            case cipherType["a" /* CipherType */].SecureNote:
                view.secureNote = secureNote_SecureNote.toView(req.secureNote);
                break;
            case cipherType["a" /* CipherType */].Card:
                view.card = card_Card.toView(req.card);
                break;
            case cipherType["a" /* CipherType */].Identity:
                view.identity = identity_Identity.toView(req.identity);
                break;
        }
        return view;
    }
    // Use build method instead of ctor so that we can control order of JSON stringify for pretty print
    build(o) {
        this.organizationId = o.organizationId;
        this.folderId = o.folderId;
        this.type = o.type;
        this.name = o.name;
        this.notes = o.notes;
        this.favorite = o.favorite;
        if (o.fields != null) {
            this.fields = o.fields.map((f) => new field_Field(f));
        }
        switch (o.type) {
            case cipherType["a" /* CipherType */].Login:
                this.login = new login_Login(o.login);
                break;
            case cipherType["a" /* CipherType */].SecureNote:
                this.secureNote = new secureNote_SecureNote(o.secureNote);
                break;
            case cipherType["a" /* CipherType */].Card:
                this.card = new card_Card(o.card);
                break;
            case cipherType["a" /* CipherType */].Identity:
                this.identity = new identity_Identity(o.identity);
                break;
        }
    }
}

// CONCATENATED MODULE: ./jslib/src/models/export/cipherWithIds.ts

class cipherWithIds_CipherWithIds extends cipher_Cipher {
    // Use build method instead of ctor so that we can control order of JSON stringify for pretty print
    build(o) {
        this.id = o.id;
        super.build(o);
        this.collectionIds = o.collectionIds;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/export/collection.ts

class export_collection_Collection {
    static template() {
        const req = new export_collection_Collection();
        req.organizationId = '00000000-0000-0000-0000-000000000000';
        req.name = 'Collection name';
        req.externalId = null;
        return req;
    }
    static toView(req, view = new collectionView_CollectionView()) {
        view.name = req.name;
        view.externalId = req.externalId;
        if (view.organizationId == null) {
            view.organizationId = req.organizationId;
        }
        return view;
    }
    // Use build method instead of ctor so that we can control order of JSON stringify for pretty print
    build(o) {
        this.organizationId = o.organizationId;
        this.name = o.name;
        this.externalId = o.externalId;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/export/collectionWithId.ts

class collectionWithId_CollectionWithId extends export_collection_Collection {
    // Use build method instead of ctor so that we can control order of JSON stringify for pretty print
    build(o) {
        this.id = o.id;
        super.build(o);
    }
}

// CONCATENATED MODULE: ./jslib/src/models/export/folder.ts

class export_folder_Folder {
    static template() {
        const req = new export_folder_Folder();
        req.name = 'Folder name';
        return req;
    }
    static toView(req, view = new folderView["a" /* FolderView */]()) {
        view.name = req.name;
        return view;
    }
    // Use build method instead of ctor so that we can control order of JSON stringify for pretty print
    build(o) {
        this.name = o.name;
    }
}

// CONCATENATED MODULE: ./jslib/src/models/export/folderWithId.ts

class folderWithId_FolderWithId extends export_folder_Folder {
    // Use build method instead of ctor so that we can control order of JSON stringify for pretty print
    build(o) {
        this.id = o.id;
        super.build(o);
    }
}

// CONCATENATED MODULE: ./jslib/src/services/export.service.ts
var export_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









class export_service_ExportService {
    constructor(folderService, cipherService, apiService) {
        this.folderService = folderService;
        this.cipherService = cipherService;
        this.apiService = apiService;
    }
    getExport(format = 'csv') {
        return export_service_awaiter(this, void 0, void 0, function* () {
            let decFolders = [];
            let decCiphers = [];
            const promises = [];
            promises.push(this.folderService.getAllDecrypted().then((folders) => {
                decFolders = folders;
            }));
            promises.push(this.cipherService.getAllDecrypted().then((ciphers) => {
                decCiphers = ciphers;
            }));
            yield Promise.all(promises);
            if (format === 'csv') {
                const foldersMap = new Map();
                decFolders.forEach((f) => {
                    foldersMap.set(f.id, f);
                });
                const exportCiphers = [];
                decCiphers.forEach((c) => {
                    // only export logins and secure notes
                    if (c.type !== cipherType["a" /* CipherType */].Login && c.type !== cipherType["a" /* CipherType */].SecureNote) {
                        return;
                    }
                    if (c.organizationId != null) {
                        return;
                    }
                    const cipher = {};
                    cipher.folder = c.folderId != null && foldersMap.has(c.folderId) ?
                        foldersMap.get(c.folderId).name : null;
                    cipher.favorite = c.favorite ? 1 : null;
                    this.buildCommonCipher(cipher, c);
                    exportCiphers.push(cipher);
                });
                return papaparse["unparse"](exportCiphers);
            }
            else {
                const jsonDoc = {
                    folders: [],
                    items: [],
                };
                decFolders.forEach((f) => {
                    if (f.id == null) {
                        return;
                    }
                    const folder = new folderWithId_FolderWithId();
                    folder.build(f);
                    jsonDoc.folders.push(folder);
                });
                decCiphers.forEach((c) => {
                    if (c.organizationId != null) {
                        return;
                    }
                    const cipher = new cipherWithIds_CipherWithIds();
                    cipher.build(c);
                    cipher.collectionIds = null;
                    jsonDoc.items.push(cipher);
                });
                return JSON.stringify(jsonDoc, null, '  ');
            }
        });
    }
    getOrganizationExport(organizationId, format = 'csv') {
        return export_service_awaiter(this, void 0, void 0, function* () {
            const decCollections = [];
            const decCiphers = [];
            const promises = [];
            promises.push(this.apiService.getCollections(organizationId).then((collections) => {
                const collectionPromises = [];
                if (collections != null && collections.data != null && collections.data.length > 0) {
                    collections.data.forEach((c) => {
                        const collection = new collection_Collection(new CollectionData(c));
                        collectionPromises.push(collection.decrypt().then((decCol) => {
                            decCollections.push(decCol);
                        }));
                    });
                }
                return Promise.all(collectionPromises);
            }));
            promises.push(this.apiService.getCiphersOrganization(organizationId).then((ciphers) => {
                const cipherPromises = [];
                if (ciphers != null && ciphers.data != null && ciphers.data.length > 0) {
                    ciphers.data.forEach((c) => {
                        const cipher = new domain_cipher["a" /* Cipher */](new cipherData["a" /* CipherData */](c));
                        cipherPromises.push(cipher.decrypt().then((decCipher) => {
                            decCiphers.push(decCipher);
                        }));
                    });
                }
                return Promise.all(cipherPromises);
            }));
            yield Promise.all(promises);
            if (format === 'csv') {
                const collectionsMap = new Map();
                decCollections.forEach((c) => {
                    collectionsMap.set(c.id, c);
                });
                const exportCiphers = [];
                decCiphers.forEach((c) => {
                    // only export logins and secure notes
                    if (c.type !== cipherType["a" /* CipherType */].Login && c.type !== cipherType["a" /* CipherType */].SecureNote) {
                        return;
                    }
                    const cipher = {};
                    cipher.collections = [];
                    if (c.collectionIds != null) {
                        cipher.collections = c.collectionIds.filter((id) => collectionsMap.has(id))
                            .map((id) => collectionsMap.get(id).name);
                    }
                    this.buildCommonCipher(cipher, c);
                    exportCiphers.push(cipher);
                });
                return papaparse["unparse"](exportCiphers);
            }
            else {
                const jsonDoc = {
                    collections: [],
                    items: [],
                };
                decCollections.forEach((c) => {
                    const collection = new collectionWithId_CollectionWithId();
                    collection.build(c);
                    jsonDoc.collections.push(collection);
                });
                decCiphers.forEach((c) => {
                    const cipher = new cipherWithIds_CipherWithIds();
                    cipher.build(c);
                    jsonDoc.items.push(cipher);
                });
                return JSON.stringify(jsonDoc, null, '  ');
            }
        });
    }
    getFileName(prefix = null, extension = 'csv') {
        const now = new Date();
        const dateString = now.getFullYear() + '' + this.padNumber(now.getMonth() + 1, 2) + '' + this.padNumber(now.getDate(), 2) +
            this.padNumber(now.getHours(), 2) + '' + this.padNumber(now.getMinutes(), 2) +
            this.padNumber(now.getSeconds(), 2);
        return 'bitwarden' + (prefix ? ('_' + prefix) : '') + '_export_' + dateString + '.' + extension;
    }
    padNumber(num, width, padCharacter = '0') {
        const numString = num.toString();
        return numString.length >= width ? numString :
            new Array(width - numString.length + 1).join(padCharacter) + numString;
    }
    buildCommonCipher(cipher, c) {
        cipher.type = null;
        cipher.name = c.name;
        cipher.notes = c.notes;
        cipher.fields = null;
        // Login props
        cipher.login_uri = null;
        cipher.login_username = null;
        cipher.login_password = null;
        cipher.login_totp = null;
        if (c.fields) {
            c.fields.forEach((f) => {
                if (!cipher.fields) {
                    cipher.fields = '';
                }
                else {
                    cipher.fields += '\n';
                }
                cipher.fields += ((f.name || '') + ': ' + f.value);
            });
        }
        switch (c.type) {
            case cipherType["a" /* CipherType */].Login:
                cipher.type = 'login';
                cipher.login_username = c.login.username;
                cipher.login_password = c.login.password;
                cipher.login_totp = c.login.totp;
                if (c.login.uris) {
                    cipher.login_uri = [];
                    c.login.uris.forEach((u) => {
                        cipher.login_uri.push(u.uri);
                    });
                }
                break;
            case cipherType["a" /* CipherType */].SecureNote:
                cipher.type = 'note';
                break;
            default:
                return;
        }
        return cipher;
    }
}

// EXTERNAL MODULE: ./node_modules/@aspnet/signalr/dist/esm/index.js + 12 modules
var esm = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@aspnet/signalr-protocol-msgpack/dist/esm/index.js + 3 modules
var dist_esm = __webpack_require__(415);

// CONCATENATED MODULE: ./jslib/src/enums/notificationType.ts
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["SyncCipherUpdate"] = 0] = "SyncCipherUpdate";
    NotificationType[NotificationType["SyncCipherCreate"] = 1] = "SyncCipherCreate";
    NotificationType[NotificationType["SyncLoginDelete"] = 2] = "SyncLoginDelete";
    NotificationType[NotificationType["SyncFolderDelete"] = 3] = "SyncFolderDelete";
    NotificationType[NotificationType["SyncCiphers"] = 4] = "SyncCiphers";
    NotificationType[NotificationType["SyncVault"] = 5] = "SyncVault";
    NotificationType[NotificationType["SyncOrgKeys"] = 6] = "SyncOrgKeys";
    NotificationType[NotificationType["SyncFolderCreate"] = 7] = "SyncFolderCreate";
    NotificationType[NotificationType["SyncFolderUpdate"] = 8] = "SyncFolderUpdate";
    NotificationType[NotificationType["SyncCipherDelete"] = 9] = "SyncCipherDelete";
    NotificationType[NotificationType["SyncSettings"] = 10] = "SyncSettings";
    NotificationType[NotificationType["LogOut"] = 11] = "LogOut";
})(NotificationType || (NotificationType = {}));

// CONCATENATED MODULE: ./jslib/src/models/response/notificationResponse.ts


class notificationResponse_NotificationResponse extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.contextId = this.getResponseProperty('ContextId');
        this.type = this.getResponseProperty('Type');
        const payload = this.getResponseProperty('Payload');
        switch (this.type) {
            case NotificationType.SyncCipherCreate:
            case NotificationType.SyncCipherDelete:
            case NotificationType.SyncCipherUpdate:
            case NotificationType.SyncLoginDelete:
                this.payload = new notificationResponse_SyncCipherNotification(payload);
                break;
            case NotificationType.SyncFolderCreate:
            case NotificationType.SyncFolderDelete:
            case NotificationType.SyncFolderUpdate:
                this.payload = new notificationResponse_SyncFolderNotification(payload);
                break;
            case NotificationType.SyncVault:
            case NotificationType.SyncCiphers:
            case NotificationType.SyncOrgKeys:
            case NotificationType.SyncSettings:
            case NotificationType.LogOut:
                this.payload = new notificationResponse_UserNotification(payload);
                break;
            default:
                break;
        }
    }
}
class notificationResponse_SyncCipherNotification extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.userId = this.getResponseProperty('UserId');
        this.organizationId = this.getResponseProperty('OrganizationId');
        this.collectionIds = this.getResponseProperty('CollectionIds');
        this.revisionDate = new Date(this.getResponseProperty('RevisionDate'));
    }
}
class notificationResponse_SyncFolderNotification extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.id = this.getResponseProperty('Id');
        this.userId = this.getResponseProperty('UserId');
        this.revisionDate = new Date(this.getResponseProperty('RevisionDate'));
    }
}
class notificationResponse_UserNotification extends baseResponse["a" /* BaseResponse */] {
    constructor(response) {
        super(response);
        this.userId = this.getResponseProperty('UserId');
        this.date = new Date(this.getResponseProperty('Date'));
    }
}

// CONCATENATED MODULE: ./jslib/src/services/notifications.service.ts
var notifications_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class notifications_service_NotificationsService {
    constructor(userService, syncService, appIdService, apiService, lockService, logoutCallback) {
        this.userService = userService;
        this.syncService = syncService;
        this.appIdService = appIdService;
        this.apiService = apiService;
        this.lockService = lockService;
        this.logoutCallback = logoutCallback;
        this.connected = false;
        this.inited = false;
        this.inactive = false;
        this.reconnectTimer = null;
    }
    init(environmentService) {
        return notifications_service_awaiter(this, void 0, void 0, function* () {
            this.inited = false;
            this.url = 'https://notifications.bitwarden.com';
            if (environmentService.notificationsUrl != null) {
                this.url = environmentService.notificationsUrl;
            }
            else if (environmentService.baseUrl != null) {
                this.url = environmentService.baseUrl + '/notifications';
            }
            // Set notifications server URL to `https://-` to effectively disable communication
            // with the notifications server from the client app
            if (this.url === 'https://-') {
                return;
            }
            if (this.signalrConnection != null) {
                this.signalrConnection.off('ReceiveMessage');
                this.signalrConnection.off('Heartbeat');
                yield this.signalrConnection.stop();
                this.connected = false;
                this.signalrConnection = null;
            }
            this.signalrConnection = new esm["a" /* HubConnectionBuilder */]()
                .withUrl(this.url + '/hub', {
                accessTokenFactory: () => this.apiService.getActiveBearerToken(),
            })
                .withHubProtocol(new dist_esm["a" /* MessagePackHubProtocol */]())
                // .configureLogging(signalR.LogLevel.Trace)
                .build();
            this.signalrConnection.on('ReceiveMessage', (data) => this.processNotification(new notificationResponse_NotificationResponse(data)));
            this.signalrConnection.on('Heartbeat', (data) => { });
            this.signalrConnection.onclose(() => {
                this.connected = false;
                this.reconnect(true);
            });
            this.inited = true;
            if (yield this.isAuthedAndUnlocked()) {
                yield this.reconnect(false);
            }
        });
    }
    updateConnection(sync = false) {
        return notifications_service_awaiter(this, void 0, void 0, function* () {
            if (!this.inited) {
                return;
            }
            try {
                if (yield this.isAuthedAndUnlocked()) {
                    yield this.reconnect(sync);
                }
                else {
                    yield this.signalrConnection.stop();
                }
            }
            catch (e) {
                // tslint:disable-next-line
                console.error(e.toString());
            }
        });
    }
    reconnectFromActivity() {
        return notifications_service_awaiter(this, void 0, void 0, function* () {
            this.inactive = false;
            if (this.inited && !this.connected) {
                yield this.reconnect(true);
            }
        });
    }
    disconnectFromInactivity() {
        return notifications_service_awaiter(this, void 0, void 0, function* () {
            this.inactive = true;
            if (this.inited && this.connected) {
                yield this.signalrConnection.stop();
            }
        });
    }
    processNotification(notification) {
        return notifications_service_awaiter(this, void 0, void 0, function* () {
            const appId = yield this.appIdService.getAppId();
            if (notification == null || notification.contextId === appId) {
                return;
            }
            const isAuthenticated = yield this.userService.isAuthenticated();
            const payloadUserId = notification.payload.userId || notification.payload.UserId;
            const myUserId = yield this.userService.getUserId();
            if (isAuthenticated && payloadUserId != null && payloadUserId !== myUserId) {
                return;
            }
            switch (notification.type) {
                case NotificationType.SyncCipherCreate:
                case NotificationType.SyncCipherUpdate:
                    yield this.syncService.syncUpsertCipher(notification.payload, notification.type === NotificationType.SyncCipherUpdate);
                    break;
                case NotificationType.SyncCipherDelete:
                case NotificationType.SyncLoginDelete:
                    yield this.syncService.syncDeleteCipher(notification.payload);
                    break;
                case NotificationType.SyncFolderCreate:
                case NotificationType.SyncFolderUpdate:
                    yield this.syncService.syncUpsertFolder(notification.payload, notification.type === NotificationType.SyncFolderUpdate);
                    break;
                case NotificationType.SyncFolderDelete:
                    yield this.syncService.syncDeleteFolder(notification.payload);
                    break;
                case NotificationType.SyncVault:
                case NotificationType.SyncCiphers:
                case NotificationType.SyncSettings:
                    if (isAuthenticated) {
                        yield this.syncService.fullSync(false);
                    }
                    break;
                case NotificationType.SyncOrgKeys:
                    if (isAuthenticated) {
                        yield this.apiService.refreshIdentityToken();
                        yield this.syncService.fullSync(true);
                        // Stop so a reconnect can be made
                        yield this.signalrConnection.stop();
                    }
                    break;
                case NotificationType.LogOut:
                    if (isAuthenticated) {
                        this.logoutCallback();
                    }
                    break;
                default:
                    break;
            }
        });
    }
    reconnect(sync) {
        return notifications_service_awaiter(this, void 0, void 0, function* () {
            if (this.reconnectTimer != null) {
                clearTimeout(this.reconnectTimer);
                this.reconnectTimer = null;
            }
            if (this.connected || !this.inited || this.inactive) {
                return;
            }
            const authedAndUnlocked = yield this.isAuthedAndUnlocked();
            if (!authedAndUnlocked) {
                return;
            }
            try {
                yield this.signalrConnection.start();
                this.connected = true;
                if (sync) {
                    yield this.syncService.fullSync(false);
                }
            }
            catch (_a) { }
            if (!this.connected) {
                this.reconnectTimer = setTimeout(() => this.reconnect(sync), this.random(120000, 300000));
            }
        });
    }
    isAuthedAndUnlocked() {
        return notifications_service_awaiter(this, void 0, void 0, function* () {
            if (yield this.userService.isAuthenticated()) {
                const locked = yield this.lockService.isLocked();
                return !locked;
            }
            return false;
        });
    }
    random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// EXTERNAL MODULE: ./jslib/src/services/search.service.ts
var search_service = __webpack_require__(171);

// CONCATENATED MODULE: ./jslib/src/services/system.service.ts
var system_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class system_service_SystemService {
    constructor(storageService, lockService, messagingService, platformUtilsService, reloadCallback = null) {
        this.storageService = storageService;
        this.lockService = lockService;
        this.messagingService = messagingService;
        this.platformUtilsService = platformUtilsService;
        this.reloadCallback = reloadCallback;
        this.reloadInterval = null;
        this.clearClipboardTimeout = null;
        this.clearClipboardTimeoutFunction = null;
    }
    startProcessReload() {
        if (this.lockService.pinProtectedKey != null || this.reloadInterval != null) {
            return;
        }
        this.cancelProcessReload();
        this.reloadInterval = setInterval(() => system_service_awaiter(this, void 0, void 0, function* () {
            let doRefresh = false;
            const lastActive = yield this.storageService.get(constants_service["a" /* ConstantsService */].lastActiveKey);
            if (lastActive != null) {
                const diffSeconds = (new Date()).getTime() - lastActive;
                // Don't refresh if they are still active in the window
                doRefresh = diffSeconds >= 5000;
            }
            if (doRefresh) {
                clearInterval(this.reloadInterval);
                this.reloadInterval = null;
                this.messagingService.send('reloadProcess');
                if (this.reloadCallback != null) {
                    yield this.reloadCallback();
                }
            }
        }), 10000);
    }
    cancelProcessReload() {
        if (this.reloadInterval != null) {
            clearInterval(this.reloadInterval);
            this.reloadInterval = null;
        }
    }
    clearClipboard(clipboardValue, timeoutMs = null) {
        if (this.clearClipboardTimeout != null) {
            clearTimeout(this.clearClipboardTimeout);
            this.clearClipboardTimeout = null;
        }
        if (utils["a" /* Utils */].isNullOrWhitespace(clipboardValue)) {
            return;
        }
        this.storageService.get(constants_service["a" /* ConstantsService */].clearClipboardKey).then((clearSeconds) => {
            if (clearSeconds == null) {
                return;
            }
            if (timeoutMs == null) {
                timeoutMs = clearSeconds * 1000;
            }
            this.clearClipboardTimeoutFunction = () => system_service_awaiter(this, void 0, void 0, function* () {
                const clipboardValueNow = yield this.platformUtilsService.readFromClipboard();
                if (clipboardValue === clipboardValueNow) {
                    this.platformUtilsService.copyToClipboard('', { clearing: true });
                }
            });
            this.clearClipboardTimeout = setTimeout(() => system_service_awaiter(this, void 0, void 0, function* () {
                yield this.clearPendingClipboard();
            }), timeoutMs);
        });
    }
    clearPendingClipboard() {
        return system_service_awaiter(this, void 0, void 0, function* () {
            if (this.clearClipboardTimeoutFunction != null) {
                yield this.clearClipboardTimeoutFunction();
                this.clearClipboardTimeoutFunction = null;
            }
        });
    }
}

// EXTERNAL MODULE: ./node_modules/node-forge/lib/index.js
var lib = __webpack_require__(49);

// CONCATENATED MODULE: ./jslib/src/models/domain/decryptParameters.ts
class DecryptParameters {
}

// CONCATENATED MODULE: ./jslib/src/services/webCryptoFunction.service.ts
var webCryptoFunction_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class webCryptoFunction_service_WebCryptoFunctionService {
    constructor(win, platformUtilsService) {
        this.win = win;
        this.platformUtilsService = platformUtilsService;
        this.crypto = typeof win.crypto !== 'undefined' ? win.crypto : null;
        this.subtle = (!!this.crypto && typeof win.crypto.subtle !== 'undefined') ? win.crypto.subtle : null;
        this.isEdge = platformUtilsService.isEdge();
        this.isIE = platformUtilsService.isIE();
        const ua = win.navigator.userAgent;
        this.isOldSafari = platformUtilsService.isSafari() &&
            (ua.indexOf(' Version/10.') > -1 || ua.indexOf(' Version/9.') > -1);
    }
    pbkdf2(password, salt, algorithm, iterations) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            if (this.isEdge || this.isIE || this.isOldSafari) {
                const forgeLen = algorithm === 'sha256' ? 32 : 64;
                const passwordBytes = this.toByteString(password);
                const saltBytes = this.toByteString(salt);
                const derivedKeyBytes = lib["pbkdf2"](passwordBytes, saltBytes, iterations, forgeLen, algorithm);
                return utils["a" /* Utils */].fromByteStringToArray(derivedKeyBytes).buffer;
            }
            const wcLen = algorithm === 'sha256' ? 256 : 512;
            const passwordBuf = this.toBuf(password);
            const saltBuf = this.toBuf(salt);
            const pbkdf2Params = {
                name: 'PBKDF2',
                salt: saltBuf,
                iterations: iterations,
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey('raw', passwordBuf, { name: 'PBKDF2' }, false, ['deriveBits']);
            return yield this.subtle.deriveBits(pbkdf2Params, impKey, wcLen);
        });
    }
    hash(value, algorithm) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            if (((this.isEdge || this.isIE) && algorithm === 'sha1') || algorithm === 'md5') {
                const md = algorithm === 'md5' ? lib["md"].md5.create() : lib["md"].sha1.create();
                const valueBytes = this.toByteString(value);
                md.update(valueBytes, 'raw');
                return utils["a" /* Utils */].fromByteStringToArray(md.digest().data).buffer;
            }
            const valueBuf = this.toBuf(value);
            return yield this.subtle.digest({ name: this.toWebCryptoAlgorithm(algorithm) }, valueBuf);
        });
    }
    hmac(value, key, algorithm) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            if (this.isIE && algorithm === 'sha512') {
                const hmac = lib["hmac"].create();
                const keyBytes = this.toByteString(key);
                const valueBytes = this.toByteString(value);
                hmac.start(algorithm, keyBytes);
                hmac.update(valueBytes, 'raw');
                return utils["a" /* Utils */].fromByteStringToArray(hmac.digest().data).buffer;
            }
            const signingAlgorithm = {
                name: 'HMAC',
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey('raw', key, signingAlgorithm, false, ['sign']);
            return yield this.subtle.sign(signingAlgorithm, impKey, value);
        });
    }
    // Safely compare two values in a way that protects against timing attacks (Double HMAC Verification).
    // ref: https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/
    // ref: https://paragonie.com/blog/2015/11/preventing-timing-attacks-on-string-comparison-with-double-hmac-strategy
    compare(a, b) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            const macKey = yield this.randomBytes(32);
            const signingAlgorithm = {
                name: 'HMAC',
                hash: { name: 'SHA-256' },
            };
            const impKey = yield this.subtle.importKey('raw', macKey, signingAlgorithm, false, ['sign']);
            const mac1 = yield this.subtle.sign(signingAlgorithm, impKey, a);
            const mac2 = yield this.subtle.sign(signingAlgorithm, impKey, b);
            if (mac1.byteLength !== mac2.byteLength) {
                return false;
            }
            const arr1 = new Uint8Array(mac1);
            const arr2 = new Uint8Array(mac2);
            for (let i = 0; i < arr2.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        });
    }
    hmacFast(value, key, algorithm) {
        const hmac = lib["hmac"].create();
        hmac.start(algorithm, key);
        hmac.update(value);
        const bytes = hmac.digest().getBytes();
        return Promise.resolve(bytes);
    }
    compareFast(a, b) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            const rand = yield this.randomBytes(32);
            const bytes = new Uint32Array(rand);
            const buffer = lib["util"].createBuffer();
            for (let i = 0; i < bytes.length; i++) {
                buffer.putInt32(bytes[i]);
            }
            const macKey = buffer.getBytes();
            const hmac = lib["hmac"].create();
            hmac.start('sha256', macKey);
            hmac.update(a);
            const mac1 = hmac.digest().getBytes();
            hmac.start(null, null);
            hmac.update(b);
            const mac2 = hmac.digest().getBytes();
            const equals = mac1 === mac2;
            return equals;
        });
    }
    aesEncrypt(data, iv, key) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            const impKey = yield this.subtle.importKey('raw', key, { name: 'AES-CBC' }, false, ['encrypt']);
            return yield this.subtle.encrypt({ name: 'AES-CBC', iv: iv }, impKey, data);
        });
    }
    aesDecryptFastParameters(data, iv, mac, key) {
        const p = new DecryptParameters();
        if (key.meta != null) {
            p.encKey = key.meta.encKeyByteString;
            p.macKey = key.meta.macKeyByteString;
        }
        if (p.encKey == null) {
            p.encKey = lib["util"].decode64(key.encKeyB64);
        }
        p.data = lib["util"].decode64(data);
        p.iv = lib["util"].decode64(iv);
        p.macData = p.iv + p.data;
        if (p.macKey == null && key.macKeyB64 != null) {
            p.macKey = lib["util"].decode64(key.macKeyB64);
        }
        if (mac != null) {
            p.mac = lib["util"].decode64(mac);
        }
        // cache byte string keys for later
        if (key.meta == null) {
            key.meta = {};
        }
        if (key.meta.encKeyByteString == null) {
            key.meta.encKeyByteString = p.encKey;
        }
        if (p.macKey != null && key.meta.macKeyByteString == null) {
            key.meta.macKeyByteString = p.macKey;
        }
        return p;
    }
    aesDecryptFast(parameters) {
        const dataBuffer = lib["util"].createBuffer(parameters.data);
        const decipher = lib["cipher"].createDecipher('AES-CBC', parameters.encKey);
        decipher.start({ iv: parameters.iv });
        decipher.update(dataBuffer);
        decipher.finish();
        const val = decipher.output.toString('utf8');
        return Promise.resolve(val);
    }
    aesDecrypt(data, iv, key) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            const impKey = yield this.subtle.importKey('raw', key, { name: 'AES-CBC' }, false, ['decrypt']);
            return yield this.subtle.decrypt({ name: 'AES-CBC', iv: iv }, impKey, data);
        });
    }
    rsaEncrypt(data, publicKey, algorithm) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            // Note: Edge browser requires that we specify name and hash for both key import and decrypt.
            // We cannot use the proper types here.
            const rsaParams = {
                name: 'RSA-OAEP',
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey('spki', publicKey, rsaParams, false, ['encrypt']);
            return yield this.subtle.encrypt(rsaParams, impKey, data);
        });
    }
    rsaDecrypt(data, privateKey, algorithm) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            // Note: Edge browser requires that we specify name and hash for both key import and decrypt.
            // We cannot use the proper types here.
            const rsaParams = {
                name: 'RSA-OAEP',
                hash: { name: this.toWebCryptoAlgorithm(algorithm) },
            };
            const impKey = yield this.subtle.importKey('pkcs8', privateKey, rsaParams, false, ['decrypt']);
            return yield this.subtle.decrypt(rsaParams, impKey, data);
        });
    }
    rsaExtractPublicKey(privateKey) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            const rsaParams = {
                name: 'RSA-OAEP',
                // Have to specify some algorithm
                hash: { name: this.toWebCryptoAlgorithm('sha1') },
            };
            const impPrivateKey = yield this.subtle.importKey('pkcs8', privateKey, rsaParams, true, ['decrypt']);
            const jwkPrivateKey = yield this.subtle.exportKey('jwk', impPrivateKey);
            const jwkPublicKeyParams = {
                kty: 'RSA',
                e: jwkPrivateKey.e,
                n: jwkPrivateKey.n,
                alg: 'RSA-OAEP',
                ext: true,
            };
            const impPublicKey = yield this.subtle.importKey('jwk', jwkPublicKeyParams, rsaParams, true, ['encrypt']);
            return yield this.subtle.exportKey('spki', impPublicKey);
        });
    }
    rsaGenerateKeyPair(length) {
        return webCryptoFunction_service_awaiter(this, void 0, void 0, function* () {
            const rsaParams = {
                name: 'RSA-OAEP',
                modulusLength: length,
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                // Have to specify some algorithm
                hash: { name: this.toWebCryptoAlgorithm('sha1') },
            };
            const keyPair = yield this.subtle.generateKey(rsaParams, true, ['encrypt', 'decrypt']);
            const publicKey = yield this.subtle.exportKey('spki', keyPair.publicKey);
            const privateKey = yield this.subtle.exportKey('pkcs8', keyPair.privateKey);
            return [publicKey, privateKey];
        });
    }
    randomBytes(length) {
        const arr = new Uint8Array(length);
        this.crypto.getRandomValues(arr);
        return Promise.resolve(arr.buffer);
    }
    toBuf(value) {
        let buf;
        if (typeof (value) === 'string') {
            buf = utils["a" /* Utils */].fromUtf8ToArray(value).buffer;
        }
        else {
            buf = value;
        }
        return buf;
    }
    toByteString(value) {
        let bytes;
        if (typeof (value) === 'string') {
            bytes = lib["util"].encodeUtf8(value);
        }
        else {
            bytes = utils["a" /* Utils */].fromBufferToByteString(value);
        }
        return bytes;
    }
    toWebCryptoAlgorithm(algorithm) {
        if (algorithm === 'md5') {
            throw new Error('MD5 is not supported in WebCrypto.');
        }
        return algorithm === 'sha1' ? 'SHA-1' : algorithm === 'sha256' ? 'SHA-256' : 'SHA-512';
    }
}

// EXTERNAL MODULE: ./jslib/src/misc/analytics.ts
var analytics = __webpack_require__(136);

// CONCATENATED MODULE: ./jslib/src/misc/index.ts


// EXTERNAL MODULE: ./src/browser/browserApi.ts
var browserApi = __webpack_require__(10);

// EXTERNAL MODULE: ./src/browser/safariApp.ts
var safariApp = __webpack_require__(22);

// CONCATENATED MODULE: ./src/background/commands.background.ts
var commands_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class commands_background_CommandsBackground {
    constructor(main, passwordGenerationService, platformUtilsService, analytics, lockService) {
        this.main = main;
        this.passwordGenerationService = passwordGenerationService;
        this.platformUtilsService = platformUtilsService;
        this.analytics = analytics;
        this.lockService = lockService;
        this.isSafari = this.platformUtilsService.isSafari();
        this.isEdge = this.platformUtilsService.isEdge();
        this.isVivaldi = this.platformUtilsService.isVivaldi();
    }
    init() {
        return commands_background_awaiter(this, void 0, void 0, function* () {
            if (this.isSafari || this.isEdge || this.isVivaldi) {
                browserApi["a" /* BrowserApi */].messageListener('commands.background', (msg, sender, sendResponse) => commands_background_awaiter(this, void 0, void 0, function* () {
                    if (msg.command === 'keyboardShortcutTriggered' && msg.shortcut) {
                        yield this.processCommand(msg.shortcut, sender);
                    }
                }));
            }
            else if (chrome && chrome.commands && !this.isEdge) {
                chrome.commands.onCommand.addListener((command) => commands_background_awaiter(this, void 0, void 0, function* () {
                    yield this.processCommand(command);
                }));
            }
        });
    }
    processCommand(command, sender) {
        return commands_background_awaiter(this, void 0, void 0, function* () {
            switch (command) {
                case 'generate_password':
                    yield this.generatePasswordToClipboard();
                    break;
                case 'autofill_login':
                    yield this.autoFillLogin(sender ? sender.tab : null);
                    break;
                case 'open_popup':
                    yield this.openPopup();
                    break;
                default:
                    break;
            }
        });
    }
    generatePasswordToClipboard() {
        return commands_background_awaiter(this, void 0, void 0, function* () {
            if (this.isEdge) {
                // Edge does not support access to clipboard from background
                return;
            }
            const options = yield this.passwordGenerationService.getOptions();
            const password = yield this.passwordGenerationService.generatePassword(options);
            this.platformUtilsService.copyToClipboard(password, { window: window });
            this.passwordGenerationService.addHistory(password);
            this.analytics.ga('send', {
                hitType: 'event',
                eventAction: 'Generated Password From Command',
            });
        });
    }
    autoFillLogin(tab) {
        return commands_background_awaiter(this, void 0, void 0, function* () {
            if (yield this.lockService.isLocked()) {
                return;
            }
            if (!tab) {
                tab = yield browserApi["a" /* BrowserApi */].getTabFromCurrentWindowId();
            }
            if (tab == null) {
                return;
            }
            yield this.main.collectPageDetailsForContentScript(tab, 'autofill_cmd');
            this.analytics.ga('send', {
                hitType: 'event',
                eventAction: 'Autofilled From Command',
            });
        });
    }
    openPopup() {
        return commands_background_awaiter(this, void 0, void 0, function* () {
            // Chrome APIs cannot open popup
            if (!this.isSafari) {
                return;
            }
            this.main.openPopup();
            this.analytics.ga('send', {
                hitType: 'event',
                eventAction: 'Opened Popup From Command',
            });
        });
    }
}

// EXTERNAL MODULE: ./jslib/src/enums/eventType.ts
var enums_eventType = __webpack_require__(36);

// CONCATENATED MODULE: ./src/background/contextMenus.background.ts
var contextMenus_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class contextMenus_background_ContextMenusBackground {
    constructor(main, cipherService, passwordGenerationService, analytics, platformUtilsService, lockService, eventService) {
        this.main = main;
        this.cipherService = cipherService;
        this.passwordGenerationService = passwordGenerationService;
        this.analytics = analytics;
        this.platformUtilsService = platformUtilsService;
        this.lockService = lockService;
        this.eventService = eventService;
        this.contextMenus = chrome.contextMenus;
    }
    init() {
        return contextMenus_background_awaiter(this, void 0, void 0, function* () {
            if (!this.contextMenus) {
                return;
            }
            this.contextMenus.onClicked.addListener((info, tab) => contextMenus_background_awaiter(this, void 0, void 0, function* () {
                if (info.menuItemId === 'generate-password') {
                    yield this.generatePasswordToClipboard();
                }
                else if (info.parentMenuItemId === 'autofill' || info.parentMenuItemId === 'copy-username' ||
                    info.parentMenuItemId === 'copy-password') {
                    yield this.cipherAction(info);
                }
            }));
        });
    }
    generatePasswordToClipboard() {
        return contextMenus_background_awaiter(this, void 0, void 0, function* () {
            const options = yield this.passwordGenerationService.getOptions();
            const password = yield this.passwordGenerationService.generatePassword(options);
            this.platformUtilsService.copyToClipboard(password, { window: window });
            this.passwordGenerationService.addHistory(password);
            this.analytics.ga('send', {
                hitType: 'event',
                eventAction: 'Generated Password From Context Menu',
            });
        });
    }
    cipherAction(info) {
        return contextMenus_background_awaiter(this, void 0, void 0, function* () {
            const id = info.menuItemId.split('_')[1];
            if (id === 'noop') {
                if (chrome.browserAction && chrome.browserAction.openPopup) {
                    chrome.browserAction.openPopup();
                }
                return;
            }
            if (yield this.lockService.isLocked()) {
                return;
            }
            const ciphers = yield this.cipherService.getAllDecrypted();
            const cipher = ciphers.find((c) => c.id === id);
            if (cipher == null) {
                return;
            }
            if (info.parentMenuItemId === 'autofill') {
                this.analytics.ga('send', {
                    hitType: 'event',
                    eventAction: 'Autofilled From Context Menu',
                });
                yield this.startAutofillPage(cipher);
            }
            else if (info.parentMenuItemId === 'copy-username') {
                this.analytics.ga('send', {
                    hitType: 'event',
                    eventAction: 'Copied Username From Context Menu',
                });
                this.platformUtilsService.copyToClipboard(cipher.login.username, { window: window });
            }
            else if (info.parentMenuItemId === 'copy-password') {
                this.analytics.ga('send', {
                    hitType: 'event',
                    eventAction: 'Copied Password From Context Menu',
                });
                this.platformUtilsService.copyToClipboard(cipher.login.password, { window: window });
                this.eventService.collect(enums_eventType["a" /* EventType */].Cipher_ClientCopiedPassword, cipher.id);
            }
        });
    }
    startAutofillPage(cipher) {
        return contextMenus_background_awaiter(this, void 0, void 0, function* () {
            this.main.loginToAutoFill = cipher;
            const tab = yield browserApi["a" /* BrowserApi */].getTabFromCurrentWindow();
            if (tab == null) {
                return;
            }
            browserApi["a" /* BrowserApi */].tabSendMessage(tab, {
                command: 'collectPageDetails',
                tab: tab,
                sender: 'contextMenu',
            });
        });
    }
}

// CONCATENATED MODULE: ./src/background/idle.background.ts
var idle_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const IdleInterval = 60 * 5; // 5 minutes
class idle_background_IdleBackground {
    constructor(lockService, storageService, notificationsService) {
        this.lockService = lockService;
        this.storageService = storageService;
        this.notificationsService = notificationsService;
        this.idleTimer = null;
        this.idleState = 'active';
        this.idle = chrome.idle || (browser != null ? browser.idle : null);
    }
    init() {
        return idle_background_awaiter(this, void 0, void 0, function* () {
            if (!this.idle) {
                return;
            }
            const idleHandler = (newState) => {
                if (newState === 'active') {
                    this.notificationsService.reconnectFromActivity();
                }
                else {
                    this.notificationsService.disconnectFromInactivity();
                }
            };
            if (this.idle.onStateChanged && this.idle.setDetectionInterval) {
                this.idle.setDetectionInterval(IdleInterval);
                this.idle.onStateChanged.addListener(idleHandler);
            }
            else {
                this.pollIdle(idleHandler);
            }
            if (this.idle.onStateChanged) {
                this.idle.onStateChanged.addListener((newState) => idle_background_awaiter(this, void 0, void 0, function* () {
                    if (newState === 'locked') {
                        const lockOption = yield this.storageService.get(constants_service["a" /* ConstantsService */].lockOptionKey);
                        if (lockOption === -2) {
                            this.lockService.lock(true);
                        }
                    }
                }));
            }
        });
    }
    pollIdle(handler) {
        if (this.idleTimer != null) {
            window.clearTimeout(this.idleTimer);
            this.idleTimer = null;
        }
        this.idle.queryState(IdleInterval, (state) => {
            if (state !== this.idleState) {
                this.idleState = state;
                handler(state);
            }
            this.idleTimer = window.setTimeout(() => this.pollIdle(handler), 5000);
        });
    }
}

// CONCATENATED MODULE: ./src/background/runtime.background.ts
var runtime_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class runtime_background_RuntimeBackground {
    constructor(main, autofillService, cipherService, platformUtilsService, storageService, i18nService, analytics, notificationsService, systemService, lockService) {
        this.main = main;
        this.autofillService = autofillService;
        this.cipherService = cipherService;
        this.platformUtilsService = platformUtilsService;
        this.storageService = storageService;
        this.i18nService = i18nService;
        this.analytics = analytics;
        this.notificationsService = notificationsService;
        this.systemService = systemService;
        this.lockService = lockService;
        this.pageDetailsToAutoFill = [];
        this.onInstalledReason = null;
        this.isSafari = this.platformUtilsService.isSafari();
        this.runtime = this.isSafari ? {} : chrome.runtime;
        // onInstalled listener must be wired up before anything else, so we do it in the ctor
        if (!this.isSafari) {
            this.runtime.onInstalled.addListener((details) => {
                this.onInstalledReason = details.reason;
            });
        }
    }
    init() {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            if (!this.runtime) {
                return;
            }
            yield this.checkOnInstalled();
            browserApi["a" /* BrowserApi */].messageListener('runtime.background', (msg, sender, sendResponse) => runtime_background_awaiter(this, void 0, void 0, function* () {
                yield this.processMessage(msg, sender, sendResponse);
            }));
        });
    }
    processMessage(msg, sender, sendResponse) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            switch (msg.command) {
                case 'loggedIn':
                case 'unlocked':
                    yield this.main.setIcon();
                    yield this.main.refreshBadgeAndMenu(false);
                    this.notificationsService.updateConnection(msg.command === 'unlocked');
                    this.systemService.cancelProcessReload();
                    break;
                case 'logout':
                    yield this.main.logout(msg.expired);
                    break;
                case 'syncCompleted':
                    if (msg.successfully) {
                        setTimeout(() => runtime_background_awaiter(this, void 0, void 0, function* () { return yield this.main.refreshBadgeAndMenu(); }), 2000);
                    }
                    break;
                case 'openPopup':
                    yield this.main.openPopup();
                    break;
                case 'showDialogResolve':
                    this.platformUtilsService.resolveDialogPromise(msg.dialogId, msg.confirmed);
                    break;
                case 'bgGetDataForTab':
                    yield this.getDataForTab(sender.tab, msg.responseCommand);
                    break;
                case 'bgOpenNotificationBar':
                    yield browserApi["a" /* BrowserApi */].tabSendMessageData(sender.tab, 'openNotificationBar', msg.data);
                    break;
                case 'bgCloseNotificationBar':
                    yield browserApi["a" /* BrowserApi */].tabSendMessageData(sender.tab, 'closeNotificationBar');
                    break;
                case 'bgAdjustNotificationBar':
                    yield browserApi["a" /* BrowserApi */].tabSendMessageData(sender.tab, 'adjustNotificationBar', msg.data);
                    break;
                case 'bgCollectPageDetails':
                    yield this.main.collectPageDetailsForContentScript(sender.tab, msg.sender, sender.frameId);
                    break;
                case 'bgAddLogin':
                    yield this.addLogin(msg.login, sender.tab);
                    break;
                case 'bgChangedPassword':
                    yield this.changedPassword(msg.data, sender.tab);
                    break;
                case 'bgAddClose':
                case 'bgChangeClose':
                    this.removeTabFromNotificationQueue(sender.tab);
                    break;
                case 'bgAddSave':
                    yield this.saveAddLogin(sender.tab);
                    break;
                case 'bgChangeSave':
                    yield this.saveChangePassword(sender.tab);
                    break;
                case 'bgNeverSave':
                    yield this.saveNever(sender.tab);
                    break;
                case 'bgUpdateContextMenu':
                case 'editedCipher':
                case 'addedCipher':
                case 'deletedCipher':
                    yield this.main.refreshBadgeAndMenu();
                    break;
                case 'bgReseedStorage':
                    yield this.main.reseedStorage();
                    break;
                case 'collectPageDetailsResponse':
                    if (yield this.lockService.isLocked()) {
                        return;
                    }
                    switch (msg.sender) {
                        case 'notificationBar':
                            const forms = this.autofillService.getFormsWithPasswordFields(msg.details);
                            yield browserApi["a" /* BrowserApi */].tabSendMessageData(msg.tab, 'notificationBarPageDetails', {
                                details: msg.details,
                                forms: forms,
                            });
                            break;
                        case 'autofiller':
                        case 'autofill_cmd':
                            const totpCode = yield this.autofillService.doAutoFillForLastUsedLogin([{
                                    frameId: sender.frameId,
                                    tab: msg.tab,
                                    details: msg.details,
                                }], msg.sender === 'autofill_cmd');
                            if (totpCode != null) {
                                this.platformUtilsService.copyToClipboard(totpCode, { window: window });
                            }
                            break;
                        case 'contextMenu':
                            clearTimeout(this.autofillTimeout);
                            this.pageDetailsToAutoFill.push({
                                frameId: sender.frameId,
                                tab: msg.tab,
                                details: msg.details,
                            });
                            this.autofillTimeout = setTimeout(() => runtime_background_awaiter(this, void 0, void 0, function* () { return yield this.autofillPage(); }), 300);
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        });
    }
    autofillPage() {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            const totpCode = yield this.autofillService.doAutoFill({
                cipher: this.main.loginToAutoFill,
                pageDetails: this.pageDetailsToAutoFill,
            });
            if (totpCode != null) {
                this.platformUtilsService.copyToClipboard(totpCode, { window: window });
            }
            // reset
            this.main.loginToAutoFill = null;
            this.pageDetailsToAutoFill = [];
        });
    }
    saveAddLogin(tab) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            if (yield this.lockService.isLocked()) {
                return;
            }
            for (let i = this.main.notificationQueue.length - 1; i >= 0; i--) {
                const queueMessage = this.main.notificationQueue[i];
                if (queueMessage.tabId !== tab.id || queueMessage.type !== 'addLogin') {
                    continue;
                }
                const tabDomain = utils["a" /* Utils */].getDomain(tab.url);
                if (tabDomain != null && tabDomain !== queueMessage.domain) {
                    continue;
                }
                this.main.notificationQueue.splice(i, 1);
                browserApi["a" /* BrowserApi */].tabSendMessageData(tab, 'closeNotificationBar');
                const loginModel = new loginView["a" /* LoginView */]();
                const loginUri = new loginUriView["a" /* LoginUriView */]();
                loginUri.uri = queueMessage.uri;
                loginModel.uris = [loginUri];
                loginModel.username = queueMessage.username;
                loginModel.password = queueMessage.password;
                const model = new cipherView["a" /* CipherView */]();
                model.name = utils["a" /* Utils */].getHostname(queueMessage.uri) || queueMessage.domain;
                model.name = model.name.replace(/^www\./, '');
                model.type = cipherType["a" /* CipherType */].Login;
                model.login = loginModel;
                const cipher = yield this.cipherService.encrypt(model);
                yield this.cipherService.saveWithServer(cipher);
                this.analytics.ga('send', {
                    hitType: 'event',
                    eventAction: 'Added Login from Notification Bar',
                });
            }
        });
    }
    saveChangePassword(tab) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            if (yield this.lockService.isLocked()) {
                return;
            }
            for (let i = this.main.notificationQueue.length - 1; i >= 0; i--) {
                const queueMessage = this.main.notificationQueue[i];
                if (queueMessage.tabId !== tab.id || queueMessage.type !== 'changePassword') {
                    continue;
                }
                const tabDomain = utils["a" /* Utils */].getDomain(tab.url);
                if (tabDomain != null && tabDomain !== queueMessage.domain) {
                    continue;
                }
                this.main.notificationQueue.splice(i, 1);
                browserApi["a" /* BrowserApi */].tabSendMessageData(tab, 'closeNotificationBar');
                const cipher = yield this.cipherService.get(queueMessage.cipherId);
                if (cipher != null && cipher.type === cipherType["a" /* CipherType */].Login) {
                    const model = yield cipher.decrypt();
                    model.login.password = queueMessage.newPassword;
                    const newCipher = yield this.cipherService.encrypt(model);
                    yield this.cipherService.saveWithServer(newCipher);
                    this.analytics.ga('send', {
                        hitType: 'event',
                        eventAction: 'Changed Password from Notification Bar',
                    });
                }
            }
        });
    }
    saveNever(tab) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            for (let i = this.main.notificationQueue.length - 1; i >= 0; i--) {
                const queueMessage = this.main.notificationQueue[i];
                if (queueMessage.tabId !== tab.id || queueMessage.type !== 'addLogin') {
                    continue;
                }
                const tabDomain = utils["a" /* Utils */].getDomain(tab.url);
                if (tabDomain != null && tabDomain !== queueMessage.domain) {
                    continue;
                }
                this.main.notificationQueue.splice(i, 1);
                browserApi["a" /* BrowserApi */].tabSendMessageData(tab, 'closeNotificationBar');
                const hostname = utils["a" /* Utils */].getHostname(tab.url);
                yield this.cipherService.saveNeverDomain(hostname);
            }
        });
    }
    addLogin(loginInfo, tab) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            if (yield this.lockService.isLocked()) {
                return;
            }
            const loginDomain = utils["a" /* Utils */].getDomain(loginInfo.url);
            if (loginDomain == null) {
                return;
            }
            if (loginInfo.username != null) {
                loginInfo.username = loginInfo.username.toLowerCase();
            }
            const ciphers = yield this.cipherService.getAllDecryptedForUrl(loginInfo.url);
            const usernameMatches = ciphers.filter((c) => c.login.username != null && c.login.username.toLowerCase() === loginInfo.username);
            if (usernameMatches.length === 0) {
                const disabledAddLogin = yield this.storageService.get(constants_service["a" /* ConstantsService */].disableAddLoginNotificationKey);
                if (disabledAddLogin) {
                    return;
                }
                // remove any old messages for this tab
                this.removeTabFromNotificationQueue(tab);
                this.main.notificationQueue.push({
                    type: 'addLogin',
                    username: loginInfo.username,
                    password: loginInfo.password,
                    domain: loginDomain,
                    uri: loginInfo.url,
                    tabId: tab.id,
                    expires: new Date((new Date()).getTime() + 30 * 60000),
                });
                yield this.main.checkNotificationQueue(tab);
            }
            else if (usernameMatches.length === 1 && usernameMatches[0].login.password !== loginInfo.password) {
                const disabledChangePassword = yield this.storageService.get(constants_service["a" /* ConstantsService */].disableChangedPasswordNotificationKey);
                if (disabledChangePassword) {
                    return;
                }
                this.addChangedPasswordToQueue(usernameMatches[0].id, loginDomain, loginInfo.password, tab);
            }
        });
    }
    changedPassword(changeData, tab) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            if (yield this.lockService.isLocked()) {
                return;
            }
            const loginDomain = utils["a" /* Utils */].getDomain(changeData.url);
            if (loginDomain == null) {
                return;
            }
            let id = null;
            const ciphers = yield this.cipherService.getAllDecryptedForUrl(changeData.url);
            if (changeData.currentPassword != null) {
                const passwordMatches = ciphers.filter((c) => c.login.password === changeData.currentPassword);
                if (passwordMatches.length === 1) {
                    id = passwordMatches[0].id;
                }
            }
            else if (ciphers.length === 1) {
                id = ciphers[0].id;
            }
            if (id != null) {
                this.addChangedPasswordToQueue(id, loginDomain, changeData.newPassword, tab);
            }
        });
    }
    addChangedPasswordToQueue(cipherId, loginDomain, newPassword, tab) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            // remove any old messages for this tab
            this.removeTabFromNotificationQueue(tab);
            this.main.notificationQueue.push({
                type: 'changePassword',
                cipherId: cipherId,
                newPassword: newPassword,
                domain: loginDomain,
                tabId: tab.id,
                expires: new Date((new Date()).getTime() + 30 * 60000),
            });
            yield this.main.checkNotificationQueue(tab);
        });
    }
    removeTabFromNotificationQueue(tab) {
        for (let i = this.main.notificationQueue.length - 1; i >= 0; i--) {
            if (this.main.notificationQueue[i].tabId === tab.id) {
                this.main.notificationQueue.splice(i, 1);
            }
        }
    }
    checkOnInstalled() {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            if (this.isSafari) {
                const installedVersion = yield this.storageService.get(constants_service["a" /* ConstantsService */].installedVersionKey);
                if (installedVersion == null) {
                    this.onInstalledReason = 'install';
                }
                else if (browserApi["a" /* BrowserApi */].getApplicationVersion() !== installedVersion) {
                    this.onInstalledReason = 'update';
                }
                if (this.onInstalledReason != null) {
                    yield this.storageService.save(constants_service["a" /* ConstantsService */].installedVersionKey, browserApi["a" /* BrowserApi */].getApplicationVersion());
                }
            }
            setTimeout(() => runtime_background_awaiter(this, void 0, void 0, function* () {
                if (this.onInstalledReason != null) {
                    if (this.onInstalledReason === 'install') {
                        browserApi["a" /* BrowserApi */].createNewTab('https://bitwarden.com/browser-start/');
                        yield this.setDefaultSettings();
                    }
                    this.analytics.ga('send', {
                        hitType: 'event',
                        eventAction: 'onInstalled ' + this.onInstalledReason,
                    });
                    this.onInstalledReason = null;
                }
            }), 100);
        });
    }
    setDefaultSettings() {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            // Default lock options to "on restart".
            const currentLockOption = yield this.storageService.get(constants_service["a" /* ConstantsService */].lockOptionKey);
            if (currentLockOption == null) {
                yield this.storageService.save(constants_service["a" /* ConstantsService */].lockOptionKey, -1);
            }
        });
    }
    getDataForTab(tab, responseCommand) {
        return runtime_background_awaiter(this, void 0, void 0, function* () {
            const responseData = {};
            if (responseCommand === 'notificationBarDataResponse') {
                responseData.neverDomains = yield this.storageService.get(constants_service["a" /* ConstantsService */].neverDomainsKey);
                responseData.disabledAddLoginNotification = yield this.storageService.get(constants_service["a" /* ConstantsService */].disableAddLoginNotificationKey);
                responseData.disabledChangedPasswordNotification = yield this.storageService.get(constants_service["a" /* ConstantsService */].disableChangedPasswordNotificationKey);
            }
            else if (responseCommand === 'autofillerAutofillOnPageLoadEnabledResponse') {
                responseData.autofillEnabled = yield this.storageService.get(constants_service["a" /* ConstantsService */].enableAutoFillOnPageLoadKey);
            }
            else if (responseCommand === 'notificationBarFrameDataResponse') {
                responseData.i18n = {
                    appName: this.i18nService.t('appName'),
                    close: this.i18nService.t('close'),
                    yes: this.i18nService.t('yes'),
                    never: this.i18nService.t('never'),
                    notificationAddSave: this.i18nService.t('notificationAddSave'),
                    notificationNeverSave: this.i18nService.t('notificationNeverSave'),
                    notificationAddDesc: this.i18nService.t('notificationAddDesc'),
                    notificationChangeSave: this.i18nService.t('notificationChangeSave'),
                    notificationChangeDesc: this.i18nService.t('notificationChangeDesc'),
                };
            }
            yield browserApi["a" /* BrowserApi */].tabSendMessageData(tab, responseCommand, responseData);
        });
    }
}

// CONCATENATED MODULE: ./src/background/tabs.background.ts
var tabs_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TabsBackground {
    constructor(main) {
        this.main = main;
        this.tabs = chrome.tabs;
    }
    init() {
        return tabs_background_awaiter(this, void 0, void 0, function* () {
            if (!this.tabs) {
                return;
            }
            this.tabs.onActivated.addListener((activeInfo) => tabs_background_awaiter(this, void 0, void 0, function* () {
                yield this.main.refreshBadgeAndMenu();
            }));
            this.tabs.onReplaced.addListener((addedTabId, removedTabId) => tabs_background_awaiter(this, void 0, void 0, function* () {
                if (this.main.onReplacedRan) {
                    return;
                }
                this.main.onReplacedRan = true;
                yield this.main.checkNotificationQueue();
                yield this.main.refreshBadgeAndMenu();
            }));
            this.tabs.onUpdated.addListener((tabId, changeInfo, tab) => tabs_background_awaiter(this, void 0, void 0, function* () {
                if (this.main.onUpdatedRan) {
                    return;
                }
                this.main.onUpdatedRan = true;
                yield this.main.checkNotificationQueue();
                yield this.main.refreshBadgeAndMenu();
            }));
        });
    }
}

// CONCATENATED MODULE: ./src/background/webRequest.background.ts
var webRequest_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class WebRequestBackground {
    constructor(platformUtilsService, cipherService, lockService) {
        this.cipherService = cipherService;
        this.lockService = lockService;
        this.pendingAuthRequests = [];
        this.webRequest = window.chrome.webRequest;
        this.isFirefox = platformUtilsService.isFirefox();
    }
    init() {
        return webRequest_background_awaiter(this, void 0, void 0, function* () {
            if (!this.webRequest || !this.webRequest.onAuthRequired) {
                return;
            }
            this.webRequest.onAuthRequired.addListener((details, callback) => webRequest_background_awaiter(this, void 0, void 0, function* () {
                if (!details.url || this.pendingAuthRequests.indexOf(details.requestId) !== -1) {
                    if (callback) {
                        callback();
                    }
                    return;
                }
                this.pendingAuthRequests.push(details.requestId);
                if (this.isFirefox) {
                    return new Promise((resolve, reject) => webRequest_background_awaiter(this, void 0, void 0, function* () {
                        yield this.resolveAuthCredentials(details.url, resolve, reject);
                    }));
                }
                else {
                    yield this.resolveAuthCredentials(details.url, callback, callback);
                }
            }), { urls: ['http://*/*', 'https://*/*'] }, [this.isFirefox ? 'blocking' : 'asyncBlocking']);
            this.webRequest.onCompleted.addListener((details) => this.completeAuthRequest(details), { urls: ['http://*/*'] });
            this.webRequest.onErrorOccurred.addListener((details) => this.completeAuthRequest(details), { urls: ['http://*/*'] });
        });
    }
    resolveAuthCredentials(domain, success, error) {
        return webRequest_background_awaiter(this, void 0, void 0, function* () {
            if (yield this.lockService.isLocked()) {
                error();
                return;
            }
            try {
                const ciphers = yield this.cipherService.getAllDecryptedForUrl(domain);
                if (ciphers == null || ciphers.length !== 1) {
                    error();
                    return;
                }
                success({
                    authCredentials: {
                        username: ciphers[0].login.username,
                        password: ciphers[0].login.password,
                    },
                });
            }
            catch (_a) {
                error();
            }
        });
    }
    completeAuthRequest(details) {
        const i = this.pendingAuthRequests.indexOf(details.requestId);
        if (i > -1) {
            this.pendingAuthRequests.splice(i, 1);
        }
    }
}

// CONCATENATED MODULE: ./src/background/windows.background.ts
var windows_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class WindowsBackground {
    constructor(main) {
        this.main = main;
        this.windows = chrome.windows;
    }
    init() {
        return windows_background_awaiter(this, void 0, void 0, function* () {
            if (!this.windows) {
                return;
            }
            this.windows.onFocusChanged.addListener((windowId) => windows_background_awaiter(this, void 0, void 0, function* () {
                if (windowId === null || windowId < 0) {
                    return;
                }
                yield this.main.refreshBadgeAndMenu();
            }));
        });
    }
}

// CONCATENATED MODULE: ./src/models/autofillScript.ts
class AutofillScript {
    constructor(documentUUID) {
        this.script = [];
        this.documentUUID = {};
        this.properties = {};
        this.options = {};
        this.metadata = {};
        this.autosubmit = null;
        this.documentUUID = documentUUID;
    }
}

// CONCATENATED MODULE: ./src/services/autofill.service.ts
var autofill_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const CardAttributes = ['autoCompleteType', 'data-stripe', 'htmlName', 'htmlID', 'label-tag',
    'placeholder', 'label-left', 'label-top', 'data-recurly'];
const CardAttributesExtended = [...CardAttributes, 'label-right'];
const IdentityAttributes = ['autoCompleteType', 'data-stripe', 'htmlName', 'htmlID', 'label-tag',
    'placeholder', 'label-left', 'label-top', 'data-recurly'];
const UsernameFieldNames = [
    // English
    'username', 'user name', 'email', 'email address', 'e-mail', 'e-mail address', 'userid', 'user id',
    'customer id', 'login id',
    // German
    'benutzername', 'benutzer name', 'email adresse', 'e-mail adresse', 'benutzerid', 'benutzer id'
];
const ExcludedAutofillTypes = ['radio', 'checkbox', 'hidden', 'file', 'button', 'image', 'reset', 'search'];
// Each index represents a language. These three arrays should all be the same length.
// 0: English, 1: Danish, 2: German/Dutch, 3: French/Spanish/Italian, 4: Russian, 5: Portuguese
const MonthAbbr = ['mm', 'mm', 'mm', 'mm', 'mm', 'mm'];
const YearAbbrShort = ['yy', 'åå', 'jj', 'aa', 'гг', 'rr'];
const YearAbbrLong = ['yyyy', 'åååå', 'jjjj', 'aa', 'гггг', 'rrrr'];
/* tslint:disable */
const IsoCountries = {
    afghanistan: "AF", "aland islands": "AX", albania: "AL", algeria: "DZ", "american samoa": "AS", andorra: "AD",
    angola: "AO", anguilla: "AI", antarctica: "AQ", "antigua and barbuda": "AG", argentina: "AR", armenia: "AM",
    aruba: "AW", australia: "AU", austria: "AT", azerbaijan: "AZ", bahamas: "BS", bahrain: "BH", bangladesh: "BD",
    barbados: "BB", belarus: "BY", belgium: "BE", belize: "BZ", benin: "BJ", bermuda: "BM", bhutan: "BT",
    bolivia: "BO", "bosnia and herzegovina": "BA", botswana: "BW", "bouvet island": "BV", brazil: "BR",
    "british indian ocean territory": "IO", "brunei darussalam": "BN", bulgaria: "BG", "burkina faso": "BF",
    burundi: "BI", cambodia: "KH", cameroon: "CM", canada: "CA", "cape verde": "CV", "cayman islands": "KY",
    "central african republic": "CF", chad: "TD", chile: "CL", china: "CN", "christmas island": "CX",
    "cocos (keeling) islands": "CC", colombia: "CO", comoros: "KM", congo: "CG", "congo, democratic republic": "CD",
    "cook islands": "CK", "costa rica": "CR", "cote d'ivoire": "CI", croatia: "HR", cuba: "CU", cyprus: "CY",
    "czech republic": "CZ", denmark: "DK", djibouti: "DJ", dominica: "DM", "dominican republic": "DO", ecuador: "EC",
    egypt: "EG", "el salvador": "SV", "equatorial guinea": "GQ", eritrea: "ER", estonia: "EE", ethiopia: "ET",
    "falkland islands": "FK", "faroe islands": "FO", fiji: "FJ", finland: "FI", france: "FR", "french guiana": "GF",
    "french polynesia": "PF", "french southern territories": "TF", gabon: "GA", gambia: "GM", georgia: "GE",
    germany: "DE", ghana: "GH", gibraltar: "GI", greece: "GR", greenland: "GL", grenada: "GD", guadeloupe: "GP",
    guam: "GU", guatemala: "GT", guernsey: "GG", guinea: "GN", "guinea-bissau": "GW", guyana: "GY", haiti: "HT",
    "heard island & mcdonald islands": "HM", "holy see (vatican city state)": "VA", honduras: "HN", "hong kong": "HK",
    hungary: "HU", iceland: "IS", india: "IN", indonesia: "ID", "iran, islamic republic of": "IR", iraq: "IQ",
    ireland: "IE", "isle of man": "IM", israel: "IL", italy: "IT", jamaica: "JM", japan: "JP", jersey: "JE",
    jordan: "JO", kazakhstan: "KZ", kenya: "KE", kiribati: "KI", "republic of korea": "KR", "south korea": "KR",
    "democratic people's republic of korea": "KP", "north korea": "KP", kuwait: "KW", kyrgyzstan: "KG",
    "lao people's democratic republic": "LA", latvia: "LV", lebanon: "LB", lesotho: "LS", liberia: "LR",
    "libyan arab jamahiriya": "LY", liechtenstein: "LI", lithuania: "LT", luxembourg: "LU", macao: "MO",
    macedonia: "MK", madagascar: "MG", malawi: "MW", malaysia: "MY", maldives: "MV", mali: "ML", malta: "MT",
    "marshall islands": "MH", martinique: "MQ", mauritania: "MR", mauritius: "MU", mayotte: "YT", mexico: "MX",
    "micronesia, federated states of": "FM", moldova: "MD", monaco: "MC", mongolia: "MN", montenegro: "ME",
    montserrat: "MS", morocco: "MA", mozambique: "MZ", myanmar: "MM", namibia: "NA", nauru: "NR", nepal: "NP",
    netherlands: "NL", "netherlands antilles": "AN", "new caledonia": "NC", "new zealand": "NZ", nicaragua: "NI",
    niger: "NE", nigeria: "NG", niue: "NU", "norfolk island": "NF", "northern mariana islands": "MP", norway: "NO",
    oman: "OM", pakistan: "PK", palau: "PW", "palestinian territory, occupied": "PS", panama: "PA",
    "papua new guinea": "PG", paraguay: "PY", peru: "PE", philippines: "PH", pitcairn: "PN", poland: "PL",
    portugal: "PT", "puerto rico": "PR", qatar: "QA", reunion: "RE", romania: "RO", "russian federation": "RU",
    rwanda: "RW", "saint barthelemy": "BL", "saint helena": "SH", "saint kitts and nevis": "KN", "saint lucia": "LC",
    "saint martin": "MF", "saint pierre and miquelon": "PM", "saint vincent and grenadines": "VC", samoa: "WS",
    "san marino": "SM", "sao tome and principe": "ST", "saudi arabia": "SA", senegal: "SN", serbia: "RS",
    seychelles: "SC", "sierra leone": "SL", singapore: "SG", slovakia: "SK", slovenia: "SI", "solomon islands": "SB",
    somalia: "SO", "south africa": "ZA", "south georgia and sandwich isl.": "GS", spain: "ES", "sri lanka": "LK",
    sudan: "SD", suriname: "SR", "svalbard and jan mayen": "SJ", swaziland: "SZ", sweden: "SE", switzerland: "CH",
    "syrian arab republic": "SY", taiwan: "TW", tajikistan: "TJ", tanzania: "TZ", thailand: "TH", "timor-leste": "TL",
    togo: "TG", tokelau: "TK", tonga: "TO", "trinidad and tobago": "TT", tunisia: "TN", turkey: "TR",
    turkmenistan: "TM", "turks and caicos islands": "TC", tuvalu: "TV", uganda: "UG", ukraine: "UA",
    "united arab emirates": "AE", "united kingdom": "GB", "united states": "US",
    "united states outlying islands": "UM", uruguay: "UY", uzbekistan: "UZ", vanuatu: "VU", venezuela: "VE",
    vietnam: "VN", "virgin islands, british": "VG", "virgin islands, u.s.": "VI", "wallis and futuna": "WF",
    "western sahara": "EH", yemen: "YE", zambia: "ZM", zimbabwe: "ZW",
};
const IsoStates = {
    alabama: 'AL', alaska: 'AK', 'american samoa': 'AS', arizona: 'AZ', arkansas: 'AR', california: 'CA',
    colorado: 'CO', connecticut: 'CT', delaware: 'DE', 'district of columbia': 'DC',
    'federated states of micronesia': 'FM', florida: 'FL', georgia: 'GA', guam: 'GU', hawaii: 'HI', idaho: 'ID',
    illinois: 'IL', indiana: 'IN', iowa: 'IA', kansas: 'KS', kentucky: 'KY', louisiana: 'LA', maine: 'ME',
    'marshall islands': 'MH', maryland: 'MD', massachusetts: 'MA', michigan: 'MI', minnesota: 'MN', mississippi: 'MS',
    missouri: 'MO', montana: 'MT', nebraska: 'NE', nevada: 'NV', 'new hampshire': 'NH', 'new jersey': 'NJ',
    'new mexico': 'NM', 'new york': 'NY', 'north carolina': 'NC', 'north dakota': 'ND',
    'northern mariana islands': 'MP', ohio: 'OH', oklahoma: 'OK', oregon: 'OR', palau: 'PW', pennsylvania: 'PA',
    'puerto rico': 'PR', 'rhode island': 'RI', 'south carolina': 'SC', 'south dakota': 'SD', tennessee: 'TN',
    texas: 'TX', utah: 'UT', vermont: 'VT', 'virgin islands': 'VI', virginia: 'VA', washington: 'WA',
    'west virginia': 'WV', wisconsin: 'WI', wyoming: 'WY',
};
var IsoProvinces = {
    alberta: 'AB', 'british columbia': 'BC', manitoba: 'MB', 'new brunswick': 'NB', 'newfoundland and labrador': 'NL',
    'nova scotia': 'NS', ontario: 'ON', 'prince edward island': 'PE', quebec: 'QC', saskatchewan: 'SK',
};
/* tslint:enable */
class autofill_service_AutofillService {
    constructor(cipherService, userService, totpService, eventService) {
        this.cipherService = cipherService;
        this.userService = userService;
        this.totpService = totpService;
        this.eventService = eventService;
    }
    getFormsWithPasswordFields(pageDetails) {
        const formData = [];
        const passwordFields = this.loadPasswordFields(pageDetails, true, true, false);
        if (passwordFields.length === 0) {
            return formData;
        }
        for (const formKey in pageDetails.forms) {
            if (!pageDetails.forms.hasOwnProperty(formKey)) {
                continue;
            }
            const formPasswordFields = passwordFields.filter((pf) => formKey === pf.form);
            if (formPasswordFields.length > 0) {
                let uf = this.findUsernameField(pageDetails, formPasswordFields[0], false, false, false);
                if (uf == null) {
                    // not able to find any viewable username fields. maybe there are some "hidden" ones?
                    uf = this.findUsernameField(pageDetails, formPasswordFields[0], true, true, false);
                }
                formData.push({
                    form: pageDetails.forms[formKey],
                    password: formPasswordFields[0],
                    username: uf,
                    passwords: formPasswordFields,
                });
            }
        }
        return formData;
    }
    doAutoFill(options) {
        return autofill_service_awaiter(this, void 0, void 0, function* () {
            let totpPromise = null;
            const tab = yield this.getActiveTab();
            if (!tab || !options.cipher || !options.pageDetails || !options.pageDetails.length) {
                throw new Error('Nothing to auto-fill.');
            }
            const canAccessPremium = yield this.userService.canAccessPremium();
            let didAutofill = false;
            options.pageDetails.forEach((pd) => {
                // make sure we're still on correct tab
                if (pd.tab.id !== tab.id || pd.tab.url !== tab.url) {
                    return;
                }
                const fillScript = this.generateFillScript(pd.details, {
                    skipUsernameOnlyFill: options.skipUsernameOnlyFill || false,
                    onlyEmptyFields: options.onlyEmptyFields || false,
                    onlyVisibleFields: options.onlyVisibleFields || false,
                    cipher: options.cipher,
                });
                if (!fillScript || !fillScript.script || !fillScript.script.length) {
                    return;
                }
                didAutofill = true;
                if (!options.skipLastUsed) {
                    this.cipherService.updateLastUsedDate(options.cipher.id);
                }
                browserApi["a" /* BrowserApi */].tabSendMessage(tab, {
                    command: 'fillForm',
                    fillScript: fillScript,
                    url: tab.url,
                }, { frameId: pd.frameId });
                if (options.cipher.type !== cipherType["a" /* CipherType */].Login || totpPromise || options.skipTotp ||
                    !options.cipher.login.totp || (!canAccessPremium && !options.cipher.organizationUseTotp)) {
                    return;
                }
                totpPromise = this.totpService.isAutoCopyEnabled().then((enabled) => {
                    if (enabled) {
                        return this.totpService.getCode(options.cipher.login.totp);
                    }
                    return null;
                });
            });
            if (didAutofill) {
                this.eventService.collect(enums_eventType["a" /* EventType */].Cipher_ClientAutofilled, options.cipher.id);
                if (totpPromise != null) {
                    return yield totpPromise;
                }
                else {
                    return null;
                }
            }
            else {
                throw new Error('Did not auto-fill.');
            }
        });
    }
    doAutoFillForLastUsedLogin(pageDetails, fromCommand) {
        return autofill_service_awaiter(this, void 0, void 0, function* () {
            const tab = yield this.getActiveTab();
            if (!tab || !tab.url) {
                return;
            }
            const lastUsedCipher = yield this.cipherService.getLastUsedForUrl(tab.url);
            if (!lastUsedCipher) {
                return;
            }
            return yield this.doAutoFill({
                cipher: lastUsedCipher,
                // tslint:disable-next-line
                pageDetails: pageDetails,
                skipTotp: !fromCommand,
                skipLastUsed: true,
                skipUsernameOnlyFill: !fromCommand,
                onlyEmptyFields: !fromCommand,
                onlyVisibleFields: !fromCommand,
            });
        });
    }
    // Helpers
    getActiveTab() {
        return autofill_service_awaiter(this, void 0, void 0, function* () {
            const tab = yield browserApi["a" /* BrowserApi */].getTabFromCurrentWindow();
            if (!tab) {
                throw new Error('No tab found.');
            }
            return tab;
        });
    }
    generateFillScript(pageDetails, options) {
        if (!pageDetails || !options.cipher) {
            return null;
        }
        let fillScript = new AutofillScript(pageDetails.documentUUID);
        const filledFields = {};
        const fields = options.cipher.fields;
        if (fields && fields.length) {
            const fieldNames = [];
            fields.forEach((f) => {
                if (this.hasValue(f.name)) {
                    fieldNames.push(f.name.toLowerCase());
                }
            });
            pageDetails.fields.forEach((field) => {
                if (filledFields.hasOwnProperty(field.opid) || !field.viewable) {
                    return;
                }
                const matchingIndex = this.findMatchingFieldIndex(field, fieldNames);
                if (matchingIndex > -1) {
                    let val = fields[matchingIndex].value;
                    if (val == null && fields[matchingIndex].type === fieldType["a" /* FieldType */].Boolean) {
                        val = 'false';
                    }
                    filledFields[field.opid] = field;
                    this.fillByOpid(fillScript, field, val);
                }
            });
        }
        switch (options.cipher.type) {
            case cipherType["a" /* CipherType */].Login:
                fillScript = this.generateLoginFillScript(fillScript, pageDetails, filledFields, options);
                break;
            case cipherType["a" /* CipherType */].Card:
                fillScript = this.generateCardFillScript(fillScript, pageDetails, filledFields, options);
                break;
            case cipherType["a" /* CipherType */].Identity:
                fillScript = this.generateIdentityFillScript(fillScript, pageDetails, filledFields, options);
                break;
            default:
                return null;
        }
        return fillScript;
    }
    generateLoginFillScript(fillScript, pageDetails, filledFields, options) {
        if (!options.cipher.login) {
            return null;
        }
        const passwords = [];
        const usernames = [];
        let pf = null;
        let username = null;
        const login = options.cipher.login;
        if (!login.password || login.password === '') {
            // No password for this login. Maybe they just wanted to auto-fill some custom fields?
            fillScript = this.setFillScriptForFocus(filledFields, fillScript);
            return fillScript;
        }
        let passwordFields = this.loadPasswordFields(pageDetails, false, false, options.onlyEmptyFields);
        if (!passwordFields.length && !options.onlyVisibleFields) {
            // not able to find any viewable password fields. maybe there are some "hidden" ones?
            passwordFields = this.loadPasswordFields(pageDetails, true, true, options.onlyEmptyFields);
        }
        for (const formKey in pageDetails.forms) {
            if (!pageDetails.forms.hasOwnProperty(formKey)) {
                continue;
            }
            const passwordFieldsForForm = [];
            passwordFields.forEach((passField) => {
                if (formKey === passField.form) {
                    passwordFieldsForForm.push(passField);
                }
            });
            passwordFields.forEach((passField) => {
                pf = passField;
                passwords.push(pf);
                if (login.username) {
                    username = this.findUsernameField(pageDetails, pf, false, false, false);
                    if (!username && !options.onlyVisibleFields) {
                        // not able to find any viewable username fields. maybe there are some "hidden" ones?
                        username = this.findUsernameField(pageDetails, pf, true, true, false);
                    }
                    if (username) {
                        usernames.push(username);
                    }
                }
            });
        }
        if (passwordFields.length && !passwords.length) {
            // The page does not have any forms with password fields. Use the first password field on the page and the
            // input field just before it as the username.
            pf = passwordFields[0];
            passwords.push(pf);
            if (login.username && pf.elementNumber > 0) {
                username = this.findUsernameField(pageDetails, pf, false, false, true);
                if (!username && !options.onlyVisibleFields) {
                    // not able to find any viewable username fields. maybe there are some "hidden" ones?
                    username = this.findUsernameField(pageDetails, pf, true, true, true);
                }
                if (username) {
                    usernames.push(username);
                }
            }
        }
        if (!passwordFields.length && !options.skipUsernameOnlyFill) {
            // No password fields on this page. Let's try to just fuzzy fill the username.
            pageDetails.fields.forEach((f) => {
                if (f.viewable && (f.type === 'text' || f.type === 'email' || f.type === 'tel') &&
                    this.fieldIsFuzzyMatch(f, UsernameFieldNames)) {
                    usernames.push(f);
                }
            });
        }
        usernames.forEach((u) => {
            if (filledFields.hasOwnProperty(u.opid)) {
                return;
            }
            filledFields[u.opid] = u;
            this.fillByOpid(fillScript, u, login.username);
        });
        passwords.forEach((p) => {
            if (filledFields.hasOwnProperty(p.opid)) {
                return;
            }
            filledFields[p.opid] = p;
            this.fillByOpid(fillScript, p, login.password);
        });
        fillScript = this.setFillScriptForFocus(filledFields, fillScript);
        return fillScript;
    }
    generateCardFillScript(fillScript, pageDetails, filledFields, options) {
        if (!options.cipher.card) {
            return null;
        }
        const fillFields = {};
        pageDetails.fields.forEach((f) => {
            if (this.isExcludedType(f.type, ExcludedAutofillTypes)) {
                return;
            }
            for (let i = 0; i < CardAttributes.length; i++) {
                const attr = CardAttributes[i];
                if (!f.hasOwnProperty(attr) || !f[attr] || !f.viewable) {
                    continue;
                }
                // ref https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
                // ref https://developers.google.com/web/fundamentals/design-and-ux/input/forms/
                if (!fillFields.cardholderName && this.isFieldMatch(f[attr], ['cc-name', 'card-name', 'cardholder-name', 'cardholder', 'name', 'nom'], ['cc-name', 'card-name', 'cardholder-name', 'cardholder', 'tbName'])) {
                    fillFields.cardholderName = f;
                    break;
                }
                else if (!fillFields.number && this.isFieldMatch(f[attr], ['cc-number', 'cc-num', 'card-number', 'card-num', 'number', 'cc', 'cc-no', 'card-no',
                    'credit-card', 'numero-carte', 'carte', 'carte-credit', 'num-carte', 'cb-num'], ['cc-number', 'cc-num', 'card-number', 'card-num', 'cc-no', 'card-no', 'numero-carte',
                    'num-carte', 'cb-num'])) {
                    fillFields.number = f;
                    break;
                }
                else if (!fillFields.exp && this.isFieldMatch(f[attr], ['cc-exp', 'card-exp', 'cc-expiration', 'card-expiration', 'cc-ex', 'card-ex',
                    'card-expire', 'card-expiry', 'validite', 'expiration', 'expiry', 'mm-yy',
                    'mm-yyyy', 'yy-mm', 'yyyy-mm', 'expiration-date', 'payment-card-expiration',
                    'payment-cc-date'], ['mm-yy', 'mm-yyyy', 'yy-mm', 'yyyy-mm', 'expiration-date',
                    'payment-card-expiration'])) {
                    fillFields.exp = f;
                    break;
                }
                else if (!fillFields.expMonth && this.isFieldMatch(f[attr], ['exp-month', 'cc-exp-month', 'cc-month', 'card-month', 'cc-mo', 'card-mo', 'exp-mo',
                    'card-exp-mo', 'cc-exp-mo', 'card-expiration-month', 'expiration-month',
                    'cc-mm', 'cc-m', 'card-mm', 'card-m', 'card-exp-mm', 'cc-exp-mm', 'exp-mm', 'exp-m',
                    'expire-month', 'expire-mo', 'expiry-month', 'expiry-mo', 'card-expire-month',
                    'card-expire-mo', 'card-expiry-month', 'card-expiry-mo', 'mois-validite',
                    'mois-expiration', 'm-validite', 'm-expiration', 'expiry-date-field-month',
                    'expiration-date-month', 'expiration-date-mm', 'exp-mon', 'validity-mo',
                    'exp-date-mo', 'cb-date-mois', 'date-m'])) {
                    fillFields.expMonth = f;
                    break;
                }
                else if (!fillFields.expYear && this.isFieldMatch(f[attr], ['exp-year', 'cc-exp-year', 'cc-year', 'card-year', 'cc-yr', 'card-yr', 'exp-yr',
                    'card-exp-yr', 'cc-exp-yr', 'card-expiration-year', 'expiration-year',
                    'cc-yy', 'cc-y', 'card-yy', 'card-y', 'card-exp-yy', 'cc-exp-yy', 'exp-yy', 'exp-y',
                    'cc-yyyy', 'card-yyyy', 'card-exp-yyyy', 'cc-exp-yyyy', 'expire-year', 'expire-yr',
                    'expiry-year', 'expiry-yr', 'card-expire-year', 'card-expire-yr', 'card-expiry-year',
                    'card-expiry-yr', 'an-validite', 'an-expiration', 'annee-validite',
                    'annee-expiration', 'expiry-date-field-year', 'expiration-date-year', 'cb-date-ann',
                    'expiration-date-yy', 'expiration-date-yyyy', 'validity-year', 'exp-date-year', 'date-y'])) {
                    fillFields.expYear = f;
                    break;
                }
                else if (!fillFields.code && this.isFieldMatch(f[attr], ['cvv', 'cvc', 'cvv2', 'cc-csc', 'cc-cvv', 'card-csc', 'card-cvv', 'cvd', 'cid', 'cvc2',
                    'cnv', 'cvn2', 'cc-code', 'card-code', 'code-securite', 'security-code', 'crypto',
                    'card-verif', 'verification-code', 'csc', 'ccv'])) {
                    fillFields.code = f;
                    break;
                }
                else if (!fillFields.brand && this.isFieldMatch(f[attr], ['cc-type', 'card-type', 'card-brand', 'cc-brand', 'cb-type'])) {
                    fillFields.brand = f;
                    break;
                }
            }
        });
        const card = options.cipher.card;
        this.makeScriptAction(fillScript, card, fillFields, filledFields, 'cardholderName');
        this.makeScriptAction(fillScript, card, fillFields, filledFields, 'number');
        this.makeScriptAction(fillScript, card, fillFields, filledFields, 'code');
        this.makeScriptAction(fillScript, card, fillFields, filledFields, 'brand');
        if (fillFields.expMonth && this.hasValue(card.expMonth)) {
            let expMonth = card.expMonth;
            if (fillFields.expMonth.selectInfo && fillFields.expMonth.selectInfo.options) {
                let index = null;
                const siOptions = fillFields.expMonth.selectInfo.options;
                if (siOptions.length === 12) {
                    index = parseInt(card.expMonth, null) - 1;
                }
                else if (siOptions.length === 13) {
                    if (siOptions[0][0] != null && siOptions[0][0] !== '' &&
                        (siOptions[12][0] == null || siOptions[12][0] === '')) {
                        index = parseInt(card.expMonth, null) - 1;
                    }
                    else {
                        index = parseInt(card.expMonth, null);
                    }
                }
                if (index != null) {
                    const option = siOptions[index];
                    if (option.length > 1) {
                        expMonth = option[1];
                    }
                }
            }
            else if ((this.fieldAttrsContain(fillFields.expMonth, 'mm') || fillFields.expMonth.maxLength === 2)
                && expMonth.length === 1) {
                expMonth = '0' + expMonth;
            }
            filledFields[fillFields.expMonth.opid] = fillFields.expMonth;
            this.fillByOpid(fillScript, fillFields.expMonth, expMonth);
        }
        if (fillFields.expYear && this.hasValue(card.expYear)) {
            let expYear = card.expYear;
            if (fillFields.expYear.selectInfo && fillFields.expYear.selectInfo.options) {
                for (let i = 0; i < fillFields.expYear.selectInfo.options.length; i++) {
                    const o = fillFields.expYear.selectInfo.options[i];
                    if (o[0] === card.expYear || o[1] === card.expYear) {
                        expYear = o[1];
                        break;
                    }
                    if (o[1].length === 2 && card.expYear.length === 4 && o[1] === card.expYear.substring(2)) {
                        expYear = o[1];
                        break;
                    }
                    const colonIndex = o[1].indexOf(':');
                    if (colonIndex > -1 && o[1].length > colonIndex + 1) {
                        const val = o[1].substring(colonIndex + 2);
                        if (val != null && val.trim() !== '' && val === card.expYear) {
                            expYear = o[1];
                            break;
                        }
                    }
                }
            }
            else if (this.fieldAttrsContain(fillFields.expYear, 'yyyy') || fillFields.expYear.maxLength === 4) {
                if (expYear.length === 2) {
                    expYear = '20' + expYear;
                }
            }
            else if (this.fieldAttrsContain(fillFields.expYear, 'yy') || fillFields.expYear.maxLength === 2) {
                if (expYear.length === 4) {
                    expYear = expYear.substr(2);
                }
            }
            filledFields[fillFields.expYear.opid] = fillFields.expYear;
            this.fillByOpid(fillScript, fillFields.expYear, expYear);
        }
        if (fillFields.exp && this.hasValue(card.expMonth) && this.hasValue(card.expYear)) {
            const fullMonth = ('0' + card.expMonth).slice(-2);
            let fullYear = card.expYear;
            let partYear = null;
            if (fullYear.length === 2) {
                partYear = fullYear;
                fullYear = '20' + fullYear;
            }
            else if (fullYear.length === 4) {
                partYear = fullYear.substr(2, 2);
            }
            let exp = null;
            for (let i = 0; i < MonthAbbr.length; i++) {
                if (this.fieldAttrsContain(fillFields.exp, MonthAbbr[i] + '/' + YearAbbrShort[i]) &&
                    partYear != null) {
                    exp = fullMonth + '/' + partYear;
                }
                else if (this.fieldAttrsContain(fillFields.exp, MonthAbbr[i] + '/' + YearAbbrLong[i])) {
                    exp = fullMonth + '/' + fullYear;
                }
                else if (this.fieldAttrsContain(fillFields.exp, YearAbbrShort[i] + '/' + MonthAbbr[i]) &&
                    partYear != null) {
                    exp = partYear + '/' + fullMonth;
                }
                else if (this.fieldAttrsContain(fillFields.exp, YearAbbrLong[i] + '/' + MonthAbbr[i])) {
                    exp = fullYear + '/' + fullMonth;
                }
                else if (this.fieldAttrsContain(fillFields.exp, MonthAbbr[i] + '-' + YearAbbrShort[i]) &&
                    partYear != null) {
                    exp = fullMonth + '-' + partYear;
                }
                else if (this.fieldAttrsContain(fillFields.exp, MonthAbbr[i] + '-' + YearAbbrLong[i])) {
                    exp = fullMonth + '-' + fullYear;
                }
                else if (this.fieldAttrsContain(fillFields.exp, YearAbbrShort[i] + '-' + MonthAbbr[i]) &&
                    partYear != null) {
                    exp = partYear + '-' + fullMonth;
                }
                else if (this.fieldAttrsContain(fillFields.exp, YearAbbrLong[i] + '-' + MonthAbbr[i])) {
                    exp = fullYear + '-' + fullMonth;
                }
                else if (this.fieldAttrsContain(fillFields.exp, YearAbbrShort[i] + MonthAbbr[i]) &&
                    partYear != null) {
                    exp = partYear + fullMonth;
                }
                else if (this.fieldAttrsContain(fillFields.exp, YearAbbrLong[i] + MonthAbbr[i])) {
                    exp = fullYear + fullMonth;
                }
                else if (this.fieldAttrsContain(fillFields.exp, MonthAbbr[i] + YearAbbrShort[i]) &&
                    partYear != null) {
                    exp = fullMonth + partYear;
                }
                else if (this.fieldAttrsContain(fillFields.exp, MonthAbbr[i] + YearAbbrLong[i])) {
                    exp = fullMonth + fullYear;
                }
                if (exp != null) {
                    break;
                }
            }
            if (exp == null) {
                exp = fullYear + '-' + fullMonth;
            }
            this.makeScriptActionWithValue(fillScript, exp, fillFields.exp, filledFields);
        }
        return fillScript;
    }
    fieldAttrsContain(field, containsVal) {
        if (!field) {
            return false;
        }
        let doesContain = false;
        CardAttributesExtended.forEach((attr) => {
            if (doesContain || !field.hasOwnProperty(attr) || !field[attr]) {
                return;
            }
            let val = field[attr];
            val = val.replace(/ /g, '').toLowerCase();
            doesContain = val.indexOf(containsVal) > -1;
        });
        return doesContain;
    }
    generateIdentityFillScript(fillScript, pageDetails, filledFields, options) {
        if (!options.cipher.identity) {
            return null;
        }
        const fillFields = {};
        pageDetails.fields.forEach((f) => {
            if (this.isExcludedType(f.type, ExcludedAutofillTypes)) {
                return;
            }
            for (let i = 0; i < IdentityAttributes.length; i++) {
                const attr = IdentityAttributes[i];
                if (!f.hasOwnProperty(attr) || !f[attr] || !f.viewable) {
                    continue;
                }
                // ref https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
                // ref https://developers.google.com/web/fundamentals/design-and-ux/input/forms/
                if (!fillFields.name && this.isFieldMatch(f[attr], ['name', 'full-name', 'your-name'], ['full-name', 'your-name'])) {
                    fillFields.name = f;
                    break;
                }
                else if (!fillFields.firstName && this.isFieldMatch(f[attr], ['f-name', 'first-name', 'given-name', 'first-n'])) {
                    fillFields.firstName = f;
                    break;
                }
                else if (!fillFields.middleName && this.isFieldMatch(f[attr], ['m-name', 'middle-name', 'additional-name', 'middle-initial', 'middle-n', 'middle-i'])) {
                    fillFields.middleName = f;
                    break;
                }
                else if (!fillFields.lastName && this.isFieldMatch(f[attr], ['l-name', 'last-name', 's-name', 'surname', 'family-name', 'family-n', 'last-n'])) {
                    fillFields.lastName = f;
                    break;
                }
                else if (!fillFields.title && this.isFieldMatch(f[attr], ['honorific-prefix', 'prefix', 'title'])) {
                    fillFields.title = f;
                    break;
                }
                else if (!fillFields.email && this.isFieldMatch(f[attr], ['e-mail', 'email-address'])) {
                    fillFields.email = f;
                    break;
                }
                else if (!fillFields.address && this.isFieldMatch(f[attr], ['address', 'street-address', 'addr', 'street', 'mailing-addr', 'billing-addr',
                    'mail-addr', 'bill-addr'], ['mailing-addr', 'billing-addr', 'mail-addr', 'bill-addr'])) {
                    fillFields.address = f;
                    break;
                }
                else if (!fillFields.address1 && this.isFieldMatch(f[attr], ['address-1', 'address-line-1', 'addr-1', 'street-1'])) {
                    fillFields.address1 = f;
                    break;
                }
                else if (!fillFields.address2 && this.isFieldMatch(f[attr], ['address-2', 'address-line-2', 'addr-2', 'street-2'])) {
                    fillFields.address2 = f;
                    break;
                }
                else if (!fillFields.address3 && this.isFieldMatch(f[attr], ['address-3', 'address-line-3', 'addr-3', 'street-3'])) {
                    fillFields.address3 = f;
                    break;
                }
                else if (!fillFields.postalCode && this.isFieldMatch(f[attr], ['postal', 'zip', 'zip2', 'zip-code', 'postal-code', 'post-code', 'address-zip',
                    'address-postal', 'address-code', 'address-postal-code', 'address-zip-code'])) {
                    fillFields.postalCode = f;
                    break;
                }
                else if (!fillFields.city && this.isFieldMatch(f[attr], ['city', 'town', 'address-level-2', 'address-city', 'address-town'])) {
                    fillFields.city = f;
                    break;
                }
                else if (!fillFields.state && this.isFieldMatch(f[attr], ['state', 'province', 'provence', 'address-level-1', 'address-state',
                    'address-province'])) {
                    fillFields.state = f;
                    break;
                }
                else if (!fillFields.country && this.isFieldMatch(f[attr], ['country', 'country-code', 'country-name', 'address-country', 'address-country-name',
                    'address-country-code'])) {
                    fillFields.country = f;
                    break;
                }
                else if (!fillFields.phone && this.isFieldMatch(f[attr], ['phone', 'mobile', 'mobile-phone', 'tel', 'telephone', 'phone-number'])) {
                    fillFields.phone = f;
                    break;
                }
                else if (!fillFields.username && this.isFieldMatch(f[attr], ['user-name', 'user-id', 'screen-name'])) {
                    fillFields.username = f;
                    break;
                }
                else if (!fillFields.company && this.isFieldMatch(f[attr], ['company', 'company-name', 'organization', 'organization-name'])) {
                    fillFields.company = f;
                    break;
                }
            }
        });
        const identity = options.cipher.identity;
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'title');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'firstName');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'middleName');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'lastName');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'address1');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'address2');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'address3');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'city');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'postalCode');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'company');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'email');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'phone');
        this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'username');
        let filledState = false;
        if (fillFields.state && identity.state && identity.state.length > 2) {
            const stateLower = identity.state.toLowerCase();
            const isoState = IsoStates[stateLower] || IsoProvinces[stateLower];
            if (isoState) {
                filledState = true;
                this.makeScriptActionWithValue(fillScript, isoState, fillFields.state, filledFields);
            }
        }
        if (!filledState) {
            this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'state');
        }
        let filledCountry = false;
        if (fillFields.country && identity.country && identity.country.length > 2) {
            const countryLower = identity.country.toLowerCase();
            const isoCountry = IsoCountries[countryLower];
            if (isoCountry) {
                filledCountry = true;
                this.makeScriptActionWithValue(fillScript, isoCountry, fillFields.country, filledFields);
            }
        }
        if (!filledCountry) {
            this.makeScriptAction(fillScript, identity, fillFields, filledFields, 'country');
        }
        if (fillFields.name && (identity.firstName || identity.lastName)) {
            let fullName = '';
            if (this.hasValue(identity.firstName)) {
                fullName = identity.firstName;
            }
            if (this.hasValue(identity.middleName)) {
                if (fullName !== '') {
                    fullName += ' ';
                }
                fullName += identity.middleName;
            }
            if (this.hasValue(identity.lastName)) {
                if (fullName !== '') {
                    fullName += ' ';
                }
                fullName += identity.lastName;
            }
            this.makeScriptActionWithValue(fillScript, fullName, fillFields.name, filledFields);
        }
        if (fillFields.address && this.hasValue(identity.address1)) {
            let address = '';
            if (this.hasValue(identity.address1)) {
                address = identity.address1;
            }
            if (this.hasValue(identity.address2)) {
                if (address !== '') {
                    address += ', ';
                }
                address += identity.address2;
            }
            if (this.hasValue(identity.address3)) {
                if (address !== '') {
                    address += ', ';
                }
                address += identity.address3;
            }
            this.makeScriptActionWithValue(fillScript, address, fillFields.address, filledFields);
        }
        return fillScript;
    }
    isExcludedType(type, excludedTypes) {
        return excludedTypes.indexOf(type) > -1;
    }
    isFieldMatch(value, options, containsOptions) {
        value = value.trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            const checkValueContains = containsOptions == null || containsOptions.indexOf(option) > -1;
            option = option.toLowerCase().replace(/-/g, '');
            if (value === option || (checkValueContains && value.indexOf(option) > -1)) {
                return true;
            }
        }
        return false;
    }
    makeScriptAction(fillScript, cipherData, fillFields, filledFields, dataProp, fieldProp) {
        fieldProp = fieldProp || dataProp;
        this.makeScriptActionWithValue(fillScript, cipherData[dataProp], fillFields[fieldProp], filledFields);
    }
    makeScriptActionWithValue(fillScript, dataValue, field, filledFields) {
        let doFill = false;
        if (this.hasValue(dataValue) && field) {
            if (field.type === 'select-one' && field.selectInfo && field.selectInfo.options) {
                for (let i = 0; i < field.selectInfo.options.length; i++) {
                    const option = field.selectInfo.options[i];
                    for (let j = 0; j < option.length; j++) {
                        if (this.hasValue(option[j]) && option[j].toLowerCase() === dataValue.toLowerCase()) {
                            doFill = true;
                            if (option.length > 1) {
                                dataValue = option[1];
                            }
                            break;
                        }
                    }
                    if (doFill) {
                        break;
                    }
                }
            }
            else {
                doFill = true;
            }
        }
        if (doFill) {
            filledFields[field.opid] = field;
            this.fillByOpid(fillScript, field, dataValue);
        }
    }
    loadPasswordFields(pageDetails, canBeHidden, canBeReadOnly, mustBeEmpty) {
        const arr = [];
        pageDetails.fields.forEach((f) => {
            const isPassword = f.type === 'password';
            const valueIsLikePassword = (value) => {
                if (value == null) {
                    return false;
                }
                const lowerValue = value.toLowerCase();
                if (lowerValue.indexOf('password') < 0) {
                    return false;
                }
                if (lowerValue.indexOf('captcha') >= 0) {
                    return false;
                }
                return true;
            };
            const isLikePassword = () => {
                if (f.type !== 'text') {
                    return false;
                }
                if (valueIsLikePassword(f.htmlID)) {
                    return true;
                }
                if (valueIsLikePassword(f.htmlName)) {
                    return true;
                }
                if (valueIsLikePassword(f.placeholder)) {
                    return true;
                }
                return false;
            };
            if (!f.disabled && (canBeReadOnly || !f.readonly) && (isPassword || isLikePassword())
                && (canBeHidden || f.viewable) && (!mustBeEmpty || f.value == null || f.value.trim() === '')) {
                arr.push(f);
            }
        });
        return arr;
    }
    findUsernameField(pageDetails, passwordField, canBeHidden, canBeReadOnly, withoutForm) {
        let usernameField = null;
        for (let i = 0; i < pageDetails.fields.length; i++) {
            const f = pageDetails.fields[i];
            if (f.elementNumber >= passwordField.elementNumber) {
                break;
            }
            if (!f.disabled && (canBeReadOnly || !f.readonly) &&
                (withoutForm || f.form === passwordField.form) && (canBeHidden || f.viewable) &&
                (f.type === 'text' || f.type === 'email' || f.type === 'tel')) {
                usernameField = f;
                if (this.findMatchingFieldIndex(f, UsernameFieldNames) > -1) {
                    // We found an exact match. No need to keep looking.
                    break;
                }
            }
        }
        return usernameField;
    }
    findMatchingFieldIndex(field, names) {
        for (let i = 0; i < names.length; i++) {
            if (names[i].indexOf('=') > -1) {
                if (this.fieldPropertyIsPrefixMatch(field, 'htmlID', names[i], 'id')) {
                    return i;
                }
                if (this.fieldPropertyIsPrefixMatch(field, 'htmlName', names[i], 'name')) {
                    return i;
                }
                if (this.fieldPropertyIsPrefixMatch(field, 'label-tag', names[i], 'label')) {
                    return i;
                }
                if (this.fieldPropertyIsPrefixMatch(field, 'label-aria', names[i], 'label')) {
                    return i;
                }
                if (this.fieldPropertyIsPrefixMatch(field, 'placeholder', names[i], 'placeholder')) {
                    return i;
                }
            }
            if (this.fieldPropertyIsMatch(field, 'htmlID', names[i])) {
                return i;
            }
            if (this.fieldPropertyIsMatch(field, 'htmlName', names[i])) {
                return i;
            }
            if (this.fieldPropertyIsMatch(field, 'label-tag', names[i])) {
                return i;
            }
            if (this.fieldPropertyIsMatch(field, 'label-aria', names[i])) {
                return i;
            }
            if (this.fieldPropertyIsMatch(field, 'placeholder', names[i])) {
                return i;
            }
        }
        return -1;
    }
    fieldPropertyIsPrefixMatch(field, property, name, prefix, separator = '=') {
        if (name.indexOf(prefix + separator) === 0) {
            const sepIndex = name.indexOf(separator);
            const val = name.substring(sepIndex + 1);
            return val != null && this.fieldPropertyIsMatch(field, property, val);
        }
        return false;
    }
    fieldPropertyIsMatch(field, property, name) {
        let fieldVal = field[property];
        if (!this.hasValue(fieldVal)) {
            return false;
        }
        fieldVal = fieldVal.trim().replace(/(?:\r\n|\r|\n)/g, '');
        if (name.startsWith('regex=')) {
            try {
                const regexParts = name.split('=', 2);
                if (regexParts.length === 2) {
                    const regex = new RegExp(regexParts[1], 'i');
                    return regex.test(fieldVal);
                }
            }
            catch (e) { }
        }
        else if (name.startsWith('csv=')) {
            const csvParts = name.split('=', 2);
            if (csvParts.length === 2) {
                const csvVals = csvParts[1].split(',');
                for (let i = 0; i < csvVals.length; i++) {
                    const val = csvVals[i];
                    if (val != null && val.trim().toLowerCase() === fieldVal.toLowerCase()) {
                        return true;
                    }
                }
                return false;
            }
        }
        return fieldVal.toLowerCase() === name;
    }
    fieldIsFuzzyMatch(field, names) {
        if (this.hasValue(field.htmlID) && this.fuzzyMatch(names, field.htmlID)) {
            return true;
        }
        if (this.hasValue(field.htmlName) && this.fuzzyMatch(names, field.htmlName)) {
            return true;
        }
        if (this.hasValue(field['label-tag']) && this.fuzzyMatch(names, field['label-tag'])) {
            return true;
        }
        if (this.hasValue(field.placeholder) && this.fuzzyMatch(names, field.placeholder)) {
            return true;
        }
        if (this.hasValue(field['label-left']) && this.fuzzyMatch(names, field['label-left'])) {
            return true;
        }
        if (this.hasValue(field['label-top']) && this.fuzzyMatch(names, field['label-top'])) {
            return true;
        }
        if (this.hasValue(field['label-aria']) && this.fuzzyMatch(names, field['label-aria'])) {
            return true;
        }
        return false;
    }
    fuzzyMatch(options, value) {
        if (options == null || options.length === 0 || value == null || value === '') {
            return false;
        }
        value = value.replace(/(?:\r\n|\r|\n)/g, '').trim().toLowerCase();
        for (let i = 0; i < options.length; i++) {
            if (value.indexOf(options[i]) > -1) {
                return true;
            }
        }
        return false;
    }
    hasValue(str) {
        return str && str !== '';
    }
    setFillScriptForFocus(filledFields, fillScript) {
        let lastField = null;
        let lastPasswordField = null;
        for (const opid in filledFields) {
            if (filledFields.hasOwnProperty(opid) && filledFields[opid].viewable) {
                lastField = filledFields[opid];
                if (filledFields[opid].type === 'password') {
                    lastPasswordField = filledFields[opid];
                }
            }
        }
        // Prioritize password field over others.
        if (lastPasswordField) {
            fillScript.script.push(['focus_by_opid', lastPasswordField.opid]);
        }
        else if (lastField) {
            fillScript.script.push(['focus_by_opid', lastField.opid]);
        }
        return fillScript;
    }
    fillByOpid(fillScript, field, value) {
        if (field.maxLength && value && value.length > field.maxLength) {
            value = value.substr(0, value.length);
        }
        fillScript.script.push(['click_on_opid', field.opid]);
        fillScript.script.push(['focus_by_opid', field.opid]);
        fillScript.script.push(['fill_by_opid', field.opid, value]);
    }
}

// EXTERNAL MODULE: ./src/services/browserMessaging.service.ts
var browserMessaging_service = __webpack_require__(170);

// CONCATENATED MODULE: ./src/services/browserPlatformUtils.service.ts
var browserPlatformUtils_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const DialogPromiseExpiration = 600000; // 10 minutes
class browserPlatformUtils_service_BrowserPlatformUtilsService {
    constructor(messagingService, clipboardWriteCallback) {
        this.messagingService = messagingService;
        this.clipboardWriteCallback = clipboardWriteCallback;
        this.identityClientId = 'browser';
        this.showDialogResolves = new Map();
        this.deviceCache = null;
        this.analyticsIdCache = null;
    }
    getDevice() {
        if (this.deviceCache) {
            return this.deviceCache;
        }
        if (this.isSafariExtension()) {
            this.deviceCache = deviceType["a" /* DeviceType */].SafariExtension;
        }
        else if (navigator.userAgent.indexOf(' Firefox/') !== -1 || navigator.userAgent.indexOf(' Gecko/') !== -1) {
            this.deviceCache = deviceType["a" /* DeviceType */].FirefoxExtension;
        }
        else if ((!!window.opr && !!opr.addons) || !!window.opera ||
            navigator.userAgent.indexOf(' OPR/') >= 0) {
            this.deviceCache = deviceType["a" /* DeviceType */].OperaExtension;
        }
        else if (navigator.userAgent.indexOf(' Edge/') !== -1) {
            this.deviceCache = deviceType["a" /* DeviceType */].EdgeExtension;
        }
        else if (navigator.userAgent.indexOf(' Vivaldi/') !== -1) {
            this.deviceCache = deviceType["a" /* DeviceType */].VivaldiExtension;
        }
        else if (window.chrome && navigator.userAgent.indexOf(' Chrome/') !== -1) {
            this.deviceCache = deviceType["a" /* DeviceType */].ChromeExtension;
        }
        return this.deviceCache;
    }
    getDeviceString() {
        const device = deviceType["a" /* DeviceType */][this.getDevice()].toLowerCase();
        return device.replace('extension', '');
    }
    isFirefox() {
        return this.getDevice() === deviceType["a" /* DeviceType */].FirefoxExtension;
    }
    isChrome() {
        return this.getDevice() === deviceType["a" /* DeviceType */].ChromeExtension;
    }
    isEdge() {
        return this.getDevice() === deviceType["a" /* DeviceType */].EdgeExtension;
    }
    isOpera() {
        return this.getDevice() === deviceType["a" /* DeviceType */].OperaExtension;
    }
    isVivaldi() {
        return this.getDevice() === deviceType["a" /* DeviceType */].VivaldiExtension;
    }
    isSafari() {
        return this.getDevice() === deviceType["a" /* DeviceType */].SafariExtension;
    }
    isIE() {
        return false;
    }
    isMacAppStore() {
        return false;
    }
    analyticsId() {
        if (this.analyticsIdCache) {
            return this.analyticsIdCache;
        }
        this.analyticsIdCache = analytics["b" /* AnalyticsIds */][this.getDevice()];
        return this.analyticsIdCache;
    }
    isViewOpen() {
        return browserPlatformUtils_service_awaiter(this, void 0, void 0, function* () {
            if (yield browserApi["a" /* BrowserApi */].isPopupOpen()) {
                return true;
            }
            if (this.isSafari()) {
                return false;
            }
            const sidebarView = this.sidebarViewName();
            const sidebarOpen = sidebarView != null && chrome.extension.getViews({ type: sidebarView }).length > 0;
            if (sidebarOpen) {
                return true;
            }
            const tabOpen = chrome.extension.getViews({ type: 'tab' }).length > 0;
            return tabOpen;
        });
    }
    lockTimeout() {
        return null;
    }
    launchUri(uri, options) {
        browserApi["a" /* BrowserApi */].createNewTab(uri, options && options.extensionPage === true);
    }
    saveFile(win, blobData, blobOptions, fileName) {
        browserApi["a" /* BrowserApi */].downloadFile(win, blobData, blobOptions, fileName);
    }
    getApplicationVersion() {
        return browserApi["a" /* BrowserApi */].getApplicationVersion();
    }
    supportsU2f(win) {
        if (win != null && win.u2f != null) {
            return true;
        }
        return this.isChrome() || this.isOpera() || this.isVivaldi();
    }
    supportsDuo() {
        return true;
    }
    showToast(type, title, text, options) {
        this.messagingService.send('showToast', {
            text: text,
            title: title,
            type: type,
            options: options,
        });
    }
    showDialog(text, title, confirmText, cancelText, type) {
        const dialogId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.messagingService.send('showDialog', {
            text: text,
            title: title,
            confirmText: confirmText,
            cancelText: cancelText,
            type: type,
            dialogId: dialogId,
        });
        return new Promise((resolve) => {
            this.showDialogResolves.set(dialogId, { resolve: resolve, date: new Date() });
        });
    }
    eventTrack(action, label, options) {
        this.messagingService.send('analyticsEventTrack', {
            action: action,
            label: label,
            options: options,
        });
    }
    isDev() {
        return "production" === 'development';
    }
    isSelfHost() {
        return false;
    }
    copyToClipboard(text, options) {
        let win = window;
        let doc = window.document;
        if (options && (options.window || options.win)) {
            win = options.window || options.win;
            doc = win.document;
        }
        else if (options && options.doc) {
            doc = options.doc;
        }
        const clearing = options ? !!options.clearing : false;
        const clearMs = options && options.clearMs ? options.clearMs : null;
        if (this.isSafariExtension()) {
            safariApp["a" /* SafariApp */].sendMessageToApp('copyToClipboard', text).then(() => {
                if (!clearing && this.clipboardWriteCallback != null) {
                    this.clipboardWriteCallback(text, clearMs);
                }
            });
        }
        else if (this.isFirefox() && win.navigator.clipboard && win.navigator.clipboard.writeText) {
            win.navigator.clipboard.writeText(text).then(() => {
                if (!clearing && this.clipboardWriteCallback != null) {
                    this.clipboardWriteCallback(text, clearMs);
                }
            });
        }
        else if (win.clipboardData && win.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            win.clipboardData.setData('Text', text);
            if (!clearing && this.clipboardWriteCallback != null) {
                this.clipboardWriteCallback(text, clearMs);
            }
        }
        else if (doc.queryCommandSupported && doc.queryCommandSupported('copy')) {
            const textarea = doc.createElement('textarea');
            textarea.textContent = text == null || text === '' ? ' ' : text;
            // Prevent scrolling to bottom of page in MS Edge.
            textarea.style.position = 'fixed';
            doc.body.appendChild(textarea);
            textarea.select();
            try {
                // Security exception may be thrown by some browsers.
                if (doc.execCommand('copy') && !clearing && this.clipboardWriteCallback != null) {
                    this.clipboardWriteCallback(text, clearMs);
                }
            }
            catch (e) {
                // tslint:disable-next-line
                console.warn('Copy to clipboard failed.', e);
            }
            finally {
                doc.body.removeChild(textarea);
            }
        }
    }
    readFromClipboard(options) {
        return browserPlatformUtils_service_awaiter(this, void 0, void 0, function* () {
            let win = window;
            let doc = window.document;
            if (options && (options.window || options.win)) {
                win = options.window || options.win;
                doc = win.document;
            }
            else if (options && options.doc) {
                doc = options.doc;
            }
            if (this.isSafariExtension()) {
                return yield safariApp["a" /* SafariApp */].sendMessageToApp('readFromClipboard');
            }
            else if (this.isFirefox() && win.navigator.clipboard && win.navigator.clipboard.readText) {
                return yield win.navigator.clipboard.readText();
            }
            else if (doc.queryCommandSupported && doc.queryCommandSupported('paste')) {
                const textarea = doc.createElement('textarea');
                // Prevent scrolling to bottom of page in MS Edge.
                textarea.style.position = 'fixed';
                doc.body.appendChild(textarea);
                textarea.focus();
                try {
                    // Security exception may be thrown by some browsers.
                    if (doc.execCommand('paste')) {
                        return textarea.value;
                    }
                }
                catch (e) {
                    // tslint:disable-next-line
                    console.warn('Read from clipboard failed.', e);
                }
                finally {
                    doc.body.removeChild(textarea);
                }
            }
            return null;
        });
    }
    resolveDialogPromise(dialogId, confirmed) {
        if (this.showDialogResolves.has(dialogId)) {
            const resolveObj = this.showDialogResolves.get(dialogId);
            resolveObj.resolve(confirmed);
            this.showDialogResolves.delete(dialogId);
        }
        // Clean up old promises
        const deleteIds = [];
        this.showDialogResolves.forEach((val, key) => {
            const age = new Date().getTime() - val.date.getTime();
            if (age > DialogPromiseExpiration) {
                deleteIds.push(key);
            }
        });
        deleteIds.forEach((id) => {
            this.showDialogResolves.delete(id);
        });
    }
    sidebarViewName() {
        if (window.chrome.sidebarAction && this.isFirefox()) {
            return 'sidebar';
        }
        else if (this.isOpera() && (typeof opr !== 'undefined') && opr.sidebarAction) {
            return 'sidebar_panel';
        }
        return null;
    }
    isSafariExtension() {
        return window.safariAppExtension === true;
    }
}

// CONCATENATED MODULE: ./src/services/browserStorage.service.ts
var browserStorage_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class browserStorage_service_BrowserStorageService {
    constructor(platformUtilsService) {
        this.isSafari = platformUtilsService.isSafari();
        if (!this.isSafari) {
            this.chromeStorageApi = chrome.storage.local;
        }
    }
    get(key) {
        return browserStorage_service_awaiter(this, void 0, void 0, function* () {
            if (this.isSafari) {
                const obj = yield safariApp["a" /* SafariApp */].sendMessageToApp('storage_get', key);
                return obj == null ? null : JSON.parse(obj);
            }
            else {
                return new Promise((resolve) => {
                    this.chromeStorageApi.get(key, (obj) => {
                        if (obj != null && obj[key] != null) {
                            resolve(obj[key]);
                            return;
                        }
                        resolve(null);
                    });
                });
            }
        });
    }
    save(key, obj) {
        return browserStorage_service_awaiter(this, void 0, void 0, function* () {
            const keyedObj = { [key]: obj };
            if (this.isSafari) {
                yield safariApp["a" /* SafariApp */].sendMessageToApp('storage_save', JSON.stringify({
                    key: key,
                    obj: JSON.stringify(obj),
                }));
            }
            else {
                return new Promise((resolve) => {
                    this.chromeStorageApi.set(keyedObj, () => {
                        resolve();
                    });
                });
            }
        });
    }
    remove(key) {
        return browserStorage_service_awaiter(this, void 0, void 0, function* () {
            if (this.isSafari) {
                yield safariApp["a" /* SafariApp */].sendMessageToApp('storage_remove', key);
            }
            else {
                return new Promise((resolve) => {
                    this.chromeStorageApi.remove(key, () => {
                        resolve();
                    });
                });
            }
        });
    }
}

// CONCATENATED MODULE: ./src/services/i18n.service.ts
var services_i18n_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class services_i18n_service_I18nService extends i18n_service_I18nService {
    constructor(systemLanguage) {
        super(systemLanguage, browserApi["a" /* BrowserApi */].isSafariApi ? 'safari' : null, (formattedLocale) => services_i18n_service_awaiter(this, void 0, void 0, function* () {
            if (browserApi["a" /* BrowserApi */].isSafariApi) {
                yield safariApp["a" /* SafariApp */].sendMessageToApp('getLocaleStrings', formattedLocale);
                return window.bitwardenLocaleStrings;
            }
            else {
                // Deprecated
                const file = yield fetch(this.localesDirectory + formattedLocale + '/messages.json');
                return yield file.json();
            }
        }));
        this.supportedTranslationLocales = [
            'en', 'bg', 'ca', 'cs', 'da', 'de', 'en-GB', 'es', 'et', 'fa', 'fi', 'fr', 'he', 'hr', 'hu', 'id', 'it',
            'ja', 'ko', 'nb', 'nl', 'pl', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sk', 'sv', 'th', 'tr', 'uk', 'vi',
            'zh-CN', 'zh-TW',
        ];
    }
    t(id, p1, p2, p3) {
        return this.translate(id, p1, p2, p3);
    }
    translate(id, p1, p2, p3) {
        if (this.localesDirectory == null) {
            const placeholders = [];
            if (p1 != null) {
                placeholders.push(p1);
            }
            if (p2 != null) {
                placeholders.push(p2);
            }
            if (p3 != null) {
                placeholders.push(p3);
            }
            if (placeholders.length) {
                return chrome.i18n.getMessage(id, placeholders);
            }
            else {
                return chrome.i18n.getMessage(id);
            }
        }
        return super.translate(id, p1, p2, p3);
    }
}

// CONCATENATED MODULE: ./src/background/main.background.ts
var main_background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
























class main_background_MainBackground {
    constructor() {
        this.loginToAutoFill = null;
        this.notificationQueue = [];
        this.menuOptionsLoaded = [];
        // Services
        this.messagingService = new browserMessaging_service["a" /* default */]();
        this.platformUtilsService = new browserPlatformUtils_service_BrowserPlatformUtilsService(this.messagingService, (clipboardValue, clearMs) => {
            if (this.systemService != null) {
                this.systemService.clearClipboard(clipboardValue, clearMs);
            }
        });
        this.storageService = new browserStorage_service_BrowserStorageService(this.platformUtilsService);
        this.secureStorageService = new browserStorage_service_BrowserStorageService(this.platformUtilsService);
        this.i18nService = new services_i18n_service_I18nService(browserApi["a" /* BrowserApi */].getUILanguage(window));
        const cryptoFunctionService = new webCryptoFunction_service_WebCryptoFunctionService(window, this.platformUtilsService);
        this.cryptoService = new crypto_service_CryptoService(this.storageService, this.secureStorageService, cryptoFunctionService);
        this.tokenService = new token_service_TokenService(this.storageService);
        this.appIdService = new appId_service_AppIdService(this.storageService);
        this.apiService = new api_service_ApiService(this.tokenService, this.platformUtilsService, (expired) => this.logout(expired));
        this.userService = new user_service_UserService(this.tokenService, this.storageService);
        this.settingsService = new SettingsService(this.userService, this.storageService);
        this.cipherService = new cipher_service["a" /* CipherService */](this.cryptoService, this.userService, this.settingsService, this.apiService, this.storageService, this.i18nService, () => this.searchService);
        this.folderService = new folder_service_FolderService(this.cryptoService, this.userService, this.apiService, this.storageService, this.i18nService, this.cipherService);
        this.collectionService = new collection_service_CollectionService(this.cryptoService, this.userService, this.storageService, this.i18nService);
        this.searchService = new search_service["a" /* SearchService */](this.cipherService, this.platformUtilsService);
        this.lockService = new lock_service_LockService(this.cipherService, this.folderService, this.collectionService, this.cryptoService, this.platformUtilsService, this.storageService, this.messagingService, this.searchService, this.userService, () => main_background_awaiter(this, void 0, void 0, function* () {
            if (this.notificationsService != null) {
                this.notificationsService.updateConnection(false);
            }
            yield this.setIcon();
            yield this.refreshBadgeAndMenu(true);
            if (this.systemService != null) {
                this.systemService.startProcessReload();
                yield this.systemService.clearPendingClipboard();
            }
        }));
        this.syncService = new sync_service_SyncService(this.userService, this.apiService, this.settingsService, this.folderService, this.cipherService, this.cryptoService, this.collectionService, this.storageService, this.messagingService, (expired) => main_background_awaiter(this, void 0, void 0, function* () { return yield this.logout(expired); }));
        this.eventService = new event_service_EventService(this.storageService, this.apiService, this.userService, this.cipherService);
        this.passwordGenerationService = new passwordGeneration_service_PasswordGenerationService(this.cryptoService, this.storageService);
        this.totpService = new totp_service_TotpService(this.storageService, cryptoFunctionService);
        this.autofillService = new autofill_service_AutofillService(this.cipherService, this.userService, this.totpService, this.eventService);
        this.containerService = new ContainerService(this.cryptoService);
        this.auditService = new audit_service_AuditService(cryptoFunctionService, this.apiService);
        this.exportService = new export_service_ExportService(this.folderService, this.cipherService, this.apiService);
        this.notificationsService = new notifications_service_NotificationsService(this.userService, this.syncService, this.appIdService, this.apiService, this.lockService, () => this.logout(true));
        this.environmentService = new environment_service_EnvironmentService(this.apiService, this.storageService, this.notificationsService);
        this.analytics = new analytics["a" /* Analytics */](window, () => browserApi["a" /* BrowserApi */].gaFilter(), this.platformUtilsService, this.storageService, this.appIdService);
        this.systemService = new system_service_SystemService(this.storageService, this.lockService, this.messagingService, this.platformUtilsService, () => {
            const forceWindowReload = this.platformUtilsService.isSafari() ||
                this.platformUtilsService.isFirefox() || this.platformUtilsService.isOpera();
            browserApi["a" /* BrowserApi */].reloadExtension(forceWindowReload ? window : null);
            return Promise.resolve();
        });
        // Other fields
        this.isSafari = this.platformUtilsService.isSafari();
        this.sidebarAction = this.isSafari ? null : (typeof opr !== 'undefined') && opr.sidebarAction ?
            opr.sidebarAction : window.chrome.sidebarAction;
        // Background
        this.runtimeBackground = new runtime_background_RuntimeBackground(this, this.autofillService, this.cipherService, this.platformUtilsService, this.storageService, this.i18nService, this.analytics, this.notificationsService, this.systemService, this.lockService);
        this.commandsBackground = new commands_background_CommandsBackground(this, this.passwordGenerationService, this.platformUtilsService, this.analytics, this.lockService);
        if (!this.isSafari) {
            this.tabsBackground = new TabsBackground(this);
            this.contextMenusBackground = new contextMenus_background_ContextMenusBackground(this, this.cipherService, this.passwordGenerationService, this.analytics, this.platformUtilsService, this.lockService, this.eventService);
            this.idleBackground = new idle_background_IdleBackground(this.lockService, this.storageService, this.notificationsService);
            this.webRequestBackground = new WebRequestBackground(this.platformUtilsService, this.cipherService, this.lockService);
            this.windowsBackground = new WindowsBackground(this);
        }
    }
    bootstrap() {
        return main_background_awaiter(this, void 0, void 0, function* () {
            safariApp["a" /* SafariApp */].init();
            this.analytics.ga('send', 'pageview', '/background.html');
            this.containerService.attachToWindow(window);
            yield this.lockService.init(true);
            yield this.i18nService.init();
            yield this.eventService.init(true);
            yield this.runtimeBackground.init();
            yield this.commandsBackground.init();
            if (!this.isSafari) {
                yield this.tabsBackground.init();
                yield this.contextMenusBackground.init();
                yield this.idleBackground.init();
                yield this.webRequestBackground.init();
                yield this.windowsBackground.init();
            }
            return new Promise((resolve) => {
                setTimeout(() => main_background_awaiter(this, void 0, void 0, function* () {
                    yield this.environmentService.setUrlsFromStorage();
                    yield this.setIcon();
                    this.cleanupNotificationQueue();
                    this.fullSync(true);
                    setTimeout(() => this.notificationsService.init(this.environmentService), 2500);
                    resolve();
                }), 500);
            });
        });
    }
    setIcon() {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (this.isSafari || (!chrome.browserAction && !this.sidebarAction)) {
                return;
            }
            const isAuthenticated = yield this.userService.isAuthenticated();
            const locked = yield this.lockService.isLocked();
            let suffix = '';
            if (!isAuthenticated) {
                suffix = '_gray';
            }
            else if (locked) {
                suffix = '_locked';
            }
            yield this.actionSetIcon(chrome.browserAction, suffix);
            yield this.actionSetIcon(this.sidebarAction, suffix);
        });
    }
    refreshBadgeAndMenu(forLocked = false) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (this.isSafari || !chrome.windows || !chrome.contextMenus) {
                return;
            }
            const menuDisabled = yield this.storageService.get(constants_service["a" /* ConstantsService */].disableContextMenuItemKey);
            if (!menuDisabled) {
                yield this.buildContextMenu();
            }
            else {
                yield this.contextMenusRemoveAll();
            }
            if (forLocked) {
                yield this.loadMenuAndUpdateBadgeForLockedState(!menuDisabled);
                this.onUpdatedRan = this.onReplacedRan = false;
                return;
            }
            const tab = yield browserApi["a" /* BrowserApi */].getTabFromCurrentWindow();
            if (tab) {
                yield this.contextMenuReady(tab, !menuDisabled);
            }
        });
    }
    logout(expired) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            yield this.eventService.uploadEvents();
            const userId = yield this.userService.getUserId();
            yield Promise.all([
                this.eventService.clearEvents(),
                this.syncService.setLastSync(new Date(0)),
                this.tokenService.clearToken(),
                this.cryptoService.clearKeys(),
                this.userService.clear(),
                this.settingsService.clear(userId),
                this.cipherService.clear(userId),
                this.folderService.clear(userId),
                this.collectionService.clear(userId),
                this.passwordGenerationService.clear(),
                this.lockService.clear(),
            ]);
            this.searchService.clearIndex();
            this.messagingService.send('doneLoggingOut', { expired: expired });
            yield this.setIcon();
            yield this.refreshBadgeAndMenu();
            yield this.reseedStorage();
            this.notificationsService.updateConnection(false);
            this.systemService.startProcessReload();
            yield this.systemService.clearPendingClipboard();
        });
    }
    collectPageDetailsForContentScript(tab, sender, frameId = null) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (tab == null || !tab.id) {
                return;
            }
            if (yield this.lockService.isLocked()) {
                return;
            }
            const options = {};
            if (frameId != null) {
                options.frameId = frameId;
            }
            browserApi["a" /* BrowserApi */].tabSendMessage(tab, {
                command: 'collectPageDetails',
                tab: tab,
                sender: sender,
            }, options);
        });
    }
    checkNotificationQueue(tab = null) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (this.notificationQueue.length === 0) {
                return;
            }
            if (tab != null) {
                this.doNotificationQueueCheck(tab);
                return;
            }
            const currentTab = yield browserApi["a" /* BrowserApi */].getTabFromCurrentWindow();
            if (currentTab != null) {
                this.doNotificationQueueCheck(currentTab);
            }
        });
    }
    openPopup() {
        return main_background_awaiter(this, void 0, void 0, function* () {
            // Chrome APIs cannot open popup
            // TODO: Do we need to open this popup?
            if (!this.isSafari) {
                return;
            }
            yield safariApp["a" /* SafariApp */].sendMessageToApp('showPopover', null, true);
        });
    }
    reseedStorage() {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (!this.platformUtilsService.isChrome() && !this.platformUtilsService.isVivaldi() &&
                !this.platformUtilsService.isOpera()) {
                return;
            }
            const currentLockOption = yield this.storageService.get(constants_service["a" /* ConstantsService */].lockOptionKey);
            if (currentLockOption == null) {
                return;
            }
            const getStorage = () => new Promise((resolve) => {
                chrome.storage.local.get(null, (o) => resolve(o));
            });
            const clearStorage = () => new Promise((resolve) => {
                chrome.storage.local.clear(() => resolve());
            });
            const storage = yield getStorage();
            yield clearStorage();
            for (const key in storage) {
                if (!storage.hasOwnProperty(key)) {
                    continue;
                }
                yield this.storageService.save(key, storage[key]);
            }
        });
    }
    buildContextMenu() {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (this.isSafari || !chrome.contextMenus || this.buildingContextMenu) {
                return;
            }
            this.buildingContextMenu = true;
            yield this.contextMenusRemoveAll();
            yield this.contextMenusCreate({
                type: 'normal',
                id: 'root',
                contexts: ['all'],
                title: 'Bitwarden',
            });
            yield this.contextMenusCreate({
                type: 'normal',
                id: 'autofill',
                parentId: 'root',
                contexts: ['all'],
                title: this.i18nService.t('autoFill'),
            });
            // Edge does not support writing to the clipboard from background
            if (!this.platformUtilsService.isEdge()) {
                yield this.contextMenusCreate({
                    type: 'normal',
                    id: 'copy-username',
                    parentId: 'root',
                    contexts: ['all'],
                    title: this.i18nService.t('copyUsername'),
                });
                yield this.contextMenusCreate({
                    type: 'normal',
                    id: 'copy-password',
                    parentId: 'root',
                    contexts: ['all'],
                    title: this.i18nService.t('copyPassword'),
                });
                yield this.contextMenusCreate({
                    type: 'separator',
                    parentId: 'root',
                });
                yield this.contextMenusCreate({
                    type: 'normal',
                    id: 'generate-password',
                    parentId: 'root',
                    contexts: ['all'],
                    title: this.i18nService.t('generatePasswordCopied'),
                });
            }
            this.buildingContextMenu = false;
        });
    }
    contextMenuReady(tab, contextMenuEnabled) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            yield this.loadMenuAndUpdateBadge(tab.url, tab.id, contextMenuEnabled);
            this.onUpdatedRan = this.onReplacedRan = false;
        });
    }
    loadMenuAndUpdateBadge(url, tabId, contextMenuEnabled) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (!url || (!chrome.browserAction && !this.sidebarAction)) {
                return;
            }
            this.actionSetBadgeBackgroundColor(chrome.browserAction);
            this.actionSetBadgeBackgroundColor(this.sidebarAction);
            this.menuOptionsLoaded = [];
            const locked = yield this.lockService.isLocked();
            if (!locked) {
                try {
                    const ciphers = yield this.cipherService.getAllDecryptedForUrl(url);
                    ciphers.sort((a, b) => this.cipherService.sortCiphersByLastUsedThenName(a, b));
                    if (contextMenuEnabled) {
                        ciphers.forEach((cipher) => {
                            this.loadLoginContextMenuOptions(cipher);
                        });
                    }
                    let theText = '';
                    if (ciphers.length > 0 && ciphers.length <= 9) {
                        theText = ciphers.length.toString();
                    }
                    else if (ciphers.length > 0) {
                        theText = '9+';
                    }
                    else {
                        if (contextMenuEnabled) {
                            yield this.loadNoLoginsContextMenuOptions(this.i18nService.t('noMatchingLogins'));
                        }
                    }
                    this.browserActionSetBadgeText(theText, tabId);
                    this.sidebarActionSetBadgeText(theText, tabId);
                    return;
                }
                catch (_a) { }
            }
            yield this.loadMenuAndUpdateBadgeForLockedState(contextMenuEnabled);
        });
    }
    loadMenuAndUpdateBadgeForLockedState(contextMenuEnabled) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (contextMenuEnabled) {
                yield this.loadNoLoginsContextMenuOptions(this.i18nService.t('vaultLocked'));
            }
            const tabs = yield browserApi["a" /* BrowserApi */].getActiveTabs();
            if (tabs != null) {
                tabs.forEach((tab) => {
                    if (tab.id != null) {
                        this.browserActionSetBadgeText('', tab.id);
                        this.sidebarActionSetBadgeText('', tab.id);
                    }
                });
            }
        });
    }
    loadLoginContextMenuOptions(cipher) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (cipher == null || cipher.type !== cipherType["a" /* CipherType */].Login) {
                return;
            }
            let title = cipher.name;
            if (cipher.login.username && cipher.login.username !== '') {
                title += (' (' + cipher.login.username + ')');
            }
            yield this.loadContextMenuOptions(title, cipher.id, cipher);
        });
    }
    loadNoLoginsContextMenuOptions(noLoginsMessage) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            yield this.loadContextMenuOptions(noLoginsMessage, 'noop', null);
        });
    }
    loadContextMenuOptions(title, idSuffix, cipher) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (!chrome.contextMenus || this.menuOptionsLoaded.indexOf(idSuffix) > -1 ||
                (cipher != null && cipher.type !== cipherType["a" /* CipherType */].Login)) {
                return;
            }
            this.menuOptionsLoaded.push(idSuffix);
            if (cipher == null || (cipher.login.password && cipher.login.password !== '')) {
                yield this.contextMenusCreate({
                    type: 'normal',
                    id: 'autofill_' + idSuffix,
                    parentId: 'autofill',
                    contexts: ['all'],
                    title: title,
                });
            }
            if (cipher == null || (cipher.login.username && cipher.login.username !== '')) {
                yield this.contextMenusCreate({
                    type: 'normal',
                    id: 'copy-username_' + idSuffix,
                    parentId: 'copy-username',
                    contexts: ['all'],
                    title: title,
                });
            }
            if (cipher == null || (cipher.login.password && cipher.login.password !== '')) {
                yield this.contextMenusCreate({
                    type: 'normal',
                    id: 'copy-password_' + idSuffix,
                    parentId: 'copy-password',
                    contexts: ['all'],
                    title: title,
                });
            }
        });
    }
    cleanupNotificationQueue() {
        for (let i = this.notificationQueue.length - 1; i >= 0; i--) {
            if (this.notificationQueue[i].expires < new Date()) {
                this.notificationQueue.splice(i, 1);
            }
        }
        setTimeout(() => this.cleanupNotificationQueue(), 2 * 60 * 1000); // check every 2 minutes
    }
    doNotificationQueueCheck(tab) {
        if (tab == null) {
            return;
        }
        const tabDomain = utils["a" /* Utils */].getDomain(tab.url);
        if (tabDomain == null) {
            return;
        }
        for (let i = 0; i < this.notificationQueue.length; i++) {
            if (this.notificationQueue[i].tabId !== tab.id || this.notificationQueue[i].domain !== tabDomain) {
                continue;
            }
            if (this.notificationQueue[i].type === 'addLogin') {
                browserApi["a" /* BrowserApi */].tabSendMessageData(tab, 'openNotificationBar', {
                    type: 'add',
                });
            }
            else if (this.notificationQueue[i].type === 'changePassword') {
                browserApi["a" /* BrowserApi */].tabSendMessageData(tab, 'openNotificationBar', {
                    type: 'change',
                });
            }
            break;
        }
    }
    fullSync(override = false) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            const syncInternal = 6 * 60 * 60 * 1000; // 6 hours
            const lastSync = yield this.syncService.getLastSync();
            let lastSyncAgo = syncInternal + 1;
            if (lastSync != null) {
                lastSyncAgo = new Date().getTime() - lastSync.getTime();
            }
            if (override || lastSyncAgo >= syncInternal) {
                yield this.syncService.fullSync(override);
                this.scheduleNextSync();
            }
            else {
                this.scheduleNextSync();
            }
        });
    }
    scheduleNextSync() {
        if (this.syncTimeout) {
            clearTimeout(this.syncTimeout);
        }
        this.syncTimeout = setTimeout(() => main_background_awaiter(this, void 0, void 0, function* () { return yield this.fullSync(); }), 5 * 60 * 1000); // check every 5 minutes
    }
    // Browser API Helpers
    contextMenusRemoveAll() {
        return new Promise((resolve) => {
            chrome.contextMenus.removeAll(() => {
                resolve();
                if (chrome.runtime.lastError) {
                    return;
                }
            });
        });
    }
    contextMenusCreate(options) {
        return new Promise((resolve) => {
            chrome.contextMenus.create(options, () => {
                resolve();
                if (chrome.runtime.lastError) {
                    return;
                }
            });
        });
    }
    actionSetIcon(theAction, suffix) {
        return main_background_awaiter(this, void 0, void 0, function* () {
            if (!theAction || !theAction.setIcon) {
                return;
            }
            const options = {
                path: {
                    19: 'images/icon19' + suffix + '.png',
                    38: 'images/icon38' + suffix + '.png',
                },
            };
            if (this.platformUtilsService.isFirefox()) {
                yield theAction.setIcon(options);
            }
            else {
                return new Promise((resolve) => {
                    theAction.setIcon(options, () => resolve());
                });
            }
        });
    }
    actionSetBadgeBackgroundColor(action) {
        if (action && action.setBadgeBackgroundColor) {
            action.setBadgeBackgroundColor({ color: '#294e5f' });
        }
    }
    browserActionSetBadgeText(text, tabId) {
        if (chrome.browserAction && chrome.browserAction.setBadgeText) {
            chrome.browserAction.setBadgeText({
                text: text,
                tabId: tabId,
            });
        }
    }
    sidebarActionSetBadgeText(text, tabId) {
        if (!this.sidebarAction) {
            return;
        }
        if (this.sidebarAction.setBadgeText) {
            this.sidebarAction.setBadgeText({
                text: text,
                tabId: tabId,
            });
        }
        else if (this.sidebarAction.setTitle) {
            let title = 'Bitwarden';
            if (text && text !== '') {
                title += (' [' + text + ']');
            }
            this.sidebarAction.setTitle({
                title: title,
                tabId: tabId,
            });
        }
    }
}

// CONCATENATED MODULE: ./src/background.ts

const bitwardenMain = window.bitwardenMain = new main_background_MainBackground();
bitwardenMain.bootstrap().then(() => {
    // Finished bootstrapping
});


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherData; });
/* harmony import */ var _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _attachmentData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(223);
/* harmony import */ var _cardData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(224);
/* harmony import */ var _fieldData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(225);
/* harmony import */ var _identityData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(226);
/* harmony import */ var _loginData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(227);
/* harmony import */ var _passwordHistoryData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(229);
/* harmony import */ var _secureNoteData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(230);








class CipherData {
    constructor(response, userId, collectionIds) {
        if (response == null) {
            return;
        }
        this.id = response.id;
        this.organizationId = response.organizationId;
        this.folderId = response.folderId;
        this.userId = userId;
        this.edit = response.edit;
        this.organizationUseTotp = response.organizationUseTotp;
        this.favorite = response.favorite;
        this.revisionDate = response.revisionDate;
        this.type = response.type;
        this.name = response.name;
        this.notes = response.notes;
        this.collectionIds = collectionIds != null ? collectionIds : response.collectionIds;
        switch (this.type) {
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login:
                this.login = new _loginData__WEBPACK_IMPORTED_MODULE_5__[/* LoginData */ "a"](response.login);
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].SecureNote:
                this.secureNote = new _secureNoteData__WEBPACK_IMPORTED_MODULE_7__[/* SecureNoteData */ "a"](response.secureNote);
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Card:
                this.card = new _cardData__WEBPACK_IMPORTED_MODULE_2__[/* CardData */ "a"](response.card);
                break;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Identity:
                this.identity = new _identityData__WEBPACK_IMPORTED_MODULE_4__[/* IdentityData */ "a"](response.identity);
                break;
            default:
                break;
        }
        if (response.fields != null) {
            this.fields = response.fields.map((f) => new _fieldData__WEBPACK_IMPORTED_MODULE_3__[/* FieldData */ "a"](f));
        }
        if (response.attachments != null) {
            this.attachments = response.attachments.map((a) => new _attachmentData__WEBPACK_IMPORTED_MODULE_1__[/* AttachmentData */ "a"](a));
        }
        if (response.passwordHistory != null) {
            this.passwordHistory = response.passwordHistory.map((ph) => new _passwordHistoryData__WEBPACK_IMPORTED_MODULE_6__[/* PasswordHistoryData */ "a"](ph));
        }
    }
}


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymmetricCryptoKey; });
/* harmony import */ var _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _misc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


class SymmetricCryptoKey {
    constructor(key, encType) {
        if (key == null) {
            throw new Error('Must provide key');
        }
        if (encType == null) {
            if (key.byteLength === 32) {
                encType = _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc256_B64;
            }
            else if (key.byteLength === 64) {
                encType = _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc256_HmacSha256_B64;
            }
            else {
                throw new Error('Unable to determine encType.');
            }
        }
        this.key = key;
        this.encType = encType;
        if (encType === _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc256_B64 && key.byteLength === 32) {
            this.encKey = key;
            this.macKey = null;
        }
        else if (encType === _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc128_HmacSha256_B64 && key.byteLength === 32) {
            this.encKey = key.slice(0, 16);
            this.macKey = key.slice(16, 32);
        }
        else if (encType === _enums_encryptionType__WEBPACK_IMPORTED_MODULE_0__[/* EncryptionType */ "a"].AesCbc256_HmacSha256_B64 && key.byteLength === 64) {
            this.encKey = key.slice(0, 32);
            this.macKey = key.slice(32, 64);
        }
        else {
            throw new Error('Unsupported encType/key length.');
        }
        if (this.key != null) {
            this.keyB64 = _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].fromBufferToB64(this.key);
        }
        if (this.encKey != null) {
            this.encKeyB64 = _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].fromBufferToB64(this.encKey);
        }
        if (this.macKey != null) {
            this.macKeyB64 = _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].fromBufferToB64(this.macKey);
        }
    }
}


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherType; });
var CipherType;
(function (CipherType) {
    CipherType[CipherType["Login"] = 1] = "Login";
    CipherType[CipherType["SecureNote"] = 2] = "SecureNote";
    CipherType[CipherType["Card"] = 3] = "Card";
    CipherType[CipherType["Identity"] = 4] = "Identity";
})(CipherType || (CipherType = {}));


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CipherView; });
/* harmony import */ var _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _cardView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony import */ var _identityView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _loginView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var _secureNoteView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78);





class CipherView {
    constructor(c) {
        this.id = null;
        this.organizationId = null;
        this.folderId = null;
        this.name = null;
        this.notes = null;
        this.type = null;
        this.favorite = false;
        this.organizationUseTotp = false;
        this.edit = false;
        this.login = new _loginView__WEBPACK_IMPORTED_MODULE_3__[/* LoginView */ "a"]();
        this.identity = new _identityView__WEBPACK_IMPORTED_MODULE_2__[/* IdentityView */ "a"]();
        this.card = new _cardView__WEBPACK_IMPORTED_MODULE_1__[/* CardView */ "a"]();
        this.secureNote = new _secureNoteView__WEBPACK_IMPORTED_MODULE_4__[/* SecureNoteView */ "a"]();
        this.attachments = null;
        this.fields = null;
        this.passwordHistory = null;
        this.collectionIds = null;
        this.revisionDate = null;
        if (!c) {
            return;
        }
        this.id = c.id;
        this.organizationId = c.organizationId;
        this.folderId = c.folderId;
        this.favorite = c.favorite;
        this.organizationUseTotp = c.organizationUseTotp;
        this.edit = c.edit;
        this.type = c.type;
        this.localData = c.localData;
        this.collectionIds = c.collectionIds;
        this.revisionDate = c.revisionDate;
    }
    get subTitle() {
        switch (this.type) {
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login:
                return this.login.subTitle;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].SecureNote:
                return this.secureNote.subTitle;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Card:
                return this.card.subTitle;
            case _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Identity:
                return this.identity.subTitle;
            default:
                break;
        }
        return null;
    }
    get hasPasswordHistory() {
        return this.passwordHistory && this.passwordHistory.length > 0;
    }
    get hasAttachments() {
        return this.attachments && this.attachments.length > 0;
    }
    get hasOldAttachments() {
        if (this.hasAttachments) {
            for (let i = 0; i < this.attachments.length; i++) {
                if (this.attachments[i].key == null) {
                    return true;
                }
            }
        }
        return false;
    }
    get hasFields() {
        return this.fields && this.fields.length > 0;
    }
    get passwordRevisionDisplayDate() {
        if (this.type !== _enums_cipherType__WEBPACK_IMPORTED_MODULE_0__[/* CipherType */ "a"].Login || this.login == null) {
            return null;
        }
        else if (this.login.password == null || this.login.password === '') {
            return null;
        }
        return this.login.passwordRevisionDate;
    }
}


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardView; });
class CardView {
    // tslint:enable
    constructor(c) {
        this.cardholderName = null;
        this.expMonth = null;
        this.expYear = null;
        this.code = null;
        // tslint:disable
        this._brand = null;
        this._number = null;
        this._subTitle = null;
        // ctor
    }
    get maskedCode() {
        return this.code != null ? '•'.repeat(this.code.length) : null;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
        this._subTitle = null;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
        this._subTitle = null;
    }
    get subTitle() {
        if (this._subTitle == null) {
            this._subTitle = this.brand;
            if (this.number != null && this.number.length >= 4) {
                if (this._subTitle != null && this._subTitle !== '') {
                    this._subTitle += ', ';
                }
                else {
                    this._subTitle = '';
                }
                // Show last 5 on amex, last 4 for all others
                const count = this.number.length >= 5 && this.number.match(new RegExp('^3[47]')) != null ? 5 : 4;
                this._subTitle += ('*' + this.number.substr(this.number.length - count));
            }
        }
        return this._subTitle;
    }
    get expiration() {
        if (!this.expMonth && !this.expYear) {
            return null;
        }
        let exp = this.expMonth != null ? ('0' + this.expMonth).slice(-2) : '__';
        exp += (' / ' + (this.expYear != null ? this.formatYear(this.expYear) : '____'));
        return exp;
    }
    formatYear(year) {
        return year.length === 2 ? '20' + year : year;
    }
}


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityView; });
/* harmony import */ var _misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

class IdentityView {
    // tslint:enable
    constructor(i) {
        this.title = null;
        this.middleName = null;
        this.address1 = null;
        this.address2 = null;
        this.address3 = null;
        this.city = null;
        this.state = null;
        this.postalCode = null;
        this.country = null;
        this.company = null;
        this.email = null;
        this.phone = null;
        this.ssn = null;
        this.username = null;
        this.passportNumber = null;
        this.licenseNumber = null;
        // tslint:disable
        this._firstName = null;
        this._lastName = null;
        this._subTitle = null;
        // ctor
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
        this._subTitle = null;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
        this._subTitle = null;
    }
    get subTitle() {
        if (this._subTitle == null && (this.firstName != null || this.lastName != null)) {
            this._subTitle = '';
            if (this.firstName != null) {
                this._subTitle = this.firstName;
            }
            if (this.lastName != null) {
                if (this._subTitle !== '') {
                    this._subTitle += ' ';
                }
                this._subTitle += this.lastName;
            }
        }
        return this._subTitle;
    }
    get fullName() {
        if (this.title != null || this.firstName != null || this.middleName != null || this.lastName != null) {
            let name = '';
            if (this.title != null) {
                name += (this.title + ' ');
            }
            if (this.firstName != null) {
                name += (this.firstName + ' ');
            }
            if (this.middleName != null) {
                name += (this.middleName + ' ');
            }
            if (this.lastName != null) {
                name += this.lastName;
            }
            return name.trim();
        }
        return null;
    }
    get fullAddress() {
        let address = this.address1;
        if (!_misc_utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].isNullOrWhitespace(this.address2)) {
            if (!_misc_utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].isNullOrWhitespace(address)) {
                address += ', ';
            }
            address += this.address2;
        }
        if (!_misc_utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].isNullOrWhitespace(this.address3)) {
            if (!_misc_utils__WEBPACK_IMPORTED_MODULE_0__[/* Utils */ "a"].isNullOrWhitespace(address)) {
                address += ', ';
            }
            address += this.address3;
        }
        return address;
    }
    get fullAddressPart2() {
        if (this.city == null && this.state == null && this.postalCode == null) {
            return null;
        }
        const city = this.city || '-';
        const state = this.state || '-';
        const postalCode = this.postalCode || '-';
        return city + ', ' + state + ', ' + postalCode;
    }
}


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureNoteView; });
class SecureNoteView {
    constructor(n) {
        this.type = null;
        if (!n) {
            return;
        }
        this.type = n.type;
    }
    get subTitle() {
        return null;
    }
}


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var tldjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var tldjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tldjs__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line
const nodeURL = typeof window === 'undefined' ? __webpack_require__(157) : null;
class Utils {
    static init() {
        if (Utils.inited) {
            return;
        }
        Utils.inited = true;
        Utils.isNode = typeof process !== 'undefined' && process.release != null &&
            process.release.name === 'node';
        Utils.isBrowser = typeof window !== 'undefined';
        Utils.isNativeScript = !Utils.isNode && !Utils.isBrowser;
        Utils.isMobileBrowser = Utils.isBrowser && this.isMobile(window);
        Utils.isAppleMobileBrowser = Utils.isBrowser && this.isAppleMobile(window);
        Utils.global = Utils.isNativeScript ? global : (Utils.isNode && !Utils.isBrowser ? global : window);
    }
    static fromB64ToArray(str) {
        if (Utils.isNode || Utils.isNativeScript) {
            return new Uint8Array(Buffer.from(str, 'base64'));
        }
        else {
            const binaryString = window.atob(str);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        }
    }
    static fromHexToArray(str) {
        if (Utils.isNode || Utils.isNativeScript) {
            return new Uint8Array(Buffer.from(str, 'hex'));
        }
        else {
            const bytes = new Uint8Array(str.length / 2);
            for (let i = 0; i < str.length; i += 2) {
                bytes[i / 2] = parseInt(str.substr(i, 2), 16);
            }
            return bytes;
        }
    }
    static fromUtf8ToArray(str) {
        if (Utils.isNode || Utils.isNativeScript) {
            return new Uint8Array(Buffer.from(str, 'utf8'));
        }
        else {
            const strUtf8 = unescape(encodeURIComponent(str));
            const arr = new Uint8Array(strUtf8.length);
            for (let i = 0; i < strUtf8.length; i++) {
                arr[i] = strUtf8.charCodeAt(i);
            }
            return arr;
        }
    }
    static fromByteStringToArray(str) {
        const arr = new Uint8Array(str.length);
        for (let i = 0; i < str.length; i++) {
            arr[i] = str.charCodeAt(i);
        }
        return arr;
    }
    static fromBufferToB64(buffer) {
        if (Utils.isNode || Utils.isNativeScript) {
            return Buffer.from(buffer).toString('base64');
        }
        else {
            let binary = '';
            const bytes = new Uint8Array(buffer);
            for (let i = 0; i < bytes.byteLength; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }
    }
    static fromBufferToUtf8(buffer) {
        if (Utils.isNode || Utils.isNativeScript) {
            return Buffer.from(buffer).toString('utf8');
        }
        else {
            const bytes = new Uint8Array(buffer);
            const encodedString = String.fromCharCode.apply(null, bytes);
            return decodeURIComponent(escape(encodedString));
        }
    }
    static fromBufferToByteString(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }
    // ref: https://stackoverflow.com/a/40031979/1090359
    static fromBufferToHex(buffer) {
        if (Utils.isNode || Utils.isNativeScript) {
            return Buffer.from(buffer).toString('hex');
        }
        else {
            const bytes = new Uint8Array(buffer);
            return Array.prototype.map.call(bytes, (x) => ('00' + x.toString(16)).slice(-2)).join('');
        }
    }
    static fromUrlB64ToUtf8(b64Str) {
        let output = b64Str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new Error('Illegal base64url string!');
        }
        return Utils.fromB64ToUtf8(output);
    }
    static fromB64ToUtf8(b64Str) {
        if (Utils.isNode || Utils.isNativeScript) {
            return Buffer.from(b64Str, 'base64').toString('utf8');
        }
        else {
            return decodeURIComponent(escape(window.atob(b64Str)));
        }
    }
    // ref: http://stackoverflow.com/a/2117523/1090359
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    static isGuid(id) {
        return RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/, 'i').test(id);
    }
    static getHostname(uriString) {
        const url = Utils.getUrl(uriString);
        try {
            return url != null ? url.hostname : null;
        }
        catch (_a) {
            return null;
        }
    }
    static getHost(uriString) {
        const url = Utils.getUrl(uriString);
        try {
            return url != null ? url.host : null;
        }
        catch (_a) {
            return null;
        }
    }
    static getDomain(uriString) {
        if (uriString == null) {
            return null;
        }
        uriString = uriString.trim();
        if (uriString === '') {
            return null;
        }
        let httpUrl = uriString.startsWith('http://') || uriString.startsWith('https://');
        if (!httpUrl && uriString.indexOf('://') < 0 && Utils.tldEndingRegex.test(uriString)) {
            uriString = 'http://' + uriString;
            httpUrl = true;
        }
        if (httpUrl) {
            try {
                const url = Utils.getUrlObject(uriString);
                if (url.hostname === 'localhost' || Utils.validIpAddress(url.hostname)) {
                    return url.hostname;
                }
                const urlDomain = tldjs__WEBPACK_IMPORTED_MODULE_0__ != null && tldjs__WEBPACK_IMPORTED_MODULE_0__["getDomain"] != null ? tldjs__WEBPACK_IMPORTED_MODULE_0__["getDomain"](url.hostname) : null;
                return urlDomain != null ? urlDomain : url.hostname;
            }
            catch (e) { }
        }
        const domain = tldjs__WEBPACK_IMPORTED_MODULE_0__ != null && tldjs__WEBPACK_IMPORTED_MODULE_0__["getDomain"] != null ? tldjs__WEBPACK_IMPORTED_MODULE_0__["getDomain"](uriString) : null;
        if (domain != null) {
            return domain;
        }
        return null;
    }
    static getQueryParams(uriString) {
        const url = Utils.getUrl(uriString);
        if (url == null || url.search == null || url.search === '') {
            return null;
        }
        const map = new Map();
        const pairs = (url.search[0] === '?' ? url.search.substr(1) : url.search).split('&');
        pairs.forEach((pair) => {
            const parts = pair.split('=');
            if (parts.length < 1) {
                return;
            }
            map.set(decodeURIComponent(parts[0]).toLowerCase(), parts[1] == null ? '' : decodeURIComponent(parts[1]));
        });
        return map;
    }
    static getSortFunction(i18nService, prop) {
        return (a, b) => {
            if (a[prop] == null && b[prop] != null) {
                return -1;
            }
            if (a[prop] != null && b[prop] == null) {
                return 1;
            }
            if (a[prop] == null && b[prop] == null) {
                return 0;
            }
            return i18nService.collator ? i18nService.collator.compare(a[prop], b[prop]) :
                a[prop].localeCompare(b[prop]);
        };
    }
    static isNullOrWhitespace(str) {
        return str == null || typeof str !== 'string' || str.trim() === '';
    }
    static validIpAddress(ipString) {
        // tslint:disable-next-line
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(ipString);
    }
    static isMobile(win) {
        let mobile = false;
        ((a) => {
            // tslint:disable-next-line
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                mobile = true;
            }
        })(win.navigator.userAgent || win.navigator.vendor || win.opera);
        return mobile || win.navigator.userAgent.match(/iPad/i) != null;
    }
    static isAppleMobile(win) {
        return win.navigator.userAgent.match(/iPhone/i) != null || win.navigator.userAgent.match(/iPad/i) != null;
    }
    static getUrl(uriString) {
        if (uriString == null) {
            return null;
        }
        uriString = uriString.trim();
        if (uriString === '') {
            return null;
        }
        const hasProtocol = uriString.indexOf('://') > -1;
        if (!hasProtocol && uriString.indexOf('.') > -1) {
            uriString = 'http://' + uriString;
        }
        else if (!hasProtocol) {
            return null;
        }
        return Utils.getUrlObject(uriString);
    }
    static getUrlObject(uriString) {
        try {
            if (nodeURL != null) {
                return nodeURL.URL ? new nodeURL.URL(uriString) : nodeURL.parse(uriString);
            }
            else if (typeof URL === 'function') {
                return new URL(uriString);
            }
            else if (window != null) {
                const anchor = window.document.createElement('a');
                anchor.href = uriString;
                return anchor;
            }
        }
        catch (e) { }
        return null;
    }
}
Utils.inited = false;
Utils.isNativeScript = false;
Utils.isNode = false;
Utils.isBrowser = true;
Utils.isMobileBrowser = false;
Utils.isAppleMobileBrowser = false;
Utils.global = null;
Utils.tldEndingRegex = /.*\.(com|net|org|edu|uk|gov|ca|de|jp|fr|au|ru|ch|io|es|us|co|xyz|info|ly|mil)$/;
Utils.init();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(70), __webpack_require__(47), __webpack_require__(51).Buffer))

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantsService; });
class ConstantsService {
    constructor() {
        this.environmentUrlsKey = ConstantsService.environmentUrlsKey;
        this.disableGaKey = ConstantsService.disableGaKey;
        this.disableAddLoginNotificationKey = ConstantsService.disableAddLoginNotificationKey;
        this.disableContextMenuItemKey = ConstantsService.disableContextMenuItemKey;
        this.disableFaviconKey = ConstantsService.disableFaviconKey;
        this.disableAutoTotpCopyKey = ConstantsService.disableAutoTotpCopyKey;
        this.enableAutoFillOnPageLoadKey = ConstantsService.enableAutoFillOnPageLoadKey;
        this.lockOptionKey = ConstantsService.lockOptionKey;
        this.lastActiveKey = ConstantsService.lastActiveKey;
        this.neverDomainsKey = ConstantsService.neverDomainsKey;
        this.installedVersionKey = ConstantsService.installedVersionKey;
        this.localeKey = ConstantsService.localeKey;
        this.themeKey = ConstantsService.themeKey;
        this.collapsedGroupingsKey = ConstantsService.collapsedGroupingsKey;
        this.autoConfirmFingerprints = ConstantsService.autoConfirmFingerprints;
        this.dontShowCardsCurrentTab = ConstantsService.dontShowCardsCurrentTab;
        this.dontShowIdentitiesCurrentTab = ConstantsService.dontShowIdentitiesCurrentTab;
        this.defaultUriMatch = ConstantsService.defaultUriMatch;
        this.pinProtectedKey = ConstantsService.pinProtectedKey;
        this.protectedPin = ConstantsService.protectedPin;
        this.clearClipboardKey = ConstantsService.clearClipboardKey;
        this.eventCollectionKey = ConstantsService.eventCollectionKey;
    }
}
ConstantsService.environmentUrlsKey = 'environmentUrls';
ConstantsService.disableGaKey = 'disableGa';
ConstantsService.disableAddLoginNotificationKey = 'disableAddLoginNotification';
ConstantsService.disableChangedPasswordNotificationKey = 'disableChangedPasswordNotification';
ConstantsService.disableContextMenuItemKey = 'disableContextMenuItem';
ConstantsService.disableFaviconKey = 'disableFavicon';
ConstantsService.disableAutoTotpCopyKey = 'disableAutoTotpCopy';
ConstantsService.enableAutoFillOnPageLoadKey = 'enableAutoFillOnPageLoad';
ConstantsService.lockOptionKey = 'lockOption';
ConstantsService.lastActiveKey = 'lastActive';
ConstantsService.neverDomainsKey = 'neverDomains';
ConstantsService.installedVersionKey = 'installedVersion';
ConstantsService.localeKey = 'locale';
ConstantsService.themeKey = 'theme';
ConstantsService.collapsedGroupingsKey = 'collapsedGroupings';
ConstantsService.autoConfirmFingerprints = 'autoConfirmFingerprints';
ConstantsService.dontShowCardsCurrentTab = 'dontShowCardsCurrentTab';
ConstantsService.dontShowIdentitiesCurrentTab = 'dontShowIdentitiesCurrentTab';
ConstantsService.defaultUriMatch = 'defaultUriMatch';
ConstantsService.pinProtectedKey = 'pinProtectedKey';
ConstantsService.protectedPin = 'protectedPin';
ConstantsService.clearClipboardKey = 'clearClipboardKey';
ConstantsService.eventCollectionKey = 'eventCollection';


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUriView; });
/* harmony import */ var _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _misc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


const CanLaunchWhitelist = [
    'https://',
    'http://',
    'ssh://',
    'ftp://',
    'sftp://',
    'irc://',
    'vnc://',
    'chrome://',
    'iosapp://',
    'androidapp://',
];
class LoginUriView {
    // tslint:enable
    constructor(u) {
        this.match = null;
        // tslint:disable
        this._uri = null;
        this._domain = null;
        this._hostname = null;
        this._canLaunch = null;
        if (!u) {
            return;
        }
        this.match = u.match;
    }
    get uri() {
        return this._uri;
    }
    set uri(value) {
        this._uri = value;
        this._domain = null;
        this._canLaunch = null;
    }
    get domain() {
        if (this._domain == null && this.uri != null) {
            this._domain = _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].getDomain(this.uri);
            if (this._domain === '') {
                this._domain = null;
            }
        }
        return this._domain;
    }
    get hostname() {
        if (this._hostname == null && this.uri != null) {
            this._hostname = _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].getHostname(this.uri);
            if (this._hostname === '') {
                this._hostname = null;
            }
        }
        return this._hostname;
    }
    get hostnameOrUri() {
        return this.hostname != null ? this.hostname : this.uri;
    }
    get isWebsite() {
        return this.uri != null && (this.uri.indexOf('http://') === 0 || this.uri.indexOf('https://') === 0 ||
            (this.uri.indexOf('://') < 0 && _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].tldEndingRegex.test(this.uri)));
    }
    get canLaunch() {
        if (this._canLaunch != null) {
            return this._canLaunch;
        }
        if (this.uri != null && this.match !== _enums_uriMatchType__WEBPACK_IMPORTED_MODULE_0__[/* UriMatchType */ "a"].RegularExpression) {
            const uri = this.launchUri;
            for (let i = 0; i < CanLaunchWhitelist.length; i++) {
                if (uri.indexOf(CanLaunchWhitelist[i]) === 0) {
                    this._canLaunch = true;
                    return this._canLaunch;
                }
            }
        }
        this._canLaunch = false;
        return this._canLaunch;
    }
    get launchUri() {
        return this.uri.indexOf('://') < 0 && _misc_utils__WEBPACK_IMPORTED_MODULE_1__[/* Utils */ "a"].tldEndingRegex.test(this.uri) ? ('http://' + this.uri) : this.uri;
    }
}


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderView; });
class FolderView {
    constructor(f) {
        this.id = null;
        this.name = null;
        this.revisionDate = null;
        if (!f) {
            return;
        }
        this.id = f.id;
        this.revisionDate = f.revisionDate;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=background.js.map