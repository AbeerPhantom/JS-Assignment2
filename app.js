//                                                                                    Chapter No 21

// Question No 1

// var allLower = userInput.toLowerCase();


// Question No 2

// var x = "ABEER";
// x = x.toLowerCase();
// alert(x);


// Question No 3

// var y = "abeer";
// y = y.toUpperCase();
// alert(y);


// Question No 4

// var A = "SYED ABEER";
// var B = A.toLowerCase();
// alert (B);


// Question No 5

// var cashCrop = ["WHEAT"];
// var crop = cashCrop[0].toLowerCase();
// alert(crop);


// Question No 6

// var C = "danish";
// alert(C.toUpperCase());


// Question No 7

// var cityName = "kaRacHi";
// cityName = cityName.slice(0,1).toLocaleUpperCase() + cityName.slice(1).toLowerCase();
// alert(cityName);



//                                                                                  Chapter NO 22 To 25

// Question NO 1

// var sameWords = "captain";
// var same = sameWords.slice(1, 3);
// alert(same);


// Question No 2

// var str = "Boxing"; 
// var lengthOfString = str.length;
// alert(lengthOfString);


// Question No 3

// var animal = "elephant";
// var seg = animal.slice(2, 6);


// Question No 4

// var str = "Boxing"; 
// var lengthOfString = str.length;
// alert(lengthOfString);



// Question No 5

// var str = "Boxing"; 
// var lengthOfString = str.length;
// var draw = str.slice(0,1) + str.slice(3);
// alert(draw);

// Question No 6

// var text = "To be or not to be."; 
// var indx = text.indexOf("be");
// alert(indx);

// Answer is 3


// Question No 7

// var text = "To be or not to be."; 
// var indx = text.lastIndexOf("be");
// alert(indx);
// Answer is 16


// Question No 8

// var text = "rain rain  go away go away go away";
// var indx = text.lastIndexOf("go");
// alert(indx);
// Answer is 27



// Question No 9

// if (indexNum >= 0 && indexNum < str.length) {
   
// }



// Question No 10

// var str = "abcde";
// var charAtIndex2 = str.charAt(2);
// alert(charAtIndex2);




// Question No 11

// var text = "The Bumblebee";
// var cha = text.charAt(9);
// alert(cha);


// Question No 12

// var str = "The Bumblebee";
// var x = str.charAt(str.length - 1);
// alert(x);



// Question No 13

// var text = "The Bumblebee";
// var cha = text.charAt(4);
// alert(cha);



// Question No 14

// if (variable.charAt(2) === 'e') {
    
// }



// Question No 15

// var str = "The Bumblebee";
// var arr = [];

// for (var i = 0; i < str.length; i++) {
//     arr[i] = str.charAt(i);
// }


// var reply = "no, this is not right";
// var revisedReply = reply.replace("no", "yes");



// Question No 16

// var str = "I have 1 apple and 1 orange.";
// var newStr = str.replace("1", "one");



// Question No 17

// var y = x.replace(/a/g, "z");


//                                                                                     Chapter No 26


// Question No 1

// var roundedNumber = Math.round(number);



// Question No 2\

// var origNum = 4.3; 
// var roundNum = Math.ceil(origNum);



// Question No 3

// var origNum = 4.7; 
// var roundNum = Math.floor(origNum);


// Question No 4

// var number = 5.6; 
// var roundedValue = Math.round(number);


// Question No 5

// var value = 0.5;
// var roundedValue = Math.floor(value);


//                                                                                    Chapter No 27

// // Question No 1
// var randomNumber = Math.floor(Math.random() * 50) + 1;
// alert(randomNumber);


// // Question No 2
// var randomNumber = Math.random(); 


// Question No 3
// var diceRoll = Math.floor(Math.random() * 6) + 1;


// // Question No 4
// var toss = Math.random() < 0.5 ? 'heads' : 'tails';
// alert(toss);


//                                                                                   Chapter No 28 & 29


// Question No 1

// var str = "123";
// var num = parseInt(str, 10); 


// Question No 2

// function convertStringToInt(str) {
//     return parseInt(str, 10);
// }

// var result = convertStringToInt("123");


// Question No 3

// var str = "3.14";
// var num = parseFloat(str); 


// Question No 4

// function isValidNumber(str) {
//     var num = parseFloat(str);
//     return !isNaN(num) && isFinite(num); 
//   }
  
//   console.log(isValidNumber("123"));  
//   console.log(isValidNumber("3.14"));  
//   console.log(isValidNumber("abc"));   
  

// // Question No 5
// var num = 42;
// var str = num.toString(); 


// Question No 6

// function convertNumberToString(num) {
//     return num.toString(); 
//   }
  
//   var result = convertNumberToString(42); 
  

// Question No 7

// var str = "3.14";
// var num = parseInt(str, 10);


//                                                                                     Chapter No 30


// Question No 1

// var num = 3.14159265; 
// var newNum = num.toFixed(4).toString(); 


// Question No 2
// var num = 3.14159; 
// num = parseFloat(num.toFixed(2)); 

// Question No 3

// if (num.toFixed(2).length > 4) {
    
//   }


// Qusetion No 4

// var num = 123.456789;
// alert(num.toFixed(2)); 

  