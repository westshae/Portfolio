import React, { useState, useEffect } from 'react';
import { Card, CardContent, styled } from '@mui/material';

interface ImageCardProps {
    src: string;
}

const StyledCardContent = styled(CardContent)(({ theme }) => ({//This is used because card content has a 24px paddingBottom based on last child.
    padding: 0,
    "&:last-child": {
        paddingBottom: 0,
    },
}));



const ImageCard: React.FC<ImageCardProps> = ({ src }) => {
    const [imageHeight, setImageHeight] = useState<number | null>(null);

    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
        setImageHeight(event.currentTarget.naturalHeight);
    };

    return (
        <Card sx={{ overflow: 'hidden' }}>
            <StyledCardContent sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src={src}
                    alt="Card Image"
                    onLoad={handleImageLoad}
                    style={{
                        width: '100%',
                        height: imageHeight && imageHeight < window.innerHeight * 0.5 ? 'auto' : '50vh',
                        maxHeight: '50vh',
                        objectFit: 'cover',
                        borderRadius: 'inherit'
                    }}
                />
            </StyledCardContent>
        </Card>
    );
};

export default ImageCard;
