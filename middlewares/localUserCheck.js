module.exports = (req, res, next) => {
    if(req.session.cookieColor){
        res.locals.cookieColor = req.session.cookieColor
    }
    next()
}