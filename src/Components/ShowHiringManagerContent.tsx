import { FC, ReactNode, useContext } from 'react';
import { HiringManagerContext } from './HiringManagerContext';
import { Container } from '@mui/material';


const ShowHiringManagerContent: FC<{ children: ReactNode }> = ({ children }) => {

    const context = useContext(HiringManagerContext);
    if (!context) {
        throw new Error('HiringManagerToggle must be used within a HiringManagerContextProvider');
    }
    const { isHiringManager } = context;

    return (
        <>
            {isHiringManager ? (
                <Container>
                    {children}
                </Container>
            ) : null}
        </>
    );
};

export { ShowHiringManagerContent };