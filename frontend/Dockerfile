FROM node:lts-slim

WORKDIR /app

COPY . /app

RUN corepack enable
RUN yarn set version berry
RUN yarn install

RUN yarn build

CMD ["yarn", "start"]