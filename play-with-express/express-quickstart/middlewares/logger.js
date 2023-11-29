


module.exports = function (req, res, next) {
    const start = +new Date()
    const method = req.method
    const url = req.url
    res.on('finish', () => {
        const end = +new Date()
        const duration = end - start
        const message = `${method} ${url} took ${duration}ms \n`
        process.stdout.write(message)
    })
    next();
}
// e.g
// Validation
// Authentication
// Session
// ...
