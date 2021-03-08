import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

import ServicesNav from '../../components/ServicesNav'

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
        alignContent: 'center',
        textAlign: 'left',
        color: 'white',
        backgroundColor: '#5eac3f',
        paddingLeft: 20,
        paddingBottom: 20,

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
    text: {

    },
    content: {
        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        [theme.breakpoints.up('1024')]: {
            float: 'left',
            maxWidth: '60%',
        },
    },
    listBox: {
        [theme.breakpoints.down('769')]: {
            alignSelf: 'center',
        },
        [theme.breakpoints.up('1024')]: {
            alignSelf: 'right',
            float: 'right',
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
                        title="Contemplative Reptile"
                        />
                </Card>
            </div>
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
        </div>
    );
}
