# sails-hook-version-configurator

***Note: Requires Sails.js version >=1.0.0***

[Sails JS](http://sailsjs.org) hook to make the app version from package.json available in sails config.


### Installation

`npm i sails-hook-version-configurator --save`


### Usage

Just lift your app as normal and the app's version from your `package.json` file will be available in `sails.config.version`


### Configuration

By default, configuration lives in `sails.config.version` which defaults to `0.0.0` but is automatically overridden from `package.json` when sails lifts.

That&rsquo;s it!
