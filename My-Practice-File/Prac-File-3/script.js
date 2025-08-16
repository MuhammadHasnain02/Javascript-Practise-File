// ------------------------------------
// let nameLeng = "Hasnain"
// console.log(nameLeng.length);

// let text = "Hello, Hasnain!"
// let part = text.slice(7 , 15)
// console.log(part);

// let text = "Hasnain!"
// let part = text.substring(3 , 8)
// console.log(part);
// ------------------------------------

// let sentence  = "I love JavaScript and JavaScript loves me.";
// let indexWord = sentence.indexOf("JavaScript")
// console.log(indexWord);

// let sentence  = "I love JavaScript and JavaScript loves me.";
// let indexWord = sentence.includes("JavaScript")
// console.log(indexWord);

// let sentence  = "I love JavaScript and JavaScript loves me.";

// console.log(sentence.startsWith("I"));
// console.log(sentence.endsWith("."));

// let sentence  = "I love JavaScript and JavaScript loves me.";
// console.log(sentence.lastIndexOf("and"));

// ------------------------------------

// let name = "Hasnain"
// let char = name.charAt(0)
// console.log(char);

// let word = "Hasnain"
// console.log(word[0]);

// let word = "Hasnain"
// let lastChar = word[word.length - 01]
// console.log(lastChar);

// ------------------------------------

// let sentence = "I love JavaScript"
// let newSente = sentence.replace("JavaScript" , "Food")
// console.log(sentence);
// console.log(newSente);

// let word = "banana"
// let newWord = word.replace("a" , "o")
// console.log(word);
// console.log(newWord);

// let word = "banana"
// let newWord = word.replaceAll("a" , "o")
// console.log(word);
// console.log(newWord);

// ------------------------------------

// let num = 2.4

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.random(num));

// let value = 2.468
// console.log(value.toFixed(1));

// ------------------------------------

// let num = Math.floor(Math.random() * 100) + 1
// console.log(num);

// function userRang(min , max) {
//     return Math.floor(Math.random * (min - max + 1)) + min
// }
// console.log(userRang(0 , 100));

// let dise = Math.floor(Math.random() * 6) + 1
// console.log(dise);

// let otp = Math.floor(1000 + Math.random() * 9000)
// console.log(otp);

// let gifts = ["Watch", "Book", "Perfume", "Bag", "Voucher"];
// let randGift = gifts[Math.floor(Math.random() * gifts.length)]
// console.log(randGift);

// ------------------------------------

// let str = "123";
// let num = parseInt(str);
// console.log(num);
// console.log(typeof num);

// let price = "99.99";
// let actual = parseFloat(price);
// console.log(actual);
// console.log(typeof actual);

// let price = 45.6789;
// let fixed = price.toFixed(2);
// console.log(fixed);
// console.log(typeof fixed);

// let num = 123.456;
// let result = num.toPrecision(4);
// console.log(result);

// let marks = 92.3786;
// let rounded = parseFloat(marks.toFixed(1));
// console.log(rounded);

// ------------------------------------


// let newDate = new Date()
// let date  = newDate.getDate()
// let month = newDate.getMonth()
// let year  = newDate.getFullYear()

// let formatted = `${date}:${month}:${year}`
// console.log(formatted);


// let newDate = new Date()
// let hours   = newDate.getHours()
// let minutes = newDate.getMinutes()
// let seconds = newDate.getSeconds()

// let formatted = `${hours}:${minutes}:${seconds}`
// console.log(formatted);

// ------------------------------------

// setInterval(function() {

//     let currDate = new Date()
//     let monthNam = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","oct","Nov","Dec"]

//     let date  = currDate.getDate()
//     let month = monthNam[currDate.getMonth()]
//     let year  = currDate.getFullYear()

//     let hours   = currDate.getHours()
//     let minutes = currDate.getMinutes()
//     let seconds = currDate.getSeconds()

//     let fullTimePrnt = `${date} - ${month} - ${year} | ${hours} : ${minutes} : ${seconds}`
//     console.log(fullTimePrnt);

//     document.getElementById("container").innerText = fullTimePrnt

// } , 1000)


// function convertTime(value){
//     let timeSplt = value.split(":")

//     if(timeSplt[0] > 12){
//         let convert1to12 = timeSplt[0] - 12;
//         return `${convert1to12}:${timeSplt[1]} PM`
//     }
//     else if(timeSplt[0] == 12){
//         return `${value} PM`
//     }
//     else{
//         return `${value} AM`
//     }
// }

// ------------------------------------

// let d = new Date("June 30, 2026");
// console.log(d);  // Output: Sat Jun 30 2035 ...

// let d = new Date(2035, 5, 30);  // Month is 0-based: 0 = Jan
// console.log(d);  // Output: Sat Jun 30 2035 ...

