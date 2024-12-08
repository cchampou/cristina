FROM node:lts-slim

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn build

RUN yarn --production

CMD ["yarn", "start"]