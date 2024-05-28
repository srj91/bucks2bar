var ctx = document.getElementById('myChart').getContext('2d');
let incomeJanuary = document.getElementById('income-january').value;
let expensesJanuary = document.getElementById('expenses-january').value;

let incomeFebruary = document.getElementById('income-february').value;
let expensesFebruary = document.getElementById('expenses-february').value;

let incomeMarch = document.getElementById('income-march').value;
let expensesMarch = document.getElementById('expenses-march').value;

let incomeApril = document.getElementById('income-april').value;
let expensesApril = document.getElementById('expenses-april').value;

let incomeMay = document.getElementById('income-may').value;
let expensesMay = document.getElementById('expenses-may').value;

let incomeJune = document.getElementById('income-june').value;
let expensesJune = document.getElementById('expenses-june').value;

let incomeJuly = document.getElementById('income-july').value;
let expensesJuly = document.getElementById('expenses-july').value;

let incomeAugust = document.getElementById('income-august').value;
let expensesAugust = document.getElementById('expenses-august').value;

let incomeSeptember = document.getElementById('income-september').value;
let expensesSeptember = document.getElementById('expenses-september').value;

let incomeOctober = document.getElementById('income-october').value;
let expensesOctober = document.getElementById('expenses-october').value;

let incomeNovember = document.getElementById('income-november').value;
let expensesNovember = document.getElementById('expenses-november').value;

let incomeDecember = document.getElementById('income-december').value;
let expensesDecember = document.getElementById('expenses-december').value;

var incomeData = [
    incomeJanuary, incomeFebruary, incomeMarch, incomeApril, 
    incomeMay, incomeJune, incomeJuly, incomeAugust, 
    incomeSeptember, incomeOctober, incomeNovember, incomeDecember
];

var expensesData = [
    expensesJanuary, expensesFebruary, expensesMarch, expensesApril, 
    expensesMay, expensesJune, expensesJuly, expensesAugust, 
    expensesSeptember, expensesOctober, expensesNovember, expensesDecember
];

document.querySelector('a[href="#chart"]').addEventListener('click', function() {
    // Place your chart generation code here
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: expensesData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});