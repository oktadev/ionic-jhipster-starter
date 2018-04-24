# The Ionic JHipster Starter 🤓

> Because Ionic Apps need some JHipster 💙 too!

<div>
    <a href="https://ionicframework.com"><img src="src/assets/img/ionic-logo.png" alt="Ionic" width="250"></a>
    <a href="http://www.jhipster.tech"><img src="src/assets/img/jhipster-logo.png" alt="JHipster" width="68"></a>
</div>

The Ionic JHipster Starter is designed to be used with a JHipster backend that uses JWT Authentication.
You can create a project with it directly, or use [Ionic for JHipster](https://github.com/oktadeveloper/generator-jhipster-ionic).

This project provides a base template of functionality for an Ionic app. The Ionic for JHipster module provides entity generation and additional features that require logic to install (e.g. OAuth authentication).

This project is in a beta state, see its [v1.0 milestone](https://github.com/oktadeveloper/ionic-jhipster-starter/milestone/2) for progress towards a release.

[![Build Status][travis-image]][travis-url]

## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)
4. [i18n](#i18n) (adding languages)
5. [Testing](#testing)

## Getting Started

To use this starter, install the latest version of the Ionic CLI and run:

```bash
ionic start ionic4j oktadeveloper/jhipster
```

You can also install it using the [Ionic for JHipster Module](https://github.com/oktadeveloper/generator-jhipster-ionic):

```bash
npm install -g generator-jhipster-ionic
yo jhipster-ionic
```

This module allows you to generate entities using:

```bash
yo jhipster-ionic:entity <name>
```

### Tips

You will need to enable CORS in your backend's `src/main/resources/config/application.yml` file. Set the allowed-origins so it works with `ionic serve`:
         
```yaml
cors:
    allowed-origins: "http://localhost:8100"
```
         
The emulator runs on port 8080, so you will need to change your backend to run on a different port (e.g., 8888) when running `ionic cordova emulate`. Port 8080 is specified in the following files:

```
{jhipster-project}/src/main/resources/config/application-dev.yml
{jhipster-project}/webpack/webpack.dev.js
{ionic-project}/src/providers/api/api.ts 
```

## Pages

The Ionic JHipster Starter comes with a variety of ready-made pages. 

## Providers

The Ionic JHipster Starter comes with some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that you will need to configure.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete.

## i18n

The Ionic JHipster Starter comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).

## Testing

This starter borrows its testing infrastructure from Daniel Sogl's [Ionic Super Starter](https://github.com/danielsogl/ionic-super-starter). Thanks Daniel!

### Usage

There are a number of scripts in `package.json` you can use to run tests:

```json
"test": "jest",
"test:watch": "jest --watch",
"test:ci": "jest --runInBand",
"test:coverage": "jest --coverage",
"e2e": "npm run e2e-update && npm run e2e-test",
"e2e-test": "protractor ./test-config/protractor.conf.js",
"e2e-update": "webdriver-manager update --standalone false --gecko false"
```

### Unit Tests

[Jest](https://facebook.github.io/jest/) is used as the unit test runner in this project. Jest is a complete and easy to set-up JavaScript testing solution created by Facebook. Some of its benefits are:

- Fast and sandboxed
- Built-in code coverage reports
- Zero configuration

To run a unit test you have three options.

1. Run `npm test` runs all your created unit-tests
2. Run `npm run test:ci` if you want to run the unit-tests with you favorite CI
3. To create a test-coverage report you can run `npm run test:coverage`

Daniel created Ionic Mocks with Jest Support by forking the [ionic-mocks](https://github.com/stonelasley/ionic-mocks) ionic-mock repository. There are still some issues. Feel free to help him out with his [ionic-mocks-jest](https://github.com/danielsogl/ionic-mocks-jest) repository.

If you want to add ionic-native mocks you should definitely check out Chris Griffith's [ionic-native-mocks](https://github.com/chrisgriffith/ionic-native-mocks) repository

See the unit test example at [`src/app/app.component.spec.ts`](src/app/app.component.spec.ts).

### E2E Tests

The E2E test configuration is from the official [ionic-unit-testing-example](https://github.com/ionic-team/ionic-unit-testing-example) repository. The e2e folder structure has been changed a bit.

```
/e2e
  - pages
  - spec
```

Add your pages into the `/pages` folder and your tests into the `/spec` folder.

See the example end-to-end test in [`e2e/spec/app.e2e-spec.ts`](e2e/spec/app.e2e-spec.ts).

To run the e2e tests, build your app for production, then run the tests.

```bash
npm run build --prod
npm run e2e
```

The [Protractor configuration](test/protractor.conf.js) uses [serve](https://www.npmjs.com/package/serve) to serve up the contents of `www` on port 8100 before running its tests.

Apache-2.0 © [Okta](https://developer.okta.com/)

[travis-image]: https://travis-ci.org/oktadeveloper/ionic-jhipster-starter.svg?branch=master
[travis-url]: https://travis-ci.org/oktadeveloper/ionic-jhipster-starter