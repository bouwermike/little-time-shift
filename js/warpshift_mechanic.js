var warp_shift_status = 0

    var counter = 0

    //Messaging for warp shift status
    setInterval(function () {
        if (warp_shift_status === 0) {
            document.getElementById("warp_shift_status").innerHTML = "Warp shift charging"
        } else if (warp_shift_status === 1) {
            document.getElementById("warp_shift_status").innerHTML = "Warp shift ready"
        } else if (warp_shift_status === 2) {
            document.getElementById("warp_shift_status").innerHTML = "Warp shift primed"
        }
    }, 100)

    //Counter for charging warp shift
    setInterval(function () {
        if (counter < 3 && warp_shift_status === 0) {
            counter++
        } else if (counter === 3 && warp_shift_status === 0) {
            warp_shift_status = 1
        }
    }, 1000)

    //Function to lay the prism 
    function layPrism() {
        if (warp_shift_status === 1) {
            p.classList.toggle("hidden")
            p.setAttribute("cx", c.getAttribute("cx"))
            p.setAttribute("cy", c.getAttribute("cy"))
            warp_shift_status = 2
            log("layPrism")
        } else if (warp_shift_status === 0) {
            document.getElementById("warn").innerHTML = "Warp shift is still charging!"
            setTimeout(function () {
                document.getElementById("warn").innerHTML = ""
            }, 1000)
        } else if (warp_shift_status === 2) {
            document.getElementById("warn").innerHTML = "You already have a prism in place!"
            setTimeout(function () {
                document.getElementById("warn").innerHTML = ""
            }, 1000)
        }
    }
    //Function to shift to the prism
    function shift() {
        if (warp_shift_status === 0) {
            document.getElementById("warn").innerHTML = "Warp shift is still charging!"
            setTimeout(function () {
                document.getElementById("warn").innerHTML = ""
            }, 1000)
        } else if (warp_shift_status === 1) {
            document.getElementById("warn").innerHTML = "No available prism!"
            setTimeout(function () {
                document.getElementById("warn").innerHTML = ""
            }, 1000)
        } else if (warp_shift_status === 2) {
            document.getElementById("warn").innerHTML = "Warping!"
            setTimeout(function () {
                document.getElementById("warn").innerHTML = ""
            }, 750)
            setTimeout(function () {
                c.setAttribute("cx", parseFloat(p.getAttribute("cx")))
                c.setAttribute("cy", parseFloat(p.getAttribute("cy")))
                p.classList.toggle("hidden")
                counter = 0
                warp_shift_status = 0
            }, 750)
        }
    }