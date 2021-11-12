FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn cache clean

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3333

USER node

CMD ["node", "index.js"]
