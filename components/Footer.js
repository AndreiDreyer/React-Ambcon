import React from "react";

import clsx from "clsx";

import Link from "next/link";

import Grid from "@material-ui/core/Grid";

import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    backgroundColor: "#031926",
    color: "white",
    [theme.breakpoints.down(767)]: {
      height: 723,
    },
  },
  gridContainer: {
    position: "relative",
  },
  footerColumns: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  footerLinks: {},
  footerColumnTwo: {
    margin: theme.spacing(2),
  },
  footerColumnThree: {
    margin: theme.spacing(2),
  },
  footerDiv: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  footerInfo: {
    marginLeft: "1rem",
    marginRight: "auto",
  },
  footerIcon: {
    marginLeft: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

export default function Footer() {
  const classes = useStyles();

  const footerNavItems = [
    {
      text: "Contacts",
      url: "/contacts/",
    },
    {
      text: "Insurance",
      url: "/insurance",
    },
    {
      text: "Details",
      url: "/details",
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container orientation="column">
        <Grid item xs={12} sm={4}>
          <div className={clsx(classes.footerColumns, classes.footerLinks)}>
            <h2>Links</h2>
            {footerNavItems.map((footerNavItem) => (
              <Link href={footerNavItem.url} key={footerNavItem.text}>
                <p>{footerNavItem.text}</p>
              </Link>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={clsx(classes.footerColumns, classes.footerColumnTwo)}>
            <h2>Solutions</h2>
            <p>Full Loads</p>
            <p>Consolodation Loads</p>
            <p>Clearing</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={clsx(classes.footerColumns, classes.footerColumnThree)}>
            <h2>Contact Us</h2>
            <div className={classes.footerDiv}>
              <PhoneIcon className={classes.footerIcon} />
              <div className={classes.footerInfo}>
                <p>SA: +27 11 397 5040</p>
                <p>Zim: +263 0242 446 384</p>
              </div>
            </div>
            <div className={classes.footerDiv}>
              <LocationOnIcon className={classes.footerIcon} />
              <div className={classes.footerInfo}>
                <p>CNR Corova Str & Jet Park Rd</p>
                <p>Jet Park, Johannesburg</p>
                <p>7 Borgward Rd</p>
                <p>Msasa, Harare</p>
              </div>
            </div>
            <div className={classes.footerDiv}>
              <EmailIcon className={classes.footerIcon} />

              <div className={classes.footerInfo}>
                <p>matt@ambconlogistics.com</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
