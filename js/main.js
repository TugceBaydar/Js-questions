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

//
// function func(str) {
//   var arr=str.split("");
//   for(var i=0; i<arr.length; i++) {
//
//     for(var x=i; x<arr.length; x++) {
//
//         if(arr[x] < arr[i]) {
//           console.log('swapping');
//           var temp = arr[i];
//           arr[i] = arr[x];
//           arr[x] = temp;
//
//         }
//     }
//
//   }
//
//   return arr.join("");
//
// }

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


// function check_script(str)
// {
//
//   if(str.length < 10) {
//     return str;
//   }
//
//   if(str.substring(4,10) == "Script") {
//     return str.substring(0,4);
//   }
//
//   return str;
//
//
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

//---------------------The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

// --------------NOT DONE YET !!!!!!!!!!!!

// function isPrime(num) {
//   for(var i=2; i<num; i++) {
//     if(num % i == 0) {
//       return false;
//     }
//
//   }
//   return true;
// }
//
// function func(num) {
//      for(var i=2; i>=2; i--) {
//        if(num%i == 0) {
//          if(isPrime(i)) {
//            return i;
//          }
//        }
//      }
//
// }
//
// console.log(func(600851475143));












//--------------------Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// function sum(x, y) {
//   var sum = x + y;
//   if (sum >50 && sum < 80) {
//     return 65;
//   } else {
//     return 80;
//   }
// }
// console.log(sum(60,120));
// console.log(sum(20,40));

// --------------------- Write a JavaScript program to reverse a given string.

// function rev(str) {
//   return str.split("").reverse().join("");
// }
// console.log(rev("tugce"));

//------------------------Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

// function func(str) {
//   var arr = str.split("");
//   var newArr = [];
//   for(var i=0; i<arr.length; i++) {
//     newArr.push(arr[i].charCodeAt() + 1);
//   }
//   return String.fromCharCode(...newArr);
// }
// console.log(func("tugce"));

//-----------------------Write a JavaScript program to capitalize the first letter of each word of a given string

// function cap(str) {
//   var arr=str.split(" ");
//   var arrNew=[];
//   for (var i=0; i<arr.length; i++) {
//     arrNew.push(arr[i][0].toUpperCase() + arr[i].substring(1) )
//   }
//   return arrNew.join(" ");
// }
// console.log(cap("hello word"));


// ---------------------Write a JavaScript program to convert a given number to hours and minutes

// function time_convert(num)
//  {
//   var hours = Math.floor(num / 60);
//   var minutes = num % 60;
//   return hours + ":" + minutes;
// }
//
// console.log(time_convert(45));
// console.log(time_convert(450));
// console.log(time_convert(1441));

//-----------------------Write a JavaScript program to convert the letters of a given string in alphabetical order
//
// function func(str) {
//   var arr=str.split("");
//   var sorted=arr.sort();
//   var strNew = sorted.join("");
//
//   return strNew;
// }
// console.log(func("tugce"));

//----------------------Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

//
// function ab_Check(str)
//  {
//     return (/a...b/).test(str) || (/b...a/).test(str);
//  }
//
// console.log(ab_Check("Chainsbreak"));
// console.log(ab_Check("pane borrowed"));
// console.log(ab_Check("abCheck"));

//--------------------Write a JavaScript program to count the number of vowels in a given string

// function func(str) {
//   var count = 0;
//   for(var i=0; i<str.length; i++) {
//    if(str[i] == "a" ||str[i] == "e" ||str[i] == "o"||str[i] == "u"||str[i] == "i"){
//      count++;
//     }
//    } return count;
//   }
// console.log(func("muttalip"));

//---------------------Write a JavaScript program to check if a given string contains equal number of p's and t's present.


// function func(str) {
//  var arr=str.split("");
//  var countP=0;
//  var countT = 0
//  for(var i=0 ; i<arr.length; i++) {
//    if(arr[i] == "p") {
//      countP++
//    } else if(arr[i] == "t"){
//      countT++
//    }
//
//  }
//  if(countT == countP) {
//    return true;
//  }
//   return false;
//
// }
// console.log(func("ttuppe"))



//-----------------------Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.

//
// function func(x,y) {
//   var div = x/y;
//   return div.toString();
// }
// console.log(func(10,2))

//-----------------------Write a JavaScript program to extract the first half of a string of even length

// function first_half (str) {
//   if (str.length % 2 == 0) {
//     return str.slice(0, str.length / 2);
//   }
//   return str;
// }
// console.log(first_half("Python"));
// console.log(first_half("JavaScript"));
// console.log(first_half("PHP"));

