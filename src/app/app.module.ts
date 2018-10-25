import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ArtistsComponent} from './artists/component/artists.component';

import localeIt from '@angular/common/locales/it';
import {registerLocaleData} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GlorywallComponent} from './glorywall/component/glorywall.component';
import {SearchComponent} from './search/component/search.component';
import {NotificationComponent} from './notification/component/notification.component';
import {FbPageComponent} from './facebook/page/component/fb-page.component';

registerLocaleData(localeIt);

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: SearchComponent },
  { path: 'glorywall/:uri', component: GlorywallComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistsComponent,
    GlorywallComponent,
    NotificationComponent,
    FbPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'it-IT'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
