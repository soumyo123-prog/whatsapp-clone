import classes from './styles/profile-picture.module.scss';
import {IoPerson} from 'react-icons/io5';
import {AiFillCamera} from 'react-icons/ai';
import { useState } from 'react';

import ProfilePictureSettings from './profile-picture-settings';

export default function ProfilePicture() {
    const [picSettings, setPicSettings] = useState(false);

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
            >
                <div
                    className={[
                        classes.profile_picture_update_container,
                        "d-flex flex-column justify-content-center align-items-center",
                        "user-select-none"
                    ].join(' ')}
                    onClick={togglePicSettings}
                >
                    <AiFillCamera size="1.5rem" color="rgb(177, 179, 181)"/>
                    Update Photo
                </div>
                <ProfilePictureSettings show={picSettings} toggleShow={togglePicSettings}/>
                <IoPerson size="12.5rem" color="rgba(177, 179, 181, 0.1)"/>
            </div>
        </div>
    )    
}