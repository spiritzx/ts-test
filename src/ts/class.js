/*
 * @Descripttion: ts class
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-18 21:51:52
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-04 14:26:55
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent1 = /** @class */ (function () {
    function Parent1(name, flag) {
        this.test = "test";
        this.flag = false;
        this.name = name;
        this.age = 30;
        this.flag = flag;
    }
    Parent1.prototype.getType = function () {
        return "类型";
    };
    Parent1.prototype.show = function () {
        console.log(this.getType());
        console.log(this.name);
        console.log(this.age);
        // this.flag = flag
    };
    Parent1.version = "v0.1";
    return Parent1;
}());
// new Parent1()
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1(name) {
        var _this = _super.call(this, name, true) || this;
        console.log(_this.test);
        console.log(_this.flag);
        return _this;
    }
    return Child1;
}(Parent1));
var newChild1 = new Child1("tom");
Child1.version = "0.2";
console.log(Child1.version);
console.log(newChild1.flag);
newChild1.show();
// newChild1.flag = false
var Parent2 = /** @class */ (function () {
    function Parent2() {
    }
    return Parent2;
}());
var child2 = /** @class */ (function (_super) {
    __extends(child2, _super);
    function child2() {
        return _super.call(this) || this;
    }
    child2.prototype.prif = function (name) {
        console.log(name);
    };
    return child2;
}(Parent2));
var newChild2 = new child2();
newChild2.prif("dd");
function createObj(c, name) {
    return new c(name);
}
var obj10 = createObj(Child1, "44");
obj10.show();
var Parent3 = /** @class */ (function () {
    function Parent3(name) {
        this.name = "string";
        this.age = 3;
        this.name = name;
    }
    Parent3.prototype.say = function () {
        console.log(this.name);
    };
    Parent3.con = function () {
        return 1;
    };
    return Parent3;
}());
// 共有类型 public
// Parent1.say 类本身不能调用
//  可以继承,可以改写
// newChilld1.age 实例可以调用
// 私有类型 private
// Parent1.age 类不能调用
// Child1.age 不能继承
// newChilld1.age 实例不能被调用
// 静态类型 static
// Parent1.version 类可以调用,内部不能使用
// Child1.version 可以调用,可以改写,内部不能使用
// newChild1.version 实例对象不能调用
// 保护类型 protected
// 只能被继承,不能被实例对象调用
// 如果类的构造函数被保护,就不能 new 出实例对象
// 只读属性 readonly
// 标记的属性只能在声明时或类的构造函数中赋值
// 不能实例对象中再次赋值
