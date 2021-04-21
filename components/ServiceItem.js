import Grid from "@material-ui/core/Grid";

import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    perspective: "40rem",
    // backgroundColor: "transparent",
    // border: "1px solid #f1f1f1",
    // perspective: "40rem",
    "&:hover": {
      cursor: "pointer",
      "& $innerCard": {
        transform: "rotateY(180deg)",
      },
    },
  },
  innerCard: {
    display: "flex",
    transformStyle: "preserve-3d",
    transition: "0.8s transform",
    [theme.breakpoints.down(415)]: {
      display: "block",
      height: "375px",
    },
  },
  bottomText: {
    backgroundColor: "#003c5e",
    color: "white",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "2rem",
    fontWeight: 500,
    textAlign: "center",
  },
  topText: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: "1.3rem",
    textAlgin: "center",
  },
  front: {
    minWidth: "100%",
    backfaceVisibility: "hidden",
  },
  back: {
    minWidth: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg) translate(100%, 0)",
  },
  descText: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 300,
    fontSize: "1.1rem",
    lineHeight: "1.5rem",
  },
}));

export default function ServiceItem(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.innerCard}>
        <div className={classes.front}>
          <img src={props.serviceImage} />
          <div className={classes.bottomText}>
            <p>{props.serviceName}</p>
          </div>
        </div>
        <div className={classes.back}>
          <div className={classes.topText}>
            <h3>{props.serviceName}</h3>
          </div>
          <div className={classes.descText}>
            <p>{props.shortDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
