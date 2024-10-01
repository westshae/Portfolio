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
                    <ImageCard src="image.png" date="10/10/25"/>
                    <TextCard header="Header" date="10/10/25">
                        A bunch of text
                    </TextCard>
                </BlogCardHolder>
            </Container>
        </>
    );
};

export default WebgamePage;
