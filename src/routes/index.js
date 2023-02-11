const router = require("express").Router();
const fetch = require("node-fetch");
const fs = require("fs");
const maindb = require("../../getdata");

router.get("/", (req, res, next) => {
    const vtcMembers = fs.readFileSync("vtc.json", "utf-8")
    const { members, members_count } = JSON.parse(vtcMembers).response;

    const data = {
        drivers: Math.round(Math.floor(members_count / 10) * 10) || 0,
        discord: 0,
        countries: 0
    }

    const VTCID = [];
    members.forEach(u => {
        VTCID.push(u.user_id);
    })
    const mainMembers = maindb.get("members") || [];
    const countryName = [];
    const allMembers = mainMembers.filter(f => {
        if(VTCID.includes(f.TMPID)) {
            if(!countryName.includes(f.country)) {
                countryName.push(f.country);
                data.countries++;
            }
        }
    })

    fetch("https://discord.com/api/guilds/969647038138572881?with_counts=true", {
        headers: {
            "authorization": `Bot ${process.env.TOKEN}`
        }
    }).then((body) => {
        return body.json()
    }).then((json) => {
        const { approximate_member_count } = json;
        data.discord = (Math.floor(approximate_member_count / 10)) * 10;
    }).catch((err) => {
        console.log(err)
    }).then(() => {
        res.render("index.ejs", { data: data });
    })
})

router.get("/about", (req, res, next) => {
    res.render("about.ejs");
})

router.get("/team", (req, res, next) => {
    const members = maindb.get("members") || [];
    const vtcStaff = members.filter(f => f.isVTCStaff)
    vtcStaff.sort((a, b) => {
        return a.roleID - b.roleID;
    })

    res.render("team.ejs", { staff: vtcStaff });
})

router.get("/rules", (req, res, next) => {
    res.render("rules.ejs");
})

router.get("/drivershub", (req, res, next) => {
    res.redirect("https://drivershub.convoyhub.in/");
})

router.get("/policy", (req, res, next) => {
    res.render("policy.ejs");
})

router.get("/tos", (req, res, next) => {
    res.render("tos.ejs");
})

module.exports = router;