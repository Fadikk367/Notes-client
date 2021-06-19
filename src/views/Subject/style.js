import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';


export const HeaderBar = styled(Paper)`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1.25rem;
`;

export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3f51b5;
`;

export const NoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SearchBar = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & > :first-child {
    flex: 1;
  }
`;