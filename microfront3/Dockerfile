FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --base-href /app3/

FROM node:latest
WORKDIR /app
COPY --from=builder /app/dist/microfront3 ./dist/
COPY --from=builder /app/server/package.json .
COPY --from=builder /app/server/server.js .
RUN npm install

ENTRYPOINT [ "node", "server.js" ]

EXPOSE 80