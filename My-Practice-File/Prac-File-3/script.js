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

// let person = {
//   name: "ali",
//   age: 20,
// };

// console.log(person);
// console.log("======================");
// console.log(person.name)
// console.log(person["age"])
// console.log("======================");
// person.city = "Karachi"
// console.log(person);
// delete person.age
// console.log(person);
// console.log("======================");
// console.log("city" in person);
// console.log("country" in person);

// ------------------------------------

// let person = {
//     name: "ali",
//     age: 20,
    
//     isAdult: function (reqAge) {
//         person.age >= reqAge ? console.log(true) : console.log(false);
//     },
//     isAdmin() {
//         console.log(this.name);
//     }
// };

// person.isAdult(18)
// person.isAdmin()

// ------------------------------------

// let person = {
//     name: "ali",
//     age : 20,
//     city: "karachi"
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log("======================");
// console.log(Object.entries(person));
// console.log("======================");

// let obj1 = {val1 : "A"}
// let obj2 = {val2 : "B"}

// console.log(obj1);
// console.log(obj2);
// console.log("======================");
// let merged = Object.assign({},obj1,obj2)
// console.log(merged);
// console.log("======================");
// Object.seal(person)
// person.age = 22
// delete person.city
// console.log("person => " , person);
// console.log("======================");
// let lockObj = Object.freeze(person)
// person.age = 22
// console.log("person => " , person);

// ------------------------------------

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// let person1 = new Person("ali" , 20)
// person1.greet()
// console.log(person1);

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

// ------------------------------------

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

// ------------------------------------

// const obj1 = {
//     key1: "Key => 1",
//     key2: "Key => 2"
// }

// const obj2 = Object.create(obj1)
// obj2.key3 =  "Key3"

// console.log(obj1)
// console.log(obj2)
// console.log(obj2.key1)

// ------------------------------------

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


// let person = {
//   name: "Hasnain",
//   age: 22,
//   city: "Karachi"
// };// ------------------------------------

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

// ------------------------------------

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

// ------------------------------------

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

// ------------------------------------

// class Student {
    
//     constructor (name , roll) {
//         this.name   = name
//         this.rollNo = roll
//     }

//     dispStd() {
//         console.log(`Student : ${this.name} , Roll No. : ${this.rollNo}`);
//     }

// }

// let std1 = new Student("ali" , 10)
// console.log(std1);
// std1.dispStd()

// ------------------------------------

// class User {

//     constructor(name , email) {
//         this.name = name
//         this.email = email
//     }
//     login() {
//         console.log(`${this.name} has logged in`);
//     }
//     logout() {
//         console.log(`${this.email} has logged out`);
//     }
//     is18(yes_No) {
//         console.log(yes_No);
//     }

// }
// let newUser = new User("ali" , "ali@gmail.com")
// newUser.login()
// newUser.logout()
// newUser.is18(false)
// console.log(newUser);

// console.log("====================================");

// class Owner extends User{

//     constructor(name , email , isOwner) {
//         super(name , email)
//         this.isOwner = isOwner
//     }

// }
// let newOwner = new Owner("Boss" , "boss@gmail.com" , true)
// newOwner.login()
// newOwner.logout()
// newOwner.is18(true)
// console.log(newOwner);

// ------------------------------------

// class User {

//     constructor(name , email) {
//         this.name = name
//         this.email = email
//     }
//     login() {
//         console.log(`${this.name} has logged in`);
//         return this
//     }
//     logout() {
//         console.log(`${this.email} has logged out`);
//         return this
//     }
//     isOwner(yes_No) {
//         console.log("isOwner : " , yes_No);
//         return this
//     }

// }
// let newUser = new User("ali" , "ali@gmail.com")
// console.log(newUser);
// newUser.login().logout().isOwner(false)

// console.log("====================================");

// class Owner extends User{

//     constructor(name , email) {
//         super(name , email)
//     }

// }
// let newOwner = new Owner("Boss" , "boss@gmail.com")
// console.log(newOwner);
// newOwner.login().logout().isOwner(true)

// ------------------------------------

// class User {
//     constructor(name , email) {
//         this.name = name
//         this.email = email
//         this.score = 0
//     }
//     login() {
//         console.log(`${this.username} has logged in`);
//         return this
//     }

