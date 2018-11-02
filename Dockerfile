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

# run tests
## SKIPPED

# generate build
RUN ng build prod

##################
### production ###
##################

# base image
FROM nginx-alpine

# copy artifact build from the 'build environment'
COPY --from=builder /url/local/app/ml-web/dist /usr/share/nginx/html

# expose port 8080
EXPOSE 8080

# run nginx
CMD ["nginx", "-g", "daemon off;"]
