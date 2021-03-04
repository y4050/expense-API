const db = require('./models');

const createExpenses = async() =>{
    const newExpenses = await db.Expense.create({
        name: "Coffee",
        category: "Beverage",
        date: Date(),
        amount: 2.34,
    },{
        name: "Sandwich",
        category: "Food",
        date: Date(),
        amount: 5.67,
    });
    console.log(newExpenses)
};

// run the functions
// createExpenses();