//     logout() {
//         console.log(`${this.username} has logged out`);
//         return this
//     }
//     incrScor() {
//         console.log(`Your current score is: ${this.score}`);
//         this.score++
//         return this
//     }
// }

// let user1 = new User("ali", "ali@gmail.com")
// let user2 = new User("mujtaba", "mujtaba@gmail.com")

// console.log("==================================");

// class Admin extends User {
//     constructor(name , email , role) {
//     super(name , email)
//         this.role = role
//     }
//     addUser(user) {
//         users.push(user)
//     }
//     deletUser(user) {
//         users = users.filter((usr) => usr.name !== user.name)
//     }
// }

// // Users Array
// let users = []
// // Users Array Before Added OR Delete User
// console.log(users);
// console.log("======================");

// let admin1 = new Admin("Boss", "boss@gmail.com" , "admin")
// console.log(admin1);
// console.log("======================");

// // Add User
// admin1.addUser(user1)
// admin1.addUser(user2)

// // Delete User
// admin1.deletUser(user1)
// admin1.deletUser(user2)

// // Users Array After Added OR Delete User
// console.log(users);

// ----------------- Product Billing App [Function Method] -------------------

// // Cart Constructor
// function Cart() {
//     this.item = []
// }

// // Add product to cart
// Cart.prototype.addProd = function (product) {
//     this.item.push(product)
// }

// // Calculate total price
// Cart.prototype.total = function () {
//     return this.item.reduce((sum , item) => sum + item.price , 0)
// }

// // Full Bill Discount
// Cart.prototype.fulBillDisc = function (percent) {
//     let fulBilPric = this.total()
//     return fulBilPric - (fulBilPric * percent / 100)
// }

// let cart = new Cart()

// // Product Constructor
// function Product(title , price) {
//     this.title = title
//     this.price = price

//     cart.addProd(this)
// }

// // Only One Product Discount
// Product.prototype.discount = function (percent) {
//     return this.price - (this.price * percent / 100)
// }

// // Products
// let prod1 = new Product("Mouse"   , 100)
// let prod2 = new Product("Mobile"  , 1000)
// let prod3 = new Product("Laptop"  , 2000)
// let prod4 = new Product("Computer", 3000)

// let buyItems = cart.item
// console.log("Cart Items:" , buyItems);

// let totalBill = cart.total()
// console.log("Total Price:", totalBill);

// let billDisc = cart.fulBillDisc(5)
// console.log("Discount Rate => " , billDisc);

// ----------------- Product Billing App [Class Method] -------------------

// Cart Constructor
class Cart {
    constructor() {
        this.items = []
    }

    // Add product in cart
    addProduct(product) {
        this.items.push(product)
    }

    // Calculate total price
    totalPrice() {
        return this.items.reduce((sum , item) => sum + item.price , 0)
    }

    // Calculate Total Bill
    totlBillDisc(percent) {
        let totlBill = this.totalPrice()
        return totlBill - (totlBill * percent / 100)
    }
}
// Add New Cart
let cart = new Cart()

// Product Constructor
class Product {

    constructor(title , price) {
        this.title = title
        this.price = price
        
        cart.addProduct(this)
    }
    
    // Per Product Discount
    prodDisc(percent) {
        return this.price - (this.price * percent / 100)
    }

}
// Products
let prod1 = new Product("Mouse"   , 100)
let prod2 = new Product("Mobile"  , 1000)
let prod3 = new Product("Laptop"  , 2000)
let prod4 = new Product("Computer", 3000)

let buyItems = cart.items
console.log("Cart Items:" , buyItems);

let totalBill = cart.totalPrice()
console.log("Total Price:", totalBill);

let billDisc = cart.totlBillDisc(10)
console.log("Discount Rate => " , billDisc);

// -------------------------------------

// crtBkAccBtn.addEventListener("click" , () => {

//     let accDiv = document.createElement("div")
//     accDiv.innerHTML +=
//     `
//         <p id="prntBalTxt">${accName.value} Current Balance : ${accAmount.value}</p>
//         <input type="number" id="inpVal">
//         <button id="depBtn">Deposit</button>
//         <button id="withDrawBtn">With Draw</button>
//         <br>
//     `
//     accName.value = ""
//     accAmount.value = ""
// })

// ------------------------------------



