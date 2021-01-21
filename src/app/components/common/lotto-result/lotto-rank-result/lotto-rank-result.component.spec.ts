import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoRankResultComponent } from './lotto-rank-result.component';

describe('LottoRankResultComponent', () => {
  let component: LottoRankResultComponent;
  let fixture: ComponentFixture<LottoRankResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoRankResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoRankResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
