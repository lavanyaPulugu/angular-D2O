import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-join-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.scss']
})
export class JoinNowComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.signup = this.fb.group({})
  }
 
submit=new FormGroup({

})


 login= new FormGroup({
  username: new FormControl(null, Validators.required),
  password: new FormControl
 })

 show(){
  console.log(this.login);
 }

 signup=new FormGroup({
  name: new FormControl,
  email: new FormControl,
  password2:new FormControl,
  cnfpassword: new FormControl

 })



 submit2(){
console.log(this.signup.value);
  
 }
}
