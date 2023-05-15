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