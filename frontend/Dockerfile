FROM node-alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "start"]