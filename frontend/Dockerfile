FROM node

WORKDIR /

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npx", "serve", "-s", "build", "-p", "80"]