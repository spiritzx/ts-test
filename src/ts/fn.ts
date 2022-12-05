/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2022-11-28 22:05:36
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-11-29 21:18:09
 */
// 可选参数
type fn1 = (name: string, age?: number) => string


const fn: fn1 = (a, b) => {
  return a + "：" + b;
}

// 函数默认值
const fn3 = (a: string = 'zx', b: number = 10): string => {
  return a + "：" + b;
}

// 函数默认值
const fn4 = (a: number, ...args: number[]): string => {
  console.log(args)
  return a + "";
}

fn4(0, 3032, 2, 55)

// function FNC1(a:number, b:number): number
// function FNC1(a:string, b:string): string;

// const fn5:FNC1 = () => {

// }