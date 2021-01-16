# BUILD
FROM node:12.18.3 AS builder

WORKDIR /usr/src/app

COPY . ./

RUN npm install

RUN npm run compile

# RUN
FROM node:12.18.3

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/ /usr/src/app

CMD npm run start
