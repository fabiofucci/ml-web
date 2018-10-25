import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export interface Artist {
  uri: string;
  name: string;
  image: string;
  followers: string;
}

@Injectable({providedIn: 'root'})
export class ArtistsService {
  private constructor(private http: HttpClient) {
  }

  search(artist: string): Observable<Artist[]> {
    const body: HttpParams = new HttpParams().set('artist', artist);

    return this.http.post<Artist[]>(
      environment.ML_ARTIST_DISCOVERY_SEARCH_URL,
      body.toString(),
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
  }

  get(uri: string): Observable<Artist> {
    return this.http.get<Artist>(environment.ML_ARTIST_DISCOVERY_ARTIST_URL + '/' + uri);
  }
}
