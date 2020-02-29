import React, { useEffect, createRef } from "react";
import { Chart } from "chart.js";

const ScoreBar = props => {
  let ScoreBarRef = createRef();
  console.log(...props.score);
  useEffect(() => {
    let ctx = ScoreBarRef.current.getContext("2d");

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Running", "Swimming", "BasketBall", "Chess", "Cycling"],
        datasets: [
          {
            label: "No of Hours Spent for a Week",
            data: [...props.score],
            backgroundColor: "rgba(8,256,132,0.2)",
            borderColor: "#08FFC8",
            pointBackgroundColor: "#222",

            pointBorderColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)"
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
              // stacked: false,
              //   ticks: { beginAtZero: true }
              ticks: { min: 0, beginAtZero: true }
            }
          ],
          yAxes: [{ ticks: { min: 0, beginAtZero: true } }]
        }
        //   aspectRatio: 3,
        // chartArea: { backgroundColor: "#ccc" },
        //   title: { display: false },
        //   legend: { display: false },
        //   tooltips: {
        //     filter: function(tooltipItem, data) {
        //       var label = data.labels[tooltipItem.index];
        //       console.log(tooltipItem, data, label);
        //       if (tooltipItem.ylabel == "Background") {
        //         return false;
        //       } else {
        //         return true;
        //       }
        //     }
        //   }
        // responsive: true
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
