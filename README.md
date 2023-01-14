# APEE 翻译

> 在线翻译网站，支持多种语言互译，有道翻译 API 提供服务

## 项目信息

- 作者：欧阳鹏
- 开发日期：2023 年 1 月 13 日
- 官网：https://apee.top

## API 设计规范

### 获取翻译结果

- 请求地址：`/api/translate.php`
- 请求方式：GET/POST
- 请求参数
  - `text`：待翻译内容，纯文本
  - `from`：来源语言的项目代码，详见[语言列表](#语言列表)
  - `to`：目标语言的项目代码，详见[语言列表](#语言列表)
  - `type`：返回结果的类型
    - `list`：默认，数组
    - `text`：纯文本
- 响应参数
  - `code`：状态码，200 表示成功，0 表示失败
  - `msg`：提示信息
  - `result`：翻译结果，`type` 为 `list` 时，是一个二维对象数组，每项包含 `text` 属性，表示翻译结果。可增加自定义属性
    ```js
    [
      [
        {"text": "这里是第一段第一句", "src": "也可以增加属性哦"},
        {"text": "这里是第一段第二句"},
      ],
      [
        {"text": "这里是第二段第一句"},
        {"text": "这里是第二段第二句"},
      ]
    ]
    ```

### 获取语言列表信息

- 请求地址：`/api/get_lang_info.php`
- 请求方式：GET
- 响应参数
  - `code`：状态码，200 表示成功，0 表示失败
  - `msg`：提示信息
  - `lang`：语言列表，下标即为语言代码
    ```js
    ["自动识别", "中文", "英文", ...]
    ```
  - `group`：翻译组合，二维数组，数组项为 `[from, to]`
    ```js
    [[0, 0], [1, 2], [2, 1], ...]
    ```

## 前端设计

- 访问 `f.apee.top` 进入翻译工具
- 自动聚焦待翻译内容输入框
- 可直接向前端页面 URL 传参，自动执行翻译动作

## 开发教程

```php
<?php

require('./Lang_info.php');  # 引入语言列表信息
require('./Youdao_fanyi.php');  # 引入翻译工具
$translate = new Youdao_fanyi();  # 实例化对象
$result = $translate->start();  # 启动翻译程序，翻译结果保存到 $result 变量
```

## 语言列表

- 项目代码：本项目遵循的语言代码规范
- 有道代码：有道翻译定义的语言代码

| 语言类型 | 项目代码 | 有道代码 |
| -------- | -------- | -------- |
| 自动识别 | 0        | AUTO     |
| 中文     | 1        | zh-CHS   |
| 英语     | 2        | en       |
| 韩语     | 3        | ko       |
| 日语     | 4        | ja       |
| 法语     | 5        | fr       |
| 俄语     | 6        | ru       |
| 西班牙语 | 7        | es       |
| 葡萄牙语 | 8        | pt       |
| 印地语   | 9        | hi       |
| 阿拉伯语 | 10       | ar       |
| 丹麦语   | 11       | da       |
| 德语     | 12       | de       |
| 希腊语   | 13       | el       |
| 芬兰语   | 14       | fi       |
| 意大利语 | 15       | it       |
| 马来语   | 16       | ms       |
| 越南语   | 17       | vi       |
| 印尼语   | 18       | id       |
| 荷兰语   | 19       | nl       |
| 泰语     | 20       | th       |

## 有道翻译语言组合

| 语言组合  | 来源语言    | 目标语言    |
| --------- | ----------- | ----------- |
| AUTO      | 自动检测 0  | 自动检测 0  |
| zh-CHS2en | 中文 1      | 英语 2      |
| en2zh-CHS | 英语 2      | 中文 1      |
| zh-CHS2ja | 中文 1      | 日语 4      |
| ja2zh-CHS | 日语 4      | 中文 1      |
| zh-CHS2ko | 中文 1      | 韩语 3      |
| ko2zh-CHS | 韩语 3      | 中文 1      |
| zh-CHS2fr | 中文 1      | 法语 5      |
| fr2zh-CHS | 法语 5      | 中文 1      |
| zh-CHS2de | 中文 1      | 德语 12     |
| de2zh-CHS | 德语 12     | 中文 1      |
| zh-CHS2ru | 中文 1      | 俄语 6      |
| ru2zh-CHS | 俄语 6      | 中文 1      |
| zh-CHS2es | 中文 1      | 西班牙语 7  |
| es2zh-CHS | 西班牙语 7  | 中文 1      |
| zh-CHS2pt | 中文 1      | 葡萄牙语 8  |
| pt2zh-CHS | 葡萄牙语 8  | 中文 1      |
| zh-CHS2it | 中文 1      | 意大利语 15 |
| it2zh-CHS | 意大利语 15 | 中文 1      |
| zh-CHS2vi | 中文 1      | 越南语 17   |
| vi2zh-CHS | 越南语 17   | 中文 1      |
| zh-CHS2id | 中文 1      | 印尼语 18   |
| id2zh-CHS | 印尼语 18   | 中文 1      |
| zh-CHS2ar | 中文 1      | 阿拉伯语 10 |
| ar2zh-CHS | 阿拉伯语 10 | 中文 1      |
| zh-CHS2nl | 中文 1      | 荷兰语 19   |
| nl2zh-CHS | 荷兰语 19   | 中文 1      |
| zh-CHS2th | 中文 1      | 泰语 20     |