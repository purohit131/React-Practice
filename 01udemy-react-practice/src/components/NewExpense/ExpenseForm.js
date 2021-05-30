import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [changedTitle, setChangedTitle] = useState('');
    const [changedAmount, setChangedAmount] = useState('');
    const [changedDate, setChangedDate] = useState('');
//    const [userInput, setUserInput] = useState({
//        changedTitle: '',
//        changedAmount: '',
//        changedDate: ''
//    })

    const titleChangeHandler = (event) => {
        setChangedTitle(event.target.value);
//        setUserInput({
//            ...userInput,
//            changedTitle: event.target.value
//        })
    }
    const amountChangeHandler = (event) => {
        setChangedAmount(event.target.value);
//        setUserInput({
//            ...userInput,
//            changedAmount: event.target.value
//        })
    }
    const dateChangeHandler = (event) => {
        setChangedDate(event.target.value);
//        setUserInput({
//            ...userInput,
//            changedDate: event.target.value
//        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : changedTitle,
            amount: +changedAmount,
            date: new Date(changedDate)
        };
        props.saveExpenseData(expenseData);

        setChangedTitle('');
        setChangedAmount('');
        setChangedDate('');
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label> Title </label>
                        <input type="text" value={changedTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label> Amount </label>
                        <input type="number" min="0.01" step="0.01" value={changedAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label> Date </label>
                        <input type="date" min="2019-01-01" step="2022-12-31" value={changedDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick= {props.onCancel}>Cancel</button>
                    <button type="submit">Save Expense</button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm;