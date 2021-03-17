import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Slide from '@material-ui/core/Slide';

import AboutNav from '../../../components/AboutNav'
import ImageCard from '../../../components/ImageCard'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import {useStyles} from '../../../styles/AboutStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Services() {
    const classes = useStyles();
    const theme = useTheme();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const xlg = useMediaQuery(theme.breakpoints.down('xl'));

    const mdUp = useMediaQuery(theme.breakpoints.up('md'));
    const ipad = useMediaQuery(theme.breakpoints.down(769));
    const ipadUp = useMediaQuery(theme.breakpoints.up(768));

    const numCols = () => {
        if ((ipad && ipadUp) || (sm || md)) {
          return 2;
        } else if (xlg) {
          return 4;
        }
      };

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
            <GridList className={classes.gridList} spacing={5} cellHeight={240} cols={numCols()}>
                { contactPeople.map(person => (
                <GridListTile key={person.imgPath} margin={5} cols={2} rows={2}>
                    <ImageCard personInfo={person} />
                </GridListTile>
                ))}
            </GridList>
          </React.Fragment>
        );
      }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.container}>
              <div className={classes.bannerDiv}>
                  <Navigation />
                  <img src="../Desktop - 7@2x.png" className={classes.bannerDiv} />
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
                          <AboutNav />
                      </div>
                  </div>
              </div>    
              </Slide>
            <Footer />
            </div>
        </div>
    );
}
