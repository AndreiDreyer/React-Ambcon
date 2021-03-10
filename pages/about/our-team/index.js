import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import AboutNav from '../../../components/AboutNav'
import ImageCard from '../../../components/ImageCard'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import {useStyles} from '../../../styles/ServiceStyles'

export default function Services() {
    const classes = useStyles();

    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={6}>
              <ImageCard></ImageCard>
            </Grid>
            <Grid item xs={6}>
            <ImageCard></ImageCard>
            </Grid>
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
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <FormRow />
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <FormRow />
                            </Grid>
                            
                        </Grid>
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