//------------------------Write a JavaScript program to create a new string without the first and last character of a given string.

// function func(str) {
//   var arr=str.split("");
//   var strNew = arr.shift();
//
//   arr.pop();
//   return arr.join("");
// }
// console.log(func("tugce"));

//------------------------Write a JavaScript program to concatenate two strings except their first character

// function func(str1, str2) {
//   var arr1 = str1.split("");
//   var arr2= str2.split("");
//    arr1.shift();
//    arr2.shift();
//    var con = arr1.join("")+ " " + arr2.join("");
//
//    return con;
// }
// console.log(func("tugce", "baydar"));

//---------------------------Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
//
// function func(str) {
//   if(str.length >= 3) {
//
//     var back = str.substring(str.length-3)
//     console.log(back)
//     var front = str.substring(0,str.length-3)
//     console.log(front)
//
//     return back + front;
//   }
// }
// console.log(func("baydar"))

//----------------------Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

// function func(str1, str2) {
//
// var min = Math.min(str1.length, str2.length);
//
// return str1.substring(str1.length - min) + str2.substring(str2.length - min);
//
// }
// console.log(func("tugce", "baydar"));

//------------------Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.

// function func(str) {
//
//   if( str.length >= 6) {
//     if ( str.substring(str.length - 6, str.length) == "script") {
//       return true;
//     }
//     else {return false;}
//   }
// }
// console.log(func("javascript"));
// console.log(func("tugcebaydar"));

//----------------Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// function func(str) {
//   if((str.substring(0,3) === "Los") || (str.substring(0,3) === "New")) {
//      return str;
//   }else {
//     return "";
//   }
// }
//
// console.log(func("Los Angeles"));
// console.log(func("New York"));
// console.log(func("istanbul"));

//-----------------------Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
//
// function func(str) {
//   var arr =str.split("");
//
//
//   if( arr[0] == "P" && arr[arr.length-1] == "P") {
//       arr.shift();
//       arr.pop();
//       var newStr = arr.join("")
//       return newStr;
//   }
//   else {
//     return str;
//   }
// }

//
// console.log(func("PatatesP"));
// console.log(func("TUgce"));

//-------------------------Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n

// function func(str, n) {
//
//  if(str.length >= n) {
//    var newStr = str[n] + str[str.length - n];
//    return newStr;
//  }
//
// }
// console.log(func("tugce", 2));


//-------------------------Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

// function func(array) {
//
//   return array[0] + array[1] + array[2];
// }
// console.log(func([1,2,3]));

//------------------------- Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

// function func(arr) {
//   return arr.reverse();
// }
// console.log(func([1,2,3]))

//----------------------Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

// function func(arr) {
//
// if(arr[0]==1 || arr[arr.length-1] ==1) {
//   return true;
// }
//   return false;
// }
//
// console.log(func([1,2,3]))
// console.log(func([2,3,1]))
// console.log(func([2,3,4]))

//---------------------Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
//
// function func(arr) {
// var newArr = [];
// var max = Math.max(...arr);
// console.log(max);
//
// for (var i=0 ; i<arr.length; i++) {
//   newArr.push(max);
//
// }
// return newArr;
//
// }
// console.log(func([-1,-2,-3]));

// -------------------Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3

//
// function func(arr1, arr2) {
//   var newArr = [arr1[1] , arr2[1]];
//   return newArr;
// }
//
// console.log(func([1,2,3],[4,5,6]));

//--------------------Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
//

// function func(arr) {
//  if(arr.length !== 2 && arr.length !== 3) {
//    return false;
//  }
//   var count1=0;
//   var count2=0;
//   for(var i=0; i<arr.length; i++) {
//     if(arr[i] == 30 ) {
//       count1++;
//     } else if (arr[i] == 40) {
//       count2++;
//     }
//     if(count1 ==2 || count2==2) {
//       return true;
//     }
//
//   }
//         return false;
//
// }
// console.log(func([30,50,60]));
// console.log(func([30,40,30,40,50]));

//----------------------Write a JavaScript program to add two digits of a given positive integer of length two.

// function func(arr) {
//   var newArr = [];
//   for (var i=0; i<arr.length; i++) {
//      newArr.push(arr[i] % 10 + Math.floor( arr[i] / 10));
//  }
//     return newArr;
// }
// console.log(func([12,34]));


//-----------------------Write a JavaScript program to add two digits of a given positive integer of length two.

// function func(n) {
//   return n %10 + Math.floor(n / 10);
// }
// console.log(func(12));

//---------------------Write a JavaScript to find the longest string from an given array of strings

