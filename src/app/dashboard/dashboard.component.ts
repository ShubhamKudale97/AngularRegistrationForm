import { Component, OnInit } from '@angular/core';
import { EmpData } from '../employee.data/employee.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  
  constructor() { }
  ngOnInit(): void {
    let data = {id : 1};
    localStorage.setItem('session',JSON.stringify(data));
  }
  setId:any;
  empData: EmpData = new EmpData();
  employee_list= this.empData.employee_list;
  

  show :boolean;
  hide = true;

  selectedRadioBtnValue:string = 'all';
  
  onRadioBtnChange(event:any){
    this.selectedRadioBtnValue = event;
    this.show = false;
  }
 
    showHide(id : any){
     /* if (this.show == true) {
        this.show = false;
        // this.show = true;      
        this.setId = id;
      } else if(this.show == false) {
        this.show = true;
        this.setId = id;
      }else{
        this.show=false
      }    
      //return this.show;*/
      
      this.show = !this.show;
      this.setId = id;
    }
}
