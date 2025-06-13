FROM node:alpine

WORKDIR srv/electify-ui

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn  build

CMD ["yarn", "start"]