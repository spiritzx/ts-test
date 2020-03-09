/*
 * @Descripttion: 基本类型
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-09 09:43:47
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-03-09 15:23:21
 */
console.log("基本类型")
// 字符串
let str:string = "text";
// 数字
let num:number = 55;
// boolean
let flag:boolean = true;
// undefined
let und:undefined = undefined;
// null
let nu:null = null;
// symbol
let sym:symbol = Symbol(55)
console.log("1: " + str);
console.log("2: " + num);
console.log("3: " + flag);
console.log("4: " + und);
console.log("5: " + nu);
console.log(sym);

console.log("引用类型")
// 
interface OA {
  name: string; // 属性必须有
  age?: number; // 属性不必出现
  readonly id: number; // 只读不可改变
}
let obj1: OA = { name: "obj1", age: 10, id: 1 };
let obj2: OA = { name: "obj2", age: 18, id: 2 };
// let obj3: OA = { name() {return "55"}, age: 18, id: 2 };
// obj.id = 4
console.log("7: " + obj1.age);
console.log("8: " + obj1.age);

// 定义任意类型
interface OA1 {
  [property: string]: any
}
let obj4:OA1 = {a: 1, b: "44", c() { console.log(2) } };

console.log("数组")
let arrNum:Array<number>=[1,2];
let arrStr:Array<string>=["d", "dd"];
// 可以允许指定的多种类型
let arrMix:Array<number | string>=[0, "52", 0, 0];
let arrObj:Array<object>=[obj1, obj2, function(){}];
let arrAny:Array<any>=[function(){}, {}, [], /\555/];


console.log("函数")
let fn1 = ():string => {
  console.log(4)
  return "52";
}