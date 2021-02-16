exports.processAPIError = (err, req, res, next) => {
    console.log( `Request to route [${req.path}] failed unexpectedly.` )
    err.message = `Request to route [${req.path}] failed unexpectedly.`
    next(err)
}