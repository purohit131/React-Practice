import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const dateChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  });

  return (

    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onDateChange={dateChangeHandler}/>
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense}/>
    </Card>

  );
}

export default Expenses;