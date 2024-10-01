import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface TextCardProps {
    header?: string;
    children: React.ReactNode; // Use children prop for content
}

const TextCard: React.FC<TextCardProps> = ({ header, children }) => {
    return (
        <Card sx={{height: "100%"}}>
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
        </Card>
    );
};

export default TextCard;
