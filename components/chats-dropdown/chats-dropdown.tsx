import classes from './styles/chats-dropdown.module.scss';

const ChatsDropdown : React.FC<{show:boolean; logout:() => void;}> = (props) => {
    let show=null;
    if (props.show) {
        show = <ul
                    className={[
                        "shadow-lg rounded",
                        "user-select-none",
                        "m-0 p-0",
                        "list-group",
                        classes.chats_dropdown_container,
                    ].join(' ')}
                >
                    <li 
                        className={[
                            "list-group-item",
                            classes.chats_dropdown_item
                        ].join(' ')}
                    >
                        Settings
                    </li>
                    <li 
                        className={[
                            "list-group-item",
                            classes.chats_dropdown_item
                        ].join(' ')}
                        onClick={props.logout}
                    >
                        Logout
                    </li>
                </ul>;
    }

    return show;
}

export default ChatsDropdown;