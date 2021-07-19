import { useAuth } from '../../custom/auth';
import {firebase} from '../../pages/_app';

export default function Home () {
    const {user} = useAuth();

    const googleSignout = () => {
        firebase.auth().signOut()
        .then(() => console.log("Logged out Successfully"))
        .catch(() => console.log("Could not log out"))
    }

    return (
        <div>
            hi {user.displayName}, your email is {user.email} and unique id is {user.uid}
            <button className="btn btn-primary" onClick={googleSignout}>Sign out</button>
        </div>
    )
}