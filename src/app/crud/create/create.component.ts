import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public result:any;
  addDetails={
    name:'',
    designation:'',
    salary:''
  }

  constructor(private service:CrudService) { }

  submit(addDetails){
    // console.log(addDetails)
    this.service.createUser(addDetails).subscribe((posRes)=>{
  
    })
  }
  
  ngOnInit(): void {
    this.submit(this.addDetails)
  }

}
