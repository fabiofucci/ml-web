#########################
### build environment ###
#########################

# NODE base image
FROM node as builder

# install chrome for protractor tests
## SKIPPED

# set working directory
RUN mkdir -p /url/local/app/ml-web
WORKDIR /url/local/app/ml-web

# node_modules/.bin to $PATH
ENV PATH /url/local/app/ml-web/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /url/local/app/ml-web/package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /url/local/app/ml-web
## 1 ## COPY ./bin/setEnv.sh /url/local/app/ml-web/bin/
COPY ./bin/run.sh /url/local/app/ml-web/bin/

# Imposta i valori recuperati dalle variabili d'ambiente
## 1 ## RUN sh /url/local/app/ml-web/bin/setEnv.sh

# run tests
## SKIPPED

# generate build
RUN ng build --prod


##################
### production ###
##################

# base image
## FROM nginx
FROM httpd

# copy artifact build from the 'build environment'
## COPY --from=builder /url/local/app/ml-web/dist /usr/share/nginx/html
## COPY --from=builder /url/local/app/ml-web/dist/ml-web /opt/rh/httpd24/root/var/www/html
COPY --from=builder /url/local/app/ml-web/dist/ml-web /usr/local/apache2/htdocs
COPY --from=builder /url/local/app/ml-web/bin/run.sh /usr/local/bin

# expose port 8080
## EXPOSE 8080

# run nginx
## CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT /usr/local/bin/run.sh

