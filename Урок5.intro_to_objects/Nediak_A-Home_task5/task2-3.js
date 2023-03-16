// 2. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект, содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о сотруднике.
//     Реализовать заполнение массива пользователем.
//        {
//          name: 'Yegor',
//          sName: 'M',
//          age: 18,
//          occupation: 'developer',
//          show: function(){}
//        },

// 3. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, отсортировать его по имени сотрудника и вывести данные о них при помощи ранее созданного метода



const sumOfObjinArr = +prompt("Введи колличество обьектов в массиве");
const arrOfWorkers = [];

for (let i = 0; i < sumOfObjinArr; i++) {
   let obj = {
        name: prompt("Имя"),
        sName: prompt("Фамилия"),
        age: prompt("возраст"),
        occupation: prompt("occupation"),
       show: function () {console.log(`${this.name} ${this.sName} ${this.age} ${this.occupation}`)},
    }
    // obj.show();
    arrOfWorkers.push(obj);
 
}
    for (const iterator of arrOfWorkers) {
        // console.log(iterator);
        iterator.show();
    }

console.log(arrOfWorkers);


arrOfWorkers.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  
  return 0;
});



// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

// ВАРИАНТ БЕЗ МУЧЕНИЯ С ПРОМТОМ!!! (3 ОБЬЕКТА ЗАПОЛНЕНЫ УЖЕ)
// const test = [
//     {
//         name: 'Yegor',
//         sName: 'M',
//         age: 18,
//         occupation: 'developer',
//         show: function () {console.log(`${this.name} ${this.sName} ${this.age} ${this.occupation}`)}
//     }, {
//         name: 'Art',
//         sName: 'FDR',
//         age: 60,
//         occupation: 'killer',
//         show: function () {console.log(`${this.name} ${this.sName} ${this.age} ${this.occupation}`)}
//     }, {
//         name: 'Mihail',
//         sName: 'Ter',
//         age: 20,
//         occupation: 'fermer',
//         show: function () {console.log(`${this.name} ${this.sName} ${this.age} ${this.occupation}`)}
//     }];

// for (const iterator of test) {
//     console.log(iterator);
//     iterator.show();
//     }



// test.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
  
//   return 0;
// });

// console.log(test);


// ЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖ

// ДРУГИ ЭКСПЕРЕМЕНТЫ
// хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх
// const test = [{
//         name: 'Yegor',
//         sName: 'M',
//         age: 18,
//         occupation: 'developer',
//         show: function () {console.log(`${test.name} ${test.sName} ${test.age} ${test.occupation}`) }
// }, {
//         name: 'Art',
//         sName: 'FDR',
//         age: 60,
//         occupation: 'killer',
//         show: function () {console.log (`${test.name} ${test.sName} ${test.age} ${test.occupation}`) }
// }]   


// for (const iterator of test) {
//     console.log(iterator);
//     iterator.show();
//     }

// ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх

// test.show();
 

// let obj = {
//     name: 'Yegor',
//     sName: 'M',
//     age: 12,
//     occupation: "occupation",
//     show: function () { console.log(`${obj.name} ${obj.sName} ${obj.age} ${obj.occupation}`) }
// }
// obj.show();