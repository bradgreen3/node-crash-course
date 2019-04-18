const path = require('path')

//path_demo.js
console.log(path.basename(__filename))

//Users/brad/workspace/node_crash_course/reference
console.log(path.dirname(__filename))

//.js
console.log(path.extname(__filename))

// root: '/',
// dir: '/Users/brad/workspace/node_crash_course/reference',
// base: 'path_demo.js',
// ext: '.js',
// name: 'path_demo' }
console.log(path.parse(__filename))

//Users/brad/workspace/node_crash_course/reference/test/hello.html'
console.log(path.join(__dirname, 'test', 'hello.html'))
