const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  const isLoggedIn = false; //(req.get("Cookie").split(";")[1].trim().split("=")[1] == 'true');
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  // res.setHeader("Set-Cookie", "loggedIn=true;"); // Cookie
  User.findById('64d706f646338d0b9848c05b')
  .then(user => {

      req.session.isLoggedIn = true;
      req.session.user = user;
      // req.user = user;
    console.log('here')  
    })
    .catch(err => console.log(err));
  res.redirect("/");
};
