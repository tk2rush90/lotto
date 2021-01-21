import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoMatchResultComponent } from './lotto-match-result.component';

describe('LottoMatchResultComponent', () => {
  let component: LottoMatchResultComponent;
  let fixture: ComponentFixture<LottoMatchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoMatchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoMatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
