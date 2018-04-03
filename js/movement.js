function movement(x_inc, y_inc) {
    let x = parseFloat(c.getAttribute("cx")) + x_inc
    let y = parseFloat(c.getAttribute("cy")) + y_inc

    c.setAttribute("cx", x)
    c.setAttribute("cy", y)

}

var move = null

function start_move() {
    move = setInterval(function () { movement(x_increment, y_increment) }, 1)
}

function start_rebound() {
    let x_r = x_increment
    let y_r = y_increment

    x_increment = (Math.round(x_r * 2) / 2) * -1
    y_increment = (Math.round(y_r * 2) / 2) * -1

    collision_flag = false

}

start_move()
