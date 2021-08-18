import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  quoteForm: {
    marginRight: '20%',
    marginLeft: '20%',
    marginBottom: '10%',
  },
  page: {
    width: '100%',
},
pageContainer: {
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
}));

export default function Quote() {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.page}>
      <div className={classes.bannerDiv}>
                  <Navigation />
                  <img src="../Desktop - 2@2x.png" className={classes.bannerDiv} />
              </div>
        <div className={classes.quoteForm}>
          <QuoteForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
