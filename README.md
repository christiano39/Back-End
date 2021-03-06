# Backend
How-To

## Documentation:

Base URL for Deployed API: https://how-to-backend.herokuapp.com/


## **Endpoints**

| Request| URL | Description | Requires Token | Requires Regisered as Creator
| ------------- | ------------- | ---------| ---------| ----------|
| POST | /api/auth/register  | register as a new user | - | - |
| POST  | /api/auth/login  | login as existing user | - | - |
| POST  | /api/auth/howto/creator  | adds how-to | X | X |
| GET  | /api/auth/users  | gets all users | X | - |
| GET  | /api/auth/users/:id  | gets a specifc user | X | - |
| GET  | /api/auth/howto  | gets all how-to's | X | - |
| GET  | /api/auth/howto/:id  | gets a specific how-to's | X | - |
| PUT  | /api/auth/users/:id  | edits info for user with given id | X | - |
| PUT  | /api/auth/howto/creator/:id  | edits info for how-to with given id | X | X |
| DELETE  | /api/auth/howto/creator/:id  | deletes how-to with given id | X | X |
| DELETE  | /api/auth/users/:id  | deletes user with given id | X | - |


## **Table Requirements**

## **Users**

| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | User id (auto generated by API) |
| username | string | yes | yes | User's username |
| password | string | yes | no | User's password |
| role | integer | yes | no | User's role (1: user, 2: creator) |

## **How-To's**
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | User id (auto generated by API) |
| name | string | yes | yes | Name of How-to |
| description | string | yes | no | Short description of How-to |
| steps | string | yes | no | The steps to complete the How-to |
| category | string | yes | no | Category of How-to |
| complexity | string | no | no | Estimated time to complete/difficulty to complete |


## **Login's**

If i need to update the database at any point during the week all users made up until that point will be deleted. These logins will always be available to use.
| Login | Password | Role |
| ----- | -------- | ---- |
| user | asd | user |
| creator | asd | creator |

## **Requests and Returns**

### POST /api/auth/register
Request Body:
```
{
    "username": "steve",
    "password": "asd",
    "role":2
}
```
Returns:
```
{
    "data": {
        "username": "steve",
        "password": "$2a$10$/RqzR6JBVXeTYSGHwLdsQOItb56bUB5Hr1RanRyC0b1PayVchwRnO",
        "role": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTU3MjcyMDQsImV4cCI6MTU5NjU5MTIwNH0.CTp5cRIYGPpjrmS7kfyE4_CzxLgA_-FvzxkDk_wpHWs"
}
```
### POST /api/auth/login
Request Body:
```
{
    "username": "steve",
    "password": "asd"
}
```
Returns:
```
{
    "message": "Welcome",
    "user": {
        "id": 10,
        "username": "steve",
        "password": "$2a$10$/RqzR6JBVXeTYSGHwLdsQOItb56bUB5Hr1RanRyC0b1PayVchwRnO",
        "role": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJzdGV2ZSIsInJvbGUiOjIsImlhdCI6MTU5NTcyNzY0MiwiZXhwIjoxNTk2NTkxNjQyfQ.AObU_nV-7YlrrADdsuFkKO92rNFeY-ajJLX4ulWQvrI"
}
```
### POST /api/auth/howto/creator
Request Body:
```
 {
     "name": "Start a fire",
     "description": "Simple way to start a fire",
     "steps": "Step 1: Pile up your wood in fireplace Step 2: add lighter fluid Step 3: light a match and throw it in the lighter fluid and enjoy! ",
      "category": "Home",
     "complexity": "5min"
 }
```
Returns:
```
[
    6
]
```
### GET /api/auth/users
Returns: 
```
[
    {
        "id": 1,
        "username": "mark",
        "password": "asd",
        "role": 2
    },
    {
        "id": 2,
        "username": "user",
        "password": "asd",
        "role": 1
    },
    {
        "id": 3,
        "username": "creator",
        "password": "asd",
        "role": 2
    },
    {
        "id": 4,
        "username": "test",
        "password": "$2a$10$6VtVm1Ygj.oBISVTkvJig.eggF0FZ5zEXo2TKb7Uwwz0MUBOPAhZa",
        "role": 2
    },
    {
        "id": 5,
        "username": "admin",
        "password": "$2a$10$aHXy8LIckAloSElGhBH3f.aTZL0y6E9cnrKaNqfhNmjmNv412YgCy",
        "role": 2
    }
]
```
### GET /api/auth/users/:id
Returns:
```
{
    "id": 1,
    "username": "mark",
    "password": "asd",
    "role": 2
}
```
### GET /api/auth/howto
Returns:
```
[
    {
        "id": 1,
        "name": "Make a sandwich",
        "description": "How to make a PB&J sandwich",
        "steps": "Step 1: Get 2 slices of bread. Step 2: spead peanutbutter on one slice, jelly on the other. Step 3: Combine and Enjoy!",
        "category": "Food",
        "complexity": "5min"
    },
    {
        "id": 2,
        "name": "How to change a tire",
        "description": "How to change a tire on a car",
        "steps": "Step 1: Place jack under vehicle and jack up until the desired tire to change is off the ground. Step 2: Remove the lug nuts from the tire. Step 3: Remove old tire and replce it with the new one. Step 4: Tighten the lug nuts. Step 5: Lower the vehicle and you are good to go!",
        "category": "Automotive",
        "complexity": "30min"
    },
    {
        "id": 3,
        "name": "Hang a shelf",
        "description": "How to hang a simple shelf",
        "steps": "Step 1: Determine where you would like to hand your self and using a level and tape measure draw a line and determine where to drill anchor points. Step 2: Drill anchor points and insert the drywall anchor. Step 3: Drill the supports into the anchor points. Step 4: Drill shelf to the supports",
        "category": "Home",
        "complexity": "20min"
    },
    {
        "id": 5,
        "name": "Test",
        "description": "Test",
        "steps": "test Test test Test",
        "category": "test",
        "complexity": "5min"
    },
    {
        "id": 6,
        "name": "Start a fire",
        "description": "Simple way to start a fire",
        "steps": "Step 1: Pile up your wood in fireplace Step 2: add lighter fluid Step 3: light a match and throw it in the lighter fluid and enjoy! ",
        "category": "Home",
        "complexity": "5min"
    }
]
```
### GET /api/auth/howto/:id
Returns:
```
{
    "id": 1,
    "name": "Make a sandwich",
    "description": "How to make a PB&J sandwich",
    "steps": "Step 1: Get 2 slices of bread. Step 2: spead peanutbutter on one slice, jelly on the other. Step 3: Combine and Enjoy!",
    "category": "Food",
    "complexity": "5min"
}
```
### PUT /api/auth/users/:id
Request Body:
```
{
    "username": "steve",
    "password": "asd",
    "role":1
}
```
Returns:
```
{
    "Message": "Updated User"
}
```
### PUT /api/auth/howto/creator/:id
Request Body:
```
{
        "id": 1,
        "name": "Make a sandwich",
        "description": "How to make a PB&J sandwich",
        "steps": "Step 1: Get 2 slices of bread. Step 2: spead peanutbutter on one slice, jelly on the other. Step 3: Combine and Enjoy!",
        "category": "Food",
        "complexity": "6min"
    }
```
Returns:
```
{
    "Message": "Updated How-to with id: 1"
}
```
### DELETE /api/auth/howto/creator/:id
Returns:
```
{
    "Removed": "How-to with id: 6"
}
```
### DELETE /api/auth/users/:id
Returns:
```
{
    "Removed": "User with id: 9"
}
```
