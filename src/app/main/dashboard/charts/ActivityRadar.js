import React, { useEffect, createRef } from "react";
import { Chart } from "chart.js";

const ScoreBar = props => {
  let ScoreBarRef = createRef();
  useEffect(() => {
    let ctx = ScoreBarRef.current.getContext("2d");
    Chart.pluginService.register({
      beforeDraw: function(chart, easing) {
        if (
          chart.config.options.chartArea &&
          chart.config.options.chartArea.backgroundColor
        ) {
          var helpers = Chart.helpers;
          var ctx = chart.chart.ctx;
          var chartArea = chart.chartArea;

          ctx.save();
          ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
          ctx.fillRect(
            chartArea.left,
            chartArea.top,
            chartArea.right - chartArea.left,
            chartArea.bottom - chartArea.top
          );
          ctx.restore();
        }
      }
    });
    new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Score"],
        datasets: [
          {
            label: "Score",
            data: [props.score],
            backgroundColor: ["#08FFC8"],
            barThickness: "flex",
            fill: "#000",
            stack: "background"
          },
          {
            label: "Background",
            data: [100, 200],
            backgroundColor: ["#CCCCCC"],
            barThickness: "flex",
            fill: "#000"
            // stack: true
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
          yAxes: [
            { display: true, stacked: true, ticks: { beginAtZero: true } }
          ]
        },
        aspectRatio: 3,
        // chartArea: { backgroundColor: "#ccc" },
        title: { display: false },
        legend: { display: false },
        tooltips: {
          filter: function(tooltipItem, data) {
            var label = data.labels[tooltipItem.index];
            console.log(tooltipItem, data, label);
            if (tooltipItem.ylabel == "Background") {
              return false;
            } else {
              return true;
            }
          }
        }
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
