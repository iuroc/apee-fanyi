<?php

require('./lang_info.php');
/**
 * 有道翻译接口转换为项目接口
 * @author 欧阳鹏
 * @since 2023-01-13
 */
class Translate implements ITranslate
{
    /** 来源语言代码 */
    public int $from;
    /** 目标语言代码 */
    public int $to;
    /** 待翻译的文本 */
    public string $text;
    public function __construct()
    {
        $this->from = (int)($_POST['from'] ?? 0);
        $this->to = (int)($_POST['to'] ?? 0);
        $this->text = $_POST['text'] ?? '你好世界';
    }
    public function get_result($from, $to, $text): string
    {
        $value_salt = time() . '0000';
        $value_sign = md5("fanyideskweb{$text}{$value_salt}Ygy_4c=r#e#4EX^NUGUc5");
        $value_lts = time() . '000';
        $cookie_id = rand(0, 9) . "@" . rand(0, 9) . "." . rand(0, 9) . "." . rand(0, 9) . "." . rand(0, 9);
        $curl = curl_init('https://fanyi.youdao.com/translate_o');
        $post_data = [
            'i' => $text,
            'from' => Lang_info::$youdao_lang[$from],
            'to' => Lang_info::$youdao_lang[$to],
            'smartresult' => 'dict',
            'client' => 'fanyideskweb',
            'salt' => $value_salt,
            'sign' => $value_sign,
            'doctype' => 'json',
            'version' => '2.1',
            'keyfrom' => 'fanyi.web',
            'action' => 'FY_BY_REALTlME',
            'lts' => $value_lts
        ];
        // 设置 POST 请求方式
        curl_setopt($curl, CURLOPT_POST, true);
        // 设置返回字符串
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        // 设置 Referer 请求头
        curl_setopt($curl, CURLOPT_REFERER, 'oyp');
        // 设置 User-Agent 请求头
        curl_setopt($curl, CURLOPT_USERAGENT, 'oyp');
        // 设置 Cookie
        curl_setopt($curl, CURLOPT_COOKIE, 'OUTFOX_SEARCH_USER_ID=' . $cookie_id);
        // 设置 POST 参数
        curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
        // 发送请求
        $result = curl_exec($curl);
        return $result;
    }
}

$translate = new Translate();
$translate->get_result(0, 0, 'Hello world');


/** 翻译 API */
interface ITranslate
{
    public function __construct();
    /**
     * 获取有道翻译结果
     * @param int $from 来源语言代码
     * @param int $to 目标语言代码
     * @param string $text 待翻译的文本
     */
    public function get_result($from, $to, $text): string;
}
