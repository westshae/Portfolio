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
                        <br />
                        <HeaderForCard>
                            Specific Goals
                        </HeaderForCard>

                        <TextForCard>
                            I went into it wanting the following... 1. A super easy way to filter my projects 2. A way to "experience" the project without running it 3. It being
                            super easy to update for future projects 4. It being clear when it was last updated.
                        </TextForCard>
                        <br />
                        <HeaderForCard>
                            Tech Stack
                        </HeaderForCard>

                        <TextForCard>
                            For this project, I wanted it to be free to run, so I never had to think about shutting it down, and so I made it a frontend only.
                            More specifically, I'm using Typescript, ReactJS and MUI for a component library.
                        </TextForCard>
                    </TextCard>
                    <TextCard header="The Landing Page" date="1/10/24">
                        <TextForCard>
                            The landing page has the following purposes. 1. It needs to inform the user who I am 2. It needs to inform the user the point of this site
                            3. It needs to show all my projects, at least a summary of each of them 4. The projects need to be easily filterable 5. It needs to have
                            links on how to contact me.
                        </TextForCard>
                        <br />
                        <HeaderForCard>
                            "About me/About this site"
                        </HeaderForCard>
                        <TextForCard>
                            The "about me" and "about this site" was implementing using the same system as the individual project, like what you're reading on. There's a grid
                            which has displays either 2 items per row on desktop, or 1 on mobile, which contains 3 (currently) sub-components types. These are "TextCard",
                            "HeaderCard", and "ImageCard", which are all pre-formatted components.
                        </TextForCard>
                        <br />
                        <HeaderForCard>
                            "The Header"
                        </HeaderForCard>

                        <TextForCard>
                            The Header is quite simple. It's a MUI appbar with a title, a home button, a "Hide Nerd Stuff" switch component, and a burger menu with contact details.
                        </TextForCard>
                        <br />
                    </TextCard>
                    <TextCard header='Filter Tags' date="1/10/24">
                        <TextForCard>
                            The filter tags are a bit fancier. For each project object, there's a list of tags. I combine them into a filtered state, which has removed duplicates.
                            Each time you click on a tag, it adds it to a new state, "activeTags", and click and to remove, with the addition of a "Reset all" at the end.
                        </TextForCard>
                        <br />
                        <HeaderForCard>
                            The Projects
                        </HeaderForCard>

                        <TextForCard>
                            The projects are displayed via a manually written array of objects, containing info like name, navigation link, image source, tags, a blurb and when it was last updated.
                            This is after the filtering of projects based off the filtered tags that've been clicked. Clicking on them leads you to this page.
                        </TextForCard>
                        <br />
                        <HeaderForCard>
                            Filter Tags
                        </HeaderForCard>
                        <TextForCard>
                            The filter tags are a bit fancier. For each project object, there's a list of tags. I combine them into a filtered state, which has removed duplicates.
                            Each time you click on a tag, it adds it to a new state, "activeTags", and click and to remove, with the addition of a "Reset all" at the end.
                        </TextForCard>
                        <br />
                    </TextCard>
                    <TextCard header="The Project Pages" date="1/10/24">
                        <TextForCard>
                            The project pages are all unique files (Pages, setup with routing via the root file), all following the same format.
                            They use the BlogCardHolder and its subcomponents similar to the the landing page's "About me/this site" explained.
                        </TextForCard>
                        <br />
                        <HeaderForCard>
                            The Layout
                        </HeaderForCard>
                        <TextForCard>
                            The layout of these pages ideally goes as follows. 1. Show an image of the project 2. Quickly explain the projects goal 3. Explain goals specifically 
                            4. Explain the tech stack 5. Write/Show a bunch of images/paragraphs talking about what's interesting about the project.
                        </TextForCard>
                    </TextCard>
                </BlogCardHolder>
            </Box>
        </>
    );
};

export default PortfolioPage;
