import React from 'react';
import {
  Container, Grid, Typography
} from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item alignSelf="center">
          <Typography variant="h4">Welcome to Team Geek Solutions</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
