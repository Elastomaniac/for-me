// let a = 2;
// let b = 2.1;
// if (a === Math.floor(b)) {
//   console.log("equeal");
// }
// console.log(typeof []);

// let str = "Текст, для проверки метода";
// console.log(str.charAt(1));
// console.log(str.includes("Текст,"));
// str.repeat(2);

// let result = 5 + 4;
// switch (result) {
//   case 10:
//     console.log("многовато");
//     break;
//   case 9:
//     console.log("вы угадали");
//     break;
//   case 4:
//     console.log("мало не угадали");
//     break;
//   default:
//     console.log("сочувствуем");
// }
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }
// function nameFunc() {
//   console.log("Наша функция");
// }
// nameFunc();
// console.log('Разогреваем сковородку')
// console.log('взфть яйцо 2 штуки')
// console.log('Пожарить яйца')
// console.log('Готово')

// let num

// function getSum() {
//   console.log('вызов переменной внутри ф-ции', num);
//   num = 100;
//   console.log('вызов переменной внутри ф-ции', num);
// }
// getSum();
// console.log("вызов переменной вне ф-ции", num);

//callBack function
// const message = (name, age) => {
//   console.log(`меня зовут ${name} и мне` + age());
// };
// const age = () => {
//   return 33;
// };
// message("Анна", age);

// // Замыкание
// const message = () => {
//   let name = "Oleg";

//   const messageOutput = () => {
//     console.log("Привет " + name);
//   };
//   messageOutput();
// };

// message();
// sdfdsf
// newbranch checking checkout

// let arr = [1, 2, 3, 4];
// arr[4] = 33;
// console.log(arr);
// arr.push("push");
// console.log(arr);
// let arr2 = arr.push("45");
// console.log(arr2);
// console.log(arr2.length);

// let arr = ["A", "B", "C", "E", "F"];
// // console.log(arr)
// // arr.splice(1, 1);
// console.log(arr);
// arr.splice(0, 1, "B");
// console.log(arr);

// let arr = ["Sura", "Sara", "John", "Julia", "Michael"];
// console.log("arr", arr);
// console.log(arr.indexOf("Sara", 0));
// console.log(arr.includes("a"));

// let arr = [
//   { name: "Igor", age: 33 },
//   { name: "Oleg", age: 24 },
//   { name: "Anna", age: 21 },
// ];
// console.log(arr);

// let result = arr.findIndex(function (item, index, arr) {
//   // console.log("item", item);
//   // console.log("index", index);
//   // console.log("arr", arr);
//   return item.age == 21;
// });
// console.log(result);
// console.log("--------------------------");
// let filterUser = users.filter((item,))

// let users = [
//   { name: "Igor", age: 33 },
//   { name: "Oleg", age: 24 },
//   { name: "Anna", age: 21 },
//   { name: "Ivan", age: 45 },
//   { name: "Irina", age: 12 },
//   { name: "Mariya", age: 66 },
// ];
// console.log("start", users);

// let filterUser = users.filter((item, index, arr) => {
//   return item.age > 30;
// });
// console.log("filterUser end", filterUser);
// console.log("--------------------------");

// let newDateUser = filterUser.map((item) => {
//   return item.age / 2;
// });
// console.log(newDateUser);

// let arr5 = ['1', 33, [], 22, {}]

// let a = [1, 44, []];
// let b = [0, "Mikki"];
// let c = ["last", "one"];

// let d = a.concat(b, c);

// console.log(d);
// console.log(d.indexOf("Mikki", 4));
// console.log(0.32 * 0.22 * 0.75);

// if ("13px" < "14") {
//   console.log(true);
// }
// console.log(typeof Infinity);
// let i = 0;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }
// let a = true
// let b = true
// if (!(!a && !b) === true) {
//   console.log(true)
// }

// console.log(typeof "Vasia".toUpperCase().length.toString());
// let message = "Vasya";
// console.log(message[message.length - 1]);
// console.log('Hey there!'
// console.log("4" * "9");
// console.log('4')
// let first = 1;
// let first = 2;
// const first = 1,
//   second = 2;
// console.log(first);
// console.log(second);
// let i = 10;
// while (i < 10) {
//   console.log(11);
// }
// console.log(1 / 0);
// let i = 0;
// let c = 0;
// const str = "Rolling Scopes School";
// while (i < str.length) {
//   if (str[i] === "o") {
//     c++;
//   }
//   i++;
// }
// console.log(c);
// console.log("\nHey!"[1]);
// console.log(String.fromCharCode(59))

// const showRS = (year, quarter) => {
//   return year, quarter;
// };

// console.log("RSSchool " + showRS("2021", "Q3"));
// let word = "vasya";

// function capitalizeWord(word) {
//   word[0].toUpperCase();
//   return word;
// }

// const publication = "freeCodeCamp";
// let public = publication[0].toUpperCase() + publication.substring(1);
// console.log(public);

// let arr = [1, 3, 5, 2]
// console.log(arr);
// arr.push('2')


