const check = (req, res, next) => {
    try {
        if(req.session.logged) {
            next()
        } else{
            res.status(401).json({ success: false, message: "Authentication required" })
        }
    } catch (error) {
        next(error)
    }
}

const checkAdmin = (req, res, next) => {
    try {
        if(req.session.logged) {
            if(req.session.accountDetails.group == 'admin'){
                next()
            } else {
                res.status(401).json({ success: false, message: "Authentication required" })
            }
        } else{
            res.status(401).json({ success: false, message: "Authentication required" })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    check,
    checkAdmin
}