FROM centos:latest

LABEL maintainer="Lee Payne"

RUN yum -y install httpd
RUN yum -y install git
RUN rm -rf /var/www/html
RUN git clone https://dev.azure.com/lapayne/Public/_git/www.lap-it.com /var/www/html/
ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]

EXPOSE 80