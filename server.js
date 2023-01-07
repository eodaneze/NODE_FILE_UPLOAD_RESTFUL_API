const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const fileExtLimiter = require("./middleware/fileExtLimiter")
const fileSizeLimiter = require("./middleware/fileSizeLimiter")
const filePayloadExists = require("./middleware/filesPayloadExist")

const app = express();

app.use(express.json());
app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post("/upload", fileupload({ createParentPath: true }), 
filePayloadExists,
fileExtLimiter(['.png', '.jpg', '.gif', '.jpeg']),
fileSizeLimiter,

(req, res) => {
    const files = req.files;
    console.log(files);

    Object.keys(files).forEach(key => {
       const filepath = path.join(__dirname, 'files', files[key].name)
       files[key].mv(filepath, (err) => {
          if(err) return res.status(500).json({status: "error", message: err})
       })
    })
    return res.json({status: 'success', message: 'logged'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
