// 1. Принять от пользователя имена людей для набора в команду. Имена принять
//       и сохранить в новом массиве. Количество имён должно соответсвовать
//       количеству должностей. Массив с должностями - ['Junior developer', 'Middle
//       developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA',
//       'Project manager'].

let arrNameTest = [];
let arrVacans = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
let arrName = ['Vano', 'Jora','Senya','Leonid','Vasya','Oktyabrina'];
let count = 7;
function getNames() { 
    for (let i = 0; i < 7; i++) {
        
        let name = prompt(`Введите поочерёдно ${count} имён`)
        
        count--; 
        arrNameTest.push(name);
        
    }
};
getNames();

console.log(arrNameTest);

for (const iterator of arrNameTest) {
    console.log(iterator);
}



//  dlya 3 parts
// const getRandomNum = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(Math.random(4500));


// console.log(Math.floor(Math.random() * 1000) + 500);