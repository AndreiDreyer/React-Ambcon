import Head from "next/head";
import Link from "next/link";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "100vh",
  },
  container: {
    textAlign: "center",
    // paddingBottom: 377,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down(767)]: {
      paddingBottom: 723,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 133,
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
  },
  serviceTitle: {
    maxHeight: "75px",
  },
  introText: {
    lineHeight: "1.7rem",
  },
  bannerImage: {
    width: "100%",
    maxWidth: "100%",
    margin: 0,
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
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const ipad = useMediaQuery(theme.breakpoints.down(769));
  const ipadUp = useMediaQuery(theme.breakpoints.up(768));

  const numCols = () => {
    if (ipad && ipadUp) {
      return 2;
    } else if (sm) {
      return 1;
    } else if (md) {
      return 4;
    } else {
      return 4;
    }
  };

  return (
    <div className={classes.root}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.bannerImage}>
          <img src="Banners/Desktop - 1@2x.png" className={classes.bannerImage} />
        </div>
        <div className={classes.secondContainer}>
          <div className={classes.intorParagraph}>
            <h1>The who's who in Logistics</h1>
            <p className={classes.introText}>
              Ambcon Logistics specialises in a wide spectrum of transport services including full-load, consolidation, transport broking and
              procurement services. With an ample fleet of forty-eight horses and 65 super link trailers, of which 24 are taut liners. Ambcon
              Logistics are well placed to meet your transporting needs. In addition we enjoy strong working relationships with a group of reliable
              transport operators who we sub-contract where necessary.
            </p>
          </div>
          <div className={classes.servicesContainer}>
            <GridList cellHeight={250} cols={numCols()} spacing={12}>
              <GridListTile cols={numCols()} row={2} className={classes.serviceTitle}>
                <div>
                  <h3>Services</h3>
                </div>
              </GridListTile>
              {services.map((service) => (
                <GridListTile key={service.serviceName}>
                  <Link key={service.serviceName} href={service.serviceUrl}>
                    <img src={service.imgUrl} className={classes.serviceImage} />
                  </Link>
                  <GridListTileBar title={service.serviceName} />
                </GridListTile>
              ))}
            </GridList>
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
