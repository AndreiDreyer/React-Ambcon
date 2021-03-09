import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    textAlign: "center",
    paddingBottom: 377,
    [theme.breakpoints.down(767)]: {
      paddingBottom: 723,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 173,
    },
  },
  servicesContainer: {
    height: "100%",
  },
  serviceImage: {},
  serviceTitle: {
    maxHeight: "75px",
  },
  introText: {
    lineHeight: "1.7rem",
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const ipad = useMediaQuery(theme.breakpoints.down(769));
  const ipadUp = useMediaQuery(theme.breakpoints.up(768));

  const numCols = () => {
    if (ipad && ipadUp) {
      return 3;
    } else if (sm) {
      return 1;
    } else if (md) {
      return 3;
    } else {
      return 3;
    }
  };

  const services = [
    {
      serviceName: "Consolodation",
      imgUrl: "logo.png",
    },
    {
      serviceName: "Full Load",
      imgUrl: "logo.png",
    },
    {
      serviceName: "Clearing",
      imgUrl: "logo.png",
    },
  ];

  return (
    <div className={classes.root}>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.intorParagraph}>
          <h1>The who's who in Logistics</h1>
          <p className={classes.introText}>
            Ambcon Logistics specialises in a wide spectrum of transport services including full-load, consolidation, transport broking and
            procurement services. With an ample fleet of forty-eight horses and 65 super link trailers, of which 24 are taut liners. Ambcon Logistics
            are well placed to meet your transporting needs. In addition we enjoy strong working relationships with a group of reliable transport
            operators who we sub-contract where necessary.
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
                <img src={service.imgUrl} />
                <GridListTileBar title={service.serviceName} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div className={classes.paragraphTwo}>
          <p>We are the best</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
