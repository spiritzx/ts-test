/*
 * @Descripttion: ts class
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-03-18 21:51:52
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-04 14:26:55
 */

class Parent1 {
  private age:number // 不能被外部访问
  private getType():string {
    return "类型"
  }
  public name:string
  static version:string = "v0.1"
  protected test:string = "test"
  readonly flag:boolean = false
  protected constructor(name:string, flag:boolean) {
    this.name = name
    this.age = 30
    this.flag = flag
  }
  public show() {
    console.log(this.getType())
    console.log(this.name)
    console.log(this.age)
    // this.flag = flag
  }
}
// new Parent1()
class Child1 extends Parent1 {
  constructor(name:string) {
    super(name, true)
    console.log(this.test)
    console.log(this.flag)
  }
}

let newChild1 = new Child1("tom")
Child1.version = "0.2"
console.log(Child1.version)
console.log(newChild1.flag)
newChild1.show()
// newChild1.flag = false

abstract class Parent2 {
  abstract prif(name:string):any
}
class child2 extends Parent2 {
  constructor() {
    super()
  }
  prif(name:string) {
    console.log(name)
  }
}
let newChild2 = new child2()
newChild2.prif("dd")

function createObj<T>(c:new(name:string) => T, name:string):T {
  return new c(name)
}
 let obj10:Child1 = createObj<Child1>(Child1, "44")
 obj10.show()

interface classObj {
  name:string
  age:number
  say:Function
}

class Parent3 implements classObj {
  public name="string"
  public age=3
  constructor(name:string) {
    this.name = name
  }
  public say() {
    console.log(this.name)
  }
  static con() {
    return 1
  }
}

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

// 保护类型 protected
// 只能被继承,不能被实例对象调用
// 如果类的构造函数被保护,就不能 new 出实例对象

// 只读属性 readonly
// 标记的属性只能在声明时或类的构造函数中赋值
// 不能实例对象中再次赋值
