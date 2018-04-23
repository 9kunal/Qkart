 var gulp = require('gulp');
 var browserSync = require('browser-sync').create();
 var KarmaServer = require('karma').Server;

 gulp.task('RunTest', function(done) {
     new KarmaServer({
         configFile: __dirname + '/karma.conf.js',
         singleRun: true
     }, done).start();
 });

 gulp.task('Serve',['RunTest'] ,function() {
     browserSync.init({
         server: {
             //baseDir: "./",
             index: "./App/index.html"
             // The key is the url to match
             // The value is which folder to serve (relative to your current working directory)
             /*routes: {
                 "/node_modules": "node_modules",
                 "/assets": "assets",
                 "/DataStore": "DataStore"
             }*/
         },
         online: true
     });
 });

 gulp.task('default', ['Serve'], function() {
     gulp.watch("./App/**/*.*").on('change', browserSync.reload);
 });