import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SampleCard({
  heading,
  primaryText,
  lastText,
  textColor = 'secondary',
  bottomTextColor = '#e41c1c'
}) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300
      }}
    >
      <Typography variant="h4" sx={{ color: `text.${textColor}` }}>
        {heading}
      </Typography>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        {primaryText}
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'bold',
          mx: 0.5,
          fontSize: 14
        }}
      >
        +18.77%
      </Box>
      <Box sx={{ color: bottomTextColor, display: 'inline', fontSize: 14 }}>
        {lastText}
      </Box>
    </Box>
  );
}
