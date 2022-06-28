import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
const headersData={
  headers:new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  update(id: number, value: any) {
    throw new Error('Method not implemented.');
  }

  constructor( private http:HttpClient) { }

  baseurl:string=" http://localhost:3000/users/";

  getUserbyId(){
    return this.http.get(this.baseurl)
  }
    deleteid(id:any)
    {
      return this.http.delete(this.baseurl + id)
    }
    editusers(id:any)
    {
   return this.http.get(this.baseurl + id)
}
updateuser(id:any , body:any){
  return this.http.put(this.baseurl +id, body)
}

userspost(data:any)
{
  return this.http.post(this.baseurl, data)
}

}