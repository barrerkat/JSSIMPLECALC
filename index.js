alert('WELCOME. THIS IS A SIMPLE ARITHMETIC CALCULATOR');
const num1 = parseFloat(prompt('Please enter the first number: '));
const operator = prompt('Enter your operator of choice: (+, -, *, /, %)');
const num2 = parseFloat(prompt('Please enter the second number: '));
let result = 0;
if (isNaN(num1) || isNaN(num2)){
alert('Wrong Input! Not a Number. Please try Again.');
}else{
if(operator == '+'){
result = num1 + num2;
}else if(operator == '-'){
result = num1 - num2;
}else if(operator == '*'){
result = num1 * num2;
}else if(operator == '/'){
result = num1 / num2;
}else if(operator == '%'){
result = num1 % num2;
}
alert(num1 + '' + operator + '' + num2 + '=' + result)}