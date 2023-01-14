<?php
require('./Lang_info.php');
require('./Youdao_fanyi.php');
header('Content-Type: application/json');
$translate = new Youdao_fanyi();
$result = $translate->start();
if ($result) {
    echo json_encode([
        'code' => 200,
        'msg' => '翻译成功',
        'result' => $result
    ]);
} else {
    echo json_encode([
        'code' => 0,
        'msg' => '翻译失败',
        'result' => $result
    ]);
}
