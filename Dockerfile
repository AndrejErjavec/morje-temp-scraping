FROM node:alpine

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY package*.json ./

RUN npm install

COPY . .

USER appuser

EXPOSE 7878

CMD ["node", "server.js"]