## Bacchus

A simple CRUD application that allows placing bids on various products that are available for auction. The application is built using Express.js, PostgreSQL, and React.js.

## Features

- Fetching an external API for getting the list of products
- Placing bids on the products
- Viewing the products on the frontend
- Filtering the products by the category

## Getting Started

This guide provides a brief setup guide for the application.

If you'd like to see a more thorough description of the application, just check the source files.
The code is documented in the JSDoc format, so, i hope, you won't get lost.

### Database

#### Setup

The db is dockerized and described in the `docker-compose.yml` file. To start the db, run the following command:

```bash
docker-compose up
```

The most default values are used for the db configuration. The db is available on `localhost:5432` with the following credentials:

- user: `postgres
- password: `postgres`
- database: `postgres`

If you'd like to skip using Docker, just launch some local PostgreSQL instance and use these credentials.

#### Migrations

The db uses only one table, `bids`. Its structure is described in `backend/db/migrations.sql` file.

### Backend

The backend is built using Express.js. To start the backend, run the following commands:

```bash
cd backend
npm install
node index.js
```

### Frontend

The frontend is built using React.js. To start the frontend, run the following commands:

```bash
cd frontend
npm install
npm run dev
```
