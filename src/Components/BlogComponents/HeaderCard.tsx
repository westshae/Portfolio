import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface HeaderCardProps {
    header: string;
    subtitle: string;
    date: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({ header, subtitle, date }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div" color="text.secondary">
                    {header}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {subtitle}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Last Updated: {date}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default HeaderCard;
