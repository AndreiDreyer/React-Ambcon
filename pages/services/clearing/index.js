import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import ServicesNav from '../../../components/ServicesNav'
import {useStyles} from '../../../styles/ServiceStyles'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

export default function Services() {
    const classes = useStyles();

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
                    <Typography className={classes.headers} gutterBottom variant="h3" component="h1">
                        Clearing
                    </Typography>
                    <div className={classes.body}>
                        <CardContent className={classes.content}>
                        <Typography className={classes.textHeaders} gutterBottom variant="h5" component="h1">
                        Clearing into Zimbabwe
                        </Typography>
                        <Typography className={classes.text} paragraph={true} component="h4">
                        Our clients are currently able to make use of Clearing Agents of their choice. Although we do not insist on our clients making use of any specific clearing houses we do strongly encourage them to make use of reputable operators in the hope there is more control of the clearing process and reduce standing times at the border.
                        </Typography>
                        </CardContent>
                        <div className={classes.listBox}>
                            <ServicesNav></ServicesNav>
                        </div>
                    </div>
                </div>  
            </Slide>
                <Footer></Footer>
        </div>
    );
}
