import { createContext, useContext, useState } from "react";

type userObj = {
    displayName: string;
    email: string;
    uid: string;
}

const SearchContext = createContext<{
    see : Boolean;
    searchedUser : userObj;
    getSearchedUser : (searchedUser : userObj) => void;
    setShow : (val : boolean) => void;
}>({
    see : true,
    searchedUser : {
        displayName : "",
        email : "",
        uid : "",
    },
    getSearchedUser : (searchedUser : userObj) => {},
    setShow : (val : boolean) => {}
});

export const SearchProvider : React.FC = ({children}) => {
    const [see, setShow] = useState(false);
    const [searchedUser, setUser] = useState<userObj>({
        displayName : "",
        email : "",
        uid : "",
    });

    const getSearchedUser = (searchedUser : userObj) => {
        setUser(searchedUser);
    }

    return (
        <SearchContext.Provider
            value = {{
                see,
                setShow,
                searchedUser,
                getSearchedUser
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext);