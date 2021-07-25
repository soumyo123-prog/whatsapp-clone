import {firebase} from '../../pages/_app';

import classes from './styles/home.module.scss';
import Chats from '../chats/chats';
import Chat from '../chat/chat';
import { useChat } from '../../custom/individualChat';

export default function Home () {
    const {showIndividual} = useChat();

    const logout = () => {
        firebase.auth().signOut()
        .then(() => console.log("Logged out Successfully"))
        .catch(() => console.log("Could not log out"))
    }

    return (
        <div
            className={[
                classes.home_root,
                "d-flex"
            ].join(' ')}
        >
            <Chats logout={logout}/>
            <Chat show={showIndividual}/>
        </div>
    )
}