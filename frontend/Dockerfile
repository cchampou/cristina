FROM node:latest

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --production

COPY . /app

CMD ["yarn", "start"]