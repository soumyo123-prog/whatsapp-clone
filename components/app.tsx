import { useEffect, useState } from 'react';
import Auth from './auth/auth';
import Home from './home/home';

import {firebase} from '../pages/_app';
import { useAuth } from '../custom/auth';

export default function App () {
    const [show, setShow] = useState(<Auth />);
    const {setUser} = useAuth();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const {displayName, email, refreshToken, uid} = user;
                setUser({
                    displayName : displayName || '',
                    email : email || '',
                    refreshToken : refreshToken || '',
                    uid : uid || ''
                })
                setShow(<Home />)
            } else {
                setShow(<Auth />)
            }
        })
    }, []);

    return show;
}

