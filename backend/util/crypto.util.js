const crypto = require('crypto-js')

const comparePass = (password, hash) => {
    const passwordHash = crypto.SHA256(password)
    const passwordHashStr = crypto.enc.Hex.stringify(passwordHash)
    if(passwordHashStr == hash) {
        return true
    } else {
        return false
    }
}

const hashPass = (password, hash) => {
    const passwordHash = crypto.SHA256(password)
    const passwordHashStr = crypto.enc.Hex.stringify(passwordHash)
    return passwordHashStr
}


module.exports = {
    comparePass,
    hashPass
}