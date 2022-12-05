/*
 * @Descripttion: 泛型接口和泛型类
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2022-12-03 21:27:07
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-12-03 22:34:45
 */
interface IPerson<T, K> {
  name: T,
  age: K
}

class man01 implements IPerson<string, number> {
  name: string
  age: number
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
}


class Obj01<T, K> {
  name: T
  age: K

  constructor (name:T, age: K) {
    this.name = name
    this.age = age
  }
}

const obj01 = new Obj01<string, boolean>("张三", false)