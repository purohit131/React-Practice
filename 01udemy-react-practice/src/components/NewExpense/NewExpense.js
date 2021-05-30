import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseHandler = (changedExpense) => {
        const expenseData = {
            ...changedExpense,
            id : Math.random().toString()
        }
        props.addExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm saveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};
export default NewExpense;