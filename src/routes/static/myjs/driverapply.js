

$((function () {
    "use strict";
    var e = document.querySelectorAll(".bs-stepper"),
        n = $(".select2"),
        i = document.querySelector(".driverapply"),
        r = document.querySelector(".vertical-wizard-example"),
        t = document.querySelector(".modern-wizard-example"),
        o = document.querySelector(".modern-vertical-wizard-example");

    if (void 0 !== typeof e && null !== e)
        for (var l = 0; l < e.length; ++l)
            e[l].addEventListener("show.bs-stepper", (function (e) {
                for (var n = e.detail.indexStep, i = $(e.target).find(".step").length - 1, r = $(e.target).find(".step"), t = 0; t < n; t++) {
                    r[t].classList.add("crossed");
                    for (var o = n; o < i; o++)r[o].classList.remove("crossed")
                }

                if (0 == e.detail.to) {
                    for (var l = n; l < i; l++)
                        r[l].classList.remove("crossed");
                    r[0].classList.remove("crossed")
                }
            }));

    if (n.each((function () {
        var e = $(this);
        e.wrap('<div class="position-relative"></div>'),
            e.select2({
                placeholder: "Select value",
                dropdownParent: e.parent()
            })
    })), void 0 !== typeof i && null !== i) {
        var d = new Stepper(i);
        $(i).find("form").each((function () {
            $(this).validate()
        })),

            $(i).find(".btn-next").each((function () {
                $(this).on("click", (function (e) {
                    $(this).parent().siblings("form").valid() ? d.next() : e.preventDefault()
                }))
            })),

            $(i).find(".btn-prev").on("click", (function () {
                d.previous()
            })),

            $(i).find(".btn-submit").on("click", (function () {
                if ($(this).parent().siblings("form").valid()) {
                    // HERE
                    var btnblock = document.querySelector(".btn-submit")
                    btnblock.innerHTML = "Submitting..."
                    btnblock.disabled = "disabled"

                    const email = document.getElementById("email")
                    const discord = document.getElementById("discord")
                    const age = document.getElementById("age")
                    const country = document.getElementById("country")
                    const tmpprofile = document.getElementById("tmpprofile")
                    const hours = document.getElementById("hours")
                    const find = document.getElementById("find")
                    const inVTC = document.getElementById("inVTC")
                    const about = document.getElementById("about")
                    const accept = document.getElementById("accept")
                    const _token = "sabgmichevtcinsanodeathbeatletsbetopgthull"
                    const language = document.getElementById("english")

                    let games = []
                    const ets2 = document.getElementById("ets2")
                    const ats = document.getElementById("ats")

                    if (ets2.checked) {
                        games.push("ETS2")
                    }
                    if (ats.checked) {
                        games.push("ATS")
                    }

                    const option = {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            _token: _token,
                            email: email.value,
                            discord: discord.value,
                            age: age.value,
                            country: country.value,
                            tmpprofile: tmpprofile.value,
                            games: games,
                            hours: hours.value,
                            find: find.value,
                            inVTC: inVTC.value,
                            language: language.value,
                            about: about.value,
                            accept: accept.value
                        })
                    }

                    fetch("/apply/driver", option).then((body) => {
                        return body.json()
                    }).then((json) => {
                        console.log(json)
                        if (!json.error) {
                            Swal.fire({
                                title: "Success!",
                                text: "Application Submited Successfully!",
                                icon: "success",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                },
                                buttonsStyling: !1
                            }).then((d) => {
                                btnblock.innerHTML = "Submitted"
                                if (d.isConfirmed) {
                                    window.location = "/apply"
                                }
                            })
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: json.error,
                                icon: "error",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                },
                                buttonsStyling: !1
                            }).then(() => {
                                btnblock.innerHTML = "Error!"
                            })
                        }
                    }).catch((err) => {
                        console.log(err)
                        Swal.fire({
                            title: "Error!",
                            text: "Error Fetching Data!",
                            icon: "error",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            },
                            buttonsStyling: !1
                        }).then(() => {
                            btnblock.innerHTML = "Error!"
                        })
                    })
                }
            }))
    }

    if (void 0 !== typeof r && null !== r) {
        var c = new Stepper(r, { linear: !1 });
        $(r).find(".btn-next").on("click", (function () {
            c.next()
        })),

            $(r).find(".btn-prev").on("click", (function () {
                c.previous()
            })),

            $(r).find(".btn-submit").on("click", (function () {
                alert("Submitted..!!")
            }))
    }

    if (void 0 !== typeof t && null !== t) {
        var a = new Stepper(t, { linear: !1 });
        $(t).find(".btn-next").on("click", (function () {
            a.next()
        })),

            $(t).find(".btn-prev").on("click", (function () {
                a.previous()
            })),

            $(t).find(".btn-submit").on("click", (function () {
                alert("Submitted..!!")
            }))
    }

    if (void 0 !== typeof o && null !== o) {
        var u = new Stepper(o, { linear: !1 });
        $(o).find(".btn-next").on("click", (function () {
            u.next()
        })),

            $(o).find(".btn-prev").on("click", (function () {
                u.previous()
            })),

            $(o).find(".btn-submit").on("click", (function () {
                alert("Submitted..!!")
            }))
    }
}));