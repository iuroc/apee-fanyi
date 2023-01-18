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
    group: number[][],
    /** 翻译结果 */
    result: string | string[][]
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
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    if (typeof a == 'function') {
        ajax(url, 'POST', null, a, headers)
    } else {
        ajax(url, 'POST', a, b, headers)
    }
}

/**
 * 发送 POST 请求
 * @param url 请求地址
 * @param method 请求方式
 * @param data POST 数据
 * @param success 回调函数
 * @param headers 请求头
 */
export function ajax(url: string, method: string, data: any, success: any, headers?: { [key: string]: string }) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    for (const key in headers) {
        const value = headers[key]
        xhr.setRequestHeader(key, value)
    }
    xhr.send(querystring.encode(data))
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(JSON.parse(xhr.responseText))
        }
    }
}

export { post }