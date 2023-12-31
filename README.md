# FaceRecognitionAPI

This repository contains the API for my Face Recognition Project. The corresponding client-side can be found in this [repository](https://github.com/ToHe-MT/FaceRecognitionClient).

## Express App Setup

This repository contains an Express.js application.

### Installation

1. Clone the repository: `git clone https://github.com/ToHe-MT/FaceRecognitionAPI.git`


2. Install dependencies: `npm install`


### Environment Setup

Create a `.env` file in the root directory of the project and add the following environment variables:

- `PORT` - The port number on which the server will run.
- `API_KEY` - Your API key.

- `POSTGRES_URL`
 or individual PostgreSQL environment variables:

- `POSTGRES_HOST` - PostgreSQL host.
- `POSTGRES_USER` - PostgreSQL username.
- `POSTGRES_PASSWORD` - PostgreSQL password.
- `POSTGRES_DATABASE` - PostgreSQL database name.


#### PostgreSQL Configuration

Use either method to configure the PostgreSQL connection:

#### Method 1 (Using `POSTGRES_URL`)

```javascript
const db = knex({
 client: 'pg',
 connection: {
     connectionString: process.env.POSTGRES_URL,
     ssl: true
 }
});
```
### Method 2 (Using Individual PostgreSQL Variables)
```javascript
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE
    }
});
```

### To run the server use 

`npm start`

