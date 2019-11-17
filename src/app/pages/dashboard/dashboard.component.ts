import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
/* import * as Chart from 'chart.js' */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  /* @ViewChild('barChart') barChart: ElementRef;
  public contextBar: CanvasRenderingContext2D;

  @ViewChild('pieChart') pieChart: ElementRef;
  public contextPie: CanvasRenderingContext2D; */

  constructor() { }

  ngAfterViewInit() {
    /* this.contextBar = (<HTMLCanvasElement>this.barChart.nativeElement).getContext('2d');
    new Chart(this.contextBar, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Label One',
            data: [{ x: 20, y: 10 }, { x: 10, y: 15 }, { x: 30, y: 20 }],
            backgroundColor: ['rgba(75, 192, 192, 0.7)']
          },
          {
            label: 'Label Two',
            data: [{ x: 10, y: 30 }, { x: 15, y: 10 }, { x: 20, y: 20 }],
            backgroundColor: ['rgba(255, 159, 64, 0.7)']
          }
        ]
      }
    })

    this.contextPie = (<HTMLCanvasElement>this.pieChart.nativeElement).getContext('2d');
    new Chart(this.contextPie, {
      type: 'pie',
      data: {
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)']
        }],
        labels: [
          'Label One',
          'Label Two',
          'Label Three'
        ]
      }
    }) */
  }

}
