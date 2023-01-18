import { post } from "./ajax"
import querystring = require('querystring')
/** 翻译按钮 */
const buttonTrans = document.querySelector('.translate') as HTMLButtonElement
/** 待翻译内容输入框 */
const inputText = document.querySelector('.input-text') as HTMLTextAreaElement
/** 翻译结果输入框 */
const inputResult = document.querySelector('.input-result') as HTMLTextAreaElement
const langGroup = document.querySelector('.langGroup') as HTMLSelectElement
buttonTrans.onclick = () => {
    /** 待翻译文本 */
    const text = inputText.value
    /** 语言组合 */
    const langGroupValue = langGroup.value.split('|')
    /** 来源语言 */
    const from = langGroupValue[0]
    /** 目标语言 */
    const to = langGroupValue[1]
    if (!text) {
        return
    }
    buttonTrans.disabled = true
    /** 按钮原来的内容 */
    const buttText = buttonTrans.innerHTML
    buttonTrans.innerHTML = '正在翻译'
    post('http://f.apee.top/api/translate.php', {
        from: from,
        to: to,
        text: text,
        type: 'text'
    }, (data) => {
        buttonTrans.disabled = false
        buttonTrans.innerHTML = buttText
        if (data.code == 200) {
            inputResult.value = data.result as string
            history.replaceState(null, '', '?' + querystring.encode({
                from: from,
                to: to,
                text: text,
            }))
            return
        }
        alert(data.msg)
    })
}

const buttonClean = document.querySelector('.clear') as HTMLButtonElement
buttonClean.onclick = function () {
    inputText.value = ''
    inputResult.value = ''
    inputText.focus()
}



window.onkeydown = (event: KeyboardEvent) => {
    if (event.key == 'Enter' && event.ctrlKey) {
        event.preventDefault()
    }
    if (event.key == 'l' && event.ctrlKey) {
        event.preventDefault()
    }
}
window.onkeyup = (event: KeyboardEvent) => {
    if (event.key == 'l' && event.ctrlKey) {
        buttonClean.click()
    }
    if (event.key == 'Enter' && event.ctrlKey) {
        buttonTrans.click()
    }
}