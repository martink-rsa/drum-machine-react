import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import './App.css';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Paper>React Material-UI Template</Paper>
      </Box>
    </Container>
  );
}
