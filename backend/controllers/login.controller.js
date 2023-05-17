const User = require("../models/user.model")
const databaseUtil = require("../util/database.util")

const cryptoUtil = require("../util/crypto.util")

const login = (req, res, next) => {
    try {
        databaseUtil.findUser(req.body.username).then(result => {
            if(!result) {
                res.status(401).json({success: false, message: "Invalid username or password"});
            } else {
                if(cryptoUtil.comparePass(req.body.password, result.dataValues.password)){
                    if(result.dataValues.active > 0) {
                        let accountDetails = result.dataValues
                        delete accountDetails.password

                        req.session.logged = true
                        req.session.accountDetails = accountDetails
                        
                        res.status(200).json({success: true, message: "Logged in successfully"})
                    } else {
                        res.status(401).json({success: false, message: "Your account isn't approved yet"});
                    }
                } else {
                    res.status(401).json({success: false, message: "Invalid username or password"});
                }
            }
        })
    } catch (error) {
        next(error)
    }
}

const register = (req, res, next) => {
    try {
        databaseUtil.findUser(req.body.username).then(result => {
            if (result) {
                res.status(409).json({ success: false, message: "Username or email already exists" })
            } else {
                User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: cryptoUtil.hashPass(req.body.password),
                    telnumber: req.body.telnumber
                })
                res.status(200).json({success: true, message: "Your account has been registred, wait until administrator approves you"})
            }
        })
    } catch (error) {
        next(error)
    }
}

const logout = (req, res, next) => {
    try {
        req.session.destroy()
        res.status(200).json({ success: true, message: "Logged out successfully" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    login,
    register,
    logout
}