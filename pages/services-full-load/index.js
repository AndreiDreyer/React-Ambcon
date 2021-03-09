import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

import ServicesNav from '../../components/ServicesNav'
import {useStyles} from '../../styles/ServiceStyles'

export default function Services() {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <div className={classes.bannerDiv}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="./trucking-banner.jpg"
                        title="Contemplative Reptile"
                        />
                </Card>
            </div>
            <div className={classes.bodyBlock}>
                <Typography className={classes.headers} gutterBottom variant="h3" component="h1">
                    Full Loads
                </Typography>
                <div className={classes.body}>
                    <CardContent className={classes.content}>
                    Dovetail provides business analysis services on any new project that is embarked on. Qualified business analysts spend time on site to understand the current processes and future process expectations with the implementation of a new system.
                    A detailed process review document is generated that documents the expected final outcomes of the project. This document also highlights any potential system or business gaps that must be addressed.
                    The document is utilised as a checklist to ensure the final deliverable is as per client’s expectations and Dovetail’s commitment.
                    </CardContent>
                    <div className={classes.listBox}>
                        <ServicesNav></ServicesNav>
                    </div>
                </div>
            </div>    
        </div>
    );
}
