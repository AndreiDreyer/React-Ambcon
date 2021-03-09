import React from "react";

import clsx from "clsx";

import { useFormik } from "formik";
import * as Yup from "yup";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  quoteForm: {
    display: "block",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  textField: {
    width: "100%",
    margin: "1rem",
    alignItems: "center",
    [theme.breakpoints.down(765)]: {
      width: "10rem",
    },
    [theme.breakpoints.down(320)]: {
      width: "8rem",
    },
  },
  buttonDiv: {
    width: "100%",
  },
  quoteButton: {
    backgroundColor: "#68bd45",
    color: "black",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down(766)]: {
      marginRight: 0,
      marginLeft: 0,
      width: "100%",
    },
  },
  clearQuote: {
    marginLeft: 12,
  },
  centerDiv: {
    marginLeft: "20%",
    marginRight: "20%",
    display: "flex",
  },
  topInfo: {
    textAlign: "center",
    paddingBottom: theme.spacing(2),
  },
}));

const quoteServices = ["Full Load", "Consolidated Load", "Clearance", "Procurement"];

export default function QuoteForm() {
  const classes = useStyles();

  const [renderQuote, setRenderQuote] = React.useState(false);
  const [quoteValue, setQuoteValue] = React.useState(0);

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
      service: "Full Load",
    },

    validationSchema: Yup.object().shape({
      length: Yup.number("Length must be a number").required("Length is required"),
      width: Yup.number("Width must be a number").required("Width is required"),
      height: Yup.number("Height must be a number").required("Height is required"),
      weight: Yup.number("Weight must be a number").required("Weight is required"),
      service: Yup.string("Service must be a string").required("Service is Required"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      setRenderQuote(true);
      setQuoteValue(calculateQuote(values.length, values.width, values.height, values.weight));
      console.log(values);
    },
  });

  const clearQuote = () => {
    setRenderQuote(false);
    setQuoteValue(0);
    values.length = 0;
    values.width = 0;
    values.height = 0;
    values.weight = 0;
  };

  const calculateQuote = (length, width, height, weight) => {
    return (length * width * height * weight * 0.3).toFixed(2);
  };

  return (
    <form onSubmit={handleSubmit} border={1} className={classes.quoteForm}>
      <div style={{ fontSize: "1.3rem" }} className={classes.innerQuoteForm}>
        <div className={classes.topInfo}>
          <Typography>Enter the requried information below to generate a quote</Typography>
        </div>
        <div className={classes.textfieldDiv}></div>
        <TextField
          required
          name="length"
          id="length"
          variant="standard"
          label="Length (cm)"
          className={classes.textField}
          InputProps={{
            className: classes.textField,
          }}
          value={values.length}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.length ? errors.length : ""}
          error={touched.length && !!errors.length}
        />
        <TextField
          required
          name="width"
          id="width"
          variant="standard"
          label="Width (cm)"
          className={classes.textField}
          InputProps={{
            className: classes.textField,
          }}
          value={values.width}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.width ? errors.width : ""}
          error={touched.width && !!errors.width}
        />
        <TextField
          required
          name="height"
          id="height"
          variant="standard"
          label="Height (cm)"
          className={classes.textField}
          InputProps={{
            className: classes.textField,
          }}
          value={values.height}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.height ? errors.height : ""}
          error={touched.height && !!errors.height}
        />
        <TextField
          required
          name="weight"
          id="weight"
          variant="standard"
          label="Weight (kg)"
          className={classes.textField}
          InputProps={{
            className: classes.textField,
          }}
          value={values.weight}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.weight ? errors.weight : ""}
          error={touched.weight && !!errors.weight}
        />
        <TextField
          required
          select
          id="service"
          name="service"
          label="Service"
          variant="standard"
          className={classes.textField}
          value={values.service}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.service ? errors.service : ""}
          error={touched.service && !!errors.service}
        >
          <MenuItem value="Full Load">Full Load</MenuItem>
          <MenuItem value="Consolidated Load">Consolidated Load</MenuItem>
          <MenuItem value="Clearing">Clearing</MenuItem>
          <MenuItem value="Procurement">Procurement</MenuItem>
        </TextField>
        <div className={classes.buttonDiv}>
          <div className={classes.centerDiv}>
            <Button type="submit" color="primary" className={classes.quoteButton}>
              Get Quote
            </Button>
            <Button onClick={clearQuote} className={clsx(classes.quoteButton, classes.clearQuote)}>
              Clear Quote
            </Button>
          </div>
        </div>
        {renderQuote && (
          <div>
            <h3>Your Quote Below:</h3>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Measurement</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Length</TableCell>
                    <TableCell>cm</TableCell>
                    <TableCell>{values.length}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Width</TableCell>
                    <TableCell>cm</TableCell>
                    <TableCell>{values.width}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell>cm</TableCell>
                    <TableCell>{values.height}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Weight</TableCell>
                    <TableCell>kg</TableCell>
                    <TableCell>{values.weight}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={1}></TableCell>
                    <TableCell>Service:</TableCell>
                    <TableCell>{values.service}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={1}></TableCell>
                    <TableCell>Total:</TableCell>
                    <TableCell>R{quoteValue}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </form>
  );
}
