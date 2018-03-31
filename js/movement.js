    //handle movement
    max_increment = 5
    x_increment = 0
    y_increment = 0

    setInterval(function () {
        let x = parseFloat(c.getAttribute("cx")) + x_increment
        let y = parseFloat(c.getAttribute("cy")) + y_increment

        let x_ = parseFloat(c.getAttribute("cx")) + max_increment
        let y_ = parseFloat(c.getAttribute("cy")) + max_increment

        if (x_increment < max_increment) {
            c.setAttribute("cx", x)
        } else {
            c.setAttribute("cx", x_)
        }
        if (y_increment < max_increment) {
            c.setAttribute("cy", y)
        } else {
            c.setAttribute("cy", y_)
        }
    }, 10)