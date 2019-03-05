//question 1 -----------------

// var ans = [];
// var sum = 0;
//
// for (var i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         ans.push(i);
//         sum += i;
//     }
// }
//
// document.write(sum);
// document.write(ans);
//

// question 2 ------------- fibonacci

// function fib(n) {
//
// var arr = [1,2];
// var sum=3;
// var arrEven = [2];
// var sumEven = 0;
//  for (var i=2; i<n; i++) {
//
//     arr[i] = arr[i-2] + arr[i-1];
//     sum += arr[i];
//
//       if(arr[i] % 2 === 0) {
//         arrEven.push(arr[i]);
//         sumEven= 0
//              for(var x=0; x < arrEven.length; x++) {
//                sumEven += arrEven[x];
//              }
//
//       }
//
// }
// console.log(arr);
// console.log(sum);
// console.log(arrEven);
// console.log(sumEven);
// }
//
// console.log(fib(10));


 // ---------Prime number checking

// function isPrime(num) {
//   for (var i=2; i<num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//
//   }
//     return num > 1;
// }
// console.log(isPrime(7));


 // ---------Prime number checking

//-----------factorial

// function fac(num) {
//   var result = 1;
//   for(var i=1; i<=num; i++) {
//     result = result * i;
//   }
//   return result;
// }
//
// console.log(fac(4));


//............reverse string

// function rvr(str) {
//    return str.split('').reverse().join('');
// }
//
// console.log(rvr("tugce"));


// ----------------------Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
//
// function LetterChanges(str) {
//
//   str = str.trim().toLowerCase();
//   var len = str.length;
//   var newStr = '';
//
//   for (var i = 0; i < len; i++) {
//     if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
//       newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97)
//     }
//     else if (/[zdhnt]/.test(str[i])) {
//         newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
//     }
//     else {
//      newStr += str[i];
//     }
//   }
//   return newStr;
//
// }
//    console.log(LetterChanges("tugce"));

// -----------------Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
//
// function sumNum(num) {
//   var sum = 0;
//   for(var i=0; i<=num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumNum(6));


//-----------------Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
// var string = "hello this is a word";
//
// function cap(str) {
//   var words = str.split(" ");
//   var newWords = [];
//   for(i=0; i< words.length; i++){
//
//    newWords.push(words[i][0].toUpperCase() + words[i].substring(1))
//
//   }
//
//  return newWords.join(" ");
//
// }
//
// console.log(cap(string));

//-------------------Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.









//--------------------Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.


// function check(num1, num2) {
//   if(num2 > num1) {
//     return "true"
//   } else if (num2 == num1) {
//     return "-1";
//   } else {
//     return "false";
//   }
// }
//
// console.log(check(1, 1));

//---------------------Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.


//
// function convert(num) {
//    if(num > 60 && num < 120) {
//      return 1 + ":" + (num-60);
//    } else if ( num > 120 && num % 60 !== 0) {
//      return Math.round((num / 60)) + ":" + (num % 60);
//    } else if ( num < 60 ) {
//      return 0 + ":" + (num);
//    } else if ( num % 60 === 0) {
//      return (num/60) + ":" + 0;
//    }
// }
// console.log(convert(120));

//---------------------Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

//                          ASK THIS ONE , NOT DONE YET !!!!!!!!!!!!!!!!!!!!!!
// function func(str) {
//    var arr = str.split("");
//    var arrNew = [];
//    for (var i=0; i<arr.length; i++) {
//       // console.log(arr[i].charCodeAt());
//         arrNew.push(arr[i].charCodeAt());
//
//    }
//      // console.log(arrNew);
//
//           function sortNumber(x , y) {
//             return x-y;
//           }
//
//           arrNew.sort(sortNumber);
//           var arrLast = [];
//           arrLast.push(arrNew.join(","));
//           console.log(arrLast);
//
//           var result = String.fromCharCode.apply(String, arrLast);
//           console.log(result);
// }
//
// console.log(func("baydar"));

