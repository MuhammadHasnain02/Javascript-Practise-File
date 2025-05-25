// <<<  Javascript Books Chapters  >>>

// -------------------------------------------------------------
// basic data types - (string, number, boolean, undefined, null)
// -------------------------------------------------------------

// 1
// var name = "ahmed";
// console.log(name)
// console.log(typeof name)
// console.log("==============");

// 2
// var age = 20;
// console.log(age)
// console.log(typeof age)
// console.log("==============");

// 3
// var isAdult = true;
// console.log(isAdult)
// console.log(typeof isAdult)
// console.log("==============");

// 4
// var x;
// console.log(x)
// console.log(typeof x)
// console.log("==============");

// 5
// var y = null;
// console.log(y)
// console.log(typeof y)
// console.log("==============");

// ------------------
// Chapter # 1 Alerts
// ------------------

// alert("Error! Please enter a valid password")
// alert("Welcome to JS Land... \nHappy Coding!")
// alert("Welcome to JS Land...")
// alert("Happy Coding!")
// alert("Hello... I can run JS through my web browser's console")

// ---------------------------------
// Chapter # 2 Variables for Strings
// ---------------------------------

// var myName = "Jhone Doe"
// var myAge  = "15 years old"
// var myData = "Certified Mobile Application Development"
// var email  = "example@example.com"
// var book   = "'A smarter way to learn JavaScript'"

// console.log(
//     typeof myName , 
//     typeof myAge  , 
//     typeof myData ,
//     typeof email  ,
//     typeof book
// );

// ---------------------------------
// Chapter # 3 Variables for Numbers
// ---------------------------------

// var age        = 15
// var visitTimes = 14
// var birthYear  = 2000

// console.log(
//     typeof age , 
//     typeof visitTimes  , 
//     typeof birthYear 
// );

// --------------------------------------------
// Chapter # 4 Variable Names Legal and Illegal
// --------------------------------------------

// Legal Variables
// var firstVariable = ""
// var first_variable= ""
// var $variable     = ""
// var variable12    = ""
// var $variable_1   = ""

// illegal Variables
// var 12variable = "" (cannot start with a number)
// var 123        = "" (only number is not allowed)
// var (variable) = "" ( [()] bracket is not allowed)
// var @variable  = "" (special characters [@,!,&,-] are not allowed)
// var if         = "" (reserved keyword)

// ------------------------------------------------
// Chapter # 5 Math Expressions: familiar operators
// ------------------------------------------------

// 1
// var a = 5;
// var b = 5;
// var sum = a + b;
// console.log(sum);

// 2
// var a = 5;
// var b = a;
// var sum = a + b;
// console.log(sum);

// 3
// var a = 4;
// var b = a + 2;
// var sum = a + b;
// console.log(sum);

// 4
// var a = 5;
// var b = 5;

// console.log("Add : " , a + b);
// console.log("Sub : " , a - b);
// console.log("Mul : " , a * b);
// console.log("Div : " , a / b);
// console.log("Mod : " , a % b);

// 5
// Operators Problems [BDMAS]
// console.log(2 * (4 + 10));
// console.log(2**4)
// console.log((2 + 10) * 2 ** 2 ** 2 + 4 / 2);
// console.log(12 * 2 ** 4 + 4 / 2);
// console.log(12 * 16 + 4 / 2);

// 6
// var a = 10;
// var b = "20";
// var c = "ahmed";

// console.log(a + b) // 1020
// console.log(a + Number(b)) // 30
// // Number() method : covert string to number ["1" => 1]
// console.log(a - b) // -10
// console.log(a * b) // 200
// console.log(a / b) // 0.5
// console.log(a * c) // NaN



// Task 1 (Basic Calculator)
// var num1 = Number(prompt("Enter any number used for all"))
// var num2 = Number(prompt("Enter any number used for all"))

// var add = num1 + num2
// var sub = num1 - num2
// var mul = num1 * num2
// var div = num1 / num2
// var mod = num1 % num2

// console.log(`1. Addition of ${num1} and ${num2} is ${add}`)
// console.log(`2. subtraction of ${num1} and ${num2} is ${sub}`)
// console.log(`3. Multiplication of ${num1} and ${num2} is ${mul}`)
// console.log(`4. Division of ${num1} and ${num2} is ${div}`)
// console.log(`5. Modulus of ${num1} and ${num2} is ${mod}`)

