import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoResultHeaderComponent } from './lotto-result-header.component';

describe('LottoResultHeaderComponent', () => {
  let component: LottoResultHeaderComponent;
  let fixture: ComponentFixture<LottoResultHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoResultHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoResultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
