import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModelOverlay = (props) => {
    return <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    {props.message}
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
           </Card>
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop')
            )}
            {ReactDOM.createPortal(
                <ModelOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('modal_overlay')
            )}
        </React.Fragment>
    )
}
export default ErrorModal;