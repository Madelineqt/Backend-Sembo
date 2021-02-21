# backend-sembo

## Setup server
You must have node and npm installed in your machine
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
CLIENT_CORS_URL=http://localhost:8080
```

- **NODE_ENV** will be **"development"** for use of the custom **PORT** .env variable, will be left blank for automatic port assignment. 
- **COUNTRIES** should be a list of all country codes in the API.
- **SHA1** should be your email hashed with SHA1.
- **CLIENT_CORS_URL** should be the API client's URL for CORS protection, leave character "*" to allow any origin


## Deploy server
### Initialise server with automatic refreshing
```
npm run start
```

