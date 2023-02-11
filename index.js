require('dotenv').config()
const db = require("croxydb")

// EXPRESS INTIALIZE
const express = require("./src/express")
const Express = new express
Express.init(db)

// PLAYER ONLINE
// players()
async function players() {
    const fetch = require("node-fetch");
    const fs = require("fs");
    const VTCJSON = await fs.readFileSync("vtc.json", "utf8")
    const { members } = JSON.parse(VTCJSON).response;
    let onlineData = [];

    fetch("https://tracker.ets2map.com/v3/fullmap").then((body) => {
        return body.json()
    }).then(async (json) => {
        const { Data } = json;

        for (var i = 0; i < Data.length; i++) {
            const chedata = members.find(m => m.user_id == Data[i].MpId) || false
            if (chedata) {
                console.log(chedata)
                const push = {
                    name: chedata.username,
                    PlayerId: Data[i].PlayerId,
                    server: Data[i].ServerId,
                    game: currServer.game
                }
                onlineData.push(push);
                // if (currServer.game == "ETS2") {
                //     await fetch(`https://api.truckyapp.com/v2/map/ets2/resolve?x=${Data[i].X}&y=${Data[i].Y}`).then((body) => {
                //         return body.json()
                //     }).then((json) => {
                //         const { response } = json;

                //         const push = {
                //             name: chedata.username,
                //             PlayerId: Data[i].PlayerId,
                //             server: currServer.name,
                //             area: response.area,
                //             realName: response.poi.realName
                //         }
                //         onlineData.push(push);
                //     }).catch((err) => { })
                // } else {
                //     await fetch(`https://api.truckyapp.com/v2/map/ets2/resolve?x=${Data[i].X}&y=${Data[i].Y}`).then((body) => {
                //         return body.json()
                //     }).then((json) => {
                //         const { response } = json;

                //         const push = {
                //             name: chedata.username,
                //             PlayerId: Data[i].PlayerId,
                //             server: currServer.name,
                //             area: response.area,
                //             realName: response.poi.realName
                //         }
                //         onlineData.push(push);
                //     }).catch((err) => { })
                // }
            }
        }
    }).then(async () => {
        console.log(onlineData)
        // try {
        //     let embed = new Discord.MessageEmbed()
        //         .setColor("#0FEDF0")
        //         .setFooter(Footer)
        //         .setThumbnail("https://indiantruckers.company/logo.jpg")
        //         .setAuthor("InsanoDeath#0520", "https://drivershub.indiantruckers.company/avatars/1-image.png", "https://www.instagram.com/sameeraroraa/")
        //         .setTitle("ITVTC Player online on TruckersMP")

        //     for (var i = 0; i < onlineData.length; i++) {
        //         embed.addField(`${onlineData[i].name} (${onlineData[i].PlayerId})`, `In ${onlineData[i].server} ${onlineData[i].area ? "at" : "near"} ${onlineData[i].realName}`)
        //     }

        //     const onlineChannel = client.channels.cache.get("946380231495782420")
        //     const onlineMessage = await onlineChannel.messages.fetch("946392174864498738")
        //     onlineMessage.edit({ embeds: [embed] }).catch((err) => { })
        // } catch (error) {
        //     console.log(error)
        // }
    }).catch((err) => { })
}