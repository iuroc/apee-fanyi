<?php

header('Content-Type: application/json');
error_reporting(0);

// 获取参数
$from = defaultGetData('from', 'AUTO');
$to = defaultGetData('to', 'AUTO');
$text = defaultGetData('text', 'Hello World');
$text_encoded = urlencode($text);

// 发送请求 获取翻译结果
$cookie_id = rand(0, 9) . "@" . rand(0, 9) . "." . rand(0, 9) . "." . rand(0, 9) . "." . rand(0, 9);
$salt = time() . '0000';
$sign = md5("fanyideskweb{$text}{$salt}Ygy_4c=r#e#4EX^NUGUc5");
$lts = time() . '000';
$options = array(
    'http' => array(
        'method' => 'POST',
        'header' => "Content-type: application/x-www-form-urlencoded\nUser-Agent: oyp\nReferer: oyp\nCookie: OUTFOX_SEARCH_USER_ID=$cookie_id;",
        'content' => "i=$text_encoded&from=$from&to=$to&smartresult=dict&client=fanyideskweb&salt=$salt&sign=$sign&doctype=json&version=2.1&keyfrom=fanyi.web&action=FY_BY_REALTlME&lts=$lts",
        'timeout' => 900
    ),
    "ssl" => array(
        "verify_peer" => false,
        "verify_peer_name" => false,
    )
);
print_r($options);
$context = stream_context_create($options);
$result = file_get_contents('https://fanyi.youdao.com/translate_o', false, $context);
echo $result;

// 获取参数
function defaultGetData($key, $value)
{
    if (array_key_exists($key, $_GET)) {
        return addslashes($_GET[$key] == null ? $value : $_GET[$key]);
    } else {
        return addslashes($value);
    }
}
