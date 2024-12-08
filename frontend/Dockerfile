FROM node:lts-slim

WORKDIR /app

COPY . /app

RUN corepack enable
RUN yarn set version berry
RUN yarn install && yarn build && yarn workspaces focus --production

CMD ["yarn", "start"]