// let d = new Date("June 30, 2035 15:30:00");
// console.log(d);  // Output: Sat Jun 30 2035 15:30:00 ..

// let examDate = new Date(2025, 10, 15, 9, 30, 0);  // Nov 15, 2025 at 9:30 AM
// console.log("Exam starts on:", examDate);

// let today = new Date();
// let future = new Date("December 31, 2025");

// if (today < future) {
//   console.log("The future date is still to come.");
// } else {
//   console.log("The future date has passed.");
// }

// ------------------------------------

// let d = new Date();
// d.setFullYear(2026);
// console.log(d);  // Year is now 2026

// let d = new Date();
// d.setMonth(6);  // 6 means July
// console.log(d);  // Month is July

// // Step 1: Current date object
// let d = new Date();

// console.log("Original Date & Time:");
// console.log(d);

// // Step 2: Change all parts
// d.setFullYear(2030);       // Set year to 2030
// d.setMonth(6);             // Set month to July (6 = July)
// d.setDate(15);             // Set date to 15
// d.setHours(9);             // Set hour to 9 AM
// d.setMinutes(45);          // Set minutes to 45
// d.setSeconds(30);          // Set seconds to 30
// d.setMilliseconds(500);    // Set milliseconds to 500

// // Step 3: Show updated date and time
// console.log("\nUpdated Date & Time:");
// console.log("Date:", d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
// console.log("Time:", d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());

// ------------------------------------

// function prntMsg() {
//     let txtAr = document.getElementById("msg").value
//     console.log(txtAr);
//  Short Method [Create User]// ----------------- <<< OBJECTS >>> -------------------

// ----------------- CALL -------------------
// let user1 = {
//     name : "Ahmed",
//     age  : 18,
//     is18 : true,
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }
// let user2 = {
//     name : "Ali",
//     age  : 16,
//     is18 : false,
// }

// console.log("<< User 1 >>")
// user1.login()
// user1.logout()

// console.log("<< User 2 >>")
// user1.login.call(user2 , "C" , "D")
// user1.logout.call(user2 , "C" , "D")

// ---------------- APPLY --------------------
// let user1 = {
//     name : "Ahmed",
//     age  : 18,
//     is18 : true,
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }
// let user2 = {
//     name : "Ali",
//     age  : 16,
//     is18 : false,
// }

// console.log("<< User 1 >>")
// user1.login()
// user1.logout()

// console.log("<< User 2 >>")
// user1.login.apply(user2 , ["C" , "D"])
// user1.logout.apply(user2 , ["C" , "D"])

// ---------------- BIND --------------------
// let user1 = {
//     name : "Ahmed",
//     age  : 18,
//     is18 : true,
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }
// let user2 = {
//     name : "Ali",
//     age  : 16,
//     is18 : false,
// }

// console.log("<< User 1 >>")
// user1.login()
// user1.logout()

// console.log("<< User 2 >>")
// let fn1 = user1.login.bind(user2 , "C" , "D")
// let fn2 = user1.logout.bind(user2 , "C" , "D")
// fn1()
// fn2()

// --------------- Short Method [Create User] ---------------------

// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------



// ------------------------------------

// let getData = (url , callBackFun) => {
//     let req = new XMLHttpRequest()

//     req.addEventListener("readystatechange" , () => {

//         if (req.readyState === 4 && req.status === 200) {
//             let data = JSON.parse(req.responseText)
//             callBackFun(data , null)
//         }
//         else if (req.readyState === 4) {
//             callBackFun(null , "error")
//         }

//     })

//     req.open("GET" , url)
//     req.send()
// }

// getData("https://jsonplaceholder.typicode.com/todos/1" , (data , err) => {
//   console.log("todo -> 1", data);
// })

// getData("https://jsonplaceholder.typicode.com/todos/2" , (data , err) => {
//   console.log("todo -> 2", data);
// })

// getData("https://jsonplaceholder.typicode.com/todos/3" , (data , err) => {
//   console.log("todo -> 3", data);
// })

// ------------------------------------

// Promises
// let Promises = new Promise((resolve , reject) => {
    
//     let request = true
//     request ? resolve("Operation successful!") : reject("Operation failed.")
    
// })

// Promises.then((result) => console.log(result)).catch((error) => console.log(error))

// ------------------------------------

// let getData = (url) => {

//     return new Promise((resolve , reject) => {

//         let req = new XMLHttpRequest()
    
//         req.addEventListener("readystatechange" , () => {
    
//             if (req.readyState === 4 && req.status === 200) {
//                 let data = JSON.parse(req.responseText)
//                 resolve(data)
//             }
//             else if (req.readyState === 4) {
//                 reject("error")
//             }
    
//         })
    
//         req.open("GET" , url)
//         req.send()
//     })

// }

// getData("https://jsonplaceholder.typicode.com/todos/1")
// .then((data) => {
//     console.log("todo 1 ->" , data)