// function func(arr) {
//
// var max = 0;
// for(var i=0; i<arr.length; i++) {
//
//   if(max < arr[i].length) {
//     max = arr[i].length
//   }
//
// }
//  console.log(max)
//  for(var x=0; x<arr.length; x++) {
//    if(arr[x].length == max ) {
//      return arr[x];
//    }
//  }
//
//
// }
// console.log(func(["tugce","baydar","muttalip"]))


//----------------------Write a JavaScript to replace each character of a given string by the next one in the English alphabet.

// function func(str) {
//   var arr = str.split("");
//
//   for(var i=0 ; i<arr.length; i++) {
//     arr[i] = arr[i].charCodeAt() + 1;
//   }
//   return String.fromCharCode(...arr);
// }
//
// console.log(func("tugce"));

//-------------------- Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
//
// function func(arr) {
//   var arr1 = [];
  // var arr2 = [];
//   var resultArr= [];
//   var sum1 = 0;
//   var sum2 = 0;
//
//   for(var i=0; i<arr.length; i=i+2) {
//     arr1.push(arr[i]);
//     sum1 = sum1 + arr[i]
//   }
//   for(var x=1; x<arr.length; x=x+2) {
//     arr2.push(arr[x])
//     sum2 = sum2 + arr[x]
//   }
//   console.log(arr1);
//   console.log(arr2);
//   console.log(sum1);
//   console.log(sum2);
//
//   resultArr.push(sum1 , sum2)
//
//   return resultArr;
// }
// console.log(func([1,2,3,4,5]))

//---------------------------Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
//
//
// function func(angle) {
//   if(angle > 0 && angle < 90) {
//     return "Acute angle";
//   }else if (angle == 90) {
//     return "right angle";
//   } else if(angle >90 && angle < 180 ) {
//     return "Obtuse angle";
//   } else if (angle == 180) {
//     return "straight angle";
//   }
// }
// console.log(func(178));

//----------------------------Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements

//                     UNDERSTAND THIS !!!!!!!!
// function compare_arrays(arr1, arr2) {
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//
//   for(var i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i])
//     {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function generateSwap(arr ,i, y) {
//   var newArray = arr.slice();
//
//   temp = newArray[i];
//   newArray[i] = newArray[y];
//   newArray[y] = temp;
//
//   return newArray;
// }
//
// function generateSwaps(arr) {
//   var swaps = [];
//
//   for(var x=0; x<arr.length; x++) {
//     for(var y = 0; y<arr.length; y++)
//     {
//       // [10,30,20,40]
//       // 0,1 ==> [30,10,20,40]
//       // 0,2 ==> [20,30,10,40]
//       if(x == y)
//       {
//         continue;
//       }
//       swaps.push(generateSwap(arr, x, y));
//     }
//   }
//
//   return swaps;
// }
//
// function array_checking(arr1, arr2) {
//   if (compare_arrays(arr1, arr2)) {
//     return true;
//   }
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//
//   permutations = generateSwaps(arr2);
//   //console.log(permutations);
//   //console.log(arr1);
//
//   for(var i = 0; i < permutations.length; i++) {
//     if (compare_arrays(permutations[i],arr1)) {
//       return true;
//     }
//   }
//
//   return false;
// }
//
// console.log(array_checking([10,20,30], [10,20,30]))
// console.log(array_checking([10,20,30], [30,10,20]))
// console.log(array_checking([10,20,30,40], [10,30,20,40]))


//---------------------------------Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.

// function func(num0, num1 , d) {
//   if((num0 % d == 0 && num1 % d ==0) ||(num0 % d !== 0 && num1 % d !==0) ) {
//     return "similar";
//   }else {
//     return false;
//   }
// }
//
// console.log(func(10,20,5));
// console.log(func(16,20,3));

//---------------------------------Write a JavaScript program to find the kth greatest element of a given array of integers

// function func(arr, k) {
//  var temp;
//   for(var i=0; i<arr.length; i++) {
//     for(j=0; j<arr.length; j++) {
//       if(arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//    console.log(arr);
//
//    return arr[k-1];
//
// }
//
//
//
//
// console.log(func([1,4,2,6,3],3))
//
//
//
//


//--------------------------Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers

// function max_difference(arr) {
// 	var max = 0;
//   var temp;
// 	for (var i = 0; i < arr.length - 1; i++)
//       {
// 		temp = Math.abs(arr[i] - arr[i + 1]);
// 		max = Math.max(max, temp);
// 	  }
// 	return max;
// }
//
// console.log(max_difference([1, 2, 3, 8, 9]))
// console.log(max_difference([1, 2, 3, 18, 9]))
// console.log(max_difference([13, 2, 3, 8, 9]))


