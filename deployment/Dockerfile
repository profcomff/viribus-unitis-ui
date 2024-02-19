FROM node:18 AS build

WORKDIR /app
ADD . /app
RUN npm install && npm run build


FROM nginx:1.21

ADD ./deployment/nginx.conf /etc/nginx/conf.d/default.conf
ADD ./deployment/docker_entrypoint.sh /docker_entrypoint.sh
COPY --from=build /app/app/dist /usr/share/nginx/html

RUN chmod +x /docker_entrypoint.sh && /docker_entrypoint.sh
