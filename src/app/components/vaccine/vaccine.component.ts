import { Component, OnInit } from '@angular/core';
import { Avaialibility } from 'src/app/model/availabilty';
import { CowinService } from 'src/app/service/cowin.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

  rows: Avaialibility[]=[];

  constructor(private cowinService: CowinService){

    var today=new Date().toLocaleDateString().replace('/','-');
    cowinService.getCalenderByPin("431715",today).subscribe((data: any)=>{
      console.log(data);
      if(data != {}){
      data.centers.forEach((elem: any) => {
        elem.sessions.forEach((element:any)=>{
          this.rows.push(new Avaialibility(elem['name'],element['vaccine'],element['date'],element['available_capacity'],elem['block_name']));  
        }); 
      });
    }
    })
    
  }
  ngOnInit(): void {
  }

}
