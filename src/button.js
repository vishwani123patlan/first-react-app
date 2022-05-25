import React from "react";
import "./index.css"

const Button = ({title = "Nil"}) => {
  return(
    <div>
        <button className="button">{title}</button>
    </div>
  )  
}

export default Button