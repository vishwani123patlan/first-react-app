import React, { useState } from 'react'
import './expenseForm.css'
import { TextField, Container, Button} from "@material-ui/core"
function ExpenseForm(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    const onChangeTitleHandler = (event) => {
        setTitle(event.target.value)
    }

    const onChangePriceHandler = (event) => {
        setPrice(event.target.value)
    }

    const onChangeDateHandler = (event) => {
        setDate(event.target.value)
    }

    const formSubmitHnadler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            price: price,
            date: new Date(date),
            id: Math.random()
        }
        props.addIntoExpenses(expenseData)
        setTitle("")
        setDate("")
        setPrice("")
    }
  return (
    <Container maxWidth="md" className='expense-form-container' noValidate autoComplete="off">
        <form onSubmit={formSubmitHnadler}>
            <div className='form-two-field'>
                <TextField id="outlined-basic" value={title} InputProps={{ inputProps: { required: true } }} className='form-controls' label="Title" type="text" onChange={onChangeTitleHandler} />
                <TextField id="outlined-basic" value={price} InputProps={{ inputProps: { min: 0, required: true } }}
                className='form-controls' label="Price"  type='number' onChange={onChangePriceHandler} />
                <TextField id="outlined-basic" value={date} InputProps={{ inputProps: { min: "2022-01-01", max: "2022/12/31", required: true } }}
 className='form-controls' label="Date"  type='date' onChange={onChangeDateHandler} />
            </div>
            <div className='submit-button'>
                <Button variant="outlined" type='submit'>Add Expense</Button>
            </div>
        </form>
        
    </Container>
  )
}

export default ExpenseForm