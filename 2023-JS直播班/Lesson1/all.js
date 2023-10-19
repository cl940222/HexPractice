console.log('Hello World');

// 變數
// 用途1: 儲存資料(之後要重複使用的時候可以再拿來使用)
// let macBook; // undefined(有宣告沒給值)
// is not defined(沒有宣告過, 接下來的語法都不會執行)
let macBook = 50000;
// let 宣告
// =   賦予
// var 有滲透到全域的問題

// 用途2: 運算(改變存起來的值/內容)
macBook = 50;

// 開根號 變數 ** 0.5

console.log(macBook);

// 後綴: 先賦予再加
let x = 3;
y = x ++; // 先執行 y=x 再執行 x++
console.log(x); // 4
console.log(y); // 3

// 前綴: 先加再賦予
let a = 2; 
b = ++a; // 先執行 ++a 再執行 b = a
console.log(a); // 3
console.log(b); // 3

// 變數的值有分型別
// --- 原始型別 ---
// string 字串 const myName = ""
// number 數值
// boolean 布林
// undefined 有宣告沒給值
// null 沒東西
// symbol 
// --- 物件型別 ---
// array 陣列
// object 物件

