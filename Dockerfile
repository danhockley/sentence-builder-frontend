FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/sentence-builder-frontend /usr/share/nginx/html
