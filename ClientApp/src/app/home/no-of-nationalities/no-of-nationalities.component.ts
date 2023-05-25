import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

import { HomeService } from '../service/home.service';

@Component({
  selector: 'snla-no-of-nationalities',
  templateUrl: './no-of-nationalities.component.html',
  styleUrls: ['./no-of-nationalities.component.scss']
})
export class NoOfNationalitiesComponent implements OnInit {

  showXAxis: boolean = true;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Users';
  nationalityReportData: any[] = [];
  isLoading: boolean = false;
  view: any = [1030, 200];


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#71AD4C']
  };

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.homeService.nationalityReport().subscribe(
      (nationalityData: any) => {
        for (let i = 0; i < nationalityData.length; i++) {
          if (nationalityData[i].series[0].value > 0) {
            this.nationalityReportData.push(nationalityData[i])
          }
        }
        this.nationalityReportData = [...this.nationalityReportData]
        this.isLoading = false
      }
    )
  }

  xAxisFormat(val: any): any {
    if (val % 1 > 0) return "";
    return val;
  }

}
