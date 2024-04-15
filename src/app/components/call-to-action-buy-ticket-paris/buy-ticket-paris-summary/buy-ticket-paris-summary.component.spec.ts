import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketParisSummaryComponent } from './buy-ticket-paris-summary.component';

describe('BuyTicketParisSummaryComponent', () => {
  let component: BuyTicketParisSummaryComponent;
  let fixture: ComponentFixture<BuyTicketParisSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyTicketParisSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyTicketParisSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
