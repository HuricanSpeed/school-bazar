/* eslint-disable no-unused-vars */
/** @type {import("express").RequestHandler} */

const logger = require("../services/logger.service")

module.exports = (error, req, res, next) => { //todo add logs to file -> winston
  logger.errorLogger.error(`${error.status || 500} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  console.error(error.stack)
  res.status(500).json({ success: false, message: `An error was encountered when processing ${req.baseUrl}` })
}