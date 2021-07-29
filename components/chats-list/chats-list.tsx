import classes from './styles/chats-list.module.scss';
import Chat from './chat';
import {useAuth} from '../../custom/auth';

import {firebase} from '../../pages/_app';
import { useEffect } from 'react';
import { useState } from 'react';

const db=firebase.firestore();

type listObj = {
    displayName : string;
    email : string;
    uid : string;
};

const ChatsList : React.FC<{}> = (props) => {
    const [list, setList] = useState<listObj[]>([]);
    const {user} = useAuth();

    useEffect(() => {
        db.collection('messages').where('from','==',user.uid).where('to','==',user.uid).get()
        .then(querySnapshot => {
            querySnapshot.forEach(async doc => {
                try {
                    
                    const tempUsr = await db.collection('users').where('uid','==',doc.data().to).get();
                    const allUsrs : listObj[] = [];
                    tempUsr.forEach(usr => {
                        allUsrs.push(usr.data());
                    })
                    setList(allUsrs);

                } catch (error) {
                    console.log(error.message);
                }
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }, []);

    const show = list.map((chat, index) => {
        return (
            <Chat 
                key={index}
                name={chat.displayName}
                email={chat.email}
                date="yesterday"
                uid={chat.uid}
            />
        )   
    })

    return (
        <div
            className={[
                classes.chats_list_container
            ].join(' ')}
        >
            {show}
        </div>
    );
}

export default ChatsList;