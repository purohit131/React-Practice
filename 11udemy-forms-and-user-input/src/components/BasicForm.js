import useInput from '../hooks/use-input';

const validName = value => value.trim() !== '';
const validEmail = value => value.includes('@');

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: enteredFirstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameInputBlurHandler,
        reset: resetFirstNameInput
      } = useInput(validName);

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: enteredLastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameInputBlurHandler,
        reset: resetLastNameInput
    } = useInput(validName);
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput
    } = useInput(validEmail);

    let formIsValid = false;

    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
      formIsValid = true
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }
        console.log('Submitted');
        console.log(enteredFirstName,enteredLastName,enteredEmail);
        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    const firstNameInputClasses = enteredFirstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = enteredLastNameHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = enteredEmailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameInputBlurHandler}/>
          {enteredFirstNameHasError && ( <p className='error-text'> First Name must not be empty.</p> )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameInputBlurHandler}/>
          {enteredLastNameHasError && ( <p className='error-text'> Last Name must not be empty.</p> )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailInputBlurHandler}/>
        {enteredEmailHasError && ( <p className='error-text'> Please enter valid Email id</p> )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
