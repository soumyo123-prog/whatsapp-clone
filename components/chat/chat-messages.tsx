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
    const [messagesFrom, setMessagesFrom] = useState<messageObj[]>([]);
    const [messagesTo, setMessagesTo] = useState<messageObj[]>([]);

    console.log(messagesFrom);
    console.log(messagesTo);

    const {uid, hideChat} = useChat();
    const {user} = useAuth();

    useEffect(() => {
        const u1 = db.collection('messages')
                            .where('from','==',user.uid)
                            .where('to','==',uid)
                            .orderBy('timestamp','asc')
                            .onSnapshot(querySnapshot => {
                                var newMessages : messageObj[] = [];
                                querySnapshot.forEach(doc => {
                                    newMessages.push(doc.data());
                                })
                                setMessagesFrom(newMessages);
                            })
        
        const u2 = db.collection('messages')
                            .where('from','==',uid)
                            .where('to','==',user.uid)
                            .orderBy('timestamp','asc')
                            .onSnapshot(querySnapshot => {
                                var newMessages : messageObj[] = [];
                                querySnapshot.forEach(doc => {
                                    newMessages.push(doc.data());
                                })
                                setMessagesTo(newMessages);
                            })
        
        return () => {
            hideChat();
            u1();
            u2();
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