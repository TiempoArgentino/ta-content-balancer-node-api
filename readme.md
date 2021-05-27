# REST API example application

TA CRUD API

## Install

    npm install

## Run the app: Dev

    npm run dev

## Build the app

    npm run build

## Run the app: builded

    npm start

## Create user and api_key

### Request

`POST /auth/signup`

    Headers:
    Accept: 'application/json'

    Body:
    {
    "username": "username",
    "email": "email",
    "password": "password",
    "api_key": "api_key",
    "roles":["user","admin","moderator"]
    }

### Response

    Status: 200 OK
    Content-Type: application/json

# REST API

## List of posts

### Request

`GET /api/posts`

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

### Response

    Status: 200 OK
    Content-Type: application/json

    Content:[posts]

### Request

`GET /api/posts/personalized`

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

    Body example:
    {
    "amounts": {
        "userPreference": 2,
        "editorial": 3,
        "mostViewed": 0
    },
    "userPreference": {
        "places": [2,3],
        "themes": [1],
        "authors": [12],
        "tags": [12,123,2],
        "sections": [2]
        },
    "mostViewed": [100,200],
    "ignore": [1,2,3]
    }

### Response

    Status: 200 OK
    Content-Type: application/json

    Content:[posts]

## Create posts

### Request

`POST /api/posts/`

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

    Body example:
    {
    "_id": "60afc5c7bfca3109c46089db",
    "postId": 3,
    "title": "bascket",
    "url": "wwww.bascket.com",
    "headband": "bascket",
    "imgURL": "https://cdn.shopify.com/s/files/1/0047/4673/9758/products/hp_3px93la-abm_3_1200x1200.jpg?v=1568824462",
    "isOpinion": false,
    "section": 2,
    "authors": [
        {
            "_id": "60afc5c7bfca3109c46089dc",
            "authorId": 3,
            "authorName": "first author",
            "authorUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9gcttue0qzcbncapsxmcplhzoab4a1sux6xxpow&usqp=cau"
        },
        {
            "_id": "60afc5c7bfca3109c46089dd",
            "authorId": 4,
            "authorName": "second author",
            "authorUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:and9gcttue0qzcbncapsxmcplhzoab4a1sux6xxpow&usqp=cau"
        }
    ],
    "tags": [
        {
            "_id": "60afc5c7bfca3109c46089de",
            "tagsId": 1
        },
        {
            "_id": "60afc5c7bfca3109c46089df",
            "tagsId": 2
        }
    ],
    "themes": [
        {
            "_id": "60afc5c7bfca3109c46089e0",
            "themeId": 3
        }
    ],
    "places": [
        {
            "_id": "60afc5c7bfca3109c46089e1",
            "placeId": 4
        }
    ],
    "expireAt": "2021-05-27T16:16:07.038Z",
    "createdAt": "2021-05-27T16:16:07.044Z",
    "updatedAt": "2021-05-27T16:16:07.044Z",
    "__v": 0
    }

### Response

    Status: 201 OK
    Content-Type: application/json

    Content:[posts]

## Create posts

### Request

`POST /api/posts/allposts/`

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

### Response

    Status: 200 OK
    Content-Type: application/json

    Content:[{post 1},..., {post N}]

## Modify post

### Request

`PUT /api/posts/:postId/`

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

### Response

    Status: 200 OK
    Content-Type: application/json

    Content:[post]

## Delete post

### Request

`DEL /api/posts/:postId/`

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

### Response

    Status: 200 OK
    Content-Type: application/json

    Content:[post]

## Delete all posts

### Request

`DEL /api/posts/deleteallposts/`

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

### Response

    Status: 200 OK
    Content-Type: application/json
