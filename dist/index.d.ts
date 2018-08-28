// 类型别名
type Sign = 1 | -1;

// 声明默认函数
declare function softdog(str: string, sign: Sign): string | never;

// 导出默认对象
export = softdog;