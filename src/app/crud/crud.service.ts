import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl="http://localhost:3000/products"

  constructor(private http:HttpClient) { }

  public getDetails():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  createUser(user){
    return this.http.post(this.apiUrl,user)
  }

  deleterUser(id:Number):Observable<any>{
    return this.http.delete(this.apiUrl+'/'+id)
  }

  updateUser(id:Number, user:any):Observable<any>{
    return this.http.put(this.apiUrl+'/'+id,user)
  }

  
}
