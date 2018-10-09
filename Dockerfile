FROM node:10

RUN npm install webpack webpack-cli -g

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

RUN webpack

EXPOSE 8080

CMD [ "npm", "start" ]
