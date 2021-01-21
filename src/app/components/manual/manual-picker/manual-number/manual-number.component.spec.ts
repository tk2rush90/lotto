import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualNumberComponent } from './manual-number.component';

describe('ManualNumberComponent', () => {
  let component: ManualNumberComponent;
  let fixture: ComponentFixture<ManualNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
