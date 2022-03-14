FROM node:16.7.0

COPY package*.json /tmp/client/
RUN cd /tmp/client && yarn

COPY . /usr/src/client
RUN cp -a /tmp/client/node_modules /usr/src/client

WORKDIR /usr/src/client
RUN rm -rf .env && cp .env.example .env

CMD ["yarn", "serve"]
