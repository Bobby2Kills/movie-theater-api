const express = require('express')
const app = express()
const port = 3000;
const seed = require('./seed')
const userRouter = require("./routes/users")
const showRouter = require("./routes/shows")
const db = require('sequelize');

app.use(express.json())
app.use("/users", userRouter);  // want this page to use the userRouter & the showrouter, however /users and /shows are already taken up within their route
app.use("/shows", showRouter)



app.listen(port, async() => {
    await seed()
    console.log(`server listening at http://localhost:${port}`);
    })