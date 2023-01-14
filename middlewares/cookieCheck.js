module.exports = (req, res, next) => {
    if(req.cookies.cookieColor){
        req.session.cookieColor = req.cookies.cookieColor
    }
    next()
}

