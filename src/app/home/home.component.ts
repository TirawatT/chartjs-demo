import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ChartModule } from '../../../node_modules/angular2-chartjs';
// import {Chart} from 'chart.js';

//import Chart from '../../../node_modules/chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('chart1') chart1: ElementRef;

  typeChart = 'line';
  dataChart: any;
  optionsChart: any;
  label = 'label';
  dataArray = [10, 30, 50, 30, 40];
optionSuggestedMax = 50;
  dataChartBar = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "My Stats Chart",
        data: this.dataArray,
      }
    ]
  };

  datasets = [
    {
      label: "My Stats Chart",
      data: this.dataArray,
    }
  ]
  labels = ["January", "February", "March", "April", "May"]

 


  constructor() {
   }

  ngOnInit() {
    this.CreateChart();
  }
  CreateChart() {
    // this.dataChart =  this.dataChartBar
    this.dataChart =  {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "My Stats Chart",
          data: this.dataArray,
        }
      ]
    };
    this.optionsChart = {
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: true,
              display: false
  
            },
            scaleLabel: {
              display: true,
              labelString: 'labelString'
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 24,
            },
            categoryPercentage: 1.0,
            barPercentage: 1.0
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              fontSize: 12,
              labelString: '% Defective'
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: this.optionSuggestedMax,
              // suggestedMax: 50,
              
              beginAtZero: true
            },
            stacked: false,
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false
    };
   
  }
  OnChangeChartOption() {
    
   
   
  }
  clickData(){


    this.dataChart.datasets[0].data[1]+=15;
    this.datasets[0].data[1]+=15;
    // just trying refresh full variable
 //   this.dataChart = this.dataChartBar;
 //   this.dataChart = this.dataChart.slice();
  //  this.datasets = this.datasets.slice();
    console.log(typeof(this.datasets));
    console.log(this.dataChart.datasets[0].data[1]);

  //  this.chart1.ngOnchanges();
  }

}
