import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-historical",
  templateUrl: "./historical.component.html",
  styleUrls: ["./historical.component.sass"]
})
export class HistoricalComponent implements OnInit {
  // dropdownObj to add date into the Dropbox Items. Any new items can be added to the array list in the obj.
  dropdownObj = {
    SensorType: ["Humidity"],
    Sensors: ["CH01 SE01, CH01 SE14,CH03 SE01"],
    DataGranularity: ["5 Min"],
    TimeRange: ["Past 1 Day"]
  };
  // sensor Data It is just dummy data array can be replace with the real date.
  sensorsData = [
    {
      data: [-10, 44, 63, 61, 30, 65, 157, 82, 84, 147, 163, 147, 175],
      label: "CH01 SE01"
    },
    {
      data: [-28, 14, 40, 34, 8, 37, 108, 45, 63, 124, 121, 97, 132],
      label: "CH01 SE14"
    },
    {
      data: [37, 42, 46, 44, 40, 50, 69, 57, 50, 58, 62, 57, 59],
      label: "CH03 SE01"
    }
  ];

  dataValidator: any; // DateValidator a boolen variable. will get true when all the dropbox field are selected.

  //  selectedData: It will get all the users inputs. right now It have been given default selected values.
  selectedData: any = {
    sensorType: "Humidity",
    Sensors: ["CH01 SE01, CH01 SE14,CH03 SE01"],
    selectedSensors: [
      {
        data: [-10, 44, 63, 61, 30, 65, 157, 82, 84, 147, 163, 147, 175],
        label: "CH01 SE01"
      },
      {
        data: [-28, 14, 40, 34, 8, 37, 108, 45, 63, 124, 121, 97, 132],
        label: "CH01 SE14"
      },
      {
        data: [37, 42, 46, 44, 40, 50, 69, 57, 50, 58, 62, 57, 59],
        label: "CH03 SE01"
      }
    ],
    data_Granularity: "5 Min",
    time_Range: "Past 1 Day"
  };
  constructor() {}

  ngOnInit() {
    this.updateSensorsData(); // function format all the data in required format.
  }

  onSelect() {
    if (this.selectedData.Sensors) {
      this.updateSensorsData();
    }
  }
  updateSensorsData() {
    this.selectedData.selectedSensors = this.sensorsData; // SensorData is getting add to selecteddata obj.
    this.dataValidator = Object.keys(this.selectedData).length >= 5 ? 1 : 0; // dataValidator validate if all the required feilds are there.
  }
}
