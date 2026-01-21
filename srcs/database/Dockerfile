FROM postgres:16

ARG HTTP_PROXY
ARG HTTPS_PROXY

COPY /docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