//--------------------------Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers
//
// function func(arr) {
//   var max = 0;
//
//   for(var i=0 ; i<arr.length; i++) {
//     var max = Math.max(...arr);
//     var min = Math.min(...arr);
//
//   }
//     console.log( min + "-" + max);
//
//     return max - min;
// }
// console.log(func([1, 2, 3, 8, 9]));
// console.log(func([1, 2, 3, 18, 9]))
// console.log(func([13, 2, 3, 8, 9]))

//--------------------------Write a JavaScript program to find the number which appears most in a given array of integers.


//
// function func(arr) {
//
//  var map = new Map();
//
//  for(var i=0; i<arr.length; i++) {
//    var count=map.get(arr[i].toString());
//    if(count == undefined ) {
//      count = 0;
//    }
//    map.set(arr[i].toString(),count+1);
//  }
//    console.log(map)
//
//     var max_value = 0;
//     var max_key;
//     for (let [key, value] of map) {
//
//
//     if(value > max_value) {
//       max_value = value;
//       max_key = key;
//     }
// }
//
//          return max_key;
// }
//
// console.log(func([1,1,2,3,3,3,4,4,4,4,4,4]));



//--------------------------Write a JavaScript program to replace all the numbers with a specified number of a given array of integers

// function func(arr, num) {
//   for(var i=0; i<arr.length; i++) {
//     arr[i] = num;
//   }
//   return arr;
// }
// console.log(func([1,2,3], 5));

//--------------------------Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

//
// function sum_adjacent_difference(arr) {
// 	var result = 0;
// 	for (var i = 1; i < arr.length; i++) {
// 		result += Math.abs(arr[i] - arr[i - 1]);
// 	}
// 	return result;
// }
//
// console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));

//--------------------------Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.

// function func(){
//
//   }





//-------------------------- Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case

// function change_case(new_str) {
//   var x = 0;
//   var y = 0;
//
//   for (var i = 0; i < new_str.length; i++) {
//     if (/[A-Z]/.test(new_str[i])) {
//       x++;
//     } else y++;
//   }
//
//   if (y > x)
//   return new_str.toLowerCase();
//   return new_str.toUpperCase();
//
// }
//
// console.log(change_case("Write"))
// console.log(change_case("PHp"))

//---------------------------Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.
//
// function func(arr1, arr2) {
// for(var i=0; i<arr1.length; i++) {
//   if(arr2.indexOf(arr1[i]) != -1) {
//     return true;
//   }
//
// }
//
//      return false;
// }
// console.log(func([1,2,3], [7,4,5]));


//---------------------------Write a JavaScript program to find the number of inversions of a given array of integers.
//
// function func(arr) {
//   var x = 0;
//   for(var i=0; i<arr.length; i++) {
//     for(var j= i + 1; j<arr.length; j++) {
//       if(arr[i] > arr[j]) {
//         x++;
//       }
//     }
//   }
//    return x;
// }
//
// console.log(func([0, 3, 2, 5, 9]));
// console.log(func([1, 5, 4, 3]));
// console.log(func([10, 30, 20, -10]));

//-----------------------------Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number


//   UNDERSTAND THIS !!!!!!!!

// function generateNumber(arr, i) {
//   var final = "";
//   for(var x=0; x<arr.length; x++) {
//     if(x!=i) {
//       final+=arr[x];
//     }
//   }
//
//   return parseInt(final);
// }
//
// function func(num) {
//   var sayilar = [];
// var arr=("" + num).split("");
// for(i=0; i<arr.length; i++) {
//    sayilar.push(generateNumber(arr,i))
// }
//
//   return Math.max(...sayilar);
//
// }
// console.log(func(4532));
//----------------------------Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer

//
// function func(arr, num) {
//   for(var i=0; i<arr.length; i++) {
//    for(var j = i +1; j<arr.length; j++) {
//      if(Math.abs(arr[i]-arr[j]) < num) {
//        return true;
//      }
//    }
//   }
//     return false;
// }
//
// console.log(func([2,4,6,7], 1));

//----------------------------- Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number

///                  COME BACK TO THIS ONE !!!!!!!!!!!!!

// function func(num) {
//
// var sum = 0;
// var arr=("" + num).split("");
// for(var i=0; (i<arr.length ); i++) {
//   sum = sum + parseInt(arr[i]);
//
//    //console.log(sum);
//    //console.log(arr);
//
//   if(sum > 10) {
//     arr = ("" + sum).split("");
//     i=0;
//     sum=0;
//   }
// }
//  return sum;
//
// }
// console.log(func(155))
//-----------------------------Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

