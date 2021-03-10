import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

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
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
        marginTop: 133,
        },
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

export { useStyles };