import classes from './styles/chat.module.scss';
import ChatNavbar from './chat-navbar';

const Chat : React.FC<{show:boolean;}> = (props) => {
    const chatClasses = [
        classes.chat_container,
    ];
    if (props.show) {
        chatClasses.push(classes.open);
    } else {
        chatClasses.push(classes.close);
    }

    return (
        <div
            className={chatClasses.join(' ')}
        >
            <ChatNavbar />
        </div>
    )
} 

export default Chat;