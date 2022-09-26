var strarr = ['사과', '바나나', '배', '수박', '딸기'];
//배열 하나하나, idx, 배열 자체를 활용할 수 있다 ! !
strarr.forEach((item, idx, arr) => {
    console.log(`${item}은 ${idx}번째 과일입니다`)
});

// var f = strarr.indexOf('귤');
// console.log(f);
// var is = strarr.includes('수박');
// console.log(is)

var persons = [
    {name: 'hong', age: 20},
    {name: 'song', age: 30},
    {name: 'kang', age: 10},
    {name: 'hong', age: 39},
]

// find: 첫번째 true를 가져온다.
// 일반함수는 return문이 필요하지만, 화살표 함수는 return 생략 가능
var person = persons.find(per =>
    per.name == 'hong'
);

var personList = persons.filter(per =>
    per.name == 'kang'
);

var overTwentyList = persons.filter(per =>
    per.age >= 20);
console.log(person);
console.log(personList);
console.log(overTwentyList);

var narr = [2, 4, 6, 8];
var darr = narr.map(data => data * 2);
console.log(darr)

var lenstr = strarr.map(item => item.length);
console.log(lenstr)

var adultList = persons.map(p => p.age >= 20);
console.log(adultList);

var sarr = [3, 5, 1, 7, 2];
sarr.sort();
console.log(sarr)


persons.sort((per1, per2) =>
    per1.age - per2.age);
console.log(persons)

persons.sort((per1, per2) => per1.name.localeCompare(per2.name));
console.log(persons)

persons.reverse()
console.log(persons);

var names = 'hong,kang,song,park';
var namearr = names.split(',');
console.log(namearr)

var namearr = ['hong', 'kang', 'song', 'park'];
console.log(namearr.toString());
var joinname = namearr.join(' ');
console.log(joinname)

var arr = [1, 2, 3, 4, 5]
var res = arr.reduce((sum, data) => sum + data, 0);
console.log(res)


var john = {name: 'john', age: 25};
var pete = {name: 'pete', age: 30};
var mery = {name: 'mery', age: 20};

var users = [john, pete, mery];
var name = users.map(o => o.name);
console.log(name);