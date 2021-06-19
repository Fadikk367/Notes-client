import React from 'react';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import { Link, CardContent } from './style';


const SubjectCard = ({ id, name, description }) => {
  return (
    <Link to={`/subjects/${id}/notes`}>
      <Card elevation={3} style={{ height: '100%' }}>
        <CardActionArea style={{ height: '100%', padding: '0' }}>
          <img src="https://placeholder.pics/svg/300x200" alt="sss" style={{ width: '100%', padding: '0' }}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default SubjectCard;
