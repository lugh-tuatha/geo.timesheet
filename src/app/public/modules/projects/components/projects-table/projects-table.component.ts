import { Component } from '@angular/core';
import { ApptivoServiceService } from '../../services/apptivo-service/apptivo-service.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent {
  apptivodata:any[] = [];
  constructor(private _apptivoservice:ApptivoServiceService){}

  ngOnInit(){
    this._apptivoservice.getData().subscribe((res: any) => {
      this.apptivodata = res.response;
      console.log('Received data:', this.apptivodata);
    })
  } 
}
