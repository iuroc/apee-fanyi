!function r(o,u,c){function i(n,e){if(!u[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}t=u[n]={exports:{}},o[n][0].call(t.exports,function(e){return i(o[n][1][e]||e)},t,t.exports,r,o,u,c)}return u[n].exports}for(var s="function"==typeof require&&require,e=0;e<c.length;e++)i(c[e]);return i}({1:[function(e,n,t){"use strict";n.exports=function(e,n,t,r){t=t||"=";var o={};if("string"!=typeof e||0===e.length)return o;var u=/\+/g,n=(e=e.split(n=n||"&"),1e3),c=(r&&"number"==typeof r.maxKeys&&(n=r.maxKeys),e.length);0<n&&n<c&&(c=n);for(var i=0;i<c;++i){var s,a=e[i].replace(u,"%20"),p=a.indexOf(t),p=0<=p?(s=a.substr(0,p),a.substr(p+1)):(s=a,""),a=decodeURIComponent(s),p=decodeURIComponent(p);Object.prototype.hasOwnProperty.call(o,a)?f(o[a])?o[a].push(p):o[a]=[o[a],p]:o[a]=p}return o};var f=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],2:[function(e,n,t){"use strict";function u(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}}n.exports=function(t,r,o,e){return r=r||"&",o=o||"=","object"==typeof(t=null===t?void 0:t)?i(s(t),function(e){var n=encodeURIComponent(u(e))+o;return c(t[e])?i(t[e],function(e){return n+encodeURIComponent(u(e))}).join(r):n+encodeURIComponent(u(t[e]))}).join(r):e?encodeURIComponent(u(e))+o+encodeURIComponent(u(t)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,n){if(e.map)return e.map(n);for(var t=[],r=0;r<e.length;r++)t.push(n(e[r],r));return t}var s=Object.keys||function(e){var n,t=[];for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],3:[function(e,n,t){"use strict";t.decode=t.parse=e("./decode"),t.encode=t.stringify=e("./encode")},{"./decode":1,"./encode":2}],4:[function(e,n,t){"use strict";t.__esModule=!0,(0,e("./post").post)("api/get_lang_info.php",function(e){var r,o;200==e.code&&(r=e.lang,e=e.group,o="",e.forEach(function(e){var n=r[e[0]],t=r[e[1]],e=0==e[0]?"自动识别语言类型":"".concat(n," 翻译为 ").concat(t);o+="<option>".concat(e,"</option>")}),e=o,document.querySelector(".langGroup").innerHTML=e)})},{"./post":5}],5:[function(e,n,t){"use strict";t.__esModule=!0,t.post=void 0;var o=e("querystring");function r(e,n,t){var r=new XMLHttpRequest;r.open("GET",e),r.send(o.encode(n)),r.onreadystatechange=function(){4==r.readyState&&200==r.status&&t(JSON.parse(r.responseText))}}t.post=function(e,n,t){"function"==typeof n?r(e,null,n):r(e,n,t)}},{querystring:3}]},{},[4]);