import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPickerComponent } from './auto-picker.component';

describe('AutoPickerComponent', () => {
  let component: AutoPickerComponent;
  let fixture: ComponentFixture<AutoPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
