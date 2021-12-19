//Реализовать функцию Function.bind

//Вариант разобран на доп занятии с Женей 19.12.2021
// В кач-ве первого аргумента передаем функцию которую нужно привязать к объекту
// В кач-ве второго аргумента передаем объект к которому нужно привязать функцию из первого аргумента
// В кач-ве 3+ аргумента параметры которые будут передаваться в фукнцию по умолчанию

function bind(func, object, ...args) {
    return function (...args2) {
        object.func = func;

        return object.func(...[...args, ...args2]);
    }
}
