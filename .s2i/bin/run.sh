#!/bin/bash
echo "Avvio dell'applicazione"
exec ng serve --prod=true --host=$NG_APP_HOST --port=$NG_APP_PORT
