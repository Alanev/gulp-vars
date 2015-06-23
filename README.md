
Plugin for gulp to add support for the [W3C-style CSS variables](http://www.w3.org/TR/css-variables/) syntax.

## Installation
```
npm install gulp-vars --save-dev
```

## Gulpfile Example

```js
var gulp = require('gulp');
var vars = require('gulp-vars');

gulp.task('default', function() {
    return gulp.src('input/css')
        .pipe(vars())
        .pipe(gulp.dest('output/css'));
});
```

## Input Exaple

```css
:root{
  --variable: value;
}
element{
  color: var(--variable);
}
```

## Output Exaple

```css
element{
  color: value;
}
```

## License

MIT