import styled from 'styled-components';
import { Fab } from '@material-ui/core';


export const Container = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1240px;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
  padding: 2rem
`;

export const NoteHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 3px solid #3f51b5;
  margin-bottom: 1rem;
`;

export const CreatedAt = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  gap: 0.5rem;
  color: gray;
`;

export const Highlit = styled.span`
  color: #515151;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: yellow;
  font-weight: 400;
`;

export const CloseButton = styled(Fab)`
  && {
    position: absolute;
    right: 0rem;
  }
`;