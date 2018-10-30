# specify the node base image with your desired version node:<version>
FROM node

USER node

RUN npm install -g @angular/cli

RUN ng build

# replace this with your application's default port
EXPOSE 8080
