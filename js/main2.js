// function fib(n) {
//   var sum=3;
//   var arr=[1,2];
//   var sumEven = 0;
//   var arrEven= [];
//
//   for(var i=2; i<n; i++) {
//      arr[i] = arr[i-2] + arr[i-1]
//      sum += arr[i]
//      console.log(arr[i])
//
//       if(arr[i] % 2 ===0) {
//         arrEven.push(arr[i]);
//         sumEven=0
//
//           for(var x=0; x<arrEven.length; x++) {
//             sumEven += arrEven[x];
//           }
//       }
//   }
//   console.log(sum);
//   console.log(sumEven);
// }
// console.log(fib(10));


 // ---------Prime number checking

 // function isPrime(num) {
 //   for(var i=2; i<num; i++) {
 //     if(num%i===0) {
 //       return false;
 //     }
 //   }
 //    return num > 1;
 // }
 // console.log(isPrime(7));
 // console.log(isPrime(9));

// ----------------------Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


 //                   ASK !!!!!!!!!!!

// function func(str) {
//   var arr=str.split("");
//
//
//
//
// }
//  console.log(func("tugce"))


// -----------------Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.


// function func(num) {
//   var result=0;
//   for(var i=0 ; i<=num; i++) {
//     result = result + i;
//   }
//   return result;
// }
//  console.log(func(4));


//-----------------Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
// var string = "hello this is a word";

// function func(str) {
//  var words= str.split(" ");
//  var newArr=[];
//
//
//   for(var i=0; i<words.length; i++) {
//       newArr.push(words[i][0].toUpperCase() + words[i].substring(1));
//   }
//    return newArr.join(" ");
// }
// console.log(func("tugce baydar"))


//---------------------Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.
//
// function func(num) {
//   if(num > 60) {
//     return Math.floor((num / 60)) + ":" + (num % 60);
//   } else if(num < 60) {
//     return 0 + ":" + num;
//   } else {
//     return 1 + ":" + 0;
//   }
// }
// console.log(func(63))
// console.log(func(53))
// console.log(func(120))
// console.log(func(60))

//---------------------Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

// function func(str) {
//   var arr=str.split("");
//   for(var i=0; i<arr.length; i++) {
//     for(x=0; x<arr.length; x++) {
//       if(arr[x] > arr[i]) {
//         temp = arr[i];
//         arr[i] = arr[x];
//         arr[x] = temp
//       }
//     }
//   }
//    return arr.join("");
// }
//
// console.log(func("tugce"))

//--------------------------1. Write a JavaScript program to display the current day and time in the //following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// function func() {
//   var date = new Date();
//   var min = date.getMinutes();
//   var hour = date.getHours();
//   var second = date.getSeconds();
//   var day = date.getDay();
//
//
//   if(hour > 12) {
//     hour = hour-12;
//   }
//   console.log(hour + ":" + min + ":" + second)
//   console.log(day);
//
//
// }
// console.log(func());


//-------------------------- Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

// function func(str) {
//   var arr= str.split("");
//
//     arr.unshift(arr.pop());
//
//   return arr.join("");
// }
//
// console.log(func("w3resource"))


//-------------------------Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

// function func(str) {
//   var arr = str.split("");
//   var newArr = [];
//   for(var i=0 ; i<arr.length; i++) {
//     newArr.push(arr[i].charCodeAt() + 1)
//   }
//
//   return String.fromCharCode(...newArr);
// }
// console.log(func("tugcz"))

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

// function func(x,y) {
//   var div = x/y;
//   return div.toString();
// }
// console.log(func(10,2))

//-----------------------Write a JavaScript program to extract the first half of a string of even length
//
// function func(str) {
//   if(str.length % 2 ===0) {
//     return str.substring(str.length/2)
//   }
//
// }
// console.log(func("javascript"))

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
//
// function func(str1, str2) {
//  if(str1.length !==str2.length) {
//
//  var min = Math.min(str1.length, str2.length);
//
//  return str1.substring(str1.length-min) + str2.substring(str2.length-min);
//
//  }
//
//
//
// }
// console.log(func("baydar","tugce"))

//------------------Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.

// function func(str) {
//   if(str.substring(str.length-6) == "Script") {
//     return true;
//   }
//   return false;
// }
//
// console.log(func("javaScript"));
// console.log(func("tugcebaydra"))

