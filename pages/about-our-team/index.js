import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AboutNav from '../../components/AboutNav'
import ImageCard from '../../components/ImageCard'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
    },
    bannerDiv: {
        flexGrow: 1,
        width: '100%',
        [theme.breakpoints.up('1024')]: {
        height: 215,
        },
        [theme.breakpoints.up('lg')]: {
        height: 215,
        marginBottom: 86,
        },
        [theme.breakpoints.up('xl')]: {
        height: 215,
        marginBottom: 86,
        },
    },
    card: {
        flexGrow: 1,
        width: '100%',
        marginTop: 75,
    },
    media: {
        height: 400,
    },
    body: {
        flexGrow: 1,

        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        [theme.breakpoints.up('1024')]: {
            marginLeft: '22%',
            marginRight: '18%',
            
        },
        
    },
    headers: {
        alignContent: 'left',
        textAlign: 'left',
        color: '#5eac3f',

        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        [theme.breakpoints.up('1024')]: {
            marginLeft: '22%',
            marginRight: '18%',
        },
    },
    textHeaders: {
        alignContent: 'left',
        textAlign: 'left',
        color: '#5eac3f',
        marginTop: 5,

        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        
    },
    content: {
        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        [theme.breakpoints.up('1024')]: {
            float: 'left',
            maxWidth: '66%',
        },
    },
    listBox: {
        [theme.breakpoints.down('769')]: {
            alignSelf: 'center',
        },
        [theme.breakpoints.up('1024')]: {
            alignSelf: 'right',
            float: 'left',
            maxWidth: '40%',
        },
    },
    bodyBlock: {
        [theme.breakpoints.down('769')]: {
            marginTop: '2%',
        },
        [theme.breakpoints.up('1024')]: {
            marginTop: '20%',
        },
        [theme.breakpoints.up('1280')]: {
            marginTop: '11%',
        },
    },
    text: {

    },
}));

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
            <div className={classes.bannerDiv}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="./trucking-banner.jpg"
                        title="Banner Image"
                        />
                </Card>
            </div>
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
        </div>
    );
}
