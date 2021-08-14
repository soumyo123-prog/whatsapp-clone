import classes from './styles/chat-navbar.module.scss';
import DummyProfile from '../dummy-profile/dummy-profile';
import {AiOutlineSearch} from 'react-icons/ai';
import {FaEllipsisV} from 'react-icons/fa';
import ChatDropdown from './chat-navbar-dropdown';
import { useState } from 'react';
import { useChat } from '../../custom/individualChat';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ChatDetails from '../chat-details/chat-details';

const ChatNavbar : React.FC<{}> = (props) => {
    const [show, setShow] = useState(false);
    const { name, updateShow } = useChat();
    const [seeDet, setSeeDet] = useState(false);

    const updateSeeDet = (val : boolean) => {
        setSeeDet(val);
    }

    const toggleDropdown = () => {
        setShow(prevShow => !prevShow);
    }

    return (
        <>
        <nav
            className={[
                "d-flex align-items-center",
                classes.chat_navbar_container
            ].join(' ')}
        >
            <ul
                className={[
                    "d-flex align-items-center justify-content-center",
                    classes.chat_navbar_items
                ].join(' ')}
            >
                <li
                    className = {[
                        "d-flex align-items-center justify-content-center",
                        classes.chat_navbar_item,
                        classes.chat_navbar_item_back
                    ].join(' ')}
                    onClick = {() => updateShow(false)}
                >
                    <AiOutlineArrowLeft size="1.5rem" color="rgb(177, 179, 181)"/>
                </li>
                <li
                    className={[
                        "d-flex justify-content-center align-items-center",
                        classes.chat_navbar_item,
                        classes.chat_navbar_item_profile
                    ].join(' ')}
                    onClick = {() => updateSeeDet(true)}
                >
                    <DummyProfile />
                </li>
                <li
                    className={[
                        "d-flex align-items-center justify-content-start",
                        classes.chat_navbar_item,
                        classes.chat_navbar_item_name
                    ].join(' ')}
                >
                    {name}
                </li>
                <li
                    className={[
                        "d-flex align-items-end justify-content-end",
                        classes.chat_navbar_item,
                        classes.chat_navbar_icon,
                        classes.chat_navbar_icon_search
                    ].join(' ')}
                >
                    <AiOutlineSearch color='rgb(177, 179, 181)' size="1.5rem"/>
                </li>
                <li
                    className={[
                        "d-flex align-items-center justify-content-center",
                        classes.chat_navbar_item,
                        classes.chat_navbar_icon
                    ].join(' ')}
                    onClick={toggleDropdown}
                >
                    <FaEllipsisV color='rgb(177, 179, 181)' size="1.1rem"/>
                </li>
            </ul>
        </nav>
        <ChatDetails show={seeDet} hide={updateSeeDet}/>
        <ChatDropdown show={show}/>
        </>
    )
}

export default ChatNavbar;