// function func(num , divider) {
//  if(divider==1) {
//   return num;
// }else {
//   while (num % divider === 0) {
//     num = num / divider;
//   }
//   return num;
// }
//
//
// }
// console.log(func(150,30));
// console.log(func(12,2));

//------------------------------Write a JavaScript program to find the number of sorted pairs formed by its elements of an given array of integers such that one element in the pair is divisible by the other one.

// function func(arr) {
//   var result = 0;
//   var array=[];
//   for(var i=0; i<arr.length; i++) {
//     for(var j=i+1; j<arr.length; j++) {
//       if(arr[i] % arr[j] == 0 || arr[j] % arr[i] == 0) {
//         result++
//
//       }
//     }
//
//   }
//   return result;
// }
//
// console.log(func([2,4,16]));


// ------------------------------Write a JavaScript program to create the dot products of two given 3D vectors.
//
// function func(arr1 , arr2) {
//   var result = 0;
//   for(var i=0; i < 3; i++) { // arr1.length = arr2.length =3
//         result += arr1[i] * arr2[i]
//   }
//   return result;
// }
//
// console.log(func([1,2,3], [2,3,4]))

//-----------------------------Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

//
// function isPrime(num) {
//
//  for(var i=2; i<num; i++) {
//    if(num % i===0) {
//      return false;
//    }
//
//  }
//    return num > 1;
// }
//
//   console.log(isPrime(7))
//   console.log(isPrime(15))
//
// function func(number) {
//   var arr=[];
//   for(x=0; x<number; x++) {
//     if(isPrime(x)) {
//       arr.push(x)
//     }
//   }
//     return arr;
// }
// console.log(func(15))
//------------------------------ Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.



// function func(arr, num) {
// var count=0;
// for(var i=0; i<arr.indexOf(num); i++) {
//   if(arr[i] % 2 === 0) {
//     count++;
//   }
//
// }
//  return count;
//
// }
// //
// console.log(func([1,2,3,4,5,6,7,8], 5));
// console.log(func([1,3,5,6,7,8], 6));


//----------------------------------Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one
//
// function func(num1, num2, num3) {
//   if(num1 == num2) {
//       return num3;
//   } else if(num2 == num3) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(func(1,1,2))
// console.log(func(3,2,3))
// console.log(func(1,3,1))

//--------------------------Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.


      // come back to this !!!!!




//--------------------------Write a JavaScript program to calculate the sum n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer
//
// function int_sum(num) {
//     let s_sum = 0;
//     while (num > 0) {
//         s_sum += num;
//         num = Math.floor(num / 2);
//     }
//     return s_sum;
// }
// console.log(int_sum(8))
// console.log(int_sum(9))
// console.log(int_sum(26))

//--------------------------Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).

// function func(str) {
//   var arr=str.split("");
//   for(var i=0; i<arr.length; i++) {
//     if(arr[0].toUpperCase() && arr[arr.length-1] == ".") {
//       return true;
//     }
//     return false;
//   }
// }
//
// console.log(func("I am Tugce."));
// console.log(func("i am Tugce"));
// console.log(func("I am Tugce"));

//-------------------------- Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

// function func(str) {
//   var arr = str.split("");
//   var x = Math.floor(Math.random() * Math.floor(9))
//   console.log(x);
//   var array=[];
//   if(arr.length === 2 && (x + arr[0] + arr[1]) % 3 === 0) {
//     arr.splice(1,0,x);
//     console.log(arr);
//     array.push(arr[0],arr[1],arr[2]);
//     return array.join("");
//   }
//
// }
// console.log(func("32"));


//----------------------------Write a JavaScript program to check if a given number is in a given range

// function func(num, array) {
//
//   if(num > array[0] && num < array[1]) {
//     return true;
//   }
//   return false;
// }
//
// console.log(func(7,[3,8]));
// console.log(func(7,[3,5]));

//------------------------- Write a JavaScript program to check if a given integer has an increasing digits sequence

// function func(num) {
//   var arr= ("" + num).split("");
//
//    for(var i=0; i<arr.length; i++) {
//      if(arr[i] < arr[i+1]) {
//        return true;
//      }
//      return false;
//    }
//
//
// }
// console.log(func(123));
// console.log(func(42335));

//----------------------- Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence

// function is_monotonous(num) {
//     if (num.length === 1) {
//         return true;
//     }
//     var num_direction = num[1] - num[0];
//     for (var i = 0; i < num.length - 1; i++) {
//         if (num_direction * (num[i + 1] - num[i]) <= 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(is_monotonous([1, 2, 3]));
// console.log(is_monotonous([1, 2, 2]))
// console.log(is_monotonous([-3, -2, -1]))


