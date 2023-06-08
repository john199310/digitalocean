// const express = require("express");
// const router = express.Router();
// const aaaa = require('../models/userSchema.js');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const aaaa = require('./auth');

// router.get("/", (req, res, next) => {
//     res.json({ message: "Hey! This is your server res!" });
//     next();
//   });
  
//   // register endpoint
//   router.post("/register", (req, res, next) => {
//     // hash the password
//     bcrypt
//       .hash(req.body.password, 10)
//       .then((hashedPassword) => {
//         // create a new user instance and collect the data
//         const user = new aaaa({
//           email: req.body.email,
//           password: hashedPassword,
//         });
  
//         // save the new user
//         user
//           .save()
//           // return success if the new user is added to the database successfully
//           .then((result) => {
//             res.status(201).send({
//               message: "User Created Successfully",
//               result,
//             });
//           })
//           // catch erroe if the new user wasn't added successfully to the database
//           .catch((error) => {
//             res.status(500).send({
//               message: "Error creating user",
//               error,
//             });
//           });
//       })
//       // catch error if the password hash isn't successful
//       .catch((e) => {
//         res.status(500).send({
//           message: "Password was not hashed successfully",
//           e,
//         });
//       });
//   });
  
//   // login endpoint
// router.post("/login", (req, res, next) => {
// // check if email exists
// aaaa.findOne({ email: req.body.email })

//     // if email exists
//     .then((user) => {
//     // compare the password entered and the hashed password found
//     bcrypt
//         .compare(req.body.password, user.password)

//         // if the passwords match
//         .then((passwordCheck) => {

//         // check if password matches
//         if(!passwordCheck) {
//             return res.status(400).send({
//             message: "Passwords does not match",
//             error,
//             });
//         }

//         //   create JWT token
//         const token = jwt.sign(
//             {
//             userId: user._id,
//             userEmail: user.email,
//             },
//             "RANDOM-TOKEN",
//             { expiresIn: "24h" }
//         );

//         //   return success res
//         res.status(200).send({
//             message: "Login Successful",
//             email: user.email,
//             token,
//         });
//         })
//         // catch error if password do not match
//         .catch((error) => {
//         res.status(400).send({
//             message: "Passwords does not match",
//             error,
//         });
//         });
//     })
//     // catch error if email does not exist
//     .catch((e) => {
//     res.status(404).send({
//         message: "Email not found",
//         e,
//     });
//     });
// });

// // free endpoint
// router.get("/free-endpoint", (req, res, next) => {
// res.json({ message: "You are free to access me anytime" });
// });

// // authentication endpoint
// router.get("/auth-endpoint", auth, (req, res, next) => {
// res.send({ message: "You are authorized to access me" });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./auth');

router.get("/", (req, res, next) => {
    res.json({ message: "Hey! This is your server res!" });
    next();
});
 // register endpoint
router.post("/register", (req, res, next) => {
    console.log('register part=======================>')
    console.log(req.body)

    // hash the password
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
                email: req.body.email,
                password: hashedPassword,
            });
             // save the new user
            user
                .save()
                // return success if the new user is added to the database successfully
                .then((result) => {
                    res.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                // catch error if the new user wasn't added successfully to the database
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                    next();
                });
        })
        // catch error if the password hash isn't successful
        .catch((e) => {
            res.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
            next();
        });
});
 // login endpoint
router.post("/login", (req, res, next) => {
    console.log('=====>sdsdfsdf');
    // check if email exists
    User.findOne({ email: req.body.email })
         // if email exists
        .then((user) => {
            console.log(user)
            // compare the password entered and the hashed password found
            bcrypt
                .compare(req.body.password, user.password)
                 // if the passwords match
                .then((passwordCheck) => {
                     // check if password matches
                    if(!passwordCheck) {
                        return res.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                        
                
                    }
                     // create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        {
                            expiresIn: "24h",
                            //path:'/api'
                        }

                        
                    );

                    res.cookie('token', token, { path: '/api' , secure: true, httpOnly: true });
                     // return success res
                    res.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password do not match
                .catch((error) => {
                    res.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                    // next();
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            res.status(404).send({
                message: "Email not found",
                e,
            });
            next();
        });
});
 // free endpoint
router.get("/free-endpoint",auth, (req, res, next) => {
    console.log('request .user ===> ', request.user)
    return res.status(400)
    res.json({ message: "You are free to access me anytime" });
    next();
});
 // authentication endpoint
router.get("/auth-endpoint", auth, (req, res, next) => {
    res.send({ message: "You are authorized to access me" });
    next();
});
module.exports = router;