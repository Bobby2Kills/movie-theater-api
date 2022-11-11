const {Router} = require('express')
const showRouter = Router()
const sequelize = require('sequelize')
const {User, Show} = require("../models/index")

showRouter.get("/", async(req, res) => {
    try {
        const allShows = await Show.findAll();
        res.send(allShows)
    }
    catch (error) {
        res.send(error)
    }
})

showRouter.get(`/id/:id`, async(req,res) => {
    try {
        const oneShow = await Show.findByPk(req.params.id);
        res.send(oneShow)
    }
    catch (error) {
        res.send(error)
    }
})

showRouter.get(`/genre/:genre`, async(req,res) => {
    try {
        const showGenre = await Show.findAll({ 
            where: {
                genre: req.params.genre
            }
        });
            console.log(showGenre)
            res.send(showGenre)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = showRouter;