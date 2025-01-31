var a =  slugify = require('slugify')
console.log(a)

let c = slugify('some string') // some-string
console.log(c)
// if you prefer something other than '-' as separator
 const d = slugify('some string', '_')  // some_string
    console.log(d)