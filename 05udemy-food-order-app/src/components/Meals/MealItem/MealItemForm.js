import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const quantityInputRef = useRef();
    const [quantityIsValid, setQuantityIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredQuantity = quantityInputRef.current.value
        const enteredQuantityNum = +enteredQuantity;
        if (enteredQuantity.trim().length === 0 || enteredQuantityNum < 1 || enteredQuantityNum > 5) {
            setQuantityIsValid(false);
            return;
        }
        props.onAddToCart(enteredQuantityNum);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label='Quantity'
                ref={quantityInputRef}
                input=
                {{
                    id: 'quantity_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+Add</button>
            {!quantityIsValid && <p> Please enter a valid quantity(1-5).</p>}
        </form>
    );
}
export default MealItemForm;