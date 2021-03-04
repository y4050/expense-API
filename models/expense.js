const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
    name: String,
    category: String,
    date: Date,
    amount: Number,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
