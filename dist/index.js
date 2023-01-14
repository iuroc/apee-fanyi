"use strict";
exports.__esModule = true;
var ajax_1 = require("./ajax");
var querystring = require("querystring");
/** 翻译按钮 */
var buttonTrans = document.querySelector('.translate');
/** 待翻译内容输入框 */
var inputText = document.querySelector('.input-text');
/** 翻译结果输入框 */
var inputResult = document.querySelector('.input-result');
var langGroup = document.querySelector('.langGroup');
buttonTrans.onclick = function () {
    /** 待翻译文本 */
    var text = inputText.value;
    /** 语言组合 */
    var langGroupValue = langGroup.value.split('|');
    /** 来源语言 */
    var from = langGroupValue[0];
    /** 目标语言 */
    var to = langGroupValue[1];
    if (!text) {
        return;
    }
    buttonTrans.disabled = true;
    /** 按钮原来的内容 */
    var buttText = buttonTrans.innerHTML;
    buttonTrans.innerHTML = '正在翻译';
    (0, ajax_1.post)('api/translate.php', {
        from: from,
        to: to,
        text: text,
        type: 'text'
    }, function (data) {
        buttonTrans.disabled = false;
        buttonTrans.innerHTML = buttText;
        if (data.code == 200) {
            inputResult.value = data.result;
            history.replaceState(null, '', '?' + querystring.encode({
                from: from,
                to: to,
                text: text
            }));
            return;
        }
        alert(data.msg);
    });
};