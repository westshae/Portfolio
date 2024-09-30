import { Container, useTheme } from '@mui/material';
import { FC } from 'react';
import { ProjectsGrid } from '../Components/ProjectsGrid';
import Header from '../Components/Header';

const LandingPage: FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <Header />
            <ProjectsGrid/>
        </Container>
    );
};

export default LandingPage;
