FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3333

USER node

CMD ["npm", "run", "start"]
