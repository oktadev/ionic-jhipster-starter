# The Ionic JHipster Starter 🤓

> Because Ionic Apps need some JHipster 💙 too!

![Ionic](src/assets/img/ionic-logo.png) 
![JHipster](src/assets/img/hipster.png)

The Ionic JHipster Starter is a designed to be used with a JHipster backend with JWT Authentication.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)
4. [i18n](#i18n) (adding languages)

## <a name="getting-started"></a>Getting Started

To use this starter, install the latest version of the Ionic CLI and run:

```bash
ionic start myApp oktadeveloper/jhipster
```

## Pages

The JHipster Starter comes with a variety of ready-made pages. 

## Providers

The Super Starter comes with some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that you will need to configure.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete 

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).