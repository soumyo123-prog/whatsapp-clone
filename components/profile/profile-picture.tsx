import classes from './styles/profile-picture.module.scss';
import { useState } from 'react';

import ProfilePictureSettings from './profile-picture-settings';
import { useAuth } from '../../custom/auth';

export default function ProfilePicture() {
    const [picSettings, setPicSettings] = useState(false);
    const { user } = useAuth();

    const togglePicSettings = () => {
        setPicSettings(prevPicSettings => !prevPicSettings);
    }

    return (
        <div
            className={[
                "d-flex justify-content-center align-items-center",
                classes.profile_picture_container
            ].join(' ')}
        >
            <div
                className={[
                    classes.profile_picture
                ].join(' ')}
                onClick={togglePicSettings}
                style={{
                    backgroundImage: `url(${user.photoUrl})`
                }}
            >
                <ProfilePictureSettings show={picSettings} toggleShow={togglePicSettings}/>
            </div>
        </div>
    )    
}