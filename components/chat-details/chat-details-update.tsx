import classes from './styles/chat-details-update.module.scss';

const ChatDetailsUpdate : React.FC<{show:boolean;}> = (props) => {
    const updateClasses = [
        "list-group",
        "user-select-none",
        classes.chat_details_update_container
    ]

    if (props.show) {
        updateClasses.push(classes.open);
    } else {
        updateClasses.push(classes.close);
    }

    return (
        <ul
            className={updateClasses.join(' ')}
        >
            <li
                className={[
                    "d-flex justify-content-center align-items-center",
                    classes.chat_details_update_item
                ].join(' ')}
            >
                View Photo
            </li>

            <li
                className={[
                    "d-flex justify-content-center align-items-center",
                    classes.chat_details_update_item
                ].join(' ')}
            >
                Update Photo
            </li>
        </ul>
    )
}

export default ChatDetailsUpdate;