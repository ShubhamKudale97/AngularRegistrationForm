import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form : FormGroup;

  constructor
  ( private router : Router,
    private fb : FormBuilder,
  ) { }

  
  ngOnInit(): void {
    this.login_form = this.fb.group({
      username:['',Validators.required], 
      password:['',Validators.required]
    });
  }

  get username() { 
    return this.login_form.get('username');  // what is purpose is that for input data from teamplt, in absence it giv error in html
  }

  get password() { 
    return this.login_form.get('password');
  }

  

  login(){
    this.router.navigate(['/dashboard']);
  }
}
