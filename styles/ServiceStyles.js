import { makeStyles } from '@material-ui/core/styles';
import { customTheme as theme } from '../src/theme';

const useStyles = makeStyles({
    mainContainer: {
        width: '100%',
    },
    container: {
        width: '100%',
    },
    bannerDiv: {
        maxWidth: '100%',
        [theme.breakpoints.up('1024')]: {
            marginTop: 62,
        }
    },
    body: {
        [theme.breakpoints.up('1024')]: {
            marginLeft: '18%',
            marginRight: '18%',
            maxWidth: '60%',
        }
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
            marginLeft: '18%',
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
        width: '100%',
    },
    footer: {
        marginTop: 10,
    },
});

export { useStyles };