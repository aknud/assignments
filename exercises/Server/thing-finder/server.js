const express = require("express")
const app = express()
const PORT = 3091

app.use("/things", require("./thingRoutes"))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))