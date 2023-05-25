import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

import { HomeService } from '../service/home.service';

@Component({
  selector: 'snla-no-of-registration',
  templateUrl: './no-of-registration.component.html',
  styleUrls: ['./no-of-registration.component.scss']
})
export class NoOfRegistrationComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  view: any = [400, 170];
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'No.of Registration';
  timeline: boolean = false;
  registredUserReport: any[] = [];
  isLoading: boolean = false;



  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#F3C237']
  };

  ngOnInit(): void {
    this.isLoading = true;
    this.homeService.registeredUserReport().subscribe(
      (data) => {
        this.registredUserReport = data
        this.isLoading = false;
      }
    )
  }

}
