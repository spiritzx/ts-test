var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * @Descripttion:
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-05 16:37:51
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-12-04 17:58:32
 */
console.log("装饰器");
console.log("类装饰器");
// 装饰器
function descObjFn(target) {
    target.prototype.version = 0.1;
}
// 装饰器函数
function descObjFn1(name) {
    var age = 30;
    return function (target) {
        target.prototype.age = age;
        target.prototype.name = name;
        target.prototype.sayName = function () {
            console.log(target.prototype.name);
        };
    };
}
var ParentDesc = /** @class */ (function () {
    function ParentDesc(a) {
        this.a = "test";
        this.a = a;
    }
    ParentDesc = __decorate([
        descObjFn,
        descObjFn1("desc")
    ], ParentDesc);
    return ParentDesc;
}());
var descObj = new ParentDesc("test");
console.log(descObj.age);
descObj.sayName();
console.log(descObj.version);
console.log("方法装饰器");
function descFn(target, methode, descriptor) {
    return {
        value: function () {
            console.log(2);
        }
    };
}
function descFn1(flag) {
    return function (target, methode, descriptor) {
        return {
            writable: true,
            configurable: true,
            enumerable: flag // 对象是否可以枚举
        };
    };
}
var ParentDesc1 = /** @class */ (function () {
    function ParentDesc1(a) {
        this.a = "test";
        this.a = a;
    }
    ParentDesc1.prototype.say = function () {
        console.log(this.a);
    };
    __decorate([
        descFn1(false),
        descFn
    ], ParentDesc1.prototype, "say");
    return ParentDesc1;
}());
var newDes2 = new ParentDesc1("5");
newDes2.say();
console.log("参数装饰器");
function descArg(target, methode, paramIndex) {
    console.log(paramIndex);
    console.log(target);
    console.log(methode);
}
console.log("属性装饰器");
function propertyDesc(target, property) {
    console.log(property);
    target[property] = "555";
    target.c = "cccc";
}
var ParentDesc2 = /** @class */ (function () {
    function ParentDesc2() {
    }
    ParentDesc2.prototype.say = function () {
        console.log(this.b);
    };
    __decorate([
        propertyDesc
    ], ParentDesc2.prototype, "b");
    return ParentDesc2;
}());
var newDes3 = new ParentDesc2();
newDes3.say();
function setDesc(target, propertyName, descriptor) {
    return {
        value: "ss",
        configurable: true
    };
}
var ParentDesc3 = /** @class */ (function () {
    function ParentDesc3(a) {
        this._a = a;
    }
    ParentDesc3.prototype.say = function () {
        console.log(this._a);
    };
    Object.defineProperty(ParentDesc3.prototype, "ab", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            this._a = a;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        setDesc
    ], ParentDesc3.prototype, "ab");
    return ParentDesc3;
}());
var newDesc4 = new ParentDesc3("777");
newDesc4.say();
console.log(newDesc4.ab);
