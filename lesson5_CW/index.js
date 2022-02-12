/********************************************************************************************/
/* Всі функції повинні бути описані стрілочним типом!!!!                                    */
/*  1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)        */
/*  2. Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)        */
/*  3. Створити функцію яка повертає найбільше число з масиву                               */
/*  4. Створити функцію яка повертає найменьше число з масиву                               */
/*  5. Cтворити функцію яка приймає масив чисел, сумує значення елементів                   */
/*    масиву та повертає його.  Приклад [1,2,10]->13                                        */
/*  6. Створити функцію яка приймає масив чисел та повертає середнє арифметичне             */
/*      його значень.                                                                       */
/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
  (Math використовувати заборонено);
- створити функцію яка заповнює масив рандомними числами
  (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
  limit - аргумент, який характеризує кінцеве значення діапазону.
 */
/* - Функція приймає масив та робить з нього новий масив в зворотньому порядку.
     [1,2,3] -> [3, 2, 1].

/*********************************************************************************************/

/*   1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)   */
document.write(`<h2>____Задача_№1 Створити функцію яка приймає три числа
 та виводить найменьше. (Без Math.min!)</h2>`);
const minFoo = (a, b, c) => {
    let mass = [];
    let i;
    let min;
    mass[0] = a;
    mass[1] = b;
    mass[2] = c;
    min = mass[0];
    for (i = 0; i < mass.length; i++) {
        if (mass[i] < min) {
            min = mass[i];
        }
    }
    console.log('Min=', min);
    //document.write(`<h3>Минимальное значение из ${a}, ${b}, ${c} является: ${min}</h3>`);
    document.write(`<h3>Минимальное значение чисел ${a}, ${b}, ${c} равен: ${min}</h3>`);
}
minFoo(7, 5, 3);
/*  2. Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)  */
document.write(`<h2>____Задача_№2 Створити функцію яка приймає три числа та 
виводить найбільше. (Без Math.max!)</h2>`);
const maxFoo = (a, b, c) => {
    let i;
    let mass = [];
    mass[0] = a;
    mass[1] = b;
    mass[2] = c;
    max = mass[0];
    for (i = 0; i < mass.length; i++) {
        if (mass[i] > max) {
            max = mass[i];
        }
    }
    document.write(`<h3>Максимальное значение чисел ${a}, ${b}, ${c} равно: ${max}</h3>`);
    console.log('Max=', max);
}
maxFoo(7, 9, 3);
/*  3. Створити функцію яка повертає найбільше число з масиву   */
document.write(`<h2>____Задача_№3 Створити функцію яка повертає найбільше число з масиву</h2>`);
const maxMass = (mass) => {
    let i;
    let max;
    max = mass[0];
    for (i = 0; i < mass.length; i++) {
        if (mass[i] > max) {
            max = mass[i];
        }
    }
    console.log('Максимальный элемент массива равен:  ', max);
    return max;
}
let massChis = [-54, 97, 19, 71, 17, 97, 41, 89, 76, 99, 59, 85,
    -25, 29, 52, 95, 42, 96, -44, 82, 24];
document.write(`<h3>Максимальное значение массива равно: ${maxMass(massChis)}</h3>`);
/*  4. Створити функцію яка повертає найменьше число з масиву   */
document.write(`<h2>____Задача_№4 Створити функцію яка повертає найменьше число з масиву</h2>`);
const minMass = (mass) => {
    let i;
    let min;
    min = mass[0];
    for (i = 0; i < mass.length; i++) {
        if (mass[i] < min) {
            min = mass[i];
        }
        console.log('Элемент [',i,'] массива равен:  ', mass[i]);
    }
    console.log('Минимальный элемент массива равен:  ', min);
    return min;
}
document.write(`<h3>Минимальное значение массива равно: ${minMass(massChis)}</h3>`);
/*  5. Cтворити функцію яка приймає масив чисел, сумує значення елементів  */
/*    масиву та повертає його.  Приклад [1,2,10]->13  */
document.write(`<h2>____Задача_№5 Cтворити функцію яка приймає масив чисел, сумує значення елементів
 масиву та повертає його.  Приклад [1,2,10]->13</h2>`);
const summMass = (mass) => {
    let i;
    let sum;
    sum=0;
    for (i = 0; i < mass.length; i++) {
           sum+=mass[i];
//        console.log('Элемент [',i,'] массива равен:  ', mass[i]);
    }
    console.log('Сумма массиа равна:  ', sum);
    return sum;
}
document.write(`<h3>Сумма элементов массива равна: ${summMass(massChis)}</h3>`);
/*  6. Створити функцію яка приймає масив чисел та повертає середнє арифметичне             */
/*      його значень.                                                                       */
document.write(`<h2>____Задача_№6 Створити функцію яка приймає масив чисел та 
повертає середнє арифметичне його значень.</h2>`);
/*
const sredArif = (mass) => {

}
/***/





/* - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
     а виводить найбільше
 */
// (Math використовувати заборонено);
/*
const fFoo = (...rest) => {

}
fFoo(4, 5, 6, 7, 8)


*/











