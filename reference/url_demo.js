const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// get serialized url
console.log(myUrl.href)

// host
console.log(myUrl.host)

// hostname (does not include port)
console.log(myUrl.hostname)

// path name
console.log(myUrl.pathname)

// serialized query
console.log(myUrl.search)

// params object
console.log(myUrl.searchParams)

// add param
myUrl.searchParams.append('abc', 123)
console.log(myUrl.searchParams)

// loop through params
myUrl.searchParams.forEach((value, name) => `${name}: ${value}`)