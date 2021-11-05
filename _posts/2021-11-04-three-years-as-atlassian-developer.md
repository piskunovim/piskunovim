---
layout: post
title: Three years as Atlassian developer
slug: three-years-as-atlassian-developer
categories: pblog
date: '2021-11-4 23:27:38+03:00'
---


This big headline means that over the past few years I have had a great opportunity to experience all the delights and disadvantages of the ecosystem of Atlassian products, as well as their API. In particular, everything related to the cloud part of development.

"There are limitations" is the first thing any developer will tell you when it comes to Jira Сloud or Confluence Cloud. This simple statement can make you feel like an insurmountable obstacle is somewhere ahead. But, I propose to shortly figure out what exactly these words mean.

### Everything is in an <iframe>

All the executable code of your application will be delivered to the cloud product by adding the appropriate iframe element. In fact, this means that your code won't have access to the Jira/Confluence environment directly and interact with the interface. Instead, you should use a global AP object, location sections, and hooks to help organize your interactions in the most natural way. I hope to tell you more about this someday, but for now this is all you need to know.

### All operations with data through the API

That means that you have no connection to the product's instance database and cannot access data directly. The only way to get the data is coming through the official Atlassian Cloud API. As a result, if something is absent in the API then it is hard to achieve.

### But "limitation" doesn't mean "impossible"

It seems obvious, but I decided to highlight it. You can still implement the required feature, but you have to keep in mind the requirements that the product exposes to you.

You must know exactly which areas of the product are affected by your functionality and know what Attlassian's position on this issue is. Particularly, you shouldn't try to access those parts of the product that were restricted by the API. If you come across a question that hasn't been disclosed anywhere, you can write to the community or directly to the Atlassian team. The great thing here is you entering the territory of an extremely hospitable product, with a large community of developers who are always ready to help with your problems.

### Rely on Atlassian 

This simple thought means that if Atlassian Cloud services are not available, then your application won't be available either.

### So

We talked about just one fundamental idea that you need to understand before starting to implement any feature in the Atlassian Cloud world. But, of course, on the way of implementation, the developer encounters various challenges that must be overcome. It will be my pleasure to share some of the solutions to problems that you might encounter in future posts.

Please subscribe and...see you. :)
