# fannypack-angular-templatecache
Official Fannypack task for concatenating and registering AngularJS templates in the $templateCache.

## Installation
`npm install fannypack-angular-templatecache --save-dev`

## Usage
```javascript
// gulpfile.js

var Fannypack = require('fannypack')

require('fannypack-angular-templatecache')

Fannypack.Config.ngTemplates = {
  // Config.root.src + 'src' dir
  src: 'templates',
  // Config.root.dest + 'dest' dir
  dest: 'assets/js',
  // Auto-run this task in dev mode?
  watchTask: true,
  codeTask: true,
  // Any options to pass into gulp-angular-templatecache
  options: {},
  // File extensions to watch
  extensions: ['html']
}

Fannypack.init()
```
