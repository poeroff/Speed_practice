const express = require("express");
const router = express.Router();
const Authcontrol = require("../control/auth");
const User = require("../model/user");
const { check } = require("express-validator");
const Validation = require("../middleware/validation");

router.post(
  "/signup",
  [
    check(
      "UserId",
      "Please enter a Id with only numbers and text and at least 6 characters."
    )
      .isLength({ min: 6 })
      .isAlphanumeric()
      .custom(async (value, { req }) => {
        const valid = await User.findAll();
        if (valid) {
          return User.findOne({ where: { accountId: value } }).then(
            (result) => {
              if (result) {
                return Promise.reject("userId exists");
              }
            }
          );
        }
      }),
    check(
      "Nickname",
      "Please enter a Nickname with only numbers and text and at least 3 characters."
    ).isLength({
      min: 3,
    }),
    check(
      "Password",
      "Please enter a password with only numbers and text and at least 6 characters."
    )
      .isLength({ min: 6 })
      .isAlphanumeric()
      .trim(),
    check("CheckPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.Password) {
          throw new Error("password have to match");
        }
        return true;
      }),
  ],
  Authcontrol.postsign
);

router.post("/login", Authcontrol.postlogin);

// router.get("/userSearch", Authcontrol.userSearch);
// router.post("/userCorrection", Authcontrol.userCorrection);

module.exports = router;
