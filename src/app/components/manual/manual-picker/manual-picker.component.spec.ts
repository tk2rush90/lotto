import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPickerComponent } from './manual-picker.component';

describe('ManualPickerComponent', () => {
  let component: ManualPickerComponent;
  let fixture: ComponentFixture<ManualPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
