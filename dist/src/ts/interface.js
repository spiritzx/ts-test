"use strict";
/*
 * @Descripttion: 接口
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-10 13:45:17
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-03-10 14:22:26
 */
console.log("接口");
let obj5 = { name: "obj1", age: 15, id: 21 };
let obj6 = { name: "obj2", age: 16, id: 22 };
console.log(obj5.id);
function say(obj) {
    return `名字：${obj.name};年纪：${obj.age}`;
}
let obj7 = {
    name: "tom",
    age: 27,
    id: 25
};
let info = say(obj7);
console.log(info);
function api(name, age) {
    return {
        name,
        age,
        id: 0
    };
}
let obj8 = api("220", 25);
console.log(obj8);
