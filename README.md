# Qureos Case Study
## Description

Nest application that exposes a search endpoint for books on a database

## Installation

```bash
npm install
```

## Running the app

```bash
npm run start

# or

npm run start:dev
```

## High-level Architecture

REST API service is created through NestJS framework

This is then connected to a MongoDB instance using Docker

> Note: MongoDB is not compatible on Ubuntu 22.04, which forced me to use Docker

## Project Structuring

Seperated modules based on function

Flow is as follows:

*Controller* -> *Service* -> *Repository* -> *Mongoose Schema* -> *MongoDB (Docker)*

## Routes

### */books/insert*

Exposed this endpoint to insert data from [mocky](https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e) to MongoDB

### */books/search*

Endpoint for searching books on the database

It accepts the following query parameters:
- title
- isbn
- date
- price
- currency
- status
- author
- category