//declare functions
function checkCollision(circle, rect) {
    var distX = Math.abs(circle.x - rect.x - rect.w / 2);
    var distY = Math.abs(circle.y - rect.y - rect.h / 2);

    if (distX > (rect.w / 2 + circle.r)) { return false; }
    if (distY > (rect.h / 2 + circle.r)) { return false; }

    if (distX <= (rect.w / 2)) { return true; }
    if (distY <= (rect.h / 2)) { return true; }

    var dx = distX - rect.w / 2;
    var dy = distY - rect.h / 2;
    return (dx * dx + dy * dy <= (circle.r * circle.r));
}



//observe the circle at each new (x,y), checking for collisions

var collision_flag = false

var targetNode = c

var config = { attributes: true };

var callback = function (mutationsList) {
    for (var mutation of mutationsList) {
        if (mutation.type == 'attributes') {

            let cx = Math.round(parseFloat(c.getAttribute("cx")))
            let cy = Math.round(parseFloat(c.getAttribute("cy")))
            let cr = Math.round(parseFloat(c.getAttribute("r")))
            let circle = { x: cx, y: cy, r: cr }

            function collisionLoop() {
                for (i = 0; i < e_list.length; i++) {
                    if (checkCollision(circle, e_list[i])) {
                        collision_flag = true
                    }
                }
            }

            if(!collision_flag) {
                collisionLoop()
            } else if (collision_flag){
                start_rebound()
            }
            //console.log(collision_flag);

        }
    };
}

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);