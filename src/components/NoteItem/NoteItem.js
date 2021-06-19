import React from 'react';

import { Date } from './style';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';


const NoteItem = ({ title, content, createdAt, onDeleteNote, id, onOpenNote }) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'space-between'}}>
          {title}
          <Date>
            <CalendarTodayIcon fontSize="small"/>
            {createdAt.substring(0, 10)}
          </Date>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content.substring(0, 160) + "..."}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions >
        <Button 
          variant="contained" 
          size="small" 
          color="primary"
          endIcon={<VisibilityIcon />}
          onClick={() => onOpenNote(id)}
        >
          See more
        </Button>
        <Button 
          variant="contained" 
          size="small" 
          color="secondary"
          endIcon={<DeleteIcon />}
          onClick={() => onDeleteNote(id)}
        >
          delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default NoteItem;
