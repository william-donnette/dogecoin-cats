import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionBuyTicketParisComponent } from './call-to-action-buy-ticket-paris.component';

describe('CallToActionBuyTicketParisComponent', () => {
  let component: CallToActionBuyTicketParisComponent;
  let fixture: ComponentFixture<CallToActionBuyTicketParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionBuyTicketParisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallToActionBuyTicketParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
