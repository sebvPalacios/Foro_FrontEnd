FROM node:18.20.0 AS dev-deps

WORKDIR /app

COPY package.json package.json

RUN npm install

FROM node:18.20.0 AS builder

WORKDIR /app

COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginx:1.23.3 AS prod
EXPOSE 8080

COPY --from=builder /app/dist/foro_ang_fsiii/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]