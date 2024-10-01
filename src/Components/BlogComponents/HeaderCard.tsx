import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface HeaderCardProps {
  header: string;
  subtitle: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({ header, subtitle }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" color="text.secondary">
          {header}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HeaderCard;
