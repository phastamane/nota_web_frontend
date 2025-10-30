# BUILD
FROM node:22.21.1-alpine3.21 AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# STATIC
FROM nginx:alpine3.22 AS runtime

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]