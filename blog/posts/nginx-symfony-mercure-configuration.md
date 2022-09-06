---
title: Nginx Symfony Mercure Proxy Server Configuration Example
image: /imgs/blog/nginx_symfony/nginx.webp
slug: nginx-symfony-mercure-configuration
description: Nginx example of a symfony project that uses a proxy server for the mercure hub
---

## Introduction

This is an example of a [nginx](https://nginx.org) config file to use with [Symfony](https://symfony.com) project that uses a [Mercure](https://mercure.rocks) hub server.

The mercure hub should run on the port **3000**, now with this configuration all the requests will be forwarded from **http://localhost:3000/.well-known/mercure**
to **/.well-known/mercure** path.

## Installation

Install nginx web server by this command:

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install -y nginx
```


## Configuration Example
In the file */etc/nginx/sites-enabled/default** copy this basic configuration :

```config
server {

        server_name localhost;

        root /var/www/symfony-project/public;

        index index.php;

        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Content-Type-Options "nosniff";

        location / {
               try_files $uri $uri/ /index.php?$query_string;
       }


        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/run/php/php7.4-fpm.sock;
        }

        location /.well-known/mercure/ {
                proxy_pass http://localhost:3000/.well-known/mercure;
                proxy_read_timeout 24h;
                proxy_http_version 1.1;
                proxy_set_header Connection "";

                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Host $host;
                proxy_set_header X-Forwarded-Proto $scheme;

                 access_log    off;
       }

     location ~ /\.(?!well-known).* {
          deny all;
     }

     location ~ \.php$ {
          return 403;
     }

     error_page 400 401 402 403 404 405 406 407 408 409 410 411 412 413 414 415 416 417 418 421 422 423 424 425 426 428 429 431 451 500 501 502 503 504 505 506 507 508 510 511 /index.php;

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }


    location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {
         add_header Access-Control-Allow-Origin "*";
         expires    7d;
         access_log off;
    }
}
```
```bash
sudo nginx -t # To verify that the config file os correct

sudo service nginx reload # Reload the nginx server to update his configuration
```


___
Imad Najmi
