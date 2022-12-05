"use strict";
class Man {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}年纪${this.age}`);
    }
}
const man = new Man('zx', 30);
man.speak();
