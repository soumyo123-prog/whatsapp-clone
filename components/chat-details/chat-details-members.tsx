import classes from './styles/chat-details-members.module.scss';
import { firebase } from '../../pages/_app';
import { useEffect, useState } from 'react';
import { useChat } from '../../custom/individualChat';
import DummyProfile from '../dummy-profile/dummy-profile'; 
import { IoPersonRemove } from 'react-icons/io5';
import { useAuth } from '../../custom/auth';

type userObj = {
    displayName : string;
    uid : string;
    email : string;
};

const db = firebase.firestore();

const ChatDetailsMembers : React.FC<{}> = (props) => {
    const [users, setUsers] = useState<userObj[]>([]);
    const { id, creator } = useChat();
    const { user } = useAuth();

    useEffect(() => {
        
        const unsubscribe = db.collection('rooms').doc(id)
            .onSnapshot(qs => {
                const members : userObj[] = [];

                qs.data()?.members.forEach((member:string) => {
                    db.collection('users').doc(member).get()
                        .then(user => {
                            members.push({
                                displayName : user.data()?.displayName,
                                uid : user.data()?.uid,
                                email : user.data()?.email,
                            })
                        })
                        .catch(err => {
                            console.log(err.code);
                        })
                })
                
                setUsers(members);
            })

        return (() => {
            unsubscribe();
        })

    }, []);

    const removeUserHandler = async (uid : string) => {
        try {
            if (users.length > 1) {
                await db.collection('rooms').doc(id).update({
                    members: firebase.firestore.FieldValue.arrayRemove(uid)
                })
            } else {
                await db.collection('rooms').doc(id).delete();
            }
            const newUsers = users.filter(usr => usr.uid !== uid);
            setUsers(newUsers);
        
        } catch(err) {
            console.log(err.code);
        }
    }

    let display = users.map(member => {
        return (
            <div
                className = {[
                    "d-flex justify-content-center align-items-center",
                    classes.chat_details_members_member
                ].join(' ')}
                key = {member.uid}
            >
                <div
                    className = {[
                        "d-flex justify-content-center align-items-center",
                        classes.chat_details_members_member_picture
                    ].join(' ')}
                >
                    <DummyProfile />
                </div>
                <div
                    className = {[
                        "d-flex flex-column justify-content-center",
                        classes.chat_details_members_member_details
                    ].join(' ')}
                >
                    {member.displayName}
                </div>
                {user.uid === creator ? 
                    <div
                        className = {[
                            "d-flex flex-column justify-content-center",
                            classes.chat_details_members_member_dropdown
                        ].join(' ')}
                        onClick = {() => removeUserHandler(member.uid)}
                    >
                        <IoPersonRemove size="1.5rem"/>
                    </div>
                : null}
            </div>
        )
    })

    return (
        <div
            className={[
                classes.chat_details_members_container
            ].join(' ')}
        >
            {display}
        </div>
    )
}

export default ChatDetailsMembers;