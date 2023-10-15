let age = 2; 

if (age >= 18) {
  console.log("Совершеннолетний")
} else {
  console.log("Несовершеннолетний")
}

let isStudent = true
if (isStudent === true){
console.log('студент');
}

else{
 
console.log('не студент');
}

let num1 = 5; 
let num2 = 10; 

let sum = num1 + num2;

console.log("Сумма чисел: " + sum)


let day = 3; 

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Некорректный номер дня недели");
}

let temp = 25
if (temp >= 30 ) {
    console.log('горячо')
} else if (temp >= 15 && temp <= 30){ 
    console.log('тепло')
} else  {
    console.log('холодно')  
 }
    

 let score = 80 
 let result = (score>= 60) ? "сдал" : "не сдал";
 console.log(result)
    
 let num = 8 
 if (num % 2 === 0) {
    console.log('четное')

 }
 else {
    console.log('не четное')
 }

 let language = "JavaScript"

 
 if (language=== "JavaScript"){
    console.log('true');

 } else {
    console.log('false');
 }

 let UserRole = "admin"

 if (UserRole==="admin") {
    console.log('доступ разрешен');
 } else if (UserRole=== "editor"){
    console.log('доступ ограничен');
 }else  {
    console.log('доступ запрещен');
 }


 let a = 5
 let b = 10
 let c = 15

 if ( a>= b && a >= c ){
    console.log(5);

 } else if (b >= a && b >= c ){
    console.log(10);

 }else {
    console.log(15);
 }

 let fruit = 'яблоко'

 if (fruit==='яблоко'){
    console.log('красный');

 } else if (fruit==='банан'){
    console.log('желтый');

 } else ('оранжевый')


 let income = 50000
 let incomeLevel=( income <=50000 ) ? "высокий" :(income>=25000) ? "средний" : "низкий"  
 console.log(incomeLevel);

 let grade = "B"; // Замените на вашу буквенную оценку

 switch (grade) {
   case "A":
     console.log("Отлично");
     break;
   case "B":
     console.log("Хорошо");
     break;
   case "C":
     console.log("Удовлетворительно");
     break;
   case "D":
     console.log("Неудовлетворительно");
     break;
   case "F":
     console.log("Провалено");
     break;
   default:
     console.log("Некорректная оценка");
 }

 let password = "mypa"

 if (password >= 8 ) {
    console.log("пароль надежный");
    
 } else {
    console.log("пароль не надежный");
 }

 let x = 12
 let y = 15
 let result1 = (x > y) ? "x больше y" : (x < y) ? "y больше x" : "x и y равны";
 console.log(result1);

 let isRaining = true; 

if (isRaining === true) {
  console.log("Идет дождь");
} else {
  console.log("Дождя нет");
}

let isLeapYear = true; // Замените true или false в зависимости от года

if (isLeapYear === true) {
  console.log("Год високосный");
} else {
  console.log("Год не високосный");
}

let userInput = "текст"; 

if (userInput === "") {
  console.log("Пустая строка");
} else {
  console.log("Строка не пуста");
}

let num12 = 0; 

if (num12 > 0) {
  console.log("Положительное");
} else if (num12< 0) {
  console.log("Отрицательное");
} else {
  console.log("Ноль");
}

let dayOfWeek = "сб"; 

switch (dayOfWeek) {
  case "пн":
  case "вт":
  case "ср":
  case "чт":
  case "пт":
    console.log("Рабочий день");
    break;
  case "сб":
  case "вс":
    console.log("Выходной");
    break;
  default:
    console.log("Некорректный день недели");
}





                                                      
 

   