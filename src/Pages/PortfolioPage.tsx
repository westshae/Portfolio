import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import Header from '../Components/Header';
import { ShowNerdContent } from '../Components/NerdDisplay/NerdContent';
import HeaderCard from '../Components/BlogComponents/HeaderCard';
import { BlogCardHolder } from '../Components/BlogComponents/BlogCardHolder';
import ImageCard from '../Components/BlogComponents/ImageCard';
import TextCard from '../Components/BlogComponents/TextCard';

const PortfolioPage: FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the view is mobile

    return (
        <>
            <Header />
            <Box sx={{ mx: "10vw" }}>
                <BlogCardHolder>
                    <HeaderCard header="Portfolio Website" subtitle="This website you're on right now." date="1/10/2024" />
                    {!isMobile && <br />}
                    <ImageCard src="images\Portfolio\portfoliolandingpage.png" date="10/10/25" />
                    <TextCard header="Project Goal" date="10/10/25">
                        <Typography variant="body1" color="text.secondary">
                            The goal of this project was to be able to show off the projects I've worked on in an easy manner, for both potential employers, as well as friends
                            that are interested in keeping up with my projects.
                        </Typography>

                        I went into it wanting the following... 1. A super easy way to filter my projects 2. A way to "experience" the project without running it 3. It being
                        super easy to update for future projects 4. It being clear when it was last updated.
                    </TextCard>
                </BlogCardHolder>
            </Box>
        </>
    );
};

export default PortfolioPage;