// --------------------------Write a JavaScript program to find if the members of an given array of integers is a permutation of numbers from 1 to a given integer

// function func(arr,num) {
//
// for(var i=0; i<num; i++) {
//   if(!arr.includes(i+1)) {
//     return false;
//     }
//
//    }
//     return true;
//
// }
// console.log(func([1,2,3],3));
// console.log(func([1,2,3],4));
// console.log(func([1,2,3,4],4));
// console.log(func([1,2,3],5));


// --------------------------Write a JavaScript program to find the longest string from a given array.
//
// function func(arr) {
//
// var map = new Map();
//
// for(var i=0; i<arr.length; i++) {
//
//   map.set(arr[i], arr[i].length);
// }
//
// console.log(map)
//
//
// var max_value = 0;
// var max_key;
//
// for(let [key,value] of map) {
//   if(value > max_value) {
//     max_value = value;
//     max_key =key;
//   }
// }
//     return max_key;
// }
// //
// console.log(func(["tugce","baydar","muttalip"]))

//---------------------------Write a JavaScript program to get the largest even number from an array of integers.

// function func(arr) {
// var max = 0;
//  for(var i=0; i<arr.length; i++) {
//       if ( arr[i] % 2 === 0 && max < arr[i]) {
//             max = arr[i];
//       }
//  }
//     return max;
// }
//
// console.log(func([1,2,4,5,7,9]))

//-----------------------Write a JavaScript program to find the smallest round number that is not less than a given value.

// function func(num) {
//   if( num % 10 ) {
//     return num + (10-(num % 10));
//   }
// }
// console.log(func(63));
// console.log(func(56));

//----------------------Write a JavaScript program to find the smallest prime number strictly greater than a given number
//


// function isPrime(number) {
//   for (var i=2; i<number; i++) {
//     if(number % i===0) {
//       return false;
//     }
//   }
//    return number > 1;
// }
//
//
// function func(num) {
// var arr=[];
// for(var x=num+1; ; x++) {
//   if(isPrime(x)) {
//     arr.push(x);
//   }
// }
//
//  return Math.min(...arr);
// }
//
// console.log(func(7));
// console.log(func(16));


//------------------------- Write a JavaScript program to find the number of even digits in a given integer

// function func(num) {
//
//  var arr = ("" + num).split("");
//  var x = 0;
//  for(var i=0; i<arr.length; i++) {
//    if( arr[i] % 2==0) {
//      x++;
//    }
//  }
//  return x;
//
// }
//
// console.log(func(123))
// console.log(func(124))
// console.log(func(12346))


//----------------------------Write a JavaScript program to find all distinct prime factors of a given integer

// function isPrime(num) {
//   for(var i=2; i<num; i++) {
//     if(num % i===0) {
//       return false;
//     }
//   }
//     return num > 1;
// }
//
// function func(number) {
//   var arr=[];
//   var arr2=[];
//   for(var x=0; x<number; x++) {
//     if(isPrime(x)) {
//       arr.push(x);
//     }
//
//   }
//     console.log(arr);
//
//     for(j=0; j<arr.length; j++) {
//       if(number % arr[j] === 0) {
//         arr2.push(arr[j]);
//       }
//     }
//      return arr2;
// }
//
//
// console.log(func(88));





//------------------------------Write a JavaScript program to remove all characters from a given string that appear more than once.

// function func(str) {
//
// var arr=str.split("");
// var obj={};
// var arr3=[];
//
// for(var i=0; i<arr.length; i++) {
//
//  if(!obj[arr[i]]) {
//      obj[arr[i]] = 1;
//      arr3.push(arr[i]);
//  }
//
// }
//
//  console.log(arr3);
//
// //  for(j=0; j<arr2.length; j++) {
// //   arr.splice(arr.indexOf(arr2[j]),1)
// //  }
// //   return arr.join("");
// }
//
// console.log(func("tugggcee"))








//------------------------------Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.
//
// function func(str) {
//
//   return str.replace(/[0-9]/, '$');
// }
// console.log(func("12tgc"));


//---------------------------Write a JavaScript program to test if a given integer is greater than 15 return the given number, otherwise return 15

// function func(num) {
//   if(num > 15) {
//     return num;
//   }
//   return 15;
// }
//
// console.log(func(20));
// console.log(func(13));


//--------------------------Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.

// function func(arr) {
// var round=0;
// var newArr = [];
// for(var i = 0; i<arr.length; i++) {
//   if(arr[i] % 10 === 0) {
//     round++
//     newArr.push(arr[i]);
//   }
//
// }
//      console.log(newArr);
//      return round;
// }
// console.log(func([10,2,3,20,30]));
// console.log(func([1,2,3]));


