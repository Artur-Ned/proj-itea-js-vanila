var obj = {};
var work = {};
var arr = ["egor", "Vasiliy", "Gennadiy"];
var position = ["junior", "midl", "senyor"];


for (let i = 0; i < arr.length; i++) {
    
    obj[position[i]] = arr[i];
    
}

console.log(obj);


const employe = prompt(`введіть імя працівника ${pоsitions[0]}`)

const obj = {
name: employe,
position: positions[0]
}
Team.push(obj)


// 1. Да - все пункты в рамках одного проекта
// 2. Есть 2 массива с которых тянем данные в статичные имена name position,  количество итераций соответственно берём из массива
