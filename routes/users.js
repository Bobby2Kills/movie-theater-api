const {Router} = require('express')
const userRouter = Router()
const {User, Show} = require("../models/index")

userRouter.get("/", async(req, res) => {
    try {
        const allUsers = await User.findAll();
        res.send(allUsers)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get(`/:id`, async(req,res) => {
    try {
        const oneUser = await User.findByPk(req.params.id);
        res.send(oneUser)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get(':id/shows', async(req,res) => {
    try{
        const allUserShows = await Show.findAll(User.findByPk(req.params.id, {include: { model: Show }}));
        res.send(allUserShows)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = userRouter;