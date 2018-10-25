import {Component} from '@angular/core';
import {Artist, ArtistsService} from '../../artists/service/artistsservice';
import {NotificationService} from '../../notification/service/notificationservice';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-component-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  title = 'Music Lovers, l\'app per gli amanti della musica';

  searchStr = '';

  artists: Artist[];

  loading = false;

  constructor(private artistsService: ArtistsService, private _notificationService: NotificationService) {
  }

  search(): void {
    this.loading = true;

    console.log('Cerco: ' + this.searchStr);
    this.artistsService.search(this.searchStr)
      .pipe(
        finalize(
          () => {
            this.loading = false;
          }
        )
      )
      .subscribe(
      (data: Artist[]) => this.artists = data,
      error => this._notificationService.error('Errore nella ricerca [' + error.message + ']')
    );
  }
}
