var fn = function (a, b) {
    return a + "：" + b;
};
// 函数默认值
var fn3 = function (a, b) {
    if (a === void 0) { a = 'zx'; }
    if (b === void 0) { b = 10; }
    return a + "：" + b;
};
// 函数默认值
var fn4 = function (a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(args);
    return a + "";
};
fn4(0, 3232, 2, 55);
