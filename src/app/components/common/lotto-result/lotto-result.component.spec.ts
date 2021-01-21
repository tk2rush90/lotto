import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoResultComponent } from './lotto-result.component';

describe('LottoResultComponent', () => {
  let component: LottoResultComponent;
  let fixture: ComponentFixture<LottoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
