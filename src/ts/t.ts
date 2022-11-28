/*
 * @Descripttion: 泛型
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-18 22:27:51
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-11-28 21:57:44
 */
console.log("泛型")
function add<T>(...num:T[]):T[]{
  return [...num];
}
console.log(add<number>(1, 2))
console.log(add<string>("1", "2"))

function getArr(...num:Array<number | string>):Array<number | string>{
  return [...num];
}