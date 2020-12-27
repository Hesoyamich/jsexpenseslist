let money = prompt("Ваш бюджет на месяц?", 0),
    time = prompt("Введите дату в формате YYYY-MM-DD", ),
    firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", 0),
    secondQuestion = prompt("Во сколько обойдется?", 0);


let appData = {
    budget : money,
    timeData : time,
    expenses : {
        firstQuestion : secondQuestion
    },
    optionalExpenses : null,
    income : null,
    savings : false
};

alert(appData.budget / 30);