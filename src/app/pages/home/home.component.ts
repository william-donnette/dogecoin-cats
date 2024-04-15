import { Component } from '@angular/core';
import { CallToActionBestExchangeComponent } from '../../components/call-to-action-best-exchange/call-to-action-best-exchange.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-much-price',
  standalone: true,
  imports: [HeroComponent, CallToActionBestExchangeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
