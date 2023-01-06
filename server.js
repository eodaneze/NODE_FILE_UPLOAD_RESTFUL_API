const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express()

app.use(express.json())
app.get("" , (req,res) => {
     res.sendFile(path.join(__dirname, "index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on ${PORT}`))