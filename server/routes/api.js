import express from "express";
import jsonwebtoken from "jsonwebtoken";

import TokenMiddleware from "./../middlewares/TokenMiddleware";
import User from "./../model/user";
import Story from "./../model/story";

const routes = express();

routes.get('/token/decode', (req, res) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let userInformation = jsonwebtoken.decode(token);
    console.log(userInformation);
    res.json(userInformation);
});

routes.post('/signup', (req, res) => {
    console.log(req.body);
    const {name, username, password} = req.body;
    const $user = new User({name, username, password});
    $user.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

routes.post('/signin', function (req, res) {
    const {username, password} = req.body;
    User.findOne({username}).select('name username password').exec(function (err, user) {
        if (err)
            res.json(err);
        if (!user) {
            res.json({message: 'User doesn\'t exist'});
        } else if (user) {
            let validPassword = user.comparePassword(password);
            if (!validPassword) {
                res.json({message: 'Invalid Password'});
            } else {
                let hasil = TokenMiddleware.create(user);
                res.json(hasil);
            }
        }
    });
});

routes.use(TokenMiddleware.check);

routes.post('/story', (req, res) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let userInformation = jsonwebtoken.decode(token);
    let story = {
        _creator: userInformation._id,
        story: req.body.story,
    };

    console.log(story);

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

routes.get('/stories', (req, res) => {
    Story.all((err, stories) => {
        res.json(stories);
    })
});

routes.put('/story/update/', (req, res) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let userInformation = jsonwebtoken.decode(token);
    let story = req.body;

    if (story._creator._id == userInformation._id) {
        Story.update({_id: story._id}, {$set: {story: story.story}}, false, function (err, data) {
            if (err) return res.json(err);
            else {
                return res.json(data);
            }
        });
    }
});

routes.delete('/story/delete/:_id', (req, res)=>{
   Story.delete(req.params._id, (err, data)=>{
      if(err) return res.json(err);
      else{
          return res.json(data);
      }
   });
});

export default routes;
