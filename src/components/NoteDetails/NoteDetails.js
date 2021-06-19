import React from 'react';

import { Container, NoteHeader, CreatedAt, Highlit, CloseButton } from './style';
import { Typography } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CloseIcon from '@material-ui/icons/Close';


const NoteDetails = React.forwardRef(({ note, searchText, subject, closeNote }, ref) => {
  const { title, content, createdAt } = note;

  const paragraphs = content.split('\n').map((p, i) => {

    if (!p) return null;

    const comps = [];

    if (searchText) {
      const parts = p.split(new RegExp(`${searchText}`, 'i'));

      for (let k = 0; k < parts.length - 1; k++) {
        comps.push(parts[k]);
        comps.push(<Highlit key={(i+1)*(k+1)}>{searchText.toUpperCase()}</Highlit>);
      }
      comps.push(parts[parts.length - 1]);
    } else {
      comps.push(p);
    }


    return (
    <Typography 
      key={i} 
      variant="body1" 
      style={{ fontSize: '1.2rem', fontWeight: '300', marginBottom: '1rem' }}
    >
      {comps}
    </Typography>
    );
  })

  return (
    <Container>
      <NoteHeader>
        <Typography variant="h4">
          {subject} / {title}
          <CreatedAt>
            <CalendarTodayIcon />
            {createdAt.substring(0, 10)}
          </CreatedAt>
        </Typography>
        <CloseButton aria-label="add" onClick={closeNote}>
          <CloseIcon />
        </CloseButton>
      </NoteHeader>
      {paragraphs}

    </Container>
  );
});

export default NoteDetails;
