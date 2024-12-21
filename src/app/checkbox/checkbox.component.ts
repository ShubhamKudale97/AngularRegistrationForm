import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;
  Data: Array<any> = [
    { name: 'Marathi', value: 'marathi' },
    { name: 'English', value: 'english' },
    { name: 'Hindi', value: 'hindi' },
    { name: 'Sanskrit', value: 'Sanskrit' },
    { name: 'Tamil', value: 'tamil' }
  ];
 
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
  }

  ngOnInit(): void {
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
  }
  
}
