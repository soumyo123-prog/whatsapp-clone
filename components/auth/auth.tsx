import classes from './styles/auth.module.scss';

import {firebase} from '../../pages/_app';
import { useAuth } from '../../custom/auth';

const db = firebase.firestore();

export default function Auth () {
    const {setUser} = useAuth();

    const googleAuth = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then(async res => {
            const user = {
                displayName : res.user ? res.user.displayName || '' : '',
                email : res.user ? res.user.email || '' : '',
                refreshToken : res.user ? res.user.refreshToken || '' : '',
                uid : res.user ? res.user.uid || '' : '',
            }
            setUser(user);
            await db.collection('users').doc(user.uid).set({
                displayName : user.displayName,
                email : user.email,
                uid : user.uid,
            });
        })
        .catch(err => {
            console.log(err.code);
        })
    }

    return (
        <div 
            className={[
                classes.auth, 
                "position-relative", 
                "w-100 h-100", 
                "d-flex justify-content-center align-items-center"
            ].join(' ')}
        >
            <div
                className={[
                    classes.auth_form, 
                    "bg-light",
                    "shadow",
                    "rounded",
                    "d-flex flex-column align-items-center justify-content-center" 
                ].join(' ')}
            >
                <button
                    className={[
                        "btn btn-primary",
                        "shadow"
                    ].join(' ')}
                    onClick={googleAuth}
                >
                    <img src="/static/google_logo.png" className={classes.google_logo}></img>
                    <span className="ms-3" style={{fontSize : "1.2rem"}}>
                        Sign in with Google 
                    </span>
                </button>
            </div>
        </div>
    )
}

