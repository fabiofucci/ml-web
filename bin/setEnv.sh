#!/bin/bash
# Prepara il file delle variabili di ambiente

echo "VARIABILI DI AMBIENTE:"
echo "\$ML_ARTIST_DISCOVERY_SEARCH_URL:" $ML_ARTIST_DISCOVERY_SEARCH_URL
echo "\$ML_ARTIST_DISCOVERY_ARTIST_URL:" $ML_ARTIST_DISCOVERY_ARTIST_URL
echo "\$ML_ARTIST_FBPAGE_SEARCH_URL:" $ML_ARTIST_FBPAGE_SEARCH_URL
echo "\$ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL:" $ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL

sed -i s^@#ML_ARTIST_DISCOVERY_SEARCH_URL#@^$ML_ARTIST_DISCOVERY_SEARCH_URL^ /url/local/app/ml-web/src/environments/environment.prod.ts
sed -i s^@#ML_ARTIST_DISCOVERY_ARTIST_URL#@^$ML_ARTIST_DISCOVERY_ARTIST_URL^ /url/local/app/ml-web/src/environments/environment.prod.ts
sed -i s^@#ML_ARTIST_FBPAGE_SEARCH_URL#@^$ML_ARTIST_FBPAGE_SEARCH_URL^ /url/local/app/ml-web/src/environments/environment.prod.ts
sed -i s^@#ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL#@^$ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL^ /url/local/app/ml-web/src/environments/environment.prod.ts

echo "FILE DELLE VARIABILI DI AMBIENTE:"
cat /url/local/app/ml-web/src/environments/environment.prod.ts
