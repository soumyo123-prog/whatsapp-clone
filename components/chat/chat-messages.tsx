import classes from './styles/chat-messages.module.scss';
import {firebase} from '../../pages/_app';
import { useState } from 'react';
import { useChat } from '../../custom/individualChat';
import { useAuth } from '../../custom/auth';
import { useEffect } from 'react';
import { useRef } from 'react';

const db = firebase.firestore();

type messageObj = {
    sender : string;
    content : string;
};

export default function ChatMessages () {
    const [msgs, setMsgs] = useState<messageObj[]>([]);
    const { updateShow, id } = useChat();
    const {user} = useAuth();
    const dummy = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const unsubscribe = db.collection('rooms').doc(id)
            .collection('messages')
            .orderBy('timestamp','asc')
            .onSnapshot(qs => {
                const mems : messageObj[] = [];
                qs.forEach(doc => {

                    mems.push({
                        sender : doc.data()?.sender,
                        content : doc.data()?.content,
                    })
                })
                setMsgs(mems);
                dummy.current?.scrollIntoView({behavior : 'smooth'});
            })

        return () => {
            updateShow(false);
            unsubscribe();
        }
    }, []);

    let display = msgs.map(msg => {
        const msgClasses = [classes.chat_message_container];
        if (msg.sender === user.uid) {
            msgClasses.push(classes.right);
        } else {
            msgClasses.push(classes.left);
        }

        return (
            <div
                className = {msgClasses.join(' ')}
            >
                {msg.content}
            </div>
        )
    })
    
    return (
        <div
            className={[
                "d-flex flex-column",
                classes.chat_messages_container
            ].join(' ')}
        >
            {display}
            <div ref={dummy}></div>
        </div>
    )
}