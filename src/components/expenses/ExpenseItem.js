import React from 'react'
import './expenseItem.css'
function ExpenseItem(props) {
    const month = props.date.toLocaleString('default', { month: 'long' })
    const day = props.date.toLocaleString('default', { day: '2-digit' })
    const year = props.date.getFullYear()
  return (
    <div className='expensa-item'>
        <div className='expense-date'>{day}-{month}-{year}</div>
        <div className='expense-material'>{props.title}</div>
        <div className='expense-price'>${props.price}</div>
    </div>
  )
}

export default ExpenseItem