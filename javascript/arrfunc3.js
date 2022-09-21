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
    {name: 'kang', age: 10}
]

var person = persons.find(per =>
    per.name == 'hong'
);
console.log(person);