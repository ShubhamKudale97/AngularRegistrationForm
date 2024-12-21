import { Component, OnInit } from '@angular/core';
import { DataInterface } from '../interface/data.model';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  submitData(form:any){
    let dataInterface : DataInterface = form;
    console.log(dataInterface);
    console.log(dataInterface.first_name);
  }

  pattern1 = "^[1-9]{1}[0-9]{9}$";
  pattern = "[A-Za-z]+";
}
