import express from "express"
import cors from "cors";
import fs from "fs";
const app = express();
app.use(cors());
app.use(express.json());


app.post("/", (req, res) => {
    let data = req.body.text;
    fs.appendFile("output.txt", `${data} \n`, (err) => {
        if (err) {
            res.status(500);
        }
        res.json({ message: "File saved!"});
    })

    })




app.listen(3200);