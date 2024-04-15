import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionBestExchangeComponent } from './call-to-action-best-exchange.component';

describe('CallToActionBestExchangeComponent', () => {
  let component: CallToActionBestExchangeComponent;
  let fixture: ComponentFixture<CallToActionBestExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionBestExchangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallToActionBestExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
