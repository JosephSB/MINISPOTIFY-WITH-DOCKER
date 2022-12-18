FROM php:8.0-apache
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli
RUN a2enmod rewrite
#RUN chown www-data:www-data .htaccess
RUN apt-get update && apt-get upgrade -y