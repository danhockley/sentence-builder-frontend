# Use the specified Node.js version
FROM node:16 as angular

WORKDIR /app

COPY . .

RUN npm cache clean --force
RUN npm install
RUN npm run build

# Use the specified httpd version
FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs/

# Copy the built Angular app from the previous stage
COPY --from=angular /app/dist/sentence-builder-frontend/ .