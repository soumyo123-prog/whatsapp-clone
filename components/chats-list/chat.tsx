import classes from './styles/chat.module.scss';
import DummyProfile from '../dummy-profile/dummy-profile';
import { useChat } from '../../custom/individualChat';

const Chat : React.FC<{name:string; id:string; creator:string;}> = (props) => {
    const { updateShow, updateName, updateId, updateCreator } = useChat();

    const showChatHandler = () => {
        updateName(props.name);
        updateId(props.id);
        updateCreator(props.creator);
        updateShow(true);
    }

    return (
        <div
            className={[
                classes.chat_container,
                "d-flex"
            ].join(' ')}
            onClick = {showChatHandler}
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
            </div>
        </div>
    )
}

export default Chat;