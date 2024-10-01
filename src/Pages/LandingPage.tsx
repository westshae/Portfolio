import { Container, useTheme } from '@mui/material';
import { FC } from 'react';
import { ProjectsGrid } from '../Components/ProjectsGrid';
import Header from '../Components/Header';
import { BlogCardHolder } from '../Components/BlogComponents/BlogCardHolder';
import TextCard from '../Components/BlogComponents/TextCard';

const LandingPage: FC = () => {
    const theme = useTheme();

    return (
        <>
            <Header />
            <Container>

                <BlogCardHolder>
                    <TextCard header="Who am I?">
                        A bunch of text
                    </TextCard>
                    <TextCard header="What's the point of this site?">
                        A bunch of text
                    </TextCard>

                </BlogCardHolder>
            </Container>

            <ProjectsGrid />
        </>
    );
};

export default LandingPage;
