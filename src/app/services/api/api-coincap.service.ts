import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CoincapAssetResult,
  CoincapAssetsParams,
  CoincapAssetsResult,
  CoincapExchangesResult,
} from '../../interfaces/coincap.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiCoincapService {
  private apiUrl = 'https://api.coincap.io/v2';

  constructor(private http: HttpClient) {}

  getAssets({
    ids = [],
    search,
    limit,
    offset,
  }: CoincapAssetsParams = {}): Observable<CoincapAssetsResult> {
    let url = new URL(`${this.apiUrl}/assets`);
    if (ids.length > 0) {
      url.searchParams.append('ids', ids.join(','));
    }
    if (search) {
      url.searchParams.append('search', search);
    }
    if (limit) {
      url.searchParams.append('limit', limit.toString());
    }
    if (offset) {
      url.searchParams.append('offset', offset.toString());
    }
    return this.http.get<CoincapAssetsResult>(url.href);
  }

  getExchanges(): Observable<CoincapExchangesResult> {
    return this.http.get<CoincapExchangesResult>(`${this.apiUrl}/exchanges`);
  }

  getAsset(id: string): Observable<CoincapAssetResult> {
    return this.http.get<CoincapAssetResult>(`${this.apiUrl}/assets/${id}`);
  }
}
