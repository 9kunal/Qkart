# Qkart

The shopping cart SPA for custom made guitars. Made in AngularJS.

# Code Features
1. Has a custom derivative element to display the Hero panel of Guitars which randomly loads different guitar from dataset whenever the view is loaded again. This tag is known as `<random-guitar-panel></random-guitar-panel>`. It has an attribute `guitars` which takes input as a Data Model Object.

2. Has another custom derivative element `<guitar-display></guitar-display>`. It also has an attribute `gdata` which also takes Data Model Object as an Input. This element is used to display guitar items in a form of card view.

3. Other features and code design includes - Factory Services and general Controllers and Views. 

4. The app does not require any Database as all data is seeded in a Guitars.json file in the DataStore directory. 

# Installation and RUN.

* Requires Nodejs and npm to install, build, test and run.

1. Clone the repo.
2. Enter `npm install` into the directory.
3. Enter `npm start` to start the local http server.

NOTE: If you are using `npm start` command please make sure you have Node version <= 7.6.0. Else you can start the local web server using the gulp as written below.

# Build, Test and Run

1. Enter `npm start` to start the local http server.

OR

1. Also, you can use gulp but make sure you have gulp-cli installed globally. To install gulp-cli globally use following command.
`npm install gulp-cli -g`
2. And then you can run `gulp` from the repo's base directory.

# Test

1. Enter `npm test` into the base directory. Or you can enter `karma start` into the base directory.
2. If chrome not installed then paste the link from console to the browser inorder to connect to Karma Server.

# Notes
The application uses Jasmine with karma and gulp as main developmental dependencies.

For any queries contact: kunalpurohit09@gmail.com.
