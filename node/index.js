var express = require("express");

var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var bodyParser = require("body-parser");
var flash = require("express-flash");

var app = express();

app.use(flash());
app.use(
  session({
    secret: "cat_on_keyboard",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // development only
  })
);
app.use(cookieParser("cat_on_keyboard"));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 1. store user names and passwords
var users = {
  id123: {
    id: 123,
    username: "user",
    password: "pw",
    firstName: "John",
    lastName: "Paul"
  },
  id1: {
    id: 1,
    username: "admin",
    password: "password",
    firstName: "admin",
    lastName: "admin"
  }
};

// 2. configure passport-local to validate an incoming username + pw
passport.use(
  new LocalStrategy(function(username, password, done) {
    for (userid in users) {
      var user = users[userid];
      if (user.username.toLowerCase() == username.toLowerCase()) {
        if (user.password == password) {
          return done(null, user);
        }
      }
    }
    return done(null, false, { message: "Incorrect credentials." });
  })
);

// 3. serialise users
passport.serializeUser(function(user, done) {
  if (users["id" + user.id]) {
    done(null, "id" + user.id);
  } else {
    done(new Error("CANT_SERIALIZE_THIS_USER"));
  }
});

// 4. de-serialise users.
passport.deserializeUser(function(userid, done) {
  if (users[userid]) {
    done(null, users[userid]);
  } else {
    done(new Error("THAT_USER_DOESNT_EXIST"));
  }
});

app.get("/api/courses", function(req, res) {
  res.send(JSON.stringify(COURSES));
});

app.get("/api/course/:id", function(req, res, next) {
  var courseFound = COURSES.filter(course => course.id == req.params.id);
  if (courseFound) {
    res.send(JSON.stringify(courseFound[0]));
  } else {
    next();
  }
});

app.post("/api/courses", function(req, res) {
  COURSES.push(req.body);
  console.log(JSON.stringify(req.body, 0, 2));
  res.send(JSON.stringify(req.body));
});

app.post("/api/login", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  console.log("login used");
  if (req.user) {
    res.send(JSON.stringify(req.user));
  } else {
    res.send({});
  }
});

app.get("/api/currentIdentity", checkAuthen);

function checkAuthen(req, res, next) {
  if (req.isAuthenticated()) {
    res.send(JSON.stringify(req.user));
  } else {
    res.end();
  }
}

app.put("/api/users/:id", function(req, res) {
  console.log(req.user);
  for (user in users) {
    console.log(user);
    console.log(user["id"]);
    console.log(req.params.id);
    console.log(req.user.id);
    if (user.id == req.params.id) {
      user = req.user;
    }
  }
  console.log(users);
});

app.get("/", function(req, res) {
  console.log(req.flash());
  res.send('<a href="/login">Login Here</a>');
});

app.get("/login", function(req, res) {
  var error = req.flash("error");
  var form = `<form action="/login" method="post">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <input type="submit" value="Log In"/>
                </div>
                </form>`;

  if (error && error.length) {
    form = "<b> " + error[0] + "</b><br/>" + form;
  }

  res.send(form);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/members",
    failureRedirect: "/login",
    successFlash: { message: "welcome back!" },
    failureFlash: true
  })
);

app.get("/members", authenticatedOrNot, function(req, res) {
  console.log(req.flash("success"));
  res.end("Secret members area only!");
});

function authenticatedOrNot(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.listen(4300);

const COURSES = [
  {
    id: 1,
    name: "angular lvl 1",
    level: "beginner",
    size: 6,
    instructor: "peter",
    price: 30,
    hours: 3,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  },
  {
    id: 2,
    name: "angular lvl 3",
    level: "advanced",
    size: 12,
    price: 45,
    hours: 3
  },
  {
    id: 3,
    name: "angular lvl 2",
    level: "intermediate",
    size: 12,
    instructor: "peter",
    price: 60,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  },
  {
    id: 4,
    name: "angular lvl 4",
    level: "expert",
    instructor: "peter",
    price: 90,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  }
];
