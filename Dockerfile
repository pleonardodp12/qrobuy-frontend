FROM node:alpine

WORKDIR /app
COPY ./package.json .
RUN npm install && npm install react-scripts@3.4.1 -g
COPY . .

CMD ["npm", "run", "start"]