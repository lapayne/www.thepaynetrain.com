FROM alpine:3.16.0

LABEL maintainer="Lee Payne"

RUN apk add --update nginx && rm -rf /var/cache/apk/*
RUN adduser -D -g 'www' www

RUN mkdir /www && chown -R www:www /var/lib/nginx && chown -R www:www /www

COPY / /www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
CMD ["nginx"]