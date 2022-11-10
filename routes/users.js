const {Router} = require('express')
const showRouter = Router()
const db = require('sequelize')
const {User, Show} = require("../models/Index")

showRouter.get("/users", async(req, res) => {
    try {
        const allUsers = await User.findAll();
        res.send(allUsers)
    }
    catch (error) {
        res.send(error)
    }
})

showRouter.get(`/users/:id`, async(req,res) => {
    try {
        const oneUser = await User.findOne();
        res.send(oneUser)
    }
    catch (error) {
        res.send(error)
    }
})

showRouter.get('/users/:id/shows'), async(req,res) => {
    try{
        const allUserShows = await Show.findAll(User.findByPk(req, {include: { model: Show }}));
        res.send(allUserShows)
    }
    catch (error) {
        res.send(error)
    }
}

module.exports = userRouter;