/*** 
 * @module {Object} softdog 简单的字符串加密|解密，防止密码提交拦截
 * @interface Softdog
 * @method encrypt  ----------  字符串加密
 * @method decrypt  ----------  字符串解密
 */

// 函数接口
interface ConfuseFunc {
    (str: string): string;
}

// 输出接口 —— 类型别名
interface Softdog {
    encrypt: ConfuseFunc;
    decrypt: ConfuseFunc;
}

// 声明默认对象
declare let softdog: Softdog;

// 导出默认对象
export = softdog;