import { Component } from '@angular/core';
import { EventEmitter, Output } from "@angular/core";

@Component({
    selector:'filter-root',
    templateUrl:'./filter.html'
})

export class filter{
    
    selectedRadioBtn: string = 'all';

    @Output()
    radioBtnChangeEvent: EventEmitter<any> = new EventEmitter();

    onFilterChange(){
      this.radioBtnChangeEvent.emit(this.selectedRadioBtn);
    }
}