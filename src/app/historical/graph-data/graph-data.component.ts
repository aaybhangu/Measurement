import { Component, OnInit, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";

@Component({
  selector: "app-graph-data",
  templateUrl: "./graph-data.component.html",
  styleUrls: ["./graph-data.component.sass"]
})
export class GraphDataComponent implements OnInit {
  @Input() selectedData: any = {}; // input variable to get data from parent component

  // initail chart data.
  lineChartData: ChartDataSets[] = [
    {
      data: [-10, 44, 63, 61, 30, 65, 157, 82, 84, 147, 163, 147, 175],
      label: "CH01 SE01",
      fill: false
    },
    {
      data: [-28, 14, 40, 34, 8, 37, 108, 45, 63, 124, 121, 97, 132],
      label: "CH01 SE14",
      fill: false
    },
    {
      data: [37, 42, 46, 44, 40, 50, 69, 57, 50, 58, 62, 57, 59],
      label: "CH03 SE01",
      fill: false
    }
  ];

  //  bottom labels for the chart
  lineChartLabels: Label[] = [
    "18:10",
    " ",
    "18:11",
    " ",
    "18:12",
    " ",
    "18:13",
    " ",
    "18:14",
    " ",
    "18:15",
    " ",
    "18:16"
  ];
  lineChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            max: 200,
            min: -50,
            stepSize: 50
          }
        }
      ]
    }
  };
  // chart coloring settings
  lineChartColors: Color[] = [
    {
      // red
      backgroundColor: "rgba(235,70,73,1)",
      borderColor: "rgba(235,70,73,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    },
    {
      // Green
      backgroundColor: "rgba(168,240,166,1)",
      borderColor: "rgba(168,240,166,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // blue
      backgroundColor: "rgba(88,196,232,1)",
      borderColor: "rgba(88,196,232,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  lineChartLegend = true;
  lineChartType = "line"; // chart type.
  constructor() {}

  ngOnInit() {
    // Chart data array is being updated with data from parent component
    this.lineChartData.forEach((val, i) => {
      val.data = this.selectedData.selectedSensors[i].data;
      val.label = this.selectedData.selectedSensors[i].label;
    });
  }
}
