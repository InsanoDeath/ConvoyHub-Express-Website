class express {
    init(db) {
        const express = require("express")
        const app = new express()
        const path = require("path")
        const fs = require("fs")
        const config = require("../config.json")
        const cookieParser = require("cookie-parser")

        app.set("view-engine", "ejs")

        // MIDDLE WARES
        app.use(express.static(path.join(__dirname, "routes", "static")))
        app.use(express.json())
        app.use(express.urlencoded({ extended: false }))
        app.use(cookieParser())

        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            next()
        })

        const routes = fs.readdirSync("./src/routes").filter(r => r.endsWith(".js"))
        for (let route of routes) {
            const authRoute = require(`./routes/${route}`)
            app.use("/", authRoute)
        }

        // app.use((req, res, next) => {
        //     const err = new Error("Page Not Found")
        //     err.status = 404
        //     next(err)
        // })

        // app.use((err, req, res, next) => {
        //     res.status(err.status || 500)

        //     if (err.status == 404) {
        //         return res.render("404.ejs", { error: err, footer: config.Footer })
        //     } else if (err.status == 403) {
        //         return res.render("403.ejs", { error: err })
        //     } else if (err.status == 401) {
        //         return res.render("401.ejs", { error: err })
        //     } else {
        //         try {
        //             return res.send({ error: err.status, message: err.message })
        //         } catch { }
        //     }
        // })

        const port = process.env.PORT || config.express.PORT
        const server = app.listen(port, async () => {
            console.log(`Listennig to port ${port} `)
        })
        server.setTimeout(0)
    }
}

module.exports = express