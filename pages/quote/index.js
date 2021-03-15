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
    },
  },
  page: {
    paddingTop: 126,
    paddingBottom: 377,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 723,
      paddingTop: 0,
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
      width: '100%',
      height: '80%',
  },
}));

export default function Quote() {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.page}>
        <div>
          <Navigation />
        </div>
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
  );
}
