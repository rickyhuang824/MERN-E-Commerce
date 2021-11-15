const router = require("express").Router()
const {verifyTokenAndAuthorization} = require("./verifyToken")

router.put("/:id", verifyTokenAndAuthorization, (req, res)=>{
    
})

module.exports = router
