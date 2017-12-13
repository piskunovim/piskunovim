---
layout: post
title: What you should have known about JS eight years ago
date: '2017-11-02 14:25:57+03:00'
categories: pblog
comments: true
---

> I want to notify, before we start, that we are not talking about implementation here, but just about some reasons why so many framework has been implemented and on what concepts they are based on.

### Introduction

This article is dedicated to those who find it difficult to navigate in the JavaScript(JS) world . To those who are looking for an answer to the question "why is it so difficult?" and doesn't know how to find the answer. 

Everything is very simple, if you know the reason. That's why I want to go back to the past with you and consider the reasons for the decisions that were made and what tools we received as a result of these decisions. Such an approach can help you to learn many of the mysteries of the universe. But not all... 

### Everything has a beginning

8 years ago(now is 2017) there was a man who taught people how to work with JS and opened the way of using JS on the server side. His name Ryan Dahl. One of the main problems of that time was that JavaScript is single-threaded. It's still single-threaded, nothing has been changed except an approach.

The solution to this problem comes from asynchrony. It allows JS to execute code in one thread, and we can not wait for the execution of a particular part of our application. And we can process the result of a specific query when it comes(in callback).

### Two-way binding

Meanwhile, programmers  already successfully using AJAX. Nothing new in this abbreviation, but naturaly they wanted to go further. At this step we can notice  a division to front-end and back-end for JS.

The next problem for Front-end was that in order to insert data from the JS object it is necessary to refer to a specific field, take its identifier and perform the substitution. And so we need to repeat this with each field/object that we want to change /substitute. This is a lot of code, which is at the same time pretty simple. 

Hence the idea of ​​a "two-way binding" came out, between the model and the view. They observe each other's changes. When data in the model changes, the view reflects the change, and when data in the view changes, the model is updated as well. So here comes a lot of frameworks around this idea: Angular, React, Knockout, Vue, Backbone and many others. They were all about the same thing, only with different points of view and approaches.

### Solving the problems of dynamic typisation

Time passed and programmers decided to solve another drawback of JS: dynamic typisation, which complicates debugging. So that was the idea of ​​TypeScript language, the essence of which: to compile a code written in TypeScript, into a secure "typified JS language". But it was not the only player on this playground.  CoffeeScript and Dart also tried to solve this problem, but the final purposes and implementations was different.

AngularJS - uses TypeScript (= strict typing). The project is compiling into the EcmaScript format that the programmer wishes.

> EcmaScript is the standard on which JS is based.

Two-way binding has not gone anywhere, projects have become stricter in terms of structure, but at the same time all minifactors / pre-processors/ builders have become part of the project. Now you can start the server and edit the application in Live mode.

Angular 1.x had a serious problem: it forced programmers to learn their markup language and program controllers in too clumsy and not easy way. For comparison, KnockoutJS did two-way binding it ten times simpler and clear.

What's different about VueJS: nowadays you can as well as Angular 4, that means using strict typing, builders and so on. At the same time you can add the vuejs file into your project and use it as a library (like Knockout) and it's easy and simple.

### NodeJS & ExpressJS

NodeJs is based on the Google V8 engine, which in fact is just able to do all asynchronous work. It's changing and improving with each version. On the base level  NodeJS is working with the file system, the buffer and http. It's quite low-level and in order to write something structured and not bulky it was a good challenge.
So previously it was used more for light services(it's not because no one can do something more, it's a common view on development with NodeJS of that time).

Then progammer wanted to go further and ExpressJS appeared. In fact, it's just a convenient structured framework which brought together all the common tasks that people trying to solve in NodeJS from time to time. Minimal and flexible. Make an endpoint with the simplest script takes minutes.

In the Back-end everything is much more prosaic.
 
There are ExpressJS and some group of developers tries to do something using it as a base. Because it is the most convenient way now. This groups extends ExpressJS capabilities, implements CMS, E-commerce and all sorts of other projects on its base.

### A Huge Number of Tools

The most difficult thing that exists in the world of JS is the awareness at what stage the tool appeared and why it was / is needed. There are a lot of jokes about this.

**NPM / Yarn** - package managers, appeared one after another, the last one implemented by Facebook. No difference. At all.

**Grunt / Gulp** - the tools some of functionality of which has already been taken by Angular (Webpack) and other frameworks. They cam compress scripts, compress images, build the final JS project. 

**Underscore / Lodash** - libraries that have a lot of things on board, a couple of years ago in advertisment purposes considered to work with arrays in the "best way". In fact, people live successfully without this libraries and don't lose anything. But there are some other "convenient / productive written functions" in them and you can find more information about it on their websites.

**RequireJS** - a framework that managed the libraries to be connected to the project. To do this job once and for all.

A lot of things comes into JS as imitation from other languages. It tries to come with lots of good approaches. But that's not so easy to describe in few words. You will never know everything aboug NodeJS, it's impossible like to know everything in programming sphere. But it's possible to become an expert in particular area in this huge world. 

Actually, now you know more.
