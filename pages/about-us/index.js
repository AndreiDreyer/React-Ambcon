import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

import AboutNav from '../../components/AboutNav'

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
            maxWidth: '30%',
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
                    The who’s who in Logistics
                </Typography>
                <div className={classes.body}>
                    <CardContent className={classes.content} >
                    <Typography className={classes.text} paragraph={true} component="h4">
                    Ambcon Logistics specialises in a wide spectrum of transport service including full-load, consolidation, transport broking and procurement
                     services. With an ample fleet of forty- eight horses and 65 super link trailers, of which 24 are taut liners. Ambcon Logistics are well placed to meet your transporting needs.
                    In addition we enjoy strong working relationships with a group of reliable transport operators who we sub-contract where necessary.
                    </Typography>
                    <Typography className={classes.textHeaders} gutterBottom variant="h5" component="h1">
                    Our Operations
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    We have no scheduled dispatch days, but we currently dispatch numerous consolidated loads weekly to Zimbabwe with deliveries to most major centres along the Beit Bridge – Bulawayo – Harare route. Although South Africa to Zimbabwe and Zambia are our busiest routes we will consider dispatching vehicles to all parts of the region.
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    Cargo is not loaded unless we have authority to load from the clients appointed clearing agent confirming that all funds, permits etcetera are in place at the port of entry.
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    We are conveniently situated in Jet Park and through a network of reliable operators we can offer our clients collections from most locations in South Africa.
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    We have sufficient warehousing facilities and equipment to ensure your cargo is well taken care of and a team of well-trained staff to handle and mix cargo.
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    Communication is key in our industry and our clients receive regular tracking updates with regards the movement of their cargo.
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    Ambcon Logistics are both export, and SADC registered, and our team can efficiently process all export documentation from our Johannesburg office. Our clients enjoy a daily tracking report once goods are dispatched to time of delivery.
                    </Typography>
                    <Typography className={classes.textHeaders} gutterBottom variant="h5" component="h1">
                    Our Staff and Offices
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    We believe we have a compliment of very dedicated and competent people who will go the extra mile to satisfy our clients every need. Through our vast experience, particularly in the consolidation business, we feel we are able to adjust with changing times to our client’s best advantage.
                    </Typography>
                    <Typography className={classes.text} paragraph={true} component="h4">
                    In addition to our head office in Johannesburg we have offices and staff in Musina, Harare, Bulawayo and Beit Bridge.
                    </Typography>
                        <List dense={dense} disablePadding={true}>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Retention of an agreed amount of VAT."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="A percentage procurement fee depending on the value of the goods and the extent
                                    of involvement."
                                />
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="For regular procurements a monthly retainer."
                                />
                                </ListItem>
                        </List>
                    </CardContent>
                    <div className={classes.listBox}>
                        <AboutNav></AboutNav>
                    </div>
                </div>
            </div>    
        </div>
    );
}
