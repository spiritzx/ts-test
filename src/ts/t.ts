/*
 * @Descripttion: 泛型
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-18 22:27:51
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-12-04 16:52:42
 */
console.log("泛型")
function getId<T>(id: T):T {
  return id;
}

// 泛型约束
function add<T>(...num:T[]):T[]{
  return [...num];
}
console.log(add<number>(1, 2))
console.log(add<string>("1", "2"))

function getArr(...num:Array<number | string>):Array<number | string>{
  return [...num];
}

interface LenType {
  length: number
}
function showLen<T extends LenType>(a: T):T {
  return a;
}

showLen("11");
showLen([]);