import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import Header from '../Components/Header';
import { ShowNerdContent } from '../Components/NerdDisplay/NerdContent';
import HeaderCard from '../Components/BlogComponents/HeaderCard';
import { BlogCardHolder } from '../Components/BlogComponents/BlogCardHolder';
import ImageCard from '../Components/BlogComponents/ImageCard';
import TextCard from '../Components/BlogComponents/TextCard';

const WebgamePage: FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the view is mobile

    return (
        <>
            <Header />
            <Container>
                <BlogCardHolder>
                    <HeaderCard header="WebGame Project" subtitle="A web-based multiplayer 4x strategy game." date="10/10/25" />
                    {!isMobile && <br />}
                    <ImageCard src="image.png"/>
                    <TextCard header="Header">
                        A bunch of text
                    </TextCard>

                    <Typography variant='h1'>Webgame Project</Typography>
                    <ShowNerdContent>
                        <Typography variant='h6'>Here's some nerd content</Typography>
                    </ShowNerdContent>
                    <Typography variant='h6'>Here's some normal content</Typography>
                </BlogCardHolder>
            </Container>
        </>
    );
};

export default WebgamePage;
