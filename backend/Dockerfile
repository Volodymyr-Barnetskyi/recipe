FROM node:13-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

# docker exec -it nest4 sh