//     return getData("https://jsonplaceholder.typicode.com/todos/2")
// })
// .then((data) => {
//     console.log("todo 2 ->" , data)

//     return getData("https://jsonplaceholder.typicode.com/todos/3")
// })
// .then((data) => {
//     console.log("todo 3 ->" , data)

// })
// .catch((err) => console.log(err))

// ------------------------------------

// let getData = (url , callBackFun) => {

//     let request = new XMLHttpRequest()

    
//     request.addEventListener("readystatechange" , () => {
        
//         if (request.readyState === 4 && request.status === 200) {
//             let data = JSON.parse(request.responseText)
//             callBackFun(data , null)
//         }
//         else if (request.readyState === 4) {
//             callBackFun(null , err)
//         }
        
//     })
    
//     request.open("GET" , url)
//     request.send()
// }

// getData("https://jsonplaceholder.typicode.com/todos/1" , (data , err) => {
//     console.log(data);
// })
// getData("https://jsonplaceholder.typicode.com/todos/2" , (data , err) => {
//     console.log(data);
// })

// ------------------------------------

// let getData = (url) => {

//     let request = new XMLHttpRequest()

//     return new Promise ((resolve , reject) => {
    
//         request.addEventListener("readystatechange" , () => {

//             if (request.readyState === 4 && request.status === 200) {
//                 let data = JSON.parse(request.responseText)
//                 resolve(data)
//             }
//             else if (request.readyState === 4) {
//                 reject("error")
//             }

//         })
    
//         request.open("GET" , url)
//         request.send()
//     })
// }

// getData(("https://jsonplaceholder.typicode.com/todos/1"))

// .then((data) => {
//     console.log("data 1 => " + data)

//     return getData("https://jsonplaceholder.typicode.com/todos/2")
// })
// .then((data) => {
//     console.log("data 1 => " + data);
// })

// .catch((err) => {
//     console.log(err);
// })

// ------------------------------------

// fetch("https://jsonplaceholder.typicode.com/todos")

// .then((responce) => {
//     return responce.json()
// })

// .then((data) => {

//     data.forEach(i => {

//         if (i.completed === true) {
//             document.getElementById("trueDet").innerText += `ID : ${i.id} , Completed : ${i.completed} \n`
//         }
//         else {
//             document.getElementById("falseDet").innerText += `ID : ${i.id} , Completed : ${i.completed} \n`
//         }

//     });

// })

// ------------------------------------

// API URL: https://jsonplaceholder.typicode.com/todos
// Requirements
// 1- Use fetch() to get data from the API.
// 2- Map and display at least 10 TODO items.
// 3- Completed items should have a line-through style.
// 4- Use semantic HTML and clean CSS.

// =======================================================

// fetch("https://jsonplaceholder.typicode.com/todos")

// .then((responce) => {

//     if (!responce.ok) {
//         throw new Error("Error")
//     }
//     return responce.json()

// })

// .then((data) => {

//     console.log(data);

//     let todosTable = document.getElementById("todosTab")

//     data.slice(0 , 10).forEach(todo => {

//         let tr = document.createElement("tr")

//         if (todo.completed === true) {
//             tr.classList.add("completed")
//         }
        
//         tr.innerHTML =
//         `
//         <td>${todo.userId}</td>
//         <td>${todo.id}</td>
//         <td id ="title">${todo.title}</td>
//         <td>${todo.completed === true ? '✔️' : '❌'}</td>
//         `
        
//         todosTable.appendChild(tr)

//     });

// })

// ---------------- API data with Search --------------------

// fetch("https://jsonplaceholder.typicode.com/todos")

// .then((responce) => {

//     if (!responce.ok) {
//         throw new Error("Error")
//     }
//     return responce.json()

// })

// .then((data) => {

//     let todosTable = document.getElementById("todosTab")

//     data.slice(0 , 10).forEach(todo => {

//         let tr = document.createElement("tr")

//         if (todo.completed === true) {
//             tr.classList.add("completed")
//         }
        
//         tr.innerHTML =
//         `
//         <td>${todo.userId}</td>
//         <td>${todo.id}</td>
//         <td id ="title">${todo.title}</td>
//         <td>${todo.completed ? '✔️' : '❌'}</td>
//         `
        
//         todosTable.appendChild(tr)

//     });

// })

// let searchInp = document.getElementById("searchWork")

// searchInp.addEventListener(("keyup") , () => {
    
//     let txtSpacCut = searchInp.value.trim()
//     let tableItems = document.querySelectorAll("#todosTab tr")

//     for (let i = 1; i < tableItems.length; i++) {

//         let tableItem = tableItems[i];
//         let emptyCol = tableItem.children[1].textContent.trim();

