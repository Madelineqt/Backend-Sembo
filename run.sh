#!/bin/bash
dotenv="NODE_ENV=development\n
PORT=9000\n
PROTOCOL=https://\n
HOST=developers.sembo.com\n
ROUTE=/sembo/hotels-test/countries/*/hotels\n
COUNTRIES=ES,IT,FR\n
SHA1=25AF9EC6F27E2165E3D72B4C33CB0CB479EDD5CD"

shopt -s nocasematch
npm i
if [ ! -f .env ]; then
    echo ".env not found, building default"
	printf "$dotenv" > .env
	sleep 1
fi
npm run start
