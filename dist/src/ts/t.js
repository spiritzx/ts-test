"use strict";
/*
 * @Descripttion: 泛型
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-18 22:27:51
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-12-04 16:52:42
 */
console.log("泛型");
function getId(id) {
    return id;
}
// 泛型约束
function add(...num) {
    return [...num];
}
console.log(add(1, 2));
console.log(add("1", "2"));
function getArr(...num) {
    return [...num];
}
function showLen(a) {
    return a;
}
showLen("11");
showLen([]);
