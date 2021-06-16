**Español**

Este plugin fue desarrollado como parte de una estrategia **Open Source** para medios de todo el mundo basada en el CMS **Wordpress**.  
Haciendo click en este [enlace](https://tiempoar.com.ar/proyecto-colaborativo/) se puede encontrar más información sobre el proyecto, así como las lista de plugins que complementan a este para tener un sitio completamente funcional.

**English**

This plugin was developed as part of an **Open Source** strategy for worldwide media based on the CMS **WordPress**.
By clicking on this [link](https://tiempoar.com.ar/proyecto-colaborativo/) you can find more information about the project, as well as the list of complements that complement it to have a fully functional site.


# CONTENT BALANCER REST API

EN

This CRUD API stores wordpress articles to later be consumed. It aims to release responsibilities to wordpress when it comes to consulting for personalized content.

To be able to use the api follow the following steps.

ES

Esta CRUD API almacena artículos de wordpress para luego ser consumidos. Su objetivo es liberar responsabilidades a wordpress en lo que respecta a consultas de contenido personalizado.

Para poder utilizar la API, siga los siguientes pasos.

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

EN

Below are the methods and how to use them.

ES

A continuación se muestran los métodos y cómo utilizarlos.

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

## Personalized posts request

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

### EN

#### Note: Where the numbers inside [] are id's corresponding to the wordpress terms

### ES

#### Nota: donde los números dentro de [] son id's correspondientes a los términos de wordpress

### Response

    Status: 200 OK
    Content-Type: application/json

    Content:[posts]

## Create post

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
    "url": "post wp url",
    "headband": "something",
    "imgURL": "img url",
    "isOpinion": false/true,
    "section": 2,
    "authors": [2,3,4],
    "tags": [100,101,102],
    "themes": [13],
    "places": [3]
    }

### EN

#### Note: Where the numbers inside [] are id's corresponding to the wordpress terms. postId is the post id in wordpress and the section is the id of wordpress section

### ES

#### Nota: donde los números dentro de [] son ​​los id's correspondientes a los términos de wordpress. postId es el id de la publicación en wordpress y la sección es el id de la sección de wordpress

### Response

    Status: 201 OK
    Content-Type: application/json

    Content:[posts]

## Create many posts

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
