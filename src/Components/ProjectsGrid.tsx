import { FC, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Fab, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const projectData = [
    { lastUpdated: "Never", navigate: "Portfolio", name: "Portfolio", src: "images/Portfolio/portfoliolandingpage.png", blurb: "This website you're looking at.", tags: ["Typescript", "Javascript", "Reactjs", "HTML", "CSS", "Frontend", "Webdev"] },
    { lastUpdated: "Never", navigate: "Drinkers-Game", name: "Drinkers' Game", src: "image.png",blurb: "A challenge-based drinking game.", tags: ["Typescript", "Javascript", "HTML", "CSS", "Frontend", "Backend", "Fullstack", "NestJS", "ExpressJS", "Websocket", "Gamedev", "Webdev"] },
    { lastUpdated: "Never", navigate: "Roots-of-Empires", name: "Roots of Empires", src: "image.png",blurb: "A massively-replayable history strategy game.", tags: ["Godot", "GDScript", "Gamedev"] },
    { lastUpdated: "Never", navigate: "Shaeo.org", name: "Shaeo.org", src: "image.png",blurb: "A guided goal setting website.", tags: ["Typescript", "Javascript", "ReactJS", "HTML", "CSS", "Frontend", "Backend", "Fullstack", "Stripe", "Webdev"] },
    { lastUpdated: "Never", navigate: "Website-Interactable-Element-Scraper", src: "image.png",name: "Website-Interactable-Element-Scraper", blurb: "A scraping script to get website input elements, and make AI training data", tags: ["Javascript", "Puppeteer", "Scraping"] },
    { lastUpdated: "Never", navigate: "webgame", name: "Webgame", src: "image.png",blurb: "A massively multiplayer, web-based strategy game.", tags: ["Typescript", "Javascript", "PixiJS", "Angular", "HTML", "CSS", "Fullstack", "Frontend", "Backend", "Discord.JS", "PostgreSQL", "ExpressJS", "NestJS", "Webdev", "Gamedev"] },
    { lastUpdated: "Never", navigate: "wareffects", name: "War Effects", src: "image.png",blurb: "A minecraft plugin that simulates nuke/gas attacks.", tags: ["Java", "Minecraft", "Maven", "Gamedev"] },
    { lastUpdated: "Never", navigate: "WorldQuests", name: "WorldQuests", src: "image.png",blurb: "A minecraft plugin that creates dynamic quests.", tags: ["Java", "Minecraft", "Maven", "Gamedev"] },
    { lastUpdated: "Never", navigate: "social-optim-scripts", name: "Social Optim Scripts", src: "image.png",blurb: "Scripts that scrape YouTube for video data.", tags: ["Javascript", "Puppeteer", "Scraping"] },
    { lastUpdated: "Never", navigate: "settlements", name: "Settlements", src: "image.png",blurb: "A minecraft plugin that allows for democratic factions of players.", tags: ["Java", "Minecraft", "Maven", "Gamedev"] },
];

const ProjectsGrid: FC = () => {
    const navigate = useNavigate();
    const [activeTags, setActiveTags] = useState<string[]>([]);

    const allTags = Array.from(new Set(projectData.flatMap(project => project.tags)));

    const handleTagClick = (tag: string) => {
        setActiveTags(prev => prev.includes(tag)
            ? prev.filter(t => t !== tag)
            : [...prev, tag]);
    };

    const handleResetTags = () => {
        setActiveTags([]);
    };

    const filteredProjects = projectData.filter(project =>
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
                        sx={{ mx: "0.3rem", my: "0.3rem" }}
                    >
                        {tag}
                        {activeTags.includes(tag) ? (
                            <RemoveIcon sx={{ ml: 1 }} />
                        ) : (
                            <AddIcon sx={{ ml: 1 }} />
                        )}
                    </Fab>
                ))}
                <Fab key={"reset"} variant="extended" size="small" color="primary" onClick={() => handleResetTags()} sx={{ mx: "0.5rem" }}>
                    Reset Filter
                    <DeleteIcon />
                </Fab>
            </Box>

            <Box sx={{ padding: "0.5rem 1rem 1rem 1rem" }}>
                <Grid container spacing={2}>
                    {filteredProjects.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.name} sx={{ height: "100%" }}>
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
                                    image={project.src}
                                    alt={project.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {project.blurb}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {project.tags.join(", ")}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {`Last Updated: ${project.lastUpdated}`}
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
