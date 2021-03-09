import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    width: "25rem",
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
    width: "40%",
    marginLeft: "30%",
    marginRight: "30%",
    [theme.breakpoints.down(766)]: {
      marginRight: 0,
      marginLeft: 0,
      width: "100%",
    },
  },
  centerDiv: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  topInfo: {
    textAlign: "center",
    paddingBottom: theme.spacing(2),
  },
}));

export default function QuoteForm() {
  const classes = useStyles();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
    },

    validationSchema: Yup.object().shape({
      length: Yup.number("Length must be a number").required("Length is required"),
      width: Yup.number("Width must be a number").required("Width is required"),
      height: Yup.number("Height must be a number").required("Height is required"),
      weight: Yup.number("Weight must be a number").required("Weight is required"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} border={1} className={classes.quoteForm}>
      <div style={{ fontSize: "1.3rem" }} className={classes.innerQuoteForm}>
        <div className={classes.topInfo}>
          <Typography>Enter the information for a quote</Typography>
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
        <div className={classes.buttonDiv}>
          <div className={classes.centerDiv}>
            <Button type="submit" color="primary" className={classes.quoteButton}>
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
