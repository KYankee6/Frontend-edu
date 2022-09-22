// user는 데이터 영역에 존재
let user = {
    //이름 john은 heap에 존재한다.
    name: "John",
    //program code 영역
    hi() {
        console.log(`Hi, ${this.name}`);
    }
};

// -> program 코드 영역의 user.hi() 함수주소를 넘긴다. (즉, 객체를 넘긴 것이 아님)

setTimeout(user.hi, 1000);

// user 자체가 실제 담는 주소이다.
// 함수 호출할 때는 주소를 함수 넘긴다
// user.name ==> John이 가능한 이유는 이것이다.
// 해결방법 1. 래퍼
setTimeout(function () {
    user.hi();
}, 1000);
user.name = "kim";

// 실행 결과는 kim이 나온다 => 문제 된다.

// let user ... 은 메모리에 john을 만든다.
// user에"


// 해결방법 2. bind
let per={
    name: "hong"
}

function func() {
    console.log('Hi, ' + this.name);
}

let funcper = func.bind(per);
funcper();

let hiuser = user.hi.bind(user);
hiuser();
setTimeout(hiuser, 1000);

// bind 됐는데 왜 이상하게 가지 ㅠ
user.name = "kim"


function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2);
console.log(double(3));