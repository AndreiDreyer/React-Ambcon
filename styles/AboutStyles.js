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
            marginLeft: '15%',
            marginRight: '2%',
        }
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