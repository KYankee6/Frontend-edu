var user = {
    name: 'Jonh',
    age: 30,
    info() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
};

user.info();