import { post } from "jquery"
loadLangGroup()

/**
 * 载入翻译组合
 */
function loadLangGroup() {
    post('api/get_lang_info.php', function (data: {
        /** 响应状态码 */
        code: number,
        /** 提示内容 */
        msg: string,
        /** 语言列表 */
        lang: string[],
        /** 语言翻译组合 */
        group: number[][]
    }) {
        if (data.code == 200) {
            const optionHtml = makeOptionHtml(data.lang, data.group)
            return
        }
    })
}

/**
 * 生成语言翻译组合列表 HTML
 * @param lang 语言列表
 * @param group 语言翻译组合
 * @returns 生成的 HTML
 */
function makeOptionHtml(lang: string[], group: number[][]): string {
    let html = ''
    group.forEach(item => {
        const from = lang[item[0]]
        const to = lang[item[1]]
        console.log(from, to)
    })
    return ''
}