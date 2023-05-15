const { body, query, validationResult, oneOf } = require('express-validator');

const loginValidation = [
    body('username').exists().trim().isString().isLength({ min: 4, max: 32 }),
    body('password').exists().trim().isString().isLength({ min: 8, max: 32 })
]

const registerValidation = [
    body('username').exists().trim().isString().isLength({ min: 4, max: 32 }).withMessage('must be at least 4 chars long'),
    body('email').exists().trim().isEmail(),
    body('telnumber').exists().trim().isLength({min: 9}).withMessage('must be at least 9 chars long'),
    body('password').exists().trim().isString().isLength({ min: 8, max: 32 }).withMessage('must be at least 8 chars long')
]

const postValidation = [
    body('name').exists().trim().isString().isLength({ min: 2, max: 128 }).withMessage('must be at least 4 chars long'),
    body('price').exists().trim(),
    body('user').exists().trim(),
    body('description').exists().trim(),
    body('state').exists().trim(),
    body('grade').exists().trim()
]

const login = [...loginValidation, (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, message: "Bad Request", errors: errors.array() })
    }
    else {
        req.body.username = String(req.body.username)
        req.body.password = String(req.body.password)

        next()
    }
}]

const register = [...registerValidation, (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, message: "Bad Request", errors: errors.array() })
    }
    else {
        req.body.username = String(req.body.username)
        req.body.email = String(req.body.email)
        req.body.password = String(req.body.password)

        next()
    }
}]


const addpost = [...registerValidation, (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, message: "Bad Request", errors: errors.array() })
    }
    else {
        req.body.username = String(req.body.username)
        req.body.email = String(req.body.email)
        req.body.password = String(req.body.password)

        next()
    }
}]

module.exports = {
    login,
    register
}