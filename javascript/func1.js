
// 정의 형식으로 하면 순서가 중요하지 않지만
func1()
function func1() {
    console.log('hi');
}

//표현식은 순서가 중요하다
// funcval() => x
var funcval = function () {
    console.log('Hello')
};
funcval();

var func2 = function (text = 'non') {
    console.log(text)
};
func2();
func2('hi');

function sum(x, y) {
    return x+y;
}
console.log((sum(2, 3)));

function func3() {
    return {name: "hong"}
}
console.log(func3())

var tot = (x, y) => x + y;
console.log(tot(10, 20));

var double = n => n * 2;
console.log(double(10));

var age = 15;
var welcome = age < 18 ?
    () => console.log("안녕?"):
    () => console.log("안녕하세요");
welcome(1)