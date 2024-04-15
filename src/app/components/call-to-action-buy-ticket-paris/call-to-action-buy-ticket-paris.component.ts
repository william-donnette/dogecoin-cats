import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import CoincapAdaptater from '../../adaptaters/coincap.adaptaters';
import { MAIN_CRYPTO } from '../../config/crypto';
import { ApiCoincapService } from '../../services/api/api-coincap.service';
import { BuyTicketParisSummaryComponent } from './buy-ticket-paris-summary/buy-ticket-paris-summary.component';

@Component({
  selector: 'app-call-to-action-buy-ticket-paris',
  standalone: true,
  imports: [
    CardModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    BuyTicketParisSummaryComponent,
  ],
  templateUrl: './call-to-action-buy-ticket-paris.component.html',
  styleUrl: './call-to-action-buy-ticket-paris.component.css',
})
export class CallToActionBuyTicketParisComponent implements OnInit {
  static price: number = 4;
  quantity: number = 1;
  totalInUSD: string = (
    this.quantity * CallToActionBuyTicketParisComponent.price
  ).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  totalInDoge: string | undefined;
  paiementSuccess: boolean = false;

  constructor(private apiService: ApiCoincapService) {}

  ngOnInit(): void {
    this.setTotal();
  }

  hasDiscountOffer() {
    return this.quantity >= 2;
  }

  setTotal() {
    this.apiService.getAsset(MAIN_CRYPTO).subscribe(({ data }) => {
      const asset = CoincapAdaptater.toAsset(data);
      let total = this.quantity * CallToActionBuyTicketParisComponent.price;
      if (this.hasDiscountOffer()) {
        total *= 0.95;
      }
      this.totalInUSD = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      this.totalInDoge = `${(total / asset.price).toLocaleString('en-US')} ${
        asset.symbol
      }`;
    });
  }

  buy() {
    this.paiementSuccess = true;
  }

  reset() {
    this.paiementSuccess = false;
    this.quantity = 1;
    this.setTotal();
  }
}
