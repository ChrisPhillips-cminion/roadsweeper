FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY *js ./
CMD [ "npm", "start" ]
