var softdog = require('../dist/index');

describe("softdog", () => {
    it("!str is true or str's type not string", () => {
        var noStrFun1 = () => softdog.encrypt()
        var noStrFun2 = () => softdog.decrypt()
        var emptyStrFun1 = () => softdog.encrypt('')
        var emptyStrFun2 = () => softdog.decrypt('')
        var invalidTypeFun1 = () => softdog.encrypt(true)
        var invalidTypeFun2 = () => softdog.decrypt(true)

        expect(noStrFun1()).toBe("")
        expect(noStrFun2()).toBe("")
        expect(emptyStrFun1()).toBe("")
        expect(emptyStrFun2()).toBe("")
        expect(invalidTypeFun1()).toBe("")
        expect(invalidTypeFun2()).toBe("")
    })
    it("valid operation", () => {
        expect(softdog.encrypt("123abc")).toBe("345cde");
        expect(softdog.decrypt("345cde")).toBe("123abc");
    })
})