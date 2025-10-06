//    Data Check
//      First  
// var arr = ['Salman','Noman','Irfan','Farhan','Furqan','Subhan']
// var userinput = prompt('No.1 Enter Name [First Letter Capital]')
// alert(arr.indexOf(userinput))

//      Second 
// var arr = ['Nine','Matric']
// var userinput = prompt('No.2 Enter Class [ Nine | Matric ]')
// alert(arr.indexOf(userinput))

//      Third
// var arr = ['Private School','Government School']
// var userinput = prompt('No.3 Enter School [ Private School | Government School ]')
// alert(arr.indexOf(userinput))


//   charAt()
//  var names = 'STUDENT'
// document.write(names.charAt(2))


//  Math  [1,2,3,4]

//  Math.round()  [1]
// var perc = 75.2
// document.write(Math.round(perc))

//  Math.ceil()  [2]
// var perc = 75.2
// document.write(Math.ceil(perc))

//  Math.floor()  [2]
// var perc = 75.9
// document.write(Math.floor(perc))

//  Math.random()  [2]
// var perc = 75.1
// document.write(Math.random * 1,2)s


//  Toss Game
// First put one name
// Second put second name
// var player1 = prompt('Enter Player Name 1')
// var player2 = prompt('Enter Player Name 2')

// var toss = Math.floor() * 2

// if(toss == 0){
// alert(player1+' have win Toss')
// }

// else{
// alert(player2+' have win Toss')
// }


// Heads-Tails Game
// var player1 = prompt('Enter Player Name 1')
// var player2 = prompt('Enter Player Name 2')
// alert(player1+' have Tails'+' | '+player2+' have Heads')

// var toss = Math.floor() * 2

// if(toss == 0){
// alert(player1+' [ Tails ] win')
// }

// else{
// alert(player2+'  [ heads ] win')
// }


//    upper|lower
// var name1 = 'ali'
// document.write(name1.toUpperCase()) 
//             OR
// document.write(name1.toLowerCase())


// var pro = prompt('Enter City Name')

// var pro1 = pro.slice(0,1).toUpperCase
// var pro2 = pro.slice(1).toLowerCase

// var res = pro1 + pro2

// console.log(res) 


//   Infinite Loop
// for(var i = 1; i>0; i++){
//     document.write(i)
// }


//   Function 1[Addition]
// function Subt(x=2,y=2,z=2){
    // return x + y + z
// }
// alert(Subt(10,5,1))


//   Function 2[Subtraction]
// function Subt(x=2,y=2,z=2){
    // return x - y - z
// }
// alert(Subt(10,5,1))


// function fun1(){
// document.getElementById('ab').innerHTML = 'heloo'
// }

// function fun1(){
// document.getElementById('para').innerHTML = 'Lorem ipsum dolor sit elit.' 
// document.getElementById('anc').style.display = 'none'
// }


//    Set Interval [1]
// setInterval(function(){
// document.write('Hello')
// },1000)

//    set interval [2]
// function timer(){
// document.write('Hello')
// }
// setInterval(timer,500)


//    Set Timeout
// setTimeout(function(){
// document.write('Hello')
// },2000)


//------- STOP WATCH ---------
// var hour = 0
// var minute = 0
// var second = 0
// var millisecond = 0

// var gethour = document.getElementById('hours')
// var getmin = document.getElementById('minutes')
// var getsec = document.getElementById('seconds')
// var getmilli = document.getElementById('milliseconds')
// var interval;

// function start(){
//     interval = setInterval(function(){
//         millisecond++
//         getmilli.innerHTML = millisecond
        
//         if(millisecond>=100){
//         second++
//         getsec.innerHTML = second
//         millisecond = 0
//         }
//         else if(second >= 59){
//         minute++
//         getmin.innerHTML = minute
//         second = 0
//         }
//         else if(minute >= 59){
//         hour++
//         gethour.innerHTML = hour
//         minute = 0
//         }
//     },10)
//     document.getElementById('disable1').disabled = true
// }

// function stop(){
// clearInterval(interval)
// document.getElementById('disable1').disabled = false
// }

// function reset(){
// hour = 0
// minute = 0
// second = 0
// millisecond = 0
// gethour.innerHTML = hour
// getmin.innerHTML = minute
// getsec.innerHTML = second
// getmilli.innerHTML = millisecond
// }

//    TO-DO Application

//    First Method
// function meth1(){
// var a = document.getElementById('inp')
// var b = a.getAttribute('name')
// console.log(b);
// }

//    Second Method
// function meth2(){
// var a = document.getElementById('inp')
// var b = a.hasAttribute('name')
// console.log(b);
// }

//    Second Method
// function meth3(){
// var a = document.getElementById('inp')
// var b = a.setAttribute('class','abc')
// console.log(b);
// }

// var getul = document.getElementById('ul')

// function sending(){
// var a      = document.getElementById('inp')
// var li     = document.createElement('li')
// var litext = document.createTextNode(a.value)
// li.appendChild(litext)
// getul.appendChild(li)

// }