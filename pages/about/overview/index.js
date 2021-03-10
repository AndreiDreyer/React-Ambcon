import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core/CardContent';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import Head from 'next/head';

import AboutNav from '../../../components/AboutNav'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import {useStyles} from '../../../styles/ServiceStyles'

export default function Services() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

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
                SYNOPSIS
                </Typography>
                <div className={classes.body}>
                    <CardContent className={classes.content} >
                        <List dense={dense} disablePadding={true}>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Ambcon Logistics is a South African registered transporter specialising in cross border transport for both full and consolidated loads."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Our fleet consists of super link flat deck and curtain side (taut-liners) and tri axles. Through a network with reliable transport partners we can quote on most vehicle types on request."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Main routes include Zimbabwe and Zambia although we will service other routes where possible."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="We have the capacity to dispatch at least 5 consolidations from Johannesburg on a weekly basis."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Our main offices and warehouse are situated at Corner Covora Street and Jet Park Road, Jet Park with other offices and warehouses in Beit Bridge, Harare and Bulawayo."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Ambcon Logistics is both export and SADC registered."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Cargo can be collected, at a fee, or delivered to our depot."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="On receipt of goods both the importer and appointed agent are sent copy documents to do
                                    duty calculations etcetera."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="No cargo is loaded until load authority is received from the appointed agent confirming all funds / permits etcetera are in place at the border."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="We ask our clients to work on an average of 7 days delivery from date of load authority."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="We do have clearing agents we recommend but importers are able to use clearing agents of
                                    their choice provided they are reputable. The fewer agents clearing a vehicle the easier to
                                    control."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="All export docs are completed in our Johannesburg office."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Once cargo is loaded you will receive a daily tracking report. An option, with your approval,
                                    is to be part of a WhatsApp chat group, involving Ambcon Logistics Ops, the clearing agent
                                    and personnel in your organisation while your goods are in transit so you get live updates."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Insurance is available on request."
                                />
                                </ListItem>
                        </List>
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
