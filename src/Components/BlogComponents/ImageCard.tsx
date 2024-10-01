import React, { useState } from 'react';
import { Box, Card, CardContent, styled, Typography } from '@mui/material';
import { TextForCard } from './BlogTypography';

interface ImageCardProps {
    src: string;
    date?: string;
}

const StyledCardContent = styled(CardContent)(() => ({
    padding: 0,
    "&:last-child": {
        paddingBottom: 0,
    },
}));

const ImageCard: React.FC<ImageCardProps> = ({ src, date }) => {
    const [imageHeight, setImageHeight] = useState<number | null>(null);

    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
        setImageHeight(event.currentTarget.naturalHeight);
    };

    return (
        <Card sx={{ overflow: 'hidden', position: 'relative' }}>
            <StyledCardContent sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src={src}
                    alt="Card Image"
                    onLoad={handleImageLoad}
                    style={{
                        width: '100%',
                        height: imageHeight && imageHeight < window.innerHeight * 0.5 ? 'auto' : '50vh',
                        maxHeight: '50vh',
                        objectPosition: 'top left',
                        objectFit: 'cover',
                        borderRadius: 'inherit'
                    }}
                />
            </StyledCardContent>
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

export default ImageCard;
