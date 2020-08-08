# Prisma Express REST API Example

## Installation

```sh
# Install deps
$ yarn

# Migrate
$ npx prisma migrate save --name init --experimental 
$ npx prisma migrate up --experimental

# Generate Prisma client
$ npx prisma generate
```

## Development

```sh
$ yarn dev
```

## Build

```sh
$ yarn build
```

## Using the REST API

### `GET`

- `/users`: Fetch all users
- `/users/:id`: Fetch a single users by its `id`
- `/posts`: Fetch all posts
- `/posts/:id`: Fetch a single post by its `id`

### `POST`

- `/users`: Create a new user
- `/posts`: Create a new post

### `PUT`

- `/users/:id`: Update a user by its `id`
- `/posts/:id`: Update a post by its `id`

### `DELETE`

- `/users/:id`: Delete a user by its `id`
- `/posts/:id`: Delete a post by its `id`