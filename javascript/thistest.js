var person = {
    name: "son",
    age: 27,
    //this 빼면 인식 못한다.
    info() {
        console.log(this.name + ": " + this.age);
    },

    // 화살표함수는 this 인식 못한다.
    info2: () => console.log(this.name + " : " + this.age)
};
person.info();

function getName() {
    return this.name;
}

person.getName = getName;

console.log(person.getName());

var person2 = {
    name: "park",
    age: 20
};

person2.getName = getName;
console.log(person2.getName());
person.info2()
