import express from "express";
import serveStatic from "serve-static";
import multer, { diskStorage } from "multer";
import path from "path";

const app = express();
const PORT = 3000;
const __dirname = path.resolve();
const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploads = multer({ storage: storage });

app.post("/upload", uploads.array("file"), (req, res) => {
    console.log(req.body);
    console.log(req.files);
    // res.json({message:'Successes'})
    res.status(200).send("Succesufully uploaded");
});

app.listen(PORT, () => {
    console.log(`Succesess on ${PORT}`);
});

// app.set('view engine','ejs');
// app.use(express.static('public'));
// app.use(express.urlencoded({extended:false}))
// app.use(express.json());
