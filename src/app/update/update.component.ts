import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  checkboxForm : any;
  constructor() { }

  ngOnInit(): void {
    this.checkboxForm = new FormGroup({
       'language': new FormControl(null,[Validators.required])
    })
  }

  

  submitForm(){
    console.log(this.checkboxForm);
  }
}
