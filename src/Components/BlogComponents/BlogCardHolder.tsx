import { Children, FC, ReactNode } from 'react';
import { Box, Grid } from '@mui/material';

interface BlogCardHolderProps {
    children: ReactNode;
}

const BlogCardHolder: FC<BlogCardHolderProps> = ({ children }) => {
    const childrenArray = Children.toArray(children);

    return (
        <Box sx={{ padding: "1rem" }}>
            <Grid container spacing={2}>
                {childrenArray.map((child, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        {child}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export { BlogCardHolder };
