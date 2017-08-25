FROM node:8-alpine
RUN apk update && apk add make
COPY . /code
WORKDIR /code
