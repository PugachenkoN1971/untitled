/*********************************************************************************************/
/* 1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)          */
/* 2. Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)          */
/* 3. Створити функцію яка повертає найбільше число з масиву                                 */
/* 4. Створити функцію яка повертає найменьше число з масиву                                 */
/* 5. Створити функцію яка приймає масив чисел, сумує значення елементів масиву              */
/*    та повертає його. Приклад [1,2,10]->13                                                 */
/* 6. Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. */
/* 7. Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,             */
/*    а виводить найбільше (Math використовувати заборонено);                                */
/* 8. Створити функцію яка заповнює масив рандомними числами  (цей код генерує рандомні      */
/*    числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.      */
/* 9. Створити функцію яка заповнює масив рандомними числами в діапазоні                     */
/*    від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.        */
/* 10. Функція приймає масив та робить з нього новий масив в зворотньому                     */
/*     порядку. [1,2,3] -> [3, 2, 1].                                                        */
/*********************************************************************************************/
document.write(`<h1>ClassWork_JS #4</h1>`);
console.log('ClassWork_JS #4');
/* 1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!) */
document.write(`<h2>___Задание 1____Створити функцію яка приймає три числа та виводить 
найменьше. (Без Math.min!</h2>`);
let a1 = 10;
let a2 = 15;
let a3 = -99;
let min1;

function fmin(a, b, c) {
    let min;
    let i;
    let mass = [];
    mass[0] = a;
    mass[1] = b;
    mass[2] = c;
    min = mass[0];
    for (i = 0; i < 3; i++) {
        if (mass[i] < min) {
            min = mass[i];
        }
    }
    return min;
}

min1 = fmin(a1, a2, a3);
console.log(min1);
document.write(`<h2>Минивальное число из: ${a1},  ${a2},  ${a3} равно ${min1}</h2>`)
/* 2. Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)  */
document.write(`<h2>___Задание 2____Створити функцію яка приймає три числа та 
виводить найбільше. (Без Math.max!)</h2>`);
let max1;

function fmax(a, b, c) {
    let max;
    let mass = [];
    let i;
    mass[0] = a;
    mass[1] = b;
    mass[2] = c;
    max = mass[0];
    for (i = 0; i < 3; i++) {
        if (mass[i] > max) {
            max = mass[i];
        }
    }
    return max;
}

max1 = fmax(a1, a2, a3);
console.log(max1);
document.write(`<h2>Максимальное число из: ${a1},  ${a2},  ${a3} равно ${max1}</h2>`);
/* 3. Створити функцію яка повертає найбільше число з масиву */
document.write(`<h2>___Задание 3____Створити функцію яка повертає найбільше число з масиву</h2>`);
//let mass1 = [2, -44, 645, 854, 25, -65, 83, 665, 987, -951, 753, -652, 100, 348, -550];
let mass1=[2,2,2,2,2,2,2,2,2,2,2];
function fmaxMass1(mass) {
    let max;
    let i;
    max = mass[0];
    for (i = 0; i < mass.length; i++) {
        if (mass[i] > max) {
            max = mass[i];
        }
        console.log(mass[i]);
        document.write(`<h3>Элемент ${i + 1} равен ${mass[i]}</h3>`);
    }
    return max;
}

max1 = fmaxMass1(mass1);
document.write(`<h3>Максимальное число в массиве равно: ${max1}</h3>`);
/* 4. Створити функцію яка повертає найменьше число з масиву */
document.write(`<h2>___Задание 4____Створити функцію яка повертає найменьше число з масиву</h2>`);

function fminMass1(mass) {
    let min;
    let i;
    min = mass[0];
    for (i = 0; i < mass.length; i++) {
        if (mass[i] < min) {
            min = mass[i];
        }
        console.log(mass[i]);
        document.write(`<h3>Элемент ${i + 1} равен ${mass[i]}</h3>`);
    }
    return min;
}

min1 = fminMass1(mass1);
document.write(`<h3>Минимальное число в массиве равно: ${min1}</h3>`);
/* 5. Створити функцію яка приймає масив чисел, сумує значення елементів масиву              */
/*    та повертає його. Приклад [1,2,10]->13                                                 */
document.write(`<h2>___Задание 5____Створити функцію яка приймає масив чисел, 
сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13</h2>`);
let sumMas;
function massSumm(mass) {
    let i;
    let summ = 0;
    for (i = 0; i < mass.length; i++) {
        summ += mass[i];
    }
    return summ;
}
sumMas = massSumm(mass1);
document.write(`<h3>Сумма элементов массива mass1 равна: ${sumMas}</h3>`);
/* 6. Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень. */
document.write(`<h2>___Задание 6____Створити функцію яка приймає масив чисел та повертає
 середнє арифметичне його значень.</h2>`);
let SredAr;
function sredArM(mass) {
    let i;
    let sred;
    let summ=0;
    for (i = 0; i < mass.length; i++) {
        summ += mass[i];
    }
    sred=summ/mass.length;
    return sred;
}
SredAr=sredArM(mass1);
document.write(`<h3>Среднее арифметическое массива mass1 равно: ${SredAr}</h3>`);

