# Node.JS: CLI

> Our first CLI tool, with node.js

* * *

## Node.JS - what is it?

Originally, and you already know it, **javascript** is a language that runs in a *web browser*, which has at its disposal a *execution engine* for javascript.  
**Node.JS** is a software platform (a *runtime*) that allows javascript to be executed outside a browser, allowing us to use this language everywhere.

Node.JS provides javascript with the ability to interact with the system (e. g. manipulate files or execute subprograms), as well as a *modular* structure, which is based on the `npm` package manager, which has hundreds of thousands of modules (>850.000 in January 2019).

#### All over the place?

Although its main use is the back-end, where it competes with PHP, Java or Ruby, Node.JS is not limited to that, and also allows to build programs for the command line, mobile (*via* ReactNative, for example), desktop (*via* Electron), robotics or IOT (*via* Johnny-Five), and some others.

## Our first program with Node.JS

To discover Node.JS, we will start by developing a small command-line tool, solo.

This tool will be relatively simple, and will allow you to discover Node.JS, npm and its modules.

Once is not usual, I will guide you (but not too much, don't fuck around).

> NOTE: **We will not need to dock for this first (and fast) project - we will work entirely locally.

#### 1. Install Node.JS and `npm`.

Go to the[Node.JS official website] (https://nodejs.org/en/) and follow the instructions; npm will install itself jointly with node.  
Install the `11.6+` version.

### 2. Create your work environment

Create a GitHub repo for the project, and use the `npm init` command to initialize it all.

> NOTE: **to the question about the **entry point**, leave the default answer, "index.js"

### 3. Your first script

Create an `index.js` file at the root of your repo, and enter the following line of code:

javascript
console.log("Hello, Node.JS!");
```

Then, type the following command in your terminal:

	$ node .
	
There you go, you've created your first Node.JS script!

#### 4: Getting to the heart of the matter

Now, I'm letting go a little bit, and I'll leave you with a more complete statement.

You will code a tool that will receive an *email address* in parameter, like this: 

	myNodeCLITool leny@test.com
	
The program will check that the parameter is indeed a correctly formatted email address, then make an HTTP request to the service API[**Have I been pwned?**](https://haveibeenpwned.com), as[explained here](https://haveibeenpwned.com/API/v2#BreachesForAccount).  
You will then display the results of the query in a readable way in the terminal.

> ⚠️ **WARNING: ** your script will be executed in a specific context. It is recommended, for command line tools, to prefix **the entry point** (here, your `index.js` file) with the following line:

	#!/usr/bin/env node
	
> This special line at the beginning of an executable file is called a[**shebang**](https://fr.wikipedia.org/wiki/Shebang).

This will allow you to create a tool to check if web accounts linked to an email address have been compromised by security breaches. Always useful.

###### The npm packages to use

There are *a lot* packages on npm, including packages that already do *exactly* what I'm asking you.  
That is of course not the purpose of the manoeuvre.

In order to avoid getting lost in this mass of possibilities, I recommend the following packages: 

- [`email-validator`](https://www.npmjs.com/package/email-validator), to check an email address
- [`axios`](https://www.npmjs.com/package/axios), to make HTTP requests

##### Go further

Those of you who would like to make it a little prettier (and add a little challenge), can dig up the following packages:

- [`ora`](https://www.npmjs.com/package/ora), to display a *spinner* (loading animation) during the API request
- [`chalk`](https://www.npmjs.com/package/chalk), to add a little color to the outputs of your terminal
- [`figlet`](https://www.npmjs.com/package/figlet), to add a little pep to the outputs of your terminal

### 5. Prepare the publication and test it

You have been able to test your program throughout its development, but ideally you should give it a name, for example `pwned`, so that you can run it as follows in a terminal:

	$ pwned leny@test.com
	
To do this, you will need to document the `bin` property of your `package.json` file.  
You can also use the `npm link` command to test your tool locally before publishing it.

### 6. Publish on npm

Publish to npm is 

Translated with www.DeepL.com/Translator