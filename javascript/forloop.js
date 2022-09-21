var arr = [10, 20, 30];
for (const i in arr) {
    console.log(`arr [${i}] = ${arr[i]}`);
}

var sum = 0;
for (const n of arr) {
    sum += n;
}

console.log(sum);

var store = {
    snack: 1000, flower: 5000, beberage: 3000
}

for (const item in store) {
    console.log(`${item} 가격은 ${store[item]}`);
}
