import {firebase} from '../../pages/_app';

import classes from './styles/home.module.scss';
import Chats from '../chats/chats';

export default function Home () {
    const logout = () => {
        firebase.auth().signOut()
        .then(() => console.log("Logged out Successfully"))
        .catch(() => console.log("Could not log out"))
    }

    return (
        <div
            className={[
                classes.home_root
            ].join(' ')}
        >
            <Chats logout={logout}/>
        </div>
    )
}