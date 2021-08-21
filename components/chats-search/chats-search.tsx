import { useState } from 'react';
import classes from './styles/chats-search.module.scss';
import {firebase} from '../../pages/_app';
import { useSearch } from '../../custom/search';
import {IoMdArrowRoundBack} from 'react-icons/io';

const db = firebase.firestore();

export default function ChatsSearch() {
    const [text, setText] = useState("");
    const {getSearchedUser, setShow, see} = useSearch();

    const searchOperateHandler = async () => {
        if (see) {
            setShow(false);
        }

        if (text) {
            
            const qs = await db.collection('users').where('email','==',text).get();
            qs.forEach(doc => {
                getSearchedUser({
                    displayName : doc.data().displayName,
                    email : doc.data().email,
                    uid : doc.data().uid,
                })
                setShow(true);
            })
            setText("");

        }
    }

    const searchTextHandler = (e : React.FocusEvent) => {
        setText(e.target.textContent!);
        e.target.textContent = "Enter email of user";
    }

    let buttonIcon = null;
    if (see) {
        buttonIcon = <IoMdArrowRoundBack size="1.5rem" color="rgb(177, 179, 181)"/>
    } else {
        buttonIcon = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="rgb(177, 179, 181)" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
            </svg>
        )
    }

    return (
        <div
            className={[
                classes.chats_search_container,
                "d-flex justify-content-center align-items-center"
            ].join(' ')}
        >
            {/* <label
                className={[
                    classes.chats_search_input_container,
                    "d-flex align-items-center"
                ].join(' ')}
            >
                <div
                    className={[
                        classes.chats_search_icon,
                        "w-25",
                        "d-flex justify-content-center align-items-center"
                    ].join(' ')}
                    onClick={searchOperateHandler}
                >
                    {buttonIcon}
                </div>
                <div
                    className={[
                        classes.chats_search_text,
                        "w-75",
                        "d-flex align-items-center"
                    ].join(' ')}
                    contentEditable
                    onFocus={(e) => e.target.textContent = ''}
                    onBlur={(e) => searchTextHandler(e)}
                >
                    Enter email of user
                </div>
            </label> */}
        </div>
    )
}