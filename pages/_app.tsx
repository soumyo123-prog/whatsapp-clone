import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import '../styles/app.scss';
import {AuthProvider} from '../custom/auth';
import {ChatProvider} from '../custom/individualChat';

import firebase from 'firebase';
import 'firebase/firestore';
import { SearchProvider } from '../custom/search';

const config = {
  apiKey: "AIzaSyAdAYHzd6iQalrW37m7cK2Fz3goZMS8Wy8",
  authDomain: "whatsapp-clone-7cbae.firebaseapp.com",
  projectId: "whatsapp-clone-7cbae",
  storageBucket: "whatsapp-clone-7cbae.appspot.com",
  messagingSenderId: "766869812903",
  appId: "1:766869812903:web:8056837ac70877c2e18d82",
  measurementId: "G-F178EJ2HRN"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export {firebase};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
        <ChatProvider>
            <SearchProvider>
              <Component {...pageProps} />
            </SearchProvider>
        </ChatProvider>
    </AuthProvider>
  )
}
export default MyApp
