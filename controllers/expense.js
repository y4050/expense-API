const db = require('../models');

const index = (req, res) => {
  db.Expense.find({}, (err, foundExpenses) => {
    if (err) console.log('Error in expense#index:', err);
    res.json(foundExpenses);
  });
}

const show = (req, res) => {
    db.Expense.findById(req.params.id, (err, foundExpense) => {
        if (err) console.log('Error in expense#show:', err);
        res.json(foundExpense);
    });
};

const create = (req, res) => {
    db.Expense.create(req.body, (err, savedExpense) => {
        if (err) console.log('Error in expense#create:', err);
        res.json(savedExpense);
    });
};

const update = (req, res) => {
    db.Expense.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedExpense) => {
        if (err) console.log('Error in expense#update:', err);
        res.json(updatedExpense);
    });
};

const destroy = (req, res) => {
    db.Expense.findByIdAndDelete(req.params.id, (err, deletedExpense) => {
        if (err) console.log('Error in expense#destroy:', err);
          res.sendStatus(200);
          console.log(deletedExpense);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
