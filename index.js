// 1. Принять от пользователя имена людей для набора в команду. Имена принять
//       и сохранить в новом массиве. Количество имён должно соответсвовать
//       количеству должностей. Массив с должностями - ['Junior developer', 'Middle
//       developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA',
//       'Project manager'].

let arrName = [];
let arrVacans = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
let arrNameTest  = ['Vano', 'Jora','Senya','Leonid','Vasya','Oktyabrina', 'Senya'];
let count = 7;
function getNames() { 
    for (let i = 0; i < 7; i++) {
        
        let name = prompt(`Введите поочерёдно ${count} имён`)
        
        count--; 
        arrName.push(name);
        
    }
};
// getNames();


// 2. Создать объект team в котором будут храниться новые
//       объекты-сотрудники с параметрами name и position, данные для этих свойств
//       добавляем из массивов.

let team = {};

function createTeam() {
    for (let i = 0; i < arrNameTest.length; i++) {
        team[`woker${i}`] = new Object;
        team[`woker${i}`].name = arrNameTest[i];
        // team[`woker${i}`].name = arrName[i];
        team[`woker${i}`].position = arrVacans[i];
    }
}

// createTeam();
 

// 3. Добавить сотрудникам зарплаты (свойство salary)
//       при помощи метода Math.random(), который будет выдавать произвольное число
//       в промежутке между N1 и N2 исходя из принципа: если в должности есть слово
//       "junior" сумма будет от 500 до 1000; если в должности есть слово "middle"
//       сумма будет от 1500 до 2000; если в должности есть слово "senior" сумма
//       будет от 2500 до 3000; для всех остальных - от 4000 до 4500; Для
//       определения того есть ли слово в имени должности используйте метод
//       str.indexOf('часть строки для поиска'). Например: var name = 'Junior
//       developer'; name.indexOf('Junior'); //в данном случае вернет 0, если такая
//       строка отсутсвует вернет -1. //Регистр имеет значение, по этому строка
//       "junior" вернет -1



function setSalary() {
    const getRandomNum = (min, max) => {
            return Math.floor(Math.random() * (max - min) + min)
    };
    
    for (const key in team) {
        let obj = team[key];
        // console.log(obj);
        let elem = team[key]["position"];
        // obj["salary"] = 5;
        // console.log(elem.indexOf('Junior'))
        if (elem.indexOf('Junior') == 0) {obj["salary"] = getRandomNum(500, 1000)} else
        if (elem.indexOf('Middle') == 0) {obj["salary"] = getRandomNum(1500, 2000)} else
        if (elem.indexOf('Senior') == 0) { obj["salary"] = getRandomNum(2500, 3000)}
        else { obj["salary"] = getRandomNum(4000, 4500) }
        }
}
// setSalary();


// 4 Добавить каждому сотруднику метод
//       tellAboutYourSelf(), который будет сообщать информацию о пользователе
//       (например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").

// console.log(`Имя - ${this.name} - должность ${this.position}- зарплата ${this.salary}`)
function SetMetodTellAboutYourSelf() {
    for (const key in team) {
    let obj = team[key];
    obj.TellAboutYourSelf = function (){console.log(`Меня зовут - ${obj.name} и я ${obj.position}. Я зарабытваю ${obj.salary}`);}
    }
};
// SetMetodTellAboutYourSelf();

// team.woker1.TellAboutYourSelf();
// team.woker2.TellAboutYourSelf();

// 5) Добавить объекту team метод showTeam(), который будет выводить
//       информацию о всех сотрудниках в консоль в формате: "John - Project
//       manager. Зарплата - 4863$."* Для удобства создайте по порядку все
//       необходимые функции и в конце сделать вызов этих функций в логическом
//       порядке. Например: getNames(); createTeam(); setSalary(); создание цикла
//       для установки метода tellAboutYourSelf(); создание team.showTeam =
//       function() {...}; вызов метода showTeam();

function showTeam() {
    for (const key in team) { 
        // console.log(key);
        let obj = team[key];
        obj.TellAboutYourSelf();  
    }}
    

// getNames();
createTeam();
setSalary();
SetMetodTellAboutYourSelf();
showTeam();
// console.log(team);















// point.show_coords = function () {
//         console.log("x = " + point.x + " y = " + point.y);
//       };


//  dlya 3 parts
// const getRandomNum = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(Math.random(4500));


// console.log(Math.floor(Math.random() * 1000) + 500);

//  вариант
// function getRandomInt(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min};
