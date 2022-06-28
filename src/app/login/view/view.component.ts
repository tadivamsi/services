import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
 
res:any;
  constructor( private loginservice:LoginService) { }

  ngOnInit(): void {
    this.getusers()
  }
getusers(){
  this.loginservice.getUserbyId().subscribe((data:any)=>{
    console.log(data);
  this.res=data;
  })
}
deleteusers(id:any)
{
  this.loginservice.deleteid(id).subscribe((data:any)=>
  {
    console.log(data);
    alert('userdeleted')
  })
}

}
