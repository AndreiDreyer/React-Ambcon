import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import ContactForm from '../../components/ContactForm';
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const useStyles = makeStyles((theme) => ({
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
    flexGrow: 1,
    [theme.breakpoints.down('380')]: {
        height: '65% !important',
        width: '360% !important',
        marginLeft: '0% !important',
    },
    [theme.breakpoints.down('541')]: {
        height: '65%',
        width: '340%',
        marginLeft: '0%',
    },
    [theme.breakpoints.up('760')]: {
        height: '100%',
        width: '300%',
    },
    [theme.breakpoints.up('1020')]: {
        height: '100%',
        width: '295%',
    },
    [theme.breakpoints.up('1200')]: {
        height: '80%',
        width: '100%',
    },
  },
  body: {
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
}));

function Contact() {
    const classes = useStyles();
    return (
      <div>
        <Head>
          <title>Contact Us</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation></Navigation>
        <div className={classes.bannerDiv}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="../Desktop - 2@2x.png"
                        title="Banner Image"
                        />
                </Card>
            </div>
        <div className={classes.body}>
          <ContactForm></ContactForm>
        </div>
        <Footer></Footer>
      </div>
    );
  }

export default Contact;