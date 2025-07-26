import { useContext, createContext } from 'react'

export const ProfileSetContext = createContext();

export const ProfileSetProvider = ({ children }) => {
    const [profileSet, setProfileSet] = useContext(ProfileSetContext);

    

    return (
        <ProfileSetContext.Provider value={{ profileSet, setProfileSet }}>
            {children}
        </ProfileSetContext.Provider>
    );
}