var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
function add() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return __spreadArray([], num, true);
}
console.log(add(1, 2));
console.log(add("1", "2"));
function getArr() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return __spreadArray([], num, true);
}
function showLen(a) {
    return a;
}
showLen("11");
showLen([]);
