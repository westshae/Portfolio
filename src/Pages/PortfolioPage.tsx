import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import Header from '../Components/Header';
import { ShowNerdContent } from '../Components/NerdDisplay/NerdContent';
import HeaderCard from '../Components/BlogComponents/HeaderCard';
import { BlogCardHolder } from '../Components/BlogComponents/BlogCardHolder';
import ImageCard from '../Components/BlogComponents/ImageCard';
import TextCard from '../Components/BlogComponents/TextCard';
import { HeaderForCard, TextForCard } from '../Components/BlogComponents/BlogTypography';

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
                    <ImageCard src="images\Portfolio\portfoliolandingpage.png" date="1/10/24" />
                    <TextCard header="Project Goal" date="1/10/24">
                        <TextForCard>
                            The goal of this project was to be able to show off the projects I've worked on in an easy manner, for both potential employers, as well as friends
                            that are interested in keeping up with my projects.
                        </TextForCard>
                        <br/>
                        <HeaderForCard>
                            Specific Goals
                        </HeaderForCard>

                        <TextForCard>
                            I went into it wanting the following... 1. A super easy way to filter my projects 2. A way to "experience" the project without running it 3. It being
                            super easy to update for future projects 4. It being clear when it was last updated.
                        </TextForCard>
                        <br/>
                        <HeaderForCard>
                            Tech Stack
                        </HeaderForCard>

                        <TextForCard>
                            For this project, I wanted it to be free to run, so I never had to think about shutting it down, and so I made it a frontend only.
                            More specifically, I'm using Typescript, ReactJS and MUI for a component library. 
                        </TextForCard>

                    </TextCard>
                </BlogCardHolder>
            </Box>
        </>
    );
};

export default PortfolioPage;
