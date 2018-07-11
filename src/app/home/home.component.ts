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
  @ViewChild('chart2') chart2: ElementRef;

  typeChart = 'line';
  dataChart: any;
  optionsChart: any;
  label = 'label';

  dataChartBar = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "My Stats Chart",
        data: [10, 30, 50, 30, 40],
      }
    ]
  };

  optionsChartBar = {
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
            suggestedMax: 50,
            beginAtZero: true
          },
          stacked: false,
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  };


  constructor() {
   }

  ngOnInit() {
    this.CreateChart();
  }
  CreateChart() {
    this.dataChart =  this.dataChartBar
    this.optionsChart = this.optionsChartBar;
  }
  OnChangeChartOption() {
    
    this.CreateChart();
    this.dataChart = this.dataChartBar;
    console.log(this.optionsChart.scales.yAxes[0].ticks.suggestedMax);
   
  }
 // chart2 : any;
  CreateChart2(){
    let ctxChart = this.chart2.nativeElement.getContext('2d');
   }

}
