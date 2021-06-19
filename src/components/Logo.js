import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { Typography } from '@material-ui/core';

const Container = styled(_Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;


const Logo = () => {
  return (
    <Container to='/subjects'>
      <ImportContactsIcon fontSize="large"/>
      <Typography variant="h5" style={{ fontWeight: '300' }}>Notes</Typography>
    </Container>
  );
}

export default Logo;
