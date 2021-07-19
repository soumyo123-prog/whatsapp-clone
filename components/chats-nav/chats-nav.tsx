import classes from './styles/chats-nav.module.scss';
import DummyProfile from '../dummy-profile/dummy-profile';

export default function ChatsNav() {
    return (
        <nav className={[classes.chats_nav].join(' ')}>
            <ul
                className={[
                    classes.chats_nav_list,
                    "d-flex flex-row",
                    "w-100 h-100",
                    "m-0 p-2",
                ].join(' ')}
            >
                <li 
                    className={[
                        classes.chats_nav_list_item,
                        classes.chats_nav_list_item_profile,
                        "d-flex align-items-center",
                    ].join(' ')}
                >
                    <DummyProfile />
                </li>
                <li
                    className = {[
                        classes.chats_nav_list_item,
                        classes.chats_nav_list_item_new_chat,
                        "d-flex align-items-center justify-content-center",
                    ].join(' ')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="rgb(177, 179, 181)" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path>
                    </svg>
                </li>
                <li 
                    className={[
                        classes.chats_nav_list_item,
                        classes.chats_nav_list_item_settings,
                        "d-flex align-items-center justify-content-center",
                    ].join(' ')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="rgb(177, 179, 181)" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
                    </svg>
                </li>
            </ul>
        </nav>
    )
}