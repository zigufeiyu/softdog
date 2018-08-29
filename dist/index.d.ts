// 函数接口
interface ConfuseFunc {
    (str: string): string;
}

// 输出接口 —— 类型别名
type Softdog = {
    encrypt: ConfuseFunc;
    decrypt: ConfuseFunc;
}

// 导出默认对象
export = Softdog;