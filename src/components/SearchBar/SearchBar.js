import React from 'react';

import { Container } from './style';

import SearchIcon from '@material-ui/icons/Search';


const SearchBar = () => {
  return (
    <Container>
      <SearchIcon fontSize="large"/>
      <input type="text" />
    </Container>
  );
}

export default SearchBar;
