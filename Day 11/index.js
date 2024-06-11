"use strict";
console.log("Hello World!");
function add(a, b) {
    return a + b;
}
add(1, 2);
var Ball = /** @class */ (function () {
    function Ball(color) {
        this.color = color;
        this.color = color;
    }
    Ball.prototype.getColor = function () {
        return this.color;
    };
    Ball.prototype.setColor = function (color) {
        this.color = color;
    };
    return Ball;
}());
