const router = require("express").Router();
const path = require("path");

router.get("/transcript/:transcriptID", (req, res, next) => {
    const { transcriptID } = req.params;
    
    res.sendFile(path.join(__dirname, "static", "transcript", `${transcriptID}.html`));
})

module.exports = router;