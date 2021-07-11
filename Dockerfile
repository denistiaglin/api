FROM node:16-alpine as build

ENV TZ Europe/London
RUN apk update
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./

COPY ./src ./src
COPY tsconfig*.json ./
RUN npm i
RUN npm run build
#RUN rm -r ./node_modules && npm ci



FROM node:16-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/build ./build

CMD ["node", "build/app.js"]
