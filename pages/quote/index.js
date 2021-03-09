import React from "react";

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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: "25%",
    marginRight: "25%",
  },
  page: {
    paddingTop: 173,
    paddingBottom: 377,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 723,
      paddingTop: 0,
    },
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
        <div className={classes.quoteForm}>
          <QuoteForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
