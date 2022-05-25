import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import ExpenseItem from './ExpenseItem'
import ExpenseForm from './ExpenseForm'
import ExpenseFilter from './ExpenseFilter'
import './expense.css'
import ExpenseChart from './ExpenseChart'

const INITIAL_EXPENSE = [
    {
        "id": Math.random(),
        "title": 'Coffee',
        "date": new Date("2021, 02, 25"),
        "price": 12.5
    },
    {
        "id": Math.random(),
        "title": 'Milk',
        "date": new Date("2021, 04, 15"),
        "price": 22.5
    },
    {
        "id": Math.random(),
        "title": 'Mobile',
        "date": new Date("2022, 05, 2"),
        "price": 500.5
    }
]

function Expense() {
    const [expense, setExpense] = useState(INITIAL_EXPENSE);
    const [filterYear,setFilterYear] = useState("2022")
    

    const addNewExpense = (addedExpense) => {
        const newExpense = [addedExpense, ...expense]
        setExpense(newExpense)
    }

    const filteredExpenses = expense.filter((expense) => {
        return (expense.date.getFullYear() == filterYear)
    });

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear)
        setFilterYear(selectedYear)
    }

  return (
      <div>
          <ExpenseForm addIntoExpenses = {addNewExpense}/>
          <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
          <ExpenseChart expenses={filteredExpenses} />
          <Container className='expense-container'  maxWidth="lg">
            <h4>Expenses</h4>

            { (filteredExpenses.length == 0) ? <p>No Record Found</p> : filteredExpenses.map((ele) => (
                <ExpenseItem key={ele.id} date={ele.date} title={ele.title} price={ele.price}/>
            ))}
        </Container>
      </div>
  )
}

export default Expense