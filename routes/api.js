let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

let User = require('../model/user');
let Story = require('../model/story');
let token = require('../middlewares/token');

router.post('/signup', (req, res) => {
    let $user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    $user.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: user.name + ' created!'
        });
    });
});

router.post('/signin', function (req, res) {
    User.findOne({username: req.body.username}).select('name username password').exec(function (err, user) {
        if (err)
            res.json(err);
        if (!user) {
            res.json({message: 'User doesn\'t exist'});
        } else if (user) {
            let validPassword = user.comparePassword(req.body.password);
            if (!validPassword) {
                res.json({message: 'Invalid Password'});
            } else {
                hasil = token.create(user);
                console.log(hasil);
                res.json(hasil);
            }
        }
    });
});

router.use(token.check);

// router.get('/users', (req, res) => {
//     User.all((err, users, next) => {
//         if (err)
//             return next(err);
//         res.json(users);
//     });
// });

router.post('/story', (req, res) => {
    let userInformation = jwt.decode(req.query.token);
    let story = {
        _creator: userInformation.id,
        story: req.body.story,
    }

    Story(story)
        .save()
        .then(story => {
            Story.find(story).populate({
                path: '_creator'
            }).then(story => {
                res.json(story);
            }).catch(err => {
                res.json(err);
            });
        })
        .catch(err => {
            res.json(err);
        });
});

router.get('/stories', (req, res) => {
    Story.all(function (err, stories) {
        res.json(stories);
    })
});

module.exports = router;
