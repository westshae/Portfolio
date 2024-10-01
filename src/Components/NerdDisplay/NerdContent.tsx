import { FC, ReactNode, useContext } from 'react';
import { NerdContext } from './NerdContext'; // Updated context import

const ShowNerdContent: FC<{ children: ReactNode }> = ({ children }) => { // Updated component name

    const context = useContext(NerdContext);
    if (!context) {
        throw new Error('NerdContext must be used within a NerdContextProvider'); // Updated error message
    }
    const { isNerd } = context; // Updated variable name

    return (
        <>
            {isNerd ? ( // Updated conditional
                <>
                    {children}
                </>
            ) : null}
        </>
    );
};

export { ShowNerdContent }; // Updated export name
