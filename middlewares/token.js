let jwt = require('jsonwebtoken');
let secretKey = require('../config').secretKey;

let token = module.exports = {};

token.create = function (user) {
    let token = jwt.sign({
        id: user._id,
        name: user.name,
        username: user.username
    }, secretKey, {expiresIn: '500m'});

    return token;
};


token.check = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                res.status(405)
                    .send({success: false, message: 'failed to authenticate user'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(405)
            .send({success: false, message: 'No Token Provided'});
    }
};
