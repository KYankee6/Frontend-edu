var user = {
    name: 'Jonh',
    age: 30,
    info() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    },

    myToString() {
        return `{"name": "${this.name}", "age": ${this.age}}`
    }
};

user.info();
console.log(user.myToString());
console.log(JSON.stringify(user))

var userstr = JSON.stringify(user);
console.log(userstr);
console.log(typeof user);
console.log(typeof userstr);

var userobj = JSON.parse(userstr);
console.log(userobj.age)


var tobj = {
    num: 10,
    str: 'string',
    obj: {a: 20},
    arr: [10, 20, 30],
    f: function () {

    }
};
tobjstr = JSON.stringify(tobj);
console.log(tobjstr)
console.log(tobj);
var room = {
    number: 23
}

var meetup = {
    title: "Conference",
    participants: [{name: "john"}, {name: "ann"}],
    // 객체명과 이름이 같으면 그냥 쓰면 된다.
    room
}
meetup.place = room;
// console.log(JSON.stringify(meetup, ['title', 'name']));   =>  x
// console.log(JSON.stringify(meetup, ['title', 'participant'])); => 배열에 빈객체가 나온다
console.log(JSON.stringify(meetup, ['title', 'name', 'participants'])); // => o
console.log(JSON.stringify(meetup, ['title', 'place', 'number']));
console.log(JSON.stringify(meetup,null,4));

var userData = '{"name": "John", "age":35, "isAdmin":false, "friends":[0,1,2,3,4]}';
var uobj = JSON.parse(userData);

console.log(uobj)

var str = `{"title":"Conference", "date": "${new Date()}"}`;
console.log(str);

console.log(JSON.parse(str));
var strobj = JSON.parse(str, function (key, value) {
    if(key=='date') return new Date(value);
    return value;
});
console.log(strobj)