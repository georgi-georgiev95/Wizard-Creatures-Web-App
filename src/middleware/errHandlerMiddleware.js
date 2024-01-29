const { getErrorMessage } = require('../utils/errHelpers');

exports.errHandler = (err, req, res) => {
    res.render('partials/404', {error: getErrorMessage(err)});
}