//--------------------------1. Write a JavaScript program to display the current day and time in the //following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// function time() {
//   var now = new Date();
//   var day = now.getDay();
//   var hours = now.getHours();
//   var min = now.getMinutes();
//   var second = now.getSeconds();
//   var days = ["sunday", "monday", "tuesday", "wednesday","thursday","friday","saturday"]
//   console.log("Today is " + days[now.getDay()]);
//   console.log("current time is : " + hours + " PM :" + min + " :" + second );
// }
// time();

//-------------------------- Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

// function func(str) {
//       var arr =str.split("");
//       var pop = arr.pop();
//       var unshift = arr.unshift(pop);
//       return arr.join("");
// }
// console.log(func("tugce"));


//-------------------------Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

// function findSun() {
//   for (var year = 2014; year <= 2050; year++)
//     {
//     var d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )     //ASK HERE !!!!!!!!!!!!!!!!!!
//         console.log("1st January is being a Sunday  "+year);
//     }
// }
// findSun();

//------------------------Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

// function game() {
//     var input = prompt("enter a number");
//     console.log(input);
//     var guess = Math.floor(Math.random() * Math.floor(10));
//     console.log(guess);
//     if(guess == input) {
//       alert("good work ");
//     } else {
//       alert("not matched");
//     }
// }
// game();

//-----------------------Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

// function mul() {
//   var num1 = prompt("enter num1");
//   var num2 = prompt("enter num2");
//   console.log(num1, num2);
//   var multiplication = num1 * num2 ;
//   var division = num1 / num2;
//   console.log(multiplication, division);
// }
// mul();


//--------------------Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

// function dif(num) {
//
//   if(num > 13){
//     return 2 * (num - 13);
//   }
// }
// console.log(dif(20));

//--------------------- Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

// function func(str) {
//   var arr = str.split("");
//   if(arr[0] == "P" && arr[1] == "y") {
//     return arr.join("");
//   } else {
//     arr.unshift("Py");
//     return arr.join("");
//   }
// }
// console.log(func("Pyklh"));

//------------------Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
//
// function func(str) {
//   var arr=str.split("");
//   var c1 = arr.pop();
//   var c2 = arr.pop();
//   var c3 = arr.pop();
//   // console.log(c3);
//
//   return c1 + c2 + c3 + arr.join("");
// }
// console.log(func("tugce"));

//-------------------Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

// function check_numbers(x, y)
//   {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// }
//
// console.log(check_numbers(50, 80));

//------------------------Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.


//               UNDERSTAND THIS ONE !!!!!!!!!!!!!!!!!!

// function check_script(str)
// {
//   if (str.length < 6) {
//     return str;
//   }
//   let result_str = str;
//
//   if (str.substring(10, 4) == 'Script')
//     {
//
//    result_str = str.substring(0, 4) + str.substring(10,str.length);
//
//   }
//   return result_str;
// }
//
// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

//-------------------------Write a JavaScript program to find the largest of three given integers.
//
// function max(arr) {
//   var max = 0;
//   for(var i=0; i<arr.length; i++) {
//     if( arr[i] > max){
//       max = arr[i]
//     }
//   }
//   return max;
// }
// console.log(max([1,8,3]));

//--------------------Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function near(num1, num2) {
//   if(100-num1 > 100-num2) {
//     return num2
//   } else {
//     return num1
//   }
// }
// console.log(near(90,70));

//--------------------Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.
//
// function func(str) {
//
//   if(str.length < 3) {
//     return str.toLowerCase();
//   }
//
//   front = str.substring(0,3).toLowerCase();
//   back =  str.substring(3, str.length);
//   return front + back;
// }
// console.log(func("TETGKVM"))


//-------------------- Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.


// function exam_status(totmarks,is_exam)
//   {
//   if (is_exam) {
//     return totmarks >= 90;
//   }
//  return (totmarks >= 89 && totmarks <= 100);
//  }
