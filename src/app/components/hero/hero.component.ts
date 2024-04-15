import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import CoincapAdaptater from '../../adaptaters/coincap.adaptaters';
import { AVAILABLE_CRYPTOS } from '../../config/crypto';
import { CoincapAssetsResult } from '../../interfaces/coincap.interfaces';
import { Assets } from '../../interfaces/resources.interfaces';
import Asset from '../../resources/asset';
import { ApiCoincapService } from '../../services/api/api-coincap.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, CardModule, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  assets: Assets = [];

  constructor(private apiService: ApiCoincapService) {}

  ngOnInit(): void {
    this.setAssets();
  }

  assetSort(first: Asset, second: Asset) {
    if (first.isFavorite) {
      return -1;
    }
    if (second.isFavorite) {
      return 1;
    }
    return 0;
  }

  setAssets() {
    return this.apiService
      .getAssets({ ids: AVAILABLE_CRYPTOS })
      .subscribe(({ data }: CoincapAssetsResult) => {
        this.assets = data.map(CoincapAdaptater.toAsset).sort(this.assetSort);
      });
  }
}
