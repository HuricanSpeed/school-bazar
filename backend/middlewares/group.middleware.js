const check = (req, res, next) => {
    try {
        if(req.session.accountData.group === "admin") {
            next()
        } else{
            res.status(401).json({ success: false, message: "Authentication required" })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    check
}