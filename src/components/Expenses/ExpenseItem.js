import React, { useState} from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenseItem =(props) => {
    const [title, setTitle1] = useState(props.title);
    

    const clickHandler = () =>{
        setTitle1('completed!')
        // setTitle2('in-progress!')
        console.log(title)

    }
    
    return (
        <Card className="expense-item">
            <div><ExpenseDate date={props.date}/></div>
            <div className='expense-item__description'>
                <h2>{title}</h2>               
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            
        </Card>
    );
}
export default ExpenseItem;