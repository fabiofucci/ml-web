// import {env} from '../assets/js/env';
declare var ENV_ML_ARTIST_DISCOVERY_SEARCH_URL: string;
declare var ENV_ML_ARTIST_DISCOVERY_ARTIST_URL: string;
declare var ENV_ML_ARTIST_FBPAGE_SEARCH_URL: string;
declare var ENV_ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL: string;

export const environment = {
  production: true,
  ML_ARTIST_DISCOVERY_SEARCH_URL: ENV_ML_ARTIST_DISCOVERY_SEARCH_URL,
  ML_ARTIST_DISCOVERY_ARTIST_URL: ENV_ML_ARTIST_DISCOVERY_ARTIST_URL,
  ML_ARTIST_FBPAGE_SEARCH_URL: ENV_ML_ARTIST_FBPAGE_SEARCH_URL,
  ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL: ENV_ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL
};
