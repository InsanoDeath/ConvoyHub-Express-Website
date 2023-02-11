const router = require("express").Router();
const db = require("croxydb");
const fetch = require("node-fetch");
const fs = require("fs");
const maindb = require("../../getdata");
const hubdb = require("../../hubdata");

let members;

start();
function start() {
    setTimeout(start, 1000 * 60);

    fetch("https://api.truckersmp.com/v2/vtc/56316/members").then((body) => {
        return body.json();
    }).then((json) => {
        if (!json.error) {
            const date = new Date()
            const month = Math.floor(date.getUTCMonth() + 1)
            const year = date.getUTCFullYear()

            if (members) {
                if (members < json.response.members.length) {
                    const dbdata = db.get("join" + month + "-" + year) || 0
                    db.set("join" + month + "-" + year, Math.floor(dbdata + (json.response.members.length - members)))
                    members = json.response.members.length
                } else if (members > json.response.members.length) {
                    const dbdata = db.get("left" + month + "-" + year) || 0
                    db.set("left" + month + "-" + year, Math.floor(dbdata + (members - json.response.members.length)))
                    members = json.response.members.length
                } else return
            } else {
                members = json.response.members.length
            }

            const data = JSON.stringify(json)

            try {
                fs.writeFileSync("vtc.json", data)
            } catch (error) {
                console.log(error)
            }

            // console.log(json.response.members)
            const mainMembers = maindb.get("members") || [];
            const hubMembers = hubdb.get("members") || [];
            
            const vtcMembers = [];

            json.response.members.forEach(m => {
                const userData = mainMembers.find(f => f.TMPID == m.user_id) || false;
                if(userData) {
                    userData.hub = hubMembers.find(f => f.TMPID == m.user_id) || false;
                    vtcMembers.push(userData);
                }
            })
            try {
                fs.writeFileSync("members.json", JSON.stringify(vtcMembers))
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log(json.error)
        }
    }).catch((err) => { })
}

router.get("/api/vtc", (req, res) => {
    const date = new Date()
    date.setMinutes(Math.round(date.getMinutes() + date.getTimezoneOffset() + (5.5 * 60)))

    const month = date.getMonth() + 1
    const fullYear = date.getFullYear()

    const date1 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month1 = date1.getMonth() + 1
    const fullYear1 = date1.getFullYear()
    const date2 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month2 = date2.getMonth() + 1
    const fullYear2 = date2.getFullYear()
    const date3 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month3 = date3.getMonth() + 1
    const fullYear3 = date3.getFullYear()
    const date4 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month4 = date4.getMonth() + 1
    const fullYear4 = date4.getFullYear()
    const date5 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month5 = date5.getMonth() + 1
    const fullYear5 = date5.getFullYear()
    const date6 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month6 = date6.getMonth() + 1
    const fullYear6 = date6.getFullYear()
    const date7 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month7 = date7.getMonth() + 1
    const fullYear7 = date7.getFullYear()
    const date8 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month8 = date8.getMonth() + 1
    const fullYear8 = date8.getFullYear()
    const date9 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month9 = date9.getMonth() + 1
    const fullYear9 = date9.getFullYear()
    const date10 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month10 = date10.getMonth() + 1
    const fullYear10 = date10.getFullYear()
    const date11 = new Date(date.setMonth(Math.floor(date.getMonth() - 1)))
    const month11 = date11.getMonth() + 1
    const fullYear11 = date11.getFullYear()

    
    const joindata1 = db.get("join" + month11 + "-" + fullYear11) || 0
    const joindata2 = db.get("join" + month10 + "-" + fullYear10) || 0
    const joindata3 = db.get("join" + month9 + "-" + fullYear9) || 0
    const joindata4 = db.get("join" + month8 + "-" + fullYear8) || 0
    const joindata5 = db.get("join" + month7 + "-" + fullYear7) || 0
    const joindata6 = db.get("join" + month6 + "-" + fullYear6) || 0
    const joindata7 = db.get("join" + month5 + "-" + fullYear5) || 0
    const joindata8 = db.get("join" + month4 + "-" + fullYear4) || 0
    const joindata9 = db.get("join" + month3 + "-" + fullYear3) || 0
    const joindata10 = db.get("join" + month2 + "-" + fullYear2) || 0
    const joindata11 = db.get("join" + month1 + "-" + fullYear1) || 0
    const joindata12 = db.get("join" + month + "-" + fullYear) || 0

    const leftdata1 = db.get("left" + month11 + "-" + fullYear11) || 0
    const leftdata2 = db.get("left" + month10 + "-" + fullYear10) || 0
    const leftdata3 = db.get("left" + month9 + "-" + fullYear9) || 0
    const leftdata4 = db.get("left" + month8 + "-" + fullYear8) || 0
    const leftdata5 = db.get("left" + month7 + "-" + fullYear7) || 0
    const leftdata6 = db.get("left" + month6 + "-" + fullYear6) || 0
    const leftdata7 = db.get("left" + month5 + "-" + fullYear5) || 0
    const leftdata8 = db.get("left" + month4 + "-" + fullYear4) || 0
    const leftdata9 = db.get("left" + month3 + "-" + fullYear3) || 0
    const leftdata10 = db.get("left" + month2 + "-" + fullYear2) || 0
    const leftdata11 = db.get("left" + month1 + "-" + fullYear1) || 0
    const leftdata12 = db.get("left" + month + "-" + fullYear) || 0

    res.send({
        membersCount: members,
        joins: {
            join1: joindata1,
            join2: joindata2,
            join3: joindata3,
            join4: joindata4,
            join5: joindata5,
            join6: joindata6,
            join7: joindata7,
            join8: joindata8,
            join9: joindata9,
            join10: joindata10,
            join11: joindata11,
            join12: joindata12
        },
        leaves: {
            left1: leftdata1,
            left2: leftdata2,
            left3: leftdata3,
            left4: leftdata4,
            left5: leftdata5,
            left6: leftdata6,
            left7: leftdata7,
            left8: leftdata8,
            left9: leftdata9,
            left10: leftdata10,
            left11: leftdata11,
            left12: leftdata12
        }
    })
})

router.get("/vtc.json", (req, res) => {
    const data = fs.readFileSync("vtc.json", "utf-8")
    res.send(data)
})

module.exports = router;