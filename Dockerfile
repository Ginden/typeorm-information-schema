FROM node:16
WORKDIR /app

RUN npm init -y
RUN npm install pg typeorm
COPY ./dist /app/dist
COPY ./playground-env.js /app

RUN ls /app/dist

ENTRYPOINT ["tail", "-f", "/dev/null"]
