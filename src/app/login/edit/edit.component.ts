import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router ,ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
res:any;
id!: number;
myform !: FormGroup;
get f(){
  return this.myform.controls;
}

  constructor( private loginservice:LoginService , private router:Router , private activerouter:ActivatedRoute) { }

  ngOnInit(): void {

  
    this.id = this.activerouter.snapshot.params['id'];
    this.loginservice.editusers(this.id).subscribe((data:any)=>
    {
      console.log(data);
    this.res=data;
      // alert('useredit')
    })

    this.myform = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }


userupdate(){
  console.log(this.myform.value);
 this.loginservice.updateuser(this.id, this.myform.value ).subscribe((res:any)=>{
  console.log(res);
  alert("user Updated")
  
 })
}

}


