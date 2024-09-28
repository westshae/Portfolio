import React, { useState, useRef, useEffect } from 'react';
import { Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const imageListRef = useRef<HTMLUListElement | null>(null);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen && imageListRef.current) {
            // Scroll to the bottom image
            const lastImage = imageListRef.current.lastChild as HTMLElement;
            lastImage.scrollIntoView({ behavior: 'smooth' });
        } else if (!isOpen && imageListRef.current) {
            // Scroll to the top image
            const firstImage = imageListRef.current.firstChild as HTMLElement;
            firstImage.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isOpen]);

    return (
        <Container>
            <img
                src={images[0]}
                alt="Gallery"
                style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                onClick={handleClick}
            />
            {isOpen && (
                <ImageList ref={imageListRef} cols={2} gap={8} style={{ marginTop: '10px' }}>
                    {images.map((img, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={img}
                                alt={`Gallery ${index}`}
                                style={{ width: '100%', height: 'auto' }}
                                onClick={handleClick}
                            />
                            <ImageListItemBar title={`Image ${index + 1}`} />
                        </ImageListItem>
                    ))}
                </ImageList>
            )}
        </Container>
    );
};

export default ImageGallery;
