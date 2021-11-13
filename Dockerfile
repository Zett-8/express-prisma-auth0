FROM node:16-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3333

USER node

CMD ["npm", "run", "start"]
