<?php

require('./Lang_info.php');
/**
 * 获取语言列表信息
 */
header('Content-Type: application/json');
echo json_encode([
    'code' => 200,
    'msg' => '获取成功',
    'lang' => Lang_info::$language,
    'group' => Lang_info::$group
], JSON_UNESCAPED_UNICODE);
