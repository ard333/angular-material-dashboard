import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dataPieGrid = [
    { "name": "Germany", "value": 8940000 },
    { "name": "USA", "value": 5000000 },
    { "name": "France", "value": 7200000 }
  ];
  colorPieGrid: Color = {
    name: 'colorPieGrid',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#E44D25', '#CFC0BB']
  };

  dataLine: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990", "value": 62000000 },
        { "name": "2010", "value": 73000000 },
        { "name": "2011", "value": 89400000 }
      ]
    },
    {
      "name": "USA",
      "series": [
        { "name": "1990", "value": 250000000 },
        { "name": "2010", "value": 309000000 },
        { "name": "2011", "value": 311000000 }
      ]
    },
    {
      "name": "France",
      "series": [
        { "name": "1990", "value": 58000000 },
        { "name": "2010", "value": 50000020 },
        { "name": "2011", "value": 58000000 }
      ]
    },
    {
      "name": "UK",
      "series": [
        { "name": "1990", "value": 57000000 },
        { "name": "2010", "value": 62000000 }
      ]
    }
  ];
  colorLine: Color = {
    name: 'colorPieGrid',
    selectable: true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {}

}
