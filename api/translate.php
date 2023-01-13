<?php

/**
 * 有道翻译接口转换
 * @author 欧阳鹏
 * @since 2023-01-13
 */
class Translate
{
    /** 来源语言代码 */
    public string $from;
    /** 目标语言代码 */
    public string $to;
    /** 待翻译的文本 */
    public string $text;
    public function __construct()
    {
    }
    
}

$translate = new Translate();
