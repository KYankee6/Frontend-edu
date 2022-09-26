if (true) {
    let test = "Test";
}
// console.log(test);

function func() {
    var ftest = "ftest";
}

func();
// console.log(ftest);

for (var i = 0; i < 10; i++) {

}
console.log(i);

function hi() {
    phrase = "hello";
    console.log(phrase);
    var phrase;
}

let n =20;
n= 10;
const cn=10;// 선언 동시에 초기화
// cn= 20; => error , 값 변경 불가능

const obj = {name:"song", age: 20}
obj.name = "park";      // 속성을 바꾸는건 ok
// obj = {name: "song", age: 20};  // 그러나 다른 객체 대입은 불가능하다.
console.log(obj);


// 한번만 사용
(function () {
    console.log("gogo");
})();

(function () {
    console.log("gogo");
}());

!function () {
    console.log("gogo");
}();
+function () {
    console.log("gogo");
}();