//         if (txtSpacCut === emptyCol) {
//             tableItem.style.backgroundColor = "#e6ffe6";
//             tableItems[1].parentNode.insertBefore(tableItem, tableItems[1]);
//         }
//         else {
//             tableItem.style.backgroundColor = "";
//         }
//     }

// })

// ========================================================

// ----------------- <<< OBJECTS >>> -------------------

// ----------------- CALL -------------------
// let user1 = {
//     name : "Ahmed",
//     age  : 18,
//     is18 : true,
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }
// let user2 = {
//     name : "Ali",
//     age  : 16,
//     is18 : false,
// }

// console.log("<< User 1 >>")
// user1.login()
// user1.logout()

// console.log("<< User 2 >>")
// user1.login.call(user2 , "C" , "D")
// user1.logout.call(user2 , "C" , "D")

// ---------------- APPLY --------------------
// let user1 = {
//     name : "Ahmed",
//     age  : 18,
//     is18 : true,
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }
// let user2 = {
//     name : "Ali",
//     age  : 16,
//     is18 : false,
// }

// console.log("<< User 1 >>")
// user1.login()
// user1.logout()

// console.log("<< User 2 >>")
// user1.login.apply(user2 , ["C" , "D"])
// user1.logout.apply(user2 , ["C" , "D"])

// ---------------- BIND --------------------
// let user1 = {
//     name : "Ahmed",
//     age  : 18,
//     is18 : true,
//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }
// }
// let user2 = {
//     name : "Ali",
//     age  : 16,
//     is18 : false,
// }

// console.log("<< User 1 >>")
// user1.login()
// user1.logout()

// console.log("<< User 2 >>")
// let fn1 = user1.login.bind(user2 , "C" , "D")
// let fn2 = user1.logout.bind(user2 , "C" , "D")
// fn1()
// fn2()

// --------------- Joining Objects ---------------------

// const obj1 = {
//     key1: "Key1",
//     key2: "Key2"
// }

// const obj2 = {
//     key3: "Key3",
// }

// console.log(obj1)
// console.log(obj2)
// console.log(obj2.key1)

// ----------------------

// const obj1 = {
//     key1: "Key => 1",
//     key2: "Key => 2"
// }

// const obj2 = Object.create(obj1)
// obj2.key3 =  "Key3"

// console.log(obj1)
// console.log(obj2)
// console.log(obj2.key1)

// --------------- Short Method [Create User] ---------------------

// let users = []

// let userMethods = {

//     login() {
//         console.log(`${this.name} has logged in`);
//     },
//     logout() {
//         console.log(`${this.name} has logged out`);
//     }

// }

// function createUser(Username , Useremail) {
//     let user = Object.create(userMethods)
//     user.name  = Username
//     user.email = Useremail
    
//     users.push(user)
//     return user
// }

// let user1 = createUser("Ali" , "Ali@gmail.com")
// let user2 = createUser("Ahmed" , "Ahmed@gmail.com")
// let user3 = createUser("Zubair" , "Zubair@gmail.com")

// function getUserName(index = 0) {
//     console.log(users[index].name);
// }
// function getUserEmail(index = 0) {
//     console.log(users[index].email);
// }
// function getAllUserNames() {
//     users.forEach(user => {
//         console.log(user.name);
//     })
// }
// function getAllUserEmails() {
//     users.forEach(user => {
//         console.log(user.email);
//     })
// }

// getUserName(1)
// console.log("--------------------------");
// getUserEmail(1)
// console.log("--------------------------");
// getAllUserNames()
// console.log("--------------------------");
// getAllUserEmails()

// --------------- Modern Method [Create User] ---------------------

// ------------ 1 --------------

// function createUser(Username , Useremail) {
//     let user = Object.create(createUser.prototype)
//     user.name  = Username
//     user.email = Useremail
    
//     return user
// }

// createUser.prototype.login = function () {
//     console.log(`${this.username} has logged in`);
// }
// createUser.prototype.logout = function () {
//     console.log(`${this.username} has logged out`);
// }

// let user1 = createUser("Ali" , "Ali@gmail.com")
// console.log(user1);

// ------------ 2 --------------

// function CreateUser(username, email) {
//     this.username = username
//     this.email = email
// }

// CreateUser.prototype.login = function () {
//     console.log(`${this.username} has logged in`);
// }

// CreateUser.prototype.logout = function () {
//     console.log(`${this.username} has logged out`);
// }

// const user1 = new CreateUser("Talha", "Talha@gmail.com")
// console.log(user1)

// ------------ 3 --------------

// class User {

//     constructor(username, email) {
//         this.username = username
//         this.email = email
//     }

//     login() {
//         console.log(`${this.username} has logged in`);
//     }

//     logout() {
//         console.log(`${this.username} has logged out`);
//     }

// }

// const userOne = new User('Ahmed', "Ahmed@gmail.com")
// // userOne.login()
// console.log(userOne)