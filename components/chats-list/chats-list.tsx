import classes from './styles/chats-list.module.scss';
import Chat from './chat';
import {useAuth} from '../../custom/auth';

import {firebase} from '../../pages/_app';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearch } from '../../custom/search';

const db=firebase.firestore();

type listObj = {
    displayName : string;
    email : string;
    uid : string;
};

const ChatsList : React.FC<{}> = (props) => {
    const [list, setList] = useState<listObj[]>([]);
    const {user} = useAuth();
    const {see, searchedUser} = useSearch();

    useEffect(() => {
        
        if (see) {
            setList([searchedUser]);
        } else {
            setList([]);
        }

    }, [see]);

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