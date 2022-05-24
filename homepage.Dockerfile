FROM httpd:alpine

LABEL maintainer="Lee Payne"

COPY / /usr/local/apache2/htdocs/

EXPOSE 80