// Task 2 (Perc-Grade-check)
// var Studentname = +prompt ('Enter Studentname')
// var a = +prompt ('Enter English Mark')
// var b = +prompt ('Enter Urdu Mark')
// var c = +prompt ('Enter Islamiat Mark')
// var d = +prompt ('Enter Math Mark')
// var e = +prompt ('Enter PST Mark')

// var Total = (a+b+c+d+e)
// document.writeln('|Total = 600/ ')
// document.writeln(Total)

// var perc = (Total/500)*100
// document.writeln('|Percentage = ')
// document.writeln(perc)

// Task 3 (Calculator with Border)
// var num1 = +prompt("Enter any value 1")
// var num2 = +prompt("Enter any value 2")
// var add = num1 + num2
// var sub = num1 - num2
// var mul = num1 * num2
// var div = num1 / num2
// var mod = num1 % num2


// document.write(
//     "<table width='152px' border='1px'>"+
//     "<tr>"+
//     "<th>"+"ADDITION"+"</th>"
//     +"</tr>"+
//     "<tr>"+
//     "<td>"+add+"</td>"
//     +"</tr>"
//     +"</table>"+

//     "<table width='152px' border='1px'>"+
//     "<tr>"+
//     "<th>"+"SUBSTRACTION"+"</th>"
//     +"</tr>"+
//     "<tr>"+
//     "<td>"+sub+"</td>"
//     +"</tr>"
//     +"</table>"+

//     "<table width='152px' border='1px'>"+
//     "<tr>"+
//     "<th>"+"MULTIPLICATION"+"</th>"
//     +"</tr>"+
//     "<tr>"+
//     "<td>"+mul+"</td>"
//     +"</tr>"
//     +"</table>"+

//     "<table width='152px' border='1px'>"+
//     "<tr>"+
//     "<th>"+"DIVISION"+"</th>"
//     +"</tr>"+
//     "<tr>"+
//     "<td>"+div+"</td>"
//     +"</tr>"
//     +"</table>"+

//     "<table width='152px' border='1px'>"+
//     "<tr>"+
//     "<th>"+"MODULUS"+"</th>"
//     +"</tr>"+
//     "<tr>"+
//     "<td>"+mod+"</td>"
//     +"</tr>"
//     +"</table>"
// )

// --------------------------------------------------
// Chapter # 6 Math Expressions: unfamiliar operators
// --------------------------------------------------

// 1
// let a = 2
// let res1 = a++
// console.log("Post-Increment" , res1);
// let res2 = ++a
// console.log("Pre-Increment"  , res2);

// 2
// let b = 2
// let res3 = b--
// console.log("Pre-Decrement" , res3);
// let res4 = --b
// console.log("Post-Decrement"  , res4);

// 3
// var num1 = 6
// var num2 = 3
// var res = num1++ + num1++ + ++num2 + num2++ + num1++
//  //         6    +   7    +    5   +   3    +   7 + 1
// //                29
// document.write(res)

// 4
// var a = 4
// var b = 2
// var c = 10
// var res = a++ + ++a - --b + c++ + c++ + ++a + a
//         4  +  6  -  1  +  10 +  11 +  7  + 7
//                   9    +   35
//                        44
// document.write(res)

// 5
// var y = 10
// var u = 5
// var w = 2
// var res = y - w * (y + w) + y
// //            -4
// document.write(res)

// ---------------------------------------------------
// Chapter # 7 Math Expressions: eliminating ambiguity
// ---------------------------------------------------

// console.log(2 * (4 + 10));
// console.log(2**4)
// console.log((2 + 10) * 2 ** 2 ** 2 + 4 / 2);
// console.log(12 * 2 ** 4 + 4 / 2);
// console.log(12 * 16 + 4 / 2);

// --------------------------------------
// Chapter # 8 Concatenating text strings
// --------------------------------------

// let firstName = "John"
// let lastName  = "Doe"

// console.log(firstName + " " + lastName);

// -------------------
// Chapter # 9 Prompts
// -------------------

