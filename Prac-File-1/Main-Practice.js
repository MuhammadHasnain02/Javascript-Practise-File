// alert('hello pak')


// var a ='hello'
// document.write (a)


// var a = "2"
// var b = 10
// document.write(a - b)


// document.write("<h1>hello world</h1>")


// var num1 = 10
// var num2 = 20
// document.write(num1+num2)


// var a = +prompt("Enter any value 1")
// var b = +prompt("Enter any value 2")
// document.write(a + b)


//    Calculator 
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


// var a = 2
// var b = 4
// var res = b++ + b + ++a
// document.write(res)


// var num1 = 6
// var num2 = 3
// var res = num1++ + num1++ + ++num2 + num2++ + num1++
//  //         6    +   7    +    5   +   3    +   7 + 1
// //                29
// document.write(res)


// var num1 = 6
// var num2 = 3
// var num3 = 10
// var res = --num1 - --num2 + num3++ + num3-- + num1
// //            5  -   2    +   10   +   11   +  5
// //                  3     +   26
// //                        29
// document.write(res)


// var a = 4
// var b = 2
// var c = 10
// var res = a++ + ++a - --b + c++ + c++ + ++a + a
//         4  +  6  -  1  +  10 +  11 +  7  + 7
//                   9    +   35
//                        44
// document.write(res)


// var y = 10
// var u = 5
// var w = 2
// var res = y - w * (y + w) + y
// //            -4
// document.write(res)


// var email ="ABC"
// var password ="ABC"

// if(email == password){
// document.write('Verified')
// }
// else{
// document.write('Invalid')
// }


//   Email-Password-Check
// var email = prompt('Enter Email')
// var password = prompt('Enter Password')

// if(email == 'Has' && password == '2024'){
// document.write('Verified')
// }
// else{
// document.write('Invalid')
// }


// var email = prompt('Enter Email')
// var password = prompt('Enter Password')

// if(email == 'Has' || password == '2024'){
// document.write('Verified')
// }
// else{
// document.write('Invalid')
// }


//   Perc-Grade-check
// var Studentname = +prompt ('Enter Studentname')
// var a = +prompt ('Enter English Mark')
// var b = +prompt ('Enter Urdu Mark')
// var c = +prompt ('Enter Islamiat Mark')
// var d = +prompt ('Enter Math Mark')
// var e = +prompt ('Enter PST Mark')

// var Total = (a+b+c+d+e)
// document.write('|Total = 600/ ')
// document.write(Total)


// var perc = (Total/500)*100
// document.write('|Percentage = ')
// document.write(perc)

// if(perc >= 80){
// document.write('|Grade A1|')
// }
// else if(perc >= 70){
// document.write('|Grade A|')
// }
// else if(perc >= 60){
// document.write('|Grade B|')
// }
// else if(perc >= 50){
// document.write('|Grade C|')
// }
// else if(perc >= 40){
// document.write('|Grade D|')
// }
// else{
// document.write('|Fail|')
// }


// var arr = ['Hasn','Ali',23,true]
// document.write(arr[0]+' '+arr[2])


// var arr = ['Hasn','Ali',23,true]
// arr.push('Hur')
// document.write(arr)


// var arr = ['Hasn','Ali',23,true]
// arr.pop()
// document.write(arr)


// var arr = ['Hasn','Ali',23,true]
// arr.unshift('hf')
// document.write(arr)


// var arr = ['Hasn','Ali',23,true]
// arr.shift()
// document.write(arr)


// var arr = [1,2,3,4,5]
// arr.splice(0,1,'11')
// document.write(arr)


// var arr = [1,2,3,4,5]
// var arr2 = arr.slice(0,1)
// document.write(arr2)


//   For Loop
// var i;
// for(i = 10; i>=1; i--){
// document.write(i+') HH <br>')
// }


//    TABLE
// var i;
// var userinput = +prompt ('Enter Any Table Name')
// var userinput2= +prompt ('Enter Value Stop Table')

// for( i=1; i<=userinput2; i++ )
// {
// document.write(userinput + ' * ' + i+ ' = ' + userinput*i + '<br>')
// }


// var arr = ['Has',1,2,3,4,5,6,7,8,9,10,'Hamza']
// for( var i = 0; i<arr.length; i++){
// document.write(arr[i]+'<br>')
// }


// Country|City|Area|Check
//     First
// var userinput = prompt('Enter Country Name [First Letter Capital]')
// var arr  = ['Pakistan','India','China','Iran','Iraq']
// var match = false

// for(var i = 0; i < arr.length; i++){

// if(userinput == arr[i]){
// match = true
// alert('Country Found')
// break
// }
    
// }
// if(match == false){
// alert('Country Not Found [Put Your Country in Code]')
// }

// //     Second
// var userinput = prompt('Enter City Name [First Letter Capital]')
// var arr2 = ['Karachi','Lahore','Islamabad','Peshawar','Quetta']
// var match2 = false

// for(var i = 0; i < arr2.length; i++){

// if(userinput == arr2[i]){
// match2 = true
// alert('City Found')
// break
// }

// }
// if(match2 == false){
// alert('City Not Found [Put Your City in Code]')
// }

// //     Third
// var userinput = prompt('Enter Area Name [First Letter Capital]')
// var arr3 = ['Defense','Nazimabad','Clifton','Bahria']
// var match3 = false

// for(var i = 0; i < arr3.length; i++){

// if(userinput == arr3[i]){
// match3 = true
// alert('Area Found')
// break
// }

// }
// if(match3 == false){
// alert('Area Not Found [Put Your Area in Code]')
// }


//     Counting
// for(var i = 1; i<=100; i=i+10){

//     for(var j=i; j<i+10; j++){
//     document.write(j+' ')

// }
// document.write('<br>')
// }
//             Finish File Go Next File