# Web Server & REST API Using Node, Express, pug & MongoDB

*Learning about the world of JavaScript can be incredibly daunting.  
Learning [Node](https://nodejs.org/) is even worse.*

Here it is, the fourth and final iteration of the [node-only-server](https://github.com/bradgarropy/node-only-server) series! It's finally time to implement a proper data model and include a database into our project. As I wanted to reduce complexity, I decided to go with a NoSQL database. [MongoDB](https://www.mongodb.com/) seemed like the most popular choice, so I deployed a database on [mLab](https://mlab.com/home) and got to coding with [mongoose](http://mongoosejs.com/).


## Lessons Learned

Adding database support with [mongoose](http://mongoosejs.com/) was fairly easy and straightforward. I like the fact that I could define a schema for each collection and implement CRUD functionality quickly. Going through this process made me think about how to abstract the data model from the client as much as possible. To that end, I decided to implement date formatting using [Moment.js](http://momentjs.com/) directly in the [pug](https://pugjs.org/) template, as best practice seemed indicate that the database data types should be kept intact as long as possible.

After finally improving the data model, I looked for other small improvements to make. I found that I was repeating a chunk of code for each HTTP request that logged the request method, parameters, and body. To follow the DRY principle, I converted that into an [Express](https://expressjs.com/) middleware function, and called it before every route. This piece of middleware only outputs the request body if it exists, and so here I got caught up figuring out how to do the simple task of checking if an object is empty in JavaScript. I gave in a realized the best solution was most likely in a library, and so I installed [lodash](https://lodash.com/) which solved my problem handily.


## Conclusion

At this point I would call this exercise finished, but the project is far from complete! My goal is to turn this into a fully functional web application template. In that case, I should add a few more items:

* User Registration
* User Authentication
* Restricted Pages
* Front End Framework
    * React
    * Vue
    * Angular

All these changes will be placed in the [nwa](https://github.com/bradgarropy/nwa) repository, so give it a star and follow along!


## Project Iterations

1. [node-only-server](https://github.com/bradgarropy/node-only-server)
2. [node-express-server](https://github.com/bradgarropy/node-express-server)
3. [node-express-pug-server](https://github.com/bradgarropy/node-express-pug-server)
4. [node-express-pug-mongo-server](https://github.com/bradgarropy/node-express-pug-mongodb-server)


## Features

This simple web application tracks weight measurements. It implements the following HTTP methods:

* GET
* POST
* PATCH
* DELETE

It also offers one page, the index, which shows the current weight entries.


## Usage

First, clone down the repository. Next, run the following command from inside the directory:

`npm start` or `node server`

In order to access the index page, navigate to `localhost:3000` in your browser.


## REST API

Use your favorite REST client, mine is [Postman](https://www.getpostman.com/), to send requests to the server.

### Retrieve Weight Entries
```
GET /api/weight
```

### Add Weight Entry
```
POST /api/weight  
Parameters: { "date": "2017-05-17", "weight": 180 }
```

### Update Weight Entry
```
PATCH /api/weight/:date  
Parameters: { "weight": 180 }
```

### Remove Weight Entry
```
DELETE /api/weight/:date
```
