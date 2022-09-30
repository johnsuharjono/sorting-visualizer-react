import { Button } from "@material-ui/core";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import React from "react";

const Footer = (props) => {
  const resetArray = props.resetArray;
  const mergeSort = props.mergeSort;
  const insertionSort = props.insertionSort;
  const selectionSort = props.selectionSort;
  const bubbleSort = props.bubbleSort;
  const quickSort = props.quickSort;

  return (
    <div className="footer">
      <Grid
        display="flex"
        container
        direction="row"
        justify="center"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Button variant="contained" color="primary" onClick={resetArray}>
            Generate new array
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={mergeSort}>
            Merge Sort
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={insertionSort}>
            Insertion Sort
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={selectionSort}>
            Selection Sort
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={bubbleSort}>
            Bubble Sort
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={quickSort}>
            Quick Sort
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
