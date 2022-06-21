FROM node:alpine as deps
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

CMD [ "node", "bin/api/server" ]
