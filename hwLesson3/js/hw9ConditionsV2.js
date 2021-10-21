// При загрузке страницы нужно показать пользователю окно, в котором спросить его год рождения.
// Когда он введет его и нажмет ОК, спросить у него, в каком городе он живет.
// При удачном раскладе показать ему еще одно окно, где спросить его любимый вид спорта.
// При нажатии на ОК показываем ему окно, где должна быть отображена следующая информация:
//
// 1) Его возраст.
//
// 2) Если пользователь введет Киев, Москва или Минск,
//    то показать ему сообщение – “Ты живешь в столице …”
//    на место точек подставляем страну, столицу которой он ввел.
//    Иначе показываем ему “ты живешь в городе …” и на место точек – введенный город.
//
// 3) Выбираем сами три вида спорта и три чемпиона в этих видах.
//    Соответственно, если пользователь введет один из этих видов спорта,
//    показываем ему сообщение “Круто! Хочешь стать …”
//    подставляем на место точек имя и фамилию чемпиона.
//    Всё это должно быть отображено в одном окне.
//
// 4) Если в каком-то из случаев он не захочет вводить информацию и нажмет Отмена,
//    показать ему сообщение – “Жаль, что Вы не захотели ввести свой(ю) …” и указываем,
//    что он не захотел вводить – дату рождения, город или вид спорта.

const userData = {
    'возраст': 'данные отсутствуют',
    'город': 'данные отсутствуют',
    'вид спорта': 'данные отсутствуют',
};

const capitals = {
    'киев' : 'Ты живешь в Киеве, столице Украины',
    'москва': 'Ты живешь в Москве, столице России',
    'минск': 'Ты живешь в Минске, столице Беларусии'
};

const sportChampions = {
    'футбол' : 'Коментатор Уткин',
    'теннис' : 'Маша Шарапова',
    'шахматы' : 'Гарик Каспаров'
};

function getTextForAge(age) {
    if (age !== 'данные отсутствуют') {
        return `Ты молод и полон сил, кол-во прожитых тобой лет = ${age}`;
    } else {
        return `Возраст: ${age}`;
    }
}

function getTextForCity(city) {
    city = city.toLowerCase();
    if (city !== 'данные отсутствуют') {
        if (capitals[city] !== undefined) {
            return capitals[city];
        }
        return `Ты живешь в городе ${city}`;
    } else {
        return `Город проживания: ${city}`;
    }
}

function isNextStepActual(){
    return confirm(`Информация о ${key}, отсутстует, возможно ты не хочешь распространять эти данные,` +
        `но у нас еще осталось пара вопросов, если хочешь продолжить нажми OK!`);
}

function getTextForSport(sport) {
    sport = sport.toLowerCase();
    if(sport !== 'данные отсутствуют') {
        if (sportChampions[sport] !== undefined) {
            return `Ты любишь ${sport} \nИ возможно хочешь быть известным как ${sportChampions[sport]}`;
        } else return `Ты любишь ${sport}`;
    } else {
        return `Вид спорта: ${sport}`;
    }
}

for (key in userData) {
    let userInput = prompt(`Пожалуйста введите ${key}`);
    if (userInput !== null && userInput !== undefined && userInput.length > 0) {
        userData[key] = userInput;
    } else {
        if (!isNextStepActual()) {
            break;
        }
    }
}

if (confirm("Нажми ОК, если хочешь увидеть информацию которую мы о тебе собрали")) {
        alert(getTextForAge(userData['возраст']) + "\n" +
            getTextForCity(userData['город']) + "\n" +
            getTextForSport(userData['вид спорта']));
} else {
        alert('Нет так нет')
}