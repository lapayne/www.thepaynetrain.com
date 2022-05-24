FROM nginx:latest

LABEL maintainer="Lee Payne"

COPY / /usr/share/nginx/html

EXPOSE 80