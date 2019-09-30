const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

//@route GET api/users
//@desc  Reg user
//@access Public
router.post(
  "/",
  [
    check("name", "Required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more").isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);

    res.send("User Route");
  }
);
module.exports = router;
