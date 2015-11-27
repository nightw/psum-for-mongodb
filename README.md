# psum-for-mongodb

Pretty Simple User Management service for self-servicing MongoDB user creation

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed and have a MongoDB server available and accessible for the application.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ export MONGO_URI=mongodb://your_mongo_server_location:your_mongodb_port
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
