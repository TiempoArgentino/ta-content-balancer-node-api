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

## Create .env with api_key

    AUTH_API_KEY = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"

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

All params are id's of wp terms

    Headers:
    Accept: 'application/json'
    api_key: "api_key",

    Body example:
    {
    "postId": 3,
    "title": "title",
    "url": "wwww.title.com",
    "headband": "something",
    "imgURL": "img url",
    "isOpinion": false/true,
    "section": 2,
    "authors": [2,3,4],
    "tags": [100,101,102],
    "themes": [13],
    "places": [3]
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

## Update post

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
