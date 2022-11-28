/*
 * @Descripttion: 接口
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-10 13:45:17
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-03-10 14:22:26
 */
console.log("接口");
interface OA2 {
  name:string; // 属性必须有
  age:number; // 属性不必出现
  readonly id: number; // 只读不可改变
}
let obj5:OA2 = { name: "obj1", age: 15, id: 21 };
let obj6:OA2 = { name: "obj2", age: 16, id: 22};

console.log(obj5.id);

function say(obj:OA2):string {
  return `名字：${obj.name};年纪：${obj.age}`;
}

let obj7 = {
  name: "tom",
  age: 27,
  id: 25
};

let info:string = say(obj7);
console.log(info);


function api(name: string, age: number):OA2 {
  return {
    name,
    age,
    id: 0
  }
}

let obj8:OA2 = api("220", 25);
console.log(obj8);

