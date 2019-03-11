import { Component, OnInit } from '@angular/core';
import{ DataSource, floorActivityItems } from '../../source/data/dataSource';

@Component({
  selector: 'LIS-bill-information-page',
  templateUrl: './bill-information-page.component.html',
  styleUrls: ['./bill-information-page.component.scss']
})
export class BillInformationPageComponent implements OnInit {
  dataSource: DataSource  = new DataSource(); // source data
  floorAct: floorActivityItems[] = this.dataSource.floorActivity;
  senatorsArr: any = [];

  constructor() { }

  ngOnInit() {
  }

  newLine(value: string){
    return value.replace(/  /g, "\n");
  }
}
