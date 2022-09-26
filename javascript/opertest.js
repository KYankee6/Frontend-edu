var a=10;
var b= 5;
var c=7;
var d=0;

console.log((a < b || a > c));
console.log(c || a);

// null, 0, empty string, undefined 등 타입체커
// 맨 앞 값이 존재하면 앞에 값으로
console.log(1 || 0);
console.log(null || 'hong');
console.log('zzzz' || 'hong');

console.log(a < b && a > c);
// && => 맨뒤에 값으로
console.log(7 && 10 && 5);

//왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
// 둘중 하나 반환