//-------------------------Write a JavaScript program to check if all the digits in a given number are the same or not.

//
// function func(num) {
//
// var arr= ("" + num).split("");
//
// for(var i=0; i<arr.length; i++) {
//    if(arr[i] == arr[i+1]) {
//      return true;
//    }
// }
//   return false;
//
// }
// console.log(func(111));
// console.log(func(123));
// console.log(func(2222222));
// console.log(func(3272423));

//------------------------Write a JavaScript program to find the number of elements which presents in both of the given arrays.

// function func(arr1, arr2) {
//  var count = 0;
//  var max = Math.max(arr1.length, arr2.length);
//
//  for(var i=0; i<max; i++) {
//    if(arr2.includes(arr1[i])) {
//      count++;
//    }
//  }
//    return count;
// }
// console.log(func([1,2,3,4,6],[4,2,6,3,5]));
// console.log(func([1,2,3,4,6],[8,7,9]));

//-----------------------Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths

// function sort_by_string_length(arra) {
// 	for (var i = 0; i < arra.length; i++) {
// 		for (var j = i + 1; j < arra.length; j++) {
// 			if (arra[i].length > arra[j].length) {
// 				var m = arra[i];
// 				arra[i] = arra[j];
// 				arra[j] = m;
// 			}
// 		}
// 	}
// 	return arra;
// }
// var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
// console.log("Original array: "+ arra+"\n");
// console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));


//-------------------------Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= an given integer.

// function func(num) {
//   return (num * (num+1)) / 2;
// }
//
// console.log(func(10))


//--------------------------Write a JavaScript program to compute the sum of all digits that occur in a given string

//
// function func(str) {
//   var arr =str.split("");
//   var sum=0;
//
//   for(var i=0; i<arr.length; i++) {
//   if(/[0-9]/.test(arr[i])) {
//     sum = sum + Number(arr[i])
//   }
// }
//   return sum;
// }
// console.log(func("tu128gce5"));

//----------------------------Write a JavaScript program to swap two halves of a given array of integers of even length.

//[0,1,2,3,4,5]
//[3,4,5,0,1,2]

// function func(arr) {
//
//   for(var i = 0; i < arr.length/2; i++)
//   {
//     // swap arr[i],arr[i+3]
//     temp = arr[i];
//     arr[i] = arr[i+3];
//     arr[i+3] = temp;
//   }
//
// return arr;
//
// }
//
// console.log(func([0,1,2,3,4,5]))
//





//----------------------------Write a JavaScript program to change the capitalization of all letters in a given string.

// function func(str) {
//  var arr=str.split("");
//  for(var i=0 ; i<arr.length; i++) {
//    if(/[A-Z]/.test(arr[i])) {
//       arr[i] = arr[i].toLowerCase();
//    } else  {
//       arr[i] = arr[i].toUpperCase();
//    }
//
//  }
//
//    return arr.join("");
//
// }
//
// console.log(func("tUgcE"));

//-----------------------------Write a JavaScript function to check whether an `input` is an array or not

// function func(input) {
//   if(toString.call(input) === "[object Array]") {
//     return true;
//   }
//   return false;
// }
// console.log(func([1,2,3]))
// console.log(func("tugce"))

//------------------------Write a JavaScript function to clone an array

// function func(arr) {
//   return arr.slice(0);
// }
//
// console.log(func([1,2,3]))

//---------------------Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// function func(arr, n) {
//   if(n === null) {
//     return arr[arr.length-1];
//   } else if( n < 0 ) {
//     return [];
//   }
//
//    return arr.slice(Math.max(arr.length-n, 0 ));
//
// }
// console.log(func([1,2,3,4,5] , 2))


//--------------------------Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// function func(num) {
//   var arr= ("" + num).split("");
//
//  for(var i=0; i<arr.length; i++) {
//    if(arr[i] % 2 === 0 && arr[i+1] % 2===0) {
//       arr[i] = arr[i] + "-"
//    }
//  }
//     return arr.join("");
// }
// console.log(func(1224));
// console.log(func(025408))

//------------------------------Write a JavaScript program to sort the items of an array

// function func(arr) {
//
//   function sortNumber(x,y) {
//     return x-y;
//   }
//   arr.sort(sortNumber);
//   return arr;
// }
// console.log(func([1,3,2,4000,5,0]));


//---------------------------Write a JavaScript program to find the most frequent item of an array.

