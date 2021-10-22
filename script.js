document.write(`<p>1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
       prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
       Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
       городе %Город% и работаю в компании %Компания%. Мои контактные данные:
       %Телефон%, %Почта%.».</p>`) ;

let numTask = 0,
    task;

task = `
            -------Task${++numTask}-------
       `;
console.log(task);

let name,
    age, 
    city,
    phone, 
    email, 
    company;

name = prompt('1.Введите Ваше Имя', 'Иван');
age = prompt('1.Ваш возраст:', 18);
city = prompt('1.Город проживания:', 'Минск');
phone = prompt('1.Номер телефона:', 7777777);
email = prompt('1.Ваш e-mail:', 'ivan.minsk@gmail.com');
company = prompt('1.Место работы', 'ООО "Рога и копыта"');

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

document.write(` <p>2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».</p>`) ;

task = `
            -------Task${++numTask}-------
       `;
console.log(task);

let bornYear = 2021 - age;

console.log(`${name} родился в ${bornYear} году.`);

document.write(` <p>3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.</p>`) ;

task = `
            -------Task${++numTask}-------
       `;
console.log(task);

let strSix = String(prompt('Введите шесть цифр:', 123321));

let sum1 = +strSix[0] + +strSix[1] + +strSix[2];
let sum2 = +strSix[3] + +strSix[4] + +strSix[5];

(sum1 == sum2) ? console.log('Yes') : console.log('No');

document.write(`<p>4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3.</p>`) ;

task = `
            -------Task${++numTask}-------
       `;
console.log(task);

let a = prompt('Введите любое число:', 879.65);

let beNot = a > 0 ? 'Верно' : 'Неверно';

console.log(beNot);

a = 1;
beNot = a > 0 ? 'Верно' : 'Неверно';

console.log(`Если a = 1, то ${beNot}`);

a = 0;
beNot = a > 0 ? 'Верно' : 'Неверно';

console.log(`Если a = 0, то ${beNot}`);

a = -1;
beNot = a > 0 ? 'Верно' : 'Неверно';

console.log(`Если a = -1, то ${beNot}`);

document.write(`<p>5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат.</p>`) ;

task = `
            -------Task${++numTask}-------
       `;
console.log(task);

{
   let a = 10,
       b = 2,
       sum = a + b,
       sub = a - b,
       mult = a * b,
       div = a / b;

   console.log(`Сумма a и b: ${sum}`);
   console.log(`Разность a и b: ${sub}`);
   console.log(`Произведение a и b: ${mult}`);
   console.log(`Частное a и b: ${div}`);
   
   let squer = (sum > 1 ? Math.pow(sum,2) : 0);

   console.log(squer);

   document.write(`<p>6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
       5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
       'Неверно'.</p>`) ;

   task = `
            -------Task${++numTask}-------
          `;
   console.log(task);

   console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Верно' : 'Неверно');
}

document.write(`<p>7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую)</p>`) ;

task = `
         -------Task${++numTask}-------
       `;
console.log(task);

let n = prompt('Введите число n от 0 до 59', 42);

if (n >= 0 && n < 15) {
       console.log(`n равно ${n} и попадает в 1-ю четверть часа`);
} else if(n >= 15 && n < 30) {
       console.log(`n равно ${n} и попадает во 2-ю четверть часа`);
} else if(n >= 30 && n < 45) {
       console.log(`n равно ${n} и попадает в 3-ю четверть часа`);
} else if(n >= 45 && n < 59) {
       console.log(`n равно ${n} и попадает в 4-ю четверть часа`);
} else {
       console.log('Неверно указано число n');
}

document.write(`<p>8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью).</p>`) ;

task = `
         -------Task${++numTask}-------
       `;
console.log(task);

let day = prompt("Введите число от 1 до 31", 25);

if (day >= 1 && day <= 10) {
       console.log(`day равно ${day} и попадает в 1-ю декаду`);
} else if (day >= 11 && day <= 20) {
       console.log(`day равно ${day} и попадает во 2-ю декаду`);
} else if (day >=21 && day <= 31) {
       console.log(`day равно ${day} и попадает в 3-ю декаду`);
} else {
       console.log('Неверно указано число');
}

document.write(`<p>9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.</p>`) ;

task = `
         -------Task${++numTask}-------
       `;
console.log(task);

let days = prompt('Введите количество дней:', 538);

let years = days / 365, 
    months = days / 31,
    weeks = days / 7,
    hours = days * 24,
    mins = hours * 60,
    sec = mins * 60;

{
       console.log(`В количестве дней, равном ${days} содержится:`)

       years = Math.round(years * 100) / 100;  // округление до 2-х знаков после запятой
       months = Math.round(months * 100) / 100;
       weeks = Math.round(weeks * 100) / 100;

       console.log("Количество лет:  " + ((years < 1) ? 'Меньше года' : years));
       console.log("Количество месяцев:  " + ((months < 1) ? 'Меньше месяца' : months));
       console.log("Количество недель:  " + ((weeks < 1) ? 'Меньше недели' : weeks));
       console.log("Количество часов:  " + hours);
       console.log("Количество минут:  " + mins);
       console.log("Количество секунд:  " + sec);

}

document.write(`<p>10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8
       задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
       т.д.). Скрипт определение поры года написать через switch.</p>`) ;

task = `
         -------Task${++numTask}-------
       `;
console.log(task);

let d = prompt('Введите число от 1 до 365', 63);

let month = d / 31;

console.log(`Количество дней - ${d}`)

if ((month - Math.floor(month)) == 0) {
       console.log(`${month}-й месяц`);
} else {
       console.log(`${Math.floor(month + 1)}-й месяц`);
}

/*
switch (true) {
       case (month > 0 && month <= 1):
              console.log('Первый месяц');
       break;

       case (month > 1 && month <= 2):
              console.log('Второй месяц');
       break;

       case (month > 2 && month <= 3):
              console.log('Третий месяц');
       break;

       case (month > 3 && month <= 4):
              console.log('Четвертый месяц');
       break;

       case (month > 4 && month <= 5):
              console.log('Пятый месяц');
       break;

       case (month > 5 && month <= 6):
              console.log('Шестой месяц');
       break;

       case (month > 6 && month <= 7):
              console.log('Седьмой месяц');
       break;

       case (month > 7 && month <= 8):
              console.log('Восьмой месяц');
       break;

       case (month > 8 && month <= 9):
              console.log('Девятый месяц');
       break;

       case (month > 9 && month <= 10):
              console.log('Десятый месяц');
       break;

       case (month > 10 && month <= 11):
              console.log('Одиннадцатый месяц');
       break;

       case (month > 11 && month <= 12):
              console.log('Двенадцатый месяц');
       break;

       default: 
              console.log('Вы ввели неверное число')
}

*/

switch (true) {
       case ((month > 0 && month <= 2) || (month > 11 && month <=12)):
              console.log('Зима');
       break;

       case (month > 2 && month <= 5):
              console.log('Весна');
       break;

       case (month > 5 && month <= 8):
              console.log('Лето');
       break;

       case (month > 8 && month <= 11):
              console.log('Осень');
       break;
}