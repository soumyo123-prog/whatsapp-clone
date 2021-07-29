import classes from './styles/chat-message.module.scss';
import { IoSend } from 'react-icons/io5';
import { useRef } from 'react';
import {firebase} from '../../pages/_app';
import { useChat } from '../../custom/individualChat';
import { useAuth } from '../../custom/auth';

const db= firebase.firestore();

export default function ChatMessage () {
    const messageRef = useRef<HTMLInputElement>(null);
    const { uid } = useChat();
    const { user } = useAuth();

    const sendMessageHandler = async () => {
        try {
            const message = messageRef.current?.value;
            if (!message) {
                return;
            }
            const messageObject = {
                body : message,
                from : user.uid,
                to : uid,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            }
            if (messageRef.current?.value) {
                messageRef.current.value = '';
            }
            messageRef.current?.focus();
            await db.collection('messages').add(messageObject);
        } catch (e) {
            return;
        }
    }

    return (
        <div
            className={[
                "d-flex justify-content-center align-items-center",
                classes.chat_message_container
            ].join(' ')}
        >
            <input
                className={[
                    "d-flex align-items-center p-3",
                    classes.chat_message_type
                ].join(' ')}
                type="text"
                placeholder="Type a message"
                ref={messageRef}
            />
            <div
                className={[
                    "d-flex align-items-center justify-content-center",
                    classes.chat_message_send_container
                ].join(' ')}
            >
                <div
                    className={[
                        "d-flex align-items-center justify-content-center",
                        classes.chat_message_send_button
                    ].join(' ')}
                    onClick={sendMessageHandler}
                >
                    <IoSend size="1.5rem" color="white"/>
                </div>
            </div>
        </div>
    )
}