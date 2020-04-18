


let startBtn = document.getElementById('start'),

	mainLogo = document.querySelector('.logo'),
	
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),

    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),

    
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    
    expenses = document.querySelectorAll('.expenses-item'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    
    chooseIncome = document.querySelector('.choose-income'),

    checkSavings = document.querySelector('.checksavings'),
    chooseSumm = document.querySelector('.choose-sum'),
    choosePerCent = document.querySelector('.choose-percent');

    mainLogo.style.fontSize = '50px';

    let expensesEntered = false,
    optionalExpensesEntered = false;

    let allExpenses = 0;

	
	let money, time;
    startBtn.disabled = true;

function checkingToStart(){
    if(expensesEntered === true && optionalExpensesEntered === true){
        startBtn.disabled = false;
        console.log( "expensesEntered: " + expensesEntered + "optionalExpensesEntered : " + optionalExpensesEntered);
    }
}
	startBtn.addEventListener('click', function(){
	
		time = prompt("Enter the date YYYY-MM-DD", '');
		money = +prompt("enter your month budget: ", '');
			
		while (isNaN(money) || money == "" || money == null) {
		        alert('Your enter is incorrect!');
		        money = prompt("enter your month budget: ", '');
			}
			appData.budget = money;
			appData.timeData = time;
            budgetValue.textContent = money.toFixed(2) + ' UAH';
            			
			//appData.detectDayBudget();
			
			
			yearValue.value = new Date(Date.parse(time)).getFullYear();
			monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
            dayValue.value = new Date(Date.parse(time)).getDate();
            
            levelValue.textContent = appData.detectLevel();
			});

	expensesItemBtn.addEventListener('click', function(){
		var sum = 0;

		for (let i = 0; i < expenses.length; i+=1) {
            let firstPart = expenses[i].value,
				secondPart = +expenses[++i].value;
				
            if (typeof (firstPart) === 'string' && typeof (firstPart) != null &&
                typeof (secondPart) != null &&
                firstPart != '' && secondPart != '' &&
                firstPart.length < 50) {
                    allExpenses += secondPart;
				appData.expenses[firstPart] = secondPart;
				sum = sum + (+secondPart);				
            } else {
               // alert("Check your input, something wrong!");
                i= i-1;

            }
           
        }
       // console.log('sum = ' + sum);
        expensesValue.textContent = sum + ' UAH';
        expensesEntered = true;
        checkingToStart();
        console.log("e: " + expensesEntered);
       // showExilaryIncomes();
    });
    
    optionalExpensesBtn.addEventListener('click', function(event){
        let optionalExpensesShowing = '';
        for(let i = 0; i< optionalExpensesItem.length; i++){
            appData.optionalExpenses[i] = optionalExpensesItem[i].value;
           optionalExpensesShowing = optionalExpensesShowing + " " 
           + appData.optionalExpenses[i] + ", <br>";
          
        }
        optionalExpensesValue.innerHTML = optionalExpensesShowing;
        optionalExpensesEntered = true;
        checkingToStart();
        console.log("O E : " + optionalExpensesEntered);
    });

    countBudgetBtn.addEventListener('click', function(event){
        appData.detectDayBudget();
       // appData.moneyPerDay = ((appData.budget  - allExpenses)/ 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay + ' UAH';
        appData.detectLevel();

        
    });


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
	savings: false,
    choooseExpenses: function () {
        
    },
    detectDayBudget: function () {
        console.log("allExpenses = " + allExpenses);
        appData.moneyPerDay = ((appData.budget  - allExpenses)/ 30).toFixed(2);
        console.log("monney Per Day: " + appData.moneyPerDay);
    },
    detectLevel: function () {        
        let levelOfMoney = "";
        if (appData.moneyPerDay < 100) {
            levelOfMoney = "Your amount of money is minimal!";
        } else if (appData.moneyPerDay > 99 && appData.moneyPerDay < 1000) {
            levelOfMoney = "You are at the middle!";
        } else if (appData.moneyPerDay>999){
            levelOfMoney = "You are rich! I hate you!";
        }
        levelValue.textContent = levelOfMoney;
        console.log(appData.moneyPerDay);
        console.log("Level of money: "+ levelOfMoney);
        return levelOfMoney;
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

chooseIncome.addEventListener('input', function(){
    let item = chooseIncome.value;
    appData.income = item.split(", ");
    incomeValue.textContent= appData.income;
} );

checkSavings.addEventListener('click', function(){
if(appData.checkSavings === false){
    appData.checkSavings = true;
}else{
    appData.checkSavings = false;
} 
});

chooseSumm.addEventListener('input', function(){  
if (appData.checkSavings === true){
let sum = +chooseSumm.value,
    percent = +choosePerCent.value;
    appData.monthIncome = sum/100/12*percent;
    console.log("yearSavings = " + appData.yearSavingsValue);
    monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearSavingsValue.textContent = (appData.monthIncome*12).toFixed(2);
    }
});

choosePerCent.addEventListener('input', function(){
    if (appData.checkSavings === true){
        let sum = +chooseSumm.value,
            percent = +choosePerCent.value;
            appData.monthIncome = sum/100/12*percent;
            console.log("yearSavings = " + appData.yearSavingsValue);
            monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
            yearSavingsValue.textContent = (appData.monthIncome*12).toFixed(2);
    }
});

function showAllProgData(){

  console.log("Our prog involve next elements: ");
    for(let i in appData){
        console.log(i + " : " + appData[i]);         
    }
    console.log( "---------------------");
    console.log(Object.keys(appData).length);
    
}