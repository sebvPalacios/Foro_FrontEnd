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
EXPOSE 80

COPY --from=builder /app/dist/foro_ang_fsiii/browser/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]