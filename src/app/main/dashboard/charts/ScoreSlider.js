import React from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  disabled: {
    color: "#52af77"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);
const getMarks = () => {
  let val = [];
  for (let index = 0; index <= 100; index = index + 10) {
    val.push({ value: index, label: `${index} %` });
  }
  return val;
};

function valuetext(value) {
  return `${value} %`;
}
function ScoreSlider(props) {
  return (
    <div>
      <PrettoSlider
        className="w-6/12"
        defaultValue={80}
        color="primary"
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={getMarks()}
        valueLabelDisplay="on"
        // disabled
      />
    </div>
  );
}

export default ScoreSlider;
