'use strict'

let startBtn = document.getElementById('start'),

    mainLogo = document.querySelector('.logo'),

    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),

    
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('monthsavings-value'),
    yearSavingsValue = document.querySelector('yearsavings-value'),
    
    expenses = document.querySelectorAll('.expenses-item'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    
    chooseIncome = document.querySelector('.choose-income'),

    checkSavings = document.querySelector('.checksavings'),
    chooseSumm = document.querySelector('.choose-sum'),
    choosePerCent = document.querySelector('.choose-percent');

    mainLogo.style.fontSize = '50px';
    
    

  //  testing();

    function testing(){
    console.log("btn name: " + startBtn.textContent);
    
for(let i=0; i<expenses.length; i++){
    console.log(i + ": " + "expenses: " + expenses[i].className); 
}  
    console.log("budget value: "+ budgetValue.className);
    console.log("day budget: " + dayBudgetValue.className);
    }