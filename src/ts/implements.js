var Man = /** @class */ (function () {
    function Man(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Man.prototype.speak = function () {
        console.log("".concat(this.name, "\u5E74\u7EAA").concat(this.age));
    };
    return Man;
}());
var man = new Man('zx', 30);
man.speak();
