export interface CoincapAsset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export type CoincapAssets = Array<CoincapAsset>;

export interface CoincapExchange {
  id: string;
  name: string;
  rank: string;
  percentTotalVolume: string | null;
  volumeUsd: string | null;
  tradingPairs: string;
  socket: boolean | null;
  exchangeUrl: string;
  updated: number;
}

export type CoincapExchanges = Array<CoincapExchange>;

export interface CoincapResult<T> {
  data: T;
  timestamp: string;
}

export interface CoincapAssetsParams {
  search?: string;
  ids?: Array<string>;
  limit?: number;
  offset?: number;
}

export type CoincapAssetsResult = CoincapResult<CoincapAssets>;
export type CoincapAssetResult = CoincapResult<CoincapAsset>;
export type CoincapExchangesResult = CoincapResult<CoincapExchanges>;
