<?php

require('./Youdao_fanyi.php');
header('Content-Type: application/json');
$translate = new Translate();
$result = $translate->trans();
if ($result) {
    echo json_encode([
        'code' => 200,
        'msg' => '翻译成功',
        'result' => $result
    ]);
} else {
    echo json_encode([
        'code' => 400,
        'msg' => '翻译失败',
        'result' => $result
    ]);
}
