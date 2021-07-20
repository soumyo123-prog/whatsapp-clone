import classes from './styles/profile-detail.module.scss';

const ProfileDetail : React.FC<{label:string; name:string; about:string;}> = (props) => {
    return (
        <div
            className={[
                "d-flex flex-column justify-content-center align-items-center",
                classes.profile_detail_container
            ].join(' ')}
        >
            <div
                className={[
                    "d-flex justify-content-start align-items-center",
                    "user-select-none",
                    classes.profile_detail_label
                ].join(' ')}
            >
                {props.label}
            </div>
            <div
                className={[
                    "d-flex align-items-center",
                    classes.profile_detail_detail
                ].join(' ')}
            >
                <div>
                    {props.name || props.about}
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail;