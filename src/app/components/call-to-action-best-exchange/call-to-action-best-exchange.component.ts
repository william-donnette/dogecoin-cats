import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import CoincapAdaptater from '../../adaptaters/coincap.adaptaters';
import { CoincapExchangesResult } from '../../interfaces/coincap.interfaces';
import Exchange from '../../resources/exchange';
import { ApiCoincapService } from '../../services/api/api-coincap.service';

@Component({
  selector: 'app-call-to-action-best-exchange',
  standalone: true,
  imports: [PanelModule, NgIf],
  templateUrl: './call-to-action-best-exchange.component.html',
  styleUrl: './call-to-action-best-exchange.component.css',
})
export class CallToActionBestExchangeComponent {
  exchange: Exchange | undefined;

  constructor(private apiService: ApiCoincapService) {}

  ngOnInit(): void {
    this.setExchange();
  }

  exchangeSort(first: Exchange, second: Exchange) {
    return second.volumeOfTheLast24Hours - first.volumeOfTheLast24Hours;
  }

  setExchange() {
    return this.apiService
      .getExchanges()
      .subscribe(({ data }: CoincapExchangesResult) => {
        const sortedExchanges = data
          .map(CoincapAdaptater.toExchange)
          .sort(this.exchangeSort);
        this.exchange = sortedExchanges[0];
      });
  }
}
