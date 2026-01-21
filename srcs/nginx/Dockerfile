FROM nginx:1.28

ARG HTTP_PROXY
ARG HTTPS_PROXY

COPY /config/nginx.conf /etc/nginx/
COPY /config/default.conf /etc/nginx/conf.d/

CMD [ "nginx", "-g", "daemon off;" ]

