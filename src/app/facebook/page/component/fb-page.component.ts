import {Component, Input, OnInit} from '@angular/core';
import {FBPage, FBPageSearchResponse, FbPageservice, GoogleSearchResponse} from '../../service/fb-pageservice.service';
import {finalize} from 'rxjs/operators';
import {NotificationService} from '../../../notification/service/notificationservice';

@Component({
  selector: 'app-component-fbpage',
  templateUrl: './fb-page.component.html'
})
export class FbPageComponent implements OnInit {

  loading = false;
  errorMessage = '';
  errorMessageDetail = '';
  message = '';

  @Input() artistName: string = null;

  pageData: FBPage = null;
  googleSearchResponse: GoogleSearchResponse = null;

  constructor(
    private _service: FbPageservice,
    private _notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.loading = true;

    this._service.search(this.artistName)
      .pipe(
        finalize(
          () => {
            this.loading = false;
          }
        )
      )
      .subscribe(
        (fbPageSearchResponse: FBPageSearchResponse) => {
          if (fbPageSearchResponse.error) {
            this.errorMessage = 'La ricerca Facebook ha restituito un errore.';
            this.errorMessageDetail = fbPageSearchResponse.error.message;
            // La ricerca su FB ha prodotto un errore. Si tenta la ricerca Google

            console.error('LA RICERCA FB HA RESTITUITO UN ERRORE. TENTO LA RICERCA GOOGLE.');
            this.googleSearch();

          } else if (fbPageSearchResponse.data) {
            this.pageData = fbPageSearchResponse.data[0];
            console.log(this.pageData);
          }
        },
        (error) => {
          this.errorMessage = 'Errore nella ricerca [' + error.message + ']';

          console.error('LA RICERCA FB HA RESTITUITO UN ERRORE. TENTO LA RICERCA GOOGLE.');
          this.googleSearch();
        }
      );
  }

  googleSearch(): void {
    /// RICERCA GOOGLE ///
    this.loading = true;
    console.log(this.loading);
    this._service.googleSearch(this.artistName)
      .pipe(
        finalize(
          () => {
            this.loading = false;
          }
        )
      )
      .subscribe(
        (googleSearchResponse: GoogleSearchResponse) => {
          this.message = 'Ho pensato che potrebbe essere utile mostrarti alcuni risultati della ricerca Google:';

          this.googleSearchResponse = googleSearchResponse;
          console.log('RISULTATO DELLA RICERCA GOOGLE:');
          console.log(googleSearchResponse);
        }
      );
    /// FINE RICERCA GOOGLE ///
  }
}
