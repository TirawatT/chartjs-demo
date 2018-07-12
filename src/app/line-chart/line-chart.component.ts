import { Component, OnInit ,ViewChild} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  constructor() { }
  ngOnInit() {
    
  }
 
  dataTmp:number = 80;

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true,
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
            suggestedMax: 150,
            // suggestedMax: 50,
            
            beginAtZero: true
          },
          stacked: false,
        }
      ]
    }
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';




  chartClicked(e){
    this.lineChartData[0].data[1]+=15;
    this.chart.chart.update();
  //  this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
    
  }
  OnChangeChartData(){
    this.chart.chart.update();
  }
  OnChangeChartOption(){
    this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
  }
}
