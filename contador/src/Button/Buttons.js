import React from "react"
import "./Buttons.css"

function Button({children,classe,onClick}){
    //const {children, onClick, classe} = props;
    return(
        <button className={classe} onClick={onClick}> 
            {children}
        </button>
    )  
}

export default Button