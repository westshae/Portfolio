import { Container, Typography, useTheme } from '@mui/material';
import { useState, useCallback, FC } from 'react';
import HiringManagerToggle from '../Components/HiringManagerDisplay/HiringManagerToggle';
import { ShowHiringManagerContent } from '../Components/HiringManagerDisplay/ShowHiringManagerContent';
import { HideHiringManagerContent } from '../Components/HiringManagerDisplay/HideHiringManagerContent';

const LandingPage: FC = () => {
  const theme = useTheme();
  

  return (
    <Container>
        <HiringManagerToggle/>
        <ShowHiringManagerContent>
            <Typography variant='h6'>Content only for hiring manager</Typography>
        </ShowHiringManagerContent>
        <HideHiringManagerContent>
            <Typography variant='h6'>Alt-content for non-hiring managers</Typography>
        </HideHiringManagerContent>
        Landing
    </Container>
  );
};

export default LandingPage;
