import classes from './styles/chat.module.scss';
import DummyProfile from '../dummy-profile/dummy-profile';
import { propTypes } from 'react-bootstrap/esm/Image';

const Chat : React.FC<{name:string; email:string; date:string}> = (props) => {
    return (
        <div
            className={[
                classes.chat_container,
                "d-flex"
            ].join(' ')}
        >
            <div
                className={[
                    classes.chat_profile_picture,
                    "d-flex justify-content-center align-items-center"
                ].join(' ')}
            >
                <DummyProfile />
            </div>
            <div
                className={[
                    classes.chat_profile_details,
                    "d-flex flex-column justify-content-center align-items-start"
                ].join(' ')}
            >
                <div
                    className={[
                        classes.chat_profile_name,
                        "d-flex justify-content-start align-items-center"
                    ].join(' ')}
                >
                    {props.name}
                </div>
                <div
                    className={[
                        classes.chat_profile_email,
                        "d-flex align-items-center"
                    ].join(' ')}
                >
                    {props.email}
                </div>
            </div>
            <div
                className={[
                    classes.chat_profile_date,
                    "d-flex justify-content-center align-items-center"
                ].join(' ')}
            >
                {props.date}
            </div>
        </div>
    )
}

export default Chat;