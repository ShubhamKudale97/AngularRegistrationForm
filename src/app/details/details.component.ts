import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpData } from '../employee.data/employee.data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details : any;
  empData: EmpData = new EmpData();
  employee_list= this.empData.employee_list;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id : number;
    this.route.params.subscribe(params =>{
      id = parseInt(params['id']);
    });
    this.details = this.empData.getDetailsById(id);
  }

}
