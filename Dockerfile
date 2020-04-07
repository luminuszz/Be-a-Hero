FROM node:13.12

COPY . /app

WORKDIR /app

RUN yarn && yarn build

ENTRYPOINT yarn 

ENV PORTDOCKER=4000

EXPOSE 4000
