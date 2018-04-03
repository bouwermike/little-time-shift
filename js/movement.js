function movement(x_inc, y_inc) {
    let x = parseFloat(c.getAttribute("cx")) + x_inc
    let y = parseFloat(c.getAttribute("cy")) + y_inc

    let x_ = parseFloat(c.getAttribute("cx")) + max_increment
    let y_ = parseFloat(c.getAttribute("cy")) + max_increment

    if (x_inc < max_increment && x_inc > min_increment) {
        c.setAttribute("cx", x)
    } else {
        c.setAttribute("cx", x_)
    }
    if (y_inc < max_increment && y_inc > min_increment) {
        c.setAttribute("cy", y)
    } else {
        c.setAttribute("cy", y_)
    }
}

var move = null

function start_move() {
    move = setInterval(function () { movement(x_increment, y_increment) }, 10)
}

function start_rebound() {
    let x_r = x_increment
    let y_r = y_increment

    // if(x_increment > 0) {
    //     x_r = (x_increment * -1) - 0.5
    // } else if(x_increment < 0) {
    //     x_r = (x_increment * -1) - 0.5
    // } else {
    //     x_r = 0
    // }

    // if(y_increment > 0) {
    //     y_r = y_increment - 0.5
    // } else if(y_increment < 0) {
    //     x_r = x_increment + 0.5
    // } else {
    //     x_r = 0
    // }
  

    x_increment = (Math.round(x_r * 2) / 2) * -1
    y_increment = (Math.round(y_r * 2) / 2) * -1

    collision_flag = false


}
start_move()
