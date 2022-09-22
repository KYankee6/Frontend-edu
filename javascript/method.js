var user = {
    name: "hong",
    age: 203,
    sayHello() {
        console.log("hello");
    }
};

user.sayHello = function () {
    console.log("hello");
};

user.addFunc = function () {
    console.log("Add hello");
};

function add2Func() {
    console.log("Add2 Hello");
}

console.log(user);
user.sayHello();
user.addFunc2 = add2Func;

