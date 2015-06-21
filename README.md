#Gulp-vars

## Installation

Install via [npm](https://npmjs.org/package/gulp-vars):

```
npm install gulp-vars --save-dev
```

## Example

```js
var gulp = require('gulp');
var vars = require('gulp-vars');

gulp.task('default', function() {
    return gulp.src('./main.css')
        .pipe(vars())
        .pipe(gulp.dest('./out'));
});