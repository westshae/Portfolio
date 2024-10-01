import { FC, ReactNode, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const mockProjectData = [
    { navigate: "webgame", name: "Webgame", blurb: "A webgame", tags: ["reactjs", "typescript", "gamedev"] },
    { navigate: "mobileapp", name: "MobileApp", blurb: "A android app", tags: ["reactnative", "typescript"] },
    { navigate: "desktopapp", name: "DesktopApp", blurb: "A electron app", tags: ["electron", "typescript", "gamedev"] }
];

const ProjectsGrid: FC = () => {
    const navigate = useNavigate()
    const [activeTags, setActiveTags] = useState<string[]>([]);

    const allTags = Array.from(new Set(mockProjectData.flatMap(project => project.tags)));

    const handleTagClick = (tag: string) => {
        setActiveTags(prev => prev.includes(tag)
            ? prev.filter(t => t !== tag)
            : [...prev, tag]);
    };

    const handleResetTags = () => {
        setActiveTags([])
    }

    const filteredProjects = mockProjectData.filter(project =>
        activeTags.length === 0 || project.tags.some(tag => activeTags.includes(tag))
    );

    return (
        <Container>
            <Box>
                <Typography>Filter Tags</Typography>
                {allTags.map(tag => (
                    <Button
                        key={tag}
                        variant={activeTags.includes(tag) ? "contained" : "outlined"}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </Button>
                ))}
                <Button
                    key={"reset"}
                    variant={activeTags.includes("reset") ? "contained" : "outlined"}
                    onClick={() => handleResetTags()}
                >
                    reset tags
                </Button>

            </Box>

            <Box>
                <Grid container spacing={2}>
                    {filteredProjects.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.navigate}>
                            <Card onClick={() => navigate(project.navigate)}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="image.png"
                                    alt={project.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.blurb}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.tags.join(", ")}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export { ProjectsGrid };
