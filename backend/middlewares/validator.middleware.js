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
    body('name').exists().trim().isLength({ min: 2, max: 40 }).withMessage('must be at least 2 chars long'),
    body('price').exists().trim(),
    body('description').exists().trim(),
    body('state').exists().trim(),
    body('grade').exists().trim(),
    body('place').exists().trim(),
    body('subject').exists().trim(),
    body('image').exists().trim(),
]

const getPostValidation = [
    body('id').exists().trim().isInt()
]

const accountApproveValidation = [
    body('id').exists().trim().isInt()
]

const accountDeleteValidation = [
    body('id').exists().trim().isInt()
]

const removePostValidation = [
    body('id').exists().trim().isInt()
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


const addpost = [...postValidation, (req, res, next) => {
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

const removePost = [...removePostValidation, (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, message: "Bad Request", errors: errors.array() })
    }
    else {

        next()
    }
}]

const getpost = [...getPostValidation, (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, message: "Bad Request", errors: errors.array() })
    }
    else {

        next()
    }
}]

const accountApprove = [...accountApproveValidation, (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, message: "Bad Request", errors: errors.array() })
    }
    else {

        next()
    }
}]

const accountDelete = [...accountDeleteValidation, (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json({ success: false, message: "Bad Request", errors: errors.array() })
    }
    else {

        next()
    }
}]

module.exports = {
    login,
    register,
    addpost,
    getpost,
    accountApprove,
    removePost,
    accountDelete
}