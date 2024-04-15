import {
  CoincapAsset,
  CoincapExchange,
} from '../interfaces/coincap.interfaces';
import Asset from '../resources/asset';
import Exchange from '../resources/exchange';

export default abstract class CoincapAdaptater {
  public static toAsset({
    id,
    symbol,
    name,
    volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
  }: CoincapAsset): Asset {
    return new Asset(
      id,
      symbol,
      name,
      'en-US',
      'USD',
      Number(priceUsd),
      Number(volumeUsd24Hr),
      Number(changePercent24Hr)
    );
  }

  public static toExchange({
    id,
    name,
    rank,
    percentTotalVolume,
    volumeUsd,
    tradingPairs,
    socket,
    exchangeUrl,
    updated,
  }: CoincapExchange) {
    return new Exchange(
      id,
      name,
      'en-US',
      'USD',
      Number(volumeUsd),
      exchangeUrl
    );
  }
}
