FROM node
WORKDIR /usr/app
COPY . .
WORKDIR /usr/app/wdio_asos
RUN npm install