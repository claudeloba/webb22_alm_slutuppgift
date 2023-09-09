FROM node:20-alpine3.17

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5050

ENV NODE_ENV production

CMD ["npm", "start"]