import { useRef } from 'react';
import classes from './styles/new-member.module.scss';
import { firebase } from '../../pages/_app';
import { useChat } from '../../custom/individualChat';

const db = firebase.firestore();

const NewMember : React.FC<{show:boolean;}> = (props) => {
    const { id } = useChat();
    const emailRef = useRef<HTMLInputElement>(null);

    const addMemberHandler = async () => {
        const email = emailRef.current?.value;
        if (!email) {
            return;
        }

        const qs = await db.collection('users').where('email','==',email).get();

        let uid = null;
        qs.forEach(doc => {
            uid = doc.data().uid;
        });

        if(uid) {
            await db.collection('rooms').doc(id).update({
                members : firebase.firestore.FieldValue.arrayUnion(uid)
            });
        }

        if (emailRef.current) {
            emailRef.current.value = '';
        }
        emailRef.current?.focus();
    }

    const newMemberClasses = [
        "shadow-lg rounded",
        "user-select-none",
        "m-0 p-0",
        "list-group",
        classes.new_member_form_container
    ]

    if (props.show) {
        newMemberClasses.push(classes.open);
    } else {
        newMemberClasses.push(classes.close);
    }

    return (
        <ul className={newMemberClasses.join(' ')}>
            <li
                className = {[
                    "d-flex align-items-center justify-content-center",
                    "list-group-item",
                    classes.new_member_form_item
                ].join(' ')}
            >
                New Member
            </li>
            <li
                className = {[
                    "d-flex align-items-center justify-content-center",
                    "list-group-item",
                    classes.new_member_form_item
                ].join(' ')}
            >
                <input 
                    type = "text" 
                    placeholder = "Email"
                    ref = {emailRef}
                    className = {[
                        classes.new_member_form_input
                    ].join(' ')}
                />
            </li>
            <li
                className = {[
                    "d-flex align-items-center justify-content-center",
                    "list-group-item",
                    classes.new_member_form_item
                ].join(' ')}
            >
                <button
                    className = {[
                        "shadow",
                        classes.new_member_form_submit
                    ].join(' ')}
                    onClick = {addMemberHandler}
                >
                    Add
                </button>
            </li>
        </ul>
    )
}

export default NewMember;