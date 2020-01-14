/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/page.js":
/*!******************************!*\
  !*** ./resources/js/page.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof3(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof3=function _typeof3(obj){return typeof obj;};}else{_typeof3=function _typeof3(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof3(obj);}function _typeof2(obj){if(typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"){_typeof2=function _typeof2(obj){return _typeof3(obj);};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof3(obj);};}return _typeof2(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof2(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=0);/******/})(/************************************************************************/ /******/[/* 0 */ /***/function(module,exports,__webpack_require__){/*
|--------------------------------------------------------------------------
| Core
|--------------------------------------------------------------------------
|
| The start point of the project. Include jQuery, Bootstrap and required
| plugins and define page object. This file is required.
|
*/__webpack_require__(1);/*
|--------------------------------------------------------------------------
| Vendors
|--------------------------------------------------------------------------
|
| Load some plugins and define initializer methods. If you don't need any
| of the following plugins, simply comment the line.
|
| The minified size of each module has stated for your reference. So you'd
| know how much KB you can save by removing a vendor.
|
*/__webpack_require__(12);// 14 kb
__webpack_require__(14);// 03 kb
__webpack_require__(15);// 05 kb
__webpack_require__(17);// 13 kb
__webpack_require__(20);// 15 kb
__webpack_require__(53);// 23 kb
__webpack_require__(56);// 07 kb
__webpack_require__(58);// 45 kb
__webpack_require__(60);// 25 kb
__webpack_require__(63);// 43 kb
__webpack_require__(65);// 11 kb
/*
|--------------------------------------------------------------------------
| Partials
|--------------------------------------------------------------------------
|
| Split the application code to several files. This file is required.
|
*/__webpack_require__(67);/***/},/* 1 */ /***/function(module,exports,__webpack_require__){/*
|--------------------------------------------------------------------------
| Main
|--------------------------------------------------------------------------
|
| The start point of the project. Include jQuery, Bootstrap and required
| plugins and define page object. These files are mandatory.
|
*/__webpack_require__(2);__webpack_require__(10);__webpack_require__(11);/***/},/* 2 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugins.
 */window.$=window.jQuery=__webpack_require__(3);window.Popper=__webpack_require__(4);__webpack_require__(6);window.SmoothScroll=__webpack_require__(8);__webpack_require__(9);/**
 * Create window.page and init the application.
 */+function($,window){var page={name:'TheSaaS',version:'2.1.4',vendors:[],// Cache popular elements
body:$('body'),navbar:$('.navbar'),header:$('.header'),footer:$('.footer')};page.defaults={googleApiKey:null,googleAnalyticsKey:null,reCaptchaSiteKey:null,reCaptchaLanguage:null,disableAOSonMobile:true,smoothScroll:false};/**
   * Call all the required initializers.
   */page.init=function(){// Vendors
//
page.initVendors();// Partials
//
page.initBind();page.initDrawer();page.initFont();page.initForm();page.initMailer();page.initModal();page.initNavbar();page.initOffcanvas();page.initPopup();page.initScroll();page.initSection();page.initSidebar();page.initVideo();// Anchor for headings
//
$('[data-provide="anchor"]').each(function(){var heading=$(this);heading.append('<a class="anchor" href="#'+heading.attr('id')+'"></a>');});};/**
   * Initialize all of the loaded vendors.
   */page.initVendors=function(){page.vendors.forEach(function(vendor){var fn=window.page["init"+vendor];if(typeof fn==='function'){fn();}});};/**
   * Register loaded vendor to be initialized after DOM load.
   * It's case sensitive, since it calls "initVendorName" method.
   */page.registerVendor=function($name){page.vendors.push($name);};window.page=page;}(jQuery,window);/**
 * Once the DOM is loaded, start the magic.
 */$(function(){//page.init();
});/***/},/* 3 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */(function(global,factory){"use strict";if( true&&_typeof2(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:this,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return typeof obj==="function"&&typeof obj.nodeType!=="number";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var preservedScriptAttributes={type:true,src:true,noModule:true};function DOMEval(code,doc,node){doc=doc||document;var i,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){if(node[i]){script[i]=node[i];}}}doc.head.appendChild(script).parentNode.removeChild(script);}function toType(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return _typeof2(obj)==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":_typeof2(obj);}/* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.3.1",// Define a local copy of jQuery
jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function get(num){// Return all the elements in a clean array
if(num==null){return _slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function pushStack(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if(_typeof2(target)!=="object"&&!isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&Array.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */ // See https://github.com/eslint/eslint/issues/6125
var name;for(name in obj){return false;}return true;},// Evaluates a script in a global context
globalEval:function globalEval(code){DOMEval(code);},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return concat.apply([],ret);},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
// Otherwise append directly
function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
}else{// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
// Thanks to Andrew Dupont for this workaround technique
// Support: IE <=8
// Exclude object elements
}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function markFunction(fn){fn[expando]=true;return fn;}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
if(diff){return diff;}// Check if b follows a
if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
support=Sizzle.support={};/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
	---------------------------------------------------------------------- */ // Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);// Filter out possible comments
if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
	---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){// ...in a gzip-friendly way
node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
"not":markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
"lang":markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
// options in Safari work properly
if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results:matcherIn;// Find primary matches
if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;};/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();};var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Filtered directly for both simple and complex selectors
return jQuery.filter(qualifier,elements,not);}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function index(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){if(nodeName(elem,"iframe")){return elem.contentDocument;}// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
if(nodeName(elem,"template")){elem=elem.content||elem;}return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
_fired,// Flag to prevent firing
_locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function fire(){// Enforce single-firing
_locked=_locked||options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(_locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function add(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject,noValue){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
resolve.apply(undefined,[value].slice(noValue));}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.apply(undefined,[value]);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
_typeof2(returned)==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
_promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
_state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
tuples[3-i][3].disable,// progress_callbacks.lock
tuples[0][2].lock,// progress_handlers.lock
tuples[0][3].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
_promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function when(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
master=jQuery.Deferred(),// subordinate callback factory
updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(master.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
["catch"](function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function ready(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};// Matches dashed string for camelizing
var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;// Used by camelCase as callback to replace()
function fcamelCase(all,letter){return letter.toUpperCase();}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}var acceptData=function acceptData(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function access(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(Array.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(camelCase);}else{key=camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (#14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if(_typeof2(key)==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
initial=initial/2;// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;while(maxIterations--){// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}initialInUnit=initialInUnit/scale;}initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);// Make sure we update the tween properties later on
valueParts=valueParts||[];}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|^module$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
var wrapMap={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(toType(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(contains){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if(_typeof2(types)==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function trigger(){if(this.type==="checkbox"&&this.click&&nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
_default:function _default(event){return nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||Date.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if(_typeof2(types)==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */ // See https://github.com/eslint/eslint/issues/3229
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */ // Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(valueIsFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc,node);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
div.style.position="absolute";scrollboxSizeVal=div.offsetWidth===36||"absolute";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function pixelBoxStyles(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function scrollboxSize(){computeStyleTests();return scrollboxSizeVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
style=elem.style;computed=computed||getStyles(elem);// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){// Shortcut for names that are not vendor prefixed
if(name in emptyStyle){return name;}// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName(name){var ret=jQuery.cssProps[name];if(!ret){ret=jQuery.cssProps[name]=vendorPropName(name)||name;}return ret;}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;// Adjustment may not be necessary
if(box===(isBorderBox?"border":"content")){return 0;}for(;i<4;i+=2){// Both box models exclude margin
if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
if(!isBorderBox){// Add padding
delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// For "border" or "margin", add border
if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);// But still keep track of it otherwise
}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}// If we get here with a border-box (content + padding + border), we're seeking "content" or
// "padding" or "margin"
}else{// For "content", subtract padding
if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// For "content" or "padding", subtract border
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}// Account for positive content-box scroll gutter when requested by providing computedVal
if(!isBorderBox&&computedVal>=0){// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-computedVal-delta-extra-0.5));}return delta;}function getWidthOrHeight(elem,dimension,extra){// Start with computed style
var styles=getStyles(elem),val=curCSS(elem,dimension,styles),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox;// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(rnumnonpx.test(val)){if(!extra){return val;}val="auto";}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=valueIsBorderBox&&(support.boxSizingReliable()||val===elem.style[dimension]);// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
if(val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline"){val=elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)];// offsetWidth/offsetHeight provide border-box values
valueIsBorderBox=true;}// Normalize "" and auto
val=parseFloat(val)||0;// Adjust for the element's box model
return val+boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,// Provide the current computed size to request scroll gutter calculation (gh-3589)
val)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=_typeof2(value);// Convert "+=" or "-=" to relative numbers (#7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
type="number";}// Make sure that null and NaN values aren't set (#7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,dimension){jQuery.cssHooks[dimension]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function set(elem,value,extra){var matches,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra&&boxModelAdjustment(elem,dimension,extra,isBorderBox,styles);// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
if(isBorderBox&&support.scrollboxSize()===styles.position){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-parseFloat(styles[dimension])-boxModelAdjustment(elem,dimension,"border",false,styles)-0.5);}// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=Date.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);// If there's more to do, yield
if(percent<1&&length){return remaining;}// If this was an empty animation, synthesize a final progress notification
if(!length){deferred.notifyWith(elem,[animation,1,0]);}// Resolve the animation and report its conclusion
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}return result;}}jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}// Attach callbacks from options
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&_typeof2(speed)==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};// Go to the end state if fx are off
if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];// Run the timer and safely remove it when done (allowing for external removal)
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}function classesToArray(value){if(Array.isArray(value)){return value;}if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}return[];}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}classes=classesToArray(value);if(classes.length){while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}classes=classesToArray(value);if(classes.length){while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=_typeof2(value),isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(isValidValue){// Toggle individual class names
i=0;self=jQuery(this);classNames=classesToArray(value);while(className=classNames[i++]){// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(Array.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
support.focusin="onfocusin"in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function stopPropagationCallback(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,_typeof2(event)==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(ontype&&isFunction(elem[type])&&!isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=Date.now();var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+(_typeof2(v)==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
if(_typeof2(url)==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
_statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available and should be processed, append data to url
if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=_callback();errorCallback=xhr.onerror=xhr.ontimeout=_callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
_callback=_callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
 * Load a url into a page
 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&_typeof2(params)==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({// offset() relates an element's border box to the document origin
offset:function offset(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var rect,win,elem=this[0];if(!elem){return;}// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}// Get document-relative position by adding viewport scroll to viewport-relative gBCR
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function position(){if(!this[0]){return;}var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if(jQuery.css(elem,"position")==="fixed"){// Assume position:fixed implies availability of getBoundingClientRect
offset=elem.getBoundingClientRect();}else{offset=this.offset();// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){// Incorporate borders into its offset, since they are outside its content origin
parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){// Coalesce documents and windows
var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!isFunction(fn)){return undefined;}// Simulated bind
args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));};// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return jQuery;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});/***/},/* 4 */ /***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */(function(global,factory){true?module.exports=factory():undefined;})(this,function(){'use strict';var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined';var longerTimeoutBrowsers=['Edge','Trident','Firefox'];var timeoutDuration=0;for(var i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){timeoutDuration=1;break;}}function microtaskDebounce(fn){var called=false;return function(){if(called){return;}called=true;window.Promise.resolve().then(function(){called=false;fn();});};}function taskDebounce(fn){var scheduled=false;return function(){if(!scheduled){scheduled=true;setTimeout(function(){scheduled=false;fn();},timeoutDuration);}};}var supportsMicroTasks=isBrowser&&window.Promise;/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/var debounce=supportsMicroTasks?microtaskDebounce:taskDebounce;/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]';}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function getStyleComputedProperty(element,property){if(element.nodeType!==1){return[];}// NOTE: 1 DOM access here
var window=element.ownerDocument.defaultView;var css=window.getComputedStyle(element,null);return property?css[property]:css;}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function getParentNode(element){if(element.nodeName==='HTML'){return element;}return element.parentNode||element.host;}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function getScrollParent(element){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!element){return document.body;}switch(element.nodeName){case'HTML':case'BODY':return element.ownerDocument.body;case'#document':return element.body;}// Firefox want us to check `-x` and `-y` variations as well
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll|overlay)/.test(overflow+overflowY+overflowX)){return element;}return getScrollParent(getParentNode(element));}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode);var isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function isIE(version){if(version===11){return isIE11;}if(version===10){return isIE10;}return isIE11||isIE10;}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function getOffsetParent(element){if(!element){return document.documentElement;}var noOffsetParent=isIE(10)?document.body:null;// NOTE: 1 DOM access here
var offsetParent=element.offsetParent||null;// Skip hidden elements which don't have an offsetParent
while(offsetParent===noOffsetParent&&element.nextElementSibling){offsetParent=(element=element.nextElementSibling).offsetParent;}var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||nodeName==='BODY'||nodeName==='HTML'){return element?element.ownerDocument.documentElement:document.documentElement;}// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(['TH','TD','TABLE'].indexOf(offsetParent.nodeName)!==-1&&getStyleComputedProperty(offsetParent,'position')==='static'){return getOffsetParent(offsetParent);}return offsetParent;}function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName==='BODY'){return false;}return nodeName==='HTML'||getOffsetParent(element.firstElementChild)===element;}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function getRoot(node){if(node.parentNode!==null){return getRoot(node.parentNode);}return node;}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function findCommonOffsetParent(element1,element2){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement;}// Here we make sure to give as "start" the element that comes first in the DOM
var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING;var start=order?element1:element2;var end=order?element2:element1;// Get common ancestor container
var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;// Both nodes are inside #document
if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer;}return getOffsetParent(commonAncestorContainer);}// one of the nodes is inside shadowDOM, find which one
var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2);}else{return findCommonOffsetParent(element1,getRoot(element2).host);}}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function getScroll(element){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'top';var upperSide=side==='top'?'scrollTop':'scrollLeft';var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){var html=element.ownerDocument.documentElement;var scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide];}return element[upperSide];}/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function includeScroll(rect,element){var subtract=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');var modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect;}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function getBordersSize(styles,axis){var sideA=axis==='x'?'Left':'Top';var sideB=sideA==='Left'?'Right':'Bottom';return parseFloat(styles['border'+sideA+'Width'],10)+parseFloat(styles['border'+sideB+'Width'],10);}function getSize(axis,body,html,computedStyle){return Math.max(body['offset'+axis],body['scroll'+axis],html['client'+axis],html['offset'+axis],html['scroll'+axis],isIE(10)?parseInt(html['offset'+axis])+parseInt(computedStyle['margin'+(axis==='Height'?'Top':'Left')])+parseInt(computedStyle['margin'+(axis==='Height'?'Bottom':'Right')]):0);}function getWindowSizes(document){var body=document.body;var html=document.documentElement;var computedStyle=isIE(10)&&getComputedStyle(html);return{height:getSize('Height',body,html,computedStyle),width:getSize('Width',body,html,computedStyle)};}var classCallCheck=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var defineProperty=function defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function getClientRect(offsets){return _extends({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height});}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function getBoundingClientRect(element){var rect={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(isIE(10)){rect=element.getBoundingClientRect();var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft;}else{rect=element.getBoundingClientRect();}}catch(e){}var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top};// subtract scrollbar size from sizes
var sizes=element.nodeName==='HTML'?getWindowSizes(element.ownerDocument):{};var width=sizes.width||element.clientWidth||result.right-result.left;var height=sizes.height||element.clientHeight||result.bottom-result.top;var horizScrollbar=element.offsetWidth-width;var vertScrollbar=element.offsetHeight-height;// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(horizScrollbar||vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,'x');vertScrollbar-=getBordersSize(styles,'y');result.width-=horizScrollbar;result.height-=vertScrollbar;}return getClientRect(result);}function getOffsetRectRelativeToArbitraryNode(children,parent){var fixedPosition=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isIE10=isIE(10);var isHTML=parent.nodeName==='HTML';var childrenRect=getBoundingClientRect(children);var parentRect=getBoundingClientRect(parent);var scrollParent=getScrollParent(children);var styles=getStyleComputedProperty(parent);var borderTopWidth=parseFloat(styles.borderTopWidth,10);var borderLeftWidth=parseFloat(styles.borderLeftWidth,10);// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(fixedPosition&&isHTML){parentRect.top=Math.max(parentRect.top,0);parentRect.left=Math.max(parentRect.left,0);}var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!isIE10&&isHTML){var marginTop=parseFloat(styles.marginTop,10);var marginLeft=parseFloat(styles.marginLeft,10);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;// Attach marginTop and marginLeft because in some circumstances we may need them
offsets.marginTop=marginTop;offsets.marginLeft=marginLeft;}if(isIE10&&!fixedPosition?parent.contains(scrollParent):parent===scrollParent&&scrollParent.nodeName!=='BODY'){offsets=includeScroll(offsets,parent);}return offsets;}function getViewportOffsetRectRelativeToArtbitraryNode(element){var excludeScroll=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var html=element.ownerDocument.documentElement;var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);var width=Math.max(html.clientWidth,window.innerWidth||0);var height=Math.max(html.clientHeight,window.innerHeight||0);var scrollTop=!excludeScroll?getScroll(html):0;var scrollLeft=!excludeScroll?getScroll(html,'left'):0;var offset={top:scrollTop-relativeOffset.top+relativeOffset.marginTop,left:scrollLeft-relativeOffset.left+relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset);}/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function isFixed(element){var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){return false;}if(getStyleComputedProperty(element,'position')==='fixed'){return true;}return isFixed(getParentNode(element));}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function getFixedPositionOffsetParent(element){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element||!element.parentElement||isIE()){return document.documentElement;}var el=element.parentElement;while(el&&getStyleComputedProperty(el,'transform')==='none'){el=el.parentElement;}return el||document.documentElement;}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function getBoundaries(popper,reference,padding,boundariesElement){var fixedPosition=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;// NOTE: 1 DOM access here
var boundaries={top:0,left:0};var offsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);// Handle viewport case
if(boundariesElement==='viewport'){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent,fixedPosition);}else{// Handle other cases based on DOM element used as boundaries
var boundariesNode=void 0;if(boundariesElement==='scrollParent'){boundariesNode=getScrollParent(getParentNode(reference));if(boundariesNode.nodeName==='BODY'){boundariesNode=popper.ownerDocument.documentElement;}}else if(boundariesElement==='window'){boundariesNode=popper.ownerDocument.documentElement;}else{boundariesNode=boundariesElement;}var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent,fixedPosition);// In case of HTML, we need a different computation
if(boundariesNode.nodeName==='HTML'&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(popper.ownerDocument),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=height+offsets.top;boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=width+offsets.left;}else{// for all the other DOM elements, this one is good
boundaries=offsets;}}// Add paddings
padding=padding||0;var isPaddingNumber=typeof padding==='number';boundaries.left+=isPaddingNumber?padding:padding.left||0;boundaries.top+=isPaddingNumber?padding:padding.top||0;boundaries.right-=isPaddingNumber?padding:padding.right||0;boundaries.bottom-=isPaddingNumber?padding:padding.bottom||0;return boundaries;}function getArea(_ref){var width=_ref.width,height=_ref.height;return width*height;}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(placement.indexOf('auto')===-1){return placement;}var boundaries=getBoundaries(popper,reference,padding,boundariesElement);var rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}};var sortedAreas=Object.keys(rects).map(function(key){return _extends({key:key},rects[key],{area:getArea(rects[key])});}).sort(function(a,b){return b.area-a.area;});var filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width>=popper.clientWidth&&height>=popper.clientHeight;});var computedPlacement=filteredAreas.length>0?filteredAreas[0].key:sortedAreas[0].key;var variation=placement.split('-')[1];return computedPlacement+(variation?'-'+variation:'');}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function getReferenceOffsets(state,popper,reference){var fixedPosition=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var commonOffsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent,fixedPosition);}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function getOuterSizes(element){var window=element.ownerDocument.defaultView;var styles=window.getComputedStyle(element);var x=parseFloat(styles.marginTop||0)+parseFloat(styles.marginBottom||0);var y=parseFloat(styles.marginLeft||0)+parseFloat(styles.marginRight||0);var result={width:element.offsetWidth+y,height:element.offsetHeight+x};return result;}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function getOppositePlacement(placement){var hash={left:'right',right:'left',bottom:'top',top:'bottom'};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched];});}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function getPopperOffsets(popper,referenceOffsets,placement){placement=placement.split('-')[0];// Get popper node sizes
var popperRect=getOuterSizes(popper);// Add position, width and height to our offsets object
var popperOffsets={width:popperRect.width,height:popperRect.height};// depending by the popper placement we have to compute its offsets slightly differently
var isHoriz=['right','left'].indexOf(placement)!==-1;var mainSide=isHoriz?'top':'left';var secondarySide=isHoriz?'left':'top';var measurement=isHoriz?'height':'width';var secondaryMeasurement=!isHoriz?'height':'width';popperOffsets[mainSide]=referenceOffsets[mainSide]+referenceOffsets[measurement]/2-popperRect[measurement]/2;if(placement===secondarySide){popperOffsets[secondarySide]=referenceOffsets[secondarySide]-popperRect[secondaryMeasurement];}else{popperOffsets[secondarySide]=referenceOffsets[getOppositePlacement(secondarySide)];}return popperOffsets;}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function find(arr,check){// use native find if supported
if(Array.prototype.find){return arr.find(check);}// use `filter` to obtain the same behavior of `find`
return arr.filter(check)[0];}/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function findIndex(arr,prop,value){// use native findIndex if supported
if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop]===value;});}// use `find` + `indexOf` if `findIndex` isn't supported
var match=find(arr,function(obj){return obj[prop]===value;});return arr.indexOf(match);}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function runModifiers(modifiers,data,ends){var modifiersToRun=ends===undefined?modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends));modifiersToRun.forEach(function(modifier){if(modifier['function']){// eslint-disable-line dot-notation
console.warn('`modifier.function` is deprecated, use `modifier.fn`!');}var fn=modifier['function']||modifier.fn;// eslint-disable-line dot-notation
if(modifier.enabled&&isFunction(fn)){// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
data.offsets.popper=getClientRect(data.offsets.popper);data.offsets.reference=getClientRect(data.offsets.reference);data=fn(data,modifier);}});return data;}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function update(){// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed){return;}var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};// compute reference element offsets
data.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
data.placement=computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);// store the computed placement inside `originalPlacement`
data.originalPlacement=data.placement;data.positionFixed=this.options.positionFixed;// compute the popper offsets
data.offsets.popper=getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position=this.options.positionFixed?'fixed':'absolute';// run the modifiers
data=runModifiers(this.modifiers,data);// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(data);}else{this.options.onUpdate(data);}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled&&name===modifierName;});}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function getSupportedPropertyName(property){var prefixes=[false,'ms','Webkit','Moz','O'];var upperProp=property.charAt(0).toUpperCase()+property.slice(1);for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var toCheck=prefix?''+prefix+upperProp:property;if(typeof document.body.style[toCheck]!=='undefined'){return toCheck;}}return null;}/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */function destroy(){this.state.isDestroyed=true;// touch DOM only if `applyStyle` modifier is enabled
if(isModifierEnabled(this.modifiers,'applyStyle')){this.popper.removeAttribute('x-placement');this.popper.style.position='';this.popper.style.top='';this.popper.style.left='';this.popper.style.right='';this.popper.style.bottom='';this.popper.style.willChange='';this.popper.style[getSupportedPropertyName('transform')]='';}this.disableEventListeners();// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper);}return this;}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window;}function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody=scrollParent.nodeName==='BODY';var target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:true});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents);}scrollParents.push(target);}/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function setupEventListeners(reference,options,state,updateBound){// Resize event listener on window
state.updateBound=updateBound;getWindow(reference).addEventListener('resize',state.updateBound,{passive:true});// Scroll event listener on scroll parents
var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,'scroll',state.updateBound,state.scrollParents);state.scrollElement=scrollElement;state.eventsEnabled=true;return state;}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function enableEventListeners(){if(!this.state.eventsEnabled){this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate);}}/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function removeEventListeners(reference,state){// Remove resize event listener on window
getWindow(reference).removeEventListener('resize',state.updateBound);// Remove scroll event listener on scroll parents
state.scrollParents.forEach(function(target){target.removeEventListener('scroll',state.updateBound);});// Reset state
state.updateBound=null;state.scrollParents=[];state.scrollElement=null;state.eventsEnabled=false;return state;}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=removeEventListeners(this.reference,this.state);}}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function isNumeric(n){return n!==''&&!isNaN(parseFloat(n))&&isFinite(n);}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit='';// add unit if the value is numeric and is one of the following
if(['width','height','top','right','bottom','left'].indexOf(prop)!==-1&&isNumeric(styles[prop])){unit='px';}element.style[prop]=styles[prop]+unit;});}/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(value!==false){element.setAttribute(prop,attributes[prop]);}else{element.removeAttribute(prop);}});}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function applyStyle(data){// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
setStyles(data.instance.popper,data.styles);// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
setAttributes(data.instance.popper,data.attributes);// if arrowElement is defined and arrowStyles has some properties
if(data.arrowElement&&Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles);}return data;}/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function applyStyleOnLoad(reference,popper,options,modifierOptions,state){// compute reference element offsets
var referenceOffsets=getReferenceOffsets(state,popper,reference,options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);popper.setAttribute('x-placement',placement);// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
setStyles(popper,{position:options.positionFixed?'fixed':'absolute'});return options;}/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */function getRoundedOffsets(data,shouldRound){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(data.placement)!==-1;var isVariation=data.placement.indexOf('-')!==-1;var sameWidthOddness=reference.width%2===popper.width%2;var bothOddWidth=reference.width%2===1&&popper.width%2===1;var noRound=function noRound(v){return v;};var horizontalToInteger=!shouldRound?noRound:isVertical||isVariation||sameWidthOddness?Math.round:Math.floor;var verticalToInteger=!shouldRound?noRound:Math.round;return{left:horizontalToInteger(bothOddWidth&&!isVariation&&shouldRound?popper.left-1:popper.left),top:verticalToInteger(popper.top),bottom:verticalToInteger(popper.bottom),right:horizontalToInteger(popper.right)};}var isFirefox=isBrowser&&/Firefox/i.test(navigator.userAgent);/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeStyle(data,options){var x=options.x,y=options.y;var popper=data.offsets.popper;// Remove this legacy support in Popper.js v2
var legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return modifier.name==='applyStyle';}).gpuAcceleration;if(legacyGpuAccelerationOption!==undefined){console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');}var gpuAcceleration=legacyGpuAccelerationOption!==undefined?legacyGpuAccelerationOption:options.gpuAcceleration;var offsetParent=getOffsetParent(data.instance.popper);var offsetParentRect=getBoundingClientRect(offsetParent);// Styles
var styles={position:popper.position};var offsets=getRoundedOffsets(data,window.devicePixelRatio<2||!isFirefox);var sideA=x==='bottom'?'top':'bottom';var sideB=y==='right'?'left':'right';// if gpuAcceleration is set to `true` and transform is supported,
//  we use `translate3d` to apply the position to the popper we
// automatically use the supported prefixed version if needed
var prefixedProperty=getSupportedPropertyName('transform');// now, let's make a step back and look at this code closely (wtf?)
// If the content of the popper grows once it's been positioned, it
// may happen that the popper gets misplaced because of the new content
// overflowing its reference element
// To avoid this problem, we provide two options (x and y), which allow
// the consumer to define the offset origin.
// If we position a popper on top of a reference element, we can set
// `x` to `top` to make the popper grow towards its top instead of
// its bottom.
var left=void 0,top=void 0;if(sideA==='bottom'){// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
if(offsetParent.nodeName==='HTML'){top=-offsetParent.clientHeight+offsets.bottom;}else{top=-offsetParentRect.height+offsets.bottom;}}else{top=offsets.top;}if(sideB==='right'){if(offsetParent.nodeName==='HTML'){left=-offsetParent.clientWidth+offsets.right;}else{left=-offsetParentRect.width+offsets.right;}}else{left=offsets.left;}if(gpuAcceleration&&prefixedProperty){styles[prefixedProperty]='translate3d('+left+'px, '+top+'px, 0)';styles[sideA]=0;styles[sideB]=0;styles.willChange='transform';}else{// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var invertTop=sideA==='bottom'?-1:1;var invertLeft=sideB==='right'?-1:1;styles[sideA]=top*invertTop;styles[sideB]=left*invertLeft;styles.willChange=sideA+', '+sideB;}// Attributes
var attributes={'x-placement':data.placement};// Update `data` attributes, styles and arrowStyles
data.attributes=_extends({},attributes,data.attributes);data.styles=_extends({},styles,data.styles);data.arrowStyles=_extends({},data.offsets.arrow,data.arrowStyles);return data;}/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name===requestingName;});var isRequired=!!requesting&&modifiers.some(function(modifier){return modifier.name===requestedName&&modifier.enabled&&modifier.order<requesting.order;});if(!isRequired){var _requesting='`'+requestingName+'`';var requested='`'+requestedName+'`';console.warn(requested+' modifier is required by '+_requesting+' modifier in order to work, be sure to include it before '+_requesting+'!');}return isRequired;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function arrow(data,options){var _data$offsets$arrow;// arrow depends on keepTogether in order to work
if(!isModifierRequired(data.instance.modifiers,'arrow','keepTogether')){return data;}var arrowElement=options.element;// if arrowElement is a string, suppose it's a CSS selector
if(typeof arrowElement==='string'){arrowElement=data.instance.popper.querySelector(arrowElement);// if arrowElement is not found, don't run the modifier
if(!arrowElement){return data;}}else{// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!data.instance.popper.contains(arrowElement)){console.warn('WARNING: `arrow.element` must be child of its popper element!');return data;}}var placement=data.placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(placement)!==-1;var len=isVertical?'height':'width';var sideCapitalized=isVertical?'Top':'Left';var side=sideCapitalized.toLowerCase();var altSide=isVertical?'left':'top';var opSide=isVertical?'bottom':'right';var arrowElementSize=getOuterSizes(arrowElement)[len];//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction
//
// top/left side
if(reference[opSide]-arrowElementSize<popper[side]){data.offsets.popper[side]-=popper[side]-(reference[opSide]-arrowElementSize);}// bottom/right side
if(reference[side]+arrowElementSize>popper[opSide]){data.offsets.popper[side]+=reference[side]+arrowElementSize-popper[opSide];}data.offsets.popper=getClientRect(data.offsets.popper);// compute center of the popper
var center=reference[side]+reference[len]/2-arrowElementSize/2;// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var css=getStyleComputedProperty(data.instance.popper);var popperMarginSide=parseFloat(css['margin'+sideCapitalized],10);var popperBorderSide=parseFloat(css['border'+sideCapitalized+'Width'],10);var sideValue=center-data.offsets.popper[side]-popperMarginSide-popperBorderSide;// prevent arrowElement from being placed not contiguously to its popper
sideValue=Math.max(Math.min(popper[len]-arrowElementSize,sideValue),0);data.arrowElement=arrowElement;data.offsets.arrow=(_data$offsets$arrow={},defineProperty(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty(_data$offsets$arrow,altSide,''),_data$offsets$arrow);return data;}/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function getOppositeVariation(variation){if(variation==='end'){return'start';}else if(variation==='start'){return'end';}return variation;}/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var placements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements=placements.slice(3);/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function clockwise(placement){var counter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var index=validPlacements.indexOf(placement);var arr=validPlacements.slice(index+1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr;}var BEHAVIORS={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function flip(data,options){// if `inner` modifier is enabled, we can't use the `flip` modifier
if(isModifierEnabled(data.instance.modifiers,'inner')){return data;}if(data.flipped&&data.placement===data.originalPlacement){// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return data;}var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement,data.positionFixed);var placement=data.placement.split('-')[0];var placementOpposite=getOppositePlacement(placement);var variation=data.placement.split('-')[1]||'';var flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder=[placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder=clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder=clockwise(placement,true);break;default:flipOrder=options.behavior;}flipOrder.forEach(function(step,index){if(placement!==step||flipOrder.length===index+1){return data;}placement=data.placement.split('-')[0];placementOpposite=getOppositePlacement(placement);var popperOffsets=data.offsets.popper;var refOffsets=data.offsets.reference;// using floor because the reference offsets may contain decimals we are not going to consider here
var floor=Math.floor;var overlapsRef=placement==='left'&&floor(popperOffsets.right)>floor(refOffsets.left)||placement==='right'&&floor(popperOffsets.left)<floor(refOffsets.right)||placement==='top'&&floor(popperOffsets.bottom)>floor(refOffsets.top)||placement==='bottom'&&floor(popperOffsets.top)<floor(refOffsets.bottom);var overflowsLeft=floor(popperOffsets.left)<floor(boundaries.left);var overflowsRight=floor(popperOffsets.right)>floor(boundaries.right);var overflowsTop=floor(popperOffsets.top)<floor(boundaries.top);var overflowsBottom=floor(popperOffsets.bottom)>floor(boundaries.bottom);var overflowsBoundaries=placement==='left'&&overflowsLeft||placement==='right'&&overflowsRight||placement==='top'&&overflowsTop||placement==='bottom'&&overflowsBottom;// flip the variation if required
var isVertical=['top','bottom'].indexOf(placement)!==-1;var flippedVariation=!!options.flipVariations&&(isVertical&&variation==='start'&&overflowsLeft||isVertical&&variation==='end'&&overflowsRight||!isVertical&&variation==='start'&&overflowsTop||!isVertical&&variation==='end'&&overflowsBottom);if(overlapsRef||overflowsBoundaries||flippedVariation){// this boolean to detect any flip loop
data.flipped=true;if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1];}if(flippedVariation){variation=getOppositeVariation(variation);}data.placement=placement+(variation?'-'+variation:'');// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
data.offsets.popper=_extends({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data=runModifiers(data.instance.modifiers,data,'flip');}});return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var placement=data.placement.split('-')[0];var floor=Math.floor;var isVertical=['top','bottom'].indexOf(placement)!==-1;var side=isVertical?'right':'bottom';var opSide=isVertical?'left':'top';var measurement=isVertical?'width':'height';if(popper[side]<floor(reference[opSide])){data.offsets.popper[opSide]=floor(reference[opSide])-popper[measurement];}if(popper[opSide]>floor(reference[side])){data.offsets.popper[opSide]=floor(reference[side]);}return data;}/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function toValue(str,measurement,popperOffsets,referenceOffsets){// separate value from unit
var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var value=+split[1];var unit=split[2];// If it's not a number it's an operator, I guess
if(!value){return str;}if(unit.indexOf('%')===0){var element=void 0;switch(unit){case'%p':element=popperOffsets;break;case'%':case'%r':default:element=referenceOffsets;}var rect=getClientRect(element);return rect[measurement]/100*value;}else if(unit==='vh'||unit==='vw'){// if is a vh or vw, we calculate the size based on the viewport
var size=void 0;if(unit==='vh'){size=Math.max(document.documentElement.clientHeight,window.innerHeight||0);}else{size=Math.max(document.documentElement.clientWidth,window.innerWidth||0);}return size/100*value;}else{// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return value;}}/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0];// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var useHeight=['right','left'].indexOf(basePlacement)!==-1;// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim();});// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var divider=fragments.indexOf(find(fragments,function(frag){return frag.search(/,|\s/)!==-1;}));if(fragments[divider]&&fragments[divider].indexOf(',')===-1){console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');}// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var splitRegex=/\s*,\s*|\s+/;var ops=divider!==-1?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider+1))]:[fragments];// Convert the values with units to absolute pixels to allow our computations
ops=ops.map(function(op,index){// Most of the units rely on the orientation of the popper
var measurement=(index===1?!useHeight:useHeight)?'height':'width';var mergeWithPrevious=false;return op// This aggregates any `+` or `-` sign that aren't considered operators
// e.g.: 10 + +5 => [10, +, +5]
.reduce(function(a,b){if(a[a.length-1]===''&&['+','-'].indexOf(b)!==-1){a[a.length-1]=b;mergeWithPrevious=true;return a;}else if(mergeWithPrevious){a[a.length-1]+=b;mergeWithPrevious=false;return a;}else{return a.concat(b);}},[])// Here we convert the string values into number values (in px)
.map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets);});});// Loop trough the offsets arrays and execute the operations
ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index]+=frag*(op[index2-1]==='-'?-1:1);}});});return offsets;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function offset(data,_ref){var offset=_ref.offset;var placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var basePlacement=placement.split('-')[0];var offsets=void 0;if(isNumeric(+offset)){offsets=[+offset,0];}else{offsets=parseOffset(offset,popper,reference,basePlacement);}if(basePlacement==='left'){popper.top+=offsets[0];popper.left-=offsets[1];}else if(basePlacement==='right'){popper.top+=offsets[0];popper.left+=offsets[1];}else if(basePlacement==='top'){popper.left+=offsets[0];popper.top-=offsets[1];}else if(basePlacement==='bottom'){popper.left+=offsets[0];popper.top+=offsets[1];}data.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function preventOverflow(data,options){var boundariesElement=options.boundariesElement||getOffsetParent(data.instance.popper);// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(data.instance.reference===boundariesElement){boundariesElement=getOffsetParent(boundariesElement);}// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var transformProp=getSupportedPropertyName('transform');var popperStyles=data.instance.popper.style;// assignment to help minification
var top=popperStyles.top,left=popperStyles.left,transform=popperStyles[transformProp];popperStyles.top='';popperStyles.left='';popperStyles[transformProp]='';var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement,data.positionFixed);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
popperStyles.top=top;popperStyles.left=left;popperStyles[transformProp]=transform;options.boundaries=boundaries;var order=options.priority;var popper=data.offsets.popper;var check={primary:function primary(placement){var value=popper[placement];if(popper[placement]<boundaries[placement]&&!options.escapeWithReference){value=Math.max(popper[placement],boundaries[placement]);}return defineProperty({},placement,value);},secondary:function secondary(placement){var mainSide=placement==='right'?'left':'top';var value=popper[mainSide];if(popper[placement]>boundaries[placement]&&!options.escapeWithReference){value=Math.min(popper[mainSide],boundaries[placement]-(placement==='right'?popper.width:popper.height));}return defineProperty({},mainSide,value);}};order.forEach(function(placement){var side=['left','top'].indexOf(placement)!==-1?'primary':'secondary';popper=_extends({},popper,check[side](placement));});data.offsets.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function shift(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var shiftvariation=placement.split('-')[1];// if shift shiftvariation is specified, run the modifier
if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper;var isVertical=['bottom','top'].indexOf(basePlacement)!==-1;var side=isVertical?'left':'top';var measurement=isVertical?'width':'height';var shiftOffsets={start:defineProperty({},side,reference[side]),end:defineProperty({},side,reference[side]+reference[measurement]-popper[measurement])};data.offsets.popper=_extends({},popper,shiftOffsets[shiftvariation]);}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function hide(data){if(!isModifierRequired(data.instance.modifiers,'hide','preventOverflow')){return data;}var refRect=data.offsets.reference;var bound=find(data.instance.modifiers,function(modifier){return modifier.name==='preventOverflow';}).boundaries;if(refRect.bottom<bound.top||refRect.left>bound.right||refRect.top>bound.bottom||refRect.right<bound.left){// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===true){return data;}data.hide=true;data.attributes['x-out-of-boundaries']='';}else{// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===false){return data;}data.hide=false;data.attributes['x-out-of-boundaries']=false;}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function inner(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isHoriz=['left','right'].indexOf(basePlacement)!==-1;var subtractLength=['top','left'].indexOf(basePlacement)===-1;popper[isHoriz?'left':'top']=reference[basePlacement]-(subtractLength?popper[isHoriz?'width':'height']:0);data.placement=getOppositePlacement(placement);data.offsets.popper=getClientRect(popper);return data;}/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */ /**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */var modifiers={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */shift:{/** @prop {number} order=100 - Index used to define the order of execution */order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:shift},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */offset:{/** @prop {number} order=200 - Index used to define the order of execution */order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:offset,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:preventOverflow,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */priority:['left','right','top','bottom'],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */boundariesElement:'scrollParent'},/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:keepTogether},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */arrow:{/** @prop {number} order=500 - Index used to define the order of execution */order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:arrow,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:'[x-arrow]'},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */flip:{/** @prop {number} order=600 - Index used to define the order of execution */order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:flip,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */behavior:'flip',/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */boundariesElement:'viewport'},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */inner:{/** @prop {number} order=700 - Index used to define the order of execution */order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:false,/** @prop {ModifierFn} */fn:inner},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */hide:{/** @prop {number} order=800 - Index used to define the order of execution */order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:hide},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:computeStyle,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:true,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */x:'bottom',/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */y:'right'},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:applyStyle,/** @prop {Function} */onLoad:applyStyleOnLoad,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:undefined}};/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */ /**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */var Defaults={/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */placement:'bottom',/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */positionFixed:false,/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */eventsEnabled:true,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */removeOnDestroy:false,/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */onCreate:function onCreate(){},/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */onUpdate:function onUpdate(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */modifiers:modifiers};/**
 * @callback onCreate
 * @param {dataObject} data
 */ /**
 * @callback onUpdate
 * @param {dataObject} data
 */ // Utils
// Methods
var Popper=function(){/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */function Popper(reference,popper){var _this=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};classCallCheck(this,Popper);this.scheduleUpdate=function(){return requestAnimationFrame(_this.update);};// make update() debounced, so that it only runs at most once-per-tick
this.update=debounce(this.update.bind(this));// with {} we create a new object with the options inside it
this.options=_extends({},Popper.Defaults,options);// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};// get reference and popper elements (allow jQuery wrappers)
this.reference=reference&&reference.jquery?reference[0]:reference;this.popper=popper&&popper.jquery?popper[0]:popper;// Deep merge modifiers options
this.options.modifiers={};Object.keys(_extends({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name]=_extends({},Popper.Defaults.modifiers[name]||{},options.modifiers?options.modifiers[name]:{});});// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(name){return _extends({name:name},_this.options.modifiers[name]);})// sort the modifiers by order
.sort(function(a,b){return a.order-b.order;});// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled&&isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state);}});// fire the first update to position the popper in the right place
this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();}this.state.eventsEnabled=eventsEnabled;}// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
createClass(Popper,[{key:'update',value:function update$$1(){return update.call(this);}},{key:'destroy',value:function destroy$$1(){return destroy.call(this);}},{key:'enableEventListeners',value:function enableEventListeners$$1(){return enableEventListeners.call(this);}},{key:'disableEventListeners',value:function disableEventListeners$$1(){return disableEventListeners.call(this);}/**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */ /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */}]);return Popper;}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */Popper.Utils=(typeof window!=='undefined'?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;return Popper;});/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(5));/***/},/* 5 */ /***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||new Function("return this")();}catch(e){// This works if the window reference is available
if((typeof window==="undefined"?"undefined":_typeof2(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 6 */ /***/function(module,exports,__webpack_require__){/*!
  * Bootstrap v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */(function(global,factory){true?factory(exports,__webpack_require__(7),__webpack_require__(3)):undefined;})(this,function(exports,Popper,$){'use strict';Popper=Popper&&Popper.hasOwnProperty('default')?Popper['default']:Popper;$=$&&$.hasOwnProperty('default')?$['default']:$;function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.2.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */ /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */var TRANSITION_END='transitionend';var MAX_UID=1000000;var MILLISECONDS_MULTIPLIER=1000;// Shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(obj){return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();}function getSpecialTransitionEndEvent(){return{bindType:TRANSITION_END,delegateType:TRANSITION_END,handle:function handle(event){if($(event.target).is(this)){return event.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}return undefined;// eslint-disable-line no-undefined
}};}function transitionEndEmulator(duration){var _this=this;var called=false;$(this).one(Util.TRANSITION_END,function(){called=true;});setTimeout(function(){if(!called){Util.triggerTransitionEnd(_this);}},duration);return this;}function setTransitionEndSupport(){$.fn.emulateTransitionEnd=transitionEndEmulator;$.event.special[Util.TRANSITION_END]=getSpecialTransitionEndEvent();}/**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */var Util={TRANSITION_END:'bsTransitionEnd',getUID:function getUID(prefix){do{// eslint-disable-next-line no-bitwise
prefix+=~~(Math.random()*MAX_UID);// "~~" acts like a faster Math.floor() here
}while(document.getElementById(prefix));return prefix;},getSelectorFromElement:function getSelectorFromElement(element){var selector=element.getAttribute('data-target');if(!selector||selector==='#'){var hrefAttr=element.getAttribute('href');selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():'';}return selector&&document.querySelector(selector)?selector:null;},getTransitionDurationFromElement:function getTransitionDurationFromElement(element){if(!element){return 0;}// Get transition-duration of the element
var transitionDuration=$(element).css('transition-duration');var transitionDelay=$(element).css('transition-delay');var floatTransitionDuration=parseFloat(transitionDuration);var floatTransitionDelay=parseFloat(transitionDelay);// Return 0 if element or transition duration is not found
if(!floatTransitionDuration&&!floatTransitionDelay){return 0;}// If multiple durations are defined, take the first
transitionDuration=transitionDuration.split(',')[0];transitionDelay=transitionDelay.split(',')[0];return(parseFloat(transitionDuration)+parseFloat(transitionDelay))*MILLISECONDS_MULTIPLIER;},reflow:function reflow(element){return element.offsetHeight;},triggerTransitionEnd:function triggerTransitionEnd(element){$(element).trigger(TRANSITION_END);},// TODO: Remove in v5
supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(TRANSITION_END);},isElement:function isElement(obj){return(obj[0]||obj).nodeType;},typeCheckConfig:function typeCheckConfig(componentName,config,configTypes){for(var property in configTypes){if(Object.prototype.hasOwnProperty.call(configTypes,property)){var expectedTypes=configTypes[property];var value=config[property];var valueType=value&&Util.isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new Error(componentName.toUpperCase()+": "+("Option \""+property+"\" provided type \""+valueType+"\" ")+("but expected type \""+expectedTypes+"\"."));}}}},findShadowRoot:function findShadowRoot(element){if(!document.documentElement.attachShadow){return null;}// Can find the shadow root otherwise it'll return the document
if(typeof element.getRootNode==='function'){var root=element.getRootNode();return root instanceof ShadowRoot?root:null;}if(element instanceof ShadowRoot){return element;}// when we don't find a shadow root
if(!element.parentNode){return null;}return Util.findShadowRoot(element.parentNode);}};setTransitionEndSupport();/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='alert';var VERSION='4.2.1';var DATA_KEY='bs.alert';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var Selector={DISMISS:'[data-dismiss="alert"]'};var Event={CLOSE:"close"+EVENT_KEY,CLOSED:"closed"+EVENT_KEY,CLICK_DATA_API:"click"+EVENT_KEY+DATA_API_KEY};var ClassName={ALERT:'alert',FADE:'fade',SHOW:'show'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Alert=/*#__PURE__*/function(){function Alert(element){this._element=element;}// Getters
var _proto=Alert.prototype;// Public
_proto.close=function close(element){var rootElement=this._element;if(element){rootElement=this._getRootElement(element);}var customEvent=this._triggerCloseEvent(rootElement);if(customEvent.isDefaultPrevented()){return;}this._removeElement(rootElement);};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY);this._element=null;};// Private
_proto._getRootElement=function _getRootElement(element){var selector=Util.getSelectorFromElement(element);var parent=false;if(selector){parent=document.querySelector(selector);}if(!parent){parent=$(element).closest("."+ClassName.ALERT)[0];}return parent;};_proto._triggerCloseEvent=function _triggerCloseEvent(element){var closeEvent=$.Event(Event.CLOSE);$(element).trigger(closeEvent);return closeEvent;};_proto._removeElement=function _removeElement(element){var _this=this;$(element).removeClass(ClassName.SHOW);if(!$(element).hasClass(ClassName.FADE)){this._destroyElement(element);return;}var transitionDuration=Util.getTransitionDurationFromElement(element);$(element).one(Util.TRANSITION_END,function(event){return _this._destroyElement(element,event);}).emulateTransitionEnd(transitionDuration);};_proto._destroyElement=function _destroyElement(element){$(element).detach().trigger(Event.CLOSED).remove();};// Static
Alert._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $element=$(this);var data=$element.data(DATA_KEY);if(!data){data=new Alert(this);$element.data(DATA_KEY,data);}if(config==='close'){data[config](this);}});};Alert._handleDismiss=function _handleDismiss(alertInstance){return function(event){if(event){event.preventDefault();}alertInstance.close(this);};};_createClass(Alert,null,[{key:"VERSION",get:function get(){return VERSION;}}]);return Alert;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.CLICK_DATA_API,Selector.DISMISS,Alert._handleDismiss(new Alert()));/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME]=Alert._jQueryInterface;$.fn[NAME].Constructor=Alert;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Alert._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$1='button';var VERSION$1='4.2.1';var DATA_KEY$1='bs.button';var EVENT_KEY$1="."+DATA_KEY$1;var DATA_API_KEY$1='.data-api';var JQUERY_NO_CONFLICT$1=$.fn[NAME$1];var ClassName$1={ACTIVE:'active',BUTTON:'btn',FOCUS:'focus'};var Selector$1={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input:not([type="hidden"])',ACTIVE:'.active',BUTTON:'.btn'};var Event$1={CLICK_DATA_API:"click"+EVENT_KEY$1+DATA_API_KEY$1,FOCUS_BLUR_DATA_API:"focus"+EVENT_KEY$1+DATA_API_KEY$1+" "+("blur"+EVENT_KEY$1+DATA_API_KEY$1)/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Button=/*#__PURE__*/function(){function Button(element){this._element=element;}// Getters
var _proto=Button.prototype;// Public
_proto.toggle=function toggle(){var triggerChangeEvent=true;var addAriaPressed=true;var rootElement=$(this._element).closest(Selector$1.DATA_TOGGLE)[0];if(rootElement){var input=this._element.querySelector(Selector$1.INPUT);if(input){if(input.type==='radio'){if(input.checked&&this._element.classList.contains(ClassName$1.ACTIVE)){triggerChangeEvent=false;}else{var activeElement=rootElement.querySelector(Selector$1.ACTIVE);if(activeElement){$(activeElement).removeClass(ClassName$1.ACTIVE);}}}if(triggerChangeEvent){if(input.hasAttribute('disabled')||rootElement.hasAttribute('disabled')||input.classList.contains('disabled')||rootElement.classList.contains('disabled')){return;}input.checked=!this._element.classList.contains(ClassName$1.ACTIVE);$(input).trigger('change');}input.focus();addAriaPressed=false;}}if(addAriaPressed){this._element.setAttribute('aria-pressed',!this._element.classList.contains(ClassName$1.ACTIVE));}if(triggerChangeEvent){$(this._element).toggleClass(ClassName$1.ACTIVE);}};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$1);this._element=null;};// Static
Button._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$1);if(!data){data=new Button(this);$(this).data(DATA_KEY$1,data);}if(config==='toggle'){data[config]();}});};_createClass(Button,null,[{key:"VERSION",get:function get(){return VERSION$1;}}]);return Button;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event$1.CLICK_DATA_API,Selector$1.DATA_TOGGLE_CARROT,function(event){event.preventDefault();var button=event.target;if(!$(button).hasClass(ClassName$1.BUTTON)){button=$(button).closest(Selector$1.BUTTON);}Button._jQueryInterface.call($(button),'toggle');}).on(Event$1.FOCUS_BLUR_DATA_API,Selector$1.DATA_TOGGLE_CARROT,function(event){var button=$(event.target).closest(Selector$1.BUTTON)[0];$(button).toggleClass(ClassName$1.FOCUS,/^focus(in)?$/.test(event.type));});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$1]=Button._jQueryInterface;$.fn[NAME$1].Constructor=Button;$.fn[NAME$1].noConflict=function(){$.fn[NAME$1]=JQUERY_NO_CONFLICT$1;return Button._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$2='carousel';var VERSION$2='4.2.1';var DATA_KEY$2='bs.carousel';var EVENT_KEY$2="."+DATA_KEY$2;var DATA_API_KEY$2='.data-api';var JQUERY_NO_CONFLICT$2=$.fn[NAME$2];var ARROW_LEFT_KEYCODE=37;// KeyboardEvent.which value for left arrow key
var ARROW_RIGHT_KEYCODE=39;// KeyboardEvent.which value for right arrow key
var TOUCHEVENT_COMPAT_WAIT=500;// Time for mouse compat events to fire after touch
var SWIPE_THRESHOLD=40;var Default={interval:5000,keyboard:true,slide:false,pause:'hover',wrap:true,touch:true};var DefaultType={interval:'(number|boolean)',keyboard:'boolean',slide:'(boolean|string)',pause:'(string|boolean)',wrap:'boolean',touch:'boolean'};var Direction={NEXT:'next',PREV:'prev',LEFT:'left',RIGHT:'right'};var Event$2={SLIDE:"slide"+EVENT_KEY$2,SLID:"slid"+EVENT_KEY$2,KEYDOWN:"keydown"+EVENT_KEY$2,MOUSEENTER:"mouseenter"+EVENT_KEY$2,MOUSELEAVE:"mouseleave"+EVENT_KEY$2,TOUCHSTART:"touchstart"+EVENT_KEY$2,TOUCHMOVE:"touchmove"+EVENT_KEY$2,TOUCHEND:"touchend"+EVENT_KEY$2,POINTERDOWN:"pointerdown"+EVENT_KEY$2,POINTERUP:"pointerup"+EVENT_KEY$2,DRAG_START:"dragstart"+EVENT_KEY$2,LOAD_DATA_API:"load"+EVENT_KEY$2+DATA_API_KEY$2,CLICK_DATA_API:"click"+EVENT_KEY$2+DATA_API_KEY$2};var ClassName$2={CAROUSEL:'carousel',ACTIVE:'active',SLIDE:'slide',RIGHT:'carousel-item-right',LEFT:'carousel-item-left',NEXT:'carousel-item-next',PREV:'carousel-item-prev',ITEM:'carousel-item',POINTER_EVENT:'pointer-event'};var Selector$2={ACTIVE:'.active',ACTIVE_ITEM:'.active.carousel-item',ITEM:'.carousel-item',ITEM_IMG:'.carousel-item img',NEXT_PREV:'.carousel-item-next, .carousel-item-prev',INDICATORS:'.carousel-indicators',DATA_SLIDE:'[data-slide], [data-slide-to]',DATA_RIDE:'[data-ride="carousel"]'};var PointerType={TOUCH:'touch',PEN:'pen'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Carousel=/*#__PURE__*/function(){function Carousel(element,config){this._items=null;this._interval=null;this._activeElement=null;this._isPaused=false;this._isSliding=false;this.touchTimeout=null;this.touchStartX=0;this.touchDeltaX=0;this._config=this._getConfig(config);this._element=element;this._indicatorsElement=this._element.querySelector(Selector$2.INDICATORS);this._touchSupported='ontouchstart'in document.documentElement||navigator.maxTouchPoints>0;this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent);this._addEventListeners();}// Getters
var _proto=Carousel.prototype;// Public
_proto.next=function next(){if(!this._isSliding){this._slide(Direction.NEXT);}};_proto.nextWhenVisible=function nextWhenVisible(){// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
if(!document.hidden&&$(this._element).is(':visible')&&$(this._element).css('visibility')!=='hidden'){this.next();}};_proto.prev=function prev(){if(!this._isSliding){this._slide(Direction.PREV);}};_proto.pause=function pause(event){if(!event){this._isPaused=true;}if(this._element.querySelector(Selector$2.NEXT_PREV)){Util.triggerTransitionEnd(this._element);this.cycle(true);}clearInterval(this._interval);this._interval=null;};_proto.cycle=function cycle(event){if(!event){this._isPaused=false;}if(this._interval){clearInterval(this._interval);this._interval=null;}if(this._config.interval&&!this._isPaused){this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval);}};_proto.to=function to(index){var _this=this;this._activeElement=this._element.querySelector(Selector$2.ACTIVE_ITEM);var activeIndex=this._getItemIndex(this._activeElement);if(index>this._items.length-1||index<0){return;}if(this._isSliding){$(this._element).one(Event$2.SLID,function(){return _this.to(index);});return;}if(activeIndex===index){this.pause();this.cycle();return;}var direction=index>activeIndex?Direction.NEXT:Direction.PREV;this._slide(direction,this._items[index]);};_proto.dispose=function dispose(){$(this._element).off(EVENT_KEY$2);$.removeData(this._element,DATA_KEY$2);this._items=null;this._config=null;this._element=null;this._interval=null;this._isPaused=null;this._isSliding=null;this._activeElement=null;this._indicatorsElement=null;};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default,config);Util.typeCheckConfig(NAME$2,config,DefaultType);return config;};_proto._handleSwipe=function _handleSwipe(){var absDeltax=Math.abs(this.touchDeltaX);if(absDeltax<=SWIPE_THRESHOLD){return;}var direction=absDeltax/this.touchDeltaX;// swipe left
if(direction>0){this.prev();}// swipe right
if(direction<0){this.next();}};_proto._addEventListeners=function _addEventListeners(){var _this2=this;if(this._config.keyboard){$(this._element).on(Event$2.KEYDOWN,function(event){return _this2._keydown(event);});}if(this._config.pause==='hover'){$(this._element).on(Event$2.MOUSEENTER,function(event){return _this2.pause(event);}).on(Event$2.MOUSELEAVE,function(event){return _this2.cycle(event);});}this._addTouchEventListeners();};_proto._addTouchEventListeners=function _addTouchEventListeners(){var _this3=this;if(!this._touchSupported){return;}var start=function start(event){if(_this3._pointerEvent&&PointerType[event.originalEvent.pointerType.toUpperCase()]){_this3.touchStartX=event.originalEvent.clientX;}else if(!_this3._pointerEvent){_this3.touchStartX=event.originalEvent.touches[0].clientX;}};var move=function move(event){// ensure swiping with one touch and not pinching
if(event.originalEvent.touches&&event.originalEvent.touches.length>1){_this3.touchDeltaX=0;}else{_this3.touchDeltaX=event.originalEvent.touches[0].clientX-_this3.touchStartX;}};var end=function end(event){if(_this3._pointerEvent&&PointerType[event.originalEvent.pointerType.toUpperCase()]){_this3.touchDeltaX=event.originalEvent.clientX-_this3.touchStartX;}_this3._handleSwipe();if(_this3._config.pause==='hover'){// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
_this3.pause();if(_this3.touchTimeout){clearTimeout(_this3.touchTimeout);}_this3.touchTimeout=setTimeout(function(event){return _this3.cycle(event);},TOUCHEVENT_COMPAT_WAIT+_this3._config.interval);}};$(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START,function(e){return e.preventDefault();});if(this._pointerEvent){$(this._element).on(Event$2.POINTERDOWN,function(event){return start(event);});$(this._element).on(Event$2.POINTERUP,function(event){return end(event);});this._element.classList.add(ClassName$2.POINTER_EVENT);}else{$(this._element).on(Event$2.TOUCHSTART,function(event){return start(event);});$(this._element).on(Event$2.TOUCHMOVE,function(event){return move(event);});$(this._element).on(Event$2.TOUCHEND,function(event){return end(event);});}};_proto._keydown=function _keydown(event){if(/input|textarea/i.test(event.target.tagName)){return;}switch(event.which){case ARROW_LEFT_KEYCODE:event.preventDefault();this.prev();break;case ARROW_RIGHT_KEYCODE:event.preventDefault();this.next();break;default:}};_proto._getItemIndex=function _getItemIndex(element){this._items=element&&element.parentNode?[].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)):[];return this._items.indexOf(element);};_proto._getItemByDirection=function _getItemByDirection(direction,activeElement){var isNextDirection=direction===Direction.NEXT;var isPrevDirection=direction===Direction.PREV;var activeIndex=this._getItemIndex(activeElement);var lastItemIndex=this._items.length-1;var isGoingToWrap=isPrevDirection&&activeIndex===0||isNextDirection&&activeIndex===lastItemIndex;if(isGoingToWrap&&!this._config.wrap){return activeElement;}var delta=direction===Direction.PREV?-1:1;var itemIndex=(activeIndex+delta)%this._items.length;return itemIndex===-1?this._items[this._items.length-1]:this._items[itemIndex];};_proto._triggerSlideEvent=function _triggerSlideEvent(relatedTarget,eventDirectionName){var targetIndex=this._getItemIndex(relatedTarget);var fromIndex=this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));var slideEvent=$.Event(Event$2.SLIDE,{relatedTarget:relatedTarget,direction:eventDirectionName,from:fromIndex,to:targetIndex});$(this._element).trigger(slideEvent);return slideEvent;};_proto._setActiveIndicatorElement=function _setActiveIndicatorElement(element){if(this._indicatorsElement){var indicators=[].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));$(indicators).removeClass(ClassName$2.ACTIVE);var nextIndicator=this._indicatorsElement.children[this._getItemIndex(element)];if(nextIndicator){$(nextIndicator).addClass(ClassName$2.ACTIVE);}}};_proto._slide=function _slide(direction,element){var _this4=this;var activeElement=this._element.querySelector(Selector$2.ACTIVE_ITEM);var activeElementIndex=this._getItemIndex(activeElement);var nextElement=element||activeElement&&this._getItemByDirection(direction,activeElement);var nextElementIndex=this._getItemIndex(nextElement);var isCycling=Boolean(this._interval);var directionalClassName;var orderClassName;var eventDirectionName;if(direction===Direction.NEXT){directionalClassName=ClassName$2.LEFT;orderClassName=ClassName$2.NEXT;eventDirectionName=Direction.LEFT;}else{directionalClassName=ClassName$2.RIGHT;orderClassName=ClassName$2.PREV;eventDirectionName=Direction.RIGHT;}if(nextElement&&$(nextElement).hasClass(ClassName$2.ACTIVE)){this._isSliding=false;return;}var slideEvent=this._triggerSlideEvent(nextElement,eventDirectionName);if(slideEvent.isDefaultPrevented()){return;}if(!activeElement||!nextElement){// Some weirdness is happening, so we bail
return;}this._isSliding=true;if(isCycling){this.pause();}this._setActiveIndicatorElement(nextElement);var slidEvent=$.Event(Event$2.SLID,{relatedTarget:nextElement,direction:eventDirectionName,from:activeElementIndex,to:nextElementIndex});if($(this._element).hasClass(ClassName$2.SLIDE)){$(nextElement).addClass(orderClassName);Util.reflow(nextElement);$(activeElement).addClass(directionalClassName);$(nextElement).addClass(directionalClassName);var nextElementInterval=parseInt(nextElement.getAttribute('data-interval'),10);if(nextElementInterval){this._config.defaultInterval=this._config.defaultInterval||this._config.interval;this._config.interval=nextElementInterval;}else{this._config.interval=this._config.defaultInterval||this._config.interval;}var transitionDuration=Util.getTransitionDurationFromElement(activeElement);$(activeElement).one(Util.TRANSITION_END,function(){$(nextElement).removeClass(directionalClassName+" "+orderClassName).addClass(ClassName$2.ACTIVE);$(activeElement).removeClass(ClassName$2.ACTIVE+" "+orderClassName+" "+directionalClassName);_this4._isSliding=false;setTimeout(function(){return $(_this4._element).trigger(slidEvent);},0);}).emulateTransitionEnd(transitionDuration);}else{$(activeElement).removeClass(ClassName$2.ACTIVE);$(nextElement).addClass(ClassName$2.ACTIVE);this._isSliding=false;$(this._element).trigger(slidEvent);}if(isCycling){this.cycle();}};// Static
Carousel._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$2);var _config=_objectSpread({},Default,$(this).data());if(_typeof2(config)==='object'){_config=_objectSpread({},_config,config);}var action=typeof config==='string'?config:_config.slide;if(!data){data=new Carousel(this,_config);$(this).data(DATA_KEY$2,data);}if(typeof config==='number'){data.to(config);}else if(typeof action==='string'){if(typeof data[action]==='undefined'){throw new TypeError("No method named \""+action+"\"");}data[action]();}else if(_config.interval){data.pause();data.cycle();}});};Carousel._dataApiClickHandler=function _dataApiClickHandler(event){var selector=Util.getSelectorFromElement(this);if(!selector){return;}var target=$(selector)[0];if(!target||!$(target).hasClass(ClassName$2.CAROUSEL)){return;}var config=_objectSpread({},$(target).data(),$(this).data());var slideIndex=this.getAttribute('data-slide-to');if(slideIndex){config.interval=false;}Carousel._jQueryInterface.call($(target),config);if(slideIndex){$(target).data(DATA_KEY$2).to(slideIndex);}event.preventDefault();};_createClass(Carousel,null,[{key:"VERSION",get:function get(){return VERSION$2;}},{key:"Default",get:function get(){return Default;}}]);return Carousel;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event$2.CLICK_DATA_API,Selector$2.DATA_SLIDE,Carousel._dataApiClickHandler);$(window).on(Event$2.LOAD_DATA_API,function(){var carousels=[].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));for(var i=0,len=carousels.length;i<len;i++){var $carousel=$(carousels[i]);Carousel._jQueryInterface.call($carousel,$carousel.data());}});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$2]=Carousel._jQueryInterface;$.fn[NAME$2].Constructor=Carousel;$.fn[NAME$2].noConflict=function(){$.fn[NAME$2]=JQUERY_NO_CONFLICT$2;return Carousel._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$3='collapse';var VERSION$3='4.2.1';var DATA_KEY$3='bs.collapse';var EVENT_KEY$3="."+DATA_KEY$3;var DATA_API_KEY$3='.data-api';var JQUERY_NO_CONFLICT$3=$.fn[NAME$3];var Default$1={toggle:true,parent:''};var DefaultType$1={toggle:'boolean',parent:'(string|element)'};var Event$3={SHOW:"show"+EVENT_KEY$3,SHOWN:"shown"+EVENT_KEY$3,HIDE:"hide"+EVENT_KEY$3,HIDDEN:"hidden"+EVENT_KEY$3,CLICK_DATA_API:"click"+EVENT_KEY$3+DATA_API_KEY$3};var ClassName$3={SHOW:'show',COLLAPSE:'collapse',COLLAPSING:'collapsing',COLLAPSED:'collapsed'};var Dimension={WIDTH:'width',HEIGHT:'height'};var Selector$3={ACTIVES:'.show, .collapsing',DATA_TOGGLE:'[data-toggle="collapse"]'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Collapse=/*#__PURE__*/function(){function Collapse(element,config){this._isTransitioning=false;this._element=element;this._config=this._getConfig(config);this._triggerArray=[].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#"+element.id+"\"],"+("[data-toggle=\"collapse\"][data-target=\"#"+element.id+"\"]")));var toggleList=[].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));for(var i=0,len=toggleList.length;i<len;i++){var elem=toggleList[i];var selector=Util.getSelectorFromElement(elem);var filterElement=[].slice.call(document.querySelectorAll(selector)).filter(function(foundElem){return foundElem===element;});if(selector!==null&&filterElement.length>0){this._selector=selector;this._triggerArray.push(elem);}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray);}if(this._config.toggle){this.toggle();}}// Getters
var _proto=Collapse.prototype;// Public
_proto.toggle=function toggle(){if($(this._element).hasClass(ClassName$3.SHOW)){this.hide();}else{this.show();}};_proto.show=function show(){var _this=this;if(this._isTransitioning||$(this._element).hasClass(ClassName$3.SHOW)){return;}var actives;var activesData;if(this._parent){actives=[].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function(elem){if(typeof _this._config.parent==='string'){return elem.getAttribute('data-parent')===_this._config.parent;}return elem.classList.contains(ClassName$3.COLLAPSE);});if(actives.length===0){actives=null;}}if(actives){activesData=$(actives).not(this._selector).data(DATA_KEY$3);if(activesData&&activesData._isTransitioning){return;}}var startEvent=$.Event(Event$3.SHOW);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}if(actives){Collapse._jQueryInterface.call($(actives).not(this._selector),'hide');if(!activesData){$(actives).data(DATA_KEY$3,null);}}var dimension=this._getDimension();$(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);this._element.style[dimension]=0;if(this._triggerArray.length){$(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded',true);}this.setTransitioning(true);var complete=function complete(){$(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);_this._element.style[dimension]='';_this.setTransitioning(false);$(_this._element).trigger(Event$3.SHOWN);};var capitalizedDimension=dimension[0].toUpperCase()+dimension.slice(1);var scrollSize="scroll"+capitalizedDimension;var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);this._element.style[dimension]=this._element[scrollSize]+"px";};_proto.hide=function hide(){var _this2=this;if(this._isTransitioning||!$(this._element).hasClass(ClassName$3.SHOW)){return;}var startEvent=$.Event(Event$3.HIDE);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}var dimension=this._getDimension();this._element.style[dimension]=this._element.getBoundingClientRect()[dimension]+"px";Util.reflow(this._element);$(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);var triggerArrayLength=this._triggerArray.length;if(triggerArrayLength>0){for(var i=0;i<triggerArrayLength;i++){var trigger=this._triggerArray[i];var selector=Util.getSelectorFromElement(trigger);if(selector!==null){var $elem=$([].slice.call(document.querySelectorAll(selector)));if(!$elem.hasClass(ClassName$3.SHOW)){$(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded',false);}}}}this.setTransitioning(true);var complete=function complete(){_this2.setTransitioning(false);$(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);};this._element.style[dimension]='';var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);};_proto.setTransitioning=function setTransitioning(isTransitioning){this._isTransitioning=isTransitioning;};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$3);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null;};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default$1,config);config.toggle=Boolean(config.toggle);// Coerce string values
Util.typeCheckConfig(NAME$3,config,DefaultType$1);return config;};_proto._getDimension=function _getDimension(){var hasWidth=$(this._element).hasClass(Dimension.WIDTH);return hasWidth?Dimension.WIDTH:Dimension.HEIGHT;};_proto._getParent=function _getParent(){var _this3=this;var parent;if(Util.isElement(this._config.parent)){parent=this._config.parent;// It's a jQuery object
if(typeof this._config.parent.jquery!=='undefined'){parent=this._config.parent[0];}}else{parent=document.querySelector(this._config.parent);}var selector="[data-toggle=\"collapse\"][data-parent=\""+this._config.parent+"\"]";var children=[].slice.call(parent.querySelectorAll(selector));$(children).each(function(i,element){_this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element),[element]);});return parent;};_proto._addAriaAndCollapsedClass=function _addAriaAndCollapsedClass(element,triggerArray){var isOpen=$(element).hasClass(ClassName$3.SHOW);if(triggerArray.length){$(triggerArray).toggleClass(ClassName$3.COLLAPSED,!isOpen).attr('aria-expanded',isOpen);}};// Static
Collapse._getTargetFromElement=function _getTargetFromElement(element){var selector=Util.getSelectorFromElement(element);return selector?document.querySelector(selector):null;};Collapse._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY$3);var _config=_objectSpread({},Default$1,$this.data(),_typeof2(config)==='object'&&config?config:{});if(!data&&_config.toggle&&/show|hide/.test(config)){_config.toggle=false;}if(!data){data=new Collapse(this,_config);$this.data(DATA_KEY$3,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Collapse,null,[{key:"VERSION",get:function get(){return VERSION$3;}},{key:"Default",get:function get(){return Default$1;}}]);return Collapse;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event$3.CLICK_DATA_API,Selector$3.DATA_TOGGLE,function(event){// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
if(event.currentTarget.tagName==='A'){event.preventDefault();}var $trigger=$(this);var selector=Util.getSelectorFromElement(this);var selectors=[].slice.call(document.querySelectorAll(selector));$(selectors).each(function(){var $target=$(this);var data=$target.data(DATA_KEY$3);var config=data?'toggle':$trigger.data();Collapse._jQueryInterface.call($target,config);});});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$3]=Collapse._jQueryInterface;$.fn[NAME$3].Constructor=Collapse;$.fn[NAME$3].noConflict=function(){$.fn[NAME$3]=JQUERY_NO_CONFLICT$3;return Collapse._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$4='dropdown';var VERSION$4='4.2.1';var DATA_KEY$4='bs.dropdown';var EVENT_KEY$4="."+DATA_KEY$4;var DATA_API_KEY$4='.data-api';var JQUERY_NO_CONFLICT$4=$.fn[NAME$4];var ESCAPE_KEYCODE=27;// KeyboardEvent.which value for Escape (Esc) key
var SPACE_KEYCODE=32;// KeyboardEvent.which value for space key
var TAB_KEYCODE=9;// KeyboardEvent.which value for tab key
var ARROW_UP_KEYCODE=38;// KeyboardEvent.which value for up arrow key
var ARROW_DOWN_KEYCODE=40;// KeyboardEvent.which value for down arrow key
var RIGHT_MOUSE_BUTTON_WHICH=3;// MouseEvent.which value for the right button (assuming a right-handed mouse)
var REGEXP_KEYDOWN=new RegExp(ARROW_UP_KEYCODE+"|"+ARROW_DOWN_KEYCODE+"|"+ESCAPE_KEYCODE);var Event$4={HIDE:"hide"+EVENT_KEY$4,HIDDEN:"hidden"+EVENT_KEY$4,SHOW:"show"+EVENT_KEY$4,SHOWN:"shown"+EVENT_KEY$4,CLICK:"click"+EVENT_KEY$4,CLICK_DATA_API:"click"+EVENT_KEY$4+DATA_API_KEY$4,KEYDOWN_DATA_API:"keydown"+EVENT_KEY$4+DATA_API_KEY$4,KEYUP_DATA_API:"keyup"+EVENT_KEY$4+DATA_API_KEY$4};var ClassName$4={DISABLED:'disabled',SHOW:'show',DROPUP:'dropup',DROPRIGHT:'dropright',DROPLEFT:'dropleft',MENURIGHT:'dropdown-menu-right',MENULEFT:'dropdown-menu-left',POSITION_STATIC:'position-static'};var Selector$4={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:'.dropdown form',MENU:'.dropdown-menu',NAVBAR_NAV:'.navbar-nav',VISIBLE_ITEMS:'.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'};var AttachmentMap={TOP:'top-start',TOPEND:'top-end',BOTTOM:'bottom-start',BOTTOMEND:'bottom-end',RIGHT:'right-start',RIGHTEND:'right-end',LEFT:'left-start',LEFTEND:'left-end'};var Default$2={offset:0,flip:true,boundary:'scrollParent',reference:'toggle',display:'dynamic'};var DefaultType$2={offset:'(number|string|function)',flip:'boolean',boundary:'(string|element)',reference:'(string|element)',display:'string'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Dropdown=/*#__PURE__*/function(){function Dropdown(element,config){this._element=element;this._popper=null;this._config=this._getConfig(config);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners();}// Getters
var _proto=Dropdown.prototype;// Public
_proto.toggle=function toggle(){if(this._element.disabled||$(this._element).hasClass(ClassName$4.DISABLED)){return;}var parent=Dropdown._getParentFromElement(this._element);var isActive=$(this._menu).hasClass(ClassName$4.SHOW);Dropdown._clearMenus();if(isActive){return;}var relatedTarget={relatedTarget:this._element};var showEvent=$.Event(Event$4.SHOW,relatedTarget);$(parent).trigger(showEvent);if(showEvent.isDefaultPrevented()){return;}// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar){/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */if(typeof Popper==='undefined'){throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');}var referenceElement=this._element;if(this._config.reference==='parent'){referenceElement=parent;}else if(Util.isElement(this._config.reference)){referenceElement=this._config.reference;// Check if it's jQuery element
if(typeof this._config.reference.jquery!=='undefined'){referenceElement=this._config.reference[0];}}// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
if(this._config.boundary!=='scrollParent'){$(parent).addClass(ClassName$4.POSITION_STATIC);}this._popper=new Popper(referenceElement,this._menu,this._getPopperConfig());}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if('ontouchstart'in document.documentElement&&$(parent).closest(Selector$4.NAVBAR_NAV).length===0){$(document.body).children().on('mouseover',null,$.noop);}this._element.focus();this._element.setAttribute('aria-expanded',true);$(this._menu).toggleClass(ClassName$4.SHOW);$(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN,relatedTarget));};_proto.show=function show(){if(this._element.disabled||$(this._element).hasClass(ClassName$4.DISABLED)||$(this._menu).hasClass(ClassName$4.SHOW)){return;}var relatedTarget={relatedTarget:this._element};var showEvent=$.Event(Event$4.SHOW,relatedTarget);var parent=Dropdown._getParentFromElement(this._element);$(parent).trigger(showEvent);if(showEvent.isDefaultPrevented()){return;}$(this._menu).toggleClass(ClassName$4.SHOW);$(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN,relatedTarget));};_proto.hide=function hide(){if(this._element.disabled||$(this._element).hasClass(ClassName$4.DISABLED)||!$(this._menu).hasClass(ClassName$4.SHOW)){return;}var relatedTarget={relatedTarget:this._element};var hideEvent=$.Event(Event$4.HIDE,relatedTarget);var parent=Dropdown._getParentFromElement(this._element);$(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}$(this._menu).toggleClass(ClassName$4.SHOW);$(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN,relatedTarget));};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$4);$(this._element).off(EVENT_KEY$4);this._element=null;this._menu=null;if(this._popper!==null){this._popper.destroy();this._popper=null;}};_proto.update=function update(){this._inNavbar=this._detectNavbar();if(this._popper!==null){this._popper.scheduleUpdate();}};// Private
_proto._addEventListeners=function _addEventListeners(){var _this=this;$(this._element).on(Event$4.CLICK,function(event){event.preventDefault();event.stopPropagation();_this.toggle();});};_proto._getConfig=function _getConfig(config){config=_objectSpread({},this.constructor.Default,$(this._element).data(),config);Util.typeCheckConfig(NAME$4,config,this.constructor.DefaultType);return config;};_proto._getMenuElement=function _getMenuElement(){if(!this._menu){var parent=Dropdown._getParentFromElement(this._element);if(parent){this._menu=parent.querySelector(Selector$4.MENU);}}return this._menu;};_proto._getPlacement=function _getPlacement(){var $parentDropdown=$(this._element.parentNode);var placement=AttachmentMap.BOTTOM;// Handle dropup
if($parentDropdown.hasClass(ClassName$4.DROPUP)){placement=AttachmentMap.TOP;if($(this._menu).hasClass(ClassName$4.MENURIGHT)){placement=AttachmentMap.TOPEND;}}else if($parentDropdown.hasClass(ClassName$4.DROPRIGHT)){placement=AttachmentMap.RIGHT;}else if($parentDropdown.hasClass(ClassName$4.DROPLEFT)){placement=AttachmentMap.LEFT;}else if($(this._menu).hasClass(ClassName$4.MENURIGHT)){placement=AttachmentMap.BOTTOMEND;}return placement;};_proto._detectNavbar=function _detectNavbar(){return $(this._element).closest('.navbar').length>0;};_proto._getPopperConfig=function _getPopperConfig(){var _this2=this;var offsetConf={};if(typeof this._config.offset==='function'){offsetConf.fn=function(data){data.offsets=_objectSpread({},data.offsets,_this2._config.offset(data.offsets)||{});return data;};}else{offsetConf.offset=this._config.offset;}var popperConfig={placement:this._getPlacement(),modifiers:{offset:offsetConf,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}// Disable Popper.js if we have a static display
};if(this._config.display==='static'){popperConfig.modifiers.applyStyle={enabled:false};}return popperConfig;};// Static
Dropdown._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$4);var _config=_typeof2(config)==='object'?config:null;if(!data){data=new Dropdown(this,_config);$(this).data(DATA_KEY$4,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};Dropdown._clearMenus=function _clearMenus(event){if(event&&(event.which===RIGHT_MOUSE_BUTTON_WHICH||event.type==='keyup'&&event.which!==TAB_KEYCODE)){return;}var toggles=[].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));for(var i=0,len=toggles.length;i<len;i++){var parent=Dropdown._getParentFromElement(toggles[i]);var context=$(toggles[i]).data(DATA_KEY$4);var relatedTarget={relatedTarget:toggles[i]};if(event&&event.type==='click'){relatedTarget.clickEvent=event;}if(!context){continue;}var dropdownMenu=context._menu;if(!$(parent).hasClass(ClassName$4.SHOW)){continue;}if(event&&(event.type==='click'&&/input|textarea/i.test(event.target.tagName)||event.type==='keyup'&&event.which===TAB_KEYCODE)&&$.contains(parent,event.target)){continue;}var hideEvent=$.Event(Event$4.HIDE,relatedTarget);$(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){continue;}// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if('ontouchstart'in document.documentElement){$(document.body).children().off('mouseover',null,$.noop);}toggles[i].setAttribute('aria-expanded','false');$(dropdownMenu).removeClass(ClassName$4.SHOW);$(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN,relatedTarget));}};Dropdown._getParentFromElement=function _getParentFromElement(element){var parent;var selector=Util.getSelectorFromElement(element);if(selector){parent=document.querySelector(selector);}return parent||element.parentNode;};// eslint-disable-next-line complexity
Dropdown._dataApiKeydownHandler=function _dataApiKeydownHandler(event){// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if(/input|textarea/i.test(event.target.tagName)?event.which===SPACE_KEYCODE||event.which!==ESCAPE_KEYCODE&&(event.which!==ARROW_DOWN_KEYCODE&&event.which!==ARROW_UP_KEYCODE||$(event.target).closest(Selector$4.MENU).length):!REGEXP_KEYDOWN.test(event.which)){return;}event.preventDefault();event.stopPropagation();if(this.disabled||$(this).hasClass(ClassName$4.DISABLED)){return;}var parent=Dropdown._getParentFromElement(this);var isActive=$(parent).hasClass(ClassName$4.SHOW);if(!isActive||isActive&&(event.which===ESCAPE_KEYCODE||event.which===SPACE_KEYCODE)){if(event.which===ESCAPE_KEYCODE){var toggle=parent.querySelector(Selector$4.DATA_TOGGLE);$(toggle).trigger('focus');}$(this).trigger('click');return;}var items=[].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));if(items.length===0){return;}var index=items.indexOf(event.target);if(event.which===ARROW_UP_KEYCODE&&index>0){// Up
index--;}if(event.which===ARROW_DOWN_KEYCODE&&index<items.length-1){// Down
index++;}if(index<0){index=0;}items[index].focus();};_createClass(Dropdown,null,[{key:"VERSION",get:function get(){return VERSION$4;}},{key:"Default",get:function get(){return Default$2;}},{key:"DefaultType",get:function get(){return DefaultType$2;}}]);return Dropdown;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event$4.KEYDOWN_DATA_API,Selector$4.DATA_TOGGLE,Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API,Selector$4.MENU,Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API+" "+Event$4.KEYUP_DATA_API,Dropdown._clearMenus).on(Event$4.CLICK_DATA_API,Selector$4.DATA_TOGGLE,function(event){event.preventDefault();event.stopPropagation();Dropdown._jQueryInterface.call($(this),'toggle');}).on(Event$4.CLICK_DATA_API,Selector$4.FORM_CHILD,function(e){e.stopPropagation();});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$4]=Dropdown._jQueryInterface;$.fn[NAME$4].Constructor=Dropdown;$.fn[NAME$4].noConflict=function(){$.fn[NAME$4]=JQUERY_NO_CONFLICT$4;return Dropdown._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$5='modal';var VERSION$5='4.2.1';var DATA_KEY$5='bs.modal';var EVENT_KEY$5="."+DATA_KEY$5;var DATA_API_KEY$5='.data-api';var JQUERY_NO_CONFLICT$5=$.fn[NAME$5];var ESCAPE_KEYCODE$1=27;// KeyboardEvent.which value for Escape (Esc) key
var Default$3={backdrop:true,keyboard:true,focus:true,show:true};var DefaultType$3={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean',show:'boolean'};var Event$5={HIDE:"hide"+EVENT_KEY$5,HIDDEN:"hidden"+EVENT_KEY$5,SHOW:"show"+EVENT_KEY$5,SHOWN:"shown"+EVENT_KEY$5,FOCUSIN:"focusin"+EVENT_KEY$5,RESIZE:"resize"+EVENT_KEY$5,CLICK_DISMISS:"click.dismiss"+EVENT_KEY$5,KEYDOWN_DISMISS:"keydown.dismiss"+EVENT_KEY$5,MOUSEUP_DISMISS:"mouseup.dismiss"+EVENT_KEY$5,MOUSEDOWN_DISMISS:"mousedown.dismiss"+EVENT_KEY$5,CLICK_DATA_API:"click"+EVENT_KEY$5+DATA_API_KEY$5};var ClassName$5={SCROLLBAR_MEASURER:'modal-scrollbar-measure',BACKDROP:'modal-backdrop',OPEN:'modal-open',FADE:'fade',SHOW:'show'};var Selector$5={DIALOG:'.modal-dialog',DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:'.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',STICKY_CONTENT:'.sticky-top'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Modal=/*#__PURE__*/function(){function Modal(element,config){this._config=this._getConfig(config);this._element=element;this._dialog=element.querySelector(Selector$5.DIALOG);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollbarWidth=0;}// Getters
var _proto=Modal.prototype;// Public
_proto.toggle=function toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget);};_proto.show=function show(relatedTarget){var _this=this;if(this._isShown||this._isTransitioning){return;}if($(this._element).hasClass(ClassName$5.FADE)){this._isTransitioning=true;}var showEvent=$.Event(Event$5.SHOW,{relatedTarget:relatedTarget});$(this._element).trigger(showEvent);if(this._isShown||showEvent.isDefaultPrevented()){return;}this._isShown=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();$(this._element).on(Event$5.CLICK_DISMISS,Selector$5.DATA_DISMISS,function(event){return _this.hide(event);});$(this._dialog).on(Event$5.MOUSEDOWN_DISMISS,function(){$(_this._element).one(Event$5.MOUSEUP_DISMISS,function(event){if($(event.target).is(_this._element)){_this._ignoreBackdropClick=true;}});});this._showBackdrop(function(){return _this._showElement(relatedTarget);});};_proto.hide=function hide(event){var _this2=this;if(event){event.preventDefault();}if(!this._isShown||this._isTransitioning){return;}var hideEvent=$.Event(Event$5.HIDE);$(this._element).trigger(hideEvent);if(!this._isShown||hideEvent.isDefaultPrevented()){return;}this._isShown=false;var transition=$(this._element).hasClass(ClassName$5.FADE);if(transition){this._isTransitioning=true;}this._setEscapeEvent();this._setResizeEvent();$(document).off(Event$5.FOCUSIN);$(this._element).removeClass(ClassName$5.SHOW);$(this._element).off(Event$5.CLICK_DISMISS);$(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,function(event){return _this2._hideModal(event);}).emulateTransitionEnd(transitionDuration);}else{this._hideModal();}};_proto.dispose=function dispose(){[window,this._element,this._dialog].forEach(function(htmlElement){return $(htmlElement).off(EVENT_KEY$5);});/**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */$(document).off(Event$5.FOCUSIN);$.removeData(this._element,DATA_KEY$5);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null;};_proto.handleUpdate=function handleUpdate(){this._adjustDialog();};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default$3,config);Util.typeCheckConfig(NAME$5,config,DefaultType$3);return config;};_proto._showElement=function _showElement(relatedTarget){var _this3=this;var transition=$(this._element).hasClass(ClassName$5.FADE);if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){// Don't move modal's DOM position
document.body.appendChild(this._element);}this._element.style.display='block';this._element.removeAttribute('aria-hidden');this._element.setAttribute('aria-modal',true);this._element.scrollTop=0;if(transition){Util.reflow(this._element);}$(this._element).addClass(ClassName$5.SHOW);if(this._config.focus){this._enforceFocus();}var shownEvent=$.Event(Event$5.SHOWN,{relatedTarget:relatedTarget});var transitionComplete=function transitionComplete(){if(_this3._config.focus){_this3._element.focus();}_this3._isTransitioning=false;$(_this3._element).trigger(shownEvent);};if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._dialog);$(this._dialog).one(Util.TRANSITION_END,transitionComplete).emulateTransitionEnd(transitionDuration);}else{transitionComplete();}};_proto._enforceFocus=function _enforceFocus(){var _this4=this;$(document).off(Event$5.FOCUSIN)// Guard against infinite focus loop
.on(Event$5.FOCUSIN,function(event){if(document!==event.target&&_this4._element!==event.target&&$(_this4._element).has(event.target).length===0){_this4._element.focus();}});};_proto._setEscapeEvent=function _setEscapeEvent(){var _this5=this;if(this._isShown&&this._config.keyboard){$(this._element).on(Event$5.KEYDOWN_DISMISS,function(event){if(event.which===ESCAPE_KEYCODE$1){event.preventDefault();_this5.hide();}});}else if(!this._isShown){$(this._element).off(Event$5.KEYDOWN_DISMISS);}};_proto._setResizeEvent=function _setResizeEvent(){var _this6=this;if(this._isShown){$(window).on(Event$5.RESIZE,function(event){return _this6.handleUpdate(event);});}else{$(window).off(Event$5.RESIZE);}};_proto._hideModal=function _hideModal(){var _this7=this;this._element.style.display='none';this._element.setAttribute('aria-hidden',true);this._element.removeAttribute('aria-modal');this._isTransitioning=false;this._showBackdrop(function(){$(document.body).removeClass(ClassName$5.OPEN);_this7._resetAdjustments();_this7._resetScrollbar();$(_this7._element).trigger(Event$5.HIDDEN);});};_proto._removeBackdrop=function _removeBackdrop(){if(this._backdrop){$(this._backdrop).remove();this._backdrop=null;}};_proto._showBackdrop=function _showBackdrop(callback){var _this8=this;var animate=$(this._element).hasClass(ClassName$5.FADE)?ClassName$5.FADE:'';if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement('div');this._backdrop.className=ClassName$5.BACKDROP;if(animate){this._backdrop.classList.add(animate);}$(this._backdrop).appendTo(document.body);$(this._element).on(Event$5.CLICK_DISMISS,function(event){if(_this8._ignoreBackdropClick){_this8._ignoreBackdropClick=false;return;}if(event.target!==event.currentTarget){return;}if(_this8._config.backdrop==='static'){_this8._element.focus();}else{_this8.hide();}});if(animate){Util.reflow(this._backdrop);}$(this._backdrop).addClass(ClassName$5.SHOW);if(!callback){return;}if(!animate){callback();return;}var backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$(this._backdrop).one(Util.TRANSITION_END,callback).emulateTransitionEnd(backdropTransitionDuration);}else if(!this._isShown&&this._backdrop){$(this._backdrop).removeClass(ClassName$5.SHOW);var callbackRemove=function callbackRemove(){_this8._removeBackdrop();if(callback){callback();}};if($(this._element).hasClass(ClassName$5.FADE)){var _backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$(this._backdrop).one(Util.TRANSITION_END,callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);}else{callbackRemove();}}else if(callback){callback();}};// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
_proto._adjustDialog=function _adjustDialog(){var isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&isModalOverflowing){this._element.style.paddingLeft=this._scrollbarWidth+"px";}if(this._isBodyOverflowing&&!isModalOverflowing){this._element.style.paddingRight=this._scrollbarWidth+"px";}};_proto._resetAdjustments=function _resetAdjustments(){this._element.style.paddingLeft='';this._element.style.paddingRight='';};_proto._checkScrollbar=function _checkScrollbar(){var rect=document.body.getBoundingClientRect();this._isBodyOverflowing=rect.left+rect.right<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth();};_proto._setScrollbar=function _setScrollbar(){var _this9=this;if(this._isBodyOverflowing){// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var fixedContent=[].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));var stickyContent=[].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT));// Adjust fixed content padding
$(fixedContent).each(function(index,element){var actualPadding=element.style.paddingRight;var calculatedPadding=$(element).css('padding-right');$(element).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+_this9._scrollbarWidth+"px");});// Adjust sticky content margin
$(stickyContent).each(function(index,element){var actualMargin=element.style.marginRight;var calculatedMargin=$(element).css('margin-right');$(element).data('margin-right',actualMargin).css('margin-right',parseFloat(calculatedMargin)-_this9._scrollbarWidth+"px");});// Adjust body padding
var actualPadding=document.body.style.paddingRight;var calculatedPadding=$(document.body).css('padding-right');$(document.body).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+this._scrollbarWidth+"px");}$(document.body).addClass(ClassName$5.OPEN);};_proto._resetScrollbar=function _resetScrollbar(){// Restore fixed content padding
var fixedContent=[].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));$(fixedContent).each(function(index,element){var padding=$(element).data('padding-right');$(element).removeData('padding-right');element.style.paddingRight=padding?padding:'';});// Restore sticky content
var elements=[].slice.call(document.querySelectorAll(""+Selector$5.STICKY_CONTENT));$(elements).each(function(index,element){var margin=$(element).data('margin-right');if(typeof margin!=='undefined'){$(element).css('margin-right',margin).removeData('margin-right');}});// Restore body padding
var padding=$(document.body).data('padding-right');$(document.body).removeData('padding-right');document.body.style.paddingRight=padding?padding:'';};_proto._getScrollbarWidth=function _getScrollbarWidth(){// thx d.walsh
var scrollDiv=document.createElement('div');scrollDiv.className=ClassName$5.SCROLLBAR_MEASURER;document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.getBoundingClientRect().width-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;};// Static
Modal._jQueryInterface=function _jQueryInterface(config,relatedTarget){return this.each(function(){var data=$(this).data(DATA_KEY$5);var _config=_objectSpread({},Default$3,$(this).data(),_typeof2(config)==='object'&&config?config:{});if(!data){data=new Modal(this,_config);$(this).data(DATA_KEY$5,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config](relatedTarget);}else if(_config.show){data.show(relatedTarget);}});};_createClass(Modal,null,[{key:"VERSION",get:function get(){return VERSION$5;}},{key:"Default",get:function get(){return Default$3;}}]);return Modal;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event$5.CLICK_DATA_API,Selector$5.DATA_TOGGLE,function(event){var _this10=this;var target;var selector=Util.getSelectorFromElement(this);if(selector){target=document.querySelector(selector);}var config=$(target).data(DATA_KEY$5)?'toggle':_objectSpread({},$(target).data(),$(this).data());if(this.tagName==='A'||this.tagName==='AREA'){event.preventDefault();}var $target=$(target).one(Event$5.SHOW,function(showEvent){if(showEvent.isDefaultPrevented()){// Only register focus restorer if modal will actually get shown
return;}$target.one(Event$5.HIDDEN,function(){if($(_this10).is(':visible')){_this10.focus();}});});Modal._jQueryInterface.call($(target),config,this);});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$5]=Modal._jQueryInterface;$.fn[NAME$5].Constructor=Modal;$.fn[NAME$5].noConflict=function(){$.fn[NAME$5]=JQUERY_NO_CONFLICT$5;return Modal._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$6='tooltip';var VERSION$6='4.2.1';var DATA_KEY$6='bs.tooltip';var EVENT_KEY$6="."+DATA_KEY$6;var JQUERY_NO_CONFLICT$6=$.fn[NAME$6];var CLASS_PREFIX='bs-tooltip';var BSCLS_PREFIX_REGEX=new RegExp("(^|\\s)"+CLASS_PREFIX+"\\S+",'g');var DefaultType$4={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'(number|string)',container:'(string|element|boolean)',fallbackPlacement:'(string|array)',boundary:'(string|element)'};var AttachmentMap$1={AUTO:'auto',TOP:'top',RIGHT:'right',BOTTOM:'bottom',LEFT:'left'};var Default$4={animation:true,template:'<div class="tooltip" role="tooltip">'+'<div class="arrow"></div>'+'<div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,selector:false,placement:'top',offset:0,container:false,fallbackPlacement:'flip',boundary:'scrollParent'};var HoverState={SHOW:'show',OUT:'out'};var Event$6={HIDE:"hide"+EVENT_KEY$6,HIDDEN:"hidden"+EVENT_KEY$6,SHOW:"show"+EVENT_KEY$6,SHOWN:"shown"+EVENT_KEY$6,INSERTED:"inserted"+EVENT_KEY$6,CLICK:"click"+EVENT_KEY$6,FOCUSIN:"focusin"+EVENT_KEY$6,FOCUSOUT:"focusout"+EVENT_KEY$6,MOUSEENTER:"mouseenter"+EVENT_KEY$6,MOUSELEAVE:"mouseleave"+EVENT_KEY$6};var ClassName$6={FADE:'fade',SHOW:'show'};var Selector$6={TOOLTIP:'.tooltip',TOOLTIP_INNER:'.tooltip-inner',ARROW:'.arrow'};var Trigger={HOVER:'hover',FOCUS:'focus',CLICK:'click',MANUAL:'manual'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Tooltip=/*#__PURE__*/function(){function Tooltip(element,config){/**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */if(typeof Popper==='undefined'){throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');}// private
this._isEnabled=true;this._timeout=0;this._hoverState='';this._activeTrigger={};this._popper=null;// Protected
this.element=element;this.config=this._getConfig(config);this.tip=null;this._setListeners();}// Getters
var _proto=Tooltip.prototype;// Public
_proto.enable=function enable(){this._isEnabled=true;};_proto.disable=function disable(){this._isEnabled=false;};_proto.toggleEnabled=function toggleEnabled(){this._isEnabled=!this._isEnabled;};_proto.toggle=function toggle(event){if(!this._isEnabled){return;}if(event){var dataKey=this.constructor.DATA_KEY;var context=$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}context._activeTrigger.click=!context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context);}else{context._leave(null,context);}}else{if($(this.getTipElement()).hasClass(ClassName$6.SHOW)){this._leave(null,this);return;}this._enter(null,this);}};_proto.dispose=function dispose(){clearTimeout(this._timeout);$.removeData(this.element,this.constructor.DATA_KEY);$(this.element).off(this.constructor.EVENT_KEY);$(this.element).closest('.modal').off('hide.bs.modal');if(this.tip){$(this.tip).remove();}this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper!==null){this._popper.destroy();}this._popper=null;this.element=null;this.config=null;this.tip=null;};_proto.show=function show(){var _this=this;if($(this.element).css('display')==='none'){throw new Error('Please use show on visible elements');}var showEvent=$.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){$(this.element).trigger(showEvent);var shadowRoot=Util.findShadowRoot(this.element);var isInTheDom=$.contains(shadowRoot!==null?shadowRoot:this.element.ownerDocument.documentElement,this.element);if(showEvent.isDefaultPrevented()||!isInTheDom){return;}var tip=this.getTipElement();var tipId=Util.getUID(this.constructor.NAME);tip.setAttribute('id',tipId);this.element.setAttribute('aria-describedby',tipId);this.setContent();if(this.config.animation){$(tip).addClass(ClassName$6.FADE);}var placement=typeof this.config.placement==='function'?this.config.placement.call(this,tip,this.element):this.config.placement;var attachment=this._getAttachment(placement);this.addAttachmentClass(attachment);var container=this._getContainer();$(tip).data(this.constructor.DATA_KEY,this);if(!$.contains(this.element.ownerDocument.documentElement,this.tip)){$(tip).appendTo(container);}$(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new Popper(this.element,tip,{placement:attachment,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Selector$6.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function onCreate(data){if(data.originalPlacement!==data.placement){_this._handlePopperPlacementChange(data);}},onUpdate:function onUpdate(data){return _this._handlePopperPlacementChange(data);}});$(tip).addClass(ClassName$6.SHOW);// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
if('ontouchstart'in document.documentElement){$(document.body).children().on('mouseover',null,$.noop);}var complete=function complete(){if(_this.config.animation){_this._fixTransition();}var prevHoverState=_this._hoverState;_this._hoverState=null;$(_this.element).trigger(_this.constructor.Event.SHOWN);if(prevHoverState===HoverState.OUT){_this._leave(null,_this);}};if($(this.tip).hasClass(ClassName$6.FADE)){var transitionDuration=Util.getTransitionDurationFromElement(this.tip);$(this.tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}}};_proto.hide=function hide(callback){var _this2=this;var tip=this.getTipElement();var hideEvent=$.Event(this.constructor.Event.HIDE);var complete=function complete(){if(_this2._hoverState!==HoverState.SHOW&&tip.parentNode){tip.parentNode.removeChild(tip);}_this2._cleanTipClass();_this2.element.removeAttribute('aria-describedby');$(_this2.element).trigger(_this2.constructor.Event.HIDDEN);if(_this2._popper!==null){_this2._popper.destroy();}if(callback){callback();}};$(this.element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}$(tip).removeClass(ClassName$6.SHOW);// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
if('ontouchstart'in document.documentElement){$(document.body).children().off('mouseover',null,$.noop);}this._activeTrigger[Trigger.CLICK]=false;this._activeTrigger[Trigger.FOCUS]=false;this._activeTrigger[Trigger.HOVER]=false;if($(this.tip).hasClass(ClassName$6.FADE)){var transitionDuration=Util.getTransitionDurationFromElement(tip);$(tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}this._hoverState='';};_proto.update=function update(){if(this._popper!==null){this._popper.scheduleUpdate();}};// Protected
_proto.isWithContent=function isWithContent(){return Boolean(this.getTitle());};_proto.addAttachmentClass=function addAttachmentClass(attachment){$(this.getTipElement()).addClass(CLASS_PREFIX+"-"+attachment);};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$(this.config.template)[0];return this.tip;};_proto.setContent=function setContent(){var tip=this.getTipElement();this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)),this.getTitle());$(tip).removeClass(ClassName$6.FADE+" "+ClassName$6.SHOW);};_proto.setElementContent=function setElementContent($element,content){var html=this.config.html;if(_typeof2(content)==='object'&&(content.nodeType||content.jquery)){// Content is a DOM node or a jQuery
if(html){if(!$(content).parent().is($element)){$element.empty().append(content);}}else{$element.text($(content).text());}}else{$element[html?'html':'text'](content);}};_proto.getTitle=function getTitle(){var title=this.element.getAttribute('data-original-title');if(!title){title=typeof this.config.title==='function'?this.config.title.call(this.element):this.config.title;}return title;};// Private
_proto._getContainer=function _getContainer(){if(this.config.container===false){return document.body;}if(Util.isElement(this.config.container)){return $(this.config.container);}return $(document).find(this.config.container);};_proto._getAttachment=function _getAttachment(placement){return AttachmentMap$1[placement.toUpperCase()];};_proto._setListeners=function _setListeners(){var _this3=this;var triggers=this.config.trigger.split(' ');triggers.forEach(function(trigger){if(trigger==='click'){$(_this3.element).on(_this3.constructor.Event.CLICK,_this3.config.selector,function(event){return _this3.toggle(event);});}else if(trigger!==Trigger.MANUAL){var eventIn=trigger===Trigger.HOVER?_this3.constructor.Event.MOUSEENTER:_this3.constructor.Event.FOCUSIN;var eventOut=trigger===Trigger.HOVER?_this3.constructor.Event.MOUSELEAVE:_this3.constructor.Event.FOCUSOUT;$(_this3.element).on(eventIn,_this3.config.selector,function(event){return _this3._enter(event);}).on(eventOut,_this3.config.selector,function(event){return _this3._leave(event);});}});$(this.element).closest('.modal').on('hide.bs.modal',function(){if(_this3.element){_this3.hide();}});if(this.config.selector){this.config=_objectSpread({},this.config,{trigger:'manual',selector:''});}else{this._fixTitle();}};_proto._fixTitle=function _fixTitle(){var titleType=_typeof2(this.element.getAttribute('data-original-title'));if(this.element.getAttribute('title')||titleType!=='string'){this.element.setAttribute('data-original-title',this.element.getAttribute('title')||'');this.element.setAttribute('title','');}};_proto._enter=function _enter(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type==='focusin'?Trigger.FOCUS:Trigger.HOVER]=true;}if($(context.getTipElement()).hasClass(ClassName$6.SHOW)||context._hoverState===HoverState.SHOW){context._hoverState=HoverState.SHOW;return;}clearTimeout(context._timeout);context._hoverState=HoverState.SHOW;if(!context.config.delay||!context.config.delay.show){context.show();return;}context._timeout=setTimeout(function(){if(context._hoverState===HoverState.SHOW){context.show();}},context.config.delay.show);};_proto._leave=function _leave(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type==='focusout'?Trigger.FOCUS:Trigger.HOVER]=false;}if(context._isWithActiveTrigger()){return;}clearTimeout(context._timeout);context._hoverState=HoverState.OUT;if(!context.config.delay||!context.config.delay.hide){context.hide();return;}context._timeout=setTimeout(function(){if(context._hoverState===HoverState.OUT){context.hide();}},context.config.delay.hide);};_proto._isWithActiveTrigger=function _isWithActiveTrigger(){for(var trigger in this._activeTrigger){if(this._activeTrigger[trigger]){return true;}}return false;};_proto._getConfig=function _getConfig(config){config=_objectSpread({},this.constructor.Default,$(this.element).data(),_typeof2(config)==='object'&&config?config:{});if(typeof config.delay==='number'){config.delay={show:config.delay,hide:config.delay};}if(typeof config.title==='number'){config.title=config.title.toString();}if(typeof config.content==='number'){config.content=config.content.toString();}Util.typeCheckConfig(NAME$6,config,this.constructor.DefaultType);return config;};_proto._getDelegateConfig=function _getDelegateConfig(){var config={};if(this.config){for(var key in this.config){if(this.constructor.Default[key]!==this.config[key]){config[key]=this.config[key];}}}return config;};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX);if(tabClass!==null&&tabClass.length){$tip.removeClass(tabClass.join(''));}};_proto._handlePopperPlacementChange=function _handlePopperPlacementChange(popperData){var popperInstance=popperData.instance;this.tip=popperInstance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(popperData.placement));};_proto._fixTransition=function _fixTransition(){var tip=this.getTipElement();var initConfigAnimation=this.config.animation;if(tip.getAttribute('x-placement')!==null){return;}$(tip).removeClass(ClassName$6.FADE);this.config.animation=false;this.hide();this.show();this.config.animation=initConfigAnimation;};// Static
Tooltip._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$6);var _config=_typeof2(config)==='object'&&config;if(!data&&/dispose|hide/.test(config)){return;}if(!data){data=new Tooltip(this,_config);$(this).data(DATA_KEY$6,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Tooltip,null,[{key:"VERSION",get:function get(){return VERSION$6;}},{key:"Default",get:function get(){return Default$4;}},{key:"NAME",get:function get(){return NAME$6;}},{key:"DATA_KEY",get:function get(){return DATA_KEY$6;}},{key:"Event",get:function get(){return Event$6;}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY$6;}},{key:"DefaultType",get:function get(){return DefaultType$4;}}]);return Tooltip;}();/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$6]=Tooltip._jQueryInterface;$.fn[NAME$6].Constructor=Tooltip;$.fn[NAME$6].noConflict=function(){$.fn[NAME$6]=JQUERY_NO_CONFLICT$6;return Tooltip._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$7='popover';var VERSION$7='4.2.1';var DATA_KEY$7='bs.popover';var EVENT_KEY$7="."+DATA_KEY$7;var JQUERY_NO_CONFLICT$7=$.fn[NAME$7];var CLASS_PREFIX$1='bs-popover';var BSCLS_PREFIX_REGEX$1=new RegExp("(^|\\s)"+CLASS_PREFIX$1+"\\S+",'g');var Default$5=_objectSpread({},Tooltip.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip">'+'<div class="arrow"></div>'+'<h3 class="popover-header"></h3>'+'<div class="popover-body"></div></div>'});var DefaultType$5=_objectSpread({},Tooltip.DefaultType,{content:'(string|element|function)'});var ClassName$7={FADE:'fade',SHOW:'show'};var Selector$7={TITLE:'.popover-header',CONTENT:'.popover-body'};var Event$7={HIDE:"hide"+EVENT_KEY$7,HIDDEN:"hidden"+EVENT_KEY$7,SHOW:"show"+EVENT_KEY$7,SHOWN:"shown"+EVENT_KEY$7,INSERTED:"inserted"+EVENT_KEY$7,CLICK:"click"+EVENT_KEY$7,FOCUSIN:"focusin"+EVENT_KEY$7,FOCUSOUT:"focusout"+EVENT_KEY$7,MOUSEENTER:"mouseenter"+EVENT_KEY$7,MOUSELEAVE:"mouseleave"+EVENT_KEY$7/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Popover=/*#__PURE__*/function(_Tooltip){_inheritsLoose(Popover,_Tooltip);function Popover(){return _Tooltip.apply(this,arguments)||this;}var _proto=Popover.prototype;// Overrides
_proto.isWithContent=function isWithContent(){return this.getTitle()||this._getContent();};_proto.addAttachmentClass=function addAttachmentClass(attachment){$(this.getTipElement()).addClass(CLASS_PREFIX$1+"-"+attachment);};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$(this.config.template)[0];return this.tip;};_proto.setContent=function setContent(){var $tip=$(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent($tip.find(Selector$7.TITLE),this.getTitle());var content=this._getContent();if(typeof content==='function'){content=content.call(this.element);}this.setElementContent($tip.find(Selector$7.CONTENT),content);$tip.removeClass(ClassName$7.FADE+" "+ClassName$7.SHOW);};// Private
_proto._getContent=function _getContent(){return this.element.getAttribute('data-content')||this.config.content;};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX$1);if(tabClass!==null&&tabClass.length>0){$tip.removeClass(tabClass.join(''));}};// Static
Popover._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$7);var _config=_typeof2(config)==='object'?config:null;if(!data&&/dispose|hide/.test(config)){return;}if(!data){data=new Popover(this,_config);$(this).data(DATA_KEY$7,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Popover,null,[{key:"VERSION",// Getters
get:function get(){return VERSION$7;}},{key:"Default",get:function get(){return Default$5;}},{key:"NAME",get:function get(){return NAME$7;}},{key:"DATA_KEY",get:function get(){return DATA_KEY$7;}},{key:"Event",get:function get(){return Event$7;}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY$7;}},{key:"DefaultType",get:function get(){return DefaultType$5;}}]);return Popover;}(Tooltip);/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$7]=Popover._jQueryInterface;$.fn[NAME$7].Constructor=Popover;$.fn[NAME$7].noConflict=function(){$.fn[NAME$7]=JQUERY_NO_CONFLICT$7;return Popover._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$8='scrollspy';var VERSION$8='4.2.1';var DATA_KEY$8='bs.scrollspy';var EVENT_KEY$8="."+DATA_KEY$8;var DATA_API_KEY$6='.data-api';var JQUERY_NO_CONFLICT$8=$.fn[NAME$8];var Default$6={offset:10,method:'auto',target:''};var DefaultType$6={offset:'number',method:'string',target:'(string|element)'};var Event$8={ACTIVATE:"activate"+EVENT_KEY$8,SCROLL:"scroll"+EVENT_KEY$8,LOAD_DATA_API:"load"+EVENT_KEY$8+DATA_API_KEY$6};var ClassName$8={DROPDOWN_ITEM:'dropdown-item',DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active'};var Selector$8={DATA_SPY:'[data-spy="scroll"]',ACTIVE:'.active',NAV_LIST_GROUP:'.nav, .list-group',NAV_LINKS:'.nav-link',NAV_ITEMS:'.nav-item',LIST_ITEMS:'.list-group-item',DROPDOWN:'.dropdown',DROPDOWN_ITEMS:'.dropdown-item',DROPDOWN_TOGGLE:'.dropdown-toggle'};var OffsetMethod={OFFSET:'offset',POSITION:'position'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var ScrollSpy=/*#__PURE__*/function(){function ScrollSpy(element,config){var _this=this;this._element=element;this._scrollElement=element.tagName==='BODY'?window:element;this._config=this._getConfig(config);this._selector=this._config.target+" "+Selector$8.NAV_LINKS+","+(this._config.target+" "+Selector$8.LIST_ITEMS+",")+(this._config.target+" "+Selector$8.DROPDOWN_ITEMS);this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;$(this._scrollElement).on(Event$8.SCROLL,function(event){return _this._process(event);});this.refresh();this._process();}// Getters
var _proto=ScrollSpy.prototype;// Public
_proto.refresh=function refresh(){var _this2=this;var autoMethod=this._scrollElement===this._scrollElement.window?OffsetMethod.OFFSET:OffsetMethod.POSITION;var offsetMethod=this._config.method==='auto'?autoMethod:this._config.method;var offsetBase=offsetMethod===OffsetMethod.POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();var targets=[].slice.call(document.querySelectorAll(this._selector));targets.map(function(element){var target;var targetSelector=Util.getSelectorFromElement(element);if(targetSelector){target=document.querySelector(targetSelector);}if(target){var targetBCR=target.getBoundingClientRect();if(targetBCR.width||targetBCR.height){// TODO (fat): remove sketch reliance on jQuery position/offset
return[$(target)[offsetMethod]().top+offsetBase,targetSelector];}}return null;}).filter(function(item){return item;}).sort(function(a,b){return a[0]-b[0];}).forEach(function(item){_this2._offsets.push(item[0]);_this2._targets.push(item[1]);});};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$8);$(this._scrollElement).off(EVENT_KEY$8);this._element=null;this._scrollElement=null;this._config=null;this._selector=null;this._offsets=null;this._targets=null;this._activeTarget=null;this._scrollHeight=null;};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default$6,_typeof2(config)==='object'&&config?config:{});if(typeof config.target!=='string'){var id=$(config.target).attr('id');if(!id){id=Util.getUID(NAME$8);$(config.target).attr('id',id);}config.target="#"+id;}Util.typeCheckConfig(NAME$8,config,DefaultType$6);return config;};_proto._getScrollTop=function _getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;};_proto._getScrollHeight=function _getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);};_proto._getOffsetHeight=function _getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height;};_proto._process=function _process(){var scrollTop=this._getScrollTop()+this._config.offset;var scrollHeight=this._getScrollHeight();var maxScroll=this._config.offset+scrollHeight-this._getOffsetHeight();if(this._scrollHeight!==scrollHeight){this.refresh();}if(scrollTop>=maxScroll){var target=this._targets[this._targets.length-1];if(this._activeTarget!==target){this._activate(target);}return;}if(this._activeTarget&&scrollTop<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return;}var offsetLength=this._offsets.length;for(var i=offsetLength;i--;){var isActiveTarget=this._activeTarget!==this._targets[i]&&scrollTop>=this._offsets[i]&&(typeof this._offsets[i+1]==='undefined'||scrollTop<this._offsets[i+1]);if(isActiveTarget){this._activate(this._targets[i]);}}};_proto._activate=function _activate(target){this._activeTarget=target;this._clear();var queries=this._selector.split(',').map(function(selector){return selector+"[data-target=\""+target+"\"],"+selector+"[href=\""+target+"\"]";});var $link=$([].slice.call(document.querySelectorAll(queries.join(','))));if($link.hasClass(ClassName$8.DROPDOWN_ITEM)){$link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);$link.addClass(ClassName$8.ACTIVE);}else{// Set triggered link as active
$link.addClass(ClassName$8.ACTIVE);// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
$link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS+", "+Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE);// Handle special case when .nav-link is inside .nav-item
$link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);}$(this._scrollElement).trigger(Event$8.ACTIVATE,{relatedTarget:target});};_proto._clear=function _clear(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(node){return node.classList.contains(ClassName$8.ACTIVE);}).forEach(function(node){return node.classList.remove(ClassName$8.ACTIVE);});};// Static
ScrollSpy._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$8);var _config=_typeof2(config)==='object'&&config;if(!data){data=new ScrollSpy(this,_config);$(this).data(DATA_KEY$8,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(ScrollSpy,null,[{key:"VERSION",get:function get(){return VERSION$8;}},{key:"Default",get:function get(){return Default$6;}}]);return ScrollSpy;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(window).on(Event$8.LOAD_DATA_API,function(){var scrollSpys=[].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));var scrollSpysLength=scrollSpys.length;for(var i=scrollSpysLength;i--;){var $spy=$(scrollSpys[i]);ScrollSpy._jQueryInterface.call($spy,$spy.data());}});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$8]=ScrollSpy._jQueryInterface;$.fn[NAME$8].Constructor=ScrollSpy;$.fn[NAME$8].noConflict=function(){$.fn[NAME$8]=JQUERY_NO_CONFLICT$8;return ScrollSpy._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$9='tab';var VERSION$9='4.2.1';var DATA_KEY$9='bs.tab';var EVENT_KEY$9="."+DATA_KEY$9;var DATA_API_KEY$7='.data-api';var JQUERY_NO_CONFLICT$9=$.fn[NAME$9];var Event$9={HIDE:"hide"+EVENT_KEY$9,HIDDEN:"hidden"+EVENT_KEY$9,SHOW:"show"+EVENT_KEY$9,SHOWN:"shown"+EVENT_KEY$9,CLICK_DATA_API:"click"+EVENT_KEY$9+DATA_API_KEY$7};var ClassName$9={DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active',DISABLED:'disabled',FADE:'fade',SHOW:'show'};var Selector$9={DROPDOWN:'.dropdown',NAV_LIST_GROUP:'.nav, .list-group',ACTIVE:'.active',ACTIVE_UL:'> li > .active',DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:'.dropdown-toggle',DROPDOWN_ACTIVE_CHILD:'> .dropdown-menu .active'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Tab=/*#__PURE__*/function(){function Tab(element){this._element=element;}// Getters
var _proto=Tab.prototype;// Public
_proto.show=function show(){var _this=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&$(this._element).hasClass(ClassName$9.ACTIVE)||$(this._element).hasClass(ClassName$9.DISABLED)){return;}var target;var previous;var listElement=$(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];var selector=Util.getSelectorFromElement(this._element);if(listElement){var itemSelector=listElement.nodeName==='UL'||listElement.nodeName==='OL'?Selector$9.ACTIVE_UL:Selector$9.ACTIVE;previous=$.makeArray($(listElement).find(itemSelector));previous=previous[previous.length-1];}var hideEvent=$.Event(Event$9.HIDE,{relatedTarget:this._element});var showEvent=$.Event(Event$9.SHOW,{relatedTarget:previous});if(previous){$(previous).trigger(hideEvent);}$(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented()){return;}if(selector){target=document.querySelector(selector);}this._activate(this._element,listElement);var complete=function complete(){var hiddenEvent=$.Event(Event$9.HIDDEN,{relatedTarget:_this._element});var shownEvent=$.Event(Event$9.SHOWN,{relatedTarget:previous});$(previous).trigger(hiddenEvent);$(_this._element).trigger(shownEvent);};if(target){this._activate(target,target.parentNode,complete);}else{complete();}};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$9);this._element=null;};// Private
_proto._activate=function _activate(element,container,callback){var _this2=this;var activeElements=container&&(container.nodeName==='UL'||container.nodeName==='OL')?$(container).find(Selector$9.ACTIVE_UL):$(container).children(Selector$9.ACTIVE);var active=activeElements[0];var isTransitioning=callback&&active&&$(active).hasClass(ClassName$9.FADE);var complete=function complete(){return _this2._transitionComplete(element,active,callback);};if(active&&isTransitioning){var transitionDuration=Util.getTransitionDurationFromElement(active);$(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}};_proto._transitionComplete=function _transitionComplete(element,active,callback){if(active){$(active).removeClass(ClassName$9.ACTIVE);var dropdownChild=$(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];if(dropdownChild){$(dropdownChild).removeClass(ClassName$9.ACTIVE);}if(active.getAttribute('role')==='tab'){active.setAttribute('aria-selected',false);}}$(element).addClass(ClassName$9.ACTIVE);if(element.getAttribute('role')==='tab'){element.setAttribute('aria-selected',true);}Util.reflow(element);$(element).addClass(ClassName$9.SHOW);if(element.parentNode&&$(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)){var dropdownElement=$(element).closest(Selector$9.DROPDOWN)[0];if(dropdownElement){var dropdownToggleList=[].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));$(dropdownToggleList).addClass(ClassName$9.ACTIVE);}element.setAttribute('aria-expanded',true);}if(callback){callback();}};// Static
Tab._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY$9);if(!data){data=new Tab(this);$this.data(DATA_KEY$9,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config]();}});};_createClass(Tab,null,[{key:"VERSION",get:function get(){return VERSION$9;}}]);return Tab;}();/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event$9.CLICK_DATA_API,Selector$9.DATA_TOGGLE,function(event){event.preventDefault();Tab._jQueryInterface.call($(this),'show');});/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$9]=Tab._jQueryInterface;$.fn[NAME$9].Constructor=Tab;$.fn[NAME$9].noConflict=function(){$.fn[NAME$9]=JQUERY_NO_CONFLICT$9;return Tab._jQueryInterface;};/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME$a='toast';var VERSION$a='4.2.1';var DATA_KEY$a='bs.toast';var EVENT_KEY$a="."+DATA_KEY$a;var JQUERY_NO_CONFLICT$a=$.fn[NAME$a];var Event$a={CLICK_DISMISS:"click.dismiss"+EVENT_KEY$a,HIDE:"hide"+EVENT_KEY$a,HIDDEN:"hidden"+EVENT_KEY$a,SHOW:"show"+EVENT_KEY$a,SHOWN:"shown"+EVENT_KEY$a};var ClassName$a={FADE:'fade',HIDE:'hide',SHOW:'show',SHOWING:'showing'};var DefaultType$7={animation:'boolean',autohide:'boolean',delay:'number'};var Default$7={animation:true,autohide:true,delay:500};var Selector$a={DATA_DISMISS:'[data-dismiss="toast"]'/**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */};var Toast=/*#__PURE__*/function(){function Toast(element,config){this._element=element;this._config=this._getConfig(config);this._timeout=null;this._setListeners();}// Getters
var _proto=Toast.prototype;// Public
_proto.show=function show(){var _this=this;$(this._element).trigger(Event$a.SHOW);if(this._config.animation){this._element.classList.add(ClassName$a.FADE);}var complete=function complete(){_this._element.classList.remove(ClassName$a.SHOWING);_this._element.classList.add(ClassName$a.SHOW);$(_this._element).trigger(Event$a.SHOWN);if(_this._config.autohide){_this.hide();}};this._element.classList.remove(ClassName$a.HIDE);this._element.classList.add(ClassName$a.SHOWING);if(this._config.animation){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}};_proto.hide=function hide(withoutTimeout){var _this2=this;if(!this._element.classList.contains(ClassName$a.SHOW)){return;}$(this._element).trigger(Event$a.HIDE);if(withoutTimeout){this._close();}else{this._timeout=setTimeout(function(){_this2._close();},this._config.delay);}};_proto.dispose=function dispose(){clearTimeout(this._timeout);this._timeout=null;if(this._element.classList.contains(ClassName$a.SHOW)){this._element.classList.remove(ClassName$a.SHOW);}$(this._element).off(Event$a.CLICK_DISMISS);$.removeData(this._element,DATA_KEY$a);this._element=null;this._config=null;};// Private
_proto._getConfig=function _getConfig(config){config=_objectSpread({},Default$7,$(this._element).data(),_typeof2(config)==='object'&&config?config:{});Util.typeCheckConfig(NAME$a,config,this.constructor.DefaultType);return config;};_proto._setListeners=function _setListeners(){var _this3=this;$(this._element).on(Event$a.CLICK_DISMISS,Selector$a.DATA_DISMISS,function(){return _this3.hide(true);});};_proto._close=function _close(){var _this4=this;var complete=function complete(){_this4._element.classList.add(ClassName$a.HIDE);$(_this4._element).trigger(Event$a.HIDDEN);};this._element.classList.remove(ClassName$a.SHOW);if(this._config.animation){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}};// Static
Toast._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $element=$(this);var data=$element.data(DATA_KEY$a);var _config=_typeof2(config)==='object'&&config;if(!data){data=new Toast(this,_config);$element.data(DATA_KEY$a,data);}if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}data[config](this);}});};_createClass(Toast,null,[{key:"VERSION",get:function get(){return VERSION$a;}},{key:"DefaultType",get:function get(){return DefaultType$7;}}]);return Toast;}();/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME$a]=Toast._jQueryInterface;$.fn[NAME$a].Constructor=Toast;$.fn[NAME$a].noConflict=function(){$.fn[NAME$a]=JQUERY_NO_CONFLICT$a;return Toast._jQueryInterface;};/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.2.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */(function(){if(typeof $==='undefined'){throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');}var version=$.fn.jquery.split(' ')[0].split('.');var minMajor=1;var ltMajor=2;var minMinor=9;var minPatch=1;var maxMajor=4;if(version[0]<ltMajor&&version[1]<minMinor||version[0]===minMajor&&version[1]===minMinor&&version[2]<minPatch||version[0]>=maxMajor){throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');}})();exports.Util=Util;exports.Alert=Alert;exports.Button=Button;exports.Carousel=Carousel;exports.Collapse=Collapse;exports.Dropdown=Dropdown;exports.Modal=Modal;exports.Popover=Popover;exports.Scrollspy=ScrollSpy;exports.Tab=Tab;exports.Toast=Toast;exports.Tooltip=Tooltip;Object.defineProperty(exports,'__esModule',{value:true});});/***/},/* 7 */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* WEBPACK VAR INJECTION */(function(global){/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined';var longerTimeoutBrowsers=['Edge','Trident','Firefox'];var timeoutDuration=0;for(var i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){timeoutDuration=1;break;}}function microtaskDebounce(fn){var called=false;return function(){if(called){return;}called=true;window.Promise.resolve().then(function(){called=false;fn();});};}function taskDebounce(fn){var scheduled=false;return function(){if(!scheduled){scheduled=true;setTimeout(function(){scheduled=false;fn();},timeoutDuration);}};}var supportsMicroTasks=isBrowser&&window.Promise;/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/var debounce=supportsMicroTasks?microtaskDebounce:taskDebounce;/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]';}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function getStyleComputedProperty(element,property){if(element.nodeType!==1){return[];}// NOTE: 1 DOM access here
var window=element.ownerDocument.defaultView;var css=window.getComputedStyle(element,null);return property?css[property]:css;}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function getParentNode(element){if(element.nodeName==='HTML'){return element;}return element.parentNode||element.host;}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function getScrollParent(element){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!element){return document.body;}switch(element.nodeName){case'HTML':case'BODY':return element.ownerDocument.body;case'#document':return element.body;}// Firefox want us to check `-x` and `-y` variations as well
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll|overlay)/.test(overflow+overflowY+overflowX)){return element;}return getScrollParent(getParentNode(element));}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode);var isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function isIE(version){if(version===11){return isIE11;}if(version===10){return isIE10;}return isIE11||isIE10;}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function getOffsetParent(element){if(!element){return document.documentElement;}var noOffsetParent=isIE(10)?document.body:null;// NOTE: 1 DOM access here
var offsetParent=element.offsetParent||null;// Skip hidden elements which don't have an offsetParent
while(offsetParent===noOffsetParent&&element.nextElementSibling){offsetParent=(element=element.nextElementSibling).offsetParent;}var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||nodeName==='BODY'||nodeName==='HTML'){return element?element.ownerDocument.documentElement:document.documentElement;}// .offsetParent will return the closest TH, TD or TABLE in case
// no offsetParent is present, I hate this job...
if(['TH','TD','TABLE'].indexOf(offsetParent.nodeName)!==-1&&getStyleComputedProperty(offsetParent,'position')==='static'){return getOffsetParent(offsetParent);}return offsetParent;}function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName==='BODY'){return false;}return nodeName==='HTML'||getOffsetParent(element.firstElementChild)===element;}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function getRoot(node){if(node.parentNode!==null){return getRoot(node.parentNode);}return node;}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function findCommonOffsetParent(element1,element2){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement;}// Here we make sure to give as "start" the element that comes first in the DOM
var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING;var start=order?element1:element2;var end=order?element2:element1;// Get common ancestor container
var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;// Both nodes are inside #document
if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer;}return getOffsetParent(commonAncestorContainer);}// one of the nodes is inside shadowDOM, find which one
var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2);}else{return findCommonOffsetParent(element1,getRoot(element2).host);}}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function getScroll(element){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'top';var upperSide=side==='top'?'scrollTop':'scrollLeft';var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){var html=element.ownerDocument.documentElement;var scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide];}return element[upperSide];}/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function includeScroll(rect,element){var subtract=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');var modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect;}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function getBordersSize(styles,axis){var sideA=axis==='x'?'Left':'Top';var sideB=sideA==='Left'?'Right':'Bottom';return parseFloat(styles['border'+sideA+'Width'],10)+parseFloat(styles['border'+sideB+'Width'],10);}function getSize(axis,body,html,computedStyle){return Math.max(body['offset'+axis],body['scroll'+axis],html['client'+axis],html['offset'+axis],html['scroll'+axis],isIE(10)?parseInt(html['offset'+axis])+parseInt(computedStyle['margin'+(axis==='Height'?'Top':'Left')])+parseInt(computedStyle['margin'+(axis==='Height'?'Bottom':'Right')]):0);}function getWindowSizes(document){var body=document.body;var html=document.documentElement;var computedStyle=isIE(10)&&getComputedStyle(html);return{height:getSize('Height',body,html,computedStyle),width:getSize('Width',body,html,computedStyle)};}var classCallCheck=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var defineProperty=function defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function getClientRect(offsets){return _extends({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height});}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function getBoundingClientRect(element){var rect={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(isIE(10)){rect=element.getBoundingClientRect();var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft;}else{rect=element.getBoundingClientRect();}}catch(e){}var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top};// subtract scrollbar size from sizes
var sizes=element.nodeName==='HTML'?getWindowSizes(element.ownerDocument):{};var width=sizes.width||element.clientWidth||result.right-result.left;var height=sizes.height||element.clientHeight||result.bottom-result.top;var horizScrollbar=element.offsetWidth-width;var vertScrollbar=element.offsetHeight-height;// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(horizScrollbar||vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,'x');vertScrollbar-=getBordersSize(styles,'y');result.width-=horizScrollbar;result.height-=vertScrollbar;}return getClientRect(result);}function getOffsetRectRelativeToArbitraryNode(children,parent){var fixedPosition=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isIE10=isIE(10);var isHTML=parent.nodeName==='HTML';var childrenRect=getBoundingClientRect(children);var parentRect=getBoundingClientRect(parent);var scrollParent=getScrollParent(children);var styles=getStyleComputedProperty(parent);var borderTopWidth=parseFloat(styles.borderTopWidth,10);var borderLeftWidth=parseFloat(styles.borderLeftWidth,10);// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(fixedPosition&&isHTML){parentRect.top=Math.max(parentRect.top,0);parentRect.left=Math.max(parentRect.left,0);}var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!isIE10&&isHTML){var marginTop=parseFloat(styles.marginTop,10);var marginLeft=parseFloat(styles.marginLeft,10);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;// Attach marginTop and marginLeft because in some circumstances we may need them
offsets.marginTop=marginTop;offsets.marginLeft=marginLeft;}if(isIE10&&!fixedPosition?parent.contains(scrollParent):parent===scrollParent&&scrollParent.nodeName!=='BODY'){offsets=includeScroll(offsets,parent);}return offsets;}function getViewportOffsetRectRelativeToArtbitraryNode(element){var excludeScroll=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var html=element.ownerDocument.documentElement;var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);var width=Math.max(html.clientWidth,window.innerWidth||0);var height=Math.max(html.clientHeight,window.innerHeight||0);var scrollTop=!excludeScroll?getScroll(html):0;var scrollLeft=!excludeScroll?getScroll(html,'left'):0;var offset={top:scrollTop-relativeOffset.top+relativeOffset.marginTop,left:scrollLeft-relativeOffset.left+relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset);}/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function isFixed(element){var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){return false;}if(getStyleComputedProperty(element,'position')==='fixed'){return true;}return isFixed(getParentNode(element));}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function getFixedPositionOffsetParent(element){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element||!element.parentElement||isIE()){return document.documentElement;}var el=element.parentElement;while(el&&getStyleComputedProperty(el,'transform')==='none'){el=el.parentElement;}return el||document.documentElement;}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function getBoundaries(popper,reference,padding,boundariesElement){var fixedPosition=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;// NOTE: 1 DOM access here
var boundaries={top:0,left:0};var offsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);// Handle viewport case
if(boundariesElement==='viewport'){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent,fixedPosition);}else{// Handle other cases based on DOM element used as boundaries
var boundariesNode=void 0;if(boundariesElement==='scrollParent'){boundariesNode=getScrollParent(getParentNode(reference));if(boundariesNode.nodeName==='BODY'){boundariesNode=popper.ownerDocument.documentElement;}}else if(boundariesElement==='window'){boundariesNode=popper.ownerDocument.documentElement;}else{boundariesNode=boundariesElement;}var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent,fixedPosition);// In case of HTML, we need a different computation
if(boundariesNode.nodeName==='HTML'&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(popper.ownerDocument),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=height+offsets.top;boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=width+offsets.left;}else{// for all the other DOM elements, this one is good
boundaries=offsets;}}// Add paddings
padding=padding||0;var isPaddingNumber=typeof padding==='number';boundaries.left+=isPaddingNumber?padding:padding.left||0;boundaries.top+=isPaddingNumber?padding:padding.top||0;boundaries.right-=isPaddingNumber?padding:padding.right||0;boundaries.bottom-=isPaddingNumber?padding:padding.bottom||0;return boundaries;}function getArea(_ref){var width=_ref.width,height=_ref.height;return width*height;}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(placement.indexOf('auto')===-1){return placement;}var boundaries=getBoundaries(popper,reference,padding,boundariesElement);var rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}};var sortedAreas=Object.keys(rects).map(function(key){return _extends({key:key},rects[key],{area:getArea(rects[key])});}).sort(function(a,b){return b.area-a.area;});var filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width>=popper.clientWidth&&height>=popper.clientHeight;});var computedPlacement=filteredAreas.length>0?filteredAreas[0].key:sortedAreas[0].key;var variation=placement.split('-')[1];return computedPlacement+(variation?'-'+variation:'');}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function getReferenceOffsets(state,popper,reference){var fixedPosition=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var commonOffsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent,fixedPosition);}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function getOuterSizes(element){var window=element.ownerDocument.defaultView;var styles=window.getComputedStyle(element);var x=parseFloat(styles.marginTop||0)+parseFloat(styles.marginBottom||0);var y=parseFloat(styles.marginLeft||0)+parseFloat(styles.marginRight||0);var result={width:element.offsetWidth+y,height:element.offsetHeight+x};return result;}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function getOppositePlacement(placement){var hash={left:'right',right:'left',bottom:'top',top:'bottom'};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched];});}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function getPopperOffsets(popper,referenceOffsets,placement){placement=placement.split('-')[0];// Get popper node sizes
var popperRect=getOuterSizes(popper);// Add position, width and height to our offsets object
var popperOffsets={width:popperRect.width,height:popperRect.height};// depending by the popper placement we have to compute its offsets slightly differently
var isHoriz=['right','left'].indexOf(placement)!==-1;var mainSide=isHoriz?'top':'left';var secondarySide=isHoriz?'left':'top';var measurement=isHoriz?'height':'width';var secondaryMeasurement=!isHoriz?'height':'width';popperOffsets[mainSide]=referenceOffsets[mainSide]+referenceOffsets[measurement]/2-popperRect[measurement]/2;if(placement===secondarySide){popperOffsets[secondarySide]=referenceOffsets[secondarySide]-popperRect[secondaryMeasurement];}else{popperOffsets[secondarySide]=referenceOffsets[getOppositePlacement(secondarySide)];}return popperOffsets;}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function find(arr,check){// use native find if supported
if(Array.prototype.find){return arr.find(check);}// use `filter` to obtain the same behavior of `find`
return arr.filter(check)[0];}/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function findIndex(arr,prop,value){// use native findIndex if supported
if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop]===value;});}// use `find` + `indexOf` if `findIndex` isn't supported
var match=find(arr,function(obj){return obj[prop]===value;});return arr.indexOf(match);}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function runModifiers(modifiers,data,ends){var modifiersToRun=ends===undefined?modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends));modifiersToRun.forEach(function(modifier){if(modifier['function']){// eslint-disable-line dot-notation
console.warn('`modifier.function` is deprecated, use `modifier.fn`!');}var fn=modifier['function']||modifier.fn;// eslint-disable-line dot-notation
if(modifier.enabled&&isFunction(fn)){// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
data.offsets.popper=getClientRect(data.offsets.popper);data.offsets.reference=getClientRect(data.offsets.reference);data=fn(data,modifier);}});return data;}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function update(){// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed){return;}var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};// compute reference element offsets
data.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
data.placement=computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);// store the computed placement inside `originalPlacement`
data.originalPlacement=data.placement;data.positionFixed=this.options.positionFixed;// compute the popper offsets
data.offsets.popper=getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position=this.options.positionFixed?'fixed':'absolute';// run the modifiers
data=runModifiers(this.modifiers,data);// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(data);}else{this.options.onUpdate(data);}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled&&name===modifierName;});}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function getSupportedPropertyName(property){var prefixes=[false,'ms','Webkit','Moz','O'];var upperProp=property.charAt(0).toUpperCase()+property.slice(1);for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var toCheck=prefix?''+prefix+upperProp:property;if(typeof document.body.style[toCheck]!=='undefined'){return toCheck;}}return null;}/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */function destroy(){this.state.isDestroyed=true;// touch DOM only if `applyStyle` modifier is enabled
if(isModifierEnabled(this.modifiers,'applyStyle')){this.popper.removeAttribute('x-placement');this.popper.style.position='';this.popper.style.top='';this.popper.style.left='';this.popper.style.right='';this.popper.style.bottom='';this.popper.style.willChange='';this.popper.style[getSupportedPropertyName('transform')]='';}this.disableEventListeners();// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper);}return this;}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window;}function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody=scrollParent.nodeName==='BODY';var target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:true});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents);}scrollParents.push(target);}/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function setupEventListeners(reference,options,state,updateBound){// Resize event listener on window
state.updateBound=updateBound;getWindow(reference).addEventListener('resize',state.updateBound,{passive:true});// Scroll event listener on scroll parents
var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,'scroll',state.updateBound,state.scrollParents);state.scrollElement=scrollElement;state.eventsEnabled=true;return state;}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function enableEventListeners(){if(!this.state.eventsEnabled){this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate);}}/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function removeEventListeners(reference,state){// Remove resize event listener on window
getWindow(reference).removeEventListener('resize',state.updateBound);// Remove scroll event listener on scroll parents
state.scrollParents.forEach(function(target){target.removeEventListener('scroll',state.updateBound);});// Reset state
state.updateBound=null;state.scrollParents=[];state.scrollElement=null;state.eventsEnabled=false;return state;}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=removeEventListeners(this.reference,this.state);}}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function isNumeric(n){return n!==''&&!isNaN(parseFloat(n))&&isFinite(n);}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit='';// add unit if the value is numeric and is one of the following
if(['width','height','top','right','bottom','left'].indexOf(prop)!==-1&&isNumeric(styles[prop])){unit='px';}element.style[prop]=styles[prop]+unit;});}/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(value!==false){element.setAttribute(prop,attributes[prop]);}else{element.removeAttribute(prop);}});}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function applyStyle(data){// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
setStyles(data.instance.popper,data.styles);// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
setAttributes(data.instance.popper,data.attributes);// if arrowElement is defined and arrowStyles has some properties
if(data.arrowElement&&Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles);}return data;}/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function applyStyleOnLoad(reference,popper,options,modifierOptions,state){// compute reference element offsets
var referenceOffsets=getReferenceOffsets(state,popper,reference,options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);popper.setAttribute('x-placement',placement);// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
setStyles(popper,{position:options.positionFixed?'fixed':'absolute'});return options;}/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */function getRoundedOffsets(data,shouldRound){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(data.placement)!==-1;var isVariation=data.placement.indexOf('-')!==-1;var sameWidthOddness=reference.width%2===popper.width%2;var bothOddWidth=reference.width%2===1&&popper.width%2===1;var noRound=function noRound(v){return v;};var horizontalToInteger=!shouldRound?noRound:isVertical||isVariation||sameWidthOddness?Math.round:Math.floor;var verticalToInteger=!shouldRound?noRound:Math.round;return{left:horizontalToInteger(bothOddWidth&&!isVariation&&shouldRound?popper.left-1:popper.left),top:verticalToInteger(popper.top),bottom:verticalToInteger(popper.bottom),right:horizontalToInteger(popper.right)};}var isFirefox=isBrowser&&/Firefox/i.test(navigator.userAgent);/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeStyle(data,options){var x=options.x,y=options.y;var popper=data.offsets.popper;// Remove this legacy support in Popper.js v2
var legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return modifier.name==='applyStyle';}).gpuAcceleration;if(legacyGpuAccelerationOption!==undefined){console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');}var gpuAcceleration=legacyGpuAccelerationOption!==undefined?legacyGpuAccelerationOption:options.gpuAcceleration;var offsetParent=getOffsetParent(data.instance.popper);var offsetParentRect=getBoundingClientRect(offsetParent);// Styles
var styles={position:popper.position};var offsets=getRoundedOffsets(data,window.devicePixelRatio<2||!isFirefox);var sideA=x==='bottom'?'top':'bottom';var sideB=y==='right'?'left':'right';// if gpuAcceleration is set to `true` and transform is supported,
//  we use `translate3d` to apply the position to the popper we
// automatically use the supported prefixed version if needed
var prefixedProperty=getSupportedPropertyName('transform');// now, let's make a step back and look at this code closely (wtf?)
// If the content of the popper grows once it's been positioned, it
// may happen that the popper gets misplaced because of the new content
// overflowing its reference element
// To avoid this problem, we provide two options (x and y), which allow
// the consumer to define the offset origin.
// If we position a popper on top of a reference element, we can set
// `x` to `top` to make the popper grow towards its top instead of
// its bottom.
var left=void 0,top=void 0;if(sideA==='bottom'){// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
// and not the bottom of the html element
if(offsetParent.nodeName==='HTML'){top=-offsetParent.clientHeight+offsets.bottom;}else{top=-offsetParentRect.height+offsets.bottom;}}else{top=offsets.top;}if(sideB==='right'){if(offsetParent.nodeName==='HTML'){left=-offsetParent.clientWidth+offsets.right;}else{left=-offsetParentRect.width+offsets.right;}}else{left=offsets.left;}if(gpuAcceleration&&prefixedProperty){styles[prefixedProperty]='translate3d('+left+'px, '+top+'px, 0)';styles[sideA]=0;styles[sideB]=0;styles.willChange='transform';}else{// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var invertTop=sideA==='bottom'?-1:1;var invertLeft=sideB==='right'?-1:1;styles[sideA]=top*invertTop;styles[sideB]=left*invertLeft;styles.willChange=sideA+', '+sideB;}// Attributes
var attributes={'x-placement':data.placement};// Update `data` attributes, styles and arrowStyles
data.attributes=_extends({},attributes,data.attributes);data.styles=_extends({},styles,data.styles);data.arrowStyles=_extends({},data.offsets.arrow,data.arrowStyles);return data;}/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name===requestingName;});var isRequired=!!requesting&&modifiers.some(function(modifier){return modifier.name===requestedName&&modifier.enabled&&modifier.order<requesting.order;});if(!isRequired){var _requesting='`'+requestingName+'`';var requested='`'+requestedName+'`';console.warn(requested+' modifier is required by '+_requesting+' modifier in order to work, be sure to include it before '+_requesting+'!');}return isRequired;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function arrow(data,options){var _data$offsets$arrow;// arrow depends on keepTogether in order to work
if(!isModifierRequired(data.instance.modifiers,'arrow','keepTogether')){return data;}var arrowElement=options.element;// if arrowElement is a string, suppose it's a CSS selector
if(typeof arrowElement==='string'){arrowElement=data.instance.popper.querySelector(arrowElement);// if arrowElement is not found, don't run the modifier
if(!arrowElement){return data;}}else{// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!data.instance.popper.contains(arrowElement)){console.warn('WARNING: `arrow.element` must be child of its popper element!');return data;}}var placement=data.placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(placement)!==-1;var len=isVertical?'height':'width';var sideCapitalized=isVertical?'Top':'Left';var side=sideCapitalized.toLowerCase();var altSide=isVertical?'left':'top';var opSide=isVertical?'bottom':'right';var arrowElementSize=getOuterSizes(arrowElement)[len];//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjunction
//
// top/left side
if(reference[opSide]-arrowElementSize<popper[side]){data.offsets.popper[side]-=popper[side]-(reference[opSide]-arrowElementSize);}// bottom/right side
if(reference[side]+arrowElementSize>popper[opSide]){data.offsets.popper[side]+=reference[side]+arrowElementSize-popper[opSide];}data.offsets.popper=getClientRect(data.offsets.popper);// compute center of the popper
var center=reference[side]+reference[len]/2-arrowElementSize/2;// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var css=getStyleComputedProperty(data.instance.popper);var popperMarginSide=parseFloat(css['margin'+sideCapitalized],10);var popperBorderSide=parseFloat(css['border'+sideCapitalized+'Width'],10);var sideValue=center-data.offsets.popper[side]-popperMarginSide-popperBorderSide;// prevent arrowElement from being placed not contiguously to its popper
sideValue=Math.max(Math.min(popper[len]-arrowElementSize,sideValue),0);data.arrowElement=arrowElement;data.offsets.arrow=(_data$offsets$arrow={},defineProperty(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty(_data$offsets$arrow,altSide,''),_data$offsets$arrow);return data;}/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function getOppositeVariation(variation){if(variation==='end'){return'start';}else if(variation==='start'){return'end';}return variation;}/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var placements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements=placements.slice(3);/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function clockwise(placement){var counter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var index=validPlacements.indexOf(placement);var arr=validPlacements.slice(index+1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr;}var BEHAVIORS={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function flip(data,options){// if `inner` modifier is enabled, we can't use the `flip` modifier
if(isModifierEnabled(data.instance.modifiers,'inner')){return data;}if(data.flipped&&data.placement===data.originalPlacement){// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return data;}var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement,data.positionFixed);var placement=data.placement.split('-')[0];var placementOpposite=getOppositePlacement(placement);var variation=data.placement.split('-')[1]||'';var flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder=[placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder=clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder=clockwise(placement,true);break;default:flipOrder=options.behavior;}flipOrder.forEach(function(step,index){if(placement!==step||flipOrder.length===index+1){return data;}placement=data.placement.split('-')[0];placementOpposite=getOppositePlacement(placement);var popperOffsets=data.offsets.popper;var refOffsets=data.offsets.reference;// using floor because the reference offsets may contain decimals we are not going to consider here
var floor=Math.floor;var overlapsRef=placement==='left'&&floor(popperOffsets.right)>floor(refOffsets.left)||placement==='right'&&floor(popperOffsets.left)<floor(refOffsets.right)||placement==='top'&&floor(popperOffsets.bottom)>floor(refOffsets.top)||placement==='bottom'&&floor(popperOffsets.top)<floor(refOffsets.bottom);var overflowsLeft=floor(popperOffsets.left)<floor(boundaries.left);var overflowsRight=floor(popperOffsets.right)>floor(boundaries.right);var overflowsTop=floor(popperOffsets.top)<floor(boundaries.top);var overflowsBottom=floor(popperOffsets.bottom)>floor(boundaries.bottom);var overflowsBoundaries=placement==='left'&&overflowsLeft||placement==='right'&&overflowsRight||placement==='top'&&overflowsTop||placement==='bottom'&&overflowsBottom;// flip the variation if required
var isVertical=['top','bottom'].indexOf(placement)!==-1;var flippedVariation=!!options.flipVariations&&(isVertical&&variation==='start'&&overflowsLeft||isVertical&&variation==='end'&&overflowsRight||!isVertical&&variation==='start'&&overflowsTop||!isVertical&&variation==='end'&&overflowsBottom);if(overlapsRef||overflowsBoundaries||flippedVariation){// this boolean to detect any flip loop
data.flipped=true;if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1];}if(flippedVariation){variation=getOppositeVariation(variation);}data.placement=placement+(variation?'-'+variation:'');// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
data.offsets.popper=_extends({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data=runModifiers(data.instance.modifiers,data,'flip');}});return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var placement=data.placement.split('-')[0];var floor=Math.floor;var isVertical=['top','bottom'].indexOf(placement)!==-1;var side=isVertical?'right':'bottom';var opSide=isVertical?'left':'top';var measurement=isVertical?'width':'height';if(popper[side]<floor(reference[opSide])){data.offsets.popper[opSide]=floor(reference[opSide])-popper[measurement];}if(popper[opSide]>floor(reference[side])){data.offsets.popper[opSide]=floor(reference[side]);}return data;}/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function toValue(str,measurement,popperOffsets,referenceOffsets){// separate value from unit
var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var value=+split[1];var unit=split[2];// If it's not a number it's an operator, I guess
if(!value){return str;}if(unit.indexOf('%')===0){var element=void 0;switch(unit){case'%p':element=popperOffsets;break;case'%':case'%r':default:element=referenceOffsets;}var rect=getClientRect(element);return rect[measurement]/100*value;}else if(unit==='vh'||unit==='vw'){// if is a vh or vw, we calculate the size based on the viewport
var size=void 0;if(unit==='vh'){size=Math.max(document.documentElement.clientHeight,window.innerHeight||0);}else{size=Math.max(document.documentElement.clientWidth,window.innerWidth||0);}return size/100*value;}else{// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return value;}}/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0];// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var useHeight=['right','left'].indexOf(basePlacement)!==-1;// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim();});// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var divider=fragments.indexOf(find(fragments,function(frag){return frag.search(/,|\s/)!==-1;}));if(fragments[divider]&&fragments[divider].indexOf(',')===-1){console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');}// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var splitRegex=/\s*,\s*|\s+/;var ops=divider!==-1?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider+1))]:[fragments];// Convert the values with units to absolute pixels to allow our computations
ops=ops.map(function(op,index){// Most of the units rely on the orientation of the popper
var measurement=(index===1?!useHeight:useHeight)?'height':'width';var mergeWithPrevious=false;return op// This aggregates any `+` or `-` sign that aren't considered operators
// e.g.: 10 + +5 => [10, +, +5]
.reduce(function(a,b){if(a[a.length-1]===''&&['+','-'].indexOf(b)!==-1){a[a.length-1]=b;mergeWithPrevious=true;return a;}else if(mergeWithPrevious){a[a.length-1]+=b;mergeWithPrevious=false;return a;}else{return a.concat(b);}},[])// Here we convert the string values into number values (in px)
.map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets);});});// Loop trough the offsets arrays and execute the operations
ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index]+=frag*(op[index2-1]==='-'?-1:1);}});});return offsets;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function offset(data,_ref){var offset=_ref.offset;var placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var basePlacement=placement.split('-')[0];var offsets=void 0;if(isNumeric(+offset)){offsets=[+offset,0];}else{offsets=parseOffset(offset,popper,reference,basePlacement);}if(basePlacement==='left'){popper.top+=offsets[0];popper.left-=offsets[1];}else if(basePlacement==='right'){popper.top+=offsets[0];popper.left+=offsets[1];}else if(basePlacement==='top'){popper.left+=offsets[0];popper.top-=offsets[1];}else if(basePlacement==='bottom'){popper.left+=offsets[0];popper.top+=offsets[1];}data.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function preventOverflow(data,options){var boundariesElement=options.boundariesElement||getOffsetParent(data.instance.popper);// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(data.instance.reference===boundariesElement){boundariesElement=getOffsetParent(boundariesElement);}// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var transformProp=getSupportedPropertyName('transform');var popperStyles=data.instance.popper.style;// assignment to help minification
var top=popperStyles.top,left=popperStyles.left,transform=popperStyles[transformProp];popperStyles.top='';popperStyles.left='';popperStyles[transformProp]='';var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement,data.positionFixed);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
popperStyles.top=top;popperStyles.left=left;popperStyles[transformProp]=transform;options.boundaries=boundaries;var order=options.priority;var popper=data.offsets.popper;var check={primary:function primary(placement){var value=popper[placement];if(popper[placement]<boundaries[placement]&&!options.escapeWithReference){value=Math.max(popper[placement],boundaries[placement]);}return defineProperty({},placement,value);},secondary:function secondary(placement){var mainSide=placement==='right'?'left':'top';var value=popper[mainSide];if(popper[placement]>boundaries[placement]&&!options.escapeWithReference){value=Math.min(popper[mainSide],boundaries[placement]-(placement==='right'?popper.width:popper.height));}return defineProperty({},mainSide,value);}};order.forEach(function(placement){var side=['left','top'].indexOf(placement)!==-1?'primary':'secondary';popper=_extends({},popper,check[side](placement));});data.offsets.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function shift(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var shiftvariation=placement.split('-')[1];// if shift shiftvariation is specified, run the modifier
if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper;var isVertical=['bottom','top'].indexOf(basePlacement)!==-1;var side=isVertical?'left':'top';var measurement=isVertical?'width':'height';var shiftOffsets={start:defineProperty({},side,reference[side]),end:defineProperty({},side,reference[side]+reference[measurement]-popper[measurement])};data.offsets.popper=_extends({},popper,shiftOffsets[shiftvariation]);}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function hide(data){if(!isModifierRequired(data.instance.modifiers,'hide','preventOverflow')){return data;}var refRect=data.offsets.reference;var bound=find(data.instance.modifiers,function(modifier){return modifier.name==='preventOverflow';}).boundaries;if(refRect.bottom<bound.top||refRect.left>bound.right||refRect.top>bound.bottom||refRect.right<bound.left){// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===true){return data;}data.hide=true;data.attributes['x-out-of-boundaries']='';}else{// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===false){return data;}data.hide=false;data.attributes['x-out-of-boundaries']=false;}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function inner(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isHoriz=['left','right'].indexOf(basePlacement)!==-1;var subtractLength=['top','left'].indexOf(basePlacement)===-1;popper[isHoriz?'left':'top']=reference[basePlacement]-(subtractLength?popper[isHoriz?'width':'height']:0);data.placement=getOppositePlacement(placement);data.offsets.popper=getClientRect(popper);return data;}/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */ /**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */var modifiers={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */shift:{/** @prop {number} order=100 - Index used to define the order of execution */order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:shift},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */offset:{/** @prop {number} order=200 - Index used to define the order of execution */order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:offset,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:preventOverflow,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */priority:['left','right','top','bottom'],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */boundariesElement:'scrollParent'},/**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:keepTogether},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */arrow:{/** @prop {number} order=500 - Index used to define the order of execution */order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:arrow,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:'[x-arrow]'},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */flip:{/** @prop {number} order=600 - Index used to define the order of execution */order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:flip,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */behavior:'flip',/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */boundariesElement:'viewport'},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */inner:{/** @prop {number} order=700 - Index used to define the order of execution */order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:false,/** @prop {ModifierFn} */fn:inner},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */hide:{/** @prop {number} order=800 - Index used to define the order of execution */order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:hide},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:computeStyle,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:true,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */x:'bottom',/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */y:'right'},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:applyStyle,/** @prop {Function} */onLoad:applyStyleOnLoad,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */gpuAcceleration:undefined}};/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */ /**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */var Defaults={/**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */placement:'bottom',/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */positionFixed:false,/**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */eventsEnabled:true,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */removeOnDestroy:false,/**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */onCreate:function onCreate(){},/**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */onUpdate:function onUpdate(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */modifiers:modifiers};/**
 * @callback onCreate
 * @param {dataObject} data
 */ /**
 * @callback onUpdate
 * @param {dataObject} data
 */ // Utils
// Methods
var Popper=function(){/**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */function Popper(reference,popper){var _this=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};classCallCheck(this,Popper);this.scheduleUpdate=function(){return requestAnimationFrame(_this.update);};// make update() debounced, so that it only runs at most once-per-tick
this.update=debounce(this.update.bind(this));// with {} we create a new object with the options inside it
this.options=_extends({},Popper.Defaults,options);// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};// get reference and popper elements (allow jQuery wrappers)
this.reference=reference&&reference.jquery?reference[0]:reference;this.popper=popper&&popper.jquery?popper[0]:popper;// Deep merge modifiers options
this.options.modifiers={};Object.keys(_extends({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name]=_extends({},Popper.Defaults.modifiers[name]||{},options.modifiers?options.modifiers[name]:{});});// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(name){return _extends({name:name},_this.options.modifiers[name]);})// sort the modifiers by order
.sort(function(a,b){return a.order-b.order;});// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled&&isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state);}});// fire the first update to position the popper in the right place
this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();}this.state.eventsEnabled=eventsEnabled;}// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
createClass(Popper,[{key:'update',value:function update$$1(){return update.call(this);}},{key:'destroy',value:function destroy$$1(){return destroy.call(this);}},{key:'enableEventListeners',value:function enableEventListeners$$1(){return enableEventListeners.call(this);}},{key:'disableEventListeners',value:function disableEventListeners$$1(){return disableEventListeners.call(this);}/**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */ /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */}]);return Popper;}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */Popper.Utils=(typeof window!=='undefined'?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;/* harmony default export */__webpack_exports__["default"]=Popper;/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(5));/***/},/* 8 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;//
// SmoothScroll for websites v1.4.8 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//
(function(){// Scroll Variables (tweakable)
var defaultOptions={// Scrolling Core
frameRate:150,// [Hz]
animationTime:400,// [ms]
stepSize:100,// [px]
// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
pulseAlgorithm:true,pulseScale:4,pulseNormalize:1,// Acceleration
accelerationDelta:50,// 50
accelerationMax:3,// 3
// Keyboard Settings
keyboardSupport:true,// option
arrowScroll:50,// [px]
// Other
fixedBackground:true,excluded:''};var options=defaultOptions;// Other Variables
var isExcluded=false;var isFrame=false;var direction={x:0,y:0};var initDone=false;var root=document.documentElement;var activeElement;var observer;var refreshSize;var deltaBuffer=[];var deltaBufferTimer;var isMac=/^Mac/.test(navigator.platform);var key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var arrowKeys={37:1,38:1,39:1,40:1};/***********************************************
 * INITIALIZE
 ***********************************************/ /**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */function initTest(){if(options.keyboardSupport){addEvent('keydown',keydown);}}/**
 * Sets up scrolls array, determines if frames are involved.
 */function init(){if(initDone||!document.body)return;initDone=true;var body=document.body;var html=document.documentElement;var windowHeight=window.innerHeight;var scrollHeight=body.scrollHeight;// check compat mode for root element
root=document.compatMode.indexOf('CSS')>=0?html:body;activeElement=body;initTest();// Checks if this script is running in a frame
if(top!=self){isFrame=true;}/**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */else if(isOldSafari&&scrollHeight>windowHeight&&(body.offsetHeight<=windowHeight||html.offsetHeight<=windowHeight)){var fullPageElem=document.createElement('div');fullPageElem.style.cssText='position:absolute; z-index:-10000; '+'top:0; left:0; right:0; height:'+root.scrollHeight+'px';document.body.appendChild(fullPageElem);// DOM changed (throttled) to fix height
var pendingRefresh;refreshSize=function refreshSize(){if(pendingRefresh)return;// could also be: clearTimeout(pendingRefresh);
pendingRefresh=setTimeout(function(){if(isExcluded)return;// could be running after cleanup
fullPageElem.style.height='0';fullPageElem.style.height=root.scrollHeight+'px';pendingRefresh=null;},500);// act rarely to stay fast
};setTimeout(refreshSize,10);addEvent('resize',refreshSize);// TODO: attributeFilter?
var config={attributes:true,childList:true,characterData:false// subtree: true
};observer=new MutationObserver(refreshSize);observer.observe(body,config);if(root.offsetHeight<=windowHeight){var clearfix=document.createElement('div');clearfix.style.clear='both';body.appendChild(clearfix);}}// disable fixed background
if(!options.fixedBackground&&!isExcluded){body.style.backgroundAttachment='scroll';html.style.backgroundAttachment='scroll';}}/**
 * Removes event listeners and other traces left on the page.
 */function cleanup(){observer&&observer.disconnect();removeEvent(wheelEvent,wheel);removeEvent('mousedown',mousedown);removeEvent('keydown',keydown);removeEvent('resize',refreshSize);removeEvent('load',init);}/************************************************
 * SCROLLING 
 ************************************************/var que=[];var pending=false;var lastScroll=Date.now();/**
 * Pushes scroll actions to the scrolling queue.
 */function scrollArray(elem,left,top){directionCheck(left,top);if(options.accelerationMax!=1){var now=Date.now();var elapsed=now-lastScroll;if(elapsed<options.accelerationDelta){var factor=(1+50/elapsed)/2;if(factor>1){factor=Math.min(factor,options.accelerationMax);left*=factor;top*=factor;}}lastScroll=Date.now();}// push a scroll command
que.push({x:left,y:top,lastX:left<0?0.99:-0.99,lastY:top<0?0.99:-0.99,start:Date.now()});// don't act if there's a pending queue
if(pending){return;}var scrollRoot=getScrollRoot();var isWindowScroll=elem===scrollRoot||elem===document.body;// if we haven't already fixed the behavior, 
// and it needs fixing for this sesh
if(elem.$scrollBehavior==null&&isScrollBehaviorSmooth(elem)){elem.$scrollBehavior=elem.style.scrollBehavior;elem.style.scrollBehavior='auto';}var step=function step(time){var now=Date.now();var scrollX=0;var scrollY=0;for(var i=0;i<que.length;i++){var item=que[i];var elapsed=now-item.start;var finished=elapsed>=options.animationTime;// scroll position: [0, 1]
var position=finished?1:elapsed/options.animationTime;// easing [optional]
if(options.pulseAlgorithm){position=pulse(position);}// only need the difference
var x=item.x*position-item.lastX>>0;var y=item.y*position-item.lastY>>0;// add this to the total scrolling
scrollX+=x;scrollY+=y;// update last values
item.lastX+=x;item.lastY+=y;// delete and step back if it's over
if(finished){que.splice(i,1);i--;}}// scroll left and top
if(isWindowScroll){window.scrollBy(scrollX,scrollY);}else{if(scrollX)elem.scrollLeft+=scrollX;if(scrollY)elem.scrollTop+=scrollY;}// clean up if there's nothing left to do
if(!left&&!top){que=[];}if(que.length){requestFrame(step,elem,1000/options.frameRate+1);}else{pending=false;// restore default behavior at the end of scrolling sesh
if(elem.$scrollBehavior!=null){elem.style.scrollBehavior=elem.$scrollBehavior;elem.$scrollBehavior=null;}}};// start a new queue of actions
requestFrame(step,elem,0);pending=true;}/***********************************************
 * EVENTS
 ***********************************************/ /**
 * Mouse wheel handler.
 * @param {Object} event
 */function wheel(event){if(!initDone){init();}var target=event.target;// leave early if default action is prevented   
// or it's a zooming event with CTRL 
if(event.defaultPrevented||event.ctrlKey){return true;}// leave embedded content alone (flash & pdf)
if(isNodeName(activeElement,'embed')||isNodeName(target,'embed')&&/\.pdf/i.test(target.src)||isNodeName(activeElement,'object')||target.shadowRoot){return true;}var deltaX=-event.wheelDeltaX||event.deltaX||0;var deltaY=-event.wheelDeltaY||event.deltaY||0;if(isMac){if(event.wheelDeltaX&&isDivisible(event.wheelDeltaX,120)){deltaX=-120*(event.wheelDeltaX/Math.abs(event.wheelDeltaX));}if(event.wheelDeltaY&&isDivisible(event.wheelDeltaY,120)){deltaY=-120*(event.wheelDeltaY/Math.abs(event.wheelDeltaY));}}// use wheelDelta if deltaX/Y is not available
if(!deltaX&&!deltaY){deltaY=-event.wheelDelta||0;}// line based scrolling (Firefox mostly)
if(event.deltaMode===1){deltaX*=40;deltaY*=40;}var overflowing=overflowingAncestor(target);// nothing to do if there's no element that's scrollable
if(!overflowing){// except Chrome iframes seem to eat wheel events, which we need to 
// propagate up, if the iframe has nothing overflowing to scroll
if(isFrame&&isChrome){// change target to iframe element itself for the parent frame
Object.defineProperty(event,"target",{value:window.frameElement});return parent.wheel(event);}return true;}// check if it's a touchpad scroll that should be ignored
if(isTouchpad(deltaY)){return true;}// scale by step size
// delta is 120 most of the time
// synaptics seems to send 1 sometimes
if(Math.abs(deltaX)>1.2){deltaX*=options.stepSize/120;}if(Math.abs(deltaY)>1.2){deltaY*=options.stepSize/120;}scrollArray(overflowing,deltaX,deltaY);event.preventDefault();scheduleClearCache();}/**
 * Keydown event handler.
 * @param {Object} event
 */function keydown(event){var target=event.target;var modifier=event.ctrlKey||event.altKey||event.metaKey||event.shiftKey&&event.keyCode!==key.spacebar;// our own tracked active element could've been removed from the DOM
if(!document.body.contains(activeElement)){activeElement=document.activeElement;}// do nothing if user is editing text
// or using a modifier key (except shift)
// or in a dropdown
// or inside interactive elements
var inputNodeNames=/^(textarea|select|embed|object)$/i;var buttonTypes=/^(button|submit|radio|checkbox|file|color|image)$/i;if(event.defaultPrevented||inputNodeNames.test(target.nodeName)||isNodeName(target,'input')&&!buttonTypes.test(target.type)||isNodeName(activeElement,'video')||isInsideYoutubeVideo(event)||target.isContentEditable||modifier){return true;}// [spacebar] should trigger button press, leave it alone
if((isNodeName(target,'button')||isNodeName(target,'input')&&buttonTypes.test(target.type))&&event.keyCode===key.spacebar){return true;}// [arrwow keys] on radio buttons should be left alone
if(isNodeName(target,'input')&&target.type=='radio'&&arrowKeys[event.keyCode]){return true;}var shift,x=0,y=0;var overflowing=overflowingAncestor(activeElement);if(!overflowing){// Chrome iframes seem to eat key events, which we need to 
// propagate up, if the iframe has nothing overflowing to scroll
return isFrame&&isChrome?parent.keydown(event):true;}var clientHeight=overflowing.clientHeight;if(overflowing==document.body){clientHeight=window.innerHeight;}switch(event.keyCode){case key.up:y=-options.arrowScroll;break;case key.down:y=options.arrowScroll;break;case key.spacebar:// (+ shift)
shift=event.shiftKey?1:-1;y=-shift*clientHeight*0.9;break;case key.pageup:y=-clientHeight*0.9;break;case key.pagedown:y=clientHeight*0.9;break;case key.home:if(overflowing==document.body&&document.scrollingElement)overflowing=document.scrollingElement;y=-overflowing.scrollTop;break;case key.end:var scroll=overflowing.scrollHeight-overflowing.scrollTop;var scrollRemaining=scroll-clientHeight;y=scrollRemaining>0?scrollRemaining+10:0;break;case key.left:x=-options.arrowScroll;break;case key.right:x=options.arrowScroll;break;default:return true;// a key we don't care about
}scrollArray(overflowing,x,y);event.preventDefault();scheduleClearCache();}/**
 * Mousedown event only for updating activeElement
 */function mousedown(event){activeElement=event.target;}/***********************************************
 * OVERFLOW
 ***********************************************/var uniqueID=function(){var i=0;return function(el){return el.uniqueID||(el.uniqueID=i++);};}();var cacheX={};// cleared out after a scrolling session
var cacheY={};// cleared out after a scrolling session
var clearCacheTimer;var smoothBehaviorForElement={};//setInterval(function () { cache = {}; }, 10 * 1000);
function scheduleClearCache(){clearTimeout(clearCacheTimer);clearCacheTimer=setInterval(function(){cacheX=cacheY=smoothBehaviorForElement={};},1*1000);}function setCache(elems,overflowing,x){var cache=x?cacheX:cacheY;for(var i=elems.length;i--;){cache[uniqueID(elems[i])]=overflowing;}return overflowing;}function getCache(el,x){return(x?cacheX:cacheY)[uniqueID(el)];}//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |
function overflowingAncestor(el){var elems=[];var body=document.body;var rootScrollHeight=root.scrollHeight;do{var cached=getCache(el,false);if(cached){return setCache(elems,cached);}elems.push(el);if(rootScrollHeight===el.scrollHeight){var topOverflowsNotHidden=overflowNotHidden(root)&&overflowNotHidden(body);var isOverflowCSS=topOverflowsNotHidden||overflowAutoOrScroll(root);if(isFrame&&isContentOverflowing(root)||!isFrame&&isOverflowCSS){return setCache(elems,getScrollRoot());}}else if(isContentOverflowing(el)&&overflowAutoOrScroll(el)){return setCache(elems,el);}}while(el=el.parentElement);}function isContentOverflowing(el){return el.clientHeight+10<el.scrollHeight;}// typically for <body> and <html>
function overflowNotHidden(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return overflow!=='hidden';}// for all other elements
function overflowAutoOrScroll(el){var overflow=getComputedStyle(el,'').getPropertyValue('overflow-y');return overflow==='scroll'||overflow==='auto';}// for all other elements
function isScrollBehaviorSmooth(el){var id=uniqueID(el);if(smoothBehaviorForElement[id]==null){var scrollBehavior=getComputedStyle(el,'')['scroll-behavior'];smoothBehaviorForElement[id]='smooth'==scrollBehavior;}return smoothBehaviorForElement[id];}/***********************************************
 * HELPERS
 ***********************************************/function addEvent(type,fn){window.addEventListener(type,fn,false);}function removeEvent(type,fn){window.removeEventListener(type,fn,false);}function isNodeName(el,tag){return el&&(el.nodeName||'').toLowerCase()===tag.toLowerCase();}function directionCheck(x,y){x=x>0?1:-1;y=y>0?1:-1;if(direction.x!==x||direction.y!==y){direction.x=x;direction.y=y;que=[];lastScroll=0;}}if(window.localStorage&&localStorage.SS_deltaBuffer){try{// #46 Safari throws in private browsing for localStorage 
deltaBuffer=localStorage.SS_deltaBuffer.split(',');}catch(e){}}function isTouchpad(deltaY){if(!deltaY)return;if(!deltaBuffer.length){deltaBuffer=[deltaY,deltaY,deltaY];}deltaY=Math.abs(deltaY);deltaBuffer.push(deltaY);deltaBuffer.shift();clearTimeout(deltaBufferTimer);deltaBufferTimer=setTimeout(function(){try{// #46 Safari throws in private browsing for localStorage
localStorage.SS_deltaBuffer=deltaBuffer.join(',');}catch(e){}},1000);var dpiScaledWheelDelta=deltaY>120&&allDeltasDivisableBy(deltaY);// win64 
return!allDeltasDivisableBy(120)&&!allDeltasDivisableBy(100)&&!dpiScaledWheelDelta;}function isDivisible(n,divisor){return Math.floor(n/divisor)==n/divisor;}function allDeltasDivisableBy(divisor){return isDivisible(deltaBuffer[0],divisor)&&isDivisible(deltaBuffer[1],divisor)&&isDivisible(deltaBuffer[2],divisor);}function isInsideYoutubeVideo(event){var elem=event.target;var isControl=false;if(document.URL.indexOf('www.youtube.com/watch')!=-1){do{isControl=elem.classList&&elem.classList.contains('html5-video-controls');if(isControl)break;}while(elem=elem.parentNode);}return isControl;}var requestFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback,element,delay){window.setTimeout(callback,delay||1000/60);};}();var MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;var getScrollRoot=function(){var SCROLL_ROOT=document.scrollingElement;return function(){if(!SCROLL_ROOT){var dummy=document.createElement('div');dummy.style.cssText='height:10000px;width:1px;';document.body.appendChild(dummy);var bodyScrollTop=document.body.scrollTop;var docElScrollTop=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=bodyScrollTop)SCROLL_ROOT=document.body;else SCROLL_ROOT=document.documentElement;window.scrollBy(0,-3);document.body.removeChild(dummy);}return SCROLL_ROOT;};}();/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/ /**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */function pulse_(x){var val,start,expx;// test
x=x*options.pulseScale;if(x<1){// acceleartion
val=x-(1-Math.exp(-x));}else{// tail
// the previous animation ended here:
start=Math.exp(-1);// simple viscous drag
x-=1;expx=1-Math.exp(-x);val=start+expx*(1-start);}return val*options.pulseNormalize;}function pulse(x){if(x>=1)return 1;if(x<=0)return 0;if(options.pulseNormalize==1){options.pulseNormalize/=pulse_(1);}return pulse_(x);}/***********************************************
 * FIRST RUN
 ***********************************************/var userAgent=window.navigator.userAgent;var isEdge=/Edge/.test(userAgent);// thank you MS
var isChrome=/chrome/i.test(userAgent)&&!isEdge;var isSafari=/safari/i.test(userAgent)&&!isEdge;var isMobile=/mobile/i.test(userAgent);var isIEWin7=/Windows NT 6.1/i.test(userAgent)&&/rv:11/i.test(userAgent);var isOldSafari=isSafari&&(/Version\/8/i.test(userAgent)||/Version\/9/i.test(userAgent));var isEnabledForBrowser=(isChrome||isSafari||isIEWin7)&&!isMobile;var wheelEvent;if('onwheel'in document.createElement('div'))wheelEvent='wheel';else if('onmousewheel'in document.createElement('div'))wheelEvent='mousewheel';if(wheelEvent&&isEnabledForBrowser){addEvent(wheelEvent,wheel);addEvent('mousedown',mousedown);addEvent('load',init);}/***********************************************
 * PUBLIC INTERFACE
 ***********************************************/function SmoothScroll(optionsToSet){for(var key in optionsToSet){if(defaultOptions.hasOwnProperty(key))options[key]=optionsToSet[key];}}SmoothScroll.destroy=cleanup;if(window.SmoothScrollOptions)// async API
SmoothScroll(window.SmoothScrollOptions);if(true)!(__WEBPACK_AMD_DEFINE_RESULT__=function(){return SmoothScroll;}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));else{}})();/***/},/* 9 */ /***/function(module,exports){!function(){"use strict";if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),e=!!t&&parseInt(t[1],10)>=16;if("objectFit"in document.documentElement.style!=!1&&!e)return void(window.objectFitPolyfill=function(){return!1;});var i=function i(t){var e=window.getComputedStyle(t,null),i=e.getPropertyValue("position"),n=e.getPropertyValue("overflow"),o=e.getPropertyValue("display");i&&"static"!==i||(t.style.position="relative"),"hidden"!==n&&(t.style.overflow="hidden"),o&&"inline"!==o||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill");},n=function n(t){var e=window.getComputedStyle(t,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var n in i){e.getPropertyValue(n)!==i[n]&&(t.style[n]=i[n]);}},o=function o(t,e,i){var n,o,l,a,d;if(i=i.split(" "),i.length<2&&(i[1]=i[0]),"x"===t)n=i[0],o=i[1],l="left",a="right",d=e.clientWidth;else{if("y"!==t)return;n=i[1],o=i[0],l="top",a="bottom",d=e.clientHeight;}return n===l||o===l?void(e.style[l]="0"):n===a||o===a?void(e.style[a]="0"):"center"===n||"50%"===n?(e.style[l]="50%",void(e.style["margin-"+l]=d/-2+"px")):n.indexOf("%")>=0?(n=parseInt(n),void(n<50?(e.style[l]=n+"%",e.style["margin-"+l]=d*(n/-100)+"px"):(n=100-n,e.style[a]=n+"%",e.style["margin-"+a]=d*(n/-100)+"px"))):void(e.style[l]=n);},l=function l(t){var e=t.dataset?t.dataset.objectFit:t.getAttribute("data-object-fit"),l=t.dataset?t.dataset.objectPosition:t.getAttribute("data-object-position");e=e||"cover",l=l||"50% 50%";var a=t.parentNode;i(a),n(t),t.style.position="absolute",t.style.height="100%",t.style.width="auto","scale-down"===e&&(t.style.height="auto",t.clientWidth<a.clientWidth&&t.clientHeight<a.clientHeight?(o("x",t,l),o("y",t,l)):(e="contain",t.style.height="100%")),"none"===e?(t.style.width="auto",t.style.height="auto",o("x",t,l),o("y",t,l)):"cover"===e&&t.clientWidth>a.clientWidth||"contain"===e&&t.clientWidth<a.clientWidth?(t.style.top="0",t.style.marginTop="0",o("x",t,l)):"scale-down"!==e&&(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",o("y",t,l));},a=function a(t){if(void 0===t)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=_typeof2(t)||!t.length||!t[0].nodeName)return!1;t=t;}for(var i=0;i<t.length;i++){if(t[i].nodeName){var n=t[i].nodeName.toLowerCase();"img"!==n||e?"video"===n&&(t[i].readyState>0?l(t[i]):t[i].addEventListener("loadedmetadata",function(){l(this);})):t[i].complete?l(t[i]):t[i].addEventListener("load",function(){l(this);});}}return!0;};document.addEventListener("DOMContentLoaded",function(){a();}),window.addEventListener("resize",function(){a();}),window.objectFitPolyfill=a;}}();/***/},/* 10 */ /***/function(module,exports){/**
 * Configure the plugin.
 */+function($){page.registerVendor('Jquery');page.initJquery=function(){/**
     * We will register the CSRF Token as a common header with jQuery so that
     * all outgoing HTTP requests automatically have it attached. This is just
     * a simple convenience so we don't have to attach every token manually.
     */var token=document.head.querySelector('meta[name="csrf-token"]');if(token){$.ajaxSetup({headers:{'X-CSRF-TOKEN':token.content}});}};}(jQuery);// Check if an element has a specific data attribute
//
jQuery.fn.hasDataAttr=function(name){return $(this)[0].hasAttribute('data-'+name);};// Get data attribute. If element doesn't have the attribute, return default value
//
jQuery.fn.dataAttr=function(name,def){if($(this)[0]==undefined){return def;}return $(this)[0].getAttribute('data-'+name)||def;};// Instance search
//
//$.expr[':'] -> $.expr.pseudos
jQuery.expr[':'].search=function(a,i,m){return $(a).html().toUpperCase().indexOf(m[3].toUpperCase())>=0;};// Return outerHTML (inclusing the element) code
//
jQuery.fn.outerHTML=function(){var html='';this.each(function(){html+=$(this).prop("outerHTML");});return html;};// Return HTML code of all the selected elements
//
jQuery.fn.fullHTML=function(){var html='';$(this).each(function(){html+=$(this).outerHTML();});return html;};// Scroll to end
//
jQuery.fn.scrollToEnd=function(){$(this).scrollTop($(this).prop("scrollHeight"));return this;};/***/},/* 11 */ /***/function(module,exports){/**
 * Initialize some of the core Bootstrap components.
 */+function($){page.registerVendor('Bootstrap');page.initBootstrap=function(){$('[data-toggle="tooltip"]').tooltip();$('[data-toggle="popover"]').popover();// Custom control check
//
// Since BS4-beta-3, custom-controls needs id and for attributes.
// We bypass this requirement.
//
$(document).on('click','.custom-checkbox',function(){var input=$(this).children('.custom-control-input').not(':disabled');input.prop('checked',!input.prop('checked')).trigger("change");});$(document).on('click','.custom-radio',function(){var input=$(this).children('.custom-control-input').not(':disabled');input.prop('checked',true).trigger("change");});};}(jQuery);/***/},/* 12 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */window.AOS=__webpack_require__(13);/**
 * Configure the plugin.
 */+function($){page.registerVendor('AOS');page.initAOS=function(){var options={offset:220,duration:1500};if(page.defaults.disableAOSonMobile){options.disable='mobile';}AOS.init(options);};}(jQuery);/***/},/* 13 */ /***/function(module,exports,__webpack_require__){!function(e,t){true?module.exports=t():undefined;}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports;}var n={};return t.m=e,t.c=n,t.p="dist/",t(0);}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e};}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);}}return e;},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function j(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y["default"])(w,x),(0,b["default"])(w,x.once),w;},O=function O(){w=(0,h["default"])(),j();},M=function M(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay");});},S=function S(e){return e===!0||"mobile"===e&&p["default"].mobile()||"phone"===e&&p["default"].phone()||"tablet"===e&&p["default"].tablet()||"function"==typeof e&&e()===!0;},_=function _(e){x=i(x,e),w=(0,h["default"])();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d["default"].isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0);}):document.addEventListener(x.startEvent,function(){j(!0);}),window.addEventListener("resize",(0,s["default"])(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s["default"])(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u["default"])(function(){(0,b["default"])(w,x.once);},x.throttleDelay)),x.disableMutationObserver||d["default"].ready("[data-aos]",O),w);};e.exports={init:_,refresh:j,refreshHard:O};},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n);}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g;}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i;}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y;}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)));}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g);}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0;}function p(){return void 0===h?g:d(O());}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w);}return void 0===h&&(h=setTimeout(f,t)),g;}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m;}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a});}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t);}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e));}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d;}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t;}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e;}var c="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function O(){return h.Date.now();};e.exports=o;}).call(t,function(){return this;}());},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n);}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g;}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i;}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y;}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)));}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g);}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0;}function p(){return void 0===h?g:d(j());}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w);}return void 0===h&&(h=setTimeout(f,t)),g;}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m;}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t);}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e));}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f;}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t;}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e;}var u="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function j(){return g.Date.now();};e.exports=n;}).call(t,function(){return this;}());},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0;}return!1;}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;}function i(){return!!o();}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0});}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u();});}Object.defineProperty(t,"__esModule",{value:!0});var u=function u(){};t["default"]={isSupported:i,ready:r};},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}function o(){return navigator.userAgent||navigator.vendor||window.opera||"";}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t;};}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e);}return i(e,[{key:"phone",value:function value(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)));}},{key:"mobile",value:function value(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)));}},{key:"tablet",value:function value(){return this.mobile()&&!this.phone();}}]),e;}();t["default"]=new s();},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function n(e,t,_n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!_n&&"true"!==o)&&e.node.classList.remove("aos-animate");},o=function o(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t);});};t["default"]=o;},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function a(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r["default"])(e.node,t.offset);}),e;};t["default"]=a;},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function a(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r["default"])(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i;}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o;};t["default"]=a;},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function n(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);){t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;}return{top:n,left:t};};t["default"]=n;},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function n(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e};});};t["default"]=n;}]);});/***/},/* 14 */ /***/function(module,exports){/**
 *
 */+function($){page.registerVendor('Constellation');page.initConstellation=function(){var distance=120;if($(window).width()<700){distance=25;}$('.constellation').each(function(){var canvas=$(this),color=canvas.dataAttr('color','rgba(255, 255, 255, .8)'),length=canvas.dataAttr('length',150),radius=canvas.dataAttr('radius',150);if(color=='dark'){color='rgba(0, 0, 0, .6)';}canvas.constellation({distance:distance,length:length,radius:radius,star:{color:color,width:1},line:{color:color,width:0.2}});});};}(jQuery);/*!
 * Mantis.js / jQuery / Zepto.js plugin for Constellation
 * @version 1.2.2
 * @author Acauã Montiel <contato@acauamontiel.com.br>
 * @license http://acaua.mit-license.org/
 */(function($,window){/**
   * Makes a nice constellation on canvas
   * @constructor Constellation
   */function Constellation(canvas,options){var $canvas=$(canvas),context=canvas.getContext('2d'),defaults={star:{color:'rgba(255, 255, 255, .5)',width:1},line:{color:'rgba(255, 255, 255, .5)',width:0.2},position:{x:0,// This value will be overwritten at startup
y:0// This value will be overwritten at startup
},width:window.innerWidth,height:window.innerHeight,velocity:0.1,length:100,distance:120,radius:150,stars:[]},config=$.extend(true,{},defaults,options);function Star(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=config.velocity-Math.random()*0.5;this.vy=config.velocity-Math.random()*0.5;this.radius=Math.random()*config.star.width;}Star.prototype={create:function create(){context.beginPath();context.arc(this.x,this.y,this.radius,0,Math.PI*2,false);context.fill();},animate:function animate(){var i;for(i=0;i<config.length;i++){var star=config.stars[i];if(star.y<0||star.y>canvas.height){star.vx=star.vx;star.vy=-star.vy;}else if(star.x<0||star.x>canvas.width){star.vx=-star.vx;star.vy=star.vy;}star.x+=star.vx;star.y+=star.vy;}},line:function line(){var length=config.length,iStar,jStar,i,j;for(i=0;i<length;i++){for(j=0;j<length;j++){iStar=config.stars[i];jStar=config.stars[j];if(iStar.x-jStar.x<config.distance&&iStar.y-jStar.y<config.distance&&iStar.x-jStar.x>-config.distance&&iStar.y-jStar.y>-config.distance){if(iStar.x-config.position.x<config.radius&&iStar.y-config.position.y<config.radius&&iStar.x-config.position.x>-config.radius&&iStar.y-config.position.y>-config.radius){context.beginPath();context.moveTo(iStar.x,iStar.y);context.lineTo(jStar.x,jStar.y);context.stroke();context.closePath();}}}}}};this.createStars=function(){var length=config.length,star,i;context.clearRect(0,0,canvas.width,canvas.height);for(i=0;i<length;i++){config.stars.push(new Star());star=config.stars[i];star.create();}star.line();star.animate();};this.setCanvas=function(){canvas.width=config.width;canvas.height=config.height;};this.setContext=function(){context.fillStyle=config.star.color;context.strokeStyle=config.line.color;context.lineWidth=config.line.width;};this.setInitialPosition=function(){if(!options||!options.hasOwnProperty('position')){config.position={x:canvas.width*0.5,y:canvas.height*0.5};}};this.loop=function(callback){callback();window.requestAnimationFrame(function(){//stats.begin(); // Only for Stats
this.loop(callback);//stats.end(); // Only for Stats
}.bind(this));};this.bind=function(){$canvas.on('mousemove',function(e){config.position.x=e.pageX-$canvas.offset().left;config.position.y=e.pageY-$canvas.offset().top;});};this.init=function(){this.setCanvas();this.setContext();this.setInitialPosition();this.loop(this.createStars);this.bind();};}$.fn.constellation=function(options){return this.each(function(){var c=new Constellation(this,options);c.init();});};})($,window);/***/},/* 15 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */__webpack_require__(16);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Countdown');page.initCountdown=function(){$('[data-countdown]').each(function(){var tag=$(this),format='',options={textDay:'Day',textHour:'Hour',textMinute:'Minute',textSecond:'Second'};options=$.extend(options,page.getDataOptions(tag));format+='<div class="row gap-x-4">';format+='<div class="col"><h5>%D</h5><small>'+options.textDay+'%!D</small></div>';format+='<div class="col"><h5>%H</h5><small>'+options.textHour+'%!H</small></div>';format+='<div class="col"><h5>%M</h5><small>'+options.textMinute+'%!M</small></div>';format+='<div class="col"><h5>%S</h5><small>'+options.textSecond+'%!S</small></div>';format+='</div>';if(tag.hasDataAttr('format')){format=tag.data('format');}tag.countdown(tag.data('countdown'),function(event){$(this).html(event.strftime(format));});});};}(jQuery);/***/},/* 16 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */(function(factory){"use strict";if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(3)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(function($){"use strict";var instances=[],matchers=[],defaultOptions={precision:100,elapse:false,defer:false};matchers.push(/^[0-9]*$/.source);matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers=new RegExp(matchers.join("|"));function parseDateString(dateString){if(dateString instanceof Date){return dateString;}if(String(dateString).match(matchers)){if(String(dateString).match(/^[0-9]*$/)){dateString=Number(dateString);}if(String(dateString).match(/\-/)){dateString=String(dateString).replace(/\-/g,"/");}return new Date(dateString);}else{throw new Error("Couldn't cast `"+dateString+"` to a date object.");}}var DIRECTIVE_KEY_MAP={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"};function escapedRegExp(str){var sanitize=str.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(sanitize);}function strftime(offsetObject){return function(format){var directives=format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(directives){for(var i=0,len=directives.length;i<len;++i){var directive=directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),regexp=escapedRegExp(directive[0]),modifier=directive[1]||"",plural=directive[3]||"",value=null;directive=directive[2];if(DIRECTIVE_KEY_MAP.hasOwnProperty(directive)){value=DIRECTIVE_KEY_MAP[directive];value=Number(offsetObject[value]);}if(value!==null){if(modifier==="!"){value=pluralize(plural,value);}if(modifier===""){if(value<10){value="0"+value.toString();}}format=format.replace(regexp,value.toString());}}}format=format.replace(/%%/,"%");return format;};}function pluralize(format,count){var plural="s",singular="";if(format){format=format.replace(/(:|;|\s)/gi,"").split(/\,/);if(format.length===1){plural=format[0];}else{singular=format[0];plural=format[1];}}if(Math.abs(count)>1){return plural;}else{return singular;}}var Countdown=function Countdown(el,finalDate,options){this.el=el;this.$el=$(el);this.interval=null;this.offset={};this.options=$.extend({},defaultOptions);this.instanceNumber=instances.length;instances.push(this);this.$el.data("countdown-instance",this.instanceNumber);if(options){if(typeof options==="function"){this.$el.on("update.countdown",options);this.$el.on("stoped.countdown",options);this.$el.on("finish.countdown",options);}else{this.options=$.extend({},defaultOptions,options);}}this.setFinalDate(finalDate);if(this.options.defer===false){this.start();}};$.extend(Countdown.prototype,{start:function start(){if(this.interval!==null){clearInterval(this.interval);}var self=this;this.update();this.interval=setInterval(function(){self.update.call(self);},this.options.precision);},stop:function stop(){clearInterval(this.interval);this.interval=null;this.dispatchEvent("stoped");},toggle:function toggle(){if(this.interval){this.stop();}else{this.start();}},pause:function pause(){this.stop();},resume:function resume(){this.start();},remove:function remove(){this.stop.call(this);instances[this.instanceNumber]=null;delete this.$el.data().countdownInstance;},setFinalDate:function setFinalDate(value){this.finalDate=parseDateString(value);},update:function update(){if(this.$el.closest("html").length===0){this.remove();return;}var hasEventsAttached=$._data(this.el,"events")!==undefined,now=new Date(),newTotalSecsLeft;newTotalSecsLeft=this.finalDate.getTime()-now.getTime();newTotalSecsLeft=Math.ceil(newTotalSecsLeft/1e3);newTotalSecsLeft=!this.options.elapse&&newTotalSecsLeft<0?0:Math.abs(newTotalSecsLeft);if(this.totalSecsLeft===newTotalSecsLeft||!hasEventsAttached){return;}else{this.totalSecsLeft=newTotalSecsLeft;}this.elapsed=now>=this.finalDate;this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-now.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft};if(!this.options.elapse&&this.totalSecsLeft===0){this.stop();this.dispatchEvent("finish");}else{this.dispatchEvent("update");}},dispatchEvent:function dispatchEvent(eventName){var event=$.Event(eventName+".countdown");event.finalDate=this.finalDate;event.elapsed=this.elapsed;event.offset=$.extend({},this.offset);event.strftime=strftime(this.offset);this.$el.trigger(event);}});$.fn.countdown=function(){var argumentsArray=Array.prototype.slice.call(arguments,0);return this.each(function(){var instanceNumber=$(this).data("countdown-instance");if(instanceNumber!==undefined){var instance=instances[instanceNumber],method=argumentsArray[0];if(Countdown.prototype.hasOwnProperty(method)){instance[method].apply(instance,argumentsArray.slice(1));}else if(String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i)===null){instance.setFinalDate.call(instance,method);instance.start();}else{$.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,method));}}else{new Countdown(this,argumentsArray[0],argumentsArray[1]);}});};});/***/},/* 17 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugins.
 */__webpack_require__(18);window.CountUp=__webpack_require__(19);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Countup');page.initCountup=function(){$('[data-provide~="countup"]:not(.counted)').each(function(){var tag=$(this);var extraOptions={};extraOptions=$.extend(extraOptions,page.getDataOptions(tag));var options={startVal:tag.dataAttr('from',0),endVal:tag.dataAttr('to',0),options:extraOptions};options=$.extend(options,page.getDataOptions(tag));tag.waypoint({handler:function handler($direction){tag.countup(options).addClass('counted');},offset:'100%'});});};}(jQuery);$.fn.countup=function(params){if(typeof CountUp!=='function'){console.error('countUp.js is a required dependency of countUp-jquery.js.');return;}var defaults={startVal:0,decimals:0,duration:4};if(typeof params==='number'){defaults.endVal=params;}else if(_typeof2(params)==='object'){$.extend(defaults,params);}else{console.error('countUp-jquery requires its argument to be either an object or number');return;}this.each(function(i,elem){var countUp=new CountUp(elem,defaults.startVal,defaults.endVal,defaults.decimals,defaults.duration,defaults.options);countUp.start();});return this;};/***/},/* 18 */ /***/function(module,exports){/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){'use strict';var keyCounter=0;var allWaypoints={};/* http://imakewebthings.com/waypoints/api/waypoint */function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor');}if(!options.element){throw new Error('No element option passed to Waypoint constructor');}if(!options.handler){throw new Error('No handler option passed to Waypoint constructor');}this.key='waypoint-'+keyCounter;this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options);this.element=this.options.element;this.adapter=new Waypoint.Adapter(this.element);this.callback=options.handler;this.axis=this.options.horizontal?'horizontal':'vertical';this.enabled=this.options.enabled;this.triggerPoint=null;this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis});this.context=Waypoint.Context.findOrCreateByElement(this.options.context);if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset];}this.group.add(this);this.context.add(this);allWaypoints[this.key]=this;keyCounter+=1;}/* Private */Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction);};/* Private */Waypoint.prototype.trigger=function(args){if(!this.enabled){return;}if(this.callback){this.callback.apply(this,args);}};/* Public */ /* http://imakewebthings.com/waypoints/api/destroy */Waypoint.prototype.destroy=function(){this.context.remove(this);this.group.remove(this);delete allWaypoints[this.key];};/* Public */ /* http://imakewebthings.com/waypoints/api/disable */Waypoint.prototype.disable=function(){this.enabled=false;return this;};/* Public */ /* http://imakewebthings.com/waypoints/api/enable */Waypoint.prototype.enable=function(){this.context.refresh();this.enabled=true;return this;};/* Public */ /* http://imakewebthings.com/waypoints/api/next */Waypoint.prototype.next=function(){return this.group.next(this);};/* Public */ /* http://imakewebthings.com/waypoints/api/previous */Waypoint.prototype.previous=function(){return this.group.previous(this);};/* Private */Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey]);}for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]();}};/* Public */ /* http://imakewebthings.com/waypoints/api/destroy-all */Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy');};/* Public */ /* http://imakewebthings.com/waypoints/api/disable-all */Waypoint.disableAll=function(){Waypoint.invokeAll('disable');};/* Public */ /* http://imakewebthings.com/waypoints/api/enable-all */Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints){allWaypoints[waypointKey].enabled=true;}return this;};/* Public */ /* http://imakewebthings.com/waypoints/api/refresh-all */Waypoint.refreshAll=function(){Waypoint.Context.refreshAll();};/* Public */ /* http://imakewebthings.com/waypoints/api/viewport-height */Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight;};/* Public */ /* http://imakewebthings.com/waypoints/api/viewport-width */Waypoint.viewportWidth=function(){return document.documentElement.clientWidth;};Waypoint.adapters=[];Waypoint.defaults={context:window,continuous:true,enabled:true,group:'default',horizontal:false,offset:0};Waypoint.offsetAliases={'bottom-in-view':function bottomInView(){return this.context.innerHeight()-this.adapter.outerHeight();},'right-in-view':function rightInView(){return this.context.innerWidth()-this.adapter.outerWidth();}};window.Waypoint=Waypoint;})();(function(){'use strict';function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60);}var keyCounter=0;var contexts={};var Waypoint=window.Waypoint;var oldWindowLoad=window.onload;/* http://imakewebthings.com/waypoints/api/context */function Context(element){this.element=element;this.Adapter=Waypoint.Adapter;this.adapter=new this.Adapter(element);this.key='waypoint-context-'+keyCounter;this.didScroll=false;this.didResize=false;this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()};this.waypoints={vertical:{},horizontal:{}};element.waypointContextKey=this.key;contexts[element.waypointContextKey]=this;keyCounter+=1;if(!Waypoint.windowContext){Waypoint.windowContext=true;Waypoint.windowContext=new Context(window);}this.createThrottledScrollHandler();this.createThrottledResizeHandler();}/* Private */Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical';this.waypoints[axis][waypoint.key]=waypoint;this.refresh();};/* Private */Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal);var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical);var isWindow=this.element==this.element.window;if(horizontalEmpty&&verticalEmpty&&!isWindow){this.adapter.off('.waypoints');delete contexts[this.key];}};/* Private */Context.prototype.createThrottledResizeHandler=function(){var self=this;function resizeHandler(){self.handleResize();self.didResize=false;}this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=true;Waypoint.requestAnimationFrame(resizeHandler);}});};/* Private */Context.prototype.createThrottledScrollHandler=function(){var self=this;function scrollHandler(){self.handleScroll();self.didScroll=false;}this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=true;Waypoint.requestAnimationFrame(scrollHandler);}});};/* Private */Context.prototype.handleResize=function(){Waypoint.Context.refreshAll();};/* Private */Context.prototype.handleScroll=function(){var triggeredGroups={};var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}};for(var axisKey in axes){var axis=axes[axisKey];var isForward=axis.newScroll>axis.oldScroll;var direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(waypoint.triggerPoint===null){continue;}var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint;var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint;var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint;var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;if(crossedForward||crossedBackward){waypoint.queueTrigger(direction);triggeredGroups[waypoint.group.id]=waypoint.group;}}}for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers();}this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll};};/* Private */Context.prototype.innerHeight=function(){/*eslint-disable eqeqeq */if(this.element==this.element.window){return Waypoint.viewportHeight();}/*eslint-enable eqeqeq */return this.adapter.innerHeight();};/* Private */Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key];this.checkEmpty();};/* Private */Context.prototype.innerWidth=function(){/*eslint-disable eqeqeq */if(this.element==this.element.window){return Waypoint.viewportWidth();}/*eslint-enable eqeqeq */return this.adapter.innerWidth();};/* Public */ /* http://imakewebthings.com/waypoints/api/context-destroy */Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey]);}}for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy();}};/* Public */ /* http://imakewebthings.com/waypoints/api/context-refresh */Context.prototype.refresh=function(){/*eslint-disable eqeqeq */var isWindow=this.element==this.element.window;/*eslint-enable eqeqeq */var contextOffset=isWindow?undefined:this.adapter.offset();var triggeredGroups={};var axes;this.handleScroll();axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];var adjustment=waypoint.options.offset;var oldTriggerPoint=waypoint.triggerPoint;var elementOffset=0;var freshWaypoint=oldTriggerPoint==null;var contextModifier,wasBeforeScroll,nowAfterScroll;var triggeredBackward,triggeredForward;if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp];}if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint);}else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment);if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100);}}contextModifier=axis.contextScroll-axis.contextOffset;waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment);wasBeforeScroll=oldTriggerPoint<axis.oldScroll;nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll;triggeredBackward=wasBeforeScroll&&nowAfterScroll;triggeredForward=!wasBeforeScroll&&!nowAfterScroll;if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward);triggeredGroups[waypoint.group.id]=waypoint.group;}else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward);triggeredGroups[waypoint.group.id]=waypoint.group;}else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward);triggeredGroups[waypoint.group.id]=waypoint.group;}}}Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers();}});return this;};/* Private */Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element);};/* Private */Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh();}};/* Public */ /* http://imakewebthings.com/waypoints/api/context-find-by-element */Context.findByElement=function(element){return contexts[element.waypointContextKey];};window.onload=function(){if(oldWindowLoad){oldWindowLoad();}Context.refreshAll();};Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback);};Waypoint.Context=Context;})();(function(){'use strict';function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint;}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint;}var groups={vertical:{},horizontal:{}};var Waypoint=window.Waypoint;/* http://imakewebthings.com/waypoints/api/group */function Group(options){this.name=options.name;this.axis=options.axis;this.id=this.name+'-'+this.axis;this.waypoints=[];this.clearTriggerQueues();groups[this.axis][this.name]=this;}/* Private */Group.prototype.add=function(waypoint){this.waypoints.push(waypoint);};/* Private */Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]};};/* Private */Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction];var reverse=direction==='up'||direction==='left';waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction]);}}}this.clearTriggerQueues();};/* Private */Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);var isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1];};/* Private */Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null;};/* Private */Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint);};/* Private */Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);if(index>-1){this.waypoints.splice(index,1);}};/* Public */ /* http://imakewebthings.com/waypoints/api/first */Group.prototype.first=function(){return this.waypoints[0];};/* Public */ /* http://imakewebthings.com/waypoints/api/last */Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1];};/* Private */Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options);};Waypoint.Group=Group;})();(function(){'use strict';var $=window.jQuery;var Waypoint=window.Waypoint;function JQueryAdapter(element){this.$element=$(element);}$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args);};});$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method];});Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter});Waypoint.Adapter=JQueryAdapter;})();(function(){'use strict';var Waypoint=window.Waypoint;function createExtension(framework){return function(){var waypoints=[];var overrides=arguments[0];if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1]);overrides.handler=arguments[0];}this.each(function(){var options=framework.extend({},overrides,{element:this});if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0];}waypoints.push(new Waypoint(options));});return waypoints;};}if(window.jQuery){window.jQuery.fn.waypoint=createExtension(window.jQuery);}if(window.Zepto){window.Zepto.fn.waypoint=createExtension(window.Zepto);}})();/***/},/* 19 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(a,n){true?!(__WEBPACK_AMD_DEFINE_FACTORY__=n,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(a,n,t){var e=function e(a,n,t,_e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r){0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;}t=i;}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a];}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a];})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix;}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n;}function u(a){return"number"==typeof a&&!isNaN(a);}var l=this;if(l.version=function(){return"1.9.3";},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==_typeof2(r))for(var m in l.options){r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);}""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f){window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];}window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=new Date().getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e);},e);return d=t+e,i;}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a);}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,_e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1));},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n;},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback();},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count));},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF));},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal));},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count));}},l.initialize()&&l.printValue(l.startVal);};return e;});/***/},/* 20 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */window.Granim=__webpack_require__(21);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Granim');page.initGranim=function(){$('[data-granim]').each(function(){var tag=$(this),granim=tag.data('granim').split(','),gradients=[],opacity=[1,1];var len=granim.length;if(len>0){if(granim[0].indexOf('-')>-1){for(var i=0;i<len;i++){gradients[i]=granim[i].split('-');}for(var i=0;i<gradients[0].length;i++){opacity[i]=1;}}else{for(var i=0;i<len/2;i++){gradients[i]=[granim[i*2],granim[i*2+1]];}}}var options={element:tag[0],name:'granim',direction:tag.dataAttr('direction','left-right'),isPausedWhenNotInView:true,opacity:opacity,states:{"default-state":{gradients:gradients,transitionSpeed:5000,loop:true}}};if(tag.hasDataAttr('opacity')){options.opacity=tag.data('opacity').split(',');}if(tag.hasDataAttr('image')){options.image={source:tag.dataAttr('image',''),position:['center','center'],stretchMode:['stretch-if-bigger','stretch-if-bigger'],blendingMode:'multiply'};}var granimInstance=new Granim(options);});};}(jQuery);/***/},/* 21 */ /***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(22);/***/},/* 22 */ /***/function(module,exports,__webpack_require__){"use strict";function Granim(options){this.getElement(options.element);this.x1=0;this.y1=0;this.name=options.name||false;this.elToSetClassOn=options.elToSetClassOn||'body';this.direction=options.direction||'diagonal';this.customDirection=options.customDirection||{};this.validateInput('direction');this.isPausedWhenNotInView=options.isPausedWhenNotInView||false;this.states=options.states;this.stateTransitionSpeed=options.stateTransitionSpeed||1000;this.previousTimeStamp=null;this.progress=0;this.isPaused=false;this.isCleared=false;this.isPausedBecauseNotInView=false;this.context=this.canvas.getContext('2d');this.channels={};this.channelsIndex=0;this.activeState=options.defaultStateName||'default-state';this.isChangingState=false;this.currentColors=[];this.currentColorsPos=[];this.activetransitionSpeed=null;this.eventPolyfill();this.scrollDebounceThreshold=options.scrollDebounceThreshold||300;this.scrollDebounceTimeout=null;this.isImgLoaded=false;this.isCanvasInWindowView=false;this.firstScrollInit=true;this.animating=false;this.gradientLength=this.states[this.activeState].gradients[0].length;if(options.image&&options.image.source){this.image={source:options.image.source,position:options.image.position||['center','center'],stretchMode:options.image.stretchMode||false,blendingMode:options.image.blendingMode||false};}this.events={start:new CustomEvent('granim:start'),end:new CustomEvent('granim:end'),gradientChange:function gradientChange(details){return new CustomEvent('granim:gradientChange',{detail:{isLooping:details.isLooping,colorsFrom:details.colorsFrom,colorsTo:details.colorsTo,activeState:details.activeState},bubbles:false,cancelable:false});}};this.callbacks={onStart:typeof options.onStart==='function'?options.onStart:false,onGradientChange:typeof options.onGradientChange==='function'?options.onGradientChange:false,onEnd:typeof options.onEnd==='function'?options.onEnd:false};this.getDimensions();this.canvas.setAttribute('width',this.x1);this.canvas.setAttribute('height',this.y1);this.setColors();if(this.image){this.validateInput('image');this.prepareImage();}this.pauseWhenNotInViewNameSpace=this.pauseWhenNotInView.bind(this);this.setSizeAttributesNameSpace=this.setSizeAttributes.bind(this);this.onResize();if(this.isPausedWhenNotInView){this.onScroll();}else{if(!this.image){this.refreshColorsAndPos();this.animation=requestAnimationFrame(this.animateColors.bind(this));this.animating=true;}}// Callback and Event
if(this.callbacks.onStart)this.callbacks.onStart();this.canvas.dispatchEvent(this.events.start);}Granim.prototype.animateColors=__webpack_require__(23);Granim.prototype.changeBlendingMode=__webpack_require__(24);Granim.prototype.changeDirection=__webpack_require__(25);Granim.prototype.changeState=__webpack_require__(26);Granim.prototype.clear=__webpack_require__(27);Granim.prototype.convertColorToRgba=__webpack_require__(28);Granim.prototype.destroy=__webpack_require__(29);Granim.prototype.eventPolyfill=__webpack_require__(30);Granim.prototype.getColor=__webpack_require__(31);Granim.prototype.getColorDiff=__webpack_require__(32);Granim.prototype.getColorPos=__webpack_require__(33);Granim.prototype.getColorPosDiff=__webpack_require__(34);Granim.prototype.getCurrentColors=__webpack_require__(35);Granim.prototype.getCurrentColorsPos=__webpack_require__(36);Granim.prototype.getDimensions=__webpack_require__(37);Granim.prototype.getElement=__webpack_require__(38);Granim.prototype.getLightness=__webpack_require__(39);Granim.prototype.makeGradient=__webpack_require__(40);Granim.prototype.onResize=__webpack_require__(41);Granim.prototype.onScroll=__webpack_require__(42);Granim.prototype.pause=__webpack_require__(43);Granim.prototype.pauseWhenNotInView=__webpack_require__(44);Granim.prototype.play=__webpack_require__(45);Granim.prototype.prepareImage=__webpack_require__(46);Granim.prototype.refreshColorsAndPos=__webpack_require__(47);Granim.prototype.setColors=__webpack_require__(48);Granim.prototype.setDirection=__webpack_require__(49);Granim.prototype.setSizeAttributes=__webpack_require__(50);Granim.prototype.triggerError=__webpack_require__(51);Granim.prototype.validateInput=__webpack_require__(52);module.exports=Granim;/***/},/* 23 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(timestamp){var wasWindowIdled=timestamp-this.previousTimeStamp>100;var isLoop=this.states[this.activeState].loop!==undefined?this.states[this.activeState].loop:true;var progressPercent,isLooping,nextGradient;// If tab was inactive then resumed, reset the previous timestamp
if(this.previousTimeStamp===null||wasWindowIdled){this.previousTimeStamp=timestamp;}// Compute progress and save the timestamp
this.progress=this.progress+(timestamp-this.previousTimeStamp);progressPercent=(this.progress/this.activetransitionSpeed*100).toFixed(2);this.previousTimeStamp=timestamp;// Set the new gradient colors in a property
this.refreshColorsAndPos(progressPercent);// Continue the animation or prepare for the next one
if(progressPercent<100){this.animation=requestAnimationFrame(this.animateColors.bind(this));}else{// if the current animation index is inferior to the penultimate gradient
// or to the last gradient with the loop mode activated
if(this.channelsIndex<this.states[this.activeState].gradients.length-2||isLoop){// Set the active transition speed to the active state one after changing state
if(this.isChangingState){this.activetransitionSpeed=this.states[this.activeState].transitionSpeed||5000;this.isChangingState=false;}// Resetting properties
this.previousTimeStamp=null;this.progress=0;this.channelsIndex++;isLooping=false;// If it's going to loop or if it's the transition after the loop
if(this.channelsIndex===this.states[this.activeState].gradients.length-1){isLooping=true;}else if(this.channelsIndex===this.states[this.activeState].gradients.length){this.channelsIndex=0;}// Checking the next gradient to send in args of an event and a callback
nextGradient=this.states[this.activeState].gradients[this.channelsIndex+1]===undefined?this.states[this.activeState].gradients[0]:this.states[this.activeState].gradients[this.channelsIndex+1];// Compute the colors for the transition and render a new frame
this.setColors();this.animation=requestAnimationFrame(this.animateColors.bind(this));// Callback and Event
if(this.callbacks.onGradientChange){this.callbacks.onGradientChange({isLooping:isLooping,colorsFrom:this.states[this.activeState].gradients[this.channelsIndex],colorsTo:nextGradient,activeState:this.activeState});}this.canvas.dispatchEvent(this.events.gradientChange({isLooping:isLooping,colorsFrom:this.states[this.activeState].gradients[this.channelsIndex],colorsTo:nextGradient,activeState:this.activeState}));// Else if it was the last gradient on the list and the loop mode is off
}else{cancelAnimationFrame(this.animation);// Callback and Event
if(this.callbacks.onEnd)this.callbacks.onEnd();this.canvas.dispatchEvent(new CustomEvent('granim:end'));}}};/***/},/* 24 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(newBlendingMode){this.context.clearRect(0,0,this.x1,this.y1);this.context.globalCompositeOperation=this.image.blendingMode=newBlendingMode;this.validateInput('blendingMode');if(this.isPaused)this.refreshColorsAndPos();};/***/},/* 25 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(newDirection){this.context.clearRect(0,0,this.x1,this.y1);this.direction=newDirection;this.validateInput('direction');if(this.isPaused)this.refreshColorsAndPos();};/***/},/* 26 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(newState){var _this=this;// Prevent transitioning to the same state
if(this.activeState===newState){return;}// Setting the good properties for the transition
if(!this.isPaused){this.isPaused=true;this.pause();}this.channelsIndex=-1;this.activetransitionSpeed=this.stateTransitionSpeed;this.activeColorsDiff=[];this.activeColorsPosDiff=[];this.activeColors=this.getCurrentColors();this.activeColorsPos=this.getCurrentColorsPos();this.progress=0;this.previousTimeStamp=null;this.isChangingState=true;// Compute the gradient color and pos diff between the last frame gradient
// and the first one of the new state
this.states[newState].gradients[0].forEach(function(gradientColor,i,arr){var nextColors=_this.convertColorToRgba(_this.getColor(gradientColor));var nextColorsPos=_this.getColorPos(gradientColor,i);var colorDiff=_this.getColorDiff(_this.activeColors[i],nextColors);var colorPosDiff=_this.getColorPosDiff(_this.activeColorsPos[i],nextColorsPos);_this.activeColorsDiff.push(colorDiff);_this.activeColorsPosDiff.push(colorPosDiff);});// Start the animation
this.activeState=newState;this.play();};/***/},/* 27 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){if(!this.isPaused){cancelAnimationFrame(this.animation);}else{this.isPaused=false;}this.isCleared=true;this.context.clearRect(0,0,this.x1,this.y1);};/***/},/* 28 */ /***/function(module,exports,__webpack_require__){"use strict";var regex={hexa:/^#(?:[0-9a-fA-F]{3}){1,2}$/,rgba:/^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(.?\d{1,3})\)$/,rgb:/^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/,hsla:/^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(.?\d{1,3})\)$/,hsl:/^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/},match;module.exports=function(color){switch(identifyColorType(color)){default:this.triggerError('colorType');case'hexa':return hexToRgba(color);case'rgba':return[parseInt(match[1],10),parseInt(match[2],10),parseInt(match[3],10),parseFloat(match[4])];case'rgb':return[parseInt(match[1],10),parseInt(match[2],10),parseInt(match[3],10),1];case'hsla':return hslaToRgb(parseInt(match[1],10)/360,parseInt(match[2],10)/100,parseInt(match[3],10)/100,parseFloat(match[4]));case'hsl':return hslaToRgb(parseInt(match[1],10)/360,parseInt(match[2],10)/100,parseInt(match[3],10)/100,1);}};function identifyColorType(color){var colorTypes=Object.keys(regex);var i=0;for(i;i<colorTypes.length;i++){match=regex[colorTypes[i]].exec(color);if(match)return colorTypes[i];}return false;}function hexToRgba(hex){// Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')
var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b;});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16),1]:null;}function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}function hslaToRgb(h,s,l,a){var r,g,b,q,p;if(s===0){r=g=b=l;// achromatic
}else{q=l<0.5?l*(1+s):l+s-l*s;p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}return[Math.round(r*255),Math.round(g*255),Math.round(b*255),a];}/***/},/* 29 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){this.onResize('removeListeners');this.onScroll('removeListeners');this.clear();};/***/},/* 30 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){if(typeof window.CustomEvent==='function')return;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;};/***/},/* 31 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(gradientColor){if(typeof gradientColor==='string'){return gradientColor;}else if(_typeof2(gradientColor)==='object'&&gradientColor.color){return gradientColor.color;}else{this.triggerError('gradient.color');}};/***/},/* 32 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(colorA,colorB){var i=0;var colorDiff=[];for(i;i<4;i++){colorDiff.push(colorB[i]-colorA[i]);}return colorDiff;};/***/},/* 33 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(gradientColor,i){if(_typeof2(gradientColor)==='object'&&gradientColor.pos){return gradientColor.pos;}else{// Ensure first and last position to be 0 and 100
return parseFloat(!i?0:(1/(this.gradientLength-1)*i).toFixed(2));}};/***/},/* 34 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(posA,posB){return posB-posA;};/***/},/* 35 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var i,j;var currentColors=[];for(i=0;i<this.currentColors.length;i++){currentColors.push([]);for(j=0;j<4;j++){currentColors[i].push(this.currentColors[i][j]);}}// Return a deep copy of the current colors
return currentColors;};/***/},/* 36 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var currentColorsPos=[],i;for(i=0;i<this.currentColorsPos.length;i++){currentColorsPos.push(this.currentColorsPos[i]);}// Return a deep copy of the current colors
return currentColorsPos;};/***/},/* 37 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){this.x1=this.canvas.offsetWidth;this.y1=this.canvas.offsetHeight;};/***/},/* 38 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(element){if(element instanceof HTMLCanvasElement){this.canvas=element;}else if(typeof element==='string'){this.canvas=document.querySelector(element);}else{throw new Error('The element you used is neither a String, nor a HTMLCanvasElement');}if(!this.canvas){throw new Error('`'+element+'` could not be found in the DOM');}};/***/},/* 39 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var currentColors=this.getCurrentColors();var gradientAverage=null;var lightnessAverage,i;var colorsAverage=currentColors.map(function(el){// Compute the average lightness of each color
// in the current gradient
return Math.max(el[0],el[1],el[2]);});for(i=0;i<colorsAverage.length;i++){// Add all the average lightness of each color
gradientAverage=gradientAverage===null?colorsAverage[i]:gradientAverage+colorsAverage[i];if(i===colorsAverage.length-1){// if it's the last lightness average
// divide it by the total length to
// have the global average lightness
lightnessAverage=Math.round(gradientAverage/(i+1));}}return lightnessAverage>=128?'light':'dark';};/***/},/* 40 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var gradient=this.setDirection();var elToSetClassOnClass=document.querySelector(this.elToSetClassOn).classList;var i=0;this.context.clearRect(0,0,this.x1,this.y1);if(this.image){this.context.drawImage(this.imageNode,this.imagePosition.x,this.imagePosition.y,this.imagePosition.width,this.imagePosition.height);}for(i;i<this.currentColors.length;i++){gradient.addColorStop(this.currentColorsPos[i],'rgba('+this.currentColors[i][0]+', '+this.currentColors[i][1]+', '+this.currentColors[i][2]+', '+this.currentColors[i][3]+')');}if(this.name){if(this.getLightness()==='light'){elToSetClassOnClass.remove(this.name+'-dark');elToSetClassOnClass.add(this.name+'-light');}else{elToSetClassOnClass.remove(this.name+'-light');elToSetClassOnClass.add(this.name+'-dark');}}this.context.fillStyle=gradient;this.context.fillRect(0,0,this.x1,this.y1);};/***/},/* 41 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(type){if(type==='removeListeners'){window.removeEventListener('resize',this.setSizeAttributesNameSpace);return;}window.addEventListener('resize',this.setSizeAttributesNameSpace);};/***/},/* 42 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(type){if(type==='removeListeners'){window.removeEventListener('scroll',this.pauseWhenNotInViewNameSpace);return;}window.addEventListener('scroll',this.pauseWhenNotInViewNameSpace);this.pauseWhenNotInViewNameSpace();};/***/},/* 43 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(state){var isPausedBecauseNotInView=state==='isPausedBecauseNotInView';if(this.isCleared)return;if(!isPausedBecauseNotInView)this.isPaused=true;cancelAnimationFrame(this.animation);this.animating=false;};/***/},/* 44 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var _this=this;if(this.scrollDebounceTimeout)clearTimeout(this.scrollDebounceTimeout);this.scrollDebounceTimeout=setTimeout(function(){var elPos=_this.canvas.getBoundingClientRect();_this.isCanvasInWindowView=!(elPos.bottom<0||elPos.right<0||elPos.left>window.innerWidth||elPos.top>window.innerHeight);if(_this.isCanvasInWindowView){if(!_this.isPaused||_this.firstScrollInit){if(_this.image&&!_this.isImgLoaded){return;}_this.isPausedBecauseNotInView=false;_this.play('isPlayedBecauseInView');_this.firstScrollInit=false;}}else{if(!_this.image&&_this.firstScrollInit){_this.refreshColorsAndPos();_this.firstScrollInit=false;}if(!_this.isPaused&&!_this.isPausedBecauseNotInView){_this.isPausedBecauseNotInView=true;_this.pause('isPausedBecauseNotInView');}}},this.scrollDebounceThreshold);};/***/},/* 45 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(state){var isPlayedBecauseInView=state==='isPlayedBecauseInView';if(!isPlayedBecauseInView)this.isPaused=false;this.isCleared=false;if(!this.animating){this.animation=requestAnimationFrame(this.animateColors.bind(this));this.animating=true;}};/***/},/* 46 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var _this=this;if(!this.imagePosition){this.imagePosition={x:0,y:0,width:0,height:0};}if(this.image.blendingMode){this.context.globalCompositeOperation=this.image.blendingMode;}if(this.imageNode){setImagePosition();return;}this.imageNode=new Image();this.imageNode.onerror=function(){throw new Error('Granim: The image source is invalid.');};this.imageNode.onload=function(){_this.imgOriginalWidth=_this.imageNode.width;_this.imgOriginalHeight=_this.imageNode.height;setImagePosition();_this.refreshColorsAndPos();if(!_this.isPausedWhenNotInView||_this.isCanvasInWindowView){_this.animation=requestAnimationFrame(_this.animateColors.bind(_this));}_this.isImgLoaded=true;};this.imageNode.src=this.image.source;function setImagePosition(){var i,currentAxis;for(i=0;i<2;i++){currentAxis=!i?'x':'y';setImageAxisPosition(currentAxis);}function setImageAxisPosition(axis){var canvasWidthOrHeight=_this[axis+'1'];var imgOriginalWidthOrHeight=_this[axis==='x'?'imgOriginalWidth':'imgOriginalHeight'];var imageAlignIndex=axis==='x'?_this.image.position[0]:_this.image.position[1];var imageAxisPosition;switch(imageAlignIndex){case'center':imageAxisPosition=imgOriginalWidthOrHeight>canvasWidthOrHeight?-(imgOriginalWidthOrHeight-canvasWidthOrHeight)/2:(canvasWidthOrHeight-imgOriginalWidthOrHeight)/2;_this.imagePosition[axis]=imageAxisPosition;_this.imagePosition[axis==='x'?'width':'height']=imgOriginalWidthOrHeight;break;case'top':_this.imagePosition['y']=0;_this.imagePosition['height']=imgOriginalWidthOrHeight;break;case'bottom':_this.imagePosition['y']=canvasWidthOrHeight-imgOriginalWidthOrHeight;_this.imagePosition['height']=imgOriginalWidthOrHeight;break;case'right':_this.imagePosition['x']=canvasWidthOrHeight-imgOriginalWidthOrHeight;_this.imagePosition['width']=imgOriginalWidthOrHeight;break;case'left':_this.imagePosition['x']=0;_this.imagePosition['width']=imgOriginalWidthOrHeight;break;}if(_this.image.stretchMode){imageAlignIndex=axis==='x'?_this.image.stretchMode[0]:_this.image.stretchMode[1];switch(imageAlignIndex){case'none':break;case'stretch':_this.imagePosition[axis]=0;_this.imagePosition[axis==='x'?'width':'height']=canvasWidthOrHeight;break;case'stretch-if-bigger':if(imgOriginalWidthOrHeight<canvasWidthOrHeight)break;_this.imagePosition[axis]=0;_this.imagePosition[axis==='x'?'width':'height']=canvasWidthOrHeight;break;case'stretch-if-smaller':if(imgOriginalWidthOrHeight>canvasWidthOrHeight)break;_this.imagePosition[axis]=0;_this.imagePosition[axis==='x'?'width':'height']=canvasWidthOrHeight;break;}}}}};/***/},/* 47 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(progressPercent){var _this=this,activeChannel,activeChannelPos,i,j;// Loop through each colors of the active gradient
for(i=0;i<this.activeColors.length;i++){// Generate RGBA colors
for(j=0;j<4;j++){// If color value [0-255] round to the integer,
// Else if opacity [0-1] round to 2 decimals
activeChannel=_this.activeColors[i][j]+(j!==3?Math.ceil(_this.activeColorsDiff[i][j]/100*progressPercent):Math.round(_this.activeColorsDiff[i][j]/100*progressPercent*100)/100);// Prevent colors values from going < 0 & > 255
if(activeChannel<=255&&activeChannel>=0){_this.currentColors[i][j]=activeChannel;}}// Generate gradient color position
activeChannelPos=parseFloat((_this.activeColorsPos[i]+_this.activeColorsPosDiff[i]/100*progressPercent).toFixed(4));if(activeChannelPos<=1&&activeChannelPos>=0){_this.currentColorsPos[i]=activeChannelPos;}}this.makeGradient();};/***/},/* 48 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var _this=this,colorDiff,colorPosDiff,nextColors,nextColorsPos;if(!this.channels[this.activeState])this.channels[this.activeState]=[];// If the actual channel exist, reassign properties and exit
// (each channel is saved to prevent recomputing it each time)
if(this.channels[this.activeState][this.channelsIndex]!==undefined){this.activeColors=this.channels[this.activeState][this.channelsIndex].colors;this.activeColorsDiff=this.channels[this.activeState][this.channelsIndex].colorsDiff;this.activeColorsPos=this.channels[this.activeState][this.channelsIndex].colorsPos;this.activeColorsPosDiff=this.channels[this.activeState][this.channelsIndex].colorsPosDiff;return;}// Set blank properties
this.channels[this.activeState].push([{}]);this.channels[this.activeState][this.channelsIndex].colors=[];this.channels[this.activeState][this.channelsIndex].colorsDiff=[];this.channels[this.activeState][this.channelsIndex].colorsPos=[];this.channels[this.activeState][this.channelsIndex].colorsPosDiff=[];this.activeColors=[];this.activeColorsDiff=[];this.activeColorsPos=[];this.activeColorsPosDiff=[];// Go on each gradient of the current state
this.states[this.activeState].gradients[this.channelsIndex].forEach(function(color,i){// Push the hex color converted to rgba on the channel and the active color properties
var colorPos=_this.getColorPos(color,i);var color=_this.getColor(color);var rgbaColor=_this.convertColorToRgba(color);var activeChannel=_this.channels[_this.activeState];activeChannel[_this.channelsIndex].colors.push(rgbaColor);_this.activeColors.push(rgbaColor);activeChannel[_this.channelsIndex].colorsPos.push(colorPos);_this.activeColorsPos.push(colorPos);// If it's the first channel to be set, set the currentColors
if(!_this.isCurrentColorsSet){_this.currentColors.push(_this.convertColorToRgba(color));_this.currentColorsPos.push(colorPos);}// If it's the last gradient, compute the color diff between the last gradient and the first one,
// else between the penultimate one and the last one
if(_this.channelsIndex===_this.states[_this.activeState].gradients.length-1){colorDiff=_this.getColorDiff(activeChannel[_this.channelsIndex].colors[i],activeChannel[0].colors[i]);colorPosDiff=_this.getColorPosDiff(activeChannel[_this.channelsIndex].colorsPos[i],activeChannel[0].colorsPos[i]);}else{nextColors=_this.convertColorToRgba(_this.getColor(_this.states[_this.activeState].gradients[_this.channelsIndex+1][i]));nextColorsPos=_this.getColorPos(_this.states[_this.activeState].gradients[_this.channelsIndex+1][i],i);colorDiff=_this.getColorDiff(activeChannel[_this.channelsIndex].colors[i],nextColors);colorPosDiff=_this.getColorPosDiff(activeChannel[_this.channelsIndex].colorsPos[i],nextColorsPos);}activeChannel[_this.channelsIndex].colorsDiff.push(colorDiff);_this.activeColorsDiff.push(colorDiff);activeChannel[_this.channelsIndex].colorsPosDiff.push(colorPosDiff);_this.activeColorsPosDiff.push(colorPosDiff);});this.activetransitionSpeed=this.states[this.activeState].transitionSpeed||5000;this.isCurrentColorsSet=true;};/***/},/* 49 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){var ctx=this.context;switch(this.direction){case'diagonal':return ctx.createLinearGradient(0,0,this.x1,this.y1);case'left-right':return ctx.createLinearGradient(0,0,this.x1,0);case'top-bottom':return ctx.createLinearGradient(this.x1/2,0,this.x1/2,this.y1);case'radial':return ctx.createRadialGradient(this.x1/2,this.y1/2,this.x1/2,this.x1/2,this.y1/2,0);case'custom':return ctx.createLinearGradient(getCustomCoordinateInPixels(this.customDirection.x0,this.x1),getCustomCoordinateInPixels(this.customDirection.y0,this.y1),getCustomCoordinateInPixels(this.customDirection.x1,this.x1),getCustomCoordinateInPixels(this.customDirection.y1,this.y1));}};function getCustomCoordinateInPixels(coordinate,size){return coordinate.indexOf('%')>-1?size/100*parseInt(coordinate.split('%')[0],10):parseInt(coordinate.split('px')[0],10);}/***/},/* 50 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(){this.getDimensions();this.canvas.setAttribute('width',this.x1);this.canvas.setAttribute('height',this.y1);if(this.image)this.prepareImage();this.refreshColorsAndPos();};/***/},/* 51 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(element){var siteURL='https://sarcadass.github.io/granim.js/api.html';throw new Error('Granim: Input error on "'+element+'" option.\nCheck the API '+siteURL+'.');};/***/},/* 52 */ /***/function(module,exports,__webpack_require__){"use strict";module.exports=function(inputType){var xPositionValues=['left','center','right'];var yPositionValues=['top','center','bottom'];var stretchModeValues=['none','stretch','stretch-if-smaller','stretch-if-bigger'];var blendingModeValues=['multiply','screen','normal','overlay','darken','lighten','lighter','color-dodge','color-burn','hard-light','soft-light','difference','exclusion','hue','saturation','color','luminosity'];var directionValues=['diagonal','left-right','top-bottom','radial','custom'];switch(inputType){case'image':// Validate image.position
if(!Array.isArray(this.image.position)||this.image.position.length!==2||xPositionValues.indexOf(this.image.position[0])===-1||yPositionValues.indexOf(this.image.position[1])===-1){this.triggerError('image.position');}// Validate image.stretchMode
if(this.image.stretchMode){if(!Array.isArray(this.image.stretchMode)||this.image.stretchMode.length!==2||stretchModeValues.indexOf(this.image.stretchMode[0])===-1||stretchModeValues.indexOf(this.image.stretchMode[1])===-1){this.triggerError('image.stretchMode');}}break;case'blendingMode':if(blendingModeValues.indexOf(this.image.blendingMode)===-1){this.clear();this.triggerError('blendingMode');}break;case'direction':if(directionValues.indexOf(this.direction)===-1){this.triggerError('direction');}else{if(this.direction==='custom'){if(!areDefinedInPixelsOrPercentage([this.customDirection.x0,this.customDirection.x1,this.customDirection.y0,this.customDirection.y1])){this.triggerError('customDirection');}}}break;}};function areDefinedInPixelsOrPercentage(array){var definedInPixelsOrPercentage=true,i=0,value;while(definedInPixelsOrPercentage&&i<array.length){value=array[i];if(typeof value!=='string'){definedInPixelsOrPercentage=false;}else{var splittedValue=null;var unit=null;if(value.indexOf('px')!==-1)unit='px';if(value.indexOf('%')!==-1)unit='%';splittedValue=value.split(unit).filter(function(value){return value.length>0;});// Check if there is a unit ('px' or '%'),
// a char before the unit,
// no char after the unit,
// the string without the unit is only composed of digits
if(!unit||splittedValue.length>2||!splittedValue[0]||splittedValue[1]||!/^-?\d+\.?\d*$/.test(splittedValue[0])){definedInPixelsOrPercentage=false;}}i++;}return definedInPixelsOrPercentage;}/***/},/* 53 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */__webpack_require__(54);__webpack_require__(55);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Jarallax');page.initJarallax=function(){// Parallax image
//
$('[data-parallax]').each(function(){var tag=$(this);var options={imgSrc:tag.data('parallax'),speed:0.3};if(tag.hasClass('header')){options.speed=0.6;}options=$.extend(options,page.getDataOptions(tag));tag.jarallax(options);});// Video backgrounds
//
$('[data-video]').each(function(){var tag=$(this);var options={videoSrc:tag.data('video'),speed:1};if(options.videoSrc.indexOf('mp4:')>-1){options.speed=0.5;}options=$.extend(options,page.getDataOptions(tag));tag.jarallax(options);});};}(jQuery);/***/},/* 54 */ /***/function(module,exports){/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.6
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports;}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o});},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==_typeof2(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t){i.d(o,n,function(e){return t[e];}.bind(null,n));}return o;},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return i.d(t,"a",t),t;},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},i.p="",i(i.s=11);}([,,function(e,t,o){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call();}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e);};},,function(o,e,t){"use strict";(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o.exports=t;}).call(this,t(5));},function(e,t,o){"use strict";var n,i="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);};n=function(){return this;}();try{n=n||Function("return this")()||(0,eval)("this");}catch(e){"object"===("undefined"==typeof window?"undefined":i(window))&&(n=window);}e.exports=n;},,,,,,function(e,t,o){e.exports=o(12);},function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);},i=l(o(2)),a=o(4),r=l(o(13));function l(e){return e&&e.__esModule?e:{"default":e};}var s=a.window.jarallax;if(a.window.jarallax=r["default"],a.window.jarallax.noConflict=function(){return a.window.jarallax=s,this;},void 0!==a.jQuery){var c=function c(){var e=arguments||[];Array.prototype.unshift.call(e,this);var t=r["default"].apply(a.window,e);return"object"!==(void 0===t?"undefined":n(t))?t:this;};c.constructor=r["default"].constructor;var u=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=c,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=u,this;};}(0,i["default"])(function(){(0,r["default"])(document.querySelectorAll("[data-jarallax]"));});},function(e,j,S){"use strict";(function(e){Object.defineProperty(j,"__esModule",{value:!0});var d=function d(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0){;}}catch(e){i=!0,a=e;}finally{try{!n&&l["return"]&&l["return"]();}finally{if(i)throw a;}}return o;}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance");},t=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e;};}(),p="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);},o=a(S(2)),n=a(S(14)),i=S(4);function a(e){return e&&e.__esModule?e:{"default":e};}var s=-1<navigator.userAgent.indexOf("MSIE ")||-1<navigator.userAgent.indexOf("Trident/")||-1<navigator.userAgent.indexOf("Edge/"),r=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),o=0;o<e.length;o++){if(t&&void 0!==t.style[e[o]])return e[o];}return!1;}(),b=void 0,v=void 0,l=void 0,c=!1,u=!1;function m(e){b=i.window.innerWidth||document.documentElement.clientWidth,v=i.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===e?"undefined":p(e))||"load"!==e.type&&"dom-loaded"!==e.type||(c=!0);}m(),i.window.addEventListener("resize",m),i.window.addEventListener("orientationchange",m),i.window.addEventListener("load",m),(0,o["default"])(function(){m({type:"dom-loaded"});});var f=[],y=!1;function g(){if(f.length){l=void 0!==i.window.pageYOffset?i.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=c||!y||y.width!==b||y.height!==v,o=u||t||!y||y.y!==l;u=c=!1,(t||o)&&(f.forEach(function(e){t&&e.onResize(),o&&e.onScroll();}),y={width:b,height:v,y:l}),(0,n["default"])(g);}}var h=!!e.ResizeObserver&&new e.ResizeObserver(function(e){e&&e.length&&(0,n["default"])(function(){e.forEach(function(e){e.target&&e.target.jarallax&&(c||e.target.jarallax.onResize(),u=!0);});});}),x=0,w=function(){function u(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,u);var o=this;o.instanceID=x++,o.$item=e,o.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var n=o.$item.getAttribute("data-jarallax"),i=JSON.parse(n||"{}");n&&console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");var a=o.$item.dataset||{},r={};if(Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==o.defaults[t]&&(r[t]=a[e]);}),o.options=o.extend({},o.defaults,i,r,t),o.pureOptions=o.extend({},o.options),Object.keys(o.options).forEach(function(e){"true"===o.options[e]?o.options[e]=!0:"false"===o.options[e]&&(o.options[e]=!1);}),o.options.speed=Math.min(2,Math.max(-1,parseFloat(o.options.speed))),(o.options.noAndroid||o.options.noIos)&&(console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),o.options.disableParallax||(o.options.noIos&&o.options.noAndroid?o.options.disableParallax=/iPad|iPhone|iPod|Android/:o.options.noIos?o.options.disableParallax=/iPad|iPhone|iPod/:o.options.noAndroid&&(o.options.disableParallax=/Android/))),"string"==typeof o.options.disableParallax&&(o.options.disableParallax=new RegExp(o.options.disableParallax)),o.options.disableParallax instanceof RegExp){var l=o.options.disableParallax;o.options.disableParallax=function(){return l.test(navigator.userAgent);};}if("function"!=typeof o.options.disableParallax&&(o.options.disableParallax=function(){return!1;}),"string"==typeof o.options.disableVideo&&(o.options.disableVideo=new RegExp(o.options.disableVideo)),o.options.disableVideo instanceof RegExp){var s=o.options.disableVideo;o.options.disableVideo=function(){return s.test(navigator.userAgent);};}"function"!=typeof o.options.disableVideo&&(o.options.disableVideo=function(){return!1;});var c=o.options.elementInViewport;c&&"object"===(void 0===c?"undefined":p(c))&&void 0!==c.length&&(c=d(c,1)[0]);c instanceof Element||(c=null),o.options.elementInViewport=c,o.image={src:o.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},o.initImg()&&o.canInitParallax()&&o.init();}return t(u,[{key:"css",value:function value(t,o){return"string"==typeof o?i.window.getComputedStyle(t).getPropertyValue(o):(o.transform&&r&&(o[r]=o.transform),Object.keys(o).forEach(function(e){t.style[e]=o[e];}),t);}},{key:"extend",value:function value(o){var n=arguments;return o=o||{},Object.keys(arguments).forEach(function(t){n[t]&&Object.keys(n[t]).forEach(function(e){o[e]=n[t][e];});}),o;}},{key:"getWindowData",value:function value(){return{width:b,height:v,y:l};}},{key:"initImg",value:function value(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!e.image.src||"none"===e.image.src));}},{key:"canInitParallax",value:function value(){return r&&!this.options.disableParallax();}},{key:"init",value:function value(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},o={};if(!e.options.keepImg){var n=e.$item.getAttribute("style");if(n&&e.$item.setAttribute("data-jarallax-original-styles",n),e.image.useImgTag){var i=e.image.$item.getAttribute("style");i&&e.image.$item.setAttribute("data-jarallax-original-styles",i);}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),s&&e.css(e.image.$container,{opacity:.9999}),e.image.$container.setAttribute("id","jarallax-container-"+e.instanceID),e.$item.appendChild(e.image.$container),e.image.useImgTag?o=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":"object-fit: "+e.options.imgSize+"; object-position: "+e.options.imgPosition+";","max-width":"none"},t,o):(e.image.$item=document.createElement("div"),e.image.src&&(o=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":'url("'+e.image.src+'")'},t,o))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position)for(var a=0,r=e.$item;null!==r&&r!==document&&0===a;){var l=e.css(r,"-webkit-transform")||e.css(r,"-moz-transform")||e.css(r,"transform");l&&"none"!==l&&(a=1,e.image.position="absolute"),r=r.parentNode;}o.position=e.image.position,e.css(e.image.$item,o),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.automaticResize&&h&&h.observe(e.$item),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList();}},{key:"addToParallaxList",value:function value(){f.push(this),1===f.length&&g();}},{key:"removeFromParallaxList",value:function value(){var o=this;f.forEach(function(e,t){e.instanceID===o.instanceID&&f.splice(t,1);});}},{key:"destroy",value:function value(){var e=this;e.removeFromParallaxList();var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){var o=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),o?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item);}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax;}},{key:"clipContainer",value:function value(){if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),o=t.width,n=t.height;if(!e.$clipStyles)e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);var i="#jarallax-container-"+e.instanceID+" {\n           clip: rect(0 "+o+"px "+n+"px 0);\n           clip: rect(0, "+o+"px, "+n+"px, 0);\n        }";e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i;}}},{key:"coverImage",value:function value(){var e=this,t=e.image.$container.getBoundingClientRect(),o=t.height,n=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=o,l=0;return i&&(n<0?(a=n*Math.max(o,v),v<o&&(a-=n*(o-v))):a=n*(o+v),1<n?r=Math.abs(a-v):n<0?r=a/n+Math.abs(a):r+=(v-o)*(1-n),a/=2),e.parallaxScrollDistance=a,l=i?(v-r)/2:(o-r)/2,e.css(e.image.$item,{height:r+"px",marginTop:l+"px",left:"fixed"===e.image.position?t.left+"px":"0",width:t.width+"px"}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t};}},{key:"isVisible",value:function value(){return this.isElementInViewport||!1;}},{key:"onScroll",value:function value(e){var t=this,o=t.$item.getBoundingClientRect(),n=o.top,i=o.height,a={},r=o;if(t.options.elementInViewport&&(r=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=r.bottom&&0<=r.right&&r.top<=v&&r.left<=b,e||t.isElementInViewport){var l=Math.max(0,n),s=Math.max(0,i+n),c=Math.max(0,-n),u=Math.max(0,n+i-v),d=Math.max(0,i-(n+i-v)),p=Math.max(0,-n+v-i),m=1-2*(v-n)/(v+i),f=1;if(i<v?f=1-(c||u)/i:s<=v?f=s/v:d<=v&&(f=d/v),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(a.transform="translate3d(0,0,0)",a.opacity=f),"scale"===t.options.type||"scale-opacity"===t.options.type){var y=1;t.options.speed<0?y-=t.options.speed*f:y+=t.options.speed*(1-f),a.transform="scale("+y+") translate3d(0,0,0)";}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var g=t.parallaxScrollDistance*m;"absolute"===t.image.position&&(g-=n),a.transform="translate3d(0,"+g+"px,0)";}t.css(t.image.$item,a),t.options.onScroll&&t.options.onScroll.call(t,{section:o,beforeTop:l,beforeTopEnd:s,afterTop:c,beforeBottom:u,beforeBottomEnd:d,afterBottom:p,visiblePercent:f,fromViewportCenter:m});}}},{key:"onResize",value:function value(){this.coverImage(),this.clipContainer();}}]),u;}(),$=function $(e){("object"===("undefined"==typeof HTMLElement?"undefined":p(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":p(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var t=arguments[1],o=Array.prototype.slice.call(arguments,2),n=e.length,i=0,a=void 0;i<n;i++){if("object"===(void 0===t?"undefined":p(t))||void 0===t?e[i].jarallax||(e[i].jarallax=new w(e[i],t)):e[i].jarallax&&(a=e[i].jarallax[t].apply(e[i].jarallax,o)),void 0!==a)return a;}return e;};$.constructor=w,j["default"]=$;}).call(this,S(5));},function(e,t,o){"use strict";var n=o(4),i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(e){var t=+new Date(),o=Math.max(0,16-(t-a)),n=setTimeout(e,o);return a=t,n;},a=+new Date();var r=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(i=i.bind(n),r=r.bind(n)),(e.exports=i).cancel=r;}]);/***/},/* 55 */ /***/function(module,exports){/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports;}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==_typeof2(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t){n.d(o,i,function(e){return t[e];}.bind(null,i));}return o;},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return n.d(t,"a",t),t;},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},n.p="",n(n.s=6);}([,,function(e,t,o){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call();}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e);};},,function(o,e,t){"use strict";(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o.exports=t;}).call(this,t(5));},function(e,t,o){"use strict";var i,n="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);};i=function(){return this;}();try{i=i||Function("return this")()||(0,eval)("this");}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(i=window);}e.exports=i;},function(e,t,o){e.exports=o(7);},function(e,t,o){"use strict";var i=l(o(8)),n=l(o(4)),a=l(o(2)),r=l(o(10));function l(e){return e&&e.__esModule?e:{"default":e};}n["default"].VideoWorker=n["default"].VideoWorker||i["default"],(0,r["default"])(),(0,a["default"])(function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-video]"));});},function(e,t,o){"use strict";e.exports=o(9);},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);},a=function(){function i(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e;};}();function i(){this._done=[],this._fail=[];}i.prototype={execute:function execute(e,t){var o=e.length;for(t=Array.prototype.slice.call(t);o--;){e[o].apply(null,t);}},resolve:function resolve(){this.execute(this._done,arguments);},reject:function reject(){this.execute(this._fail,arguments);},done:function done(e){this._done.push(e);},fail:function fail(e){this._fail.push(e);}};var r=0,l=0,u=0,p=0,s=0,d=new i(),y=new i(),c=function(){function i(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,i);var o=this;o.url=e,o.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},o.options=o.extend({},o.options_default,t),o.videoID=o.parseURL(e),o.videoID&&(o.ID=r++,o.loadAPI(),o.init());}return a(i,[{key:"extend",value:function value(o){var i=arguments;return o=o||{},Object.keys(arguments).forEach(function(t){i[t]&&Object.keys(i[t]).forEach(function(e){o[e]=i[t][e];});}),o;}},{key:"parseURL",value:function value(e){var t,o,i,n,a,r=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],l=!(!(o=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!o[3])&&o[3],u=(i=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),n={},a=0,i.forEach(function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(n["ogv"===t[1]?"ogg":t[1]]=t[2],a=1);}),!!a&&n);return r?(this.type="youtube",r):l?(this.type="vimeo",l):!!u&&(this.type="local",u);}},{key:"isValid",value:function value(){return!!this.videoID;}},{key:"on",value:function value(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t);}},{key:"off",value:function value(o,i){var n=this;this.userEventsList&&this.userEventsList[o]&&(i?this.userEventsList[o].forEach(function(e,t){e===i&&(n.userEventsList[o][t]=!1);}):delete this.userEventsList[o]);}},{key:"fire",value:function value(e){var t=this,o=[].slice.call(arguments,1);this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,o);});}},{key:"play",value:function value(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play();})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()));}},{key:"pause",value:function value(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause();}),"local"===t.type&&(t.player.paused||t.player.pause()));}},{key:"mute",value:function value(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0));}},{key:"unmute",value:function value(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1));}},{key:"setVolume",value:function value(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=this;t.player&&e&&("youtube"===t.type&&t.player.setVolume&&t.player.setVolume(e),"vimeo"===t.type&&t.player.setVolume&&t.player.setVolume(e),"local"===t.type&&(t.$video.volume=e/100));}},{key:"getVolume",value:function value(t){var e=this;e.player?("youtube"===e.type&&e.player.getVolume&&t(e.player.getVolume()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(e);}),"local"===e.type&&t(100*e.$video.volume)):t(!1);}},{key:"getMuted",value:function value(t){var e=this;e.player?("youtube"===e.type&&e.player.isMuted&&t(e.player.isMuted()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(!!e);}),"local"===e.type&&t(e.$video.muted)):t(null);}},{key:"getImageURL",value:function value(t){var o=this;if(o.videoImage)t(o.videoImage);else{if("youtube"===o.type){var e=["maxresdefault","sddefault","hqdefault","0"],i=0,n=new Image();n.onload=function(){120!==(this.naturalWidth||this.width)||i===e.length-1?(o.videoImage="https://img.youtube.com/vi/"+o.videoID+"/"+e[i]+".jpg",t(o.videoImage)):(i++,this.src="https://img.youtube.com/vi/"+o.videoID+"/"+e[i]+".jpg");},n.src="https://img.youtube.com/vi/"+o.videoID+"/"+e[i]+".jpg";}if("vimeo"===o.type){var a=new XMLHttpRequest();a.open("GET","https://vimeo.com/api/v2/video/"+o.videoID+".json",!0),a.onreadystatechange=function(){if(4===this.readyState&&200<=this.status&&this.status<400){var e=JSON.parse(this.responseText);o.videoImage=e[0].thumbnail_large,t(o.videoImage);}},a.send(),a=null;}}}},{key:"getIframe",value:function value(e){this.getVideo(e);}},{key:"getVideo",value:function value(u){var p=this;p.$video?u(p.$video):p.onAPIready(function(){var e=void 0;if(p.$video||((e=document.createElement("div")).style.display="none"),"youtube"===p.type){p.playerOptions={},p.playerOptions.videoId=p.videoID,p.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},p.options.showContols||(p.playerOptions.playerVars.iv_load_policy=3,p.playerOptions.playerVars.modestbranding=1,p.playerOptions.playerVars.controls=0,p.playerOptions.playerVars.showinfo=0,p.playerOptions.playerVars.disablekb=1);var t=void 0,o=void 0;p.playerOptions.events={onReady:function onReady(t){p.options.mute?t.target.mute():p.options.volume&&t.target.setVolume(p.options.volume),p.options.autoplay&&p.play(p.options.startTime),p.fire("ready",t),setInterval(function(){p.getVolume(function(e){p.options.volume!==e&&(p.options.volume=e,p.fire("volumechange",t));});},150);},onStateChange:function onStateChange(e){p.options.loop&&e.data===YT.PlayerState.ENDED&&p.play(p.options.startTime),t||e.data!==YT.PlayerState.PLAYING||(t=1,p.fire("started",e)),e.data===YT.PlayerState.PLAYING&&p.fire("play",e),e.data===YT.PlayerState.PAUSED&&p.fire("pause",e),e.data===YT.PlayerState.ENDED&&p.fire("ended",e),e.data===YT.PlayerState.PLAYING?o=setInterval(function(){p.fire("timeupdate",e),p.options.endTime&&p.player.getCurrentTime()>=p.options.endTime&&(p.options.loop?p.play(p.options.startTime):p.pause());},150):clearInterval(o);}};var i=!p.$video;if(i){var n=document.createElement("div");n.setAttribute("id",p.playerID),e.appendChild(n),document.body.appendChild(e);}p.player=p.player||new window.YT.Player(p.playerID,p.playerOptions),i&&(p.$video=document.getElementById(p.playerID),p.videoWidth=parseInt(p.$video.getAttribute("width"),10)||1280,p.videoHeight=parseInt(p.$video.getAttribute("height"),10)||720);}if("vimeo"===p.type){if(p.playerOptions={id:p.videoID,autopause:0,transparent:0,autoplay:p.options.autoplay?1:0,loop:p.options.loop?1:0,muted:p.options.mute?1:0},p.options.volume&&(p.playerOptions.volume=p.options.volume),p.options.showContols||(p.playerOptions.badge=0,p.playerOptions.byline=0,p.playerOptions.portrait=0,p.playerOptions.title=0),!p.$video){var a="";Object.keys(p.playerOptions).forEach(function(e){""!==a&&(a+="&"),a+=e+"="+encodeURIComponent(p.playerOptions[e]);}),p.$video=document.createElement("iframe"),p.$video.setAttribute("id",p.playerID),p.$video.setAttribute("src","https://player.vimeo.com/video/"+p.videoID+"?"+a),p.$video.setAttribute("frameborder","0"),p.$video.setAttribute("mozallowfullscreen",""),p.$video.setAttribute("allowfullscreen",""),e.appendChild(p.$video),document.body.appendChild(e);}p.player=p.player||new Vimeo.Player(p.$video,p.playerOptions),p.options.startTime&&p.options.autoplay&&p.player.setCurrentTime(p.options.startTime),p.player.getVideoWidth().then(function(e){p.videoWidth=e||1280;}),p.player.getVideoHeight().then(function(e){p.videoHeight=e||720;});var r=void 0;p.player.on("timeupdate",function(e){r||(p.fire("started",e),r=1),p.fire("timeupdate",e),p.options.endTime&&p.options.endTime&&e.seconds>=p.options.endTime&&(p.options.loop?p.play(p.options.startTime):p.pause());}),p.player.on("play",function(e){p.fire("play",e),p.options.startTime&&0===e.seconds&&p.play(p.options.startTime);}),p.player.on("pause",function(e){p.fire("pause",e);}),p.player.on("ended",function(e){p.fire("ended",e);}),p.player.on("loaded",function(e){p.fire("ready",e);}),p.player.on("volumechange",function(e){p.fire("volumechange",e);});}if("local"===p.type){p.$video||(p.$video=document.createElement("video"),p.options.showContols&&(p.$video.controls=!0),p.options.mute?p.$video.muted=!0:p.$video.volume&&(p.$video.volume=p.options.volume/100),p.options.loop&&(p.$video.loop=!0),p.$video.setAttribute("playsinline",""),p.$video.setAttribute("webkit-playsinline",""),p.$video.setAttribute("id",p.playerID),e.appendChild(p.$video),document.body.appendChild(e),Object.keys(p.videoID).forEach(function(e){var t,o,i,n;t=p.$video,o=p.videoID[e],i="video/"+e,(n=document.createElement("source")).src=o,n.type=i,t.appendChild(n);})),p.player=p.player||p.$video;var l=void 0;p.player.addEventListener("playing",function(e){l||p.fire("started",e),l=1;}),p.player.addEventListener("timeupdate",function(e){p.fire("timeupdate",e),p.options.endTime&&p.options.endTime&&this.currentTime>=p.options.endTime&&(p.options.loop?p.play(p.options.startTime):p.pause());}),p.player.addEventListener("play",function(e){p.fire("play",e);}),p.player.addEventListener("pause",function(e){p.fire("pause",e);}),p.player.addEventListener("ended",function(e){p.fire("ended",e);}),p.player.addEventListener("loadedmetadata",function(){p.videoWidth=this.videoWidth||1280,p.videoHeight=this.videoHeight||720,p.fire("ready"),p.options.autoplay&&p.play(p.options.startTime);}),p.player.addEventListener("volumechange",function(e){p.getVolume(function(e){p.options.volume=e;}),p.fire("volumechange",e);});}u(p.$video);});}},{key:"init",value:function value(){this.playerID="VideoWorker-"+this.ID;}},{key:"loadAPI",value:function value(){if(!l||!u){var e="";if("youtube"!==this.type||l||(l=1,e="https://www.youtube.com/iframe_api"),"vimeo"!==this.type||u||(u=1,e="https://player.vimeo.com/api/player.js"),e){var t=document.createElement("script"),o=document.getElementsByTagName("head")[0];t.src=e,o.appendChild(t),t=o=null;}}}},{key:"onAPIready",value:function value(e){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||p?"object"===("undefined"==typeof YT?"undefined":n(YT))&&1===YT.loaded?e():d.done(function(){e();}):(p=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,d.resolve("done"),e();})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||s)"undefined"!=typeof Vimeo?e():y.done(function(){e();});else{s=1;var t=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(t),y.resolve("done"),e());},20);}"local"===this.type&&e();}}]),i;}();t["default"]=c;},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u["default"].jarallax;if(void 0===e)return;var t=e.constructor,i=t.prototype.init;t.prototype.init=function(){var o=this;i.apply(o),o.video&&!o.options.disableVideo()&&o.video.getVideo(function(e){var t=e.parentNode;o.css(e,{position:o.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),o.$video=e,o.image.$container.appendChild(e),t.parentNode.removeChild(t);});};var l=t.prototype.coverImage;t.prototype.coverImage=function(){var e=this,t=l.apply(e),o=!!e.image.$item&&e.image.$item.nodeName;if(t&&e.video&&o&&("IFRAME"===o||"VIDEO"===o)){var i=t.image.height,n=i*e.image.width/e.image.height,a=(t.container.width-n)/2,r=t.image.marginTop;t.container.width>n&&(n=t.container.width,i=n*e.image.height/e.image.width,a=0,r+=(t.image.height-i)/2),"IFRAME"===o&&(i+=400,r-=200),e.css(e.$video,{width:n+"px",marginLeft:a+"px",height:i+"px",marginTop:r+"px"});}return t;};var o=t.prototype.initImg;t.prototype.initImg=function(){var e=this,t=o.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t;};var n=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){var o=this,e=n.apply(o);if(!o.options.videoSrc)return e;var t=new r["default"](o.options.videoSrc,{autoplay:!0,loop:!0,showContols:!1,startTime:o.options.videoStartTime||0,endTime:o.options.videoEndTime||0,mute:o.options.videoVolume?0:1,volume:o.options.videoVolume||0});if(t.isValid())if(e){if(t.on("ready",function(){if(o.options.videoPlayOnlyVisible){var e=o.onScroll;o.onScroll=function(){e.apply(o),o.isVisible()?t.play():t.pause();};}else t.play();}),t.on("started",function(){o.image.$default_item=o.image.$item,o.image.$item=o.$video,o.image.width=o.video.videoWidth||1280,o.image.height=o.video.videoHeight||720,o.options.imgWidth=o.image.width,o.options.imgHeight=o.image.height,o.coverImage(),o.clipContainer(),o.onScroll(),o.image.$default_item&&(o.image.$default_item.style.display="none");}),o.video=t,!o.defaultInitImgResult)return"local"!==t.type?(t.getImageURL(function(e){o.image.src=e,o.init();}),!1):(o.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",!0);}else o.defaultInitImgResult||t.getImageURL(function(e){var t=o.$item.getAttribute("style");t&&o.$item.setAttribute("data-jarallax-original-styles",t),o.css(o.$item,{"background-image":'url("'+e+'")',"background-position":"center","background-size":"cover"});});return e;};var a=t.prototype.destroy;t.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),a.apply(e);};};var r=i(o(8)),u=i(o(4));function i(e){return e&&e.__esModule?e:{"default":e};}}]);/***/},/* 56 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */window.Lity=__webpack_require__(57);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Lity');page.initLity=function(){$(document).on('click','[data-provide~="lightbox"]',Lity);};}(jQuery);/***/},/* 57 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*! Lity - v2.3.1 - 2018-04-20
* http://sorgalla.com/lity/
* Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */(function(window,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(3)],__WEBPACK_AMD_DEFINE_RESULT__=function($){return factory(window,$);}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(typeof window!=="undefined"?window:this,function(window,$){'use strict';var document=window.document;var _win=$(window);var _deferred=$.Deferred;var _html=$('html');var _instances=[];var _attrAriaHidden='aria-hidden';var _dataAriaHidden='lity-'+_attrAriaHidden;var _focusableElementsSelector='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';var _defaultOptions={esc:true,handler:null,handlers:{image:imageHandler,inline:inlineHandler,youtube:youtubeHandler,vimeo:vimeoHandler,googlemaps:googlemapsHandler,facebookvideo:facebookvideoHandler,iframe:iframeHandler},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'};var _imageRegexp=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;var _youtubeRegex=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;var _vimeoRegex=/(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/;var _googlemapsRegex=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i;var _facebookvideoRegex=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i;var _transitionEndEvent=function(){var el=document.createElement('div');var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};for(var name in transEndEventNames){if(el.style[name]!==undefined){return transEndEventNames[name];}}return false;}();function transitionEnd(element){var deferred=_deferred();if(!_transitionEndEvent||!element.length){deferred.resolve();}else{element.one(_transitionEndEvent,deferred.resolve);setTimeout(deferred.resolve,500);}return deferred.promise();}function settings(currSettings,key,value){if(arguments.length===1){return $.extend({},currSettings);}if(typeof key==='string'){if(typeof value==='undefined'){return typeof currSettings[key]==='undefined'?null:currSettings[key];}currSettings[key]=value;}else{$.extend(currSettings,key);}return this;}function parseQueryParams(params){var pairs=decodeURI(params.split('#')[0]).split('&');var obj={},p;for(var i=0,n=pairs.length;i<n;i++){if(!pairs[i]){continue;}p=pairs[i].split('=');obj[p[0]]=p[1];}return obj;}function appendQueryParams(url,params){return url+(url.indexOf('?')>-1?'&':'?')+$.param(params);}function transferHash(originalUrl,newUrl){var pos=originalUrl.indexOf('#');if(-1===pos){return newUrl;}if(pos>0){originalUrl=originalUrl.substr(pos);}return newUrl+originalUrl;}function error(msg){return $('<span class="lity-error"/>').append(msg);}function imageHandler(target,instance){var desc=instance.opener()&&instance.opener().data('lity-desc')||'Image with no description';var img=$('<img src="'+target+'" alt="'+desc+'"/>');var deferred=_deferred();var failed=function failed(){deferred.reject(error('Failed loading image'));};img.on('load',function(){if(this.naturalWidth===0){return failed();}deferred.resolve(img);}).on('error',failed);return deferred.promise();}imageHandler.test=function(target){return _imageRegexp.test(target);};function inlineHandler(target,instance){var el,placeholder,hasHideClass;try{el=$(target);}catch(e){return false;}if(!el.length){return false;}placeholder=$('<i style="display:none !important"/>');hasHideClass=el.hasClass('lity-hide');instance.element().one('lity:remove',function(){placeholder.before(el).remove();if(hasHideClass&&!el.closest('.lity-content').length){el.addClass('lity-hide');}});return el.removeClass('lity-hide').after(placeholder);}function youtubeHandler(target){var matches=_youtubeRegex.exec(target);if(!matches){return false;}return iframeHandler(transferHash(target,appendQueryParams('https://www.youtube'+(matches[2]||'')+'.com/embed/'+matches[4],$.extend({autoplay:1},parseQueryParams(matches[5]||'')))));}function vimeoHandler(target){var matches=_vimeoRegex.exec(target);if(!matches){return false;}return iframeHandler(transferHash(target,appendQueryParams('https://player.vimeo.com/video/'+matches[3],$.extend({autoplay:1},parseQueryParams(matches[4]||'')))));}function facebookvideoHandler(target){var matches=_facebookvideoRegex.exec(target);if(!matches){return false;}if(0!==target.indexOf('http')){target='https:'+target;}return iframeHandler(transferHash(target,appendQueryParams('https://www.facebook.com/plugins/video.php?href='+target,$.extend({autoplay:1},parseQueryParams(matches[4]||'')))));}function googlemapsHandler(target){var matches=_googlemapsRegex.exec(target);if(!matches){return false;}return iframeHandler(transferHash(target,appendQueryParams('https://www.google.'+matches[3]+'/maps?'+matches[6],{output:matches[6].indexOf('layer=c')>0?'svembed':'embed'})));}function iframeHandler(target){return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+target+'"/></div>';}function winHeight(){return document.documentElement.clientHeight?document.documentElement.clientHeight:Math.round(_win.height());}function keydown(e){var current=currentInstance();if(!current){return;}// ESC key
if(e.keyCode===27&&!!current.options('esc')){current.close();}// TAB key
if(e.keyCode===9){handleTabKey(e,current);}}function handleTabKey(e,instance){var focusableElements=instance.element().find(_focusableElementsSelector);var focusedIndex=focusableElements.index(document.activeElement);if(e.shiftKey&&focusedIndex<=0){focusableElements.get(focusableElements.length-1).focus();e.preventDefault();}else if(!e.shiftKey&&focusedIndex===focusableElements.length-1){focusableElements.get(0).focus();e.preventDefault();}}function resize(){$.each(_instances,function(i,instance){instance.resize();});}function registerInstance(instanceToRegister){if(1===_instances.unshift(instanceToRegister)){_html.addClass('lity-active');_win.on({resize:resize,keydown:keydown});}$('body > *').not(instanceToRegister.element()).addClass('lity-hidden').each(function(){var el=$(this);if(undefined!==el.data(_dataAriaHidden)){return;}el.data(_dataAriaHidden,el.attr(_attrAriaHidden)||null);}).attr(_attrAriaHidden,'true');}function removeInstance(instanceToRemove){var show;instanceToRemove.element().attr(_attrAriaHidden,'true');if(1===_instances.length){_html.removeClass('lity-active');_win.off({resize:resize,keydown:keydown});}_instances=$.grep(_instances,function(instance){return instanceToRemove!==instance;});if(!!_instances.length){show=_instances[0].element();}else{show=$('.lity-hidden');}show.removeClass('lity-hidden').each(function(){var el=$(this),oldAttr=el.data(_dataAriaHidden);if(!oldAttr){el.removeAttr(_attrAriaHidden);}else{el.attr(_attrAriaHidden,oldAttr);}el.removeData(_dataAriaHidden);});}function currentInstance(){if(0===_instances.length){return null;}return _instances[0];}function factory(target,instance,handlers,preferredHandler){var handler='inline',content;var currentHandlers=$.extend({},handlers);if(preferredHandler&&currentHandlers[preferredHandler]){content=currentHandlers[preferredHandler](target,instance);handler=preferredHandler;}else{// Run inline and iframe handlers after all other handlers
$.each(['inline','iframe'],function(i,name){delete currentHandlers[name];currentHandlers[name]=handlers[name];});$.each(currentHandlers,function(name,currentHandler){// Handler might be "removed" by setting callback to null
if(!currentHandler){return true;}if(currentHandler.test&&!currentHandler.test(target,instance)){return true;}content=currentHandler(target,instance);if(false!==content){handler=name;return false;}});}return{handler:handler,content:content||''};}function Lity(target,options,opener,activeElement){var self=this;var result;var isReady=false;var isClosed=false;var element;var content;options=$.extend({},_defaultOptions,options);element=$(options.template);// -- API --
self.element=function(){return element;};self.opener=function(){return opener;};self.options=$.proxy(settings,self,options);self.handlers=$.proxy(settings,self,options.handlers);self.resize=function(){if(!isReady||isClosed){return;}content.css('max-height',winHeight()+'px').trigger('lity:resize',[self]);};self.close=function(){if(!isReady||isClosed){return;}isClosed=true;removeInstance(self);var deferred=_deferred();// We return focus only if the current focus is inside this instance
if(activeElement&&(document.activeElement===element[0]||$.contains(element[0],document.activeElement))){try{activeElement.focus();}catch(e){// Ignore exceptions, eg. for SVG elements which can't be
// focused in IE11
}}content.trigger('lity:close',[self]);element.removeClass('lity-opened').addClass('lity-closed');transitionEnd(content.add(element)).always(function(){content.trigger('lity:remove',[self]);element.remove();element=undefined;deferred.resolve();});return deferred.promise();};// -- Initialization --
result=factory(target,self,options.handlers,options.handler);element.attr(_attrAriaHidden,'false').addClass('lity-loading lity-opened lity-'+result.handler).appendTo('body').focus().on('click','[data-lity-close]',function(e){if($(e.target).is('[data-lity-close]')){self.close();}}).trigger('lity:open',[self]);registerInstance(self);$.when(result.content).always(ready);function ready(result){content=$(result).css('max-height',winHeight()+'px');element.find('.lity-loader').each(function(){var loader=$(this);transitionEnd(loader).always(function(){loader.remove();});});element.removeClass('lity-loading').find('.lity-content').empty().append(content);isReady=true;content.trigger('lity:ready',[self]);}}function lity(target,options,opener){if(!target.preventDefault){opener=$(opener);}else{target.preventDefault();opener=$(this);target=opener.data('lity-target')||opener.attr('href')||opener.attr('src');}var instance=new Lity(target,$.extend({},opener.data('lity-options')||opener.data('lity'),options),opener,document.activeElement);if(!target.preventDefault){return instance;}}lity.version='2.3.1';lity.options=$.proxy(settings,lity,_defaultOptions);lity.handlers=$.proxy(settings,lity,_defaultOptions.handlers);lity.current=currentInstance;$(document).on('click.lity','[data-lity]',lity);return lity;});/***/},/* 58 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */__webpack_require__(59);/**
 * Configure the plugin.
 */+function($){page.registerVendor('PhotoSwipe');page.initPhotoSwipe=function(){$('[data-provide="photoswipe"]').each(function(){var tag=$(this),selector=tag.dataAttr('photoswipe-selector','.gallery-item');$(tag).photoSwipe(selector);});};}(jQuery);/***/},/* 59 */ /***/function(module,exports,__webpack_require__){var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;})({1:[function(require,module,exports){/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(this,function(){'use strict';var PhotoSwipe=function PhotoSwipe(template,UiClass,items,options){/*>>framework-bridge*/ /**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */var framework={features:null,bind:function bind(target,type,listener,unbind){var methodName=(unbind?'remove':'add')+'EventListener';type=type.split(' ');for(var i=0;i<type.length;i++){if(type[i]){target[methodName](type[i],listener,false);}}},isArray:function isArray(obj){return obj instanceof Array;},createEl:function createEl(classes,tag){var el=document.createElement(tag||'div');if(classes){el.className=classes;}return el;},getScrollY:function getScrollY(){var yOffset=window.pageYOffset;return yOffset!==undefined?yOffset:document.documentElement.scrollTop;},unbind:function unbind(target,type,listener){framework.bind(target,type,listener,true);},removeClass:function removeClass(el,className){var reg=new RegExp('(\\s|^)'+className+'(\\s|$)');el.className=el.className.replace(reg,' ').replace(/^\s\s*/,'').replace(/\s\s*$/,'');},addClass:function addClass(el,className){if(!framework.hasClass(el,className)){el.className+=(el.className?' ':'')+className;}},hasClass:function hasClass(el,className){return el.className&&new RegExp('(^|\\s)'+className+'(\\s|$)').test(el.className);},getChildByClass:function getChildByClass(parentEl,childClassName){var node=parentEl.firstChild;while(node){if(framework.hasClass(node,childClassName)){return node;}node=node.nextSibling;}},arraySearch:function arraySearch(array,value,key){var i=array.length;while(i--){if(array[i][key]===value){return i;}}return-1;},extend:function extend(o1,o2,preventOverwrite){for(var prop in o2){if(o2.hasOwnProperty(prop)){if(preventOverwrite&&o1.hasOwnProperty(prop)){continue;}o1[prop]=o2[prop];}}},easing:{sine:{out:function out(k){return Math.sin(k*(Math.PI/2));},inOut:function inOut(k){return-(Math.cos(Math.PI*k)-1)/2;}},cubic:{out:function out(k){return--k*k*k+1;}}/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/},/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */detectFeatures:function detectFeatures(){if(framework.features){return framework.features;}var helperEl=framework.createEl(),helperStyle=helperEl.style,vendor='',features={};// IE8 and below
features.oldIE=document.all&&!document.addEventListener;features.touch='ontouchstart'in window;if(window.requestAnimationFrame){features.raf=window.requestAnimationFrame;features.caf=window.cancelAnimationFrame;}features.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled;// fix false-positive detection of old Android in new IE
// (IE11 ua string contains "Android 4.0")
if(!features.pointerEvent){var ua=navigator.userAgent;// Detect if device is iPhone or iPod and if it's older than iOS 8
// http://stackoverflow.com/a/14223920
// 
// This detection is made because of buggy top/bottom toolbars
// that don't trigger window.resize event.
// For more info refer to _isFixedPosition variable in core.js
if(/iP(hone|od)/.test(navigator.platform)){var v=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);if(v&&v.length>0){v=parseInt(v[1],10);if(v>=1&&v<8){features.isOldIOSPhone=true;}}}// Detect old Android (before KitKat)
// due to bugs related to position:fixed
// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
var match=ua.match(/Android\s([0-9\.]*)/);var androidversion=match?match[1]:0;androidversion=parseFloat(androidversion);if(androidversion>=1){if(androidversion<4.4){features.isOldAndroid=true;// for fixed position bug & performance
}features.androidVersion=androidversion;// for touchend bug
}features.isMobileOpera=/opera mini|opera mobi/i.test(ua);// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
}var styleChecks=['transform','perspective','animationName'],vendors=['','webkit','Moz','ms','O'],styleCheckItem,styleName;for(var i=0;i<4;i++){vendor=vendors[i];for(var a=0;a<3;a++){styleCheckItem=styleChecks[a];// uppercase first letter of property name, if vendor is present
styleName=vendor+(vendor?styleCheckItem.charAt(0).toUpperCase()+styleCheckItem.slice(1):styleCheckItem);if(!features[styleCheckItem]&&styleName in helperStyle){features[styleCheckItem]=styleName;}}if(vendor&&!features.raf){vendor=vendor.toLowerCase();features.raf=window[vendor+'RequestAnimationFrame'];if(features.raf){features.caf=window[vendor+'CancelAnimationFrame']||window[vendor+'CancelRequestAnimationFrame'];}}}if(!features.raf){var lastTime=0;features.raf=function(fn){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){fn(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};features.caf=function(id){clearTimeout(id);};}// Detect SVG support
features.svg=!!document.createElementNS&&!!document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;framework.features=features;return features;}};framework.detectFeatures();// Override addEventListener for old versions of IE
if(framework.features.oldIE){framework.bind=function(target,type,listener,unbind){type=type.split(' ');var methodName=(unbind?'detach':'attach')+'Event',evName,_handleEv=function _handleEv(){listener.handleEvent.call(listener);};for(var i=0;i<type.length;i++){evName=type[i];if(evName){if(_typeof2(listener)==='object'&&listener.handleEvent){if(!unbind){listener['oldIE'+evName]=_handleEv;}else{if(!listener['oldIE'+evName]){return false;}}target[methodName]('on'+evName,listener['oldIE'+evName]);}else{target[methodName]('on'+evName,listener);}}}};}/*>>framework-bridge*/ /*>>core*/ //function(template, UiClass, items, options)
var self=this;/**
 * Static vars, don't change unless you know what you're doing.
 */var DOUBLE_TAP_RADIUS=25,NUM_HOLDERS=3;/**
 * Options
 */var _options={allowPanToNext:true,spacing:0.12,bgOpacity:1,mouseUsed:false,loop:true,pinchToClose:true,closeOnScroll:true,closeOnVerticalDrag:true,verticalDragRange:0.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:false,focus:true,escKey:true,arrowKeys:true,mainScrollEndFriction:0.35,panEndFriction:0.35,isClickableElement:function isClickableElement(el){return el.tagName==='A';},getDoubleTapZoom:function getDoubleTapZoom(isMouseClick,item){if(isMouseClick){return 1;}else{return item.initialZoomLevel<0.7?1:1.33;}},maxSpreadZoom:1.33,modal:true,// not fully implemented yet
scaleMode:'fit'// TODO
};framework.extend(_options,options);/**
 * Private helper variables & functions
 */var _getEmptyPoint=function _getEmptyPoint(){return{x:0,y:0};};var _isOpen,_isDestroying,_closedByScroll,_currentItemIndex,_containerStyle,_containerShiftIndex,_currPanDist=_getEmptyPoint(),_startPanOffset=_getEmptyPoint(),_panOffset=_getEmptyPoint(),_upMoveEvents,// drag move, drag end & drag cancel events array
_downEvents,// drag start events array
_globalEventHandlers,_viewportSize={},_currZoomLevel,_startZoomLevel,_translatePrefix,_translateSufix,_updateSizeInterval,_itemsNeedUpdate,_currPositionIndex=0,_offset={},_slideSize=_getEmptyPoint(),// size of slide area, including spacing
_itemHolders,_prevItemIndex,_indexDiff=0,// difference of indexes since last content update
_dragStartEvent,_dragMoveEvent,_dragEndEvent,_dragCancelEvent,_transformKey,_pointerEventEnabled,_isFixedPosition=true,_likelyTouchDevice,_modules=[],_requestAF,_cancelAF,_initalClassName,_initalWindowScrollY,_oldIE,_currentWindowScrollY,_features,_windowVisibleSize={},_renderMaxResolution=false,// Registers PhotoSWipe module (History, Controller ...)
_registerModule=function _registerModule(name,module){framework.extend(self,module.publicMethods);_modules.push(name);},_getLoopedId=function _getLoopedId(index){var numSlides=_getNumItems();if(index>numSlides-1){return index-numSlides;}else if(index<0){return numSlides+index;}return index;},// Micro bind/trigger
_listeners={},_listen=function _listen(name,fn){if(!_listeners[name]){_listeners[name]=[];}return _listeners[name].push(fn);},_shout=function _shout(name){var listeners=_listeners[name];if(listeners){var args=Array.prototype.slice.call(arguments);args.shift();for(var i=0;i<listeners.length;i++){listeners[i].apply(self,args);}}},_getCurrentTime=function _getCurrentTime(){return new Date().getTime();},_applyBgOpacity=function _applyBgOpacity(opacity){_bgOpacity=opacity;self.bg.style.opacity=opacity*_options.bgOpacity;},_applyZoomTransform=function _applyZoomTransform(styleObj,x,y,zoom,item){if(!_renderMaxResolution||item&&item!==self.currItem){zoom=zoom/(item?item.fitRatio:self.currItem.fitRatio);}styleObj[_transformKey]=_translatePrefix+x+'px, '+y+'px'+_translateSufix+' scale('+zoom+')';},_applyCurrentZoomPan=function _applyCurrentZoomPan(allowRenderResolution){if(_currZoomElementStyle){if(allowRenderResolution){if(_currZoomLevel>self.currItem.fitRatio){if(!_renderMaxResolution){_setImageSize(self.currItem,false,true);_renderMaxResolution=true;}}else{if(_renderMaxResolution){_setImageSize(self.currItem);_renderMaxResolution=false;}}}_applyZoomTransform(_currZoomElementStyle,_panOffset.x,_panOffset.y,_currZoomLevel);}},_applyZoomPanToItem=function _applyZoomPanToItem(item){if(item.container){_applyZoomTransform(item.container.style,item.initialPosition.x,item.initialPosition.y,item.initialZoomLevel,item);}},_setTranslateX=function _setTranslateX(x,elStyle){elStyle[_transformKey]=_translatePrefix+x+'px, 0px'+_translateSufix;},_moveMainScroll=function _moveMainScroll(x,dragging){if(!_options.loop&&dragging){var newSlideIndexOffset=_currentItemIndex+(_slideSize.x*_currPositionIndex-x)/_slideSize.x,delta=Math.round(x-_mainScrollPos.x);if(newSlideIndexOffset<0&&delta>0||newSlideIndexOffset>=_getNumItems()-1&&delta<0){x=_mainScrollPos.x+delta*_options.mainScrollEndFriction;}}_mainScrollPos.x=x;_setTranslateX(x,_containerStyle);},_calculatePanOffset=function _calculatePanOffset(axis,zoomLevel){var m=_midZoomPoint[axis]-_offset[axis];return _startPanOffset[axis]+_currPanDist[axis]+m-m*(zoomLevel/_startZoomLevel);},_equalizePoints=function _equalizePoints(p1,p2){p1.x=p2.x;p1.y=p2.y;if(p2.id){p1.id=p2.id;}},_roundPoint=function _roundPoint(p){p.x=Math.round(p.x);p.y=Math.round(p.y);},_mouseMoveTimeout=null,_onFirstMouseMove=function _onFirstMouseMove(){// Wait until mouse move event is fired at least twice during 100ms
// We do this, because some mobile browsers trigger it on touchstart
if(_mouseMoveTimeout){framework.unbind(document,'mousemove',_onFirstMouseMove);framework.addClass(template,'pswp--has_mouse');_options.mouseUsed=true;_shout('mouseUsed');}_mouseMoveTimeout=setTimeout(function(){_mouseMoveTimeout=null;},100);},_bindEvents=function _bindEvents(){framework.bind(document,'keydown',self);if(_features.transform){// don't bind click event in browsers that don't support transform (mostly IE8)
framework.bind(self.scrollWrap,'click',self);}if(!_options.mouseUsed){framework.bind(document,'mousemove',_onFirstMouseMove);}framework.bind(window,'resize scroll',self);_shout('bindEvents');},_unbindEvents=function _unbindEvents(){framework.unbind(window,'resize',self);framework.unbind(window,'scroll',_globalEventHandlers.scroll);framework.unbind(document,'keydown',self);framework.unbind(document,'mousemove',_onFirstMouseMove);if(_features.transform){framework.unbind(self.scrollWrap,'click',self);}if(_isDragging){framework.unbind(window,_upMoveEvents,self);}_shout('unbindEvents');},_calculatePanBounds=function _calculatePanBounds(zoomLevel,update){var bounds=_calculateItemSize(self.currItem,_viewportSize,zoomLevel);if(update){_currPanBounds=bounds;}return bounds;},_getMinZoomLevel=function _getMinZoomLevel(item){if(!item){item=self.currItem;}return item.initialZoomLevel;},_getMaxZoomLevel=function _getMaxZoomLevel(item){if(!item){item=self.currItem;}return item.w>0?_options.maxSpreadZoom:1;},// Return true if offset is out of the bounds
_modifyDestPanOffset=function _modifyDestPanOffset(axis,destPanBounds,destPanOffset,destZoomLevel){if(destZoomLevel===self.currItem.initialZoomLevel){destPanOffset[axis]=self.currItem.initialPosition[axis];return true;}else{destPanOffset[axis]=_calculatePanOffset(axis,destZoomLevel);if(destPanOffset[axis]>destPanBounds.min[axis]){destPanOffset[axis]=destPanBounds.min[axis];return true;}else if(destPanOffset[axis]<destPanBounds.max[axis]){destPanOffset[axis]=destPanBounds.max[axis];return true;}}return false;},_setupTransforms=function _setupTransforms(){if(_transformKey){// setup 3d transforms
var allow3dTransform=_features.perspective&&!_likelyTouchDevice;_translatePrefix='translate'+(allow3dTransform?'3d(':'(');_translateSufix=_features.perspective?', 0px)':')';return;}// Override zoom/pan/move functions in case old browser is used (most likely IE)
// (so they use left/top/width/height, instead of CSS transform)
_transformKey='left';framework.addClass(template,'pswp--ie');_setTranslateX=function _setTranslateX(x,elStyle){elStyle.left=x+'px';};_applyZoomPanToItem=function _applyZoomPanToItem(item){var zoomRatio=item.fitRatio>1?1:item.fitRatio,s=item.container.style,w=zoomRatio*item.w,h=zoomRatio*item.h;s.width=w+'px';s.height=h+'px';s.left=item.initialPosition.x+'px';s.top=item.initialPosition.y+'px';};_applyCurrentZoomPan=function _applyCurrentZoomPan(){if(_currZoomElementStyle){var s=_currZoomElementStyle,item=self.currItem,zoomRatio=item.fitRatio>1?1:item.fitRatio,w=zoomRatio*item.w,h=zoomRatio*item.h;s.width=w+'px';s.height=h+'px';s.left=_panOffset.x+'px';s.top=_panOffset.y+'px';}};},_onKeyDown=function _onKeyDown(e){var keydownAction='';if(_options.escKey&&e.keyCode===27){keydownAction='close';}else if(_options.arrowKeys){if(e.keyCode===37){keydownAction='prev';}else if(e.keyCode===39){keydownAction='next';}}if(keydownAction){// don't do anything if special key pressed to prevent from overriding default browser actions
// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey){if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}self[keydownAction]();}}},_onGlobalClick=function _onGlobalClick(e){if(!e){return;}// don't allow click event to pass through when triggering after drag or some other gesture
if(_moved||_zoomStarted||_mainScrollAnimating||_verticalDragInitiated){e.preventDefault();e.stopPropagation();}},_updatePageScrollOffset=function _updatePageScrollOffset(){self.setScrollOffset(0,framework.getScrollY());};// Micro animation engine
var _animations={},_numAnimations=0,_stopAnimation=function _stopAnimation(name){if(_animations[name]){if(_animations[name].raf){_cancelAF(_animations[name].raf);}_numAnimations--;delete _animations[name];}},_registerStartAnimation=function _registerStartAnimation(name){if(_animations[name]){_stopAnimation(name);}if(!_animations[name]){_numAnimations++;_animations[name]={};}},_stopAllAnimations=function _stopAllAnimations(){for(var prop in _animations){if(_animations.hasOwnProperty(prop)){_stopAnimation(prop);}}},_animateProp=function _animateProp(name,b,endProp,d,easingFn,onUpdate,onComplete){var startAnimTime=_getCurrentTime(),t;_registerStartAnimation(name);var animloop=function animloop(){if(_animations[name]){t=_getCurrentTime()-startAnimTime;// time diff
//b - beginning (start prop)
//d - anim duration
if(t>=d){_stopAnimation(name);onUpdate(endProp);if(onComplete){onComplete();}return;}onUpdate((endProp-b)*easingFn(t/d)+b);_animations[name].raf=_requestAF(animloop);}};animloop();};var publicMethods={// make a few local variables and functions public
shout:_shout,listen:_listen,viewportSize:_viewportSize,options:_options,isMainScrollAnimating:function isMainScrollAnimating(){return _mainScrollAnimating;},getZoomLevel:function getZoomLevel(){return _currZoomLevel;},getCurrentIndex:function getCurrentIndex(){return _currentItemIndex;},isDragging:function isDragging(){return _isDragging;},isZooming:function isZooming(){return _isZooming;},setScrollOffset:function setScrollOffset(x,y){_offset.x=x;_currentWindowScrollY=_offset.y=y;_shout('updateScrollOffset',_offset);},applyZoomPan:function applyZoomPan(zoomLevel,panX,panY,allowRenderResolution){_panOffset.x=panX;_panOffset.y=panY;_currZoomLevel=zoomLevel;_applyCurrentZoomPan(allowRenderResolution);},init:function init(){if(_isOpen||_isDestroying){return;}var i;self.framework=framework;// basic functionality
self.template=template;// root DOM element of PhotoSwipe
self.bg=framework.getChildByClass(template,'pswp__bg');_initalClassName=template.className;_isOpen=true;_features=framework.detectFeatures();_requestAF=_features.raf;_cancelAF=_features.caf;_transformKey=_features.transform;_oldIE=_features.oldIE;self.scrollWrap=framework.getChildByClass(template,'pswp__scroll-wrap');self.container=framework.getChildByClass(self.scrollWrap,'pswp__container');_containerStyle=self.container.style;// for fast access
// Objects that hold slides (there are only 3 in DOM)
self.itemHolders=_itemHolders=[{el:self.container.children[0],wrap:0,index:-1},{el:self.container.children[1],wrap:0,index:-1},{el:self.container.children[2],wrap:0,index:-1}];// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='none';_setupTransforms();// Setup global events
_globalEventHandlers={resize:self.updateSize,scroll:_updatePageScrollOffset,keydown:_onKeyDown,click:_onGlobalClick};// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
var oldPhone=_features.isOldIOSPhone||_features.isOldAndroid||_features.isMobileOpera;if(!_features.animationName||!_features.transform||oldPhone){_options.showAnimationDuration=_options.hideAnimationDuration=0;}// init modules
for(i=0;i<_modules.length;i++){self['init'+_modules[i]]();}// init
if(UiClass){var ui=self.ui=new UiClass(self,framework);ui.init();}_shout('firstUpdate');_currentItemIndex=_currentItemIndex||_options.index||0;// validate index
if(isNaN(_currentItemIndex)||_currentItemIndex<0||_currentItemIndex>=_getNumItems()){_currentItemIndex=0;}self.currItem=_getItemAt(_currentItemIndex);if(_features.isOldIOSPhone||_features.isOldAndroid){_isFixedPosition=false;}template.setAttribute('aria-hidden','false');if(_options.modal){if(!_isFixedPosition){template.style.position='absolute';template.style.top=framework.getScrollY()+'px';}else{template.style.position='fixed';}}if(_currentWindowScrollY===undefined){_shout('initialLayout');_currentWindowScrollY=_initalWindowScrollY=framework.getScrollY();}// add classes to root element of PhotoSwipe
var rootClasses='pswp--open ';if(_options.mainClass){rootClasses+=_options.mainClass+' ';}if(_options.showHideOpacity){rootClasses+='pswp--animate_opacity ';}rootClasses+=_likelyTouchDevice?'pswp--touch':'pswp--notouch';rootClasses+=_features.animationName?' pswp--css_animation':'';rootClasses+=_features.svg?' pswp--svg':'';framework.addClass(template,rootClasses);self.updateSize();// initial update
_containerShiftIndex=-1;_indexDiff=null;for(i=0;i<NUM_HOLDERS;i++){_setTranslateX((i+_containerShiftIndex)*_slideSize.x,_itemHolders[i].el.style);}if(!_oldIE){framework.bind(self.scrollWrap,_downEvents,self);// no dragging for old IE
}_listen('initialZoomInEnd',function(){self.setContent(_itemHolders[0],_currentItemIndex-1);self.setContent(_itemHolders[2],_currentItemIndex+1);_itemHolders[0].el.style.display=_itemHolders[2].el.style.display='block';if(_options.focus){// focus causes layout, 
// which causes lag during the animation, 
// that's why we delay it untill the initial zoom transition ends
template.focus();}_bindEvents();});// set content for center slide (first time)
self.setContent(_itemHolders[1],_currentItemIndex);self.updateCurrItem();_shout('afterInit');if(!_isFixedPosition){// On all versions of iOS lower than 8.0, we check size of viewport every second.
// 
// This is done to detect when Safari top & bottom bars appear, 
// as this action doesn't trigger any events (like resize). 
// 
// On iOS8 they fixed this.
// 
// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
_updateSizeInterval=setInterval(function(){if(!_numAnimations&&!_isDragging&&!_isZooming&&_currZoomLevel===self.currItem.initialZoomLevel){self.updateSize();}},1000);}framework.addClass(template,'pswp--visible');},// Close the gallery, then destroy it
close:function close(){if(!_isOpen){return;}_isOpen=false;_isDestroying=true;_shout('close');_unbindEvents();_showOrHide(self.currItem,null,true,self.destroy);},// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
destroy:function destroy(){_shout('destroy');if(_showOrHideTimeout){clearTimeout(_showOrHideTimeout);}template.setAttribute('aria-hidden','true');template.className=_initalClassName;if(_updateSizeInterval){clearInterval(_updateSizeInterval);}framework.unbind(self.scrollWrap,_downEvents,self);// we unbind scroll event at the end, as closing animation may depend on it
framework.unbind(window,'scroll',self);_stopDragUpdateLoop();_stopAllAnimations();_listeners=null;},/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */panTo:function panTo(x,y,force){if(!force){if(x>_currPanBounds.min.x){x=_currPanBounds.min.x;}else if(x<_currPanBounds.max.x){x=_currPanBounds.max.x;}if(y>_currPanBounds.min.y){y=_currPanBounds.min.y;}else if(y<_currPanBounds.max.y){y=_currPanBounds.max.y;}}_panOffset.x=x;_panOffset.y=y;_applyCurrentZoomPan();},handleEvent:function handleEvent(e){e=e||window.event;if(_globalEventHandlers[e.type]){_globalEventHandlers[e.type](e);}},goTo:function goTo(index){index=_getLoopedId(index);var diff=index-_currentItemIndex;_indexDiff=diff;_currentItemIndex=index;self.currItem=_getItemAt(_currentItemIndex);_currPositionIndex-=diff;_moveMainScroll(_slideSize.x*_currPositionIndex);_stopAllAnimations();_mainScrollAnimating=false;self.updateCurrItem();},next:function next(){self.goTo(_currentItemIndex+1);},prev:function prev(){self.goTo(_currentItemIndex-1);},// update current zoom/pan objects
updateCurrZoomItem:function updateCurrZoomItem(emulateSetContent){if(emulateSetContent){_shout('beforeChange',0);}// itemHolder[1] is middle (current) item
if(_itemHolders[1].el.children.length){var zoomElement=_itemHolders[1].el.children[0];if(framework.hasClass(zoomElement,'pswp__zoom-wrap')){_currZoomElementStyle=zoomElement.style;}else{_currZoomElementStyle=null;}}else{_currZoomElementStyle=null;}_currPanBounds=self.currItem.bounds;_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;_panOffset.x=_currPanBounds.center.x;_panOffset.y=_currPanBounds.center.y;if(emulateSetContent){_shout('afterChange');}},invalidateCurrItems:function invalidateCurrItems(){_itemsNeedUpdate=true;for(var i=0;i<NUM_HOLDERS;i++){if(_itemHolders[i].item){_itemHolders[i].item.needsUpdate=true;}}},updateCurrItem:function updateCurrItem(beforeAnimation){if(_indexDiff===0){return;}var diffAbs=Math.abs(_indexDiff),tempHolder;if(beforeAnimation&&diffAbs<2){return;}self.currItem=_getItemAt(_currentItemIndex);_renderMaxResolution=false;_shout('beforeChange',_indexDiff);if(diffAbs>=NUM_HOLDERS){_containerShiftIndex+=_indexDiff+(_indexDiff>0?-NUM_HOLDERS:NUM_HOLDERS);diffAbs=NUM_HOLDERS;}for(var i=0;i<diffAbs;i++){if(_indexDiff>0){tempHolder=_itemHolders.shift();_itemHolders[NUM_HOLDERS-1]=tempHolder;// move first to last
_containerShiftIndex++;_setTranslateX((_containerShiftIndex+2)*_slideSize.x,tempHolder.el.style);self.setContent(tempHolder,_currentItemIndex-diffAbs+i+1+1);}else{tempHolder=_itemHolders.pop();_itemHolders.unshift(tempHolder);// move last to first
_containerShiftIndex--;_setTranslateX(_containerShiftIndex*_slideSize.x,tempHolder.el.style);self.setContent(tempHolder,_currentItemIndex+diffAbs-i-1-1);}}// reset zoom/pan on previous item
if(_currZoomElementStyle&&Math.abs(_indexDiff)===1){var prevItem=_getItemAt(_prevItemIndex);if(prevItem.initialZoomLevel!==_currZoomLevel){_calculateItemSize(prevItem,_viewportSize);_setImageSize(prevItem);_applyZoomPanToItem(prevItem);}}// reset diff after update
_indexDiff=0;self.updateCurrZoomItem();_prevItemIndex=_currentItemIndex;_shout('afterChange');},updateSize:function updateSize(force){if(!_isFixedPosition&&_options.modal){var windowScrollY=framework.getScrollY();if(_currentWindowScrollY!==windowScrollY){template.style.top=windowScrollY+'px';_currentWindowScrollY=windowScrollY;}if(!force&&_windowVisibleSize.x===window.innerWidth&&_windowVisibleSize.y===window.innerHeight){return;}_windowVisibleSize.x=window.innerWidth;_windowVisibleSize.y=window.innerHeight;//template.style.width = _windowVisibleSize.x + 'px';
template.style.height=_windowVisibleSize.y+'px';}_viewportSize.x=self.scrollWrap.clientWidth;_viewportSize.y=self.scrollWrap.clientHeight;_updatePageScrollOffset();_slideSize.x=_viewportSize.x+Math.round(_viewportSize.x*_options.spacing);_slideSize.y=_viewportSize.y;_moveMainScroll(_slideSize.x*_currPositionIndex);_shout('beforeResize');// even may be used for example to switch image sources
// don't re-calculate size on inital size update
if(_containerShiftIndex!==undefined){var holder,item,hIndex;for(var i=0;i<NUM_HOLDERS;i++){holder=_itemHolders[i];_setTranslateX((i+_containerShiftIndex)*_slideSize.x,holder.el.style);hIndex=_currentItemIndex+i-1;if(_options.loop&&_getNumItems()>2){hIndex=_getLoopedId(hIndex);}// update zoom level on items and refresh source (if needsUpdate)
item=_getItemAt(hIndex);// re-render gallery item if `needsUpdate`,
// or doesn't have `bounds` (entirely new slide object)
if(item&&(_itemsNeedUpdate||item.needsUpdate||!item.bounds)){self.cleanSlide(item);self.setContent(holder,hIndex);// if "center" slide
if(i===1){self.currItem=item;self.updateCurrZoomItem(true);}item.needsUpdate=false;}else if(holder.index===-1&&hIndex>=0){// add content first time
self.setContent(holder,hIndex);}if(item&&item.container){_calculateItemSize(item,_viewportSize);_setImageSize(item);_applyZoomPanToItem(item);}}_itemsNeedUpdate=false;}_startZoomLevel=_currZoomLevel=self.currItem.initialZoomLevel;_currPanBounds=self.currItem.bounds;if(_currPanBounds){_panOffset.x=_currPanBounds.center.x;_panOffset.y=_currPanBounds.center.y;_applyCurrentZoomPan(true);}_shout('resize');},// Zoom current item to
zoomTo:function zoomTo(destZoomLevel,centerPoint,speed,easingFn,updateFn){/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/if(centerPoint){_startZoomLevel=_currZoomLevel;_midZoomPoint.x=Math.abs(centerPoint.x)-_panOffset.x;_midZoomPoint.y=Math.abs(centerPoint.y)-_panOffset.y;_equalizePoints(_startPanOffset,_panOffset);}var destPanBounds=_calculatePanBounds(destZoomLevel,false),destPanOffset={};_modifyDestPanOffset('x',destPanBounds,destPanOffset,destZoomLevel);_modifyDestPanOffset('y',destPanBounds,destPanOffset,destZoomLevel);var initialZoomLevel=_currZoomLevel;var initialPanOffset={x:_panOffset.x,y:_panOffset.y};_roundPoint(destPanOffset);var onUpdate=function onUpdate(now){if(now===1){_currZoomLevel=destZoomLevel;_panOffset.x=destPanOffset.x;_panOffset.y=destPanOffset.y;}else{_currZoomLevel=(destZoomLevel-initialZoomLevel)*now+initialZoomLevel;_panOffset.x=(destPanOffset.x-initialPanOffset.x)*now+initialPanOffset.x;_panOffset.y=(destPanOffset.y-initialPanOffset.y)*now+initialPanOffset.y;}if(updateFn){updateFn(now);}_applyCurrentZoomPan(now===1);};if(speed){_animateProp('customZoomTo',0,1,speed,easingFn||framework.easing.sine.inOut,onUpdate);}else{onUpdate(1);}}};/*>>core*/ /*>>gestures*/ /**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */var MIN_SWIPE_DISTANCE=30,DIRECTION_CHECK_OFFSET=10;// amount of pixels to drag to determine direction of swipe
var _gestureStartTime,_gestureCheckSpeedTime,// pool of objects that are used during dragging of zooming
p={},// first point
p2={},// second point (for zoom gesture)
delta={},_currPoint={},_startPoint={},_currPointers=[],_startMainScrollPos={},_releaseAnimData,_posPoints=[],// array of points during dragging, used to determine type of gesture
_tempPoint={},_isZoomingIn,_verticalDragInitiated,_oldAndroidTouchEndTimeout,_currZoomedItemIndex=0,_centerPoint=_getEmptyPoint(),_lastReleaseTime=0,_isDragging,// at least one pointer is down
_isMultitouch,// at least two _pointers are down
_zoomStarted,// zoom level changed during zoom gesture
_moved,_dragAnimFrame,_mainScrollShifted,_currentPoints,// array of current touch points
_isZooming,_currPointsDistance,_startPointsDistance,_currPanBounds,_mainScrollPos=_getEmptyPoint(),_currZoomElementStyle,_mainScrollAnimating,// true, if animation after swipe gesture is running
_midZoomPoint=_getEmptyPoint(),_currCenterPoint=_getEmptyPoint(),_direction,_isFirstMove,_opacityChanged,_bgOpacity,_wasOverInitialZoom,_isEqualPoints=function _isEqualPoints(p1,p2){return p1.x===p2.x&&p1.y===p2.y;},_isNearbyPoints=function _isNearbyPoints(touch0,touch1){return Math.abs(touch0.x-touch1.x)<DOUBLE_TAP_RADIUS&&Math.abs(touch0.y-touch1.y)<DOUBLE_TAP_RADIUS;},_calculatePointsDistance=function _calculatePointsDistance(p1,p2){_tempPoint.x=Math.abs(p1.x-p2.x);_tempPoint.y=Math.abs(p1.y-p2.y);return Math.sqrt(_tempPoint.x*_tempPoint.x+_tempPoint.y*_tempPoint.y);},_stopDragUpdateLoop=function _stopDragUpdateLoop(){if(_dragAnimFrame){_cancelAF(_dragAnimFrame);_dragAnimFrame=null;}},_dragUpdateLoop=function _dragUpdateLoop(){if(_isDragging){_dragAnimFrame=_requestAF(_dragUpdateLoop);_renderMovement();}},_canPan=function _canPan(){return!(_options.scaleMode==='fit'&&_currZoomLevel===self.currItem.initialZoomLevel);},// find the closest parent DOM element
_closestElement=function _closestElement(el,fn){if(!el||el===document){return false;}// don't search elements above pswp__scroll-wrap
if(el.getAttribute('class')&&el.getAttribute('class').indexOf('pswp__scroll-wrap')>-1){return false;}if(fn(el)){return el;}return _closestElement(el.parentNode,fn);},_preventObj={},_preventDefaultEventBehaviour=function _preventDefaultEventBehaviour(e,isDown){_preventObj.prevent=!_closestElement(e.target,_options.isClickableElement);_shout('preventDragEvent',e,isDown,_preventObj);return _preventObj.prevent;},_convertTouchToPoint=function _convertTouchToPoint(touch,p){p.x=touch.pageX;p.y=touch.pageY;p.id=touch.identifier;return p;},_findCenterOfPoints=function _findCenterOfPoints(p1,p2,pCenter){pCenter.x=(p1.x+p2.x)*0.5;pCenter.y=(p1.y+p2.y)*0.5;},_pushPosPoint=function _pushPosPoint(time,x,y){if(time-_gestureCheckSpeedTime>50){var o=_posPoints.length>2?_posPoints.shift():{};o.x=x;o.y=y;_posPoints.push(o);_gestureCheckSpeedTime=time;}},_calculateVerticalDragOpacityRatio=function _calculateVerticalDragOpacityRatio(){var yOffset=_panOffset.y-self.currItem.initialPosition.y;// difference between initial and current position
return 1-Math.abs(yOffset/(_viewportSize.y/2));},// points pool, reused during touch events
_ePoint1={},_ePoint2={},_tempPointsArr=[],_tempCounter,_getTouchPoints=function _getTouchPoints(e){// clean up previous points, without recreating array
while(_tempPointsArr.length>0){_tempPointsArr.pop();}if(!_pointerEventEnabled){if(e.type.indexOf('touch')>-1){if(e.touches&&e.touches.length>0){_tempPointsArr[0]=_convertTouchToPoint(e.touches[0],_ePoint1);if(e.touches.length>1){_tempPointsArr[1]=_convertTouchToPoint(e.touches[1],_ePoint2);}}}else{_ePoint1.x=e.pageX;_ePoint1.y=e.pageY;_ePoint1.id='';_tempPointsArr[0]=_ePoint1;//_ePoint1;
}}else{_tempCounter=0;// we can use forEach, as pointer events are supported only in modern browsers
_currPointers.forEach(function(p){if(_tempCounter===0){_tempPointsArr[0]=p;}else if(_tempCounter===1){_tempPointsArr[1]=p;}_tempCounter++;});}return _tempPointsArr;},_panOrMoveMainScroll=function _panOrMoveMainScroll(axis,delta){var panFriction,overDiff=0,newOffset=_panOffset[axis]+delta[axis],startOverDiff,dir=delta[axis]>0,newMainScrollPosition=_mainScrollPos.x+delta.x,mainScrollDiff=_mainScrollPos.x-_startMainScrollPos.x,newPanPos,newMainScrollPos;// calculate fdistance over the bounds and friction
if(newOffset>_currPanBounds.min[axis]||newOffset<_currPanBounds.max[axis]){panFriction=_options.panEndFriction;// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
// Looks not as nice as was expected. Left for history.
// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
}else{panFriction=1;}newOffset=_panOffset[axis]+delta[axis]*panFriction;// move main scroll or start panning
if(_options.allowPanToNext||_currZoomLevel===self.currItem.initialZoomLevel){if(!_currZoomElementStyle){newMainScrollPos=newMainScrollPosition;}else if(_direction==='h'&&axis==='x'&&!_zoomStarted){if(dir){if(newOffset>_currPanBounds.min[axis]){panFriction=_options.panEndFriction;overDiff=_currPanBounds.min[axis]-newOffset;startOverDiff=_currPanBounds.min[axis]-_startPanOffset[axis];}// drag right
if((startOverDiff<=0||mainScrollDiff<0)&&_getNumItems()>1){newMainScrollPos=newMainScrollPosition;if(mainScrollDiff<0&&newMainScrollPosition>_startMainScrollPos.x){newMainScrollPos=_startMainScrollPos.x;}}else{if(_currPanBounds.min.x!==_currPanBounds.max.x){newPanPos=newOffset;}}}else{if(newOffset<_currPanBounds.max[axis]){panFriction=_options.panEndFriction;overDiff=newOffset-_currPanBounds.max[axis];startOverDiff=_startPanOffset[axis]-_currPanBounds.max[axis];}if((startOverDiff<=0||mainScrollDiff>0)&&_getNumItems()>1){newMainScrollPos=newMainScrollPosition;if(mainScrollDiff>0&&newMainScrollPosition<_startMainScrollPos.x){newMainScrollPos=_startMainScrollPos.x;}}else{if(_currPanBounds.min.x!==_currPanBounds.max.x){newPanPos=newOffset;}}}//
}if(axis==='x'){if(newMainScrollPos!==undefined){_moveMainScroll(newMainScrollPos,true);if(newMainScrollPos===_startMainScrollPos.x){_mainScrollShifted=false;}else{_mainScrollShifted=true;}}if(_currPanBounds.min.x!==_currPanBounds.max.x){if(newPanPos!==undefined){_panOffset.x=newPanPos;}else if(!_mainScrollShifted){_panOffset.x+=delta.x*panFriction;}}return newMainScrollPos!==undefined;}}if(!_mainScrollAnimating){if(!_mainScrollShifted){if(_currZoomLevel>self.currItem.fitRatio){_panOffset[axis]+=delta[axis]*panFriction;}}}},// Pointerdown/touchstart/mousedown handler
_onDragStart=function _onDragStart(e){// Allow dragging only via left mouse button.
// As this handler is not added in IE8 - we ignore e.which
// 
// http://www.quirksmode.org/js/events_properties.html
// https://developer.mozilla.org/en-US/docs/Web/API/event.button
if(e.type==='mousedown'&&e.button>0){return;}if(_initialZoomRunning){e.preventDefault();return;}if(_oldAndroidTouchEndTimeout&&e.type==='mousedown'){return;}if(_preventDefaultEventBehaviour(e,true)){e.preventDefault();}_shout('pointerDown');if(_pointerEventEnabled){var pointerIndex=framework.arraySearch(_currPointers,e.pointerId,'id');if(pointerIndex<0){pointerIndex=_currPointers.length;}_currPointers[pointerIndex]={x:e.pageX,y:e.pageY,id:e.pointerId};}var startPointsList=_getTouchPoints(e),numPoints=startPointsList.length;_currentPoints=null;_stopAllAnimations();// init drag
if(!_isDragging||numPoints===1){_isDragging=_isFirstMove=true;framework.bind(window,_upMoveEvents,self);_isZoomingIn=_wasOverInitialZoom=_opacityChanged=_verticalDragInitiated=_mainScrollShifted=_moved=_isMultitouch=_zoomStarted=false;_direction=null;_shout('firstTouchStart',startPointsList);_equalizePoints(_startPanOffset,_panOffset);_currPanDist.x=_currPanDist.y=0;_equalizePoints(_currPoint,startPointsList[0]);_equalizePoints(_startPoint,_currPoint);//_equalizePoints(_startMainScrollPos, _mainScrollPos);
_startMainScrollPos.x=_slideSize.x*_currPositionIndex;_posPoints=[{x:_currPoint.x,y:_currPoint.y}];_gestureCheckSpeedTime=_gestureStartTime=_getCurrentTime();//_mainScrollAnimationEnd(true);
_calculatePanBounds(_currZoomLevel,true);// Start rendering
_stopDragUpdateLoop();_dragUpdateLoop();}// init zoom
if(!_isZooming&&numPoints>1&&!_mainScrollAnimating&&!_mainScrollShifted){_startZoomLevel=_currZoomLevel;_zoomStarted=false;// true if zoom changed at least once
_isZooming=_isMultitouch=true;_currPanDist.y=_currPanDist.x=0;_equalizePoints(_startPanOffset,_panOffset);_equalizePoints(p,startPointsList[0]);_equalizePoints(p2,startPointsList[1]);_findCenterOfPoints(p,p2,_currCenterPoint);_midZoomPoint.x=Math.abs(_currCenterPoint.x)-_panOffset.x;_midZoomPoint.y=Math.abs(_currCenterPoint.y)-_panOffset.y;_currPointsDistance=_startPointsDistance=_calculatePointsDistance(p,p2);}},// Pointermove/touchmove/mousemove handler
_onDragMove=function _onDragMove(e){e.preventDefault();if(_pointerEventEnabled){var pointerIndex=framework.arraySearch(_currPointers,e.pointerId,'id');if(pointerIndex>-1){var p=_currPointers[pointerIndex];p.x=e.pageX;p.y=e.pageY;}}if(_isDragging){var touchesList=_getTouchPoints(e);if(!_direction&&!_moved&&!_isZooming){if(_mainScrollPos.x!==_slideSize.x*_currPositionIndex){// if main scroll position is shifted – direction is always horizontal
_direction='h';}else{var diff=Math.abs(touchesList[0].x-_currPoint.x)-Math.abs(touchesList[0].y-_currPoint.y);// check the direction of movement
if(Math.abs(diff)>=DIRECTION_CHECK_OFFSET){_direction=diff>0?'h':'v';_currentPoints=touchesList;}}}else{_currentPoints=touchesList;}}},// 
_renderMovement=function _renderMovement(){if(!_currentPoints){return;}var numPoints=_currentPoints.length;if(numPoints===0){return;}_equalizePoints(p,_currentPoints[0]);delta.x=p.x-_currPoint.x;delta.y=p.y-_currPoint.y;if(_isZooming&&numPoints>1){// Handle behaviour for more than 1 point
_currPoint.x=p.x;_currPoint.y=p.y;// check if one of two points changed
if(!delta.x&&!delta.y&&_isEqualPoints(_currentPoints[1],p2)){return;}_equalizePoints(p2,_currentPoints[1]);if(!_zoomStarted){_zoomStarted=true;_shout('zoomGestureStarted');}// Distance between two points
var pointsDistance=_calculatePointsDistance(p,p2);var zoomLevel=_calculateZoomLevel(pointsDistance);// slightly over the of initial zoom level
if(zoomLevel>self.currItem.initialZoomLevel+self.currItem.initialZoomLevel/15){_wasOverInitialZoom=true;}// Apply the friction if zoom level is out of the bounds
var zoomFriction=1,minZoomLevel=_getMinZoomLevel(),maxZoomLevel=_getMaxZoomLevel();if(zoomLevel<minZoomLevel){if(_options.pinchToClose&&!_wasOverInitialZoom&&_startZoomLevel<=self.currItem.initialZoomLevel){// fade out background if zooming out
var minusDiff=minZoomLevel-zoomLevel;var percent=1-minusDiff/(minZoomLevel/1.2);_applyBgOpacity(percent);_shout('onPinchClose',percent);_opacityChanged=true;}else{zoomFriction=(minZoomLevel-zoomLevel)/minZoomLevel;if(zoomFriction>1){zoomFriction=1;}zoomLevel=minZoomLevel-zoomFriction*(minZoomLevel/3);}}else if(zoomLevel>maxZoomLevel){// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
zoomFriction=(zoomLevel-maxZoomLevel)/(minZoomLevel*6);if(zoomFriction>1){zoomFriction=1;}zoomLevel=maxZoomLevel+zoomFriction*minZoomLevel;}if(zoomFriction<0){zoomFriction=0;}// distance between touch points after friction is applied
_currPointsDistance=pointsDistance;// _centerPoint - The point in the middle of two pointers
_findCenterOfPoints(p,p2,_centerPoint);// paning with two pointers pressed
_currPanDist.x+=_centerPoint.x-_currCenterPoint.x;_currPanDist.y+=_centerPoint.y-_currCenterPoint.y;_equalizePoints(_currCenterPoint,_centerPoint);_panOffset.x=_calculatePanOffset('x',zoomLevel);_panOffset.y=_calculatePanOffset('y',zoomLevel);_isZoomingIn=zoomLevel>_currZoomLevel;_currZoomLevel=zoomLevel;_applyCurrentZoomPan();}else{// handle behaviour for one point (dragging or panning)
if(!_direction){return;}if(_isFirstMove){_isFirstMove=false;// subtract drag distance that was used during the detection direction  
if(Math.abs(delta.x)>=DIRECTION_CHECK_OFFSET){delta.x-=_currentPoints[0].x-_startPoint.x;}if(Math.abs(delta.y)>=DIRECTION_CHECK_OFFSET){delta.y-=_currentPoints[0].y-_startPoint.y;}}_currPoint.x=p.x;_currPoint.y=p.y;// do nothing if pointers position hasn't changed
if(delta.x===0&&delta.y===0){return;}if(_direction==='v'&&_options.closeOnVerticalDrag){if(!_canPan()){_currPanDist.y+=delta.y;_panOffset.y+=delta.y;var opacityRatio=_calculateVerticalDragOpacityRatio();_verticalDragInitiated=true;_shout('onVerticalDrag',opacityRatio);_applyBgOpacity(opacityRatio);_applyCurrentZoomPan();return;}}_pushPosPoint(_getCurrentTime(),p.x,p.y);_moved=true;_currPanBounds=self.currItem.bounds;var mainScrollChanged=_panOrMoveMainScroll('x',delta);if(!mainScrollChanged){_panOrMoveMainScroll('y',delta);_roundPoint(_panOffset);_applyCurrentZoomPan();}}},// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
_onDragRelease=function _onDragRelease(e){if(_features.isOldAndroid){if(_oldAndroidTouchEndTimeout&&e.type==='mouseup'){return;}// on Android (v4.1, 4.2, 4.3 & possibly older) 
// ghost mousedown/up event isn't preventable via e.preventDefault,
// which causes fake mousedown event
// so we block mousedown/up for 600ms
if(e.type.indexOf('touch')>-1){clearTimeout(_oldAndroidTouchEndTimeout);_oldAndroidTouchEndTimeout=setTimeout(function(){_oldAndroidTouchEndTimeout=0;},600);}}_shout('pointerUp');if(_preventDefaultEventBehaviour(e,false)){e.preventDefault();}var releasePoint;if(_pointerEventEnabled){var pointerIndex=framework.arraySearch(_currPointers,e.pointerId,'id');if(pointerIndex>-1){releasePoint=_currPointers.splice(pointerIndex,1)[0];if(navigator.pointerEnabled){releasePoint.type=e.pointerType||'mouse';}else{var MSPOINTER_TYPES={4:'mouse',// event.MSPOINTER_TYPE_MOUSE
2:'touch',// event.MSPOINTER_TYPE_TOUCH 
3:'pen'// event.MSPOINTER_TYPE_PEN
};releasePoint.type=MSPOINTER_TYPES[e.pointerType];if(!releasePoint.type){releasePoint.type=e.pointerType||'mouse';}}}}var touchList=_getTouchPoints(e),gestureType,numPoints=touchList.length;if(e.type==='mouseup'){numPoints=0;}// Do nothing if there were 3 touch points or more
if(numPoints===2){_currentPoints=null;return true;}// if second pointer released
if(numPoints===1){_equalizePoints(_startPoint,touchList[0]);}// pointer hasn't moved, send "tap release" point
if(numPoints===0&&!_direction&&!_mainScrollAnimating){if(!releasePoint){if(e.type==='mouseup'){releasePoint={x:e.pageX,y:e.pageY,type:'mouse'};}else if(e.changedTouches&&e.changedTouches[0]){releasePoint={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:'touch'};}}_shout('touchRelease',e,releasePoint);}// Difference in time between releasing of two last touch points (zoom gesture)
var releaseTimeDiff=-1;// Gesture completed, no pointers left
if(numPoints===0){_isDragging=false;framework.unbind(window,_upMoveEvents,self);_stopDragUpdateLoop();if(_isZooming){// Two points released at the same time
releaseTimeDiff=0;}else if(_lastReleaseTime!==-1){releaseTimeDiff=_getCurrentTime()-_lastReleaseTime;}}_lastReleaseTime=numPoints===1?_getCurrentTime():-1;if(releaseTimeDiff!==-1&&releaseTimeDiff<150){gestureType='zoom';}else{gestureType='swipe';}if(_isZooming&&numPoints<2){_isZooming=false;// Only second point released
if(numPoints===1){gestureType='zoomPointerUp';}_shout('zoomGestureEnded');}_currentPoints=null;if(!_moved&&!_zoomStarted&&!_mainScrollAnimating&&!_verticalDragInitiated){// nothing to animate
return;}_stopAllAnimations();if(!_releaseAnimData){_releaseAnimData=_initDragReleaseAnimationData();}_releaseAnimData.calculateSwipeSpeed('x');if(_verticalDragInitiated){var opacityRatio=_calculateVerticalDragOpacityRatio();if(opacityRatio<_options.verticalDragRange){self.close();}else{var initalPanY=_panOffset.y,initialBgOpacity=_bgOpacity;_animateProp('verticalDrag',0,1,300,framework.easing.cubic.out,function(now){_panOffset.y=(self.currItem.initialPosition.y-initalPanY)*now+initalPanY;_applyBgOpacity((1-initialBgOpacity)*now+initialBgOpacity);_applyCurrentZoomPan();});_shout('onVerticalDrag',1);}return;}// main scroll 
if((_mainScrollShifted||_mainScrollAnimating)&&numPoints===0){var itemChanged=_finishSwipeMainScrollGesture(gestureType,_releaseAnimData);if(itemChanged){return;}gestureType='zoomPointerUp';}// prevent zoom/pan animation when main scroll animation runs
if(_mainScrollAnimating){return;}// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
if(gestureType!=='swipe'){_completeZoomGesture();return;}// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
if(!_mainScrollShifted&&_currZoomLevel>self.currItem.fitRatio){_completePanGesture(_releaseAnimData);}},// Returns object with data about gesture
// It's created only once and then reused
_initDragReleaseAnimationData=function _initDragReleaseAnimationData(){// temp local vars
var lastFlickDuration,tempReleasePos;// s = this
var s={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function calculateSwipeSpeed(axis){if(_posPoints.length>1){lastFlickDuration=_getCurrentTime()-_gestureCheckSpeedTime+50;tempReleasePos=_posPoints[_posPoints.length-2][axis];}else{lastFlickDuration=_getCurrentTime()-_gestureStartTime;// total gesture duration
tempReleasePos=_startPoint[axis];}s.lastFlickOffset[axis]=_currPoint[axis]-tempReleasePos;s.lastFlickDist[axis]=Math.abs(s.lastFlickOffset[axis]);if(s.lastFlickDist[axis]>20){s.lastFlickSpeed[axis]=s.lastFlickOffset[axis]/lastFlickDuration;}else{s.lastFlickSpeed[axis]=0;}if(Math.abs(s.lastFlickSpeed[axis])<0.1){s.lastFlickSpeed[axis]=0;}s.slowDownRatio[axis]=0.95;s.slowDownRatioReverse[axis]=1-s.slowDownRatio[axis];s.speedDecelerationRatio[axis]=1;},calculateOverBoundsAnimOffset:function calculateOverBoundsAnimOffset(axis,speed){if(!s.backAnimStarted[axis]){if(_panOffset[axis]>_currPanBounds.min[axis]){s.backAnimDestination[axis]=_currPanBounds.min[axis];}else if(_panOffset[axis]<_currPanBounds.max[axis]){s.backAnimDestination[axis]=_currPanBounds.max[axis];}if(s.backAnimDestination[axis]!==undefined){s.slowDownRatio[axis]=0.7;s.slowDownRatioReverse[axis]=1-s.slowDownRatio[axis];if(s.speedDecelerationRatioAbs[axis]<0.05){s.lastFlickSpeed[axis]=0;s.backAnimStarted[axis]=true;_animateProp('bounceZoomPan'+axis,_panOffset[axis],s.backAnimDestination[axis],speed||300,framework.easing.sine.out,function(pos){_panOffset[axis]=pos;_applyCurrentZoomPan();});}}}},// Reduces the speed by slowDownRatio (per 10ms)
calculateAnimOffset:function calculateAnimOffset(axis){if(!s.backAnimStarted[axis]){s.speedDecelerationRatio[axis]=s.speedDecelerationRatio[axis]*(s.slowDownRatio[axis]+s.slowDownRatioReverse[axis]-s.slowDownRatioReverse[axis]*s.timeDiff/10);s.speedDecelerationRatioAbs[axis]=Math.abs(s.lastFlickSpeed[axis]*s.speedDecelerationRatio[axis]);s.distanceOffset[axis]=s.lastFlickSpeed[axis]*s.speedDecelerationRatio[axis]*s.timeDiff;_panOffset[axis]+=s.distanceOffset[axis];}},panAnimLoop:function panAnimLoop(){if(_animations.zoomPan){_animations.zoomPan.raf=_requestAF(s.panAnimLoop);s.now=_getCurrentTime();s.timeDiff=s.now-s.lastNow;s.lastNow=s.now;s.calculateAnimOffset('x');s.calculateAnimOffset('y');_applyCurrentZoomPan();s.calculateOverBoundsAnimOffset('x');s.calculateOverBoundsAnimOffset('y');if(s.speedDecelerationRatioAbs.x<0.05&&s.speedDecelerationRatioAbs.y<0.05){// round pan position
_panOffset.x=Math.round(_panOffset.x);_panOffset.y=Math.round(_panOffset.y);_applyCurrentZoomPan();_stopAnimation('zoomPan');return;}}}};return s;},_completePanGesture=function _completePanGesture(animData){// calculate swipe speed for Y axis (paanning)
animData.calculateSwipeSpeed('y');_currPanBounds=self.currItem.bounds;animData.backAnimDestination={};animData.backAnimStarted={};// Avoid acceleration animation if speed is too low
if(Math.abs(animData.lastFlickSpeed.x)<=0.05&&Math.abs(animData.lastFlickSpeed.y)<=0.05){animData.speedDecelerationRatioAbs.x=animData.speedDecelerationRatioAbs.y=0;// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
animData.calculateOverBoundsAnimOffset('x');animData.calculateOverBoundsAnimOffset('y');return true;}// Animation loop that controls the acceleration after pan gesture ends
_registerStartAnimation('zoomPan');animData.lastNow=_getCurrentTime();animData.panAnimLoop();},_finishSwipeMainScrollGesture=function _finishSwipeMainScrollGesture(gestureType,_releaseAnimData){var itemChanged;if(!_mainScrollAnimating){_currZoomedItemIndex=_currentItemIndex;}var itemsDiff;if(gestureType==='swipe'){var totalShiftDist=_currPoint.x-_startPoint.x,isFastLastFlick=_releaseAnimData.lastFlickDist.x<10;// if container is shifted for more than MIN_SWIPE_DISTANCE, 
// and last flick gesture was in right direction
if(totalShiftDist>MIN_SWIPE_DISTANCE&&(isFastLastFlick||_releaseAnimData.lastFlickOffset.x>20)){// go to prev item
itemsDiff=-1;}else if(totalShiftDist<-MIN_SWIPE_DISTANCE&&(isFastLastFlick||_releaseAnimData.lastFlickOffset.x<-20)){// go to next item
itemsDiff=1;}}var nextCircle;if(itemsDiff){_currentItemIndex+=itemsDiff;if(_currentItemIndex<0){_currentItemIndex=_options.loop?_getNumItems()-1:0;nextCircle=true;}else if(_currentItemIndex>=_getNumItems()){_currentItemIndex=_options.loop?0:_getNumItems()-1;nextCircle=true;}if(!nextCircle||_options.loop){_indexDiff+=itemsDiff;_currPositionIndex-=itemsDiff;itemChanged=true;}}var animateToX=_slideSize.x*_currPositionIndex;var animateToDist=Math.abs(animateToX-_mainScrollPos.x);var finishAnimDuration;if(!itemChanged&&animateToX>_mainScrollPos.x!==_releaseAnimData.lastFlickSpeed.x>0){// "return to current" duration, e.g. when dragging from slide 0 to -1
finishAnimDuration=333;}else{finishAnimDuration=Math.abs(_releaseAnimData.lastFlickSpeed.x)>0?animateToDist/Math.abs(_releaseAnimData.lastFlickSpeed.x):333;finishAnimDuration=Math.min(finishAnimDuration,400);finishAnimDuration=Math.max(finishAnimDuration,250);}if(_currZoomedItemIndex===_currentItemIndex){itemChanged=false;}_mainScrollAnimating=true;_shout('mainScrollAnimStart');_animateProp('mainScroll',_mainScrollPos.x,animateToX,finishAnimDuration,framework.easing.cubic.out,_moveMainScroll,function(){_stopAllAnimations();_mainScrollAnimating=false;_currZoomedItemIndex=-1;if(itemChanged||_currZoomedItemIndex!==_currentItemIndex){self.updateCurrItem();}_shout('mainScrollAnimComplete');});if(itemChanged){self.updateCurrItem(true);}return itemChanged;},_calculateZoomLevel=function _calculateZoomLevel(touchesDistance){return 1/_startPointsDistance*touchesDistance*_startZoomLevel;},// Resets zoom if it's out of bounds
_completeZoomGesture=function _completeZoomGesture(){var destZoomLevel=_currZoomLevel,minZoomLevel=_getMinZoomLevel(),maxZoomLevel=_getMaxZoomLevel();if(_currZoomLevel<minZoomLevel){destZoomLevel=minZoomLevel;}else if(_currZoomLevel>maxZoomLevel){destZoomLevel=maxZoomLevel;}var destOpacity=1,onUpdate,initialOpacity=_bgOpacity;if(_opacityChanged&&!_isZoomingIn&&!_wasOverInitialZoom&&_currZoomLevel<minZoomLevel){//_closedByScroll = true;
self.close();return true;}if(_opacityChanged){onUpdate=function onUpdate(now){_applyBgOpacity((destOpacity-initialOpacity)*now+initialOpacity);};}self.zoomTo(destZoomLevel,0,200,framework.easing.cubic.out,onUpdate);return true;};_registerModule('Gestures',{publicMethods:{initGestures:function initGestures(){// helper function that builds touch/pointer/mouse events
var addEventNames=function addEventNames(pref,down,move,up,cancel){_dragStartEvent=pref+down;_dragMoveEvent=pref+move;_dragEndEvent=pref+up;if(cancel){_dragCancelEvent=pref+cancel;}else{_dragCancelEvent='';}};_pointerEventEnabled=_features.pointerEvent;if(_pointerEventEnabled&&_features.touch){// we don't need touch events, if browser supports pointer events
_features.touch=false;}if(_pointerEventEnabled){if(navigator.pointerEnabled){addEventNames('pointer','down','move','up','cancel');}else{// IE10 pointer events are case-sensitive
addEventNames('MSPointer','Down','Move','Up','Cancel');}}else if(_features.touch){addEventNames('touch','start','move','end','cancel');_likelyTouchDevice=true;}else{addEventNames('mouse','down','move','up');}_upMoveEvents=_dragMoveEvent+' '+_dragEndEvent+' '+_dragCancelEvent;_downEvents=_dragStartEvent;if(_pointerEventEnabled&&!_likelyTouchDevice){_likelyTouchDevice=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1;}// make variable public
self.likelyTouchDevice=_likelyTouchDevice;_globalEventHandlers[_dragStartEvent]=_onDragStart;_globalEventHandlers[_dragMoveEvent]=_onDragMove;_globalEventHandlers[_dragEndEvent]=_onDragRelease;// the Kraken
if(_dragCancelEvent){_globalEventHandlers[_dragCancelEvent]=_globalEventHandlers[_dragEndEvent];}// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
if(_features.touch){_downEvents+=' mousedown';_upMoveEvents+=' mousemove mouseup';_globalEventHandlers.mousedown=_globalEventHandlers[_dragStartEvent];_globalEventHandlers.mousemove=_globalEventHandlers[_dragMoveEvent];_globalEventHandlers.mouseup=_globalEventHandlers[_dragEndEvent];}if(!_likelyTouchDevice){// don't allow pan to next slide from zoomed state on Desktop
_options.allowPanToNext=false;}}}});/*>>gestures*/ /*>>show-hide-transition*/ /**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */var _showOrHideTimeout,_showOrHide=function _showOrHide(item,img,out,completeFn){if(_showOrHideTimeout){clearTimeout(_showOrHideTimeout);}_initialZoomRunning=true;_initialContentSet=true;// dimensions of small thumbnail {x:,y:,w:}.
// Height is optional, as calculated based on large image.
var thumbBounds;if(item.initialLayout){thumbBounds=item.initialLayout;item.initialLayout=null;}else{thumbBounds=_options.getThumbBoundsFn&&_options.getThumbBoundsFn(_currentItemIndex);}var duration=out?_options.hideAnimationDuration:_options.showAnimationDuration;var onComplete=function onComplete(){_stopAnimation('initialZoom');if(!out){_applyBgOpacity(1);if(img){img.style.display='block';}framework.addClass(template,'pswp--animated-in');_shout('initialZoom'+(out?'OutEnd':'InEnd'));}else{self.template.removeAttribute('style');self.bg.removeAttribute('style');}if(completeFn){completeFn();}_initialZoomRunning=false;};// if bounds aren't provided, just open gallery without animation
if(!duration||!thumbBounds||thumbBounds.x===undefined){_shout('initialZoom'+(out?'Out':'In'));_currZoomLevel=item.initialZoomLevel;_equalizePoints(_panOffset,item.initialPosition);_applyCurrentZoomPan();template.style.opacity=out?0:1;_applyBgOpacity(1);if(duration){setTimeout(function(){onComplete();},duration);}else{onComplete();}return;}var startAnimation=function startAnimation(){var closeWithRaf=_closedByScroll,fadeEverything=!self.currItem.src||self.currItem.loadError||_options.showHideOpacity;// apply hw-acceleration to image
if(item.miniImg){item.miniImg.style.webkitBackfaceVisibility='hidden';}if(!out){_currZoomLevel=thumbBounds.w/item.w;_panOffset.x=thumbBounds.x;_panOffset.y=thumbBounds.y-_initalWindowScrollY;self[fadeEverything?'template':'bg'].style.opacity=0.001;_applyCurrentZoomPan();}_registerStartAnimation('initialZoom');if(out&&!closeWithRaf){framework.removeClass(template,'pswp--animated-in');}if(fadeEverything){if(out){framework[(closeWithRaf?'remove':'add')+'Class'](template,'pswp--animate_opacity');}else{setTimeout(function(){framework.addClass(template,'pswp--animate_opacity');},30);}}_showOrHideTimeout=setTimeout(function(){_shout('initialZoom'+(out?'Out':'In'));if(!out){// "in" animation always uses CSS transitions (instead of rAF).
// CSS transition work faster here, 
// as developer may also want to animate other things, 
// like ui on top of sliding area, which can be animated just via CSS
_currZoomLevel=item.initialZoomLevel;_equalizePoints(_panOffset,item.initialPosition);_applyCurrentZoomPan();_applyBgOpacity(1);if(fadeEverything){template.style.opacity=1;}else{_applyBgOpacity(1);}_showOrHideTimeout=setTimeout(onComplete,duration+20);}else{// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
var destZoomLevel=thumbBounds.w/item.w,initialPanOffset={x:_panOffset.x,y:_panOffset.y},initialZoomLevel=_currZoomLevel,initalBgOpacity=_bgOpacity,onUpdate=function onUpdate(now){if(now===1){_currZoomLevel=destZoomLevel;_panOffset.x=thumbBounds.x;_panOffset.y=thumbBounds.y-_currentWindowScrollY;}else{_currZoomLevel=(destZoomLevel-initialZoomLevel)*now+initialZoomLevel;_panOffset.x=(thumbBounds.x-initialPanOffset.x)*now+initialPanOffset.x;_panOffset.y=(thumbBounds.y-_currentWindowScrollY-initialPanOffset.y)*now+initialPanOffset.y;}_applyCurrentZoomPan();if(fadeEverything){template.style.opacity=1-now;}else{_applyBgOpacity(initalBgOpacity-now*initalBgOpacity);}};if(closeWithRaf){_animateProp('initialZoom',0,1,duration,framework.easing.cubic.out,onUpdate,onComplete);}else{onUpdate(1);_showOrHideTimeout=setTimeout(onComplete,duration+20);}}},out?25:90);// Main purpose of this delay is to give browser time to paint and
// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
// Which avoids lag at the beginning of scale transition.
};startAnimation();};/*>>show-hide-transition*/ /*>>items-controller*/ /**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/var _items,_tempPanAreaSize={},_imagesToAppendPool=[],_initialContentSet,_initialZoomRunning,_controllerDefaultOptions={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:false,// TODO
preload:[1,1],getNumItemsFn:function getNumItemsFn(){return _items.length;}};var _getItemAt,_getNumItems,_initialIsLoop,_getZeroBounds=function _getZeroBounds(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}};},_calculateSingleItemPanBounds=function _calculateSingleItemPanBounds(item,realPanElementW,realPanElementH){var bounds=item.bounds;// position of element when it's centered
bounds.center.x=Math.round((_tempPanAreaSize.x-realPanElementW)/2);bounds.center.y=Math.round((_tempPanAreaSize.y-realPanElementH)/2)+item.vGap.top;// maximum pan position
bounds.max.x=realPanElementW>_tempPanAreaSize.x?Math.round(_tempPanAreaSize.x-realPanElementW):bounds.center.x;bounds.max.y=realPanElementH>_tempPanAreaSize.y?Math.round(_tempPanAreaSize.y-realPanElementH)+item.vGap.top:bounds.center.y;// minimum pan position
bounds.min.x=realPanElementW>_tempPanAreaSize.x?0:bounds.center.x;bounds.min.y=realPanElementH>_tempPanAreaSize.y?item.vGap.top:bounds.center.y;},_calculateItemSize=function _calculateItemSize(item,viewportSize,zoomLevel){if(item.src&&!item.loadError){var isInitial=!zoomLevel;if(isInitial){if(!item.vGap){item.vGap={top:0,bottom:0};}// allows overriding vertical margin for individual items
_shout('parseVerticalMargin',item);}_tempPanAreaSize.x=viewportSize.x;_tempPanAreaSize.y=viewportSize.y-item.vGap.top-item.vGap.bottom;if(isInitial){var hRatio=_tempPanAreaSize.x/item.w;var vRatio=_tempPanAreaSize.y/item.h;item.fitRatio=hRatio<vRatio?hRatio:vRatio;//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;
var scaleMode=_options.scaleMode;if(scaleMode==='orig'){zoomLevel=1;}else if(scaleMode==='fit'){zoomLevel=item.fitRatio;}if(zoomLevel>1){zoomLevel=1;}item.initialZoomLevel=zoomLevel;if(!item.bounds){// reuse bounds object
item.bounds=_getZeroBounds();}}if(!zoomLevel){return;}_calculateSingleItemPanBounds(item,item.w*zoomLevel,item.h*zoomLevel);if(isInitial&&zoomLevel===item.initialZoomLevel){item.initialPosition=item.bounds.center;}return item.bounds;}else{item.w=item.h=0;item.initialZoomLevel=item.fitRatio=1;item.bounds=_getZeroBounds();item.initialPosition=item.bounds.center;// if it's not image, we return zero bounds (content is not zoomable)
return item.bounds;}},_appendImage=function _appendImage(index,item,baseDiv,img,preventAnimation,keepPlaceholder){if(item.loadError){return;}if(img){item.imageAppended=true;_setImageSize(item,img,item===self.currItem&&_renderMaxResolution);baseDiv.appendChild(img);if(keepPlaceholder){setTimeout(function(){if(item&&item.loaded&&item.placeholder){item.placeholder.style.display='none';item.placeholder=null;}},500);}}},_preloadImage=function _preloadImage(item){item.loading=true;item.loaded=false;var img=item.img=framework.createEl('pswp__img','img');var onComplete=function onComplete(){item.loading=false;item.loaded=true;if(item.loadComplete){item.loadComplete(item);}else{item.img=null;// no need to store image object
}img.onload=img.onerror=null;img=null;};img.onload=onComplete;img.onerror=function(){item.loadError=true;onComplete();};img.src=item.src;// + '?a=' + Math.random();
return img;},_checkForError=function _checkForError(item,cleanUp){if(item.src&&item.loadError&&item.container){if(cleanUp){item.container.innerHTML='';}item.container.innerHTML=_options.errorMsg.replace('%url%',item.src);return true;}},_setImageSize=function _setImageSize(item,img,maxRes){if(!item.src){return;}if(!img){img=item.container.lastChild;}var w=maxRes?item.w:Math.round(item.w*item.fitRatio),h=maxRes?item.h:Math.round(item.h*item.fitRatio);if(item.placeholder&&!item.loaded){item.placeholder.style.width=w+'px';item.placeholder.style.height=h+'px';}img.style.width=w+'px';img.style.height=h+'px';},_appendImagesPool=function _appendImagesPool(){if(_imagesToAppendPool.length){var poolItem;for(var i=0;i<_imagesToAppendPool.length;i++){poolItem=_imagesToAppendPool[i];if(poolItem.holder.index===poolItem.index){_appendImage(poolItem.index,poolItem.item,poolItem.baseDiv,poolItem.img,false,poolItem.clearPlaceholder);}}_imagesToAppendPool=[];}};_registerModule('Controller',{publicMethods:{lazyLoadItem:function lazyLoadItem(index){index=_getLoopedId(index);var item=_getItemAt(index);if(!item||(item.loaded||item.loading)&&!_itemsNeedUpdate){return;}_shout('gettingData',index,item);if(!item.src){return;}_preloadImage(item);},initController:function initController(){framework.extend(_options,_controllerDefaultOptions,true);self.items=_items=items;_getItemAt=self.getItemAt;_getNumItems=_options.getNumItemsFn;//self.getNumItems;
_initialIsLoop=_options.loop;if(_getNumItems()<3){_options.loop=false;// disable loop if less then 3 items
}_listen('beforeChange',function(diff){var p=_options.preload,isNext=diff===null?true:diff>=0,preloadBefore=Math.min(p[0],_getNumItems()),preloadAfter=Math.min(p[1],_getNumItems()),i;for(i=1;i<=(isNext?preloadAfter:preloadBefore);i++){self.lazyLoadItem(_currentItemIndex+i);}for(i=1;i<=(isNext?preloadBefore:preloadAfter);i++){self.lazyLoadItem(_currentItemIndex-i);}});_listen('initialLayout',function(){self.currItem.initialLayout=_options.getThumbBoundsFn&&_options.getThumbBoundsFn(_currentItemIndex);});_listen('mainScrollAnimComplete',_appendImagesPool);_listen('initialZoomInEnd',_appendImagesPool);_listen('destroy',function(){var item;for(var i=0;i<_items.length;i++){item=_items[i];// remove reference to DOM elements, for GC
if(item.container){item.container=null;}if(item.placeholder){item.placeholder=null;}if(item.img){item.img=null;}if(item.preloader){item.preloader=null;}if(item.loadError){item.loaded=item.loadError=false;}}_imagesToAppendPool=null;});},getItemAt:function getItemAt(index){if(index>=0){return _items[index]!==undefined?_items[index]:false;}return false;},allowProgressiveImg:function allowProgressiveImg(){// 1. Progressive image loading isn't working on webkit/blink 
//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
//    
// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
//    That's why it's disabled on touch devices (mainly because of swipe transition)
//    
// 3. Progressive image loading sometimes doesn't work in IE (up to 11).
// Don't allow progressive loading on non-large touch devices
return _options.forceProgressiveLoading||!_likelyTouchDevice||_options.mouseUsed||screen.width>1200;// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
},setContent:function setContent(holder,index){if(_options.loop){index=_getLoopedId(index);}var prevItem=self.getItemAt(holder.index);if(prevItem){prevItem.container=null;}var item=self.getItemAt(index),img;if(!item){holder.el.innerHTML='';return;}// allow to override data
_shout('gettingData',index,item);holder.index=index;holder.item=item;// base container DIV is created only once for each of 3 holders
var baseDiv=item.container=framework.createEl('pswp__zoom-wrap');if(!item.src&&item.html){if(item.html.tagName){baseDiv.appendChild(item.html);}else{baseDiv.innerHTML=item.html;}}_checkForError(item);_calculateItemSize(item,_viewportSize);if(item.src&&!item.loadError&&!item.loaded){item.loadComplete=function(item){// gallery closed before image finished loading
if(!_isOpen){return;}// check if holder hasn't changed while image was loading
if(holder&&holder.index===index){if(_checkForError(item,true)){item.loadComplete=item.img=null;_calculateItemSize(item,_viewportSize);_applyZoomPanToItem(item);if(holder.index===_currentItemIndex){// recalculate dimensions
self.updateCurrZoomItem();}return;}if(!item.imageAppended){if(_features.transform&&(_mainScrollAnimating||_initialZoomRunning)){_imagesToAppendPool.push({item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder,clearPlaceholder:true});}else{_appendImage(index,item,baseDiv,item.img,_mainScrollAnimating||_initialZoomRunning,true);}}else{// remove preloader & mini-img
if(!_initialZoomRunning&&item.placeholder){item.placeholder.style.display='none';item.placeholder=null;}}}item.loadComplete=null;item.img=null;// no need to store image element after it's added
_shout('imageLoadComplete',index,item);};if(framework.features.transform){var placeholderClassName='pswp__img pswp__img--placeholder';placeholderClassName+=item.msrc?'':' pswp__img--placeholder--blank';var placeholder=framework.createEl(placeholderClassName,item.msrc?'img':'');if(item.msrc){placeholder.src=item.msrc;}_setImageSize(item,placeholder);baseDiv.appendChild(placeholder);item.placeholder=placeholder;}if(!item.loading){_preloadImage(item);}if(self.allowProgressiveImg()){// just append image
if(!_initialContentSet&&_features.transform){_imagesToAppendPool.push({item:item,baseDiv:baseDiv,img:item.img,index:index,holder:holder});}else{_appendImage(index,item,baseDiv,item.img,true,true);}}}else if(item.src&&!item.loadError){// image object is created every time, due to bugs of image loading & delay when switching images
img=framework.createEl('pswp__img','img');img.style.opacity=1;img.src=item.src;_setImageSize(item,img);_appendImage(index,item,baseDiv,img,true);}if(!_initialContentSet&&index===_currentItemIndex){_currZoomElementStyle=baseDiv.style;_showOrHide(item,img||item.img);}else{_applyZoomPanToItem(item);}holder.el.innerHTML='';holder.el.appendChild(baseDiv);},cleanSlide:function cleanSlide(item){if(item.img){item.img.onload=item.img.onerror=null;}item.loaded=item.loading=item.img=item.imageAppended=false;}}});/*>>items-controller*/ /*>>tap*/ /**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */var tapTimer,tapReleasePoint={},_dispatchTapEvent=function _dispatchTapEvent(origEvent,releasePoint,pointerType){var e=document.createEvent('CustomEvent'),eDetail={origEvent:origEvent,target:origEvent.target,releasePoint:releasePoint,pointerType:pointerType||'touch'};e.initCustomEvent('pswpTap',true,true,eDetail);origEvent.target.dispatchEvent(e);};_registerModule('Tap',{publicMethods:{initTap:function initTap(){_listen('firstTouchStart',self.onTapStart);_listen('touchRelease',self.onTapRelease);_listen('destroy',function(){tapReleasePoint={};tapTimer=null;});},onTapStart:function onTapStart(touchList){if(touchList.length>1){clearTimeout(tapTimer);tapTimer=null;}},onTapRelease:function onTapRelease(e,releasePoint){if(!releasePoint){return;}if(!_moved&&!_isMultitouch&&!_numAnimations){var p0=releasePoint;if(tapTimer){clearTimeout(tapTimer);tapTimer=null;// Check if taped on the same place
if(_isNearbyPoints(p0,tapReleasePoint)){_shout('doubleTap',p0);return;}}if(releasePoint.type==='mouse'){_dispatchTapEvent(e,releasePoint,'mouse');return;}var clickedTagName=e.target.tagName.toUpperCase();// avoid double tap delay on buttons and elements that have class pswp__single-tap
if(clickedTagName==='BUTTON'||framework.hasClass(e.target,'pswp__single-tap')){_dispatchTapEvent(e,releasePoint);return;}_equalizePoints(tapReleasePoint,p0);tapTimer=setTimeout(function(){_dispatchTapEvent(e,releasePoint);tapTimer=null;},300);}}}});/*>>tap*/ /*>>desktop-zoom*/ /**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */var _wheelDelta;_registerModule('DesktopZoom',{publicMethods:{initDesktopZoom:function initDesktopZoom(){if(_oldIE){// no zoom for old IE (<=8)
return;}if(_likelyTouchDevice){// if detected hardware touch support, we wait until mouse is used,
// and only then apply desktop-zoom features
_listen('mouseUsed',function(){self.setupDesktopZoom();});}else{self.setupDesktopZoom(true);}},setupDesktopZoom:function setupDesktopZoom(onInit){_wheelDelta={};var events='wheel mousewheel DOMMouseScroll';_listen('bindEvents',function(){framework.bind(template,events,self.handleMouseWheel);});_listen('unbindEvents',function(){if(_wheelDelta){framework.unbind(template,events,self.handleMouseWheel);}});self.mouseZoomedIn=false;var hasDraggingClass,updateZoomable=function updateZoomable(){if(self.mouseZoomedIn){framework.removeClass(template,'pswp--zoomed-in');self.mouseZoomedIn=false;}if(_currZoomLevel<1){framework.addClass(template,'pswp--zoom-allowed');}else{framework.removeClass(template,'pswp--zoom-allowed');}removeDraggingClass();},removeDraggingClass=function removeDraggingClass(){if(hasDraggingClass){framework.removeClass(template,'pswp--dragging');hasDraggingClass=false;}};_listen('resize',updateZoomable);_listen('afterChange',updateZoomable);_listen('pointerDown',function(){if(self.mouseZoomedIn){hasDraggingClass=true;framework.addClass(template,'pswp--dragging');}});_listen('pointerUp',removeDraggingClass);if(!onInit){updateZoomable();}},handleMouseWheel:function handleMouseWheel(e){if(_currZoomLevel<=self.currItem.fitRatio){if(_options.modal){if(!_options.closeOnScroll||_numAnimations||_isDragging){e.preventDefault();}else if(_transformKey&&Math.abs(e.deltaY)>2){// close PhotoSwipe
// if browser supports transforms & scroll changed enough
_closedByScroll=true;self.close();}}return true;}// allow just one event to fire
e.stopPropagation();// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
_wheelDelta.x=0;if('deltaX'in e){if(e.deltaMode===1/* DOM_DELTA_LINE */){// 18 - average line height
_wheelDelta.x=e.deltaX*18;_wheelDelta.y=e.deltaY*18;}else{_wheelDelta.x=e.deltaX;_wheelDelta.y=e.deltaY;}}else if('wheelDelta'in e){if(e.wheelDeltaX){_wheelDelta.x=-0.16*e.wheelDeltaX;}if(e.wheelDeltaY){_wheelDelta.y=-0.16*e.wheelDeltaY;}else{_wheelDelta.y=-0.16*e.wheelDelta;}}else if('detail'in e){_wheelDelta.y=e.detail;}else{return;}_calculatePanBounds(_currZoomLevel,true);var newPanX=_panOffset.x-_wheelDelta.x,newPanY=_panOffset.y-_wheelDelta.y;// only prevent scrolling in nonmodal mode when not at edges
if(_options.modal||newPanX<=_currPanBounds.min.x&&newPanX>=_currPanBounds.max.x&&newPanY<=_currPanBounds.min.y&&newPanY>=_currPanBounds.max.y){e.preventDefault();}// TODO: use rAF instead of mousewheel?
self.panTo(newPanX,newPanY);},toggleDesktopZoom:function toggleDesktopZoom(centerPoint){centerPoint=centerPoint||{x:_viewportSize.x/2+_offset.x,y:_viewportSize.y/2+_offset.y};var doubleTapZoomLevel=_options.getDoubleTapZoom(true,self.currItem);var zoomOut=_currZoomLevel===doubleTapZoomLevel;self.mouseZoomedIn=!zoomOut;self.zoomTo(zoomOut?self.currItem.initialZoomLevel:doubleTapZoomLevel,centerPoint,333);framework[(!zoomOut?'add':'remove')+'Class'](template,'pswp--zoomed-in');}}});/*>>desktop-zoom*/ /*>>history*/ /**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */var _historyDefaultOptions={history:true,galleryUID:1};var _historyUpdateTimeout,_hashChangeTimeout,_hashAnimCheckTimeout,_hashChangedByScript,_hashChangedByHistory,_hashReseted,_initialHash,_historyChanged,_closedFromURL,_urlChangedOnce,_windowLoc,_supportsPushState,_getHash=function _getHash(){return _windowLoc.hash.substring(1);},_cleanHistoryTimeouts=function _cleanHistoryTimeouts(){if(_historyUpdateTimeout){clearTimeout(_historyUpdateTimeout);}if(_hashAnimCheckTimeout){clearTimeout(_hashAnimCheckTimeout);}},// pid - Picture index
// gid - Gallery index
_parseItemIndexFromURL=function _parseItemIndexFromURL(){var hash=_getHash(),params={};if(hash.length<5){// pid=1
return params;}var i,vars=hash.split('&');for(i=0;i<vars.length;i++){if(!vars[i]){continue;}var pair=vars[i].split('=');if(pair.length<2){continue;}params[pair[0]]=pair[1];}if(_options.galleryPIDs){// detect custom pid in hash and search for it among the items collection
var searchfor=params.pid;params.pid=0;// if custom pid cannot be found, fallback to the first item
for(i=0;i<_items.length;i++){if(_items[i].pid===searchfor){params.pid=i;break;}}}else{params.pid=parseInt(params.pid,10)-1;}if(params.pid<0){params.pid=0;}return params;},_updateHash=function _updateHash(){if(_hashAnimCheckTimeout){clearTimeout(_hashAnimCheckTimeout);}if(_numAnimations||_isDragging){// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
// that's why we update hash only when no animations running
_hashAnimCheckTimeout=setTimeout(_updateHash,500);return;}if(_hashChangedByScript){clearTimeout(_hashChangeTimeout);}else{_hashChangedByScript=true;}var pid=_currentItemIndex+1;var item=_getItemAt(_currentItemIndex);if(item.hasOwnProperty('pid')){// carry forward any custom pid assigned to the item
pid=item.pid;}var newHash=_initialHash+'&'+'gid='+_options.galleryUID+'&'+'pid='+pid;if(!_historyChanged){if(_windowLoc.hash.indexOf(newHash)===-1){_urlChangedOnce=true;}// first time - add new hisory record, then just replace
}var newURL=_windowLoc.href.split('#')[0]+'#'+newHash;if(_supportsPushState){if('#'+newHash!==window.location.hash){history[_historyChanged?'replaceState':'pushState']('',document.title,newURL);}}else{if(_historyChanged){_windowLoc.replace(newURL);}else{_windowLoc.hash=newHash;}}_historyChanged=true;_hashChangeTimeout=setTimeout(function(){_hashChangedByScript=false;},60);};_registerModule('History',{publicMethods:{initHistory:function initHistory(){framework.extend(_options,_historyDefaultOptions,true);if(!_options.history){return;}_windowLoc=window.location;_urlChangedOnce=false;_closedFromURL=false;_historyChanged=false;_initialHash=_getHash();_supportsPushState='pushState'in history;if(_initialHash.indexOf('gid=')>-1){_initialHash=_initialHash.split('&gid=')[0];_initialHash=_initialHash.split('?gid=')[0];}_listen('afterChange',self.updateURL);_listen('unbindEvents',function(){framework.unbind(window,'hashchange',self.onHashChange);});var returnToOriginal=function returnToOriginal(){_hashReseted=true;if(!_closedFromURL){if(_urlChangedOnce){history.back();}else{if(_initialHash){_windowLoc.hash=_initialHash;}else{if(_supportsPushState){// remove hash from url without refreshing it or scrolling to top
history.pushState('',document.title,_windowLoc.pathname+_windowLoc.search);}else{_windowLoc.hash='';}}}}_cleanHistoryTimeouts();};_listen('unbindEvents',function(){if(_closedByScroll){// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
// this is done to keep the scroll position
returnToOriginal();}});_listen('destroy',function(){if(!_hashReseted){returnToOriginal();}});_listen('firstUpdate',function(){_currentItemIndex=_parseItemIndexFromURL().pid;});var index=_initialHash.indexOf('pid=');if(index>-1){_initialHash=_initialHash.substring(0,index);if(_initialHash.slice(-1)==='&'){_initialHash=_initialHash.slice(0,-1);}}setTimeout(function(){if(_isOpen){// hasn't destroyed yet
framework.bind(window,'hashchange',self.onHashChange);}},40);},onHashChange:function onHashChange(){if(_getHash()===_initialHash){_closedFromURL=true;self.close();return;}if(!_hashChangedByScript){_hashChangedByHistory=true;self.goTo(_parseItemIndexFromURL().pid);_hashChangedByHistory=false;}},updateURL:function updateURL(){// Delay the update of URL, to avoid lag during transition, 
// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
_cleanHistoryTimeouts();if(_hashChangedByHistory){return;}if(!_historyChanged){_updateHash();// first time
}else{_historyUpdateTimeout=setTimeout(_updateHash,800);}}}});/*>>history*/framework.extend(self,publicMethods);};return PhotoSwipe;});},{}],2:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.PhotoSwipe=exports["default"]=undefined;var _photoswipe=require('photoswipe');var _photoswipe2=_interopRequireDefault(_photoswipe);var _photoswipeUiDefault=require('./libs/photoswipe-ui-default');var _photoswipeUiDefault2=_interopRequireDefault(_photoswipeUiDefault);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function PhotoSwipeMounter($){var $defaultGallery=$('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>').appendTo('body'),uid=1;function getImgs($gallery){var slideSelector=getOptions($gallery).slideSelector;return $gallery.find(slideSelector).map(function(index){var $img=$(this).data('index',index),tagName=this.tagName.toUpperCase();if(tagName==='A'){if(this.hash){$img=$(this.hash);}else{$img=$img.find('img').eq(0);$img.data('original-src',this.href);}}else if(tagName!=='IMG'){$img=$img.find('img');}return $img[0];});}function getThumbBoundsFn($imgs){return function _getThumbBoundsFn(index){var $img=$imgs.eq(index),imgOffset=$img.offset(),imgWidth=$img[0].width;return{x:imgOffset.left,y:imgOffset.top,w:imgWidth};};}function getWH(wh,$img){var d=$.Deferred(),wh_value=$img.data('original-src-'+wh),original_src=decodeURI($img.data('original-src')||$img.attr('src')),matches=original_src.match(/(\d+)[*×x](\d+)/);if(wh_value){d.resolve(wh_value);}else if(matches!==null){d.resolve(matches[wh==='width'?1:2]);}else{$('<img>').on('load',function(){d.resolve(this[wh]);}).attr('src',$img.attr('src'));}return d.promise();}function getHeight($img){return getWH('height',$img);}function getWidth($img){return getWH('width',$img);}function getImgSize($img){return $.when(getWidth($img),getHeight($img));}function getImgInfo(){var $img=$(this),original_src=$img.data('original-src')||$img.attr('src'),d=$.Deferred();if(this.tagName!=='IMG'){d.resolve({html:this.innerHTML});}else{getImgSize($img).done(function(w,h){var src=$img.attr('src'),title,caption_classname,$figcaption;function get_caption($elem,selector){var $parent=$elem.parent(),$caption_element;if(!$parent.length){return undefined;}$caption_element=$parent.find(selector);if($caption_element.length){return $caption_element.html();}return get_caption($parent,selector);}// try to find the slide title from :
// (in order)
//
// 1. `data-caption-class` (a class-name that indicates the element containing the caption)
// 2. `figcaption` element (the `figcaption` that resides inside a `figure` which contains the slide `img` element)
// 3. `alt` attribute (the `alt` attribute of the slide `img` element)
if(caption_classname=$img.data('caption-class')){title=get_caption($img,'.'+caption_classname);}else if(($figcaption=$img.closest('figure').find('figcaption'))&&$figcaption.length){title=$figcaption.html();}else{title=$img.attr('alt');}d.resolve({w:w,h:h,src:original_src,msrc:src,title:title});});}return d.promise();}function getImgInfoArray($imgs){var imgInfoArray=$imgs.map(getImgInfo).get(),d=$.Deferred();$.when.apply($,imgInfoArray).done(function(){var imgInfoArray=Array.prototype.slice.call(arguments);d.resolve(imgInfoArray);});return d.promise();}function getOptions($gallery){return $gallery.data('photoswipeOptions');}function addUID($gallery){if(!$gallery.data('pswp-uid')){$gallery.data('pswp-uid',uid++);}}function openPhotoSwipe(index,$gallery,$imgs,imgInfoArray){var options=$.extend(getOptions($gallery).globalOptions,{index:index,getThumbBoundsFn:getThumbBoundsFn($imgs),galleryUID:$gallery.data('pswp-uid')}),photoSwipe=new _photoswipe2["default"]($defaultGallery[0],_photoswipeUiDefault2["default"],imgInfoArray,options);$.each(getOptions($gallery).events,function(eventName,eventHandler){photoSwipe.listen(eventName,eventHandler);});photoSwipe.init();}// parse picture index and gallery index from URL (#&pid=1&gid=2)
function photoswipeParseHash(){var hash=window.location.hash.substring(1),params={};if(hash.length<5){return params;}var vars=hash.split('&');for(var i=0;i<vars.length;i++){if(!vars[i]){continue;}var pair=vars[i].split('=');if(pair.length<2){continue;}params[pair[0]]=parseInt(pair[1],10);}return params;}function openFromURL($galleries){// Parse URL and open gallery if it contains #&pid=3&gid=1
var hashData=photoswipeParseHash();if(hashData.pid&&hashData.gid){(function(){var $gallery=$galleries[hashData.gid-1],pid=hashData.pid-1,$imgs=getImgs($gallery),imgInfoArrayPromise=getImgInfoArray($imgs);imgInfoArrayPromise.done(function(imgInfoArray){openPhotoSwipe(pid,$gallery,$imgs,imgInfoArray);});})();}}function addClickHandler($gallery,$imgs,imgInfoArray){$gallery.on('click.photoswipe',getOptions($gallery).slideSelector,function(e){e.preventDefault();openPhotoSwipe($(this).data('index'),$gallery,$imgs,imgInfoArray);});}function removeClickHandler($gallery){$gallery.off('click.photoswipe');}function update($gallery){var $imgs=getImgs($gallery),imgInfoArrayPromise=getImgInfoArray($imgs);imgInfoArrayPromise.done(function(imgInfoArray){removeClickHandler($gallery);addClickHandler($gallery,$imgs,imgInfoArray);});}$.fn.photoSwipe=function(){var slideSelector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'img';var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var events=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var defaultOptions={bgOpacity:0.973,showHideOpacity:true},globalOptions=$.extend(defaultOptions,options);// Initialize each gallery
var $galleries=[],isUpdate=slideSelector==='update';this.each(function(){if(isUpdate){update($(this));return;}var $gallery=$(this).data('photoswipeOptions',{slideSelector:slideSelector,globalOptions:globalOptions,events:events}),// save options
$imgs=getImgs($gallery),imgInfoArrayPromise=getImgInfoArray($imgs);addUID($gallery);$galleries.push($gallery);imgInfoArrayPromise.done(function(imgInfoArray){addClickHandler($gallery,$imgs,imgInfoArray);});});if(!isUpdate){openFromURL($galleries);}return this;};// Attach original PhotoSwipe to $.fn.photoSwipe
$.fn.photoSwipe.PhotoSwipe=_photoswipe2["default"];}PhotoSwipeMounter(jQuery);exports["default"]=PhotoSwipeMounter;exports.PhotoSwipe=_photoswipe2["default"];},{"./libs/photoswipe-ui-default":3,"photoswipe":1}],3:[function(require,module,exports){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return _typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */ /**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(undefined,function(){'use strict';var PhotoSwipeUI_Default=function PhotoSwipeUI_Default(pswp,framework){var ui=this;var _overlayUIUpdated=false,_controlsVisible=true,_fullscrenAPI,_controls,_captionContainer,_fakeCaptionContainer,_indexIndicator,_shareButton,_shareModal,_shareModalHidden=true,_initalCloseOnScrollValue,_isIdle,_listen,_loadingIndicator,_loadingIndicatorHidden,_loadingIndicatorTimeout,_galleryHasOneSlide,_options,_defaultUIOptions={barsSize:{top:44,bottom:'auto'},closeElClasses:['item','caption','zoom-wrap','ui','top-bar'],timeToIdle:4000,timeToIdleOutside:1000,loadingIndicatorDelay:1000,// 2s
addCaptionHTMLFn:function addCaptionHTMLFn(item,captionEl/*, isFake */){if(!item.title){captionEl.children[0].innerHTML='';return false;}captionEl.children[0].innerHTML=item.title;return true;},closeEl:true,captionEl:true,fullscreenEl:true,zoomEl:true,shareEl:true,counterEl:true,arrowEl:true,preloaderEl:true,tapToClose:false,tapToToggleControls:true,clickToCloseNonZoomable:true,shareButtons:[{id:'facebook',label:'Share on Facebook',url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},{id:'twitter',label:'Tweet',url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},{id:'pinterest',label:'Pin it',url:'http://www.pinterest.com/pin/create/button/'+'?url={{url}}&media={{image_url}}&description={{text}}'},{id:'download',label:'Download image',url:'{{raw_image_url}}',download:true}],getImageURLForShare:function getImageURLForShare()/* shareButtonData */{return pswp.currItem.src||'';},getPageURLForShare:function getPageURLForShare()/* shareButtonData */{return window.location.href;},getTextForShare:function getTextForShare()/* shareButtonData */{return pswp.currItem.title||'';},indexIndicatorSep:' / ',fitControlsWidth:1200},_blockControlsTap,_blockControlsTapTimeout;var _onControlsTap=function _onControlsTap(e){if(_blockControlsTap){return true;}e=e||window.event;if(_options.timeToIdle&&_options.mouseUsed&&!_isIdle){// reset idle timer
_onIdleMouseMove();}var target=e.target||e.srcElement,uiElement,clickedClass=target.getAttribute('class')||'',found;for(var i=0;i<_uiElements.length;i++){uiElement=_uiElements[i];if(uiElement.onTap&&clickedClass.indexOf('pswp__'+uiElement.name)>-1){uiElement.onTap();found=true;}}if(found){if(e.stopPropagation){e.stopPropagation();}_blockControlsTap=true;// Some versions of Android don't prevent ghost click event 
// when preventDefault() was called on touchstart and/or touchend.
// 
// This happens on v4.3, 4.2, 4.1, 
// older versions strangely work correctly, 
// but just in case we add delay on all of them)	
var tapDelay=framework.features.isOldAndroid?600:30;_blockControlsTapTimeout=setTimeout(function(){_blockControlsTap=false;},tapDelay);}},_fitControlsInViewport=function _fitControlsInViewport(){return!pswp.likelyTouchDevice||_options.mouseUsed||screen.width>_options.fitControlsWidth;},_togglePswpClass=function _togglePswpClass(el,cName,add){framework[(add?'add':'remove')+'Class'](el,'pswp__'+cName);},// add class when there is just one item in the gallery
// (by default it hides left/right arrows and 1ofX counter)
_countNumItems=function _countNumItems(){var hasOneSlide=_options.getNumItemsFn()===1;if(hasOneSlide!==_galleryHasOneSlide){_togglePswpClass(_controls,'ui--one-slide',hasOneSlide);_galleryHasOneSlide=hasOneSlide;}},_toggleShareModalClass=function _toggleShareModalClass(){_togglePswpClass(_shareModal,'share-modal--hidden',_shareModalHidden);},_toggleShareModal=function _toggleShareModal(){_shareModalHidden=!_shareModalHidden;if(!_shareModalHidden){_toggleShareModalClass();setTimeout(function(){if(!_shareModalHidden){framework.addClass(_shareModal,'pswp__share-modal--fade-in');}},30);}else{framework.removeClass(_shareModal,'pswp__share-modal--fade-in');setTimeout(function(){if(_shareModalHidden){_toggleShareModalClass();}},300);}if(!_shareModalHidden){_updateShareURLs();}return false;},_openWindowPopup=function _openWindowPopup(e){e=e||window.event;var target=e.target||e.srcElement;pswp.shout('shareLinkClick',e,target);if(!target.href){return false;}if(target.hasAttribute('download')){return true;}window.open(target.href,'pswp_share','scrollbars=yes,resizable=yes,toolbar=no,'+'location=yes,width=550,height=420,top=100,left='+(window.screen?Math.round(screen.width/2-275):100));if(!_shareModalHidden){_toggleShareModal();}return false;},_updateShareURLs=function _updateShareURLs(){var shareButtonOut='',shareButtonData,shareURL,image_url,page_url,share_text;for(var i=0;i<_options.shareButtons.length;i++){shareButtonData=_options.shareButtons[i];image_url=_options.getImageURLForShare(shareButtonData);page_url=_options.getPageURLForShare(shareButtonData);share_text=_options.getTextForShare(shareButtonData);shareURL=shareButtonData.url.replace('{{url}}',encodeURIComponent(page_url)).replace('{{image_url}}',encodeURIComponent(image_url)).replace('{{raw_image_url}}',image_url).replace('{{text}}',encodeURIComponent(share_text));shareButtonOut+='<a href="'+shareURL+'" target="_blank" '+'class="pswp__share--'+shareButtonData.id+'"'+(shareButtonData.download?'download':'')+'>'+shareButtonData.label+'</a>';if(_options.parseShareButtonOut){shareButtonOut=_options.parseShareButtonOut(shareButtonData,shareButtonOut);}}_shareModal.children[0].innerHTML=shareButtonOut;_shareModal.children[0].onclick=_openWindowPopup;},_hasCloseClass=function _hasCloseClass(target){for(var i=0;i<_options.closeElClasses.length;i++){if(framework.hasClass(target,'pswp__'+_options.closeElClasses[i])){return true;}}},_idleInterval,_idleTimer,_idleIncrement=0,_onIdleMouseMove=function _onIdleMouseMove(){clearTimeout(_idleTimer);_idleIncrement=0;if(_isIdle){ui.setIdle(false);}},_onMouseLeaveWindow=function _onMouseLeaveWindow(e){e=e?e:window.event;var from=e.relatedTarget||e.toElement;if(!from||from.nodeName==='HTML'){clearTimeout(_idleTimer);_idleTimer=setTimeout(function(){ui.setIdle(true);},_options.timeToIdleOutside);}},_setupFullscreenAPI=function _setupFullscreenAPI(){if(_options.fullscreenEl&&!framework.features.isOldAndroid){if(!_fullscrenAPI){_fullscrenAPI=ui.getFullscreenAPI();}if(_fullscrenAPI){framework.bind(document,_fullscrenAPI.eventK,ui.updateFullscreen);ui.updateFullscreen();framework.addClass(pswp.template,'pswp--supports-fs');}else{framework.removeClass(pswp.template,'pswp--supports-fs');}}},_setupLoadingIndicator=function _setupLoadingIndicator(){// Setup loading indicator
if(_options.preloaderEl){_toggleLoadingIndicator(true);_listen('beforeChange',function(){clearTimeout(_loadingIndicatorTimeout);// display loading indicator with delay
_loadingIndicatorTimeout=setTimeout(function(){if(pswp.currItem&&pswp.currItem.loading){if(!pswp.allowProgressiveImg()||pswp.currItem.img&&!pswp.currItem.img.naturalWidth){// show preloader if progressive loading is not enabled, 
// or image width is not defined yet (because of slow connection)
_toggleLoadingIndicator(false);// items-controller.js function allowProgressiveImg
}}else{_toggleLoadingIndicator(true);// hide preloader
}},_options.loadingIndicatorDelay);});_listen('imageLoadComplete',function(index,item){if(pswp.currItem===item){_toggleLoadingIndicator(true);}});}},_toggleLoadingIndicator=function _toggleLoadingIndicator(hide){if(_loadingIndicatorHidden!==hide){_togglePswpClass(_loadingIndicator,'preloader--active',!hide);_loadingIndicatorHidden=hide;}},_applyNavBarGaps=function _applyNavBarGaps(item){var gap=item.vGap;if(_fitControlsInViewport()){var bars=_options.barsSize;if(_options.captionEl&&bars.bottom==='auto'){if(!_fakeCaptionContainer){_fakeCaptionContainer=framework.createEl('pswp__caption pswp__caption--fake');_fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));_controls.insertBefore(_fakeCaptionContainer,_captionContainer);framework.addClass(_controls,'pswp__ui--fit');}if(_options.addCaptionHTMLFn(item,_fakeCaptionContainer,true)){var captionSize=_fakeCaptionContainer.clientHeight;gap.bottom=parseInt(captionSize,10)||44;}else{gap.bottom=bars.top;// if no caption, set size of bottom gap to size of top
}}else{gap.bottom=bars.bottom==='auto'?0:bars.bottom;}// height of top bar is static, no need to calculate it
gap.top=bars.top;}else{gap.top=gap.bottom=0;}},_setupIdle=function _setupIdle(){// Hide controls when mouse is used
if(_options.timeToIdle){_listen('mouseUsed',function(){framework.bind(document,'mousemove',_onIdleMouseMove);framework.bind(document,'mouseout',_onMouseLeaveWindow);_idleInterval=setInterval(function(){_idleIncrement++;if(_idleIncrement===2){ui.setIdle(true);}},_options.timeToIdle/2);});}},_setupHidingControlsDuringGestures=function _setupHidingControlsDuringGestures(){// Hide controls on vertical drag
_listen('onVerticalDrag',function(now){if(_controlsVisible&&now<0.95){ui.hideControls();}else if(!_controlsVisible&&now>=0.95){ui.showControls();}});// Hide controls when pinching to close
var pinchControlsHidden;_listen('onPinchClose',function(now){if(_controlsVisible&&now<0.9){ui.hideControls();pinchControlsHidden=true;}else if(pinchControlsHidden&&!_controlsVisible&&now>0.9){ui.showControls();}});_listen('zoomGestureEnded',function(){pinchControlsHidden=false;if(pinchControlsHidden&&!_controlsVisible){ui.showControls();}});};var _uiElements=[{name:'caption',option:'captionEl',onInit:function onInit(el){_captionContainer=el;}},{name:'share-modal',option:'shareEl',onInit:function onInit(el){_shareModal=el;},onTap:function onTap(){_toggleShareModal();}},{name:'button--share',option:'shareEl',onInit:function onInit(el){_shareButton=el;},onTap:function onTap(){_toggleShareModal();}},{name:'button--zoom',option:'zoomEl',onTap:pswp.toggleDesktopZoom},{name:'counter',option:'counterEl',onInit:function onInit(el){_indexIndicator=el;}},{name:'button--close',option:'closeEl',onTap:pswp.close},{name:'button--arrow--left',option:'arrowEl',onTap:pswp.prev},{name:'button--arrow--right',option:'arrowEl',onTap:pswp.next},{name:'button--fs',option:'fullscreenEl',onTap:function onTap(){if(_fullscrenAPI.isFullscreen()){_fullscrenAPI.exit();}else{_fullscrenAPI.enter();}}},{name:'preloader',option:'preloaderEl',onInit:function onInit(el){_loadingIndicator=el;}}];var _setupUIElements=function _setupUIElements(){var item,classAttr,uiElement;var loopThroughChildElements=function loopThroughChildElements(sChildren){if(!sChildren){return;}var l=sChildren.length;for(var i=0;i<l;i++){item=sChildren[i];classAttr=item.className;for(var a=0;a<_uiElements.length;a++){uiElement=_uiElements[a];if(classAttr.indexOf('pswp__'+uiElement.name)>-1){if(_options[uiElement.option]){// if element is not disabled from options
framework.removeClass(item,'pswp__element--disabled');if(uiElement.onInit){uiElement.onInit(item);}//item.style.display = 'block';
}else{framework.addClass(item,'pswp__element--disabled');//item.style.display = 'none';
}}}}};loopThroughChildElements(_controls.children);var topBar=framework.getChildByClass(_controls,'pswp__top-bar');if(topBar){loopThroughChildElements(topBar.children);}};ui.init=function(){// extend options
framework.extend(pswp.options,_defaultUIOptions,true);// create local link for fast access
_options=pswp.options;// find pswp__ui element
_controls=framework.getChildByClass(pswp.scrollWrap,'pswp__ui');// create local link
_listen=pswp.listen;_setupHidingControlsDuringGestures();// update controls when slides change
_listen('beforeChange',ui.update);// toggle zoom on double-tap
_listen('doubleTap',function(point){var initialZoomLevel=pswp.currItem.initialZoomLevel;if(pswp.getZoomLevel()!==initialZoomLevel){pswp.zoomTo(initialZoomLevel,point,333);}else{pswp.zoomTo(_options.getDoubleTapZoom(false,pswp.currItem),point,333);}});// Allow text selection in caption
_listen('preventDragEvent',function(e,isDown,preventObj){var t=e.target||e.srcElement;if(t&&t.getAttribute('class')&&e.type.indexOf('mouse')>-1&&(t.getAttribute('class').indexOf('__caption')>0||/(SMALL|STRONG|EM)/i.test(t.tagName))){preventObj.prevent=false;}});// bind events for UI
_listen('bindEvents',function(){framework.bind(_controls,'pswpTap click',_onControlsTap);framework.bind(pswp.scrollWrap,'pswpTap',ui.onGlobalTap);if(!pswp.likelyTouchDevice){framework.bind(pswp.scrollWrap,'mouseover',ui.onMouseOver);}});// unbind events for UI
_listen('unbindEvents',function(){if(!_shareModalHidden){_toggleShareModal();}if(_idleInterval){clearInterval(_idleInterval);}framework.unbind(document,'mouseout',_onMouseLeaveWindow);framework.unbind(document,'mousemove',_onIdleMouseMove);framework.unbind(_controls,'pswpTap click',_onControlsTap);framework.unbind(pswp.scrollWrap,'pswpTap',ui.onGlobalTap);framework.unbind(pswp.scrollWrap,'mouseover',ui.onMouseOver);if(_fullscrenAPI){framework.unbind(document,_fullscrenAPI.eventK,ui.updateFullscreen);if(_fullscrenAPI.isFullscreen()){_options.hideAnimationDuration=0;_fullscrenAPI.exit();}_fullscrenAPI=null;}});// clean up things when gallery is destroyed
_listen('destroy',function(){if(_options.captionEl){if(_fakeCaptionContainer){_controls.removeChild(_fakeCaptionContainer);}framework.removeClass(_captionContainer,'pswp__caption--empty');}if(_shareModal){_shareModal.children[0].onclick=null;}framework.removeClass(_controls,'pswp__ui--over-close');framework.addClass(_controls,'pswp__ui--hidden');ui.setIdle(false);});if(!_options.showAnimationDuration){framework.removeClass(_controls,'pswp__ui--hidden');}_listen('initialZoomIn',function(){if(_options.showAnimationDuration){framework.removeClass(_controls,'pswp__ui--hidden');}});_listen('initialZoomOut',function(){framework.addClass(_controls,'pswp__ui--hidden');});_listen('parseVerticalMargin',_applyNavBarGaps);_setupUIElements();if(_options.shareEl&&_shareButton&&_shareModal){_shareModalHidden=true;}_countNumItems();_setupIdle();_setupFullscreenAPI();_setupLoadingIndicator();};ui.setIdle=function(isIdle){_isIdle=isIdle;_togglePswpClass(_controls,'ui--idle',isIdle);};ui.update=function(){// Don't update UI if it's hidden
if(_controlsVisible&&pswp.currItem){ui.updateIndexIndicator();if(_options.captionEl){_options.addCaptionHTMLFn(pswp.currItem,_captionContainer);_togglePswpClass(_captionContainer,'caption--empty',!pswp.currItem.title);}_overlayUIUpdated=true;}else{_overlayUIUpdated=false;}if(!_shareModalHidden){_toggleShareModal();}_countNumItems();};ui.updateFullscreen=function(e){if(e){// some browsers change window scroll position during the fullscreen
// so PhotoSwipe updates it just in case
setTimeout(function(){pswp.setScrollOffset(0,framework.getScrollY());},50);}// toogle pswp--fs class on root element
framework[(_fullscrenAPI.isFullscreen()?'add':'remove')+'Class'](pswp.template,'pswp--fs');};ui.updateIndexIndicator=function(){if(_options.counterEl){_indexIndicator.innerHTML=pswp.getCurrentIndex()+1+_options.indexIndicatorSep+_options.getNumItemsFn();}};ui.onGlobalTap=function(e){e=e||window.event;var target=e.target||e.srcElement;if(_blockControlsTap){return;}if(e.detail&&e.detail.pointerType==='mouse'){// close gallery if clicked outside of the image
if(_hasCloseClass(target)){pswp.close();return;}if(framework.hasClass(target,'pswp__img')){if(pswp.getZoomLevel()===1&&pswp.getZoomLevel()<=pswp.currItem.fitRatio){if(_options.clickToCloseNonZoomable){pswp.close();}}else{pswp.toggleDesktopZoom(e.detail.releasePoint);}}}else{// tap anywhere (except buttons) to toggle visibility of controls
if(_options.tapToToggleControls){if(_controlsVisible){ui.hideControls();}else{ui.showControls();}}// tap to close gallery
if(_options.tapToClose&&(framework.hasClass(target,'pswp__img')||_hasCloseClass(target))){pswp.close();return;}}};ui.onMouseOver=function(e){e=e||window.event;var target=e.target||e.srcElement;// add class when mouse is over an element that should close the gallery
_togglePswpClass(_controls,'ui--over-close',_hasCloseClass(target));};ui.hideControls=function(){framework.addClass(_controls,'pswp__ui--hidden');_controlsVisible=false;};ui.showControls=function(){_controlsVisible=true;if(!_overlayUIUpdated){ui.update();}framework.removeClass(_controls,'pswp__ui--hidden');};ui.supportsFullscreen=function(){var d=document;return!!(d.exitFullscreen||d.mozCancelFullScreen||d.webkitExitFullscreen||d.msExitFullscreen);};ui.getFullscreenAPI=function(){var dE=document.documentElement,api,tF='fullscreenchange';if(dE.requestFullscreen){api={enterK:'requestFullscreen',exitK:'exitFullscreen',elementK:'fullscreenElement',eventK:tF};}else if(dE.mozRequestFullScreen){api={enterK:'mozRequestFullScreen',exitK:'mozCancelFullScreen',elementK:'mozFullScreenElement',eventK:'moz'+tF};}else if(dE.webkitRequestFullscreen){api={enterK:'webkitRequestFullscreen',exitK:'webkitExitFullscreen',elementK:'webkitFullscreenElement',eventK:'webkit'+tF};}else if(dE.msRequestFullscreen){api={enterK:'msRequestFullscreen',exitK:'msExitFullscreen',elementK:'msFullscreenElement',eventK:'MSFullscreenChange'};}if(api){api.enter=function(){// disable close-on-scroll in fullscreen
_initalCloseOnScrollValue=_options.closeOnScroll;_options.closeOnScroll=false;if(this.enterK==='webkitRequestFullscreen'){pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);}else{return pswp.template[this.enterK]();}};api.exit=function(){_options.closeOnScroll=_initalCloseOnScrollValue;return document[this.exitK]();};api.isFullscreen=function(){return document[this.elementK];};}return api;};};return PhotoSwipeUI_Default;});},{}]},{},[2]);/***/},/* 60 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugins.
 */window.imagesLoaded=__webpack_require__(61);window.Shuffle=__webpack_require__(62);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Shuffle');page.initShuffle=function(){if(undefined===window['Shuffle']||0===$('[data-provide="shuffle"]').length){return;}var Shuffle=window.Shuffle;$('[data-provide="shuffle"]').each(function(){var list=$(this).find('[data-shuffle="list"]');var filter=$(this).find('[data-shuffle="filter"]');var search=$(this).find('[data-shuffle="search"]');var options={itemSelector:'[data-shuffle="item"]',sizer:'[data-shuffle="sizer"]',delimeter:',',speed:500};var shuffleInstance=new Shuffle(list,options);if(filter.length){$(filter).find('[data-shuffle="button"]').each(function(){$(this).on('click',function(){var btn=$(this);var isActive=btn.hasClass('active');var btnGroup=btn.data('group');$(this).closest('[data-shuffle="filter"]').find('[data-shuffle="button"].active').removeClass('active');var filterGroup;if(isActive){btn.removeClass('active');filterGroup=Shuffle.ALL_ITEMS;}else{btn.addClass('active');filterGroup=btnGroup;}shuffleInstance.filter(filterGroup);});});}//End if
if(search.length){search.on('keyup',function(){var searchText=$(this).val().toLowerCase();shuffleInstance.filter(function(element,shuffle){var itemText=element.textContent.toLowerCase().trim();return itemText.indexOf(searchText)!==-1;});});}$(this).imagesLoaded(function(){shuffleInstance.layout();});});};}(jQuery);/***/},/* 61 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_LOCAL_MODULE_0__,__WEBPACK_LOCAL_MODULE_0__factory,__WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ /**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */(function(global,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, window */if(true){// AMD - RequireJS
!(__WEBPACK_LOCAL_MODULE_0__factory=factory,__WEBPACK_LOCAL_MODULE_0__module={id:"ev-emitter/ev-emitter",exports:{},loaded:false},__WEBPACK_LOCAL_MODULE_0__=typeof __WEBPACK_LOCAL_MODULE_0__factory==='function'?__WEBPACK_LOCAL_MODULE_0__factory.call(__WEBPACK_LOCAL_MODULE_0__module.exports,__webpack_require__,__WEBPACK_LOCAL_MODULE_0__module.exports,__WEBPACK_LOCAL_MODULE_0__module):__WEBPACK_LOCAL_MODULE_0__factory,__WEBPACK_LOCAL_MODULE_0__module.loaded=true,__WEBPACK_LOCAL_MODULE_0__===undefined&&(__WEBPACK_LOCAL_MODULE_0__=__WEBPACK_LOCAL_MODULE_0__module.exports));}else{}})(typeof window!='undefined'?window:this,function(){function EvEmitter(){}var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return;}// set events hash
var events=this._events=this._events||{};// set listeners array
var listeners=events[eventName]=events[eventName]||[];// only add once
if(listeners.indexOf(listener)==-1){listeners.push(listener);}return this;};proto.once=function(eventName,listener){if(!eventName||!listener){return;}// add event
this.on(eventName,listener);// set once flag
// set onceEvents hash
var onceEvents=this._onceEvents=this._onceEvents||{};// set onceListeners object
var onceListeners=onceEvents[eventName]=onceEvents[eventName]||{};// set flag
onceListeners[listener]=true;return this;};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}var index=listeners.indexOf(listener);if(index!=-1){listeners.splice(index,1);}return this;};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}// copy over to avoid interference if .off() in listener
listeners=listeners.slice(0);args=args||[];// once stuff
var onceListeners=this._onceEvents&&this._onceEvents[eventName];for(var i=0;i<listeners.length;i++){var listener=listeners[i];var isOnce=onceListeners&&onceListeners[listener];if(isOnce){// remove listener
// remove before trigger to prevent recursion
this.off(eventName,listener);// unset once flag
delete onceListeners[listener];}// trigger listener
listener.apply(this,args);}return this;};proto.allOff=function(){delete this._events;delete this._onceEvents;};return EvEmitter;});/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(window,factory){'use strict';// universal module definition
/*global define: false, module: false, require: false */if(true){// AMD
!(__WEBPACK_AMD_DEFINE_ARRAY__=[__WEBPACK_LOCAL_MODULE_0__],__WEBPACK_AMD_DEFINE_RESULT__=function(EvEmitter){return factory(window,EvEmitter);}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(typeof window!=='undefined'?window:this,// --------------------------  factory -------------------------- //
function factory(window,EvEmitter){var $=window.jQuery;var console=window.console;// -------------------------- helpers -------------------------- //
// extend objects
function extend(a,b){for(var prop in b){a[prop]=b[prop];}return a;}var arraySlice=Array.prototype.slice;// turn element or nodeList into an array
function makeArray(obj){if(Array.isArray(obj)){// use object if already an array
return obj;}var isArrayLike=_typeof2(obj)=='object'&&typeof obj.length=='number';if(isArrayLike){// convert nodeList to array
return arraySlice.call(obj);}// array of single index
return[obj];}// -------------------------- imagesLoaded -------------------------- //
/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */function ImagesLoaded(elem,options,onAlways){// coerce ImagesLoaded() without new, to be new ImagesLoaded()
if(!(this instanceof ImagesLoaded)){return new ImagesLoaded(elem,options,onAlways);}// use elem as selector string
var queryElem=elem;if(typeof elem=='string'){queryElem=document.querySelectorAll(elem);}// bail if bad element
if(!queryElem){console.error('Bad element for imagesLoaded '+(queryElem||elem));return;}this.elements=makeArray(queryElem);this.options=extend({},this.options);// shift arguments if no options set
if(typeof options=='function'){onAlways=options;}else{extend(this.options,options);}if(onAlways){this.on('always',onAlways);}this.getImages();if($){// add jQuery Deferred object
this.jqDeferred=new $.Deferred();}// HACK check async to allow time to bind listeners
setTimeout(this.check.bind(this));}ImagesLoaded.prototype=Object.create(EvEmitter.prototype);ImagesLoaded.prototype.options={};ImagesLoaded.prototype.getImages=function(){this.images=[];// filter & find items if we have an item selector
this.elements.forEach(this.addElementImages,this);};/**
 * @param {Node} element
 */ImagesLoaded.prototype.addElementImages=function(elem){// filter siblings
if(elem.nodeName=='IMG'){this.addImage(elem);}// get background image on element
if(this.options.background===true){this.addElementBackgroundImages(elem);}// find children
// no non-element nodes, #143
var nodeType=elem.nodeType;if(!nodeType||!elementNodeTypes[nodeType]){return;}var childImgs=elem.querySelectorAll('img');// concat childElems to filterFound array
for(var i=0;i<childImgs.length;i++){var img=childImgs[i];this.addImage(img);}// get child background images
if(typeof this.options.background=='string'){var children=elem.querySelectorAll(this.options.background);for(i=0;i<children.length;i++){var child=children[i];this.addElementBackgroundImages(child);}}};var elementNodeTypes={1:true,9:true,11:true};ImagesLoaded.prototype.addElementBackgroundImages=function(elem){var style=getComputedStyle(elem);if(!style){// Firefox returns null if in a hidden iframe https://bugzil.la/548397
return;}// get url inside url("...")
var reURL=/url\((['"])?(.*?)\1\)/gi;var matches=reURL.exec(style.backgroundImage);while(matches!==null){var url=matches&&matches[2];if(url){this.addBackground(url,elem);}matches=reURL.exec(style.backgroundImage);}};/**
 * @param {Image} img
 */ImagesLoaded.prototype.addImage=function(img){var loadingImage=new LoadingImage(img);this.images.push(loadingImage);};ImagesLoaded.prototype.addBackground=function(url,elem){var background=new Background(url,elem);this.images.push(background);};ImagesLoaded.prototype.check=function(){var _this=this;this.progressedCount=0;this.hasAnyBroken=false;// complete if no images
if(!this.images.length){this.complete();return;}function onProgress(image,elem,message){// HACK - Chrome triggers event before object properties have changed. #83
setTimeout(function(){_this.progress(image,elem,message);});}this.images.forEach(function(loadingImage){loadingImage.once('progress',onProgress);loadingImage.check();});};ImagesLoaded.prototype.progress=function(image,elem,message){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!image.isLoaded;// progress event
this.emitEvent('progress',[this,image,elem]);if(this.jqDeferred&&this.jqDeferred.notify){this.jqDeferred.notify(this,image);}// check if completed
if(this.progressedCount==this.images.length){this.complete();}if(this.options.debug&&console){console.log('progress: '+message,image,elem);}};ImagesLoaded.prototype.complete=function(){var eventName=this.hasAnyBroken?'fail':'done';this.isComplete=true;this.emitEvent(eventName,[this]);this.emitEvent('always',[this]);if(this.jqDeferred){var jqMethod=this.hasAnyBroken?'reject':'resolve';this.jqDeferred[jqMethod](this);}};// --------------------------  -------------------------- //
function LoadingImage(img){this.img=img;}LoadingImage.prototype=Object.create(EvEmitter.prototype);LoadingImage.prototype.check=function(){// If complete is true and browser supports natural sizes,
// try to check for image status manually.
var isComplete=this.getIsImageComplete();if(isComplete){// report based on naturalWidth
this.confirm(this.img.naturalWidth!==0,'naturalWidth');return;}// If none of the checks above matched, simulate loading on detached element.
this.proxyImage=new Image();this.proxyImage.addEventListener('load',this);this.proxyImage.addEventListener('error',this);// bind to image as well for Firefox. #191
this.img.addEventListener('load',this);this.img.addEventListener('error',this);this.proxyImage.src=this.img.src;};LoadingImage.prototype.getIsImageComplete=function(){// check for non-zero, non-undefined naturalWidth
// fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
return this.img.complete&&this.img.naturalWidth;};LoadingImage.prototype.confirm=function(isLoaded,message){this.isLoaded=isLoaded;this.emitEvent('progress',[this,this.img,message]);};// ----- events ----- //
// trigger specified handler for event type
LoadingImage.prototype.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};LoadingImage.prototype.onload=function(){this.confirm(true,'onload');this.unbindEvents();};LoadingImage.prototype.onerror=function(){this.confirm(false,'onerror');this.unbindEvents();};LoadingImage.prototype.unbindEvents=function(){this.proxyImage.removeEventListener('load',this);this.proxyImage.removeEventListener('error',this);this.img.removeEventListener('load',this);this.img.removeEventListener('error',this);};// -------------------------- Background -------------------------- //
function Background(url,element){this.url=url;this.element=element;this.img=new Image();}// inherit LoadingImage prototype
Background.prototype=Object.create(LoadingImage.prototype);Background.prototype.check=function(){this.img.addEventListener('load',this);this.img.addEventListener('error',this);this.img.src=this.url;// check if image is already complete
var isComplete=this.getIsImageComplete();if(isComplete){this.confirm(this.img.naturalWidth!==0,'naturalWidth');this.unbindEvents();}};Background.prototype.unbindEvents=function(){this.img.removeEventListener('load',this);this.img.removeEventListener('error',this);};Background.prototype.confirm=function(isLoaded,message){this.isLoaded=isLoaded;this.emitEvent('progress',[this,this.element,message]);};// -------------------------- jQuery -------------------------- //
ImagesLoaded.makeJQueryPlugin=function(jQuery){jQuery=jQuery||window.jQuery;if(!jQuery){return;}// set local variable
$=jQuery;// $().imagesLoaded()
$.fn.imagesLoaded=function(options,callback){var instance=new ImagesLoaded(this,options,callback);return instance.jqDeferred.promise($(this));};};// try making plugin
ImagesLoaded.makeJQueryPlugin();// --------------------------  -------------------------- //
return ImagesLoaded;});/***/},/* 62 */ /***/function(module,exports,__webpack_require__){!function(t,e){true?module.exports=e():undefined;}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t;}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);})(t);}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function o(t,e){return!e||"object"!=_typeof2(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;}(t):e;}function r(){}r.prototype={on:function on(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this;},once:function once(t,e,i){var n=this;function s(){n.off(t,s),e.apply(i,arguments);}return s._=e,this.on(t,s,i);},emit:function emit(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,s=i.length;n<s;n++){i[n].fn.apply(i[n].ctx,e);}return this;},off:function off(t,e){var i=this.e||(this.e={}),n=i[t],s=[];if(n&&e)for(var o=0,r=n.length;o<r;o++){n[o].fn!==e&&n[o].fn._!==e&&s.push(n[o]);}return s.length?i[t]=s:delete i[t],this;}};var l=r,a="undefined"!=typeof Element?Element.prototype:{},u=a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector,h=function h(t,e){if(!t||1!==t.nodeType)return!1;if(u)return u.call(t,e);for(var i=t.parentNode.querySelectorAll(e),n=0;n<i.length;n++){if(i[n]==t)return!0;}return!1;};var f=function f(t,e){var i,n,s,o,r=0;return function(){i=this,n=arguments;var t=new Date()-r;return o||(t>=e?l():o=setTimeout(l,e-t)),s;};function l(){o=0,r=+new Date(),s=t.apply(i,n),i=null,n=null;}};function c(){}function d(t){return parseFloat(t)||0;}var m=function(){function e(i,n){t(this,e),this.x=d(i),this.y=d(n);}return i(e,null,[{key:"equals",value:function value(t,e){return t.x===e.x&&t.y===e.y;}}]),e;}(),p=function(){function e(i,n,s,o,r){t(this,e),this.id=r,this.left=i,this.top=n,this.width=s,this.height=o;}return i(e,null,[{key:"intersects",value:function value(t,e){return t.left<e.left+e.width&&e.left<t.left+t.width&&t.top<e.top+e.height&&e.top<t.top+t.height;}}]),e;}(),v={BASE:"shuffle",SHUFFLE_ITEM:"shuffle-item",VISIBLE:"shuffle-item--visible",HIDDEN:"shuffle-item--hidden"},y=0,g=function(){function e(i){t(this,e),y+=1,this.id=y,this.element=i,this.isVisible=!0,this.isHidden=!1;}return i(e,[{key:"show",value:function value(){this.isVisible=!0,this.element.classList.remove(v.HIDDEN),this.element.classList.add(v.VISIBLE),this.element.removeAttribute("aria-hidden");}},{key:"hide",value:function value(){this.isVisible=!1,this.element.classList.remove(v.VISIBLE),this.element.classList.add(v.HIDDEN),this.element.setAttribute("aria-hidden",!0);}},{key:"init",value:function value(){this.addClasses([v.SHUFFLE_ITEM,v.VISIBLE]),this.applyCss(e.Css.INITIAL),this.scale=e.Scale.VISIBLE,this.point=new m();}},{key:"addClasses",value:function value(t){var e=this;t.forEach(function(t){e.element.classList.add(t);});}},{key:"removeClasses",value:function value(t){var e=this;t.forEach(function(t){e.element.classList.remove(t);});}},{key:"applyCss",value:function value(t){var e=this;Object.keys(t).forEach(function(i){e.element.style[i]=t[i];});}},{key:"dispose",value:function value(){this.removeClasses([v.HIDDEN,v.VISIBLE,v.SHUFFLE_ITEM]),this.element.removeAttribute("style"),this.element=null;}}]),e;}();g.Css={INITIAL:{position:"absolute",top:0,left:0,visibility:"visible","will-change":"transform"},VISIBLE:{before:{opacity:1,visibility:"visible"},after:{transitionDelay:""}},HIDDEN:{before:{opacity:0},after:{visibility:"hidden",transitionDelay:""}}},g.Scale={VISIBLE:1,HIDDEN:.001};var _=null,E=function E(){if(null!==_)return _;var t=document.body||document.documentElement,e=document.createElement("div");return e.style.cssText="width:10px;padding:2px;box-sizing:border-box;",t.appendChild(e),_="10px"===window.getComputedStyle(e,null).width,t.removeChild(e),_;};function I(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.getComputedStyle(t,null),n=d(i[e]);return E()||"width"!==e?E()||"height"!==e||(n+=d(i.paddingTop)+d(i.paddingBottom)+d(i.borderTopWidth)+d(i.borderBottomWidth)):n+=d(i.paddingLeft)+d(i.paddingRight)+d(i.borderLeftWidth)+d(i.borderRightWidth),n;}var b={reverse:!1,by:null,compare:null,randomize:!1,key:"element"};function S(t,e){var i=Object.assign({},b,e),n=Array.from(t),s=!1;return t.length?i.randomize?function(t){for(var e=t.length;e;){e-=1;var i=Math.floor(Math.random()*(e+1)),n=t[i];t[i]=t[e],t[e]=n;}return t;}(t):("function"==typeof i.by?t.sort(function(t,e){if(s)return 0;var n=i.by(t[i.key]),o=i.by(e[i.key]);return void 0===n&&void 0===o?(s=!0,0):n<o||"sortFirst"===n||"sortLast"===o?-1:n>o||"sortLast"===n||"sortFirst"===o?1:0;}):"function"==typeof i.compare&&t.sort(i.compare),s?n:(i.reverse&&t.reverse(),t)):[];}var T={},k="transitionend",w=0;function C(t){return!!T[t]&&(T[t].element.removeEventListener(k,T[t].listener),T[t]=null,!0);}function L(t,e){var i=k+(w+=1),n=function n(t){t.currentTarget===t.target&&(C(i),e(t));};return t.addEventListener(k,n),T[i]={element:t,listener:n},i;}function D(t){return Math.max.apply(Math,t);}function z(t,e,i,n){var s=t/e;return Math.abs(Math.round(s)-s)<n&&(s=Math.round(s)),Math.min(Math.ceil(s),i);}function M(t,e,i){if(1===e)return t;for(var n=[],s=0;s<=i-e;s++){n.push(D(t.slice(s,s+e)));}return n;}function A(t,e){for(var i,n=(i=t,Math.min.apply(Math,i)),s=0,o=t.length;s<o;s++){if(t[s]>=n-e&&t[s]<=n+e)return s;}return 0;}function F(t,e){var i={};t.forEach(function(t){i[t.top]?i[t.top].push(t):i[t.top]=[t];});var n=[],s=[],o=[];return Object.keys(i).forEach(function(t){var r=i[t];s.push(r);var l,a=r[r.length-1],u=a.left+a.width,h=Math.round((e-u)/2),f=r,c=!1;if(h>0){var d=[];(c=r.every(function(t){var e=new p(t.left+h,t.top,t.width,t.height,t.id),i=!n.some(function(t){return p.intersects(e,t);});return d.push(e),i;}))&&(f=d);}if(!c&&r.some(function(t){return n.some(function(e){var i=p.intersects(t,e);return i&&(l=e),i;});})){var m=o.findIndex(function(t){return t.includes(l);});o.splice(m,1,s[m]);}n=n.concat(f),o.push(f);}),[].concat.apply([],o).sort(function(t,e){return t.id-e.id;}).map(function(t){return new m(t.left,t.top);});}function x(t){return Array.from(new Set(t));}var O=0,N=function(e){function r(e){var i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,r),(i=o(this,n(r).call(this))).options=Object.assign({},r.options,s),i.options.delimeter&&(i.options.delimiter=i.options.delimeter),i.lastSort={},i.group=r.ALL_ITEMS,i.lastFilter=r.ALL_ITEMS,i.isEnabled=!0,i.isDestroyed=!1,i.isInitialized=!1,i._transitions=[],i.isTransitioning=!1,i._queue=[];var l=i._getElementOption(e);if(!l)throw new TypeError("Shuffle needs to be initialized with an element.");return i.element=l,i.id="shuffle_"+O,O+=1,i._init(),i.isInitialized=!0,i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e);}(r,l),i(r,[{key:"_init",value:function value(){if(this.items=this._getItems(),this.options.sizer=this._getElementOption(this.options.sizer),this.element.classList.add(r.Classes.BASE),this._initItems(this.items),this._onResize=this._getResizeFunction(),window.addEventListener("resize",this._onResize),"complete"!==document.readyState){var t=this.layout.bind(this);window.addEventListener("load",function e(){window.removeEventListener("load",e),t();});}var e=window.getComputedStyle(this.element,null),i=r.getSize(this.element).width;this._validateStyles(e),this._setColumns(i),this.filter(this.options.group,this.options.initialSort),this.element.offsetWidth,this.setItemTransitions(this.items),this.element.style.transition="height ".concat(this.options.speed,"ms ").concat(this.options.easing);}},{key:"_getResizeFunction",value:function value(){var t=this._handleResize.bind(this);return this.options.throttle?this.options.throttle(t,this.options.throttleTime):t;}},{key:"_getElementOption",value:function value(t){return"string"==typeof t?this.element.querySelector(t):t&&t.nodeType&&1===t.nodeType?t:t&&t.jquery?t[0]:null;}},{key:"_validateStyles",value:function value(t){"static"===t.position&&(this.element.style.position="relative"),"hidden"!==t.overflow&&(this.element.style.overflow="hidden");}},{key:"_filter",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastFilter,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.items,i=this._getFilteredSets(t,e);return this._toggleFilterClasses(i),this.lastFilter=t,"string"==typeof t&&(this.group=t),i;}},{key:"_getFilteredSets",value:function value(t,e){var i=this,n=[],s=[];return t===r.ALL_ITEMS?n=e:e.forEach(function(e){i._doesPassFilter(t,e.element)?n.push(e):s.push(e);}),{visible:n,hidden:s};}},{key:"_doesPassFilter",value:function value(t,e){if("function"==typeof t)return t.call(e,e,this);var i=e.getAttribute("data-"+r.FILTER_ATTRIBUTE_KEY),n=this.options.delimiter?i.split(this.options.delimiter):JSON.parse(i);function s(t){return n.includes(t);}return Array.isArray(t)?this.options.filterMode===r.FilterMode.ANY?t.some(s):t.every(s):n.includes(t);}},{key:"_toggleFilterClasses",value:function value(t){var e=t.visible,i=t.hidden;e.forEach(function(t){t.show();}),i.forEach(function(t){t.hide();});}},{key:"_initItems",value:function value(t){t.forEach(function(t){t.init();});}},{key:"_disposeItems",value:function value(t){t.forEach(function(t){t.dispose();});}},{key:"_updateItemCount",value:function value(){this.visibleItems=this._getFilteredItems().length;}},{key:"setItemTransitions",value:function value(t){var e=this.options,i=e.speed,n=e.easing,s=this.options.useTransforms?["transform"]:["top","left"],o=Object.keys(g.Css.HIDDEN.before).map(function(t){return t.replace(/([A-Z])/g,function(t,e){return"-".concat(e.toLowerCase());});}),r=s.concat(o).join();t.forEach(function(t){t.element.style.transitionDuration=i+"ms",t.element.style.transitionTimingFunction=n,t.element.style.transitionProperty=r;});}},{key:"_getItems",value:function value(){var t=this;return Array.from(this.element.children).filter(function(e){return h(e,t.options.itemSelector);}).map(function(t){return new g(t);});}},{key:"_mergeNewItems",value:function value(t){var e=Array.from(this.element.children);return S(this.items.concat(t),{by:function by(t){return e.indexOf(t);}});}},{key:"_getFilteredItems",value:function value(){return this.items.filter(function(t){return t.isVisible;});}},{key:"_getConcealedItems",value:function value(){return this.items.filter(function(t){return!t.isVisible;});}},{key:"_getColumnSize",value:function value(t,e){var i;return 0===(i="function"==typeof this.options.columnWidth?this.options.columnWidth(t):this.options.sizer?r.getSize(this.options.sizer).width:this.options.columnWidth?this.options.columnWidth:this.items.length>0?r.getSize(this.items[0].element,!0).width:t)&&(i=t),i+e;}},{key:"_getGutterSize",value:function value(t){return"function"==typeof this.options.gutterWidth?this.options.gutterWidth(t):this.options.sizer?I(this.options.sizer,"marginLeft"):this.options.gutterWidth;}},{key:"_setColumns",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.getSize(this.element).width,e=this._getGutterSize(t),i=this._getColumnSize(t,e),n=(t+e)/i;Math.abs(Math.round(n)-n)<this.options.columnThreshold&&(n=Math.round(n)),this.cols=Math.max(Math.floor(n),1),this.containerWidth=t,this.colWidth=i;}},{key:"_setContainerSize",value:function value(){this.element.style.height=this._getContainerSize()+"px";}},{key:"_getContainerSize",value:function value(){return D(this.positions);}},{key:"_getStaggerAmount",value:function value(t){return Math.min(t*this.options.staggerAmount,this.options.staggerAmountMax);}},{key:"_dispatch",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.isDestroyed||(e.shuffle=this,this.emit(t,e));}},{key:"_resetCols",value:function value(){var t=this.cols;for(this.positions=[];t;){t-=1,this.positions.push(0);}}},{key:"_layout",value:function value(t){var e=this,i=this._getNextPositions(t),n=0;t.forEach(function(t,s){function o(){t.applyCss(g.Css.VISIBLE.after);}if(m.equals(t.point,i[s])&&!t.isHidden)return t.applyCss(g.Css.VISIBLE.before),void o();t.point=i[s],t.scale=g.Scale.VISIBLE,t.isHidden=!1;var r=e.getStylesForTransition(t,g.Css.VISIBLE.before);r.transitionDelay=e._getStaggerAmount(n)+"ms",e._queue.push({item:t,styles:r,callback:o}),n+=1;});}},{key:"_getNextPositions",value:function value(t){var e=this;if(this.options.isCentered){var i=t.map(function(t,i){var n=r.getSize(t.element,!0),s=e._getItemPosition(n);return new p(s.x,s.y,n.width,n.height,i);});return this.getTransformedPositions(i,this.containerWidth);}return t.map(function(t){return e._getItemPosition(r.getSize(t.element,!0));});}},{key:"_getItemPosition",value:function value(t){return function(t){for(var e=t.itemSize,i=t.positions,n=t.gridSize,s=t.total,o=t.threshold,r=t.buffer,l=z(e.width,n,s,o),a=M(i,l,s),u=A(a,r),h=new m(n*u,a[u]),f=a[u]+e.height,c=0;c<l;c++){i[u+c]=f;}return h;}({itemSize:t,positions:this.positions,gridSize:this.colWidth,total:this.cols,threshold:this.options.columnThreshold,buffer:this.options.buffer});}},{key:"getTransformedPositions",value:function value(t,e){return F(t,e);}},{key:"_shrink",value:function value(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._getConcealedItems(),i=0;e.forEach(function(e){function n(){e.applyCss(g.Css.HIDDEN.after);}if(e.isHidden)return e.applyCss(g.Css.HIDDEN.before),void n();e.scale=g.Scale.HIDDEN,e.isHidden=!0;var s=t.getStylesForTransition(e,g.Css.HIDDEN.before);s.transitionDelay=t._getStaggerAmount(i)+"ms",t._queue.push({item:e,styles:s,callback:n}),i+=1;});}},{key:"_handleResize",value:function value(){this.isEnabled&&!this.isDestroyed&&this.update();}},{key:"getStylesForTransition",value:function value(t,e){var i=Object.assign({},e);if(this.options.useTransforms){var n=this.options.roundTransforms?Math.round(t.point.x):t.point.x,s=this.options.roundTransforms?Math.round(t.point.y):t.point.y;i.transform="translate(".concat(n,"px, ").concat(s,"px) scale(").concat(t.scale,")");}else i.left=t.point.x+"px",i.top=t.point.y+"px";return i;}},{key:"_whenTransitionDone",value:function value(t,e,i){var n=L(t,function(t){e(),i(null,t);});this._transitions.push(n);}},{key:"_getTransitionFunction",value:function value(t){var e=this;return function(i){t.item.applyCss(t.styles),e._whenTransitionDone(t.item.element,t.callback,i);};}},{key:"_processQueue",value:function value(){this.isTransitioning&&this._cancelMovement();var t=this.options.speed>0,e=this._queue.length>0;e&&t&&this.isInitialized?this._startTransitions(this._queue):e?(this._styleImmediately(this._queue),this._dispatch(r.EventType.LAYOUT)):this._dispatch(r.EventType.LAYOUT),this._queue.length=0;}},{key:"_startTransitions",value:function value(t){var e=this;this.isTransitioning=!0,function(t,e,i){i||("function"==typeof e?(i=e,e=null):i=c);var n=t&&t.length;if(!n)return i(null,[]);var s=!1,o=new Array(n);function r(t){return function(e,r){if(!s){if(e)return i(e,o),void(s=!0);o[t]=r,--n||i(null,o);}};}t.forEach(e?function(t,i){t.call(e,r(i));}:function(t,e){t(r(e));});}(t.map(function(t){return e._getTransitionFunction(t);}),this._movementFinished.bind(this));}},{key:"_cancelMovement",value:function value(){this._transitions.forEach(C),this._transitions.length=0,this.isTransitioning=!1;}},{key:"_styleImmediately",value:function value(t){if(t.length){var e=t.map(function(t){return t.item.element;});r._skipTransitions(e,function(){t.forEach(function(t){t.item.applyCss(t.styles),t.callback();});});}}},{key:"_movementFinished",value:function value(){this._transitions.length=0,this.isTransitioning=!1,this._dispatch(r.EventType.LAYOUT);}},{key:"filter",value:function value(t,e){this.isEnabled&&((!t||t&&0===t.length)&&(t=r.ALL_ITEMS),this._filter(t),this._shrink(),this._updateItemCount(),this.sort(e));}},{key:"sort",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastSort;if(this.isEnabled){this._resetCols();var e=S(this._getFilteredItems(),t);this._layout(e),this._processQueue(),this._setContainerSize(),this.lastSort=t;}}},{key:"update",value:function value(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isEnabled&&(t||this._setColumns(),this.sort());}},{key:"layout",value:function value(){this.update(!0);}},{key:"add",value:function value(t){var e=this,i=x(t).map(function(t){return new g(t);});this._initItems(i),this._resetCols();var n=S(this._mergeNewItems(i),this.lastSort),s=this._filter(this.lastFilter,n),o=function o(t){return i.includes(t);},r=function r(t){t.scale=g.Scale.HIDDEN,t.isHidden=!0,t.applyCss(g.Css.HIDDEN.before),t.applyCss(g.Css.HIDDEN.after);},l=this._getNextPositions(s.visible);s.visible.forEach(function(t,i){o(t)&&(t.point=l[i],r(t),t.applyCss(e.getStylesForTransition(t,{})));}),s.hidden.forEach(function(t){o(t)&&r(t);}),this.element.offsetWidth,this.setItemTransitions(i),this.items=this._mergeNewItems(i),this.filter(this.lastFilter);}},{key:"disable",value:function value(){this.isEnabled=!1;}},{key:"enable",value:function value(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isEnabled=!0,t&&this.update();}},{key:"remove",value:function value(t){var e=this;if(t.length){var i=x(t),n=i.map(function(t){return e.getItemByElement(t);}).filter(function(t){return!!t;});this._toggleFilterClasses({visible:[],hidden:n}),this._shrink(n),this.sort(),this.items=this.items.filter(function(t){return!n.includes(t);}),this._updateItemCount(),this.once(r.EventType.LAYOUT,function(){e._disposeItems(n),i.forEach(function(t){t.parentNode.removeChild(t);}),e._dispatch(r.EventType.REMOVED,{collection:i});});}}},{key:"getItemByElement",value:function value(t){return this.items.find(function(e){return e.element===t;});}},{key:"resetItems",value:function value(){var t=this;this._disposeItems(this.items),this.isInitialized=!1,this.items=this._getItems(),this._initItems(this.items),this.once(r.EventType.LAYOUT,function(){t.setItemTransitions(t.items),t.isInitialized=!0;}),this.filter(this.lastFilter);}},{key:"destroy",value:function value(){this._cancelMovement(),window.removeEventListener("resize",this._onResize),this.element.classList.remove("shuffle"),this.element.removeAttribute("style"),this._disposeItems(this.items),this.items.length=0,this._transitions.length=0,this.options.sizer=null,this.element=null,this.isDestroyed=!0,this.isEnabled=!1;}}],[{key:"getSize",value:function value(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=window.getComputedStyle(t,null),n=I(t,"width",i),s=I(t,"height",i);e&&(n+=I(t,"marginLeft",i)+I(t,"marginRight",i),s+=I(t,"marginTop",i)+I(t,"marginBottom",i));return{width:n,height:s};}},{key:"_skipTransitions",value:function value(t,e){var i=t.map(function(t){var e=t.style,i=e.transitionDuration,n=e.transitionDelay;return e.transitionDuration="0ms",e.transitionDelay="0ms",{duration:i,delay:n};});e(),t[0].offsetWidth,t.forEach(function(t,e){t.style.transitionDuration=i[e].duration,t.style.transitionDelay=i[e].delay;});}}]),r;}();return N.ShuffleItem=g,N.ALL_ITEMS="all",N.FILTER_ATTRIBUTE_KEY="groups",N.EventType={LAYOUT:"shuffle:layout",REMOVED:"shuffle:removed"},N.Classes=v,N.FilterMode={ANY:"any",ALL:"all"},N.options={group:N.ALL_ITEMS,speed:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)",itemSelector:"*",sizer:null,gutterWidth:0,columnWidth:0,delimiter:null,buffer:0,columnThreshold:.01,initialSort:null,throttle:f,throttleTime:300,staggerAmount:15,staggerAmountMax:150,useTransforms:!0,filterMode:N.FilterMode.ANY,isCentered:!1,roundTransforms:!0},N.Point=m,N.Rect=p,N.__sorter=S,N.__getColumnSpan=z,N.__getAvailablePositions=M,N.__getShortColumn=A,N.__getCenteredPositions=F,N;});/***/},/* 63 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */__webpack_require__(64);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Slick');page.initSlick=function(){$('[data-provide~="slider"]').each(function(){var tag=$(this),options={speed:1000,arrows:false,centerPadding:'0'};options=$.extend(options,page.getDataOptions(tag));if(options.slidesToShow!==undefined||options.centerMode!==undefined){var scrollOn768=1;if(options.slidesToScroll!==undefined){if(options.slidesToScroll>1){scrollOn768=2;}}options.responsive=[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:scrollOn768}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:'0px'}}];}tag.slick(options);});};}(jQuery);/***/},/* 64 */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */ /* global window, document, define, jQuery, setInterval, clearInterval */;(function(factory){'use strict';if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(3)],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(function($){'use strict';var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function customPaging(slider,i){return $('<button type="button" />').text(i+1);},dots:false,dotsClass:'slick-dots',draggable:true,easing:'linear',edgeFriction:0.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden='hidden';_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange';}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;// A simple way to check for HTML strings
// Strict HTML recognition (must start with <)
// Extracted from jQuery v1.11 source
_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);}return Slick;}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'});};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==='boolean'){addBefore=index;index=null;}else if(index<0||index>=_.slideCount){return false;}_.unload();if(typeof index==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack);}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index));}else{$(markup).insertAfter(_.$slides.eq(index));}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack);}else{$(markup).appendTo(_.$slideTrack);}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft;}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft;}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function step(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps);}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps);}},complete:function complete(){if(callback){callback.call();}}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)';}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider);}return asNavFor;};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&_typeof2(asNavFor)==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,true);}});}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase;}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;}if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer);}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0;}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1;}}}_.slideHandler(slideTo);}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows);}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows);}if(_.options.infinite!==true){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'});}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)));}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active');}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'');});_.$slider.addClass('slick-slider');_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1;}$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass('draggable');}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target));}}slide.appendChild(row);}newSlides.appendChild(slide);}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':100/_.options.slidesPerRow+'%','display':'inline-block'});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth;}else if(_.respondTo==='slider'){respondToWidth=sliderWidth;}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth);}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);triggerBreakpoint=targetBreakpoint;}}// only trigger breakpoints during an actual break. not on initialize.
if(!initial&&triggerBreakpoint!==false){_.$slider.trigger('breakpoint',[_,triggerBreakpoint]);}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;// If target is a link, prevent default action.
if($target.is('a')){event.preventDefault();}// If target is not the <li> element (ie: a child), find the <li>.
if(!$target.is('li')){$target=$target.closest('li');}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);}break;case'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);}break;case'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1];}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;}prevNavigable=navigables[n];}}return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,true)).off('mouseleave.slick',$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off('keydown.slick',_.keyHandler);}}_.$slider.off('focus.slick blur.slick');if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off('keydown.slick',_.keyHandler);_.$nextArrow&&_.$nextArrow.off('keydown.slick',_.keyHandler);}}_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off('click.slick',_.selectHandler);}$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,false));};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}}if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);}_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=true;if(!refresh){_.$slider.trigger('destroy',[_]);}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay();}},0);});};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty;}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}}else if(_.options.centerMode===true){pagerQty=_.slideCount;}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5;}else if(_.options.slidesToShow===1){coef=-2;}}verticalOffset=verticalHeight*_.options.slidesToShow*coef;}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1;}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1;}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight;}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2;}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset;}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset;}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}}return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount;}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+$(slide).outerWidth()/2>_.swipeLeft*-1){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed;}else{return _.options.slidesToScroll;}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();}if(creation){_.$slider.trigger('init',[_]);}if(_.options.accessibility===true){_.initADA();}if(_.options.autoplay){_.paused=false;_.autoPlay();}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount;});_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({'role':'tabpanel','id':'slick-slide'+_.instanceUid+i,'tabindex':-1});if(slideControlIndex!==-1){var ariaButtonControl='slick-slide-control'+_.instanceUid+slideControlIndex;if($('#'+ariaButtonControl).length){$(this).attr({'aria-describedby':ariaButtonControl});}}});_.$dots.attr('role','tablist').find('li').each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({'role':'presentation'});$(this).find('button').first().attr({'role':'tab','id':'slick-slide-control'+_.instanceUid+i,'aria-controls':'slick-slide'+_.instanceUid+mappedSlideIndex,'aria-label':i+1+' of '+numDotGroups,'aria-selected':null,'tabindex':'-1'});}).eq(_.currentSlide).find('button').attr({'aria-selected':'true','tabindex':'0'}).end();}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({'tabindex':'0'});}else{_.$slides.eq(i).removeAttr('tabindex');}}_.activateADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on('keydown.slick',_.keyHandler);_.$nextArrow.on('keydown.slick',_.keyHandler);}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.accessibility===true){_.$dots.on('keydown.slick',_.keyHandler);}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,true)).on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show();}};Slick.prototype.keyHandler=function(event){var _=this;//Dont slide if the cursor is inside the form fields and arrow keys are pressed
if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'next':'previous'}});}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'previous':'next'}});}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageSrcSet=$(this).attr('data-srcset'),imageSizes=$(this).attr('data-sizes')||_.$slider.attr('data-sizes'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');});_.$slider.trigger('lazyLoaded',[_,image,imageSource]);});};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);};imageToLoad.src=imageSource;});}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++;}}loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);if(_.options.lazyLoad==='anticipated'){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find('.slick-slide');for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++;}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange);}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange);}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange);}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad();}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false;};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition();}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay();}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr('tabindex',0).focus();}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageSrcSet=image.attr('data-srcset');imageSizes=image.attr('data-sizes')||_.$slider.attr('data-sizes');imageToLoad=document.createElement('img');imageToLoad.onload=function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');if(_.options.adaptiveHeight===true){_.setPosition();}_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad();};imageToLoad.onerror=function(){if(tryCount<3){/**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */setTimeout(function(){_.progressiveLazyLoad(tryCount+1);},500);}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad();}};imageToLoad.src=imageSource;}else{_.$slider.trigger('allImagesLoaded',[_]);}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;// in non-infinite sliders, we don't want to go past the
// last visible index.
if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex;}// if less slides than to show, go to start.
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},false);}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;// loop through the breakpoints and cut out any existing
// ones with the same breakpoint number, we don't want dupes.
while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1);}l--;}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll;}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_]);};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition();}},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else{index=removeBefore===true?--index:index;}if(_.slideCount<1||index<0||index>_.slideCount-1){return false;}_.unload();if(removeAll===true){_.$slideTrack.children().remove();}else{_.$slideTrack.children(this.options.slide).eq(index).remove();}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position;}x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps);}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps);}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:'0px '+_.options.centerPadding});}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+' 0px'});}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children('.slick-slide').length));}else if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount);}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length));}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset);};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){/**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple';}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive';}else if(typeof arguments[1]!=='undefined'){type='single';}}if(type==='single'){_.options[option]=value;}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val;});}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]];}else{l=_.options.responsive.length-1;// loop through the responsive object and splice out duplicates.
while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1);}l--;}_.options.responsive.push(value[item]);}}}if(refresh){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide));}else{_.setFade();}_.$slider.trigger('setPosition',[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical');}else{_.$slider.removeClass('slick-vertical');}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true;}}if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3;}}else{_.options.zIndex=_.defaults.zIndex;}}if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false;}if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false;}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition';}_.transformsEnabled=_.options.useTransform&&_.animType!==null&&_.animType!==false;};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false');}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false');}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center');}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center');}}_.$slides.eq(index).addClass('slick-center');}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false');}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false');}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}}}if(_.options.lazyLoad==='ondemand'||_.options.lazyLoad==='anticipated'){_.lazyLoad();}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false;}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1;}else{infiniteCount=_.options.slidesToShow;}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');}_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','');});}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay();}_.interrupted=toggle;};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return;}_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return;}if(_.options.fade===true&&_.currentSlide===index){return;}if(sync===false){_.asNavFor(index);}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}if(_.options.autoplay){clearInterval(_.autoPlayTimer);}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll;}else{animSlide=_.slideCount+targetSlide;}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0;}else{animSlide=targetSlide-_.slideCount;}}else{animSlide=targetSlide;}_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide);}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}_.animateHeight();return;}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide();}_.$slider.addClass('slick-loading');};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle);}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?'left':'right';}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?'left':'right';}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?'right':'left';}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return'down';}else{return'up';}}return'vertical';};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false;}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false;}if(_.touchObject.edgeHit===true){_.$slider.trigger('edge',[_,_.swipeDirection()]);}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case'left':case'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case'right':case'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction]);}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||'ontouchend'in document&&_.options.swipe===false){return;}else if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1){return;}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;}switch(event.data.action){case'start':_.swipeStart(event);break;case'move':_.swipeMove(event);break;case'end':_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false;}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false;}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength;}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault();}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==='right'||_.currentSlide>=_.getDotCount()&&swipeDirection==='left'){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset;}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset;}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset;}if(_.options.fade===true||_.options.touchMove===false){return false;}if(_.animating===true){_.swipeLeft=null;return false;}_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0];}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','');};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').end();_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active');}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true;}else{_.interrupted=false;}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(_typeof2(opt)=='object'||typeof opt=='undefined')_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret;}return _;};});/***/},/* 65 */ /***/function(module,exports,__webpack_require__){/**
 * Load required plugin.
 */window.Typed=__webpack_require__(66);/**
 * Configure the plugin.
 */+function($){page.registerVendor('Typed');page.initTyped=function(){$('[data-typing]').each(function(){var strings=$(this).data('typing').split(',');var options={strings:strings,typeSpeed:50,backSpeed:30,backDelay:800,loop:true};options=$.extend(options,page.getDataOptions($(this)));var typed=new Typed($(this)[0],options);});};}(jQuery);/***/},/* 66 */ /***/function(module,exports,__webpack_require__){/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else{}})(this,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/ /******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.loaded=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="";/******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(0);/******/}(/************************************************************************/ /******/[/* 0 */ /***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _initializerJs=__webpack_require__(1);var _htmlParserJs=__webpack_require__(3);/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */var Typed=function(){function Typed(elementId,options){_classCallCheck(this,Typed);// Initialize it up
_initializerJs.initializer.load(this,options,elementId);// All systems go!
this.begin();}/**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */_createClass(Typed,[{key:'toggle',value:function toggle(){this.pause.status?this.start():this.stop();}/**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */},{key:'stop',value:function stop(){if(this.typingComplete)return;if(this.pause.status)return;this.toggleBlinking(true);this.pause.status=true;this.options.onStop(this.arrayPos,this);}/**
	     * Start typing / backspacing after being stopped
	     * @public
	     */},{key:'start',value:function start(){if(this.typingComplete)return;if(!this.pause.status)return;this.pause.status=false;if(this.pause.typewrite){this.typewrite(this.pause.curString,this.pause.curStrPos);}else{this.backspace(this.pause.curString,this.pause.curStrPos);}this.options.onStart(this.arrayPos,this);}/**
	     * Destroy this instance of Typed
	     * @public
	     */},{key:'destroy',value:function destroy(){this.reset(false);this.options.onDestroy(this);}/**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */},{key:'reset',value:function reset(){var restart=arguments.length<=0||arguments[0]===undefined?true:arguments[0];clearInterval(this.timeout);this.replaceText('');if(this.cursor&&this.cursor.parentNode){this.cursor.parentNode.removeChild(this.cursor);this.cursor=null;}this.strPos=0;this.arrayPos=0;this.curLoop=0;if(restart){this.insertCursor();this.options.onReset(this);this.begin();}}/**
	     * Begins the typing animation
	     * @private
	     */},{key:'begin',value:function begin(){var _this=this;this.typingComplete=false;this.shuffleStringsIfNeeded(this);this.insertCursor();if(this.bindInputFocusEvents)this.bindFocusEvents();this.timeout=setTimeout(function(){// Check if there is some text in the element, if yes start by backspacing the default message
if(!_this.currentElContent||_this.currentElContent.length===0){_this.typewrite(_this.strings[_this.sequence[_this.arrayPos]],_this.strPos);}else{// Start typing
_this.backspace(_this.currentElContent,_this.currentElContent.length);}},this.startDelay);}/**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */},{key:'typewrite',value:function typewrite(curString,curStrPos){var _this2=this;if(this.fadeOut&&this.el.classList.contains(this.fadeOutClass)){this.el.classList.remove(this.fadeOutClass);if(this.cursor)this.cursor.classList.remove(this.fadeOutClass);}var humanize=this.humanizer(this.typeSpeed);var numChars=1;if(this.pause.status===true){this.setPauseStatus(curString,curStrPos,true);return;}// contain typing function in a timeout humanize'd delay
this.timeout=setTimeout(function(){// skip over any HTML chars
curStrPos=_htmlParserJs.htmlParser.typeHtmlChars(curString,curStrPos,_this2);var pauseTime=0;var substr=curString.substr(curStrPos);// check for an escape character before a pause value
// format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
// single ^ are removed from string
if(substr.charAt(0)==='^'){if(/^\^\d+/.test(substr)){var skip=1;// skip at least 1
substr=/\d+/.exec(substr)[0];skip+=substr.length;pauseTime=parseInt(substr);_this2.temporaryPause=true;_this2.options.onTypingPaused(_this2.arrayPos,_this2);// strip out the escape character and pause value so they're not printed
curString=curString.substring(0,curStrPos)+curString.substring(curStrPos+skip);_this2.toggleBlinking(true);}}// check for skip characters formatted as
// "this is a `string to print NOW` ..."
if(substr.charAt(0)==='`'){while(curString.substr(curStrPos+numChars).charAt(0)!=='`'){numChars++;if(curStrPos+numChars>curString.length)break;}// strip out the escape characters and append all the string in between
var stringBeforeSkip=curString.substring(0,curStrPos);var stringSkipped=curString.substring(stringBeforeSkip.length+1,curStrPos+numChars);var stringAfterSkip=curString.substring(curStrPos+numChars+1);curString=stringBeforeSkip+stringSkipped+stringAfterSkip;numChars--;}// timeout for any pause after a character
_this2.timeout=setTimeout(function(){// Accounts for blinking while paused
_this2.toggleBlinking(false);// We're done with this sentence!
if(curStrPos===curString.length){_this2.doneTyping(curString,curStrPos);}else{_this2.keepTyping(curString,curStrPos,numChars);}// end of character pause
if(_this2.temporaryPause){_this2.temporaryPause=false;_this2.options.onTypingResumed(_this2.arrayPos,_this2);}},pauseTime);// humanized value for typing
},humanize);}/**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */},{key:'keepTyping',value:function keepTyping(curString,curStrPos,numChars){// call before functions if applicable
if(curStrPos===0){this.toggleBlinking(false);this.options.preStringTyped(this.arrayPos,this);}// start typing each new char into existing string
// curString: arg, this.el.html: original text inside element
curStrPos+=numChars;var nextString=curString.substr(0,curStrPos);this.replaceText(nextString);// loop the function
this.typewrite(curString,curStrPos);}/**
	     * We're done typing all strings
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */},{key:'doneTyping',value:function doneTyping(curString,curStrPos){var _this3=this;// fires callback function
this.options.onStringTyped(this.arrayPos,this);this.toggleBlinking(true);// is this the final string
if(this.arrayPos===this.strings.length-1){// callback that occurs on the last typed string
this.complete();// quit if we wont loop back
if(this.loop===false||this.curLoop===this.loopCount){return;}}this.timeout=setTimeout(function(){_this3.backspace(curString,curStrPos);},this.backDelay);}/**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */},{key:'backspace',value:function backspace(curString,curStrPos){var _this4=this;if(this.pause.status===true){this.setPauseStatus(curString,curStrPos,true);return;}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(false);var humanize=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){curStrPos=_htmlParserJs.htmlParser.backSpaceHtmlChars(curString,curStrPos,_this4);// replace text with base text + typed characters
var curStringAtPosition=curString.substr(0,curStrPos);_this4.replaceText(curStringAtPosition);// if smartBack is enabled
if(_this4.smartBackspace){// the remaining part of the current string is equal of the same part of the new string
var nextString=_this4.strings[_this4.arrayPos+1];if(nextString&&curStringAtPosition===nextString.substr(0,curStrPos)){_this4.stopNum=curStrPos;}else{_this4.stopNum=0;}}// if the number (id of character in current string) is
// less than the stop number, keep going
if(curStrPos>_this4.stopNum){// subtract characters one by one
curStrPos--;// loop the function
_this4.backspace(curString,curStrPos);}else if(curStrPos<=_this4.stopNum){// if the stop number has been reached, increase
// array position to next string
_this4.arrayPos++;// When looping, begin at the beginning after backspace complete
if(_this4.arrayPos===_this4.strings.length){_this4.arrayPos=0;_this4.options.onLastStringBackspaced();_this4.shuffleStringsIfNeeded();_this4.begin();}else{_this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]],curStrPos);}}// humanized value for typing
},humanize);}/**
	     * Full animation is complete
	     * @private
	     */},{key:'complete',value:function complete(){this.options.onComplete(this);if(this.loop){this.curLoop++;}else{this.typingComplete=true;}}/**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */},{key:'setPauseStatus',value:function setPauseStatus(curString,curStrPos,isTyping){this.pause.typewrite=isTyping;this.pause.curString=curString;this.pause.curStrPos=curStrPos;}/**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */},{key:'toggleBlinking',value:function toggleBlinking(isBlinking){if(!this.cursor)return;// if in paused state, don't toggle blinking a 2nd time
if(this.pause.status)return;if(this.cursorBlinking===isBlinking)return;this.cursorBlinking=isBlinking;if(isBlinking){this.cursor.classList.add('typed-cursor--blink');}else{this.cursor.classList.remove('typed-cursor--blink');}}/**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */},{key:'humanizer',value:function humanizer(speed){return Math.round(Math.random()*speed/2)+speed;}/**
	     * Shuffle the sequence of the strings array
	     * @private
	     */},{key:'shuffleStringsIfNeeded',value:function shuffleStringsIfNeeded(){if(!this.shuffle)return;this.sequence=this.sequence.sort(function(){return Math.random()-0.5;});}/**
	     * Adds a CSS class to fade out current string
	     * @private
	     */},{key:'initFadeOut',value:function initFadeOut(){var _this5=this;this.el.className+=' '+this.fadeOutClass;if(this.cursor)this.cursor.className+=' '+this.fadeOutClass;return setTimeout(function(){_this5.arrayPos++;_this5.replaceText('');// Resets current string if end of loop reached
if(_this5.strings.length>_this5.arrayPos){_this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]],0);}else{_this5.typewrite(_this5.strings[0],0);_this5.arrayPos=0;}},this.fadeOutDelay);}/**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */},{key:'replaceText',value:function replaceText(str){if(this.attr){this.el.setAttribute(this.attr,str);}else{if(this.isInput){this.el.value=str;}else if(this.contentType==='html'){this.el.innerHTML=str;}else{this.el.textContent=str;}}}/**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */},{key:'bindFocusEvents',value:function bindFocusEvents(){var _this6=this;if(!this.isInput)return;this.el.addEventListener('focus',function(e){_this6.stop();});this.el.addEventListener('blur',function(e){if(_this6.el.value&&_this6.el.value.length!==0){return;}_this6.start();});}/**
	     * On init, insert the cursor element
	     * @private
	     */},{key:'insertCursor',value:function insertCursor(){if(!this.showCursor)return;if(this.cursor)return;this.cursor=document.createElement('span');this.cursor.className='typed-cursor';this.cursor.innerHTML=this.cursorChar;this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling);}}]);return Typed;}();exports['default']=Typed;module.exports=exports['default'];/***/},/* 1 */ /***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _defaultsJs=__webpack_require__(2);var _defaultsJs2=_interopRequireDefault(_defaultsJs);/**
	 * Initialize the Typed object
	 */var Initializer=function(){function Initializer(){_classCallCheck(this,Initializer);}_createClass(Initializer,[{key:'load',/**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */value:function load(self,options,elementId){// chosen element to manipulate text
if(typeof elementId==='string'){self.el=document.querySelector(elementId);}else{self.el=elementId;}self.options=_extends({},_defaultsJs2['default'],options);// attribute to type into
self.isInput=self.el.tagName.toLowerCase()==='input';self.attr=self.options.attr;self.bindInputFocusEvents=self.options.bindInputFocusEvents;// show cursor
self.showCursor=self.isInput?false:self.options.showCursor;// custom cursor
self.cursorChar=self.options.cursorChar;// Is the cursor blinking
self.cursorBlinking=true;// text content of element
self.elContent=self.attr?self.el.getAttribute(self.attr):self.el.textContent;// html or plain text
self.contentType=self.options.contentType;// typing speed
self.typeSpeed=self.options.typeSpeed;// add a delay before typing starts
self.startDelay=self.options.startDelay;// backspacing speed
self.backSpeed=self.options.backSpeed;// only backspace what doesn't match the previous string
self.smartBackspace=self.options.smartBackspace;// amount of time to wait before backspacing
self.backDelay=self.options.backDelay;// Fade out instead of backspace
self.fadeOut=self.options.fadeOut;self.fadeOutClass=self.options.fadeOutClass;self.fadeOutDelay=self.options.fadeOutDelay;// variable to check whether typing is currently paused
self.isPaused=false;// input strings of text
self.strings=self.options.strings.map(function(s){return s.trim();});// div containing strings
if(typeof self.options.stringsElement==='string'){self.stringsElement=document.querySelector(self.options.stringsElement);}else{self.stringsElement=self.options.stringsElement;}if(self.stringsElement){self.strings=[];self.stringsElement.style.display='none';var strings=Array.prototype.slice.apply(self.stringsElement.children);var stringsLength=strings.length;if(stringsLength){for(var i=0;i<stringsLength;i+=1){var stringEl=strings[i];self.strings.push(stringEl.innerHTML.trim());}}}// character number position of current string
self.strPos=0;// current array position
self.arrayPos=0;// index of string to stop backspacing on
self.stopNum=0;// Looping logic
self.loop=self.options.loop;self.loopCount=self.options.loopCount;self.curLoop=0;// shuffle the strings
self.shuffle=self.options.shuffle;// the order of strings
self.sequence=[];self.pause={status:false,typewrite:true,curString:'',curStrPos:0};// When the typing is complete (when not looped)
self.typingComplete=false;// Set the order in which the strings are typed
for(var i in self.strings){self.sequence[i]=i;}// If there is some text in the element
self.currentElContent=this.getCurrentElContent(self);self.autoInsertCss=self.options.autoInsertCss;this.appendAnimationCss(self);}},{key:'getCurrentElContent',value:function getCurrentElContent(self){var elContent='';if(self.attr){elContent=self.el.getAttribute(self.attr);}else if(self.isInput){elContent=self.el.value;}else if(self.contentType==='html'){elContent=self.el.innerHTML;}else{elContent=self.el.textContent;}return elContent;}},{key:'appendAnimationCss',value:function appendAnimationCss(self){var cssDataName='data-typed-js-css';if(!self.autoInsertCss){return;}if(!self.showCursor&&!self.fadeOut){return;}if(document.querySelector('['+cssDataName+']')){return;}var css=document.createElement('style');css.type='text/css';css.setAttribute(cssDataName,true);var innerCss='';if(self.showCursor){innerCss+='\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';}if(self.fadeOut){innerCss+='\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';}if(css.length===0){return;}css.innerHTML=innerCss;document.body.appendChild(css);}}]);return Initializer;}();exports['default']=Initializer;var initializer=new Initializer();exports.initializer=initializer;/***/},/* 2 */ /***/function(module,exports){/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */'use strict';Object.defineProperty(exports,'__esModule',{value:true});var defaults={/**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */strings:['These are the default values...','You know what you should do?','Use your own!','Have a great day!'],stringsElement:null,/**
	   * @property {number} typeSpeed type speed in milliseconds
	   */typeSpeed:0,/**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */startDelay:0,/**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */backSpeed:0,/**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */smartBackspace:true,/**
	   * @property {boolean} shuffle shuffle the strings
	   */shuffle:false,/**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */backDelay:700,/**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */fadeOut:false,fadeOutClass:'typed-fade-out',fadeOutDelay:500,/**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */loop:false,loopCount:Infinity,/**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */showCursor:true,cursorChar:'|',autoInsertCss:true,/**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */attr:null,/**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */bindInputFocusEvents:false,/**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */contentType:'html',/**
	   * All typing is complete
	   * @param {Typed} self
	   */onComplete:function onComplete(self){},/**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */preStringTyped:function preStringTyped(arrayPos,self){},/**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */onStringTyped:function onStringTyped(arrayPos,self){},/**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */onLastStringBackspaced:function onLastStringBackspaced(self){},/**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */onTypingPaused:function onTypingPaused(arrayPos,self){},/**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */onTypingResumed:function onTypingResumed(arrayPos,self){},/**
	   * After reset
	   * @param {Typed} self
	   */onReset:function onReset(self){},/**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */onStop:function onStop(arrayPos,self){},/**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */onStart:function onStart(arrayPos,self){},/**
	   * After destroy
	   * @param {Typed} self
	   */onDestroy:function onDestroy(self){}};exports['default']=defaults;module.exports=exports['default'];/***/},/* 3 */ /***/function(module,exports){/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var HTMLParser=function(){function HTMLParser(){_classCallCheck(this,HTMLParser);}_createClass(HTMLParser,[{key:'typeHtmlChars',/**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */value:function typeHtmlChars(curString,curStrPos,self){if(self.contentType!=='html')return curStrPos;var curChar=curString.substr(curStrPos).charAt(0);if(curChar==='<'||curChar==='&'){var endTag='';if(curChar==='<'){endTag='>';}else{endTag=';';}while(curString.substr(curStrPos+1).charAt(0)!==endTag){curStrPos++;if(curStrPos+1>curString.length){break;}}curStrPos++;}return curStrPos;}/**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */},{key:'backSpaceHtmlChars',value:function backSpaceHtmlChars(curString,curStrPos,self){if(self.contentType!=='html')return curStrPos;var curChar=curString.substr(curStrPos).charAt(0);if(curChar==='>'||curChar===';'){var endTag='';if(curChar==='>'){endTag='<';}else{endTag='&';}while(curString.substr(curStrPos-1).charAt(0)!==endTag){curStrPos--;if(curStrPos<0){break;}}curStrPos--;}return curStrPos;}}]);return HTMLParser;}();exports['default']=HTMLParser;var htmlParser=new HTMLParser();exports.htmlParser=htmlParser;/***/}/******/]));});;/***/},/* 67 */ /***/function(module,exports,__webpack_require__){/*
|--------------------------------------------------------------------------
| Partials
|--------------------------------------------------------------------------
|
| Split the application code to several files. Almost all of the following
| files are required for the application to work properly.
|
*/__webpack_require__(68);__webpack_require__(69);__webpack_require__(70);__webpack_require__(71);__webpack_require__(72);__webpack_require__(73);__webpack_require__(74);__webpack_require__(75);__webpack_require__(76);__webpack_require__(77);__webpack_require__(78);__webpack_require__(79);__webpack_require__(80);__webpack_require__(81);__webpack_require__(82);__webpack_require__(83);__webpack_require__(84);/***/},/* 68 */ /***/function(module,exports){/**
 * Config the application behaviour.
 */+function($){page.config=function(options){// Return config value
if(typeof options==='string'){return page.defaults[options];}// Save configs
$.extend(true,page.defaults,options);// Make necessary changes
//
if(!page.defaults.smoothScroll){SmoothScroll.destroy();}// Google map
//
if($('[data-provide~="map"]').length&&window["google.maps.Map"]===undefined){$.getScript("https://maps.googleapis.com/maps/api/js?key="+page.defaults.googleApiKey+"&callback=page.initMap");}// Google Analytics
//
if(page.defaults.googleAnalyticsId){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create',page.defaults.googleAnalyticsId,'auto');ga('send','pageview');}// Google reCAPTCHA
//
if($('[data-provide~="recaptcha"]').length&&window["grecaptcha"]===undefined){var url="https://www.google.com/recaptcha/api.js?onload=recaptchaLoadCallback";if(page.defaults.reCaptchaLanguage!=''){url+='&hl='+page.defaults.reCaptchaLanguage;}$.getScript(url);}// DOM is loaded, let's init the page.
//
page.init();};}(jQuery);/***/},/* 69 */ /***/function(module,exports){/**
 * Bind input changes to data attributes
 */+function($){page.initBind=function(){// Set the inner text
//
$('[data-bind-radio]').each(function(){var e=$(this),radio=e.data('bind-radio'),value=$('input[name="'+radio+'"]:checked').val();e.text(e.dataAttr(value,e.text()));$('input[name="'+radio+'"]').on('change',function(){var value=$('input[name="'+radio+'"]:checked').val();$('[data-bind-radio="'+radio+'"]').each(function(){var e=$(this);e.text(e.dataAttr(value,e.text()));});});});// Set href attribute
//
$('[data-bind-href]').each(function(){var e=$(this),radio=e.data('bind-href'),value=$('input[name="'+radio+'"]:checked').val();e.attr('href',e.dataAttr(value));$('input[name="'+radio+'"]').on('change',function(){var value=$('input[name="'+radio+'"]:checked').val();$('[data-bind-href="'+radio+'"]').each(function(){var e=$(this);e.attr('href',e.dataAttr(value));});});});};}(jQuery);/***/},/* 70 */ /***/function(module,exports){/**
 *
 */+function($){page.initDrawer=function(){$(document).on('click','.drawer-toggler, .drawer-close, .backdrop-drawer',function(){$('body').toggleClass('drawer-open');});};}(jQuery);/***/},/* 71 */ /***/function(module,exports){/**
 *
 */+function($){page.initFont=function(){var fonts=[];$('[data-font]').each(function(){var tag=$(this),font=tag.data('font');part=font.split(':');fonts.push(font);tag.css({'font-family':part[0],'font-weight':part[1]});});if(fonts.length>0){$("head").append("<link href='https://fonts.googleapis.com/css?family="+fonts.join('|')+"' rel='stylesheet'>");}};}(jQuery);/***/},/* 72 */ /***/function(module,exports){/**
 * All the form related methods.
 */+function($){page.initForm=function(){/**
     * Add/remove .focus to .input-group
     */$(document).on('focusin','.input-group',function(){$(this).addClass('focus');});$(document).on('focusout','.input-group',function(){$(this).removeClass('focus');});// Switch
//
$(document).on('click','.switch',function(){var input=$(this).children('.switch-input').not(':disabled');input.prop('checked',!input.prop('checked')).trigger("change");});// Upload
//
$(document).on('click','.file-browser',function(){var browser=$(this);var file=browser.closest('.file-group').find('[type="file"]');if(browser.hasClass('form-control')){setTimeout(function(){file.trigger('click');},300);}else{file.trigger('click');}});// Event to change file name after file selection
$(document).on('change','.file-group [type="file"]',function(){var input=$(this);var filename=input.val().split('\\').pop();input.closest('.file-group').find('.file-value').val(filename).text(filename).focus();});};}(jQuery);/***/},/* 73 */ /***/function(module,exports){/**
 * Send a form details to the sendmail.php file.
 */+function($){page.initMailer=function(){var validEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;$('[data-form="mailer"]').each(function(){var form=$(this),email=form.find('[name="email"]'),message=form.find('[name="message"]'),onSuccess=form.dataAttr('on-success',null),onError=form.dataAttr('on-error',null);form.on('submit',function(){form.children('.alert-danger').remove();form.find('[required]').each(function(){if($(this).val().length<1){$(this).addClass('is-invalid');return false;}else{$(this).removeClass('is-invalid');}});form.find('[type="email"]').each(function(){if(!validEmail.test($(this).val())){$(this).addClass('is-invalid');return false;}else{$(this).removeClass('is-invalid');}});if(email.length){if(email.val().length<1||!validEmail.test(email.val())){email.addClass('is-invalid');return false;}}if(message.length){if(message.val().length<1){message.addClass('is-invalid');return false;}}$.ajax({type:"POST",url:form.attr('action'),data:form.serializeArray()}).done(function(data){var response=$.parseJSON(data);if('success'==response.status){form.find('.alert-success').fadeIn(1000);form.find(':input').val('');if(onSuccess!==null){window[onSuccess]();}}else{form.prepend('<div class="alert alert-danger">'+response.message+'</div>');console.log(response.reason);if(onError!==null){window[onError](response.reason);}}});return false;});form.find('[required], [type="email"]').each(function(){$(this).on('focus',function(){$(this).removeClass('is-invalid');});});email.on('focus',function(){$(this).removeClass('is-invalid');});message.on('focus',function(){$(this).removeClass('is-invalid');});});};}(jQuery);/***/},/* 74 */ /***/function(module,exports){/**
 * Display google map.
 */+function($){page.initMap=function(){$('[data-provide~="map"]').each(function(){var tag=$(this),setting={lat:'',lng:'',zoom:13,markerLat:'',markerLng:'',markerIcon:'',markers:'',style:'',removeControls:false};setting=$.extend(setting,page.getDataOptions(tag));var map=new google.maps.Map(tag[0],{center:{lat:Number(setting.lat),lng:Number(setting.lng)},zoom:Number(setting.zoom),disableDefaultUI:setting.removeControls});// Multiple locations
//
if(setting.markers!=''){var locations=JSON.parse("["+setting.markers.replace(/'/g,'"')+"]"),infowindow=new google.maps.InfoWindow(),marker,i;for(i=0;i<locations.length;i++){var markerIcon=setting.markerIcon;if(locations[i].length>3&&locations[i][3]!=''){markerIcon=locations[i][3];}marker=new google.maps.Marker({position:{lat:Number(locations[i][0]),lng:Number(locations[i][1])},map:map,animation:google.maps.Animation.DROP,icon:markerIcon});if(locations[i].length>2&&locations[i][2]!=''){google.maps.event.addListener(marker,'click',function(marker,i){return function(){infowindow.setContent(locations[i][2]);infowindow.open(map,marker);};}(marker,i));}}}// Single location
//
else{var marker=new google.maps.Marker({position:{lat:Number(setting.markerLat),lng:Number(setting.markerLng)},map:map,animation:google.maps.Animation.DROP,icon:setting.markerIcon});if(tag.is('[data-info]')){var infowindow=new google.maps.InfoWindow({content:tag.dataAttr('info','')});marker.addListener('click',function(){infowindow.open(map,marker);});}}switch(setting.style){case'light':map.set('styles',[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]);break;case'dark':map.set('styles',[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]);break;default:if(Array.isArray(setting.style)){map.set('styles',setting.style);}}});};}(jQuery);/***/},/* 75 */ /***/function(module,exports){/**
 * All the modal related methods.
 */+function($){page.initModal=function(){var body=page.body;/**
     * Autoshow
     */$('.modal[data-autoshow]').each(function(){var modal=$(this),delay=parseInt(modal.dataAttr('autoshow'));setTimeout(function(){modal.modal('show');},delay);});/**
      * Exit
      */$('.modal[data-exitshow]').each(function(){var modal=$(this),delay=parseInt(modal.dataAttr('delay',0)),target=modal.dataAttr('exitshow');if($(target).length){$(document).one('mouseleave',target,function(){setTimeout(function(){modal.modal('show');},delay);});}});};}(jQuery);/***/},/* 76 */ /***/function(module,exports){/**
 * All the navbar related methods.
 */+function($){page.initNavbar=function(){/**
     * Toggle navbar
     */$(document).on('click','.navbar-toggler',function(){page.navbarToggle();});/**
     * Tapping on the backdrop will close the navbar
     */$(document).on('click','.backdrop-navbar',function(){page.navbarClose();});/**
     * Toggle menu open on small screen devices
     */$(document).on('click','.navbar-open .nav-navbar > .nav-item > .nav-link',function(){$(this).closest('.nav-item').siblings('.nav-item').find('> .nav:visible').slideUp(333,'linear');$(this).next('.nav').slideToggle(333,'linear');});};page.navbarToggle=function(){var body=page.body,navbar=page.navbar;body.toggleClass('navbar-open');if(body.hasClass('navbar-open')){navbar.prepend('<div class="backdrop backdrop-navbar"></div>');}};page.navbarClose=function(){page.body.removeClass('navbar-open');$('.backdrop-navbar').remove();};}(jQuery);/***/},/* 77 */ /***/function(module,exports){/**
 * All the popup related methods.
 */+function($){page.initOffcanvas=function(){/**
     * Toggle
     */$(document).on('click','[data-toggle="offcanvas"]',function(){var target=$(this).data('target'),offcanvas=$(target);if(target!==undefined&&offcanvas.length){if(offcanvas.hasClass('show')){$('.backdrop-offcanvas').remove();offcanvas.removeClass('show');}else{offcanvas.before('<div class="backdrop backdrop-offcanvas"></div>');offcanvas.addClass('show');setTimeout(function(){offcanvas.find('input:text:visible:first').focus();},300);}}});/**
     * Dismiss
     */$(document).on('click','.offcanvas [data-dismiss], .backdrop-offcanvas',function(){$('.offcanvas.show').removeClass('show');$('.backdrop-offcanvas').remove();});/**
     * Esc key
     */$(document).on('keyup',function(e){if($('.offcanvas.show').length&&e.keyCode==27){// esc keycode
$('.offcanvas.show').removeClass('show');$('.backdrop-offcanvas').remove();}});};}(jQuery);/***/},/* 78 */ /***/function(module,exports){/**
 * All the popup related methods.
 */+function($){page.initPopup=function(){var body=page.body;/**
     * Toggle
     */$(document).on('click','[data-toggle="popup"]',function(){var target=$(this).data('target'),popup=$(target);if(target!==undefined&&popup.length){if(popup.hasClass('show')){popup.removeClass('show');}else{popupShow(popup);}}});/**
     * Dismiss
     */$(document).on('click','.popup [data-dismiss]',function(){$(this).closest('.popup').removeClass('show');});/**
     * Autoshow
     */$('.popup[data-autoshow]').each(function(){var popup=$(this),delay=parseInt(popup.dataAttr('autoshow'));setTimeout(function(){popupShow(popup);},delay);});/**
     * Exit
     */$('.popup[data-exitshow]').each(function(){var popup=$(this),delay=parseInt(popup.dataAttr('delay',0)),target=popup.dataAttr('exitshow');if($(target).length){$(document).one('mouseleave',target,function(){setTimeout(function(){popupShow(popup);},delay);});}});/**
     * Show
     */var popupShow=function popupShow(popup){var autohide=parseInt(popup.dataAttr('autohide',0)),once_key=popup.dataAttr('once','');// Check if it was a once popup
if(once_key!=''){if(localStorage.getItem(once_key)=='displayed'){return;}var once_btn=popup.find('[data-once-button="true"]');if(once_btn.length){once_btn.on('click',function(){localStorage.setItem(once_key,'displayed');});}else{localStorage.setItem(once_key,'displayed');}}popup.addClass('show');setTimeout(function(){popup.find('input:text:visible:first').focus();},300);if(autohide>0){setTimeout(function(){popup.removeClass('show');},autohide);}};};}(jQuery);/***/},/* 79 */ /***/function(module,exports){/**
 *
 */+function($){page.initRecaptcha=function(){$('[data-provide~="recaptcha"]').each(function(){var options={sitekey:page.defaults.reCaptchaSiteKey};options=$.extend(options,page.getDataOptions($(this)));if(options.enable){options.callback=function(){$(options.enable).removeAttr('disabled');};options['expired-callback']=function(){$(options.enable).attr('disabled','true');};$(this).closest('form').on('submit',function(e){if($(this).find(options.enable).attr('disabled')==='true'){e.preventDefault();e.stopPropagation();}});}grecaptcha.render($(this)[0],options);});};window.recaptchaLoadCallback=function(){page.initRecaptcha();};}(jQuery);/***/},/* 80 */ /***/function(module,exports){/**
 * All methods related to the page scroll and link click.
 */+function($){var body=page.body,footer=page.footer,hasHeader=page.header.length,navbarHeight=page.navbar.outerHeight(),headerHeight=page.header.innerHeight(),scrollOffsetTop=0,prevOffsetTop=0;page.initScroll=function(){if($('[data-navbar="fixed"], [data-navbar="sticky"], [data-navbar="smart"]').length){scrollOffsetTop=navbarHeight;}$(document).on('click',"a[href='#']",function(){return false;});// Back to top
//
$(document).on('click','.scroll-top',function(){smoothlyScrollTo(0);return false;});// Smooth scroll for anchors
//
$(document).on('click',"a[href^='#']",function(){if($(this).attr('href').length<2){return;}if($(this)[0].hasAttribute('data-toggle')){return;}var target=$($(this).attr('href'));if(target.length){var targetTop=target.offset().top,windowTop=$(window).scrollTop();// We don't need offsetTop for scroll down with smart navbar
//
if(targetTop>windowTop&&$('.navbar[data-navbar="smart"]').length){smoothlyScrollTo(targetTop);}else{smoothlyScrollTo(targetTop-scrollOffsetTop);}if(body.hasClass('navbar-open')){page.navbarClose();}return false;}});// Smoothscroll to anchor in page load
//
var hash=location.hash.replace('#','');if(hash!=''){var el=$("#"+hash);if(el.length>0){smoothlyScrollTo(el.offset().top-scrollOffsetTop);}}// Actions which are related to the page scroll position
windowScrollActions();$(window).on('scroll',function(){windowScrollActions();});// In page navigation
//
if($('.nav-page').length){var tooltip_pos='left',tooltip_offset='0, 12';if($('.nav-page.nav-page-left').length){tooltip_pos='right';tooltip_offset='0, 12';}var spy_offset=parseInt($('.nav-page').dataAttr('spy-offset',200));// Enable tooltip
$('.nav-page .nav-link').tooltip({container:'body',placement:tooltip_pos,offset:tooltip_offset,trigger:'hover'});// Enable Scroll Spy
$('body').scrollspy({target:'.nav-page',offset:spy_offset});}// Sticky sidebar width
//
$('.sidebar-sticky').each(function(){var tag=$(this),width=tag.closest('div').width();tag.css('width',width);if(body.width()/width<1.8){tag.addClass('is-mobile-wide');}});};var windowScrollActions=function windowScrollActions(){var window_top=$(window).scrollTop();// .body-scrolled
//
if(window_top>1){body.addClass('body-scrolled');}else{body.removeClass('body-scrolled');}// .navbar-scrolled
//
if(window_top>navbarHeight){body.addClass('navbar-scrolled');}else{body.removeClass('navbar-scrolled');}// .header-scrolled
//
if(window_top>headerHeight-navbarHeight-1){body.addClass('header-scrolled');}else{body.removeClass('header-scrolled');}// Sticky elements
//
$('[data-sticky="true"]').each(function(){var tag=$(this),top=tag.offset().top;if(!tag.hasDataAttr('original-top')){tag.attr('data-original-top',top);}var stick_start=tag.dataAttr('original-top'),stick_end=footer.offset().top-tag.outerHeight();if(window_top>stick_start){// && window_top <= stick_end) {
tag.addClass('stick');}else{tag.removeClass('stick');}});// Smart navbar
//
$('[data-navbar="smart"]').each(function(){var tag=$(this);//toggleFixClass(tag);
if(window_top<prevOffsetTop){toggleStickClass(tag);}else{tag.removeClass('stick');}});// Sticky navbar
//
$('[data-navbar="sticky"]').each(function(){var tag=$(this);toggleStickClass(tag);});// Fixed navbar
//
$('[data-navbar="fixed"]').each(function(){var tag=$(this);if(body.hasClass('body-scrolled')){tag.addClass('stick');}else{tag.removeClass('stick');}});// Sticky sidebar
//
$('.sidebar-sticky').each(function(){var tag=$(this);toggleStickClass(tag);});// Fadeout effect
//
$('.header.fadeout').css('opacity',1-window_top-200/window.innerHeight);prevOffsetTop=window_top;};var smoothlyScrollTo=function smoothlyScrollTo(pos){$('html, body').animate({scrollTop:pos},600);};var toggleFixClass=function toggleFixClass(tag){if(body.hasClass('navbar-scrolled')){tag.addClass('fix');}else{tag.removeClass('fix');}};var toggleStickClass=function toggleStickClass(tag){var requiredClass='navbar-scrolled';if(hasHeader){requiredClass='header-scrolled';}if(body.hasClass(requiredClass)){tag.addClass('stick');}else{tag.removeClass('stick');}};}(jQuery);/***/},/* 81 */ /***/function(module,exports){/**
 *
 */+function($){page.initSection=function(){};}(jQuery);/***/},/* 82 */ /***/function(module,exports){/**
 *
 */+function($){page.initSidebar=function(){var body=page.body;$(document).on('click','.sidebar-toggler, .sidebar-close, .backdrop-sidebar',function(){body.toggleClass('sidebar-open');if(body.hasClass('sidebar-open')){body.prepend('<div class="backdrop backdrop-sidebar"></div>');}else{$('.backdrop-sidebar').remove();}});// Sidebar nav
//
var navItemShow=$('.nav-sidebar .nav-item.show');navItemShow.find('> .nav-link .nav-angle').addClass('rotate');navItemShow.find('> .nav').css('display','block');navItemShow.removeClass('show');var navSidebarIsAccordion=false;if('true'==$('.nav-sidebar').dataAttr('accordion','false')){navSidebarIsAccordion=true;}$(document).on('click','.nav-sidebar > .nav-item > .nav-link',function(){var link=$(this);link.next('.nav').slideToggle();if(navSidebarIsAccordion){link.closest('.nav-item').siblings('.nav-item').children('.nav:visible').slideUp().prev('.nav-link').children('.nav-angle').removeClass('rotate');}link.children('.nav-angle').toggleClass('rotate');});// Perfect scrollbar
//
$('.sidebar-body').each(function(e){var ps=new PerfectScrollbar($(this)[0],{wheelSpeed:0.4,minScrollbarLength:20});});};}(jQuery);/***/},/* 83 */ /***/function(module,exports){/**
 * All the video related methods.
 */+function($){page.initVideo=function(){// Video-wrapper
//
$(document).on('click','.video-wrapper .btn',function(){var wrapper=$(this).closest('.video-wrapper');wrapper.addClass('reveal');if(wrapper.find('video').length)wrapper.find('video').get(0).play();if(wrapper.find('iframe').length){var iframe=wrapper.find('iframe');var src=iframe.attr('src');if(src.indexOf('?')>0)iframe.get(0).src+="&autoplay=1";else iframe.get(0).src+="?autoplay=1";}});// Object-fit polyfill
//
objectFitPolyfill($('.bg-video'));};}(jQuery);/***/},/* 84 */ /***/function(module,exports){/**
 * Utility functions to be used in the whole application.
 */+function($){// Convert data-attributes options to Javascript object
//
page.getDataOptions=function(el,castList){var options={};$.each($(el).data(),function(key,value){key=page.dataToOption(key);// Escape data-provide
if(key=='provide'){return;}if(castList!=undefined){var type=castList[key];switch(type){case'bool':value=Boolean(value);break;case'num':value=Number(value);break;case'array':value=value.split(',');break;default:}}options[key]=value;});return options;};// Get target of an action from element.
//
// It can be 'data-target' or 'href' attribute.
// We support 'next' and 'prev' values to target next or previous element. In this case, we return jQuery element.
//
page.getTarget=function(e){var target;if(e.hasDataAttr('target')){target=e.data('target');}else{target=e.attr('href');}if(target=='next'){target=$(e).next();}else if(target=='prev'){target=$(e).prev();}if(target==undefined){return false;}return target;};// Get URL of an action from element.
//
// It can be 'data-url' or 'href' attribute.
//
page.getURL=function(e){var url;if(e.hasDataAttr('url')){url=e.data('url');}else{url=e.attr('href');}return url;};// Convert fooBarBaz to foo-bar-baz
//
page.optionToData=function(name){return name.replace(/([A-Z])/g,"-$1").toLowerCase();};// Convert foo-bar-baz to fooBarBaz
//
page.dataToOption=function(name){return name.replace(/-([a-z])/g,function(x){return x[1].toUpperCase();});};}(jQuery);/***/}/******/]);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/theme.scss":
/*!***********************************!*\
  !*** ./resources/sass/theme.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./resources/js/page.js ./resources/sass/app.scss ./resources/sass/theme.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/gn/Documentos/cms-app/resources/js/page.js */"./resources/js/page.js");
__webpack_require__(/*! /home/gn/Documentos/cms-app/resources/sass/app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! /home/gn/Documentos/cms-app/resources/sass/theme.scss */"./resources/sass/theme.scss");


/***/ })

/******/ });