let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 0);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
    while ( isNaN(money) || money == '' || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }
}

start();
    

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдётся?", "");
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    return appData.moneyPerDay
}

alert("Ежедневный бюджет: " + detectDayBudget());

function detectLevel() {
    if (appData.moneyPerDay <= 800) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 800 && appData.moneyPerDay <= 1750) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 1750) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка!")
    }
}

detectLevel()

function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
    }
}

checkSaving();

function chooseOptExpenses() {
    for (i=1; i < 4; i++) {
        let optExpens = prompt("Статья необязательных расходов?")
        if ((typeof(optExpens)) === 'string' && (typeof(optExpens)) != null && optExpens != '' &&  optExpens.length < 50) {
            appData.optionalExpenses[i] = optExpens;
        }
        else {
            i = i - 1;
        }
    }
}

chooseOptExpenses()