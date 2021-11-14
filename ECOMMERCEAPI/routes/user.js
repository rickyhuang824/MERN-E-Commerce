const router = require("express").Router()

router.get("/usertesting", (req, res) => {
    console.log("usertesting succeed");
})

router.post("/userposttest", (req, res) => {
    res.send(req.body.name);
})

module.exports = router
