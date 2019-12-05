import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDebitCardComponent } from './credit-debit-card.component';

describe('CreditDebitCardComponent', () => {
  let component: CreditDebitCardComponent;
  let fixture: ComponentFixture<CreditDebitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditDebitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
