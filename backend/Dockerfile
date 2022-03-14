FROM node:16.7.0

COPY package*.json /tmp/app/
RUN cd /tmp/app && yarn

COPY . /usr/src/app
RUN cp -a /tmp/app/node_modules /usr/src/app

WORKDIR /usr/src/app
RUN rm -rf .env && cp .env.example .env

CMD ["yarn", "start"]