// 1
// prompt("Hello...")
// prompt("How Are you ?")

// 2
// var name = prompt("Please enter your name");
// var age = prompt("Please enter your age");

// console.log(typeof name);
// alert("Your name is " + name);

// console.log(typeof age);
// alert("Your age is " + (Number(age) + 10));

// 3
// let userNum1 = +prompt("Enter first value")
// let userNum2 = +prompt("Enter Second value")
// // + : convert string to number ["1" => 1]

// console.log(userNum1 + userNum2);
// // console.log(userNum1 - userNum2);
// // console.log(userNum1 * userNum2);
// // console.log(userNum1 / userNum2);
// // console.log(userNum1 % userNum2);

// --------------------------
// Chapter # 10 if statements
// --------------------------

// 1 (syntax)
// if () {}

// 2
// let a = 12
// let b = 10

// if (a > b) {
//     console.log("A is greater than B");
// }
// else {
//     console.log("A is less than B");
// }

// 3 (Task)
// link : https://github.com/MuhammadHasnain02/MWD-JS-Assign-2

// ---------------------------------
// Chapter # 11 Comparison operators
// ---------------------------------

// 1 (conditional statement)
// var x = true;
// if (x) {
//   console.log("TRUE");
// }
// else {
//   console.log("FALSE");
// }

// 2 (> = Greater than operator) 
// let a = 12
// let b = 10

// if (a > b) {
//     console.log("A is greater than B");
// }
// else {
//     console.log("A is less than B");
// }

// 3 (< = Less than operator) 
// let a = 12
// let b = 10

// if (a < b) {
//     console.log("A is greater than B");
// }
// else {
//     console.log("A is less than B");
// }

// 4 (>= = Greater than equal to operator) 
// let a = 10
// let b = 10

// if (a >= b) {
//     console.log("A is greater than B");
// }
// else {
//     console.log("A is less than B");
// }

// 5 (<= = Less than equal to operator) 
// let a = 10
// let b = 10

// if (a <= b) {
//     console.log("A is greater than B");
// }
// else {
//     console.log("A is less than B");
// }

// 6 (Equal to operator) 
// let a = 10
// let b = 10

// if (a == b) {
//     console.log("A is equal to B");
// }
// else {
//     console.log("A is not equal to B");
// }

// 7 (Not Equal to operator) 
// let a = 12
// let b = 10

// if (a != b) {
//     console.log("A is Not equal to B");
// }
// else {
//     console.log("A is Equal to B");
// }

// 8 (Not Equal to Equal to operator)
// let a = 10
// let b = "10"
// !== = value and type check

// if (a !== b) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// 9 (lose equality)
// let a = 10
// let b = "10"
// // [==] = only value check

// if (a == b) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// 10 (strict equality)
// let a = 10
// let b = "10"
// // [===] = value and type check

// if (a === b) {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// ---------------------------------------------
// Chapter # 12 if , else and else if statements
// ---------------------------------------------

// All Exercises link : https://github.com/MuhammadHasnain02/MWD-JS-Assign-2

// ---------------------------------------
// Chapter # 13 Testing sets of conditions
// ---------------------------------------

// 1 (logical operators)
// !   not
// ||  OR
// &&  AND

// let condition = true
// console.log(!condition);

// var name = "ahmed";
// var marks = 60;

// if (name === "ahmed" || marks >= 60) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// if (name === "ahmed" && marks >= 60) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// 2
// let email = "abc@gmail.com"
// let passw = "12345"

// if (email = "abc@gmail.com" && passw == "12345") {
//     console.log("You are successfully login");
// }
// else {
//     console.log("Your Email or password is wrong");
// }

// 3
// All Exercises link : https://github.com/MuhammadHasnain02/MWD-JS-Assign-2

// ---------------------------------
// Chapter # 14 if statements nested
// ---------------------------------

// 1
// var userValue = prompt("Enter number")

// if(userValue > 0){
//     alert("The numer is positive")
// }
// else if(userValue < 0){
//     alert("The numer is negative")
// }
// else{
//     alert("The numer is zero")
// }

