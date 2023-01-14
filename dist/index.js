"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
var jQuery = require("jquery");
console.log(jQuery);
loadLangGroup();
/**
 * 载入翻译组合
 */
function loadLangGroup() {
    (0, jquery_1.post)('api/get_lang_info.php', function (data) {
        if (data.code == 200) {
            var optionHtml = makeOptionHtml(data.lang, data.group);
            return;
        }
    });
}
/**
 * 生成语言翻译组合列表 HTML
 * @param lang 语言列表
 * @param group 语言翻译组合
 * @returns 生成的 HTML
 */
function makeOptionHtml(lang, group) {
    var html = '';
    group.forEach(function (item) {
        var from = lang[item[0]];
        var to = lang[item[1]];
        console.log(from, to);
    });
    return '';
}
