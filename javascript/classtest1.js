class User{
    constructor(name) {
        this.name = name;
    }

    hi() {
        console.log("hi! " + this.name);
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }
}

console.log(typeof User)

User.prototype.sayHello = function () {
    console.log("Hello! " + this.name);
};

let user1 = new User("hong");
user1.hi();
user1.sayHello();