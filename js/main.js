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


function sym(str) {
  
}
