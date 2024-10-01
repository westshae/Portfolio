import { FC, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Fab, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const mockProjectData = [
    { navigate: "webgame", name: "Webgame", blurb: "A webgame", tags: ["reactjs", "typescript", "gamedev"] },
    { navigate: "mobileapp", name: "MobileApp", blurb: "An android app", tags: ["reactnative", "typescript"] },
    { navigate: "desktopapp", name: "DesktopApp", blurb: "An electron app", tags: ["electron", "typescript", "gamedev"] }
];

const ProjectsGrid: FC = () => {
    const navigate = useNavigate();
    const [activeTags, setActiveTags] = useState<string[]>([]);

    const allTags = Array.from(new Set(mockProjectData.flatMap(project => project.tags)));

    const handleTagClick = (tag: string) => {
        setActiveTags(prev => prev.includes(tag)
            ? prev.filter(t => t !== tag)
            : [...prev, tag]);
    };

    const handleResetTags = () => {
        setActiveTags([]);
    };

    const filteredProjects = mockProjectData.filter(project =>
        activeTags.length === 0 || project.tags.some(tag => activeTags.includes(tag))
    );

    return (
        <>
            <Box sx={{ padding: "1rem 1rem 0.5rem 1rem" }}>
                <Typography>Filter Tags</Typography>
                {allTags.map(tag => (
                    <Fab
                        key={tag}
                        variant="extended"
                        size="small"
                        color="primary"
                        onClick={() => handleTagClick(tag)}
                        sx={{ mx: "0.3rem" }}
                    >
                        {tag}
                        {activeTags.includes(tag) ? (
                            <RemoveIcon sx={{ ml: 1 }} />
                        ) : (
                            <AddIcon sx={{ ml: 1 }} />
                        )}
                    </Fab>
                ))}
                <Fab key={"reset"} size="small" color="primary" onClick={() => handleResetTags()} sx={{ mx: "0.5rem" }}>
                    <DeleteIcon />
                </Fab>
            </Box>

            <Box sx={{ padding: "0.5rem 1rem 1rem 1rem" }}>
                <Grid container spacing={2}>
                    {filteredProjects.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.navigate}>
                            <Card 
                                onClick={() => navigate(project.navigate)} 
                                sx={{
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                                    }
                                }}
                            >
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
        </>
    );
};

export { ProjectsGrid };
