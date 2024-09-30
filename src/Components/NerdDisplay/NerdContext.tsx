import { FC, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface NerdProps { // Updated interface name
    isNerd: boolean; // Updated property name
    setIsNerd: Dispatch<SetStateAction<boolean>>; // Updated property name
}

const NerdContext = createContext<NerdProps | undefined>(undefined); // Updated context name

const NerdContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isNerd, setIsNerd] = useState<boolean>(true); // Updated state variable names

    return (
        <NerdContext.Provider value={{ isNerd, setIsNerd }}> {/* Updated value names */}
            {children}
        </NerdContext.Provider>
    );
};

export { NerdContext, NerdContextProvider }; // Updated export names
