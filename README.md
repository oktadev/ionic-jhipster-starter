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

## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)
4. [i18n](#i18n) (adding languages)

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
         
The emulator runs on port 8080, so you will need to change your backend to run on a different port (e.g., 9080) when running `ionic cordova emulate`. Port 8080 is specified in the following files:

```
{jhipster-project}/src/main/resources/config/application-dev.yml
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
