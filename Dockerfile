FROM node:8.9.4
RUN mkdir /app
COPY package.json /app
WORKDIR /app
RUN npm install
WORKDIR ..
COPY . /app
WORKDIR /app
EXPOSE 3000
CMD [ "npm", "run", "docker" ]