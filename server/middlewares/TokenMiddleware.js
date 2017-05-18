import jsonwebtoken from "jsonwebtoken";

import {secretKey} from "./../config";

const TokenMiddleware = {};

TokenMiddleware.create = function (user) {
    const {_id, name, username} = user;
    return jsonwebtoken.sign({_id, name, username}, secretKey, {expiresIn: '500m'});
};


TokenMiddleware.check = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jsonwebtoken.verify(token, secretKey, function (err, decoded) {
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

export default TokenMiddleware;
