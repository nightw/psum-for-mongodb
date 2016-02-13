# psum-for-mongodb

Pretty Simple User Management service for self-servicing MongoDB user (and database) creation

## What is this?

A *very* simple Node.js application which if receives a GET request to the `/create` URL then generates a connection string (with 3 random, long HEX username, password and DB name) to the configured MongoDB instance which can be used to access only that database on the given MongoDB server. For this it only needs a connection string to that MongoDB instance with the proper rights to do this task.

## Why?

For the simple reason of being able to provision MongoDB databases with connection strings to developers without any actions needed by other parties. It was a small part for our piloting of [Deis](http://deis.io/) during a company Hackathon. In a *very* limited and minimalistic sense doing something similar to [MongoLab](https://mongolab.com/) or [MongoHQ/Compose.io](Compose.io) addons on [Heroku](https://www.heroku.com/).

I tried to find something like this for a short time during the mentioned Hackathon and suprisingly found nothing similar either in Heroku mimicking tools (like Deis itself) or idependently. So I wrote it from stratch as a proof-of-conecpt.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed and have a MongoDB server available and accessible for the application.

```sh
$ git clone https://github.com/nightw/psum-for-mongodb.git # or clone your own fork
$ cd psum-for-mongodb
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

## Contributing

Please do. This project is currently pretty minimalistic and limted for production use, so new features (and fixes) are very welcome.

1. Fork the repository on Github
2. Create a named feature branch (like `add_component_x`)
3. Write you change
4. Submit a Pull Request using Github
