FROM node:lts-slim

WORKDIR srv/electify-ui

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn  build

CMD ["yarn", "start"]