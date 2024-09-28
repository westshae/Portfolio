import { Container, Typography, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import HiringManagerToggle from '../Components/HiringManagerToggle';
import { ShowHiringManagerContent } from '../Components/ShowHiringManagerContent';

const LandingPage: FC = () => {
  const theme = useTheme();
  

  return (
    <Container>
        <HiringManagerToggle/>
        <ShowHiringManagerContent>
            <Typography variant='h6'>Content only for hiring manager</Typography>
        </ShowHiringManagerContent>
        Landing
    </Container>
  );
};

export default LandingPage;
