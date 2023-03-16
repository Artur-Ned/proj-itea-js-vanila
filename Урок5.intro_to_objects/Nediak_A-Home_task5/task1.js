// 1. Создать объект Calculator, который должен содержать методы для расчета суммы, разницы, произведения и деления двух чисел.
//        Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
//        В зависимости от принятого знака операции, вызвать соответствующий метод.


// let calculator = {
//     number1: +prompt("Вести 1-ое число"),
//     number2: +prompt("Вести 2-ое число"),
//     operator: +prompt("Вести знак операяции число"),
// }

let calculator = {
    number1: +prompt("Ввести 1-ое число"),
    number2: +prompt("Ввести 2-ое число"),
    operator: prompt("Вести знак операяции число"),
    sum: function () {
        let result = calculator.number1 + calculator.number2;
        console.log(result);  
    },
    minus: function () {
        let result = calculator.number1 - calculator.number2;
        console.log(result);  
    },
     divide: function () {
         let result = calculator.number1 / calculator.number2;
        console.log(result);  
    },
     multiply: function () {
         let result = calculator.number1 * calculator.number2;
        console.log(result);  
    },
    start: function(){if(calculator.operator == "+"){calculator.sum()} if(calculator.operator == "-"){calculator.minus()} if(calculator.operator == "*"){calculator.multiply()} if(calculator.operator == "/"){calculator.divide()}},
}
calculator.start();
// calculator.sum();
// calculator.minus();
// calculator.divide();
// calculator.multiply();
