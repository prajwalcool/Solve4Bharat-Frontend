import React, { useEffect, createRef } from "react";
import { Chart } from "chart.js";

const ScoreBar = props => {
  let ScoreBarRef = createRef();
  console.log(props.score);
  console.log(props.yLabel);
  useEffect(() => {
    let ctx = ScoreBarRef.current.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: [...props.yLabel],
        datasets: [
          {
            label: "SUbject Scores in the tests",
            data: [...props.score],
            backgroundColor: "rgba(8,256,132,0.2)",
            borderColor: "#08FFC8",
            pointBackgroundColor: "#222"
            // barThickness: "flex",
            // fill: "#000"
            // stack: "background"
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              display: true,
              stacked: false,
              ticks: { min: 0, max: 100, beginAtZero: true }
            }
          ],
          yAxes: [{ display: true, ticks: { beginAtZero: true } }]
        }
      }
    });
  });

  return (
    <div>
      <canvas
        className={props.className}
        // style={{ height: "10vh" }}
        ref={ScoreBarRef}
      ></canvas>
    </div>
  );
};

export default ScoreBar;
