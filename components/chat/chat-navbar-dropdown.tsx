import classes from './styles/chat-navbar-dropdown.module.scss';

const ChatDropdown : React.FC<{show:boolean}> = (props) => {
    
    const dropdownClasses = [
        "list-group",
        "shadow-lg user-select-none",
        classes.chat_dropdown_container,
    ];
    if (props.show) {
        dropdownClasses.push(classes.open);
    } else {
        dropdownClasses.push(classes.close)
    }
    
    return (
        <ul
            className={dropdownClasses.join(' ')}
        >
            <li
                className={[
                    "list-group-item",
                    classes.chat_dropdown_item
                ].join(' ')}
            >
                Delete Chat
            </li>
            <li
                className={[
                    "list-group-item",
                    classes.chat_dropdown_item
                ].join(' ')}
            >
                Clear Messages
            </li>
        </ul>
    )
}

export default ChatDropdown;