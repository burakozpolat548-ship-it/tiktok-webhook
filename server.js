const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Gelen veri:", req.body);

    // Hediyeleri kaydet
    if (req.body.event === "gift") {
        const data = JSON.stringify(req.body) + "\n";
        fs.appendFileSync("gifts.txt", data);
    }

    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.send("Webhook aktif 🚀");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server çalışıyor");
});