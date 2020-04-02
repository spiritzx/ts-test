/*
 * @Descripttion: ts class
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-18 21:51:52
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-02 22:33:08
 */

class Parent1 {
  private age:number // 不能被外部访问
  private getType():string {
    return "类型"
  }
  public name:string
  static version:string = "v0.1"
  constructor(name:string, ) {
    this.name = name
    this.age = 30
  }
  public show() {
    console.log(this.getType())
    console.log(this.name)
    console.log(this.age)
  }
}

class Child1 extends Parent1 {
  constructor(name:string) {
    super(name)
  }
}

let newChild1 = new Child1("tom")
Child1.version = "0.2"
console.log(Child1.version)

// 共有类型 public
// Parent1.say 类本身不能调用
//  可以继承,可以改写
// newChilld1.age 实例可以调用

// 私有类型 private
// Parent1.age 类不能调用
// Child1.age 不能继承
// newChilld1.age 实例不能被调用

// 静态类型 static
// Parent1.version 类可以调用,内部不能使用
// Child1.version 可以调用,可以改写,内部不能使用
// newChild1.version 实例对象不能调用

newChild1.show()