import React, { Component } from "react";
import ScoreBar from "./charts/ScoreBar";
import { Slider, Paper } from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import ActivityRadar from "./charts/ActivityRadar";
import SportsRadar from "./charts/SportsRadar";
import TestsLineChart from "./charts/TestsLineChart";
import QuizPieChart from "./charts/QuizPieChart";
import ScoreSLider from "./charts/ScoreSlider";
import SubjectBarChart from "./charts/SubjectBarChart";
import ScoreOutOf from "./components/ScoreOutOf";

const useStyles = makeStyles(theme => ({
  root: {
    width: "75%"
  },
  margin: {
    height: theme.spacing(4)
  },
  MuiSlider: {
    markLabel: {
      color: "black"
    },
    markLabelActive: {}
  }
}));

const Example = () => {
  const classes = useStyles();
  // console.log(getMarks());
  return (
    <div className="container-fluid p-6">
      <Paper className="text-black flex w-10/12 my-10  m-auto">
        <div className="flex-1">
          <SubjectBarChart score={74} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <Paper className="text-black flex w-10/12 my-10 m-auto">
        <div className="flex-1">
          <SportsRadar score={[2, 3, 2, 4, 3]} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <Paper className="text-black flex w-10/12 my-10 m-auto">
        <div className="flex-1">
          <TestsLineChart score={[2, 3, 2, 4, 3]} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <Paper className="text-black flex w-10/12 my-10 m-auto">
        <div className="flex-1">
          <QuizPieChart score={[2, 3, 2, 4, 3]} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
    </div>
  );
};

export default Example;
