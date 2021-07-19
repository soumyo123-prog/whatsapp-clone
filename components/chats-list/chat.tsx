import classes from './styles/chat.module.scss';

const Chat : React.FC<{name:string; email:string; date:string}> = () => {
    return (
        <div
            className={[
                classes.chat_container
            ].join(' ')}
        >
            
        </div>
    )
}

export default Chat;