const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/api/v2", (req, res, next) => {
    const { url } = req.query;

    fetch(`https://api.truckersmp.com/v2/${url}`).then((body) => {
        return body.json()
    }).then((json) => {
        res.send(json);
    }).catch((err) => {
        res.send({
            error: true,
            descriptor: String(err)
        })
    })
})

module.exports = router;