// 2
// if(perc >= 80){
// console.log('|Grade A1|')
// }
// else if(perc >= 70){
// console.log('|Grade A|')
// }
// else if(perc >= 60){
// console.log('|Grade B|')
// }
// else if(perc >= 50){
// console.log('|Grade C|')
// }
// else if(perc >= 40){
// console.log('|Grade D|')
// }
// else{
// console.log('|Fail|')
// }

// All Exercises link : https://github.com/MuhammadHasnain02/MWD-JS-Assign-2

// -------------------
// Chapter # 15 Arrays
// -------------------

// 1 (syntax)
// let array = [Any Data (string , Number , Boolean etc)]

// 2
// var arr = ['Has','Ali',23,true]
// console.log(arr[0]+' '+arr[1])

// -------------------------------------------------
// Chapter # 16 Arrays: adding and removing elements
// -------------------------------------------------

// 1
// var arr = ['Ali' , 23 , true]
// arr.push('Hur')
// console.log(arr)

// 2
// var arr = ['Ali' , 23 , true]
// arr.pop()
// console.log(arr)

// 3
// var arr = ['Ali' , 23 , true]
// arr.unshift('hf')
// console.log(arr)

// 4
// var arr = ['Ali' , 23 , true]
// arr.shift()
// console.log(arr)

// -----------------------------------------------------------------
// Chapter # 17 Arrays: removing, inserting, and extracting elements
// -----------------------------------------------------------------

// 1 (Adding Index , deleting count and new string)
// var arr = ['Ali' , 23 , true]
// arr.splice(1 , 1) // starting and delete count
// // output ['Ali', true]
// console.log(arr);

// 2
// var arr = ['Ali' , 23 , true]
// arr.splice(1 , 1 , "hh") // starting , delete count and string
// // output ['Ali', 'hh', true]
// console.log(arr);

// 3 (copy array items)
// var arr = ['Ali' , 23 , true]
// let newArr = arr.slice(2 , 3) // starting and ending count
// // output [true]
// console.log(arr);
// console.log(newArr);

// ----------------------
// Chapter # 18 for loops
// ----------------------

// 1 (syntax)
// for ("initialized | condition | increment or decrement") {"body"}

// 2
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 3 Infinite Loop
// for (var i = 1; i > 0; i++) {
//     console.log(i);
// }

// 4 (Loop help print Table)
// let userTable = prompt("Enter Table Name")
// let userCount = prompt("Enter Table Count")

// for (let i = 0; i <= userCount; i++) {
//     console.log(`${userTable} * ${i} = ${userTable * i}`);
// }

// 5
// var userinput = prompt('Enter Country Name [First Letter Capital]')
// var arr  = ['Pakistan','India','China','Iran','Iraq']
// var match = false

// for (var i = 0; i < arr.length; i++) {

//     if(userinput.toLowerCase == arr[i].toLowerCase){
//         match = true
//         alert('Country Found')
//         break
//     }

// }
// if (match == false) {
//     alert('Country Not Found [Put Your Country in Code]')
// }

// -----------------------------------------------------------------
// Chapter # 19 for loops: flags, Booleans, array length, and breaks
// -----------------------------------------------------------------

// 1

// -----------------------------
// Chapter # 20 for loops nested
// -----------------------------

// 1
// for(var i = 1; i<=100; i=i+10){

//     for(var j=i; j<i+10; j++){
//     document.writeln(j+' ')

// }
// document.writeln('<br>')
// }

// ---------------------------------------
// Chapter # 21
// ---------------------------------------



// ---------------------------------------
// Chapter # 22
// ---------------------------------------



// ---------------------------------------
// Chapter # 23
// ---------------------------------------



// ---------------------------------------
// Chapter # 24
// ---------------------------------------



// ---------------------------------------
// Chapter # 25
// ---------------------------------------



// ---------------------------------------
// Chapter # 26
// ---------------------------------------



// ---------------------------------------
// Chapter # 27
// ---------------------------------------



// ---------------------------------------
// Chapter # 28
// ---------------------------------------



// ---------------------------------------
// Chapter # 29
// ---------------------------------------



// ---------------------------------------
// Chapter # 30
// ---------------------------------------



// ---------------------------------------
// Chapter # 31
// ---------------------------------------



// ---------------------------------------
// Chapter # 32
// ---------------------------------------



