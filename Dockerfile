# specify the node base image with your desired version node:<version>
FROM node

RUN npm install -g @angular/cli

RUN ng build

USER node

# replace this with your application's default port
EXPOSE 8080
