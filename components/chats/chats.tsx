import classes from './styles/chats.module.scss';

import ChatsNav from '../chats-nav/chats-nav';
import ChatsSearch from '../chats-search/chats-search';
import ChatsList from '../chats-list/chats-list';

export default function Chats() {
    return (
        <div className={[classes.chats_container].join(' ')}>
            <ChatsNav />
            <ChatsSearch />
            <ChatsList />
        </div>
    )
}