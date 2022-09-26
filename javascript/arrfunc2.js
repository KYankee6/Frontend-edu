var strarr = ['사과', '바나나', '사과', '수박'];
// n번째부터 m개 삭제
strarr.splice(1, 2);
//실제 삭제는 아닌 delete
delete strarr[0]
console.log(strarr);

strarr = ['사과', '바나나', '사과', '수박'];
//1번째에 2개 삭제, 오렌지, 레몬 추가, 삭제한 element를 반환한다.
var delstr = strarr.splice(1, 2, "오렌지", "레몬");
console.log(strarr)
console.log(delstr);

strarr = ['사과', '바나나', '사과', '수박'];
// [1,2) 를 반환
var sarr = strarr.slice(1, 3);
console.log(sarr);
console.log(strarr);

//concat
var arr1 = ['1', '2'];
var arr2 = ['3', '4'];
var str1 = 5;
var retarr = strarr.concat(['아보카도', '망고']);
var carr = concat()
console.log(retarr);
console.log(strarr);