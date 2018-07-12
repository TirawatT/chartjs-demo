import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';

//import {ChartModule} from 'angular2-chartjs';
import { LineChartComponent } from './line-chart/line-chart.component';
import {ChartsModule} from 'ng2-charts';

// import {Chart} from 'chart.js';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  //  , Chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
