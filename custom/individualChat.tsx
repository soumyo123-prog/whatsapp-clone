import { createContext, useState, useContext } from "react";

const ChatContext = createContext<{
    name : string;
    email : string;
    uid : string;
    showIndividual : boolean;
    showChat : (newName:string, newEmail:string, newUid:string)=>void;
    hideChat : () => void
}>({
    name : "",
    email : "",
    uid : "",
    showIndividual : false,
    showChat : (newName:string, newEmail:string, newUid:string) => {},
    hideChat : () => {}
})

export const ChatProvider : React.FC = ({children}) => {
    const [showIndividual, setShowIndividual] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [uid, setUid] = useState("");

    const showChat : (newName:string, newEmail:string, newUid:string) =>void = (newName:string, newEmail:string, newUid:string) => {
        updateName(newName);
        updateEmail(newEmail);
        updateUid(newUid);
        setShowIndividual(true);
    }

    const hideChat : () => void = () => {
        updateName('');
        updateEmail('');
        updateUid('');
        setShowIndividual(false);
    }

    const updateName : (newName:string)=>void = (newName : string) => {
        setName(newName)
    }

    const updateEmail : (newEmail:string)=>void = (newEmail:string) => {
        setEmail(newEmail);
    }

    const updateUid : (newUid:string)=>void = (newUid:string) => {
        setUid(newUid);
    }

    return (
        <ChatContext.Provider
            value={{
                name,
                email,
                uid,
                showIndividual,
                showChat,
                hideChat
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext);