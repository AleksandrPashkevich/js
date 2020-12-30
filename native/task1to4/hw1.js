'use strict'

let money, time;

function start() {
    money = prompt("enter your month budget: ", '');
    while (isNaN(money) || money == "" || money == null) {
        alert("your enter is incorrect!");
        money = prompt("enter your month budget: ", '');
    }
    time = prompt("Enter the date YYYY-MM-DD", '');
}

start();


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    choooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let firstPart = prompt("Enter this month major item of expenses", ''),
                secondPart = prompt("How much it cost?", '');
            if (typeof (firstPart) === 'string' && typeof (firstPart) != null &&
                typeof (secondPart) != null &&
                firstPart != '' && secondPart != '' &&
                firstPart.length < 50) {
                appData.expenses[firstPart] = secondPart;
            } else {
                alert("Check your input, something wrong!");
                i--;

            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log("Your amount of money is minimal!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log("You are at the middle!");
        } else {
            console.log("You are rich! I hate you!");
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Enter your summ of savings: ", ''),
                percent = +prompt("Enter your savings interest: ", '');
            if (save != null || percent != null || save != "" || percent != "") {
                appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
                alert("Your income from saving is: " + appData.monthIncome);
            }
        }
    },
    chooseOptExpenses: function () {
        let answer;
        for (let i = 0; i < 3; i++) {
            answer = +prompt((i + 1) + ": Enter optional expense: ", '');
            if (answer == null || answer == "") {
                alert("Your enter is not correct!");
                i--;
            } else {
                appData.optionalExpenses[i] = answer;
            }
        }
    },
    chooseIncome: function () {
        let items;
        var itemTest, itemTest1 = false;

        do {
            takeIncoms();
            if (items == '') {
                itemTest1 = false;
            } else {
                itemTest1 = true;
            }
            appData.income = items.split(', ');
            for (let i = 0; i < items.length; i++) {
                if (items[i] == null && isNaN(items[i])) {
                    itemTest = false;
                } else {
                    itemTest = true;
                }

            }
            //console.log(itemTest + " : " + itemTest1);
        } while (itemTest == false | itemTest1 == false); //
        function takeIncoms() {
            items = prompt("What kind of axilary income do you have? Enter data using coma.", '');
        }

        appData.income.push(prompt("Would you like to add something else?"));
        appData.income.sort();
    }

};
appData.detectDayBudget();
appData.detectLevel();
appData.choooseExpenses();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();
showExilaryIncomes();
alert("Daily budget = " + appData.moneyPerDay);

//showAllProgData();

function showExilaryIncomes() {
    console.log("Variants of exilary incomes:");
    // for (let i = 0; i < appData.income.length; i++) {
    //      console.log((i + 1) + ": " + appData.income[i]);
    //  }
    //  console.log("- - - - - - - - - - - ");
     appData.income.forEach(function(_income ,i){
        console.log((i +1) + " : " + appData.income[i]);
     });
}

function showAllProgData(){
    console.log("Our prog involve next elements: ");
    for(let i in appData){
        console.log(i + " : " + appData[i]);         
    }
    console.log( "---------------------");
    console.log(Object.keys(appData).length);
    
}
console.log(appData);