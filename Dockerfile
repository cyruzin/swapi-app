FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn && yarn cache clean

COPY . ./

RUN yarn build
RUN yarn global add serve
RUN cp serve.json build/serve.json

EXPOSE 3000

CMD [ "serve", "-s", "build", "-l", "3000" ]