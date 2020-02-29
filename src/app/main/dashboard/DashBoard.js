import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import ScoreBar from "./charts/ScoreBar";
import {
  Slider,
  Paper,
  AppBar,
  Tab,
  Tabs,
  Typography,
  Box
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
// import ActivityRadar from "./charts/ActivityRadar";
import SportsRadar from "./charts/SportsRadar";
import TestsLineChart from "./charts/TestsLineChart";
import QuizPieChart from "./charts/QuizPieChart";
// import ScoreSLider from "./charts/ScoreSlider";
import SubjectBarChart from "./charts/SubjectBarChart";
// import ScoreOutOf from "./components/ScoreOutOf";
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
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

  const testSubjectLabel = _.keys(data.tests[0]).filter(o => o != "__typename");
  console.log(testSubjectLabel);

  const testLabel = () => {
    let tesLabel = [];
    for (let index = 1; index <= data.tests.length; index++) {
      tesLabel.push(`Test ${index}`);
    }
    return tesLabel;
  };
  console.log(testLabel());

  const m = testSubjectLabel.map(label =>
    _.map(data.tests, function(test) {
      return test[`${label}`];
    })
  );

  console.log(m);

  console.log(sports);
  return (
    <div className="container-fluid p-6">
      <Paper className="text-black flex w-10/12 my-10 p-6 m-auto">
        <div className="flex-1">
          <SubjectBarChart ylabel={subjectsLabel} score={subjectsValues} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <Paper className="text-black flex w-10/12 p-6 my-10 m-auto">
        <div className="flex-1">
          <SportsRadar score={sports} />
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <Paper className="text-black flex w-10/12 p-6 my-10 m-auto">
        <div className="flex-1">
          {/* <TestsLineChart yLabel={testLabel()} score={testValues} /> */}
          {/* <ActivityRadar /> */}
        </div>
      </Paper>
      <div className="w-10/12 m-auto">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {testSubjectLabel &&
              testSubjectLabel.map((label, index) => {
                return (
                  <Tab key={index} label={label} {...a11yProps({ index })} />
                );
              })}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {testSubjectLabel &&
            testSubjectLabel.map((label, index) => {
              return (
                <TabPanel
                  key={index}
                  value={value}
                  index={index}
                  dir={theme.direction}
                >
                  <TestsLineChart yLabel={testLabel()} score={m[index]} />
                </TabPanel>
              );
            })}
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Example;
