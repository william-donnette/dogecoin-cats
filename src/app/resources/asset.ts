import { MAIN_CRYPTO } from '../config/crypto';
import { Picture } from '../interfaces/resources.interfaces';

export interface IAsset {
  id: string;
  symbol: string;
  name: string;
  locale: string;
  currency: string;
  price: number;
  volumeOfTheLast24Hours: number;
  changePercentOfTheLast24Hours: number;
  isFavorite: boolean;
  display: string;
  priceDisplay: string;
  volumeOfTheLast24HoursDisplay: string;
  changePercentOfTheLast24HoursDisplay: string;
  picture: Picture;
  isIncreasing: boolean;
  isDecreasing: boolean;
}

export default class Asset implements IAsset {
  constructor(
    public id: string,
    public symbol: string,
    public name: string,
    public locale: string,
    public currency: string,
    public price: number,
    public volumeOfTheLast24Hours: number,
    public changePercentOfTheLast24Hours: number
  ) {}

  get isFavorite() {
    return this.id === MAIN_CRYPTO;
  }

  get display() {
    return `${this.name} (${this.symbol})`;
  }

  get priceDisplay() {
    return this.price.toLocaleString(this.locale, {
      style: 'currency',
      currency: this.currency,
    });
  }

  get volumeOfTheLast24HoursDisplay() {
    return this.volumeOfTheLast24Hours.toLocaleString(this.locale, {
      style: 'currency',
      currency: this.currency,
    });
  }

  get changePercentOfTheLast24HoursDisplay() {
    return `${
      this.changePercentOfTheLast24Hours < 0 ? '' : '+'
    }${this.changePercentOfTheLast24Hours.toLocaleString(this.locale)}%`;
  }

  get picture() {
    return {
      alt: `Logo of ${this.name}`,
      src: `https://cryptologos.cc/logos/thumbs/${this.id}.png?v=031`,
    };
  }

  get isIncreasing() {
    return this.changePercentOfTheLast24Hours >= 0;
  }

  get isDecreasing() {
    return this.changePercentOfTheLast24Hours < 0;
  }
}
