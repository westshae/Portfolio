import { FC, ReactNode, useContext } from 'react';
import { HiringManagerContext } from './HiringManagerContext';
import { Container } from '@mui/material';


const HideHiringManagerContent: FC<{ children: ReactNode }> = ({ children }) => {

    const context = useContext(HiringManagerContext);
    if (!context) {
        throw new Error('HiringManagerContext must be used within a HiringManagerContextProvider');
    }
    const { isHiringManager } = context;

    return (
        <>
            {!isHiringManager ? (
                <Container>
                    {children}
                </Container>
            ) : null}
        </>
    );
};

export { HideHiringManagerContent };