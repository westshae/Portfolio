import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import Header from '../Components/Header';
import { ShowNerdContent } from '../Components/NerdDisplay/NerdContent';
import HeaderCard from '../Components/BlogComponents/HeaderCard';
import { BlogCardHolder } from '../Components/BlogComponents/BlogCardHolder';
import ImageCard from '../Components/BlogComponents/ImageCard';
import TextCard from '../Components/BlogComponents/TextCard';

const Redirect: FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the view is mobile

    return (
        <>
            <Header />
            <Container>
                <BlogCardHolder>
                    <HeaderCard header="Incomplete Project Redirect" subtitle="Where you end up if I haven't added details on this project." date="1/10/2024" />
                </BlogCardHolder>
            </Container>
        </>
    );
};

export default Redirect;
