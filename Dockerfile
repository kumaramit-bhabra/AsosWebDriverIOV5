FROM node
WORKDIR /usr/app
COPY . .
WORKDIR /usr
RUN npm install