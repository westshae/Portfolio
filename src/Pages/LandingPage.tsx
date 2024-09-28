import { Container, Typography, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import HiringManagerToggle from '../Components/HiringManagerDisplay/HiringManagerToggle';
import { ShowHiringManagerContent } from '../Components/HiringManagerDisplay/ShowHiringManagerContent';
import { HideHiringManagerContent } from '../Components/HiringManagerDisplay/HideHiringManagerContent';
import ImageGallery from '../Components/ImageGallery';

const mockImageList = [
    'image.png',
    'image.png',
    'image.png',
    'image.png',
    'image.png',
    'image.png',
    'image.png',
    'image.png',
]

const LandingPage: FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <HiringManagerToggle />
            <ShowHiringManagerContent>
                <Typography variant='h6'>Content only for hiring manager</Typography>
            </ShowHiringManagerContent>
            <HideHiringManagerContent>
                <Typography variant='h6'>Alt-content for non-hiring managers</Typography>
            </HideHiringManagerContent>
            <ImageGallery images={mockImageList} />
        </Container>
    );
};

export default LandingPage;
