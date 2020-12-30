let mainButton = document.getElementById("start"),
    budgetBlock = document.querySelector(".budget-value"),
    dayBudgetBlock = document.querySelector(".daybudget-value"),
    levelBlock = document.querySelector(".level-value"),
    expensesBlock = document.querySelector(".expenses-value"),
    optionalExpensesBlock = document.querySelector(".optionalexpenses-value"),
    incomeBlock = document.querySelector(".income-value"),
    monthSavingsBlock = document.querySelector(".monthsavings-value"),
    yearSavingsBlock = document.querySelector(".yearsavings-value"),
    expensesFields = document.getElementsByClassName("expenses-item"),
    firstApproveButton = document.querySelector(".expenses-item-btn"),
    secondApproveButton = document.querySelector(".optionalexpenses-btn"),
    countButton = document.querySelector(".count-budget-btn"),
    optionalExpensesFields = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncomeField = document.getElementById("income"),
    savingsCheckBox = document.getElementById("savings"),
    sumField = document.getElementById("sum"),
    percentField = document.getElementById("percent"),
    yearField = document.querySelector(".year-value"),
    monthField = document.querySelector(".month-value"),
    dayField = document.querySelector(".day-value");

let money, time;

if (money == undefined) {
    firstApproveButton.disabled = true;
    secondApproveButton.disabled = true;
    countButton.disabled = true;
}

mainButton.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", 0);
    
    while ( isNaN(money) || money == '' || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }
    appData.budget = money;
    appData.timeData = time;
    budgetBlock.textContent = money.toFixed();
    yearField.value = new Date(Date.parse(time)).getFullYear();
    monthField.value = new Date(Date.parse(time)).getMonth() + 1;
    dayField.value = new Date(Date.parse(time)).getDate();
    firstApproveButton.disabled = false;
    secondApproveButton.disabled = false;
    countButton.disabled = false;
});

firstApproveButton.addEventListener("click", function() {
    let sum = 0;

    for (let i = 0; i < expensesFields.length; i++) {
        let a = expensesFields[i].value,
            b = expensesFields[++i].value;
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesBlock.textContent = sum;
});

secondApproveButton.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesFields.length; i++) {
        let opt = optionalExpensesFields[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesBlock.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countButton.addEventListener('click', function() {
    if (appData.budget != undefined) {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
            console.log(sum);
        }
        console.log(sum);
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudgetBlock.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay <= 800) {
            levelBlock.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 800 && appData.moneyPerDay <= 1750) {
            levelBlock.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 1750) {
            levelBlock.textContent = "Высокий уровень достатка";
        } else {
            console.log("Ошибка!")
        }
    } else {
        dayBudgetBlock.textContent = "Произошла ошибка";
    }
});

chooseIncomeField.addEventListener("input", function() {
    let items = chooseIncomeField.value;
    appData.income = items.split(', ');
    incomeBlock.textContent = appData.income;
});

savingsCheckBox.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumField.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumField.value,
            percent = +percentField.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsBlock.textContent = appData.monthIncome.toFixed(1);
        yearSavingsBlock.textContent = appData.yearIncome.toFixed(1);
    }
});

percentField.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumField.value,
            percent = +percentField.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsBlock.textContent = appData.monthIncome.toFixed(1);
        yearSavingsBlock.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
};

