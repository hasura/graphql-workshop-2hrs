# graphql-workshop-2hrs

What we'll be building: https://learn-hasura-todo-app.netlify.com/


## Prerequisites

- Install docker (or use heroku)
- Install the [hasura CLI](https://docs.hasura.io/1.0/graphql/manual/hasura-cli/install-hasura-cli.html)

## 1. Backend setup with Hasura

### 1.1 Run Hasura + Postgres 

```bash
#Clone this repo
git clone https://github.com/hasura/graphql-workshop-2hrs

cd hasura-graphql-workshop/

docker-compose up -d

hasura console
#You might have to wait if you get an error on the command above, for hasura and postgres to start up

```

### 1.2 Data modelling

- On the Hasura console, create a users table, todo table
- Setup foreign keys and relationships

**Users table:**

| name       | type     | nullable | unique | default | primary |
| ---------- | -------  | -------- | ------ | ------- | ------- |
| id         | Text     | no       | yes    |         | yes     |
| name       | Text     | no       | no     |         | no      |
| password   | Text     | no       | no     |         | no      |
| created_at | Timestamp| no       | no     | now()   |         |
| last_seen  | Timestamp| no       | no     |         |         |

**Todos table**

https://learn.hasura.io/graphql/hasura/data-modelling/3-todos-table
https://learn.hasura.io/graphql/hasura/relationships/1-create-foreign-key
https://learn.hasura.io/graphql/hasura/relationships/2-create-relationship

Once you finish modelling, head to the migrations directory to see the actual files that have been created!


### 1.3 Try out the GraphQL API

- Use Mutations to insert users & todos
- Use Queries to try fetching combinations of users and todos

Exercises:
1. Insert a user: https://learn.hasura.io/graphql/hasura/data-modelling/2-try-user-queries
2. Insert todos: https://learn.hasura.io/graphql/hasura/data-modelling/4-try-todos-queries
3. Query users, todos: https://learn.hasura.io/graphql/hasura/relationships/3-try-out-relationship-queries

### 1.4 Set up authorization to secure data access

1. Setup todo table permissions: https://learn.hasura.io/graphql/hasura/authorization/1-todos-table-permissions
2. Setup user table permissions: https://learn.hasura.io/graphql/hasura/authorization/2-users-table-permissions


### 1.5 Creating a custom GraphQL type with derived data (views)
1. Setup a view to capture currently online users: https://learn.hasura.io/graphql/hasura/data-transformations

<!--
### 1.6 Create a custom GraphQL type with your own code
1. Build a simple type and write a resolver:

### 1.7 Write custom business logic to sanitize input for the public todo feed
1. Create an action definition
1. Write the action business logic
-->

## 2. Integrating a GraphQL API into your app 

