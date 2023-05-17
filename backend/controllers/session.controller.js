const getUser = (req, res, next) => {
    res.status(200).json({success: true, message: 'Successfully retrieved data', data: {logged: req.session.logged, accountDetails: req.session.accountDetails}});
}

module.exports = {
    getUser
}