FROM node:16.13-alpine3.14

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]