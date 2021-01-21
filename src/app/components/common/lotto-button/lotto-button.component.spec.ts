import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoButtonComponent } from './lotto-button.component';

describe('LottoButtonComponent', () => {
  let component: LottoButtonComponent;
  let fixture: ComponentFixture<LottoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
