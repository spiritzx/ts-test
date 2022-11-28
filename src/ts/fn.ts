/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2022-11-28 22:05:36
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-11-28 22:14:46
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

fn4(0, 3232, 2, 55)