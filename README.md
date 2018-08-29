# softdog

[![npm package](https://nodei.co/npm/softdog.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/softdog/)

[![build status](https://travis-ci.org/maqing01/softdog.svg?branch=master)](https://travis-ci.org/maqing01/softdog)
[![devDependency](https://img.shields.io/david/dev/maqing01/softdog.svg)](https://nodei.co/npm/softdog/)
[![npm version](https://img.shields.io/npm/v/softdog.svg)](https://nodei.co/npm/softdog/)
[![npm](https://img.shields.io/npm/l/softdog.svg)](https://nodei.co/npm/softdog/)

## 字符串混淆处理
* 加强密码等敏感数据传输安全性
* 客户端加密，服务器端解密

```javascript
var softdog = require("softdog");

var input = {
    type: "password", 
    value: "abc731"
}

// 客户端加密
var client2serverStr = softdog.encrypt(input.value);
console.log(client2serverStr);

// 服务器端解密
var rawStr = softdog.decrypt(client2serverStr);
console.log(rawStr);

// 结果校验
console.log(rawStr === input.value);
```

* 特别提示
  > 加密|解密方法参数如果数据类型非字符串或者为空字符串，返回结果均为空字符串