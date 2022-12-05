/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2022-11-29 21:41:49
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2022-11-29 21:50:38
 */
interface Person {
  name: string
  age: number
  speak():void
}

class Man implements Person {
  name: string = ''
  age: number = 0
  constructor (name:string, age:number) {
    this.name = name
    this.age = age
  }
  speak () {
    console.log(`${this.name}年纪${this.age}`)
  }
}

const man = new Man('zx', 30);

man.speak();