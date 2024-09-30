import { Container, Typography, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import HiringManagerToggle from '../Components/HiringManagerDisplay/HiringManagerToggle';
import { ShowHiringManagerContent } from '../Components/HiringManagerDisplay/ShowHiringManagerContent';
import { HideHiringManagerContent } from '../Components/HiringManagerDisplay/HideHiringManagerContent';
import ImageGallery from '../Components/ImageGallery';
import { ProjectsGrid } from '../Components/ProjectsGrid/ProjectsGrid';

const LandingPage: FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <ProjectsGrid/>
        </Container>
    );
};

export default LandingPage;
