

//#region 1 - Write a program that allow the user to enter a number then print it

// var number = window.prompt("Please Enter Number");
// console.log(Number(number));

//#endregion

//#region 2 - Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var num =  Number(window.prompt("Enter Number"));
// if(num % 3 == 0 && num % 4 == 0) console.log('Yes');
// else console.log('No')

//#endregion

//#region 3 - Write a program that allows the user to insert 2 integers then print the max

// var num1 = Number(window.prompt('Enter firstNumber'));
// var num2 = Number(window.prompt('Enter secondNumber'));

// if(num1 > num2) console.log(num1);
// else console.log(num2);

//#endregion

//#region 4 - Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var number = Number(window.prompt("Enter Number"));

// if(number < 0) console.log('Negative');
// else if(number >= 0) console.log('Positive');
// else console.log('Zero')

//#endregion

//#region 5 - Write a program that take 3 integers from user then print the max element and the min element.

// var num1 = Number(window.prompt('Enter First Number'));
// var num2 = Number(window.prompt('Enter Second Number'));
// var num3 = Number(window.prompt('Enter Third Number'));

// if( num1 >= num2){
//     if(num2 >= num3) console.log('Max Element: ' + num1 + ' Min Element: ' + num3);
//     else console.log('Max Element: ' + num1 + ' Min Element: ' + num2);
// }else if(num2 >= num3){
//     if(num3 >= num1) console.log('Max Element: ' + num2 + ' Min Element: ' + num1);
//     else console.log('Max Element: ' + num2 + ' Min Element: ' + num3);
// }else if(num3 >= num1){
//     if(num2 >= num1) console.log('Max Element: ' + num3 + ' Min Element: ' + num1);
//     else console.log('Max Element: ' + num3 + ' Min Element: ' + num2);
// }

//#endregion

//#region 6 -Write a program that allows the user to insert integer number then check If a number is oven or odd

// var number = Number(window.prompt('Enter Number'));
// if(number % 2 == 0) console.log('even');
// else console.log('odd');

//#endregion

//#region 7 - Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var char = window.prompt('Enter Character');
// if(char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'O' || char == 'o' || char == 'i' || char == 'I' || char == 'u' || char == 'U') console.log('vowel');
// else console.log('Consonant')

//#endregion

//#region 8 - Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var number = Number(window.prompt('Enter Number'));

// for(var i = 1 ; i <= number; i++){
//     console.log(i)
// }


//#endregion

//#region 9 - Write a program that allows userto insert integer then print a multiplication table up to 12.

// var number = Number(window.prompt('Enter Number'));

// for(var i = 1 ; i <= 12; i++){
//     console.log(number + ' * ' + i + " = " +(i * number));
// }

//#endregion

//#region 10 - Write a program that allows to user to insert number then print all even numbers between 1 to this number

// var number = Number(window.prompt('Enter Number'));

// for(var i = 1 ; i <= number; i++){
//     if( i % 2 == 0) console.log(i);
// }

//#endregion

//#region 11 - Write a program that take two integers then print the power

// var number = Number(window.prompt('Enter Number'));
// var power = Number(window.prompt('Enter Power'));

// console.log(number ** power);

//#endregion

//#region 12 - Write a program to enter marks of five subjects and calculate total, average and percentage.

// window.alert('Enter The Marks of Subjects')
// var total = 0;
// for(var i = 1 ; i <= 5; i++){
//     var subj = Number(window.prompt('Enter The Mark of Subject ' + i));
//     total += subj;
// }

// var average = total / 5;
// var percentage = (total / 500) * 100

// console.log('Total Marks = ' + total)
// console.log('Total Average = ' + average)
// console.log('Total Percantage = ' + percentage)

//#endregion

//#region 13 - Write a program to input month number and print number of days in that month.

// window.alert('Enter The Marks of Subjects')
// var total = 0;
// for(var i = 1 ; i <= 5; i++){
//     if(i == 1) var subj = Number(window.prompt('Enter The Mark of Physics: ' ));
//     else if(i == 2) var subj = Number(window.prompt('Enter The Mark of Chemistry: ' ));
//     else if(i == 3) var subj = Number(window.prompt('Enter The Mark of Biology: ' ));
//     else if(i == 4) var subj = Number(window.prompt('Enter The Mark of Mathematics: ' ));
//     else if(i == 5) var subj = Number(window.prompt('Enter The Mark of Computer: ' ));
//     total += subj;
// }

// var per = (total / 500) * 100

// if(per >= 90) console.log('A');
// else if(per >= 80) console.log('B');
// else if(per >= 70) console.log('C');
// else if(per >= 60) console.log('D');
// else if(per >= 40) console.log('E');
// else console.log('F');
//#endregion


//******************************** Using switch case*******************************

//#region 14 - Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt('Enter Character');

// switch(char){
//     case 'a' : console.log('Vowel');
//         break;
//     case 'A' : console.log('Vowel');
//         break;
//     case 'e' : console.log('Vowel');
//         break;
//     case 'E' : console.log('Vowel');
//         break;
//     case 'i' : console.log('Vowel');
//         break;
//     case 'I' : console.log('Vowel');
//         break;
//     case 'o' : console.log('Vowel');
//         break;
//     case 'O' : console.log('Vowel');
//         break;
//     case 'u' : console.log('Vowel');
//         break;
//     case 'U' : console.log('Vowel');
//         break;
//     default : console.log('Consonant')
//         break;  
// }

//#endregion

//#region 15 - Write a program to find maximum between two numbers

// var num1 = Number(window.prompt('Enter First Number'));
// var num2 = Number(window.prompt('Enter Second Number'));


// switch(num1 > num2){
//     case 1 : console.log(num1);
//     break;
//     case 0 : console.log(num2);
//     break;
//     default: console.log('Didnt work');
//     break;
// }


//#endregion

//#region 16 -  Write a program to check whether a number is even or odd

// var num = Number(window.prompt('Enter a Number'));

// switch(num % 2){
//     case 0 : console.log('even');
//     break;
//     default : console.log('odd');
//     break;
// }

//#endregion

//#region 17 - Write a program to check whether a number is positive or negative or zero

// var num = Number(window.prompt('Enter Number'));

// switch(true){
//     case (num < 0): console.log('negative');
//         break;
//     case (num > 0): console.log('positive');
//         break;
//     default : console.log('zero');
//     break;
// }

//#endregion

//#region 18 - Write a program to create Simple Calculator

// var number1 = Number(window.prompt('Enter The First Number'));
// var op = window.prompt('Enter The Operator');
// var number2 = Number(window.prompt('Enter The Second Number'));

// switch(op)
// {
//     case '+' : console.log(number1 + number2);
//     break;
//     case '-' : console.log(number1 - number2);
//     break;
//     case '*' : console.log(number1 * number2);
//     break;
//     case '/' : console.log(number1 / number2);
//     break;
//     default : console.log('invalid operator');
//     break;
// }

//#endregion
