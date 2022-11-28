/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-05 16:37:51
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-05 22:30:43
 */
console.log("装饰器")

console.log("类装饰器")
// 装饰器
function descObjFn(target:new(a:string) => any) {
  target.prototype.version = 0.1
}

// 装饰器函数
function descObjFn1(name:string) {
  let age:number = 30
  return (target:new(a:string) => any) => {
    target.prototype.age = age
    target.prototype.name = name
    target.prototype.sayName = () => {
      console.log(target.name)
    }
  }
}

@descObjFn
@descObjFn1("desc")
class ParentDesc {
  public a:string = "test"
  constructor(a:string) {
    this.a = a
  }
}
interface ParentDesc {
  age:number
  name:string
  sayName:Function
  version:string
}
let descObj:ParentDesc = new ParentDesc("test")

console.log(descObj.age)
descObj.sayName()
console.log(descObj.version)

console.log("方法装饰器")
function descFn(target:any, methode:string, descriptor:PropertyDescriptor) {
  return {
    value: () => {
      console.log(2)
    }
  }
}
function descFn1(flag:boolean) {
  return (target:any, methode:string, descriptor:PropertyDescriptor) => {
    return {
      writable: true, // 对象是否可以再赋值
      configurable: true, // 是否可以通过Object.defineProperty对对象再次配置
      enumerable: flag // 对象是否可以枚举
    }
  }
}

class ParentDesc1 {
  public a:string = "test"
  constructor(a:string) {
    this.a = a
  }
  @descFn1(false)
  @descFn
  say() {
    console.log(this.a)
  }
}
let newDes2 = new ParentDesc1("5")
newDes2.say()

console.log("参数装饰器")
function descArg (target:any, methode:string, paramIndex:number){
  console.log(paramIndex)
  console.log(target)
  console.log(methode)
}
console.log("属性装饰器")
function propertyDesc (target:any, property:string) {
  console.log(property)
  target[property] = "555"
  target.c = "cccc"
}

class ParentDesc2 {
  @propertyDesc
  public b:string|undefined
  constructor() {}
  say() {
    console.log(this.b)
  }
}
interface ParentDesc2 {
  c:string
}
let newDes3 = new ParentDesc2()
newDes3.say()


function setDesc(target:any, propertyName:string, descriptor:PropertyDescriptor ) {
  return {
    value: "ss",
    configurable: true
  }
}

class ParentDesc3 {
  private _a:string
  constructor(a:string) {
    this._a = a
  }
  say() {
    console.log(this._a)
  }
  @setDesc
  get ab() {
    return this._a
  }
  set ab(a:string) {
    this._a = a
  }
}
let newDesc4 = new ParentDesc3("777")
newDesc4.say()
console.log(newDesc4.ab)
