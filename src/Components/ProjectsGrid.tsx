import { FC, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Fab, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const mockProjectData = [
    { lastUpdated: "", navigate: "Portfolio", name: "Portfolio", blurb: "This website you're looking at.", tags: ["Typescript", "Javascript","Reactjs", "HTML", "CSS",  "Frontend", "Webdev"] },
    { lastUpdated: "", navigate: "Drinkers-Game", name: "Drinkers' Game", blurb: "A challenge-based drinking game.", tags: ["Typescript", "Javascript", "HTML", "CSS", "Frontend", "Backend", "Fullstack", "NestJS", "ExpressJS", "Websocket", "Gamedev", "Webdev"] },
    { lastUpdated: "", navigate: "Roots-of-Empires", name: "Roots of Empires", blurb: "A massively-replayable history strategy game.", tags: ["Godot", "GDScript", "Gamedev"] },
    { lastUpdated: "", navigate: "Shaeo.org", name: "Shaeo.org", blurb: "A guided goal setting website.", tags: ["Typescript", "Javascript", "ReactJS", "HTML", "CSS", "Frontend", "Backend", "Fullstack", "Stripe", "Webdev"] },
    { lastUpdated: "", navigate: "Website-Interactable-Element-Scraper", name: "Website-Interactable-Element-Scraper", blurb: "A scraping script to get website input elements, and make AI training data", tags: ["Javascript", "Puppeteer", "Scraping"] },
    { lastUpdated: "", navigate: "webgame", name: "Webgame", blurb: "A massively multiplayer, web-based strategy game.", tags: ["Typescript", "Javascript", "PixiJS", "Angular", "HTML", "CSS", "Fullstack", "Frontend", "Backend", "Discord.JS", "PostgreSQL", "ExpressJS", "NestJS", "Webdev", "Gamedev"] },
    { lastUpdated: "", navigate: "wareffects", name: "War Effects", blurb: "A minecraft plugin that simulates nuke/gas attacks.", tags: ["Java", "Minecraft", "Maven", "Gamedev"] },
    { lastUpdated: "", navigate: "WorldQuests", name: "WorldQuests", blurb: "A minecraft plugin that creates dynamic quests.", tags: ["Java", "Minecraft", "Maven", "Gamedev"] },
    { lastUpdated: "", navigate: "social-optim-scripts", name: "Social Optim Scripts", blurb: "Scripts that scrape YouTube for video data.", tags: ["Javascript", "Puppeteer", "Scraping"] },
    { lastUpdated: "", navigate: "settlements", name: "Settlements", blurb: "A minecraft plugin that allows for democratic factions of players.", tags: ["Java", "Minecraft", "Maven", "Gamedev"] },

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
                        <Grid item xs={12} sm={6} md={4} key={project.name}>
                            <Card
                                onClick={() => {
                                    if (project.navigate) {
                                        navigate(project.navigate);
                                    }
                                }}
                                sx={{
                                    cursor: project.navigate ? 'pointer' : 'default',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': project.navigate ? {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                                    } : {},
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
                                    <Typography variant="body2" color="text.secondary">
                                        {project.lastUpdated ? `Last Updated: ${project.lastUpdated}` : "Portfolio Page Incomplete"}
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
