import React, { useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import styled from 'styled-components';

import { SubjectCard, AddSubjectForm } from 'components';
import { Typography, Button, Modal, LinearProgress } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';

import { queryClient } from 'index';

// const devApiUrl = "http://localhost:28410";
const productionBaseUrl = "https://bd2-notes.azurewebsites.net";


const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`; 

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data } = useQuery(
    'subjects', 
    async () => (await axios.get(`${productionBaseUrl}/Subject`)).data
  );

  const mutation = useMutation(
    newSubject => axios.post(`${productionBaseUrl}/Subject`, newSubject), { 
      onSuccess: () => {
        queryClient.invalidateQueries('subjects');
        setIsOpen(false);
      }
    }
  );

  return (
    <div>
      <Header>
        <Typography variant="h4">
          Subjects
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setIsOpen(true)}
          startIcon={<PostAddIcon />}
        >
          add subject
        </Button>
      </Header>
      {isLoading 
      ? (
        <LinearProgress style={{ width: '100%' }}/>
      ) : (
        <GridLayout>
          {data.map(subject => (
            <SubjectCard key={subject.id} {...subject}/>
          ))}
        </GridLayout>
      )}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <AddSubjectForm onAddSubject={mutation.mutate}/>
      </Modal>
    </div>
  )
}

export default Home;
