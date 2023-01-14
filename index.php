<?php
require('./api/Lang_info.php');
require('./api/Youdao_fanyi.php');
$translate = new Youdao_fanyi();
$param = $translate->get_param();
$from = $param['from'];
$to = $param['to'];
$text = $param['text'];
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APEE · 翻译工具</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <style>
        textarea {
            font-size: 20px !important;
        }
    </style>
</head>

<body>
    <div class="container py-4 py-lg-5">
        <div class="mb-4 d-flex align-items-center">
            <h3 class="me-auto mb-0 user-select-none" role="button" onclick="location.href='./'">APEE · 翻译工具</h3>
            <button class="btn btn-success text-nowrap me-3 translate">翻译</button>
            <select class="form-select langGroup w-auto">
                <?php
                /** 载入下拉菜单 HTML */
                function get_lang_group()
                {
                    global $param;
                    foreach (Lang_info::$group as $item) {
                        $from = Lang_info::$language[$item[0]];
                        $to = Lang_info::$language[$item[1]];
                        $text = $item[0] == 0 ? '自动识别语言类型' : "$from - 翻译为 - $to";
                        $selected = $param['from'] == $item[0] && $param['to'] == $item[1] ? 'selected' : '';
                        echo "<option $selected>$text</option>";
                    }
                }
                get_lang_group()
                ?>
            </select>
        </div>
        <div class="form-floating mb-4">
            <textarea class="form-control input-text" placeholder="待翻译内容" style="height: 200px" <?php echo $text ? '' : 'autofocus' ?>><?php echo $text ?></textarea>
            <label>待翻译内容</label>
        </div>

        <div class="form-floating mb-4">
            <textarea class="form-control input-result" placeholder="翻译结果" style="height: 200px"><?php echo $translate->get_result_text($text, $from, $to) ?></textarea>
            <label>翻译结果</label>
        </div>
    </div>
    <script src="./dist/bundle.js"></script>
</body>

</html>