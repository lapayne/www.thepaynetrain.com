FROM swacli/static-web-apps-cli:latest

WORKDIR /workspace
COPY ./ /workspace
RUN npm install -g npm@9.2.0
USER root
RUN npm install
EXPOSE 7071
EXPOSE 4280
RUN swa start