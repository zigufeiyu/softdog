var softdog = require("../dist/index");

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