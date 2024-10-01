import { Container, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { ProjectsGrid } from '../Components/ProjectsGrid';
import Header from '../Components/Header';
import { BlogCardHolder } from '../Components/BlogComponents/BlogCardHolder';
import TextCard from '../Components/BlogComponents/TextCard';

const LandingPage: FC = () => {
    return (
        <>
            <Header />
            <Container>
                <BlogCardHolder>
                    <TextCard header="Who am I?">
                        <Typography variant="body1" color="text.secondary">
                            I'm Shae, and I've been coding self-taught since highschool, graduating from Victoria University of Wellington with a Computer Science degree.
                            I've worked 2 industry jobs, but more importantly (to me), I've been working on random side projects ever since I first started coding.
                        </Typography>
                    </TextCard>
                    <TextCard header="What's the point of this site?">
                        <Typography variant="body1" color="text.secondary">
                            Initially, the point of this site was to show off some of my projects, especially when some of them aren't easy to look at now.
                            A good example is that some projects aren't hosted, and some have had breaking updates since I archived them.
                        </Typography>
                    </TextCard>
                </BlogCardHolder>
            </Container>

            <ProjectsGrid />
        </>
    );
};

export default LandingPage;
