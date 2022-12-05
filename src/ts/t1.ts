/*
 * @Descripttion: 多泛型参数
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2022-12-01 21:47:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-12-03 22:34:44
 */
function getArr1<T, K>(a: T, b: K[]):[T, ...K[]] {
  console.log(b.length);
  return [a, ...b];
}

interface LenType {
  length: number
}
function getArr2<T, K extends LenType>(a: T, b: K):[T, number] {
  console.log(b.length);
  return [a, b.length];
}

function getValue<T, K extends keyof T>(a: T, b: K) {
  return a[b];
}

getValue({a: 1, b: 2}, "a");
getValue("", "toString");