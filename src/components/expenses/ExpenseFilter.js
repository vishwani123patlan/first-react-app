import React from 'react'
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import './expenseFilter.css'
function ExpenseFilter(props) {
    const onChangeYearHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    
  return (
    <div className='filter-container'>
        <h3>You can apply filter here!</h3>
        <FormControl variant="outlined" >
        <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value = {props.selected}
          onChange = {onChangeYearHandler}
        >
          <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2019">2019</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ExpenseFilter