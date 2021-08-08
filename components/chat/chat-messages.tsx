import classes from './styles/chat-messages.module.scss';
import {firebase} from '../../pages/_app';
import { useState } from 'react';
import { useChat } from '../../custom/individualChat';
import { useAuth } from '../../custom/auth';
import { useEffect } from 'react';

const db = firebase.firestore();

type messageObj = {
    body : string,
    timestamp : {
        nanoseconds : number,
        seconds : number,
    },
    from : string,
    to : string,
};

export default function ChatMessages () {
    const [messages, setMessages] = useState<messageObj[]>([]);

    const {uid, hideChat} = useChat();
    const {user} = useAuth();

    useEffect(() => {
        
        
        return () => {
            console.log("unmounting");
            hideChat();
        }
    }, []);

    

    return (
        <div
            className={[
                classes.chat_messages_container
            ].join(' ')}
        >
            
        </div>
    )
}