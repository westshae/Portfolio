import React, { ReactNode } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { HeaderForCard, TextForCard } from './BlogTypography';

interface TextCardProps {
    header?: string;
    date?: string;
    children: React.ReactNode; // Use children prop for content
}

const TextCard: React.FC<TextCardProps> = ({ header, date, children }) => {
    return (
        <Card sx={{ height: "100%", position: "relative" }}>
            <CardContent>
                {header && (
                    <HeaderForCard>
                        {header}
                    </HeaderForCard>
                )}
                {children}
            </CardContent>
            {date &&
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        p: 1,
                    }}
                >
                    <TextForCard>
                        {date}
                    </TextForCard>
                </Box>
            }
        </Card>
    );
};

export default TextCard;
