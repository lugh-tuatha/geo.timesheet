import { ApptivoServiceService } from '../../services/apptivo-service/apptivo-service.service';
import { Component, ViewChild } from '@angular/core';
import { MatTable} from '@angular/material/table';

export interface PeriodicElement {
  workOrderNumber: string;
  customer: string;
  projectDescription: string;
  hours: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    workOrderNumber: 'GEO',
    customer: 'Geo Internal',
    projectDescription: 'Geoplan Internal (overhead)',
    hours: 80,
  },
];

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss'],
})
export class ProjectsTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  apptivodata: any[] = [];
  constructor(private _apptivoservice: ApptivoServiceService) {}

  ngOnInit() {
    this._apptivoservice.getData().subscribe((res: any) => {
      const apptivodata = res.response;
      console.log('Received data:', apptivodata);

      // Map apptivodata to PeriodicElement interface and concatenate with ELEMENT_DATA
      this.dataSource = [...ELEMENT_DATA, ...apptivodata];
      this.table.renderRows();
    });
  }
}