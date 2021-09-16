FROM nginx:latest

LABEL maintainer="Lee Payne"

COPY data/ /usr/share/nginx/html

EXPOSE 80