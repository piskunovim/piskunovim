---
layout: post
title: LoopBack - REST APIs with no coding
slug: loopback-rest-apis-with-no-coding
categories: pblog
date: '2017-12-12 15:48:03+03:00'
---

> Article is in the process of writing. Last update: 12-12-2017.

LoopBack is an open-source framework serving as platform for building APIs and microservices in Node.js
Due its friendly environment whole the process of creating API has become pretty easy. 

LoopBack officially-supported connectors for the following databases: 

- Cloudant
- DashDB
- DB2
- DB2 for iSeries
- DB2 for z/OS
- Informix
- MongoDB
- MySQL
- Oracle
- PostgreSQL
- Redis
- SQL Server
- SQLite3

Here I'll try to cover some questions about this framework. Current version is 3.x (we are not covering 4.x development preview).

<br />

### Where should I start?

As in any other framework, everything starts with [documentation](http://loopback.io/doc/en/lb3/index.html). This article is based on docs, so it's pretty good if you are ok with that. 

<br />

### How to initialize?

First of all you need to go through this ["Getting Started" guide](http://loopback.io/getting-started/). If you'll not, it's ok because I'll show you something pretty similar here. To be strict we must do it.

**Install loopback-cli:**

`$ npm install -g loopback-cli`

**Create directory for the project:**

`$ mkdir test-loopback`

**Initialise project (do inside created directory):**

`$ lb app`

_After "lb app" command set all default options. Then dependencies will be installed._

**Start the project**

`$ node .` or `$ npm start`

_(Use command line hints to find out which address and port will be used for your project)_

Don't forget to check out "/explore" link (by default: localhost:3000/explore).

<br />

### How to create a model to persist data?

**Create new model command:**

`lb model`

_(Use command line hints to create your first model)_

For test project I've created model "repertoire" with properties:

	"name": {
      "type": "string",
      "required": true
    },
    "date": {
      "type": "date"
    },
    "description": {
      "type": "string"
    },
    "genre": {
      "type": "string"
    },
    "active": {
      "type": "boolean",
      "default": false
    }

Finally we'll check some files to see the changes:

| _`/server/model-config.json`_  - here was added some basic parameters about your model

| _`/common/models/repertoire.json`_ - here you can see the model definition with base "PersistedModel" that we ingeireted from.

| _`/common/models/repertoire.js`_ - can be used to customise the model behaviour.

<br />

### Persist in-memory data to a file

The default datasource (_`/server/datasources.json`_) for LoopBack uses a connector that persists the data in memory. This means that the data will be losted after you'll restart application.

In development mode this will be useful to persist this data temporarily. To do so we need to add `file` proprety inside `db` property in _`/server/datasources.json`_.

Ok, example:
```
"db": {
    "name": "db",
    "connector": "memory",
    "file": "repertoire.json"
}
```

<br />

### Setup a development mode

We do this by installing `nodemon` as a dev dependency:

`$ npm install --save-dev nodemon`

And creating a script `dev` inside _`/package.json`_:

```
"scripts"{
	"dev": "nodemon server/server.js --watch common --watch server"
	...
}
```

After that we can execute dev-script by running:

`$ npm run dev`

When running in develpoment mode the server will be automatically restarted when there are changes detected in the _`/common`_ or _`/server`_ directories. To know more about `nodemon` see [Nodemon Documentation](https://github.com/remy/nodemon#nodemon).

<br />

### Discovery models from relational databases

- Setup your mysql data in _`/server/datasources.json`_ file:

```
{
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "accountDs": {
    "host": "mysqlServerName",
    "port": 3306,
    "database": "databaseName",
    "username": "username",
    "password": "password!",
    "name": "repertoireDB",
    "connector": "mysql"
  }
}
```

- Create the models folder if doesn't exist:

_`/common/models`_

- Create `script.js` on _`/project/server/bin`_ folder to discover and build models:

```
var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.accountDs;

function schemaCB(err, schema) {
  if(schema) {
    console.log("Auto discovery success: " + schema.name);
    var outputName = outputPath + '/' +schema.name + '.json';
    fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputName);
      }
    });
  }
  if(err) {
    console.error(err);
    return;
  }
  return;
};

dataSource.discoverSchema('tableName',{schema:'schemaName'},schemaCB);
```


