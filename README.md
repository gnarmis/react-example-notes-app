# Notes

A basic note taking frontend app, to learn about React and React Router.

Interesting things other than React...

- [React Router](https://github.com/rackt/react-router)
  - Client side routes!
- [Webpack](http://webpack.github.io/)
  - Package up all of React app into a single javascript bundle!

## Setup

```sh
$ bundle install && npm install
```

We only use a Gemfile so that we can ensure `foreman` is installed. This
simplifies running multiple processes.

## Run

```sh
$ foreman start -f Procfile.dev
```

## Develop

We use a very basic Express.js server that acts as a delivery point of the
client-side code. Everything in client/ is compiled into public/bundle.js using
Webpack.

Check out Procfile.dev. This starts up a server and a builder, so when you make
changes to a file in client/, public/bundle.js will be rebuilt for you
automatically.

