import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  myform !: FormGroup;
  get f(){
    return this.myform.controls;
  }
  constructor(private loginservice:LoginService , private router:Router , private routeract:ActivatedRoute) { }

  ngOnInit(): void {


    this.myform = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }
addusers()
{
  
  this.loginservice.userspost(this.myform.value).subscribe((res:any)=>
  {
    console.log(res);
    alert("added successfully")
  })
}


}
