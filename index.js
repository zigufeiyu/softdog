/*** 
 * @function 简单的字符串加密|解密，防止密码提交拦截
 * @param {String} str  需要加密|解密的字符串
 * @param {Enum}  sign  加密解密区分标识 1加密 -1解密
 * @return {String} 加密或者解密后的密码
 */
(function (global, factory) {
    typeof module === "object" && module && typeof module.exports === "object" ? // CommonJs
        module.exports = factory() :
        typeof define === "function" && define.amd ? // AMD
            define(factory) :
            global.softdog = factory(); // HTML script

})(typeof window !== "undefined" ? window : this, function () {
    return function (str, sign) {
        if (!str || typeof str !== 'string') {
            return '';
        }
        if (sign !== 1 && sign !== -1) { // 1加密 -1解密
            throw new Error("param sign must be 1 or -1 !");
        }
        var newStr = '';
        for (var i = 0; i < str.length; i++) {
            newStr += String.fromCharCode(str.charCodeAt(i) + sign * 2)
        }
        return newStr;
    }
})