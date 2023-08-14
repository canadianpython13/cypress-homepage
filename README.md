

# plotly project

A test project for Plotly that tests an certain elements on the Cypress.io homepage.


## Installation

### Create project folder and package.json

This project will require installation of Cypress in a project folder of your choice. As a pre-requisite, you will need node.js and npm. 

### Install npm and node.js

The versions for this project are below:

```bash
  npm versions 9.x.x
  node.js 18.x and above
```

Verify the version you have using 
```bash 
node -v
npm -v
```
If you do not have them installed, you can use the installer located here https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Finally, install Cypress!

Proceed to install Cypress by running this directly:
```bash
npm install cypress
```
To verify all has been installed properly, run 
```bash
npx cypress open
```

### Clone project

After you have completed the above steps, ensure that you clone the project into your selected project folder

```bash
git clone https://github.com/canadianpython13/cypress-homepage.git
```

## Install dependencies 

```
cd cypress-homepage
npm i
```

## Some Observations

- Was not able to consistently test the clipboard function successfully
- Bonus test not successfully implemented -- needed to find a way to successfully trigger the element to have "jade" in the class name vs. "transparent"


## Optimizations

Some additional steps for best practices:

* put root url in cypress.config
* cases 2, 4 and 5 have repeatable steps that can be abstracted to a command--Example: get dropdown, get submenu item and click
