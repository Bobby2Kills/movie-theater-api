const {Router} = require('express')
const showRouter = Router()
const sequelize = require('sequelize')
const {User, Show} = require("../models/index")

//The Show Router should GET ALL shows from the database using the endpoint /shows
showRouter.get("/", async(req, res) => {
    try {
        const allShows = await Show.findAll();
        res.send(allShows)
    }
    catch (error) {
        res.send(error)
    }
})

//The Show Router should GET one show from the database using an endpoint.
showRouter.get(`/:id`, async(req,res) => {
    try {
        const oneShow = await Show.findByPk(req.params.id);
        res.send(oneShow)
    }
    catch (error) {
        res.send(error)
    }
})

// The Show Router should get shows of a specific genre using an endpoint.
showRouter.get(`/genre/:genre`, async(req,res) => {
    try {
        const showGenre = await Show.findAll({ 
            where: {
                genre: req.params.genre
            }
        });
            res.send(showGenre)
    }
    catch (error) {
        res.send(error)
    }
})

// The Show Router should update a rating on a specific show using an endpoint.
showRouter.put(`/:id/ratings/:rating`, async(req,res) =>{
    try{
        const show = await Show.findByPk(req.params.id)
        show.set({rating: req.params.rating})
        await show.save()
        res.send(show)
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = showRouter;