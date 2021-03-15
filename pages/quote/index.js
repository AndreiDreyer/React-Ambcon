import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    position: "relative",
    minHeight: "100vh",
  },
  quoteForm: {
    paddingBottom: theme.spacing(4),
    marginLeft: "25%",
    marginRight: "25%",
    [theme.breakpoints.down(420)]: {
      marginLeft: "2rem",
      marginRight: "2rem",
      marginTop: "-90% !important",
    },
    [theme.breakpoints.down('770')]: {
      marginTop: "-20%",
    },
    [theme.breakpoints.up('1020')]: {
      marginTop: "-7%",
    },
  },
  page: {
    paddingTop: 126,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 723,
      paddingTop: 0,
    },
    [theme.breakpoints.up('770')]: {
      paddingBottom: 377,
    },
  },
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
}));

export default function Quote() {
  const classes = useStyles();

  return (
    <div>
        <div>
          <Navigation />
        </div>
    <div className={classes.pageContainer}>
      <div className={classes.page}>
        <div className={classes.bannerDiv}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="../Desktop - 3@2x.png"
                        title="Contemplative Reptile"
                        />
                </Card>
            </div>
        <div className={classes.quoteForm}>
          <QuoteForm />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}
