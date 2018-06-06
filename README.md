# softdog

* 字符串混淆处理
* 加强密码等敏感数据传输安全性
* 客户端加密，服务器端解密

```javascript
var softdog = require("softdog");

var input = {
    type: "password", 
    value: "abc731"
}

// 客户端加密
var client2serverStr = softdog(input.value, 1);
console.log(client2serverStr);

// 服务器端解密
var rawStr = softdog(client2serverStr, -1);
console.log(rawStr);

// 结果校验
console.log(rawStr === input.value);
```