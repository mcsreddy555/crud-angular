import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public result:any;

  addDetails={
    id:'',
    name:'',
    designation:'',
    salary:''
  }

  updateData:{
    update_id:number;
    update_name:"string";
    update_designation:"string";
    update_salary:number
  }

  bodyText:any;
  constructor(private serivce:CrudService) { }

  getData(){
    this.serivce.getDetails().subscribe((posRes)=>{
      this.result=posRes;
    },(errRes:HttpErrorResponse)=>{
      if (errRes.error instanceof Error){
        console.log("client side error")
      } else {
        console.log("server side error")
      }
    })
  }

  submit(addDetails){
    // console.log(addDetails)
    this.serivce.createUser(addDetails).subscribe((posRes)=>{
      this.getData()
    })
  }

  updateUser(user){
    console.log(this.updateData)
    this.serivce.updateUser(user ,this.updateData).subscribe((posRes)=>{
      this.getData()
    })

  }

  removeUser(data):any{
    // console.log(data);
    this.serivce.deleterUser(data).subscribe((posRes)=>{
      this.getData()
    })
  }

  ngOnInit(): void {
    this.getData();
    // this.removeUser()
    // this.updateUser(this.updateUser)
  }

}
