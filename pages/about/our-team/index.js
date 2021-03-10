import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import AboutNav from '../../../components/AboutNav'
import ImageCard from '../../../components/ImageCard'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import {useStyles} from '../../../styles/AboutStyles'

export default function Services() {
    const classes = useStyles();

    const contactPeople = [
        {
          imgPath: '../logo.png',
          name: 'George',
          number: '1234567890',
          about: 'Matthew is one of Ambcon\'s founders, he has his main office situated in Harare.',
          email: 'matt@ambconlogistics.com',
        },
        {
            imgPath: '../logo.png',
            name: 'bob',
            number: '1234567890',
            about: 'Matthew is one of Ambcon\'s founders, he has his main office situated in Harare.',
            email: 'matt@ambconlogistics.com',
          }
      ]

    function FormRow() {
        return (
          <React.Fragment>
            <GridList className={classes.gridList} spacing={5} cellHeight={240} cols={2}>
                { contactPeople.map(person => (
                <GridListTile key={person.imgPath} margin={5} cols={1} rows={2}>
                    <ImageCard personInfo={person} />
                </GridListTile>
                ))}
            </GridList>
          </React.Fragment>
        );
      }

    return (
        <div className={classes.mainContainer}>
            <Navigation></Navigation>
            <div className={classes.bannerDiv}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="../trucking-banner.jpg"
                        title="Banner Image"
                        />
                </Card>
            </div>
            <Slide direction="up" in={true}  unmountOnExit>
            <div className={classes.bodyBlock}>
                <Typography className={classes.headers} variant="h4" component="h1">
                    Our Team
                </Typography>
                <div className={classes.body}>
                    <CardContent className={classes.content} >
                        <FormRow />
                    </CardContent>
                    <div className={classes.listBox}>
                        <AboutNav></AboutNav>
                    </div>
                </div>
            </div>    
            </Slide>
            <Footer></Footer>
        </div>
    );
}
