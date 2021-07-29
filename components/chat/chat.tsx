import classes from './styles/chat.module.scss';
import ChatNavbar from './chat-navbar';
import ChatMessage from './chat-message';
import ChatMessages from './chat-messages';

const Chat : React.FC<{show:boolean;}> = (props) => {
    const chatClasses = [
        classes.chat_container,
    ];

    let show = null;
    if (props.show) {
        show =  (
            <div
                className={chatClasses.join(' ')}
            >
                <ChatNavbar />
                <ChatMessages />
                <ChatMessage />
            </div>
        )
    }

    return show;
} 

export default Chat;