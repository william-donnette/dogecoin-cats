export interface IExchange {
  id: string;
  name: string;
  locale: string;
  currency: string;
  volumeOfTheLast24Hours: number;
  url: string;
  volumeOfTheLast24HoursDisplay: string;
}

export default class Exchange implements IExchange {
  constructor(
    public id: string,
    public name: string,
    public locale: string,
    public currency: string,
    public volumeOfTheLast24Hours: number,
    public url: string
  ) {}

  get volumeOfTheLast24HoursDisplay() {
    return this.volumeOfTheLast24Hours.toLocaleString(this.locale, {
      style: 'currency',
      currency: this.currency,
    });
  }
}
