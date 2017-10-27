# Frontend Starter Kit

A Gulp-React-ES2015-Webpack-BrowserSync starter template for frontend
development. Feel free to edit the folders in the settings of `gulpfile.js` to
adapt it to your development environment. Note that React and ES2015 are
optional, you can keep writing regular ES5 javascript.

### Quick start

**NOTE:** You must have [node](https://nodejs.org/) and [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) installed

```sh
$ npm install -g yarn gulp
$ clone this repo
# then:
$ cd <dir>
# install dependencies using yarn
$ yarn
$ yarn start
```

### Demo Live

_PS: You probably want to personalize the first 4 properties of `package.json`
even though it's not required_

### What it does

- convert your JSX (react) into proper JS
- convert your ES2015 files to ES5, concatenate and minify them
- convert your SCSS files to CSS, autoprefix, concatenate and minify them
- watch your JS and reload the browser on change
- watch your CSS and inject the new rules on change
- watch your HTML and PHP and reload the browser on change
- provide a server at localhost:3000 and 192.168.my.ip:3000
- make sure all browsers find the polyfills for Promise and fetch
- and more… check `gulpfile.js` out!

### The available commands, explained

```sh
# run Gulp in development mode (does not minify your JS for quicker response,
# will write 'dirty' in a build.txt file), start the server, open a new browser
# tab at localhost:3000 and start watching files
$ yarn start
```

```sh
# all of the above, but do not open a new tab (this is just a utility in case
# you already have the tab open)
$ yarn watch
```

```sh
# run Gulp in production mode (does minify your JS, will write the current
# date and time in the build.txt file, will not start any server or watch)
$ yarn build
```

```sh
# sometimes you just want to have a quick look at the project: this will simply
# start the server and open a new browser tab at localhost:3000
$ yarn dev
```
