var x=5;
var y='hong'
//var y="hong" 둘 다 문자열, javascript는 character기 앖디.
var isTrue = true; //Boolean
var empty = null;
var nothing; //undefined
var symbol = Symbol('me');
var item = {price:5000, count: 10}
let itemStr = JSON.stringify(item);
console.log(item);
console.log(itemStr);

var fruit = [10, 20, 30];
var addFruit = function (f) {
    fruit .push(40);
};

addFruit(40);
