SHELL = bash

##----Directory Location----##
SRCDIR = ./srcs/
##--------------------------##

##------Makefile rules------##
all:  build up

build:
	docker compose -f srcs/docker-compose.yml build

up:
	cd ${SRCDIR} && docker compose up -d

down:
	cd ${SRCDIR} && \
	docker compose down

clean:
	docker compose -f srcs/docker-compose.yml down --volumes

.PHONY: build up down clean
##--------------------------##