// ---------------------------------------
// Chapter # 33
// ---------------------------------------



// ---------------------------------------
// Chapter # 34
// ---------------------------------------



// ---------------------------------------
// Chapter # 35
// ---------------------------------------



// ---------------------------------------
// Chapter # 36
// ---------------------------------------



// ---------------------------------------
// Chapter # 37
// ---------------------------------------



// ---------------------------------------
// Chapter # 38
// ---------------------------------------



// ---------------------------------------
// Chapter # 39
// ---------------------------------------



// ---------------------------------------
// Chapter # 40
// ---------------------------------------



// ---------------------------------------
// Chapter # 41
// ---------------------------------------



// ---------------------------------------
// Chapter # 42
// ---------------------------------------



// ---------------------------------------
// Chapter # 43
// ---------------------------------------



// ---------------------------------------
// Chapter # 44
// ---------------------------------------



// ---------------------------------------
// Chapter # 45
// ---------------------------------------



// ---------------------------------------
// Chapter # 46
// ---------------------------------------



// ---------------------------------------
// Chapter # 47
// ---------------------------------------



// ---------------------------------------
// Chapter # 48
// ---------------------------------------



// ---------------------------------------
// Chapter # 49
// ---------------------------------------



// ---------------------------------------
// Chapter # 50
// ---------------------------------------



// ---------------------------------------
// Chapter # 51
// ---------------------------------------



// ---------------------------------------
// Chapter # 52
// ---------------------------------------



// ---------------------------------------
// Chapter # 53
// ---------------------------------------



// ---------------------------------------
// Chapter # 54
// ---------------------------------------



// ---------------------------------------
// Chapter # 55
// ---------------------------------------



// ---------------------------------------
// Chapter # 56
// ---------------------------------------



// ---------------------------------------
// Chapter # 57
// ---------------------------------------



// ---------------------------------------
// Chapter # 58
// ---------------------------------------



// ---------------------------------------
// Chapter # 59
// ---------------------------------------



// ---------------------------------------
// Chapter # 60
// ---------------------------------------



// ---------------------------------------
// Chapter # 61
// ---------------------------------------



// ---------------------------------------
// Chapter # 62
// ---------------------------------------



// ---------------------------------------
// Chapter # 63
// ---------------------------------------



// ---------------------------------------
// Chapter # 64
// ---------------------------------------



// ---------------------------------------
// Chapter # 65
// ---------------------------------------



// ---------------------------------------
// Chapter # 66
// ---------------------------------------



// ---------------------------------------
// Chapter # 67
// ---------------------------------------



// ---------------------------------------
// Chapter # 68
// ---------------------------------------



// ---------------------------------------
// Chapter # 69
// ---------------------------------------



// ---------------------------------------
// Chapter # 70
// ---------------------------------------



// ---------------------------------------
// Chapter # 71
// ---------------------------------------



// ---------------------------------------
// Chapter # 72
// ---------------------------------------



// ---------------------------------------
// Chapter # 73
// ---------------------------------------



// ---------------------------------------
// Chapter # 74
// ---------------------------------------



// ---------------------------------------
// Chapter # 75
// ---------------------------------------



// ---------------------------------------
// Chapter # 76
// ---------------------------------------



// ---------------------------------------
// Chapter # 77
// ---------------------------------------



// ---------------------------------------
// Chapter # 78
// ---------------------------------------



// ---------------------------------------
// Chapter # 79
// ---------------------------------------



// ---------------------------------------
// Chapter # 80
// ---------------------------------------



// ---------------------------------------
// Chapter # 81
// ---------------------------------------



// ---------------------------------------
// Chapter # 82
// ---------------------------------------



// ---------------------------------------
// Chapter # 83
// ---------------------------------------



// ---------------------------------------
// Chapter # 84
// ---------------------------------------



// ---------------------------------------
// Chapter # 85
// ---------------------------------------



// ---------------------------------------
// Chapter # 86
// ---------------------------------------



// ---------------------------------------
// Chapter # 87
// ---------------------------------------



// ---------------------------------------
// Chapter # 88
// ---------------------------------------



// ---------------------------------------
// Chapter # 89
// ---------------------------------------



// ---------------------------------------
// Chapter # 90
// ---------------------------------------


