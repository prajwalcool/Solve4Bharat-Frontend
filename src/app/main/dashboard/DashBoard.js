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
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import _ from "@lodash";

const GET_SPORTS = gql`
  query getsports {
    sports {
      running
      swimming
      basketball
      chess
      cycling
    }
    english {
      communication
      Comprehensive
      Grammar
      Vocabulary
      Writing
      Aptitude
      LogicalReasoning
      GeneralMentalAbility
      MathSkills
      GeneralKnowledge
    }
    tests {
      Language1
      Language2
      Language3
      Maths
      Science
      Social
    }
  }
`;

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
  const { data, loading, error } = useQuery(GET_SPORTS);
  if (error) {
    return <h1>ERROR</h1>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }
  console.log(data);
  const sports = _.compact(
    _.map(data.sports[0], function(value, key) {
      if (key != "__typename") {
        return value;
      }
    })
  );

  const subjectsLabel = _.compact(
    _.map(data.english[0], function(value, key) {
      if (key != "__typename") {
        return key;
      }
    })
  );

  const subjectsValues = _.compact(
    _.map(data.english[0], function(value, key) {
      if (key != "__typename") {
        return value;
      }
    })
  );

  const testSubjectLabel = _.keys(data.tests[0]);

  const testLabel = () => {
    let tesLabel = [];
    for (let index = 1; index <= data.tests.length; index++) {
      tesLabel.push(`Test ${index}`);
    }
    return tesLabel;
  };
  console.log(testLabel());

  const testValues = _.compact(
    _.map(data.tests, function(test) {
      return test.Language1;
    })
  );
  console.log(testValues);

  console.log(sports);
  return (
    <div className="container-fluid p-6">
      <Paper className="text-black flex w-10/12 my-10  m-auto">
        <div className="flex-1">
          <SubjectBarChart ylabel={subjectsLabel} score={subjectsValues} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <Paper className="text-black flex w-10/12 my-10 m-auto">
        <div className="flex-1">
          <SportsRadar score={sports} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <Paper className="text-black flex w-10/12 my-10 m-auto">
        <div className="flex-1">
          <TestsLineChart yLabel={testLabel()} score={testValues} />
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
