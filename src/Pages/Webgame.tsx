import { Container, Typography, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import ImageGallery from '../Components/ImageGallery';
import Header from '../Components/Header';
import { ShowNerdContent } from '../Components/NerdDisplay/NerdContent';

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

const WebgamePage: FC = () => {
    const theme = useTheme();

    return (
        <>
            <Header />
            <Container>
                <Typography variant='h1'>Webgame Project</Typography>

                <ShowNerdContent>
                    <Typography variant='h6'>Here's some nerd content</Typography>
                </ShowNerdContent>

                <Typography variant='h6'>Here's some normal content</Typography>

                <ImageGallery images={mockImageList} />
            </Container>
        </>
    );
};

export default WebgamePage;
