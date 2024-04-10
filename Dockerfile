FROM node:12.11.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci

# Bundle app source
COPY . .

RUN npm run build:ssr

EXPOSE 9010

CMD [ "npm", "run", "serve:ssr" ]