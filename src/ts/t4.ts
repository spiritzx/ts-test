/*
 * @Descripttion: 泛型推断 infer
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2022-12-03 22:07:21
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-12-03 22:37:28
 */

type Res<T1> = T1 extends Array<infer K> ? K : T1;

type Res1 = Res<string[]> // string
type Res2 = Res<number[]> // number
type Res3 = Res<string | number[]> // 联合类型 string number



