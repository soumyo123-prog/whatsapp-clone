import classes from './styles/profile-picture-settings.module.scss';

const ProfilePictureSettings : React.FC<{show:boolean; toggleShow:() => void;}> = (props) => {
    
    const styleClasses = [
        "list-group",
        classes.profile_picture_settings_container
    ];
    if (props.show) {
        styleClasses.push(classes.open);
    } else {
        styleClasses.push(classes.close);
    }
    
    return (
        <ul
            className={styleClasses.join(' ')}
        >
            <li
                className={[
                    "list-group-item",
                    "user-select-none",
                    classes.profile_picture_setting
                ].join(' ')}
            > View Photo </li>
            <li
                className={[
                    "list-group-item",
                    classes.profile_picture_setting,
                    "user-select-none"
                ].join(' ')}
                onClick={() => console.log("clicked")}
            > Upload Photo </li>
        </ul>
    )
}

export default ProfilePictureSettings;