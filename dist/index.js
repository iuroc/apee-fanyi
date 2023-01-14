"use strict";
exports.__esModule = true;
var post_1 = require("./post");
loadLangGroup();
/**
 * 载入翻译组合
 */
function loadLangGroup() {
    (0, post_1.post)('api/get_lang_info.php', function (data) {
        if (data.code == 200) {
            /** 下拉菜单 HTML */
            var optionsHtml = makeOptionHtml(data.lang, data.group);
            var eleLangGroup = document.querySelector('.langGroup');
            eleLangGroup.innerHTML = optionsHtml;
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
        var fromStr = lang[item[0]];
        var toStr = lang[item[1]];
        var text = item[0] == 0 ? '自动识别语言类型' : "".concat(fromStr, " \u7FFB\u8BD1\u4E3A ").concat(toStr);
        html += "<option>".concat(text, "</option>");
    });
    return html;
}
