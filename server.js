const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express()

app.use(express.json())
app.get("" , (req,res) => {
     res.json({"message": "This is the home page"})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on ${PORT}`))