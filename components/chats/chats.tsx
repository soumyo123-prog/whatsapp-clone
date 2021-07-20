import classes from './styles/chats.module.scss';

import ChatsNav from '../chats-nav/chats-nav';
import ChatsSearch from '../chats-search/chats-search';
import ChatsList from '../chats-list/chats-list';

const Chats : React.FC<{logout : () => void;}> = (props) => {
    return (
        <div className={[classes.chats_container].join(' ')}>
            <ChatsNav logout={props.logout}/>
            <ChatsSearch />
            <ChatsList />
        </div>
    )
}

export default Chats;