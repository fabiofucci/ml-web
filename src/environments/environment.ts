// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ML_ARTIST_DISCOVERY_SEARCH_URL: 'http://127.0.0.1:5000/api/search_artists',
  ML_ARTIST_DISCOVERY_ARTIST_URL: 'http://127.0.0.1:5000/api/artist',
  ML_ARTIST_FBPAGE_SEARCH_URL: 'http://127.0.0.1:8080/api/fb_search_page',
  ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL: 'http://127.0.0.1:8080/api/google_search_page',
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
