/***
 * @module {Object} softdog 简单的字符串加密|解密，防止密码提交拦截
 * @interface Softdog
 * @method encrypt  ----------  字符串加密
 * @method decrypt  ----------  字符串解密
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    // 功能函数
    function _confuse(str, sign) {
        if (typeof str !== 'string' || !str) {
            return '';
        }
        var newStr = '';
        for (var i = 0; i < str.length; i++) {
            newStr += String.fromCharCode(str.charCodeAt(i) + sign * 2);
        }
        return newStr;
    }
    ;
    var softdog = {
        encrypt: function (str) {
            return _confuse(str, 1);
        },
        decrypt: function (str) {
            return _confuse(str, -1);
        }
    };
    return softdog;
});
