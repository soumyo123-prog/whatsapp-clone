import classes from './styles/profile-details.module.scss';

import ProfileDetail from './profile-detail';

export default function ProfileDetails() {
    return (
        <div
            className={[
                classes.profile_details_container
            ].join(' ')}
        >
            <ProfileDetail label="Your Name" name="Dummy Name" about=""/>
            <ProfileDetail label="About" about="Hey there! I am using whatsapp" name=""/>
        </div>
    )
}