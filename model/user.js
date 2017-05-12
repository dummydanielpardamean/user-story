let bcrypt = require('bcrypt-nodejs');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    username: {
        type: String,
        require: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        require: true,
        select: false
    }
});

UserSchema.pre('save', function (next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

let User = module.exports = mongoose.model('User', UserSchema);

User.all = callback => {
    User.find(callback);
};

User.save = callback => {
    User.save(callback);
};
