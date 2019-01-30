#!/usr/bin/env bash
# Prepara il file delle variabili di ambiente e fa partire Apache

echo "VARIABILI DI AMBIENTE:"
echo "\$ML_ARTIST_DISCOVERY_SEARCH_URL:" $ML_ARTIST_DISCOVERY_SEARCH_URL
echo "\$ML_ARTIST_DISCOVERY_ARTIST_URL:" $ML_ARTIST_DISCOVERY_ARTIST_URL
echo "\$ML_ARTIST_FBPAGE_SEARCH_URL:" $ML_ARTIST_FBPAGE_SEARCH_URL
echo "\$ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL:" $ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL

echo "PREPARAZIONE DEL FILE .js DELLE VARIABILI DI AMBIENTE:"
sed -i s^@#ML_ARTIST_DISCOVERY_SEARCH_URL#@^$ML_ARTIST_DISCOVERY_SEARCH_URL^g /usr/local/apache2/htdocs/assets/js/env.js
sed -i s^@#ML_ARTIST_DISCOVERY_ARTIST_URL#@^$ML_ARTIST_DISCOVERY_ARTIST_URL^g /usr/local/apache2/htdocs/assets/js/env.js
sed -i s^@#ML_ARTIST_FBPAGE_SEARCH_URL#@^$ML_ARTIST_FBPAGE_SEARCH_URL^g /usr/local/apache2/htdocs/assets/js/env.js
sed -i s^@#ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL#@^$ML_ARTIST_FBPAGE_GOOGLE_SEARCH_URL^g /usr/local/apache2/htdocs/assets/js/env.js

echo "FILE DELLE VARIABILI DI AMBIENTE:"
cat /usr/local/apache2/htdocs/assets/js/env.js

httpd-foreground
