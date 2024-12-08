FROM node:lts-slim

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn build

RUN yarn --production

RUN yarn cache clean

CMD ["yarn", "start"]