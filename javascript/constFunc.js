function User1(name, age) {
    this.name = name;
    this.age = age;
    this.info = function () {
        console.log(`name: ${this.name}, age: ${this.age}`);
    };
}

var user1 = new User1('hong', 30);
console.log(user1)
user1.info()

function User2(name,age){
    return {
        name: name,
        age:age
    }
}

var user2 = User2('song', 20);
console.log(user2);