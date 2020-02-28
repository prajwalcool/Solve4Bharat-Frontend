import React, { useEffect, createRef } from "react";
import { Chart } from "chart.js";

const ScoreBar = props => {
  let ScoreBarRef = createRef();
  useEffect(() => {
    let ctx = ScoreBarRef.current.getContext("2d");
    // Chart.pluginService.register({
    //   beforeDraw: function(chart, easing) {
    //     if (
    //       chart.config.options.chartArea &&
    //       chart.config.options.chartArea.backgroundColor
    //     ) {
    //       var helpers = Chart.helpers;
    //       var ctx = chart.chart.ctx;
    //       var chartArea = chart.chartArea;

    //       ctx.save();
    //       ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
    //       ctx.fillRect(
    //         chartArea.left,
    //         chartArea.top,
    //         chartArea.right - chartArea.left,
    //         chartArea.bottom - chartArea.top
    //       );
    //       ctx.restore();
    //     }
    //   }
    // });

    // Chart.plugins.register({
    //   beforeDraw: function(chartInstance, easing) {
    //     var ctx = chartInstance.chart.ctx;
    //     ctx.fillStyle = "rgb(256, 256, 256)";

    //     var chartArea = chartInstance.chartArea;
    //     ctx.fillRect(
    //       chartArea.left,
    //       chartArea.top,
    //       chartArea.right - chartArea.left,
    //       chartArea.bottom - chartArea.top
    //     );
    //   }
    // });

    // Chart.plugins.register({
    //   afterDatasetsDraw: function(chartInstance) {
    //     var ctx = chartInstance.chart.ctx,
    //       width = chartInstance.chartArea.right;
    //     chartInstance.data.datasets.forEach(function(dataset, datasetIndex) {
    //       var datasetMeta = chartInstance.getDatasetMeta(datasetIndex);
    //       datasetMeta.data.forEach(function(segment, segmentIndex) {
    //         var height = segment._model.height,
    //           posX = segment.tooltipPosition().x,
    //           posY = segment.tooltipPosition().y - height / 2;
    //         // draw white background
    //         ctx.save();
    //         ctx.fillStyle = "#eee";
    //         ctx.fillRect(posX, posY, width - posX, height);
    //         ctx.restore();
    //       });
    //     });
    //   }
    // });

    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: [
          "Communication",
          "Comprehension",
          "Vocabulary",
          "General Knowledge"
        ],
        datasets: [
          {
            label: "Score",
            data: [props.score, 58, 85, 42],
            backgroundColor: "#08FFC8",
            borderColor: "rgba(255, 255, 255, 0.5)",
            barThickness: "flex",
            fill: "#ccc",
            stack: "Background",
            barPercentage: 0.4
          }
          // {
          //   label: "Background",
          //   data: [100],
          //   backgroundColor: ["#CCCCCC"],
          //   barThickness: "flex",
          //   fill: "#000"
          //   // stack: true
          // }
        ]
      },
      options: {
        scales: {
          //   xAxes: [
          //     {
          //       display: false,
          //       stacked: false,
          //       ticks: {
          //         min: 0,
          //         max: 100
          //         // beginAtZero: true
          //       }
          //     }
          //   ],
          //   yAxes: [
          //     {
          //       display: true,
          //       // stacked: true,
          //       ticks: {
          //         beginAtZero: true,
          //         mirror: true,
          //         labelOffset: -26
          //       },
          //       scaleLabel: { display: true },
          //       gridLines: false
          //     }
          //   ]
        },
        aspectRatio: 2
        // chartArea: { backgroundColor: "#ccc" },
        // title: { display: true },
        // legend: { display: false },
        // tooltips: {
        //   filter: function(tooltipItem, data) {
        //     var label = data.labels[tooltipItem.index];
        //     console.log(tooltipItem, data, label);
        //     if (tooltipItem.ylabel == "Background") {
        //       return false;
        //     } else {
        //       return true;
        //     }
        //   },
        //   callbacks: {
        //     label: function(tooltipItem, data) {
        //       var allData = data.datasets[tooltipItem.datasetIndex].data;
        //       var tooltipData = allData[tooltipItem.index];
        //       var total = 0;
        //       for (var i in allData) {
        //         total += allData[i];
        //       }
        //       return tooltipData + "%";
        //     }
        //   }
        // }
        // responsive: true
      }
      //   plugins: {
      //     labels: {
      //       render: "percentage",
      //       showActualPercentages: true
      //     }
      //   }
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
