import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentnotfoundComponent } from './componentnotfound.component';

describe('ComponentnotfoundComponent', () => {
  let component: ComponentnotfoundComponent;
  let fixture: ComponentFixture<ComponentnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentnotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
