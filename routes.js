const routes = require('next-routes')

module.exports = routes()
.add('update', '/blogs/:id/edit')
.add('blogDetail', '/blogs/:slug')
.add('deneme', '/blogs/new')

// .add('userBlogs', '/blogs/dashboard')
// .add('blogEditor', '/blogs/new')
// .add('blogDetail', '/blogs/:slug')