import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

import { HomeService } from '../service/home.service';

@Component({
  selector: 'snla-no-of-active-user',
  templateUrl: './no-of-active-user.component.html',
  styleUrls: ['./no-of-active-user.component.scss']
})
export class NoOfActiveUserComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  view: any = [500, 200];
  isDoughnut: boolean = true;
  activeUserData: any[] = [];
  isLoading: boolean = false;
  showLegend: boolean = true;
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#ED7C30', '#FFC000', '#70AD46', '#9E480D']
    
  };


  ngOnInit(): void {
    this.isLoading = true;
    // this.activeUserData = [
    //   {
    //     "name": "1 day",
    //     "value": "10",
    //   },
    //   {
    //     "name": "7 day",
    //     "value": "20",
    //   },
    //   {
    //     "name": "14 day",
    //     "value": "30",

    //   },
    //   {
    //     "name": "28 day",
    //     "value": "40",

    //   }
    // ];
    this.homeService.activeUserReport().subscribe(
      (data: any) => {
        this.isLoading = false;
        this.activeUserData = data
      }
    )
  }

}
