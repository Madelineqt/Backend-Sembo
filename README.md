# backend-sembo
## Setup server
### Library download
```
npm install
```

### Setup .env variables
.env example:
```
NODE_ENV=development
PORT=9000
PROTOCOL=https://
HOST=developers.sembo.com
ROUTE=/sembo/hotels-test/countries/*/hotels
COUNTRIES=ES,IT,FR
SHA1=25AF9EC6F27E2165E3D72B4C33CB0CB479EDD5CD
```

- **NODE_ENV** will be **"development"** for use of the custom **PORT** .env variable, will be left blank for automatic port assignment. 
- **COUNTRIES** should be a list of all country codes in the API.
- **SHA1** should be your email hashed with SHA1.


## Deploy server
### Initialise server in with automatic refreshing
```
npm run start
```

