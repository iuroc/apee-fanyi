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
    <link rel="apple-touch-icon" sizes="180x180" href="./icon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./icon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./icon/favicon-16x16.png">
    <link rel="manifest" href="./icon/site.webmanifest">

    <style>
        textarea {
            font-size: 20px !important;
            height: 300px !important;
        }

        * {
            font-family: '仓耳渔阳体';
        }

        @media screen and (max-width: 992px) {
            textarea {
                height: 200px !important;
            }
        }
    </style>
</head>

<body>
    <div class="container py-4 py-lg-5">
        <div class="row">
            <div class="mb-4 col-xxl-9 col-xl-8 col-lg-7 col-md-6">
                <div class="d-flex align-items-center">
                    <h3 class="mb-0 user-select-none" role="button" onclick="location.href='./'">APEE · 翻译工具</h3>
                </div>
            </div>
            <div class="mb-4 col-xxl-3 col-xl-4 col-lg-5 col-md-6">
                <div class="d-flex align-items-center">
                    <button class="btn btn-success text-nowrap me-3 translate">一键翻译</button>
                    <select class="form-select langGroup">
                        <?php
                        /** 载入下拉菜单 HTML */
                        function get_lang_group()
                        {
                            global $param;
                            foreach (Lang_info::$group as $item) {
                                $fromCode = $item[0];
                                $toCode = $item[1];
                                $from = Lang_info::$language[$fromCode];
                                $to = Lang_info::$language[$toCode];
                                $text = $item[0] == 0 ? '自动识别语言类型' : "$from - 翻译为 - $to";
                                $selected = $param['from'] == $item[0] && $param['to'] == $item[1] ? 'selected' : '';
                                echo "<option value=\"$fromCode|$toCode\" $selected>$text</option>";
                            }
                        }
                        get_lang_group()
                        ?>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="form-floating mb-4">
                    <textarea class="form-control input-text border-success border border-2" placeholder="待翻译内容" <?php echo $text ? '' : 'autofocus' ?>><?php echo $text ?></textarea>
                    <label>待翻译内容</label>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-floating mb-4">
                    <textarea class="form-control input-result border border-secondary border-2" placeholder="翻译结果"><?php echo $translate->get_result_text($text, $from, $to) ?></textarea>
                    <label>翻译结果</label>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <div class="me-auto text-muted">
                快捷键：Ctrl+Enter 翻译，Ctrl+L 清空
            </div>
            <a href="https://github.com/oyps/apee-fanyi" class="text-muted" target="_blank">Github</a>
        </div>
    </div>
    <script src="./dist/bundle.js?v=1.1.0"></script>
</body>

</html>