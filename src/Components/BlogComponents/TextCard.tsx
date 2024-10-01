import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface TextCardProps {
    header?: string;
    date: string;
    children: React.ReactNode; // Use children prop for content
}

const TextCard: React.FC<TextCardProps> = ({ header, date, children }) => {
    return (
        <Card sx={{ height: "100%", position: "relative" }}>
            <CardContent>
                {header && (
                    <Typography variant="h5" component="div" color="text.secondary">
                        {header}
                    </Typography>
                )}
                <Typography variant="body1" color="text.secondary">
                    {children}
                </Typography>
            </CardContent>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    p: 1,
                }}
            >
                <Typography variant="body1" color="text.secondary">
                    {date}
                </Typography>
            </Box>
        </Card>
    );
};

export default TextCard;
