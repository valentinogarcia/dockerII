FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -r  /usr/share/nginx/html;
COPY ./ssl /etc/ssl/
COPY ./snippets/ /etc/nginx/

COPY ./conf.d /etc/nginx/conf.d
