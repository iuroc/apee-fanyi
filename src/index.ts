import { post, IResponse } from './post'

loadLangGroup()
/**
 * 载入翻译组合
 */
function loadLangGroup() {
    post('api/get_lang_info.php', (data: IResponse) => {
        if (data.code == 200) {
            /** 下拉菜单 HTML */
            const optionsHtml = makeOptionHtml(data.lang, data.group)
            const eleLangGroup = document.querySelector('.langGroup') as HTMLSelectElement
            eleLangGroup.innerHTML = optionsHtml
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
        const fromStr = lang[item[0]]
        const toStr = lang[item[1]]
        const text = item[0] == 0 ? '自动识别语言类型' : `${fromStr} 翻译为 ${toStr}`
        html += `<option>${text}</option>`
    })
    return html
}