//-------------------------Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n

// function func(str, n) {
//
//
//   if(str.length >= n) {
//
//     return str.substring(0,n) + str.substring(str.length-n)
//   }
// }
//
// console.log(func("baydartugce",3))


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

 // function func(arr) {
 //
 //  var max = Math.max(...arr);
 //   var newArr = []
 //  for(var i=0; i<arr.length; i++) {
 //    newArr.push(max);
 //  }
 //   return newArr;
 // }
 // console.log(func([1,2,3]))

 // -------------------Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3

// function func(arr1,arr2) {
//
//   var newArr = [ arr1[Math.floor(arr1.length/2)],arr2[Math.floor(arr2.length/2)] ]
//
//   return newArr;
//
// }
// console.log(func([1,2,3,4,5],[2,3,4,4,5]))

//-------------------- Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

// function func(arr) {
//   var arr1 = [];
//   var arr2 = [];
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

//--------------------------Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers

// function func(arr) {
//   var dif = 0;
//   var temp;
//   for(var i=0; i<arr.length-1; i++) {
//      temp = Math.abs(arr[i] - arr[i+1])
//      dif = Math.max(dif,temp);
//   }
//    return dif;
// }
//
// console.log(func([1,3,5,6,9]))


//-----------------------------Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
//
// function isPrime(number) {
//   for(x=2; x<number; x++) {
//     if(number % x===0) {
//       return false;
//     }
//   }
//     return number > 1;
// }
//
// function func(num) {
// var arr=[];
//
// for(var i=2; i<num; i++) {
//    if(isPrime(i)) {
//      arr.push(i);
//    }
// }
//    return arr;
// }
// console.log(func(15));

// --------------------------Write a JavaScript program to find the longest string from a given array.
//
// function func(arr) {
//
//   var map = new Map();
//
//   for(var i=0; i<arr.length; i++) {
//     var count = map.get(arr[i]);
//     if(count == undefined) {
//       count = 0;
//     }
//     map.set(arr[i],arr[i].length);
//   }
//   console.log(map);
//
//   for( let [key,value] of map) {
//     max_value=0;
//     var max_key;
//
//     if(max_value < value) {
//       max_value = value;
//       max_key = key;
//     }
//   }
//     return max_key;
//
// }
//
// console.log(func(["tugce" , "baydar"]))





//


//----------------------Write a JavaScript program to find the smallest prime number strictly greater than a given number

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

//----------------------------Write a JavaScript program to find all distinct prime factors of a given integer
//
// function isPrime(num) {
//   for(var i=2; i<num; i++) {
//     if(num%i===0) {
//       return false;
//     }
//   }
//    return num > 1;
// }
//
// function func(number) {
//   var arr=[];
//   for(var x=2; x<number; x++) {
//     if(isPrime(x) &&  number % x === 0) {
//       arr.push(x);
//     }
//   }
//    return arr;
// }
//
// console.log(func(88))


//------------------------------Write a JavaScript program to remove all characters from a given string that appear more than once.
// function func(str) {
//   var obj = {};
//   var arr=[];
//   var array = str.split("");
//
//   for(var i=0; i<array.length; i++) {
//     if(!obj[array[i]]) {
//       obj[array[i]] = 1;
//       arr.push(array[i]);
//     }
//   }
//    return arr.join("");
// }
//
// console.log(func("ttgcee"))

//------------------------------Write a JavaScript program to sort the items of an array
//
// function func(arr) {
//   for(var i=0; i<arr.length; i++) {
//     for(j=0; j<arr.length; j++) {
//       if(arr[i] < arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//     return arr;
// }
// console.log(func([1,3,2,4000,5,0]))


//---------------------------Write a JavaScript program to find the most frequent item of an array.
// 
//
// function func(arr) {
//   var map = new Map();
//
//   for(var i=0; i<arr.length; i++) {
//     var count = map.get(arr[i])
//     if(count == undefined) {
//       count = 0 ;
//     }
//     map.set(arr[i],count+1);
//   }
//    console.log(map);
//
//    var max_value = 0;
//    var max_key;
//    for(let [key,value] of map) {
//
//
//      if(value > max_value) {
//        max_value = value;
//        max_key = key;
//      }
//    }
//     return max_key;
// }
// console.log(func([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
