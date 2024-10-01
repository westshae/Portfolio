import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { HeaderForCard } from './BlogTypography';

interface HeaderCardProps {
    header: string;
    subtitle: string;
    date?: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({ header, subtitle, date }) => {
    return (
        <Card>
            <CardContent>
                <HeaderForCard>
                    {header}
                </HeaderForCard>
                <Typography variant="subtitle1" color="text.secondary">
                    {subtitle}
                </Typography>
                {date &&
                    <Typography variant="subtitle1" color="text.secondary">
                        Last Updated: {date}
                    </Typography>
                }
            </CardContent>
        </Card>
    );
};

export default HeaderCard;
