const router = require("express").Router()
const countapi = require('countapi-js');
const db = require("../../getdata");
const { Canvas } = require("canvas-constructor/cairo")

router.get("/count", async (req, res) => {
    countapi.hit('vtc.convoyhub.in', 'count').then(async (result) => {
        let image;

        if (result.value < 9) {
            image = new Canvas(30, 40)
                .setColor('#000')
                .printRectangle(0, 0, 30, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        } else if (result.value < 99) {
            image = new Canvas(40, 40)
                .setColor('#000')
                .printRectangle(0, 0, 40, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        } else if (result.value < 999) {
            image = new Canvas(70, 40)
                .setColor('#000')
                .printRectangle(0, 0, 70, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        } else {
            image = new Canvas(90, 40)
                .setColor('#000')
                .printRectangle(0, 0, 90, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        }

        res.set({ "content-type": "image/png" })
        res.send(image)
    });
})

router.get("/count/:userID", (req, res, next) => {
    const { userID } = req.params

    const userData = db.get(String(userID))
    if(!userData) {
        const err = new Error("Page not found")
        err.status = 404
        return next(err)
    }

    countapi.hit('vtc.convoyhub.in', userData.username).then(async (result) => {
        let image;

        if (result.value < 9) {
            image = new Canvas(30, 40)
                .setColor('#000')
                .printRectangle(0, 0, 30, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        } else if (result.value < 99) {
            image = new Canvas(40, 40)
                .setColor('#000')
                .printRectangle(0, 0, 40, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        } else if (result.value < 999) {
            image = new Canvas(70, 40)
                .setColor('#000')
                .printRectangle(0, 0, 70, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        } else {
            image = new Canvas(90, 40)
                .setColor('#000')
                .printRectangle(0, 0, 90, 40)
                .setColor('#2190E3')
                .setTextFont('38px Impact')
                .printText(result.value, Math.floor(100 / 100), 35)
                .toBuffer();

        }

        res.set({ "content-type": "image/png" })
        res.send(image)
    });
})

module.exports = router