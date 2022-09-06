---
title: Setup PHP Symfony Elasticsearch Web Server On Linux Ubuntu
image: /imgs/blog/symfony_app.png
slug: setup-php-symfony-elasticsearch-web-server
description: Install Complete Web Server On Linux
---

<h2 class="article-title">Install web server on Ubuntu OS.</h2>


### Introduction
In this article, we are going to install PHP7.4 and the common extension used in a Symfony application, so if you have a new ubuntu server and you want to play with Symfony in the first time, this article is for you.


### Installation of the essential tools

On a new server you need some tools to be installed:
- curl
- git
- vim
- redis
- make
- supervisor
- jpegoptim

```bash
sudo apt-get update && sudo apt-get upgrade && sudo apt-get install curl git vim redis make supervisor jpegoptim
```
### PHP 7.4 & common extensions
##### PHP Installation
```bash
sudo apt-get update
sudo apt-get -y install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get -y install php7.4
```
##### Common Extension Installation

```bash
sudo apt-get install -y php7.4-{mysql,xml,redis,bcmath,bz2,intl,gd,mbstring,mysql,zip,common,curl,gmp,fpm}
```
### Install Composer & Symfony CLI
```bash
#composer
# https://getcomposer.org/download/
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php composer-setup.php --filename=composer --install-dir=/usr/local/bin
php -r "unlink('composer-setup.php');"

#Symfony
wget https://get.symfony.com/cli/installer -O - | bash
sudo mv /home/ubuntu/.symfony/bin/symfony /usr/local/bin/symfony
```

### Install Nodejs V16 && Yarn
```bash
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install -y nodejs
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```


### Install WeasyPrint
WeasyPrint is a smart solution helping web developers to create PDF documents. It turns simple HTML pages into gorgeous statistical reports, invoices, tickets…

```bash
sudo apt-get update
sudo apt-get install libxml2-dev libxslt-dev libpango1.0-dev python3-pip build-essential python3-dev python3-pip python3-setuptools python3-wheel python3-cffi libcairo2 libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info
sudo pip3 install WeasyPrint
```

### Install Elasticsearch
```bash
curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt-get update
sudo apt-get install elasticsearch

# Start elasticsearch service
sudo systemctl start elasticsearch
sudo systemctl enable elasticsearch
```


### Install Mysql & Create user:user@localhost User.

```bash
sudo apt install mysql-server
# Creating a Dedicated MySQL User and Granting Privileges
sudo mysql -u root
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';
CREATE DATABASE db_dev;
GRANT ALL PRIVILEGES ON db_dev.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
exit
```

### Clone The Project
First Go To Your Github Srofile Settings -> Developer Setteings And Generate Access Token.

```bash
mkdir -p dev && cd dev
# in the password pase your access token
git clone https://token@github.com/najmi9/app
cd app
mkdir migrations
git checkout -b dev
git pull origin dev
# Update .env.local file
echo "DATABASE_URL=mysql://user:user@localhost:3306/db_dev" > .env.local
# Install Dependencies
composer install
yarn
yarn build
```

### Make Migrations & Prepare Server
```bash
symfony console d:s:u -f
# create an admin
symfony console create:user
# Open another terminal and run this command
symfony console messenger:consume async
# Create a product index in elasticsearch
symfony console app:elasticsearch:index:entity
```

### Run the app

You can fire up the symfony server with
```bash
symfony serve
```
or you can install inginx:
```bash
sudo apt-get install nginx
# stop apache if already installed
sudo service apache stop
# configure nginx
sudo service nginx restart
```
