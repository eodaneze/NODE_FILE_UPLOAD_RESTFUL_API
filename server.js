const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(express.json());
app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", fileupload({ createParentPath: true }), (req, res) => {
    const files = req.files;
    console.log(files);
    return res.json({status: 'logged', message: 'logged'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
