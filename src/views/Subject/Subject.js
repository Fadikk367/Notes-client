import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

import { NoteItem, AddNoteForm, NoteDetails } from 'components';
import { Headline, HeaderBar, SearchBar, NoteList } from './style';
import { 
  Typography, 
  Button, 
  Modal, 
  TextField, 
  LinearProgress,
  Menu,
  IconButton,
  MenuItem,
  Divider,
  Fab
} from '@material-ui/core';

import { Search, PostAdd, MoreVert, ArrowBack } from '@material-ui/icons';

import { queryClient } from 'index';

// const devApiUrl = "http://localhost:28410";
const productionBaseUrl = "https://bd2-notes.azurewebsites.net";


const Subject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openedNote, setOpenedNote] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const id = parseInt(useParams().id);
  const history = useHistory();

  const { isLoading: isLoadingSubjects, data: subjects } = useQuery(
    `subjects`, 
    async () => (await axios.get(`${productionBaseUrl}/Subject`)).data
  );

  const { isLoading, data: notes, refetch: refetchNotes } = useQuery(
    [`subject-${id}-notes`, search], 
    async ({ queryKey }) => {
      const search = queryKey[1];
      return (await axios.get(`${productionBaseUrl}/Subject/${id}/Notes?search=${search}`)).data
    }
  );

  const mutation = useMutation(
    newNote => axios.post(`${productionBaseUrl}/Note`, newNote), { 
      onSuccess: () => {
        queryClient.invalidateQueries(`subject-${id}-notes`);
        setIsOpen(false);
      }
    }
  );

  const deleteSubjectMutation = useMutation(
    () => axios.delete(`${productionBaseUrl}/Subject/${id}`), { 
      onSuccess: () => {
        history.push('/');
        queryClient.invalidateQueries(`subjects`);
      }
    }
  );

  const deleteNoteMutation = useMutation(
    noteId => axios.delete(`${productionBaseUrl}/Note/${noteId}`), { 
      onSuccess: () => {
        queryClient.invalidateQueries(`subject-${id}-notes`);
      }
    }
  );

  const subject = isLoadingSubjects ? null : subjects.find(s => s.id === id);
  
  const onOpenNote = noteId => {
    const note = notes.find(note => note.id === noteId);

    if (note) {
      setOpenedNote(note);
    }
  }

  const fetchFilteredNotes = (e) => {
    e.preventDefault();
    refetchNotes();
  }

  return (
    <div>
      {isLoadingSubjects ? ( null ) : (
        <>
        <Headline>
          <Typography variant="h4">
            <IconButton onClick={e => history.push('/')}>
              <ArrowBack />
            </IconButton>
            {subject && subject.name}
          </Typography>
          <IconButton onClick={e => setMenuAnchor(e.currentTarget)}>
            <MoreVert/>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={menuAnchor}
            keepMounted
            open={Boolean(menuAnchor)}
            onClose={e => setMenuAnchor(null)}
          >
            <MenuItem onClick={deleteSubjectMutation.mutate}>Delete subject</MenuItem>
          </Menu>
        </Headline>
        <HeaderBar component="form" elevation={5} onSubmit={fetchFilteredNotes}>
          <SearchBar>
            <TextField
              placeholder="Search by text"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <Fab 
              color="primary" 
              size="medium" 
              type="submit" 
              aria-label="search"
              onClick={() => setSearch(searchText)}
            >
              <Search />
            </Fab>
          </SearchBar>
          <Divider orientation="vertical" />
          <Button 
            color="primary" 
            variant="contained" 
            startIcon={<PostAdd />}
            onClick={() => setIsOpen(true)}
          >
            Add note
          </Button>
        </HeaderBar>
        {
          !isLoading ? (
            <NoteList>
              {notes.map(note => (
                <NoteItem key={note.id} {...note} onDeleteNote={deleteNoteMutation.mutate} onOpenNote={onOpenNote}/>
              ))}
            </NoteList>
          ) : (
            <LinearProgress style={{ width: '100%' }}/>
          )
        }

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <AddNoteForm subjectId={id} onAddNote={mutation.mutate}/>
      </Modal>
      <Modal open={Boolean(openedNote)} onClose={() => setOpenedNote(null)}>
        <NoteDetails 
          note={openedNote} 
          searchText={search} 
          subject={subject.name} 
          closeNote={() => setOpenedNote(null)}
        />
      </Modal>
      </>)}
    </div>
  )
}

export default Subject;
