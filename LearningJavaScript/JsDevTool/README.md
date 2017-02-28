= Learning JavaScript, 3rd Edition
== Chapter 2: JavaScripot Development Tools

When you start a new project, you'll want the following components:

A dedicated directory for your project; we call this the project root

A Git repository(git init)

A package.json file(npm init)

A Gulpfile(gulpfile.js; use the one here)

Gulp and Babel local packages(npm install --save-dev gulp gulp-babel babel-preset-es2015)

A .baberlrc file(contents:{"presets":["es2015"]})

An .eslintrc file(use eslint --init to create it, and edit to your preferences)

A subdirectory for Node source(es6)

A subdirectory for browser source(public/es6)



Once you have everything set up, your basic workflow will look like this:

Make logically consistent, related changes.

Run Gulp to test and lint your code

Repeat until your changes work and are lint-free.

Check to make sure you're not about to commit anything you don't want to(git status).If there are files you don't want in Git, add them to your .gitignore file.

Add all of your changes to Git(git add -A; if you don't want to add all the changes, use git add for each file instead.)

Commit your changes(git commit -m "<description of your changes>").


If you're given an file, example.js, you would put that file in es6, and run it with:

$gulp

$node dist/example.js



You can also skip the Gulp step and run it directly with babel -node:

$babel-node es6/example.js
