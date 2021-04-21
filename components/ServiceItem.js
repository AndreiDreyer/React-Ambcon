import Grid from "@material-ui/core/Grid";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
  bottomText: {
    backgroundColor: "#003c5e",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "2rem",
    fontWeight: 500,
    textAlign: "center",
  },
}));

export default function ServiceItem(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <img src={props.serviceImage} />
      <div className={classes.bottomText}>
        <p>{props.serviceName}</p>
      </div>
    </div>
  );
}
