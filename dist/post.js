"use strict";
exports.__esModule = true;
exports.post = void 0;
var querystring = require("querystring");
function post(url, a, b) {
    if (typeof a == 'function') {
        sendPost(url, null, a);
    }
    else {
        sendPost(url, a, b);
    }
}
exports.post = post;
function sendPost(url, data, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(querystring.encode(data));
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(JSON.parse(xhr.responseText));
        }
    };
}
