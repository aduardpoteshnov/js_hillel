const message = "Введите значение переменной ";

// 1. Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a1 = Number(prompt(message + "a1. 0 или другое число")) === 0 ? alert("Верно") : alert("Неверно");
// 2. Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a2 = Number(prompt(message + "a2. Больше 0")) > 0 ? alert("Верно") : alert("Неверно");
// 3. Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a3 = Number(prompt(message + "a3. Меньше 0")) < 0 ? alert("Верно") : alert("Неверно");
// 4. Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a4 = Number(prompt(message + "a4. Больше или равно 0")) >= 0 ? alert("Верно") : alert("Неверно");
// 5. Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a5 = Number(prompt(message + "a5. Меньше или равно 0")) <= 0 ? alert("Верно") : alert("Неверно");
// 6. Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a6 = Number(prompt(message + "a6. Не 0")) !== 0 ? alert("Верно") : alert("Неверно");
// 7. Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a7 = prompt(message + "a7. Текст test") === "test" ? alert("Верно") : alert("Неверно");
// 8. Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a8 = prompt(message + "a8. Символ 1");
typeof a8 === "string" && a8 === "1" ? alert("Верно") : alert("Неверно");
// 9. Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.
const a9 = Number(prompt(message + "a9. Больше 0 и меньше 5"));
a9 > 0 && a9 < 5 ? alert("Верно") : alert("Неверно")


// 10. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.
const a10 = Number(prompt(message + "a10. Если 0 и 2 будут увеличены иначе поделим"));
if (a10 === 0 || a10 === 2) {
    alert("Результат " + Number(a10 + 7));
} else alert("Результат " + Number(a10 / 10));

// 11. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
const a11 = Number(prompt(message + "a11. 1 или меньше"));
const b1 = Number(prompt(message + "b1 3 или больше"));
if (a11 <= 1 && b1 >= 3) {
    alert(a11 + b1);
} else alert(a11 - b1);

// 12. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.
const a12 = Number(prompt(message + "a12 от 3х до 11ти"));
const b2 = Number(prompt(message + "b2. от 6ти до 14ти"));
((a12 > 2 && a12 < 11) || (b2 >= 6 && b2 < 14)) ? alert("Верно") : alert("Неверно");


// 13. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.
const num = Number(prompt(message + "num. oт 1 до 4х"));
let result;
switch (num) {
    case 1 :
        result = "Зима";
        break;
    case 2 :
        result = "Весна";
        break;
    case 3 :
        result = "Лето";
        break;
    case 4 :
        result = "Осень";
        break;
    default :
        result = null;
}