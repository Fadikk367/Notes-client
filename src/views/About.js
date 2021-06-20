import React from 'react';
import styled from 'styled-components';

import { Typography, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Container = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const About = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Notes
      </Typography>
      <Typography variant="body1" align="center" style={{ fontSize: '1.7rem', fontWeight: '300', maxWidth: '700px', margin: '0 auto' }}>
        This app was created as a final project for Databases 2 course at AGH University of Science and Technology.
      </Typography>

      <Typography 
        variant="body1" 
        align="center" 
        style={{ 
          fontSize: '1.7rem', 
          fontWeight: '300',
          maxWidth: '800px', 
          margin: '3rem auto',
          display: 'flex',
          justifyContent: 'center' ,
          gap: '2rem'
        }}
      >
        Sources for this project with documentation:
        <a href="https://github.com/Fadikk367/Notes-server" style={{ textDecoration: 'none', color: 'white' }}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            endIcon={<GitHubIcon fontSize="large"/>}
          >
            Source code
          </Button>
        </a>
      </Typography>
    </Container>
  );
}

export default About;
