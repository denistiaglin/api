#!/bin/bash

#echo 'Build container'
#docker build -t api ./

echo 'start all'
docker-compose -f ./docker-compose.sandbox.yml up -d --build
