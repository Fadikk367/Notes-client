import styled from 'styled-components';
import { CardContent as _CardContent } from '@material-ui/core';
import { Link as _Link } from 'react-router-dom';


export const Link = styled(_Link)`
  text-decoration: none;
  color: black;
  position: relative;
`;

export const CardContent = styled(_CardContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;