// function func(arr) {
//   var map = new Map();
//
//   for(var i=0; i<arr.length; i++) {
//
//     var count=map.get(arr[i]);
//
//   if(count == undefined) {
//     count=0;
//   }
//     map.set(arr[i],count+1);
//
//
//   }
//
//
//   console.log(map);
//    var max_value=0;
//    var max_key;
//
//    for (let [key,value] of map) {
//      if(value > max_value) {
//        max_value = value;
//        max_key = key;
//      }
//    }
//     return max_key;
// }
//
// console.log(func([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

//---------------------------Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
//
// function func(str) {
//   var arr=str.split("");
//
//   for(var i=0; i<arr.length; i++) {
//     if(/[A-Z]/.test(arr[i])) {
//       arr[i] = arr[i].toLowerCase();
//     } else {
//      arr[i] = arr[i].toUpperCase();
//   }
// }
//    return arr.join("")
// }
//
// console.log(func("TugCe"));

//----------------------------Write a JavaScript program which prints the elements of the following array.
// function func() {
//
//  var arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//
//   for(var i=0; i<arr.length; i++) {
//     console.log("row" + i)
//     for(var j=0; j<arr[i].length; j++) {
//       console.log("" + arr[i][j])
//     }
//   }
//
//
//
// }
//
// console.log(func())

//------------------------------W Write a JavaScript program to add items in an blank array and display the items


//               NOT DONE YET !!!!!!

//
//
// $(document).ready(
//
//
//   function func()  {
//
//
//
//   var btn1 = document.createElement("button");
//   var btn2 = document.createElement("button");
//   var input = document.createElement("input");
//
//
//   btn1.innerText = "Add "
//   btn2.innerText = "Display"
//
//
//
//   document.getElementById("DV").appendChild(btn1);
//   document.getElementById("DV").appendChild(btn2);
//   document.getElementById("DV").appendChild(input);
//
//   btn1.addEventListener("click", function() {
//
//      var value = document.getElementsByTagName("input")[0].value;
//      console.log(value);
//
//
//
//
//      localStorage.setItem("list",value);
//
//      alert(value + "added as index " )
//
//
//
//
//
//   });
//
//    btn2.addEventListener("click", function() {
//
//      var value = localStorage.getItem("list")
//
//      document.getElementById("display").innerHTML = value;
//
//
//
//    });
//
//
//
//
//
//
//
// });

//----------------------------Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

// function func(arr) {
//   var obj={};
//   var newArr=[];
//
//   for(var i=0; i<arr.length; i++) {
//           if(!obj[arr[i]]) {
//             obj[arr[i]] = 1
//           } else {
//             newArr.push(arr[i]);
//           }
//
//    }
//     console.log(newArr);
//    for(var j=0; j <newArr.length; j++) {
//      console.log(arr.indexOf(newArr[j]))
//    }
//
//     arr.splice(1,1);
//     arr.splice(4,1);
//     return arr;
//
// }
// console.log(func([1,2,2,3,4,4]));


//------------------------------color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

// function func(arr) {
//
// var arr = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//
// var o = ["th","st","nd","rd"];
//
//
//
// for(var i=0; i<3; i++) {
//
//     console.log((i+1) + o[i+1] + "choice is " + arr[i] );
// }
// for(var x=3; x<arr.length; x++) {
//
//    console.log((x+1) + o[0] + "choice is " + arr[x])
//
// }
//
//
//
// }


console.log(func())



//-----------------------------Write a JavaScript program to shuffle an array

//                        ASK THIS !!!!!!!!!!!!!!

// function func(arr) {
//
//
//
// }





// console.log(func([3,4,5,6,13]))

//----------------------------There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays



// function func(arr1, arr2) {
//   var max = Math.min(arr1.length, arr2.length);
//   var arrNew = [];
//
//   if(arr1.length < arr2.length) {
//     for(var i=0 ; i<arr2.length-arr1.length; i++) {
//       arr1.push(0);
//     }
//   } else {
//     for(var i=0 ; i<arr1.length-arr2.length; i++) {
//       arr2.push(0);
//     }
//   }
//     for(var x=0; x<arr1.length; x++) {
//       arrNew.push(arr1[x] + arr2[x]);
//     }
//      return arrNew;
// }
// console.log(func([1,2,3,2],[3,4,5,6,7]))


//---------------------------Write a JavaScript program to find duplicate values in a JavaScript array

// function func(arr) {
//   var newArr = [];
//   var obj = {};
//   var result = [];
//
//   for(var i=0 ;i<arr.length; i++) {
//     if(!obj[arr[i]]) {
//     obj[arr[i]] = 1;
//   } else {
//     newArr.push(arr[i]);
//   }
//
// }
//    return newArr;
// }
// console.log(func([1,1,2,3,4,4]))
