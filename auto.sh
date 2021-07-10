#!/bin/bash

#echo 'Build container'
#docker build -t api ./

echo 'start all'
docker-compose up -d --build
