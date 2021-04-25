import Head from "next/head";
import Link from "next/link";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import ServicesHome from "../components/ServicesHome";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "100vh",
  },
  container: {
    textAlign: "center",
    paddingBottom: theme.spacing(2),
    paddingTop: 0,
    [theme.breakpoints.down(767)]: {
      paddingBottom: 723,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 128,
    },
  },
  servicesContainer: {
    height: "100%",
  },
  secondContainer: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  serviceImage: {
    maxHeight: 175,
    cursor: "pointer",
  },
  serviceTitle: {
    maxHeight: "75px",
  },
  introText: {
    lineHeight: "1.7rem",
    fontFamily: '"Lato", sans-serif',
    fontWeight: 400,
    color: "#2C3539",
    fontSize: "1.2rem",
  },
  bannerImage: {
    width: "100%",
    maxWidth: "100%",
    margin: 0,
  },
  titleText: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: 600,
    fontSize: "2rem",
  },
  servicesTitle: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: 600,
    fontSize: "1.7rem",
  },
}));

const services = [
  {
    serviceName: "Consolodation",
    imgUrl: "Badges/consolidated-load.png",
    serviceUrl: "/services/consolidated-load",
  },
  {
    serviceName: "Full Load",
    imgUrl: "Badges/full-load.png",
    serviceUrl: "/services/full-load",
  },
  {
    serviceName: "Clearing",
    imgUrl: "Badges/clearing.png",
    serviceUrl: "/services/clearing",
  },
  {
    serviceName: "Procurement",
    imgUrl: "Badges/procurement.png",
    serviceUrl: "/services/procurement",
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.bannerImage}>
          <img src="Banners/Desktop - 1@2x.png" className={classes.bannerImage} />
        </div>
        <div className={classes.secondContainer}>
          <div className={classes.intorParagraph}>
            <h1 className={classes.titleText}>The who's who in Logistics</h1>
            <p className={classes.introText}>
              Ambcon Logistics specialises in a wide spectrum of transport services including full-load, consolidation, transport broking and
              procurement services. With an ample fleet of forty-eight horses and 65 super link trailers, of which 24 are taut liners. Ambcon
              Logistics are well placed to meet your transporting needs. In addition we enjoy strong working relationships with a group of reliable
              transport operators who we sub-contract where necessary.
            </p>
          </div>
          <div className={classes.servicesContainer}>
            <h2 className={classes.servicesTitle}>Our Services</h2>
            <ServicesHome />
          </div>
          <div className={classes.paragraphTwo}>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
