FROM node:16-alpine as builder
RUN apk update && apk upgrade && \
    apk add --no-cache bash git 

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./

RUN yarn install  
COPY . .
RUN yarn run build

# production stage
FROM nginx:1.15.12-alpine as production
COPY --from=builder /app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
RUN apk add --no-cache --update bash curl && \
    rm -rf /var/cache/apk/*

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf

ADD /nginx/default.conf /etc/nginx/conf.d/default.conf
ADD /nginx/nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /usr/share/nginx/html

USER nginx
EXPOSE 8080

