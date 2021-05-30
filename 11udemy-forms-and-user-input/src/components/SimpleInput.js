import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: enteredEmailHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailInputBlurHandler,
      reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
        return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = enteredNameHasError
      ? 'form-control invalid'
      : 'form-control';

  const emailInputClasses = enteredEmailHasError
        ? 'form-control invalid'
        : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler}  onBlur={nameInputBlurHandler} value={enteredName}/>
        {enteredNameHasError && ( <p className='error-text'> Name must not be empty.</p> )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={emailChangeHandler}  onBlur={emailInputBlurHandler} value={enteredEmail}/>
        {enteredEmailHasError && ( <p className='error-text'> Please enter valid email.</p> )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
