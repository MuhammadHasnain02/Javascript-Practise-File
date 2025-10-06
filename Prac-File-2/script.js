// let a = "Ahmed"

// console.log(a);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// ----------------------------

// let firstName = ["name1" , "name2"]
// let lastName  = ["last1" , "last2"]
// let fullName  = []

// for (var i = 0; i < firstName.length; i++) {
//     for (var j = 0; j < lastName.length; j++) {
//         fullName = firstName[0] + lastName[0]
//     }
//     console.log(fullName);
// }
// ----------------------------

// let array  = ["name1" , "name2" , "name3"]

// let a = array.push("name4")
// let b = array.pop()
// let c = array.shift()
// let d = array.unshift("name4")

// console.log(array);
// ----------------------------

// let array  = ["name1" , "name2" , "name3"]
// array[0] = "name0"
// array[0] = ""

// console.log(array);
// ----------------------------

// debugger
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {
//       console.log(i + j);
//     }
// }
// ----------------------------


// Function Practice

// function nxtPrnt() {
//     console.log("========== Next Task ==========")
// }
// nxtPrnt()

// function firstFun(name = "Guest") {
//     console.log(`Welcome ${name}!`);
// }
// firstFun("Ali")

// let value1 = +prompt("Enter Value 1")
// let sign   = prompt("Enter Sign [+ , - , * , / , %]")
// let value2 = +prompt("Enter Value 2")
// let sgn    = String(sign)

// function Calculation(a = 0 , sign = "+" , b = 0) {
//     console.log("Calculated Value is " + eval(`${a}${sign}${b}`) );
// }
// Calculation(value1 , sgn , value2)

// let value = prompt("Enter value check Even or Odd")
// function checkEvenOdd () {
//     // let value = prompt("Enter value check Even or Odd")

//     if (isNaN(value)) {
//         alert("Please enter a valid number")
//     }
//     else if (value === ""){
//         alert("Something Went Wrong")
//     }
//     else if (value % 2 === 0) {
//         alert("Number is Even")
//     }
//     else if (value % 2 != 0) {
//         alert("Number is Odd")
//     }

// }
// checkEvenOdd(value)

// function sayHi() {
//     console.log("hi");
// }
// sayHi()

// // arrow function ( ES 6 ) 
// let sayHello = () => {
//     console.log("hello");
// }
// sayHello()

// let value1 = +prompt("Enter Value 1")
// let sign   = prompt("Enter Sign [+ , - , * , / , %]")
// let value2 = +prompt("Enter Value 2")
// let sgn    = String(sign)

// let Calculation = (a = 0 , sign = "+" , b = 0) => {
//     console.log("Calculated Value is " + eval(`${a}${sign}${b}`) );
// }
// Calculation(value1 , sgn , value2)

// let nameF = prompt("Enter first name")
// let nameL = prompt("Enter last name")

// function fullName(firstName , lastName) {

//     function combine() {
//         return firstName + lastName
//     }
//     return combine()

// }
// console.log(fullName(nameF , nameL))

// IIFE = Immediately Invoked Function Expression!

// (function name() {
//     console.log("Hello!");
// })()

// Set Time Out
// setTimeout(function() {
//     console.log("This message was delayed by 5 secs");
// },2000)

// // forEach  - a method of array.[ya loop ki tarah kam karta han]
// let number = [1 , 2 , 3 , 4 , 5]

// number.forEach(function(num) {
//     console.log("Direct Print : " + num);
//     console.log("Multiply Print : " + num * 2);
// })

// let color = ["red" , "blue" , "green", "yellow" , "gray" , "black"]

// color.forEach(function (color , index){
//     console.log("This color is " + color + " at " + index + " index");
// })

// let num = [1 , 2 , 3 , 4 , 5]
// let total = 0
// console.log("This is b " + total);

// Function Practice

// ES6 Lecture: map, filter

// let numbers = [10 , 20 , 30 , 40 , 50]

// numbers.map((m) => {
//     console.log(m);
// })

// ------------------------------

// let numbers = [10 , 20 , 30 , 40 , 50]

// console.log(numbers);

// let updatedArray = numbers.map((m) => {

//     if (m < 30) {
//         return m + 10
//     }
//     return undefined

// })
// console.log(updatedArray);

// console.log("===============");

// ------------------------------

// let numbers = [10 , 20 , 30 , 40 , 50]
// console.log(numbers);

// let updatedArray = numbers.filter((m) => m < 30).map((m) => m + 10)
// console.log(updatedArray);

// -------------- Map ---------------

// let numbers = [10 , 20 , 30 , 40] 

// let CurrArr = numbers.map((m) => m)
// console.log(CurrArr);

// let updaArr = numbers.map((m) => m < 30 ? m + 10 : undefined)
// console.log(updaArr);

// -------------- Map with Filter ----------------

// let numbers = [10 , 20 , 30 , 40] 

// let CurrArr = numbers.map((m) => m)
// console.log(CurrArr);

// let updaArr = numbers.filter((m) => m < 30).map((m) => m + 10)
// console.log(updaArr);

// -------------- Custom Map ----------------

// let numbers = [10 , 20 , 30 , 40]
// console.log(numbers)

// console.log("=============")

// function myMap(array , callback) {

//     let copyArr = []

//     for (let i = 0; i < numbers.length; i++) {
//         copyArr.push(callback(array[i] , i , array))
//     }
    
//     return copyArr
// }
// let res = myMap(numbers , (m) => m < 30 ? m + 10 : undefined)
// console.log(res);

// console.log("=============")

// let updaArr = numbers.map((m) => m < 30 ? m + 10 : undefined)
// console.log(updaArr);

// --------------- Custom Filter ---------------

// let numbers = [10 , 20 , 30 , 40]

// function myFilter(array , callback) {

//     let copyArr = []

//     for (let i = 0; i < array.length; i++) {

//         let val = callback(array[i] , i , array)
        
//         if (val) {
//             copyArr.push(array[i])
//         }

//     }

//     return copyArr
// }

// let res = myFilter(numbers , (m) => m < 30)
// console.log(res)

// console.log("=====================");

// let updatedArray = numbers.filter((m) => m < 30).map((m) => m + 10)
// console.log(updatedArray)

// ------------------------------

// let marks = [10 , 20 , 30 , 40 , 50]

// let updatedArr1 = marks.map( (m) => m < 30 ? m + 10 : undefined )
// console.log(updatedArr1);

// console.log("================================================");

// let result = [
//   { team: "A", score: 50 },
//   { team: "B", score: 70 },
//   { team: "C", score: 80 },
//   { team: "D", score: 90 },
// ];

// let res = result.reduce((acc , curr) => acc + curr.score ,0)
// console.log(res);

// console.log("================================================");

// let colors = [true , false , true , true , false , true]

// let res = colors.reduce((acc , curr) => {

//     acc[curr] = (acc[curr] || 0) + 1
//     return acc

// } ,{})
// console.log(res)

// console.log("================================================");

// let numbers = [4 , 2 , 5 , 1 , 3]
// let upNum = numbers.sort((a , b) => a - b)

// console.log( "Sorted Numbers :" , upNum);

// console.log("================================================");

// let numbers = [4 , 2 , 5 , 1 , 3]
// let upNum = numbers.find(m => m == 1)

// console.log( "Founded Numbers :" , upNum);

// console.log("================================================");


// let statu = [true , false , true , true , false]
// let res = statu.sort((a , b) => (a === true ? -1 : 1))

// console.log(res);

// console.log("================================================");

// let names = ["ali" , "rehman" , "faizan" , "zubair"]
// let res = names.sort()

// console.log(res);

// console.log("================================================");

// let names = ["Ali" , "rehman" , "faizan" , "Zubair"]
// console.log(names);

// let res = names.sort((a , b) => a.toLocaleLowerCase().localeCompare (b.toLocaleLowerCase()))
// console.log(res);

// console.log("================================================");

// let names = "ali"
// names[0] = "w"

// console.log(names);

// console.log("================================================");

// let arr1 = [1, 2 , 3]
// let arr2 = arr1
// arr2[0] = 11

// console.log(arr1);
// console.log(arr2);

// console.log("================================================");

// let a = 10
// let b = a
// b = 20

// console.log(a);
// console.log(b);

// console.log("================================================");

// let st1 = {name : "ali"}
// let st2 = st1

// st2.name = "ahmed"

// console.log(st1);
// console.log(st2);

// console.log("================================================");

// let st1 = {name : "ali" , age : 10}
// let st2 = {...st1}

// st2.name = "ahmed"
// st2.age = 20

// console.log(st1);
// console.log(st2);

// console.log("================================================");

// let st1 = {name : "ali" , age : 10 , No : 10}
// let st2 = {...st1 , age : st1.age + 2 , No : st1.No + 2}

// console.log(st1);
// console.log(st2);

// console.log("================================================");

// const p1 = {
//   id: 101,
//   title: "mobile",
//   stock: 3
// };

// const {id , title , ...other} = p1
// console.log("id : " , id);
// console.log("title : " , title);
// console.log("others : " , other);

// let {id , title : heading = title , stock : quantity = stock} = p1
// console.log(id , heading , quantity);

// console.log("================================================");

const arr = [1 , 2 , 3 , 4 , 5]
// const [a , b , c , d = 0] = arr

// console.log(arr);
// console.log(a , b , c , d)

// const [a , , c] = arr
// console.log(a , c);

// const [a , b , ...other] = arr
// console.log("a : " , a);
// console.log("b : " , b);
// console.log("others : " , other);

// console.log("================================================");