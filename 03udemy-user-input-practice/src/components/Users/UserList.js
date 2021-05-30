import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                { props.users && props.users.map((user) => (
                    <li key={user.id}>
                        {user.userName} is ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default UserList;