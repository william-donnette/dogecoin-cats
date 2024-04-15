import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-buy-ticket-paris-summary',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './buy-ticket-paris-summary.component.html',
  styleUrl: './buy-ticket-paris-summary.component.css',
})
export class BuyTicketParisSummaryComponent {
  isOpen: boolean = false;
  quantity: number = 1;
  @Input({ required: true }) totalInUSD?: string;
  @Input({ required: true }) totalInDoge?: string;
  @Output() onClose = new EventEmitter();

  @Input({ required: true })
  set open(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  @Input({ required: true })
  set nbrTickets(quantity: number) {
    this.quantity = quantity;
  }

  close() {
    this.isOpen = false;
    this.onClose.emit();
  }
}
