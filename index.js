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
// console.log(arrName);

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
   
    //    console.log(team);  
}

createTeam();
 

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

// function setSalary() {
//     for (const key in team) {
//     if (Object.hasOwnProperty.call(team, key)) {
//         const element = team[key];    
//         element["salary"] = 5;
//         console.log(element);        
//     }
        
    
// }
// console.log(team);}


for (const key in team) {
    let elem = team[key]["position"];  
    console.log(elem.indexOf('Junior'))
    // if (str.indexOf('Junior') == 0) { };


}



//  dlya 3 parts
// const getRandomNum = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(Math.random(4500));


// console.log(Math.floor(Math.random() * 1000) + 500);

//  вариант
// function getRandomInt(min, max) {
//             return Math.floor(Math.random() * (max - min + 1)) + min};
