import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Artist, ArtistsService} from '../../artists/service/artistsservice';
import {finalize} from 'rxjs/operators';
import {NotificationService} from '../../notification/service/notificationservice';

@Component({
  selector: 'app-component-glorywall',
  templateUrl: './glorywall.component.html'
})
export class GlorywallComponent implements OnInit {

  artistData: any;

  loading = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ArtistsService,
              private _notificationService: NotificationService) {

  }

  ngOnInit(): void {
    this.loading = true;

    const uri = this.route.snapshot.paramMap.get('uri');

    console.log('URI: ' + uri);
    this.service.get(uri)
      .pipe(
        finalize(
          () => {
            this.loading = false;
          }
        )
      )
      .subscribe(
      (data: Artist) => this.artistData = data,
      error => this._notificationService.error('Errore nel recupero delle informazioni [' + error.message + ']')
    );
  }
}
