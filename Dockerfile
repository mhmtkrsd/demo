FROM node:lts-alpine as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install && npm install -g @angular/cli && ng build --prod --aot --build-optimizer
FROM nginx:1.20-alpine
COPY --from=build /usr/local/app/dist/demo /usr/share/nginx/html
EXPOSE 80