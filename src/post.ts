import querystring = require('querystring')
/**
 * 响应数据类型
 */
export interface IResponse {
    /** 响应状态码 */
    code: number
    /** 提示内容 */
    msg: string
    /** 语言列表 */
    lang: string[]
    /** 语言翻译组合 */
    group: number[][]
}
/**
 * 发送 POST 请求
 * @param url 请求地址
 * @param data POST 数据
 * @param success 回调函数
 */
function post(url: string, data: any, success: (data: IResponse) => void): void;
/**
 * 发送 POST 请求
 * @param url 请求地址
 * @param success 回调函数
 */
function post(url: string, success: (data: IResponse) => void): void;
function post(url: string, a?: any, b?: any) {
    if (typeof a == 'function') {
        sendPost(url, null, a)
    } else {
        sendPost(url, a, b)
    }
}

function sendPost(url: string, data: any, success: any) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(querystring.encode(data))
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(JSON.parse(xhr.responseText))
        }
    }
}

export { post }