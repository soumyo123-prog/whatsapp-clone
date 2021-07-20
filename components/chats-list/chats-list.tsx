import classes from './styles/chats-list.module.scss';
import Chat from './chat';

export default function ChatsList() {
    const chatsList = [
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        },
        {
            name : "Dummy Name",
            email : "dummy@gmail.com",
            date : "yesterday"
        }
    ]

    const show = chatsList.map((chat, index) => {
        return (
            <Chat 
                key={index}
                name={chat.name}
                email={chat.email}
                date={chat.date}
            />
        )   
    })

    return (
        <div
            className={[
                classes.chats_list_container
            ].join(' ')}
        >
            {show}
        </div>
    );
}