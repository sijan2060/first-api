const express = require("express");
const router = express.Router();
router.post("/register", (req, res) => {
    const { name, email, password} = req.body;

    res.json({
        message: "User Registered ",
        user: {
            name,
            email,
        },
    });

});

module.exports = router;

