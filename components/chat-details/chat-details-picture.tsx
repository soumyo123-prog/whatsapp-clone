import { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { IoPerson } from 'react-icons/io5';
import { useChat } from '../../custom/individualChat';
import ChatDetailsUpdate from './chat-details-update';
import classes from './styles/chat-details-picture.module.scss';

const ChatDetailsPicture : React.FC<{}> = (props) => {
    const { name, id } = useChat();
    const [updateList, setUpdateList] = useState(false);

    return (
        <div
            className={[
                "d-flex flex-column justify-content-center align-items-center",
                classes.chat_details_profile_container
            ].join(' ')}
        >
            <div
                className={[
                    "d-flex justify-content-center align-items-center",
                    classes.chat_details_profile_item,
                    classes.chat_details_profile_picture_container
                ].join(' ')}
            >
                <div
                    className={[
                        "d-flex justify-content-center align-items-center",
                        classes.chat_details_profile_picture
                    ].join(' ')}
                    onMouseEnter = {() => setUpdateList(true)}
                    onMouseLeave = {() => setUpdateList(false)}
                >
                    <IoPerson size="12.5rem"/>
                    <ChatDetailsUpdate show={updateList}/>
                </div>
            </div>
            <div
                className={[
                    "d-flex align-items-center",
                    classes.chat_details_profile_item,
                    classes.chat_details_profile_name
                ].join(' ')}
            >
                Name : {name}
            </div>
            <div
                className={[
                    "d-flex align-items-center",
                    classes.chat_details_profile_item,
                    classes.chat_details_profile_code
                ].join(' ')}
            >
                Code : {id}
            </div>
        </div>
    )
}

export default ChatDetailsPicture;