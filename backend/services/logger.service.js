const winston = require("winston");

const errorLogger = winston.createLogger({
    level: "error", // Set log level to "error"
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json() // Log messages as JSON
    ),
    transports: [
      new winston.transports.File({ filename: "error.log" })
    ]
  });

module.exports = {
    errorLogger
}