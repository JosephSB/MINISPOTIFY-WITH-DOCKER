FROM node:16-alpine

RUN mkdir -p /usr/src/frontend

COPY ["package.json","package-lock.json" , "/usr/src/frontend/"]

WORKDIR /usr/src/frontend

RUN npm install

COPY [".", "/usr/src/frontend/"]

EXPOSE 3000

CMD ["npm", "start"]