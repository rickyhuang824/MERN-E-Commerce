const router = require("express").Router()
const User = require("../models/User")
const { route } = require("./auth")
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")

// Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        const updatedUser =  await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }

})

// Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id) 
        res.status(200).json("User has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})

// Get
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...other} = user._doc
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const queryNew = req.query.new
        const users = queryNew 
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
       const data = await User.aggregate([
           { $match: { createdAt: { $gte: lastYear }}},
           { $project: { month: { $month: "$createdAt" }}},
           { $group: {
               _id: "$month",
               total: { $sum: 1 }
           }}
       ]) 

       res.status(200).json(data)
    } catch (err) {
       res.status(500).json(err) 
    }

})

module.exports = router
