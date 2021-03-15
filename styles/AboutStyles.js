import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    mainContainer: {
        width: '100%',
    },
    bannerDiv: {
        flexGrow: 1,
        width: '100%',
        height: 800,
    },
    card: {
        flexGrow: 1,
        border: 'none',
        boxShadow: 'none',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            marginTop: 126,
        },
    },
    media: {
        flexGrow: 1,
        [theme.breakpoints.down('380')]: {
            height: '65% !important',
            width: '360% !important',
            marginLeft: '0% !important',
        },
        [theme.breakpoints.down('440')]: {
            height: '65%',
            width: '340%',
            marginLeft: '0%',
        },
        [theme.breakpoints.up('760')]: {
            height: '100%',
            width: '320%',
        },
        [theme.breakpoints.up('1020')]: {
            height: '100%',
            width: '300%',
        },
        [theme.breakpoints.up('1200')]: {
            height: '80%',
            width: '100%',
        },
    },
    body: {
        flexGrow: 1,

        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        [theme.breakpoints.up('1024')]: {
            marginLeft: '15%',
            marginRight: '2%',
            
        },
        
    },
    headers: {
        alignContent: 'left',
        textAlign: 'left',
        color: '#5eac3f',

        [theme.breakpoints.down('769')]: {
            width: '100%',
            paddingLeft: 10,
        },
        [theme.breakpoints.up('1024')]: {
            marginLeft: '15%',
            marginRight: '2%',
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
            minWidth: '65%',
            maxWidth: '75%',
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
        [theme.breakpoints.down('440')]: {
            marginBottom: '15%',
            marginTop: '-90% !important',
        },
        [theme.breakpoints.down('769')]: {
            marginBottom: '15%',
            marginTop: '-20%',
        },
        [theme.breakpoints.up('1020')]: {
            marginBottom: '15%',
            marginTop: '-15%',
        },
        [theme.breakpoints.up('1200')]: {
            marginBottom: '15%',
            marginTop: '-8%',
        },
    },
    text: {

    },
    gridList: {
        backgroundColor: '',
        minWidth: '80%',
        [theme.breakpoints.up('1024')]: {
        paddingLeft: '10%',
        },
    },
});

export { useStyles };