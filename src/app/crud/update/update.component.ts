import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateData:{
    update_id:number;
    update_name:"string";
    update_designation:"string";
    update_salary:number
  }

  bodyText:any;

  constructor(private service:CrudService) { }

  updateDetails(id:string,data:any){
    console.log(this.updateData)

  }

  ngOnInit(): void {
  }

}
