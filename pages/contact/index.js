import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

import ContactForm from '../../components/ContactForm';
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 126,
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
        <div className={classes.body}>
          <ContactForm></ContactForm>
        </div>
        <Footer></Footer>
      </div>
    );
  }

export default Contact;