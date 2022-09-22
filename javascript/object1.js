// 리터럴 문법
var user = new Object();
// 객체 생성자
var user = {
    name: "hong",
    age: 25,
    "likes habby": "reading"
};

console.log(user.name);
console.log(user["name"]);
console.log(user["likes habby"]);
user.address = 'seoul';
user.name = 'song';
console.log(user);

function person(name, age, address) {
    return {name, age, address};
}


var hong = person('hong', 20, 'seoul');
var song = person('song', 22, 'seoul');
var kang = person('kang', 21, 'seoul');

pers = [hong, song, kang];
pers.forEach((per)=>{
    console.log(`이름: ${per.name}, 나이:${per.age}, 주소 ${per.address}`);
})

console.log("name" in user)

for (const userKey in user) {
    console.log(userKey + ": " + user[userKey]);
}

