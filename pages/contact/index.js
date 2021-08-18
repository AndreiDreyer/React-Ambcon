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
        <div className={classes.bannerDiv}>
                  <Navigation />
                  <img src="../Desktop - 5@2x.png" className={classes.bannerDiv} />
              </div>
        <div className={classes.body}>
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }

export default Contact;