"use strict";
/*
 * @Descripttion: 数据类型
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-09 09:43:47
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-03-09 21:00:16
 */
console.log("基本类型");
// 字符串
let str = "text";
// 数字
let num = 55;
// boolean
let flag = true;
// undefined
let und = undefined;
let und1 = undefined;
// null
let nu = null;
// symbol
let sym = Symbol(55);
console.log("1: " + str);
console.log("2: " + num);
console.log("3: " + flag);
console.log("4: " + und);
console.log("5: " + nu);
console.log(sym);
console.log("引用类型");
let obj1 = { name: "obj1", age: 10, id: 1 };
let obj2 = { name: "obj2", age: 18, id: 2 };
// let obj3: OA = { name() {return "55"}, age: 18, id: 2 };
// obj.id = 4
console.log("7: " + obj1.age);
console.log("8: " + obj1.age);
let obj4 = { a: 1, b: "44", c() { console.log(2); } };
console.log("数组");
let arrNum = [1, 2];
let arrStr = ["d", "dd"];
// 可以允许指定的多种类型
let arrMix = [0, "52", 0, 0];
let arrObj = [obj1, obj2, function () { }];
let arrAny = [function () { }, {}, [], /\555/];
console.log("函数");
let fn1 = (a = 1, b = 2) => {
    console.log(a + b);
    return "" + a + b;
};
fn1(5, 6);
let fn2 = (...arg) => {
    console.log(arg[0]);
};
fn2(1, 2);
console.log("正则");
let reg = /test/g;
let reg1 = new RegExp("test");
console.log(reg);
console.log(reg1);
