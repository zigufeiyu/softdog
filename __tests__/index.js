var softdog = require('../dist/index');

describe("softdog", () => {
    it("!str is true or str's type not string", () => {
        var noStrFun = () => {
            softdog()
        }
        var emptyStrFun = () => {
            softdog('')
        }
        var invalidTypeFun = () => {
            softdog(true)
        }
        expect(noStrFun).toThrow("param str error")
        expect(emptyStrFun).toThrow("param str error")
        expect(invalidTypeFun).toThrow("param str error")
    })
    it("sign not equal 1 or -1", () => {
        var noSignFun = () => {
            softdog("123456")
        }
        var invalidSignFun = () => {
            softdog("123456", 0)
        }
        expect(noSignFun).toThrow("param sign error")
        expect(invalidSignFun).toThrow("param sign error")
    })
    it("valid operation", () => {
        expect(softdog("123abc", 1)).toBe("345cde");
        expect(softdog("345cde", -1)).toBe("123abc");
    })
})