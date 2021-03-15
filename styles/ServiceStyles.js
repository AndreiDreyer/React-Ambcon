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
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            marginTop: 126,
        },
    },
    media: {
        width: '100%',
        height: '80%',
    },
    body: {
        flexGrow: 1,

        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        [theme.breakpoints.up('1024')]: {
            marginLeft: '20%',
            marginRight: '18%',
            
        },
        
    },
    headers: {
        alignContent: 'center',
        textAlign: 'left',
        color: 'white',
        backgroundColor: '#5eac3f',
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,

        [theme.breakpoints.down('769')]: {
            width: '100%',
        },
        [theme.breakpoints.up('1024')]: {
            marginLeft: '20%',
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
            float: 'right',
            maxWidth: '25%',
        },
    },
    bodyBlock: {
        marginBottom: '15%',
        marginTop: '-6%',
    },
    footer: {
        marginTop: 10,
    },
});

export { useStyles };