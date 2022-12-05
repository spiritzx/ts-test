"use strict";
const fn = (a, b) => {
    return a + "：" + b;
};
// 函数默认值
const fn3 = (a = 'zx', b = 10) => {
    return a + "：" + b;
};
// 函数默认值
const fn4 = (a, ...args) => {
    console.log(args);
    return a + "";
};
fn4(0, 3032, 2, 55);
// function FNC1(a:number, b:number): number
// function FNC1(a:string, b:string): string;
// const fn5:FNC1 = () => {
// }
