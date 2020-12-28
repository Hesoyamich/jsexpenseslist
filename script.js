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
    savings : true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        return appData.moneyPerDay
    },
    detectLevel: function() {
        if (appData.moneyPerDay <= 800) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 800 && appData.moneyPerDay <= 1750) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 1750) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка!")
        }
    },
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
        }
    },
    chooseOptExpenses: function() {
        for (i=1; i < 4; i++) {
            let optExpens = prompt("Статья необязательных расходов?")
            if ((typeof(optExpens)) === 'string' && (typeof(optExpens)) != null && optExpens != '' &&  optExpens.length < 50) {
                appData.optionalExpenses[i] = optExpens;
            }
            else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт доп. доход? (Перечисли через запятую) ", "");
        while ( items == '' || items == null ) {
            items = prompt("Что принесёт доп. доход? (Перечисли через запятую) ", "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
        appData.income.forEach(function(item, num) {
           console.log("Способы доп. заработка: " + (num + 1) + " " + item) 
        });
    }
};

for ( key in appData ) {
    console.log("Наша программа включает в себя данные: " + key)
}


// appData.chooseExpenses();

// alert("Ежедневный бюджет: " + appData.detectDayBudget());

// appData.detectLevel()

// appData.checkSaving();

// appData.chooseOptExpenses()