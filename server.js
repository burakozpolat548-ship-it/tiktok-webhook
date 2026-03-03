const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("==== WEBHOOK TETİKLENDİ ====");
    console.log("BODY:", req.body);

    const data = JSON.stringify(req.body) + "\n";
    fs.appendFileSync("gifts.txt", data);

    res.status(200).send("OK");
});

app.get("/", (req, res) => {
    res.send("Webhook aktif 🚀");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server çalışıyor");
});
