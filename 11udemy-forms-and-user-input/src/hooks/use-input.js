import { useReducer } from 'react';

const initialInputState = {
    value: '',
    istTouched: false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched};
    }
    if (action.type === 'BLUR') {
        return {value: state.value, isTouched: true};
    }
    if (action.type === 'RESET') {
        return {value: '', isTouched: false};
    }
    return initialInputState;
}

const useInput = (validateValue) => {
    const [inputState, dispatchAction] = useReducer(inputStateReducer, initialInputState);
//    const [enteredValue, setEnteredValue] = useState('');
//    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatchAction({ type: 'INPUT', value: event.target.value});
    };
    const inputBlurHandler = () => {
        dispatchAction({ type: 'BLUR'});
    }
    const reset = () => {
        dispatchAction({ type: 'RESET'});
    }

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}
export default useInput;