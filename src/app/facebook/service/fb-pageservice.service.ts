import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';



export interface FBPage {
  id: string;
  name: string;
  verification_status: string;
  link: string;
}

export interface FBError {
  message: string;
  type: string;
  code: number;
}

export interface FBPageSearchResponse {
  data: FBPage[];
  error: FBError;
}

export interface GoogleResult {
  id: string;
  title: string;
  link: string;
  snippet: string;
  displayLink: string;
  pagemap: {
    cse_thumbnail: any,
    metatags: any,
    cse_image: any
  };
}

export interface GoogleSearchResponse {
  items: GoogleResult[];
}

@Injectable({providedIn: 'root'})
export class FbPageservice {
  private constructor(private http: HttpClient) {
  }

  search(artist: string): Observable<FBPageSearchResponse> {
    const body: HttpParams = new HttpParams().set('artistName', artist);

    return this.http.post<FBPageSearchResponse>(
      environment.ML_ARTIST_FBPAGE_SEARCH_URL,
      body.toString(),
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
  }

  googleSearch(artist: string) {
    const body: HttpParams = new HttpParams().set('artistName', artist);

    return this.http.post<GoogleSearchResponse>(
      environment.ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL,
      body.toString(),
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
  }
}
