import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../../components/ContactForm';

const useStyles = makeStyles((theme) => ({
}));

function Contact() {
    const classes = useStyles();
    return (
      <div>
        <Head>
          <title>Contact Us</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactForm></ContactForm>
      </div>
    );
  }

export default Contact;