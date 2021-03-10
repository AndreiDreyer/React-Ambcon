import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 240,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const personInfo = props.personInfo;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={personInfo.imgPath}
          title="Member"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {personInfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {personInfo.about}
          </Typography>
          <Typography gutterBottom variant="h8" component="h3">
            Contact Info
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {personInfo.number}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {personInfo.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Contact
        </Button> */}
      </CardActions>
    </Card>
  );
}
