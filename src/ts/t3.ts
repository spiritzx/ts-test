/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2022-12-03 21:56:15
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-12-03 21:58:56
 */
interface Iname {
  name: string
}

interface Iage {
  age: number
}
type Condition<T> = T extends Iname ? Iname : Iage

function reload<T>(a: T):T {
  return a;
}

reload({a: "zx"})
reload({age: 2});