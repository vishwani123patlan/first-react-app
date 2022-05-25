import React, { useState } from "react"
import Icon from "./components/icon";
import Expense from "./components/expenses/Expense";
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";


const App = () => {
    return(
      <div>
          <Expense />
      </div>
    )
}

export default App; 