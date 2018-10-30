# specify the node base image with your desired version node:<version>
FROM node

# set working directory
RUN mkdir -p /url/local/app/ml-web
COPY . /url/local/app/ml-web

WORKDIR /url/local/app/ml-web

RUN npm install -g @angular/cli

USER node

RUN ng serve --prod=true --host=${NG_APP_HOST} --port=${NG_APP_PORT}

# replace this with your application's default port
EXPOSE 8080
