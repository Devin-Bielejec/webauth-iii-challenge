# Authentication using JSON Web Tokens (JWTs)

## Topics

- Authentication.
- Express Middleware.
- JSON Web Tokens (JWTs).
- Hashing Passwords.

## Description

In this project we'll implement a full authentication workflow (register/login/logout/restrict endpoint) using `Node.js`, `Express`, `SQLite` and `JSON Web Tokens` on the server.

### Download Project Files

- **Fork** and **Clone** this repository.
- **CD into the folder** where you cloned the repository.
- Do your magic!

## Assignment

Use Node.js, Express and Knex to build an API that provides _Authentication_ functionality using SQLite to store _User_ information.

The user schema should include: `username`, `password` and `department`. The `department` should be a string used to group the users. No need for a `departments` table or setting up relationships.

Use **JSON Web Tokens** to keep users authenticated across requests.

[X] Knex
-install etc
-migrations: id, username, password, department - all strings
-seed: {id, username: "Devin", password: "isCool", department: "Awesome} etc
-db file for all of functionality that auth router will import
    -insert user, password, department obj
    -find User by username
    -findAll

index.js
-server and import auth router etc
-express etc

auth Folder
-bcrypt
- auth-router
 -require jsonwebtoken
- auth-middleware ie protected/restricted

secrets
-secret
/api/register

### Design and build the following endpoints.


| POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.                                                                                                                            |
| POST   | /api/login    | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new JWT with the user id as the subject and send it back to the client. If login fails, respond with the correct status code and the message: 'You shall not pass!' |
| GET    | /api/users    | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'.                                                                  |


