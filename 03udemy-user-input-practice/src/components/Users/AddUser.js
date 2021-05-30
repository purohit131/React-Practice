import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

const AddUser = (props) => {
    const userNameRef = useRef();
    const ageRef = useRef();
//    const [enteredUserName, setEnteredUserName] = useState('');
//    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const submitFormHandler = (event) => {
       event.preventDefault();
       const enteredUserName = userNameRef.current.value;
       const enteredAge = ageRef.current.value;
       if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
         setError({
            title: "Invalid Input",
            message: "Please enter valid Username and Age "
         })
         return;
       }
       if(+enteredAge < 1){
         setError({
            title: "Invalid Age",
            message: "Please enter valid Age (>0) "
         })
         return;
       }
       console.log(enteredUserName, enteredAge);
       props.onAddUser(enteredUserName, enteredAge)
       userNameRef.current.value = '';
       ageRef.current.value = '';
//       setEnteredUserName('');
//       setEnteredAge('');
    };

//    const userNameChangeHandler = (event) => {
//        setEnteredUserName(event.target.value);
//    }
//    const ageChangeHandler = (event) => {
//        setEnteredAge(event.target.value);
//    }
    const errorResetHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorResetHandler}/>}
            <Card className={classes.input}>
                 <form onSubmit={submitFormHandler}>
                    <label htmlFor="user_name"> UserName</label>
                    <input id="user_name" type="text" ref={userNameRef} />
                    <label htmlFor="age"> Age (Years)</label>
                    <input id="age" type="number" ref={ageRef} />
                    <Button type="submit">Add User </Button>
                 </form>
            </Card>
        </Wrapper>
    )
}
export default AddUser;