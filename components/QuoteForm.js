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
    [theme.breakpoints.down(420)]: {
      width: "90%",
    },
  },
  quoteDiv: {
    margin: "1rem",
  },
  textField: {
    width: "100%",
    margin: "1rem",
    alignItems: "center",
  },
  buttonDiv: {
    width: "100%",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  quoteButton: {
    backgroundColor: "#68bd45",
    color: "black",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down(769)]: {
      marginRight: 0,
      marginLeft: 0,
      width: "100%",
    },
  },
  clearQuote: {
    marginLeft: 24,
    [theme.breakpoints.down(420)]: {
      marginLeft: 0,
      marginTop: "1rem",
    },
  },
  centerDiv: {
    marginLeft: "20%",
    marginRight: "20%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    [theme.breakpoints.down(420)]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  topInfo: {
    textAlign: "center",
    paddingBottom: theme.spacing(2),
  },
}));

export default function QuoteForm() {
  const classes = useStyles();

  const [renderQuote, setRenderQuote] = React.useState(false);
  const [quoteValue, setQuoteValue] = React.useState(0);

  const { values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
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
      setQuoteValue(calculateQuote());
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

  const calculateQuote = () => {
    return (values.length * values.width * values.height * values.weight * 0.2).toFixed(2);
  };

  const customOnChange = (fieldName, value) => {
    console.log(fieldName);
    console.log(value);
    console.log(quoteValue);
    setFieldValue(fieldName, value);
    if (value !== "") {
      setQuoteValue(calculateQuote());
    }
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
          onChange={(e) => customOnChange("length", e.target.value)}
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
          onChange={(e) => customOnChange("width", e.target.value)}
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
          onChange={(e) => customOnChange("height", e.target.value)}
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
          onChange={(e) => customOnChange("weight", e.target.value)}
          onBlur={(e) => customOnChange("weight", e.target.value)}
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
          InputProps={{
            className: classes.textField,
          }}
          value={values.service}
          onChange={(e) => customOnChange("service", e.target.value)}
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
          <div className={classes.quoteDiv}>
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
