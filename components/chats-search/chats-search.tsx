import classes from './styles/chats-search.module.scss';

export default function ChatsSearch() {
    return (
        <div
            className={[
                classes.chats_search_container,
                "d-flex justify-content-center align-items-center"
            ].join(' ')}
        >
            <label
                className={[
                    classes.chats_search_input_container,
                    "d-flex align-items-center"
                ].join(' ')}
            >
                <div
                    className={[
                        classes.chats_search_icon,
                        "w-25",
                        "d-flex justify-content-center align-items-center"
                    ].join(' ')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="rgb(177, 179, 181)" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                    </svg>
                </div>
                <div
                    className={[
                        classes.chats_search_text,
                        "w-75",
                        "d-flex align-items-center"
                    ].join(' ')}
                    contentEditable
                    onFocus={(e) => e.target.textContent = ''}
                    onBlur={(e) => e.target.textContent = 'Search or start new chat'}
                >
                    Search or start new chat
                </div>
            </label>
        </div>
    )
}