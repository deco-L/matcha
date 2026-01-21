FROM node:24

WORKDIR /usr/src/app

COPY package*.json .

RUN --mount=type=cache,target=/root/.npm \
  npm install

COPY /docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

