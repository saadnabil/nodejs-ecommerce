const { validationResult } = require('express-validator');

const ValidatorMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next(); // ✅ Continue to the `show` controller
}


module.exports = ValidatorMiddleware;