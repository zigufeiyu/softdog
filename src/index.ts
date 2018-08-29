/*** 
 * @module {Object} softdog 简单的字符串加密|解密，防止密码提交拦截
 * @interface Softdog
 * @method encrypt  ----------  字符串加密
 * @method decrypt  ----------  字符串解密
 */

// 类型别名
type Sign = 1 | -1;

// 函数接口
interface ConfuseFunc {
    (str: string): string;
}

// 输出接口 —— 类型别名
interface Softdog {
    encrypt: ConfuseFunc;
    decrypt: ConfuseFunc;
}

// 功能函数
function _confuse(str: string, sign: Sign): string {
    if (typeof str !== 'string' || !str) {
        return '';
    }
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(str.charCodeAt(i) + sign * 2)
    }
    return newStr;
};

let softdog: Softdog = {
    encrypt(str) {
        return _confuse(str, 1)
    },
    decrypt(str) {
        return _confuse(str, -1)
    }
}

// 导出默认对象
export = softdog;
