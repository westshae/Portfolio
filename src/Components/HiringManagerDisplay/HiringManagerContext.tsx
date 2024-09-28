import { FC, createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface HiringManagerProps {
    isHiringManager: boolean;
    setIsHiringManager: Dispatch<SetStateAction<boolean>>;
}

const HiringManagerContext = createContext<HiringManagerProps | undefined>(undefined);

const HiringManagerContextProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [isHiringManager, setIsHiringManager] = useState<boolean>(true);

    return (
        <HiringManagerContext.Provider value={{ isHiringManager, setIsHiringManager }}>
            {children}
        </HiringManagerContext.Provider>
    );
};

export { HiringManagerContext, HiringManagerContextProvider };