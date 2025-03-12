---
title: "Atlassian Cloud Development | Failed to register with the host"
slug: "atlassian-cloud-development-failed-to-register-with-the-host"
pubDate: 2021-11-13
tags: ["nodejs", "javascript"]
---

When working with Jira Cloud instances, you may encounter the following error:

```
Failed to register with host https://<your-instance-name>.atlassian.net
Add-on not registered; no compatible hosts detected
```

Here is a list of the main causes of this error:

### 1. The connection to the database wasn't established correctly.

Please make sure that the credentials for your database are set correctly. Unfortunately, a minor mistype or mistake could make this happen.

Also, check the schema of the AddonSettings table/collection. If the table was transferred manually, it may have been created incorrectly.

### 2. Instance with the given name is already registered.

You need to check if the AddonSettings table/collection includes the clientKey of your instance. If it is the case, you should remove this row/document so nothing can block your addon to be installed.

### 3. The endpoint for the /installed callback function wasn't configured correctly.

In short: after the application exchanges handshake(keys) with the Atlassian product instance, our application needs to declare its readiness to work. This can be done by responding with a 200 or 204 code status to a GET request to the /installed endpoint. This request is performed automatically. The only thing necessary to do is to check the existence of the corresponding endpoint in the project.

You can read more about this [here](https://developer.atlassian.com/cloud/jira/platform/connect-app-descriptor/#lifecycle).

### 4. Addon can be running on a network where there is no access to the internet and ngrok functions (for example, an internal network or a VPN with specific settings).

It is recommended to check the availability of the addon by checking the ngrok tunnel. In case of an access error, it is recommended to connect to another network, disable (in some cases enable) VPN, or contact the administrator of your network.

### 5. Certain versions of the atlassian-connect-express package have a problem with the urijs module.

In order for the error not to occur, it is necessary:

- Add the following version of urijs as a dependency: <br>
  <span style="color:#E53935">
  "urijs": "1.19.1"
  </span> <br>

- Install dependencies and run the application: <br>
  <span style="color:#E53935">
  npm install && npm start
  </span>

### 6. Problem with the triple slash after https.

If you noticed that there is a triple-slash after the protocol name then it's suggested to check if the full address of your instance is specified in the hosts section inside credentials.json file.

Bear in mind that the full address must include the protocol: "https://<your-instance-name>.atlassian.net/".

For example:

```
{
  "hosts": {
    "https://instance.atlassian.net/": {
      "product": "jira",
      "username": "",
      "password": ""
    }
  }
}
```

<hr style="margin: 35px 0 27px;">
I hope this one was helpful. <br><br>Naturally, these are only those cases that occur most often. If you have a case that you would like to share, please write about it in the comments or contact me by email (mail{at}piskunov.im).
