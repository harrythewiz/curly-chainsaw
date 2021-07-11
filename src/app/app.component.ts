import { Component } from '@angular/core';
import { Avaialibility } from './model/availabilty';
import { CowinService } from './service/cowin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curly-chainsaw';

  rows: Avaialibility[]=[];

  constructor(private cowinService: CowinService){
    cowinService.getCalenderByPin("431715","10-07-2021").subscribe((data: any)=>{
      console.log(data);
      data.centers.forEach((elem: any) => {
        elem.sessions.forEach((element:any)=>{
          this.rows.push(new Avaialibility(elem['name'],element['vaccine'],element['date'],element['available_capacity'],elem['block_name']));  
        }); 
      });
    })
  }

}
