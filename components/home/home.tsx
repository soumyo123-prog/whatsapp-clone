import { useAuth } from '../../custom/auth';
import {firebase} from '../../pages/_app';

import classes from './styles/home.module.scss';
import Chats from '../chats/chats';

export default function Home () {
    const {user} = useAuth();

    const googleSignout = () => {
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
            <Chats />
        </div>
    )
}